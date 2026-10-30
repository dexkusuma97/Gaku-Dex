#!/usr/bin/env bash
# Buat MP3 narasi cerita (satu file per kalimat). Narator: voice ID pilihan pengguna. Key hanya dari lingkungan terminal.
set +x
set -euo pipefail
project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
filter="${1:-all}"; dry_run=false
if [[ "$filter" == '--dry-run' ]]; then dry_run=true; filter="${2:-all}"; fi
command -v node >/dev/null || { echo 'GAGAL: Node.js diperlukan.' >&2; exit 1; }
if [[ "$dry_run" != true ]]; then
  command -v curl >/dev/null || { echo 'GAGAL: curl diperlukan.' >&2; exit 1; }
  : "${ELEVENLABS_API_KEY:?Atur ELEVENLABS_API_KEY di lingkungan terminal.}"
fi
manifest="$(mktemp)"; response=''
cleanup(){ rm -f -- "$manifest"; [[ -z "$response" ]] || rm -f -- "$response"; }
trap cleanup EXIT
node - "$project_dir/dist/cerita-data.js" "$filter" > "$manifest" <<'NODE'
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync(process.argv[2],'utf8'),c);
for(const file of ['cerita-dongeng.js','cerita-tambahan.js','cerita-bersambung.js','cerita-nitamono.js','cerita-isold.js']){const extra=path.join(path.dirname(process.argv[2]),file);if(fs.existsSync(extra))vm.runInContext(fs.readFileSync(extra,'utf8'),c);}
const f=process.argv[3],sel=c.window.GAKU_CERITA_DATA.filter(s=>f==='all'||s.id===f);
if(!sel.length){console.error('GAGAL: cerita tidak ditemukan: '+f);process.exit(1);}
for(const s of sel){if(!/^[a-z0-9-]+$/.test(s.id))throw Error('ID tidak aman');let n=0;
 for(const b of s.bab)for(const k of b.kalimat){n++;
  console.log([s.id+'-'+n,process.env.CERITA_VOICE_ID||'r1KmysJdVYZjJCm4mL3b',JSON.stringify({text:k.tts||k.t.map(x=>x[1]||x[0]).join(''),model_id:'eleven_multilingual_v2',voice_settings:{speed:Number(process.env.ELEVENLABS_SPEED||0.85)}})].join('\t'));}}
NODE
mkdir -p -- "$project_dir/dist/assets/cerita"
failed=0
while IFS=$'\t' read -r audio_id voice_id payload; do
  target="$project_dir/dist/assets/cerita/$audio_id.mp3"
  if [[ -s "$target" ]]; then echo "LEWATI $audio_id.mp3 (sudah ada)"; continue; fi
  if [[ "$dry_run" == true ]]; then echo "RENCANA $audio_id.mp3 voice=$voice_id"; continue; fi
  response="$(mktemp "$project_dir/dist/assets/cerita/.audio-XXXXXX")"
  if ! result="$(printf 'header = "xi-api-key: %s"\n' "$ELEVENLABS_API_KEY" | curl --config - --silent --show-error --connect-timeout 15 --max-time 120 \
      --request POST "https://api.elevenlabs.io/v1/text-to-speech/$voice_id?output_format=mp3_44100_128" \
      --header 'Content-Type: application/json' --header 'Accept: audio/mpeg' \
      --data "$payload" --output "$response" --write-out $'%{http_code}\t%{content_type}')"; then
    echo "GAGAL $audio_id.mp3 (koneksi)" >&2; failed=1; rm -f -- "$response"; response=''; continue
  fi
  code="${result%%$'\t'*}"; mime="${result#*$'\t'}"
  if [[ "$code" == '200' && "$mime" == audio/* && -s "$response" ]]; then mv -- "$response" "$target"; response=''; echo "OK $audio_id.mp3"
  else echo "GAGAL $audio_id.mp3 HTTP $code" >&2; failed=1; rm -f -- "$response"; response=''; fi
done < "$manifest"
exit "$failed"
