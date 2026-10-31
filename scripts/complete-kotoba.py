"""Merge conservative orthographic duplicates and supply simple learning examples.
Keeps original imported data untouched. Run after build-kotoba-n4.py.
"""
import json,re,unicodedata,sys
from collections import Counter
sys.path.insert(0,str(__import__("pathlib").Path(__file__).resolve().parent/"lib"))
from kotoba_examples import load_authored,make_example
from pathlib import Path
R=Path(__file__).resolve().parents[1]
p=R/'data/kotoba-n4.json';d=json.loads(p.read_text())
def norm(s):return re.sub(r'[^\w]','',unicodedata.normalize('NFKC',s).lower())
def senses(e):return {norm(x) for x in re.split(r'[/;,]',e['meaning']) if len(norm(x))>2}
removed=[];out=[]
for e in d['entries']:
 # Only merge same reading with an identical Indonesian sense and an alternate
 # kana/katakana spelling. Different kanji are not automatically homophones.
 candidate=next((x for x in out if x['kana']==e['kana'] and x['category']==e['category'] and senses(x)&senses(e) and (not re.search('[一-龯]',x['jp']) or not re.search('[一-龯]',e['jp']))) ,None)
 if candidate:
  # Daily enrichment stays on its own card to retain original source accounting.
  if any(s['id']==13 for s in candidate['sources']+e['sources']):out.append(e);continue
  if e['meaning'] != candidate['meaning']: candidate['meaning'] += ' / '+e['meaning']
  candidate['aliases']=sorted(set(candidate['aliases']+e['aliases']+[e['jp']])-{candidate['jp']})
  candidate['readings']=sorted(set(candidate['readings']+e['readings']))
  candidate['sources']=[dict(id=i,page=p) for i,p in sorted({(s['id'],s['page']) for s in candidate['sources']+e['sources']})]
  if not candidate.get('example'):candidate['example']=e.get('example')
  removed.append(dict(id=e['id'],retained=candidate['id'],jp=e['jp']))
 else:out.append(e)
d['entries']=out
# Save a transparent audit: no claim that differing senses or cross-level review
# cards are duplicates. Identical entries in N5 and N4 remain level-specific.
audit_path=R/'data/kotoba-duplicate-review.json'
previous=json.loads(audit_path.read_text()).get('merged',[]) if audit_path.exists() else []
merged_ids={row['id']:row for row in previous+removed}
audit_path.write_text(json.dumps({'merged':list(merged_ids.values()),'policy':'Same kana, category and shared meaning; kana/kanji variant only. Different readings and enrichment retained.'},ensure_ascii=False,indent=2)+'\n')
d['mergedIds']={row['id']:row['retained'] for row in merged_ids.values()}

for i,e in enumerate(out,1):e['order']=i
d['meta']['total']=len(out)
examples=json.loads((R/'data/kotoba-example-additions.json').read_text())
for e in out:
 if e['jp'] in examples and not e.get('example'):e['example']=examples[e['jp']]
authored=load_authored(); counts=Counter()
for e in out:
 if not e.get('example'):
  value,method=make_example(e,authored)
  if value:
   e['example']=value; counts[method]+=1
# Fix conjugations of verbal nouns without changing their searchable headwords.
for e in out:
 if e['jp'] in ['生活','相談','休憩','調理','断水','通話','充電','吸引','両替','再生'] and e['category']=='verb':
  e['group']=3;e['subcategory']='Grup 3';e['polite']={'jp':e['jp']+'します','kana':e['kana']+'します'}
d['meta']['examplePolicy']='Contoh Jepang, kana, dan arti Indonesia. Ungkapan dan hitungan memakai contoh khusus; sebagian kata memakai pola kalimat sederhana yang berulang.'
d['meta']['examplesMissing']=sum(not e.get('example') for e in out)
print('Example additions',dict(counts))
p.write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
print('Merged',len(removed),'orthographic duplicates; remaining',len(out))

# Editorial repairs and examples are applied by build-kotoba-data.py after completion.
