#!/usr/bin/env bash
# Satu perintah untuk Termux: pasang kebutuhan, buat 80 MP3, lalu bungkus jadi kaiwa-audio.zip.
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.."
if command -v pkg >/dev/null; then pkg install -y nodejs curl zip >/dev/null; fi
if [[ -z "${ELEVENLABS_API_KEY:-}" ]]; then
  read -r -s -p 'ElevenLabs API key: ' ELEVENLABS_API_KEY; printf '\n'
  export ELEVENLABS_API_KEY
fi
bash scripts/generate-kaiwa-audio.sh all || echo 'Ada yang GAGAL; jalankan ulang, yang sudah jadi dilewati.'
unset ELEVENLABS_API_KEY
bash scripts/package-kaiwa-audio.sh
if [[ -d "$HOME/storage/downloads" ]]; then cp -f kaiwa-audio.zip "$HOME/storage/downloads/" && echo 'Salinan ada di folder Download.'; fi
