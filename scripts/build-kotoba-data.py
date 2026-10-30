"""Generate the static Kotoba bundle from the reviewed, deduplicated source."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'data/kotoba-n5.json').read_text())
assert len({e['id'] for e in data['entries']})==len(data['entries'])
out='/* Source: data/kotoba-n5.json. Build: python scripts/build-kotoba-data.py */\n'
for key,name in [('meta','KOTOBA_META'),('sources','KOTOBA_SOURCES'),('categories','KOTOBA_CATEGORIES'),('entries','KOTOBA_DATA')]:
 out+=f'const {name}='+json.dumps(data[key],ensure_ascii=False,separators=(',',':'))+';\n'
(root/'dist/kotoba-data.js').write_text(out)
print(f"Built {len(data['entries'])} unique Kotoba entries")
# N4 is independent: keep the original N5 output byte-for-byte stable.
n4=json.loads((root/'data/kotoba-n4.json').read_text())
out='/* Source: data/kotoba-n4.json. Build: python scripts/build-kotoba-data.py */\n'
for key,name in [('meta','KOTOBA_N4_META'),('sources','KOTOBA_N4_SOURCES'),('categories','KOTOBA_N4_CATEGORIES'),('entries','KOTOBA_N4_DATA')]:
 out+=f'const {name}='+json.dumps(n4[key],ensure_ascii=False,separators=(',',':'))+';\n'
out+='const KOTOBA_N4_MERGED_IDS='+json.dumps(n4.get('mergedIds',{}),separators=(',',':'))+';\n'
(root/'dist/kotoba-n4-data.js').write_text(out)
print(f"Built {len(n4['entries'])} N4/A2 Kotoba entries")
