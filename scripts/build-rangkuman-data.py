"""Generate the chapter index and five lazy-loaded chapter groups."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
data=json.loads((root/'data/rangkuman-minna.json').read_text());books=json.loads((root/'data/rangkuman-books.json').read_text())
assert [e['id'] for e in data['chapters']]==list(range(1,51))
out=root/'dist/assets/rangkuman';out.mkdir(parents=True,exist_ok=True)
# Only free chapter content belongs in Pages assets; paid chapters are served by D1.
for old in out.glob('chapters-*.json'):
 if old.name != 'chapters-01-10.json': old.unlink()
for start in [1]:
 group=[c for c in data['chapters'] if start<=c['id']<start+10]
 (out/f'chapters-{start:02}-{start+9:02}.json').write_text(json.dumps(group,ensure_ascii=False,separators=(',',':'))+'\n')
index=[{k:c[k] for k in ['id','title','goal','book']}|{'vocabCount':len(c['vocab']),'patternCount':len(c['patterns'])} for c in data['chapters']]
(root/'dist/rangkuman-data.js').write_text('/* Generated from data/rangkuman-minna.json and rangkuman-books.json. */\nconst RANGKUMAN_META='+json.dumps(data['meta'],ensure_ascii=False,separators=(',',':'))+';\nconst RANGKUMAN_INDEX='+json.dumps(index,ensure_ascii=False,separators=(',',':'))+';\nconst RANGKUMAN_BOOKS='+json.dumps(books,ensure_ascii=False,separators=(',',':'))+';\n')
print(f"Built {len(index)} chapters, one public group, {len(books)} books")
