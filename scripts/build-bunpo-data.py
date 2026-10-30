"""Compile reviewed N5/N4 lessons. No PDF reader or network is needed."""
import json,re
from pathlib import Path
root=Path(__file__).resolve().parents[1]
n5=json.loads((root/'data/bunpo-n5.json').read_text())
n4=json.loads((root/'data/bunpo-n4.json').read_text())
assert len({e['id'] for e in n5['lessons']})==len(n5['lessons'])
assert len({e['id'] for e in n4['lessons']})==len(n4['lessons'])
assert not {e['id'] for e in n5['lessons']}&{e['id'] for e in n4['lessons']}
assert not {e['id'] for e in n5['lessons']}&{e['concept'] for e in n4['lessons']}
for data in [n5,n4]:
 cats={c['id'] for c in data['categories']}
 assert [e['order'] for e in data['lessons']]==list(range(1,len(data['lessons'])+1))
 for e in data['lessons']:
  assert e['category'] in cats
  assert all(e[k].strip() for k in ['title','kana','romaji','meaning','explanation','note','subcategory'])
  assert len(e['examples'])>=2 and e['patterns']
  assert len(set(e['patterns']))==len(e['patterns'])
  assert len({x['jp'] for x in e['examples']})==len(e['examples'])
  for x in e['examples']:assert x['jp'] and x['kana'] and x['meaning'] and not re.search('[一-龯]',x['kana'])
  if e.get('table'):assert all(len(row)==len(e['table']['headers']) for row in e['table']['rows'])
source_index=json.loads((root/'data/bunpo-n4-review.json').read_text())
known={e['id']:e for e in n4['lessons']};n5_ids={e['id'] for e in n5['lessons']}
source_limits={s['id']:s['pages'] for s in source_index['sources']}
for row in source_index['decisions']:
 assert row['source'] in source_limits and all(1<=p<=source_limits[row['source']] for p in row['pages'])
 if row['target'].startswith('N5:'):assert row['target'][3:] in n5_ids
 elif not row['target'].startswith('NON:'):assert row['target'] in known
for e in n4['lessons']:
 assert e['sources'] and e['level']=='N4'
 for s in e['sources']:assert 1<=s['page']<=source_limits[s['id']]
bundle='/* Reviewed learning records; regenerate with scripts/build-bunpo-data.py. */\n'
for name,value in [('BUNPO_SOURCE',n5['source']),('BUNPO_CATEGORIES',n5['categories']),('BUNPO_DATA',n5['lessons']),('BUNPO_N4_CATEGORIES',n4['categories']),('BUNPO_N4_DATA',n4['lessons'])]:
 bundle+='const '+name+'='+json.dumps(value,ensure_ascii=False,separators=(',',':'))+';\n'
bundle+="function bunpoEntries(level=(typeof prefs!=='undefined'?prefs.level:'N5')){return level==='N4'?BUNPO_N4_DATA:BUNPO_DATA}\n"
bundle+="function bunpoCategories(level=(typeof prefs!=='undefined'?prefs.level:'N5')){return level==='N4'?BUNPO_N4_CATEGORIES:BUNPO_CATEGORIES}\n"
(root/'dist/bunpo-data.js').write_text(bundle)
print('Built Bunpo: N5',len(n5['lessons']),'N4',len(n4['lessons']))
