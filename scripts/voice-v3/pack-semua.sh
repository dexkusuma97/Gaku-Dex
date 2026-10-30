#!/usr/bin/env bash
set +x
set -euo pipefail
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"
node generate.cjs kaiwa --pack
node generate.cjs simulasi --pack
echo "Kirim kaiwa/kaiwa-audio.zip dan simulasi/simulasi-audio-baru.zip ke chat."
