#!/usr/bin/env bash
set -euo pipefail
project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
cd -- "$project_dir"
python - <<'PY'
from pathlib import Path
import zipfile,os
ids=['bento','neko','toshokan','kikimimi','nezumi','hanasaka']
root=Path('dist/assets/cerita');names=[f'{id}-{i}.mp3' for id in ids for i in range(1,13)]
missing=[n for n in names if not (root/n).is_file() or not (root/n).stat().st_size]
if missing:raise SystemExit('BELUM LENGKAP: '+', '.join(missing))
with zipfile.ZipFile('cerita-audio-lanjutan.zip.tmp','w',zipfile.ZIP_STORED) as z:
 for n in names:z.write(root/n,n)
os.replace('cerita-audio-lanjutan.zip.tmp','cerita-audio-lanjutan.zip')
print('OK: 72 MP3 -> cerita-audio-lanjutan.zip. Kirim ZIP ini ke ChatGPT.')
PY
