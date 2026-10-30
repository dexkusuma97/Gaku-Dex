#!/usr/bin/env bash
set +x
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.."
if [[ -z "${ELEVENLABS_API_KEY:-}" ]]; then
 read -r -s -p 'Masukkan API key ElevenLabs: ' ELEVENLABS_API_KEY
 printf '\n'
 export ELEVENLABS_API_KEY
fi
export CERITA_VOICE_ID="${CERITA_VOICE_ID:-r1KmysJdVYZjJCm4mL3b}"
for id in bento neko toshokan kikimimi nezumi hanasaka; do
 bash scripts/generate-cerita-audio.sh "$id"
done
bash scripts/package-cerita-audio.sh
