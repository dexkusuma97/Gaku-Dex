#!/usr/bin/env bash
# Bungkus MP3 hasil ElevenLabs jadi satu zip untuk diserahkan ke Codex. Tidak memakai API key.
set -euo pipefail
project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
dir="$project_dir/dist/assets/kaiwa"
count="$(find "$dir" -maxdepth 1 -name '*.mp3' -size +0 2>/dev/null | wc -l)"
[[ "$count" -gt 0 ]] || { echo 'GAGAL: belum ada MP3. Jalankan generate-kaiwa-audio.sh dulu.' >&2; exit 1; }
out="${1:-$project_dir/kaiwa-audio.zip}"
rm -f -- "$out"
(cd "$project_dir" && zip -qr "$out" dist/assets/kaiwa -x '*/.audio-*')
echo "OK $count MP3 -> $out"
echo 'Kirim file ini ke Codex; target: dist/assets/kaiwa/ (nama ID-N.mp3 sudah sesuai player).'
