"""Build the browser bundle from the reviewed Bunpo source records."""
import json
from pathlib import Path

root = Path(__file__).resolve().parents[1]
data = json.loads((root / 'data/bunpo-n5.json').read_text())
assert len({x['id'] for x in data['lessons']}) == len(data['lessons'])
bundle = '/* Reviewed source: data/bunpo-n5.json. Regenerate with scripts/build-bunpo-data.py. */\n'
for name, value in [('BUNPO_SOURCE', data['source']), ('BUNPO_CATEGORIES', data['categories']), ('BUNPO_DATA', data['lessons'])]:
    bundle += f'const {name}=' + json.dumps(value, ensure_ascii=False, separators=(',', ':')) + ';\n'
(root / 'dist/bunpo-data.js').write_text(bundle)
print(f"Built {len(data['lessons'])} Bunpo lessons")
