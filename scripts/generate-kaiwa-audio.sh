#!/usr/bin/env bash
# Run from any directory. Requires bash, node, curl. Never commit API credentials.
set +x
set -euo pipefail
project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
scenario_filter="${1:-all}"
dry_run=false
if [[ "$scenario_filter" == '--dry-run' ]]; then dry_run=true; scenario_filter="${2:-all}"; fi
command -v node >/dev/null || { echo 'GAGAL: Node.js diperlukan.' >&2; exit 1; }
if [[ "$dry_run" != true ]]; then
  command -v curl >/dev/null || { echo 'GAGAL: curl diperlukan.' >&2; exit 1; }
  : "${ELEVENLABS_API_KEY:?Atur ELEVENLABS_API_KEY di lingkungan terminal. Jangan taruh key di front-end.}"
fi
manifest="$(mktemp)"
response=''
cleanup(){ rm -f -- "$manifest"; [[ -z "$response" ]] || rm -f -- "$response"; }
trap cleanup EXIT
node - "$project_dir/dist/kaiwa-data.js" "$scenario_filter" > "$manifest" <<'NODE'
const fs=require('node:fs'),vm=require('node:vm');
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync(process.argv[2],'utf8'),c);
const all=c.window.GAKU_KAIWA_DATA,filter=process.argv[3],selected=all.filter(s=>filter==='all'||s.id===filter);
if(!selected.length){console.error('GAGAL: skenario tidak ditemukan: '+filter);process.exit(1);}
for(const s of selected){
 const audioId=s.audioId||s.id;
 if(!/^[a-z0-9-]+$/.test(audioId))throw Error('ID skenario tidak aman');
 s.lines.forEach((line,i)=>{
  const gender=line.gender||(line.who==='npc'?s.gender:'male');
  const female=gender==='female';
  const voice=female?'3321Alera3fXjEWjjbAX':'Bj4Malc5SZLoXfPtxRxH';
  console.log([audioId+'-'+(i+1),voice,JSON.stringify({text:line.jp,model_id:'eleven_multilingual_v2'})].join('\t'));
 });
}
NODE
mkdir -p -- "$project_dir/dist/assets/kaiwa"
failed=0
while IFS=$'\t' read -r audio_id voice_id payload; do
  target="$project_dir/dist/assets/kaiwa/$audio_id.mp3"
  if [[ -s "$target" ]]; then echo "LEWATI $audio_id.mp3 (sudah ada)"; continue; fi
  if [[ "$dry_run" == true ]]; then echo "RENCANA $audio_id.mp3 voice=$voice_id"; continue; fi
  response="$(mktemp "$project_dir/dist/assets/kaiwa/.audio-XXXXXX")"
  # Header key enters curl through stdin config, never through its argument list.
  if ! result="$(printf 'header = "xi-api-key: %s"\n' "$ELEVENLABS_API_KEY" | curl --config - --silent --show-error --connect-timeout 15 --max-time 120 \
      --request POST "https://api.elevenlabs.io/v1/text-to-speech/$voice_id?output_format=mp3_44100_128" \
      --header 'Content-Type: application/json' --header 'Accept: audio/mpeg' \
      --data "$payload" --output "$response" --write-out $'%{http_code}\t%{content_type}')"; then
    echo "GAGAL $audio_id.mp3 HTTP ${result%%$'\t'*} (koneksi)" >&2; failed=1; rm -f -- "$response"; response=''; continue
  fi
  http_code="${result%%$'\t'*}"
  mime="${result#*$'\t'}"
  if [[ "$http_code" == '200' && "$mime" == audio/* && -s "$response" ]]; then
    mv -- "$response" "$target"; response=''; echo "OK $audio_id.mp3"
  else
    echo "GAGAL $audio_id.mp3 HTTP $http_code (bukan audio yang valid)" >&2; failed=1; rm -f -- "$response"; response=''
  fi
done < "$manifest"
exit "$failed"
