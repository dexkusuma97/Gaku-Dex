"""Build the reviewed kanji additions from versioned extracted source rows.
The A2/B1 source is enrichment, not an official JLPT N4 syllabus.
No network or PDF dependency is needed to rebuild the published data.
"""
import json,re,subprocess,sys
from pathlib import Path
from collections import Counter
root=Path(__file__).resolve().parents[1]
def read(p):return json.loads((root/p).read_text())
def write(p,v):(root/p).write_text(json.dumps(v,ensure_ascii=False,indent=2)+'\n')
def clean_meaning(s):
 parts=re.split(r'\s*[/;,]\s*',s);out=[];seen=set()
 for part in parts:
  part=' '.join(part.split()).strip('. ')
  key=part.casefold()
  if part and key not in seen:out.append(part);seen.add(key)
 return '; '.join(out)
n5=[line.split('|')[0] for line in (root/'data/kanji-n5.tsv').read_text().splitlines() if line and not line.startswith('#')]
source_rows=[]
for source in read('data/kanji-sources/sources.json'):
 rows=read('data/kanji-sources/'+source['id']+'.json')
 assert len(rows)==source['rows']
 assert sorted(r['number'] for r in rows)==list(range(1,source['maxNumber']+1))
 source_rows+=rows
# Parenthetic examples are annotations, not additional headword characters.
def head(row):return re.sub('（.*?）','',row['word']).strip('〜～')
def reading(row):return re.sub('（.*?）','',row['kana']).strip('〜～').replace('／',' / ')
source_chars={c for r in source_rows for c in head(r) if '\u4e00'<=c<='\u9fff'}
new_chars=source_chars-set(n5)
groups=read('data/kanji-category-additions.json');flat=[c for _,_,chars in groups for c in chars]
assert len(flat)==len(set(flat)) and set(flat)==new_chars,(new_chars-set(flat),set(flat)-new_chars)
meta={}
for line in (root/'data/kanji-additions.tsv').read_text().splitlines():
 if not line or line.startswith('#'):continue
 char,meaning,on,kun=line.split('|');assert char not in meta
 meta[char]=dict(meaning=clean_meaning(meaning),on=[] if on=='—' else on.split(','),kun=[] if kun=='—' else kun.split(','))
assert set(meta)==new_chars
words=read('data/kanji-sources/word-matches.json');words.update(read('data/kanji-word-overrides.json'))
all_rows=[];order=0
for cat,label,chars in groups:
 for char in chars:
  refs=[r for r in source_rows if char in head(r)]
  core=any(r['source']!='marugoto-a2-b1' for r in refs)
  # Prefer ordinary words, then short words. Keep suffixes when they are the only source example.
  examples=[];seen=set()
  choices=sorted(refs,key=lambda r:(r['word'].startswith(('〜','～')),len(head(r)),r['source']=='marugoto-a2-b1',r['number']))
  for r in choices:
   key=(head(r),reading(r))
   if key in seen:continue
   seen.add(key)
   if key[0] not in words:continue
   examples.append(dict(word=r['word'].split('（')[0],kana=reading(r),meaning=clean_meaning(words[key[0]]),source=r['source'],page=r['page'],number=r['number']))
   if len(examples)==3:break
  assert examples,('No translated source example',char)
  order+=1
  all_rows.append(dict(id='kanji-'+format(ord(char),'x'),char=char,category=cat,**meta[char],english='',strokes=None,radical='',mnemonic='',level='N4',scope='a2' if core else 'a2-b1',order=order,examples=examples,source=dict(id='marugoto-a2' if core else 'marugoto-a2-b1',label='Marugoto A2' if core else 'Pengayaan A2/B1',pages=sorted({r['page'] for r in refs})),sources=[dict(source=r['source'],page=r['page'],number=r['number'],word=r['word'],kana=r['kana']) for r in refs]))
write('data/kanji-n4.json',dict(meta=dict(total=len(all_rows),core=sum(k['scope']=='a2' for k in all_rows),enrichment=sum(k['scope']=='a2-b1' for k in all_rows),policy='N5 characters excluded; A2/B1 additions are marked enrichment, not an official JLPT N4 list.',readingPolicy='Selected on/kun readings are editorial; compound readings come from the supplied PDFs. PDFs do not provide stroke counts or radicals; these are not guessed.'),categories=[dict(id=k,name=v) for k,v,cs in groups],entries=all_rows))
unique={(r['word'],r['kana']) for r in source_rows}
write('data/kanji-audit.json',dict(sources=read('data/kanji-sources/sources.json'),sourceRows=len(source_rows),uniqueWordReadingPairs=len(unique),repeatedRows=len(source_rows)-len(unique),sourceCharacters=len(source_chars),retainedN5=len(n5),sourceOverlapN5=sorted(source_chars&set(n5)),sourceN5NotPresent=sorted(set(n5)-source_chars),newN4=len(all_rows),categories=dict(Counter(k['category'] for k in all_rows)),enrichment=[k['char'] for k in all_rows if k['scope']=='a2-b1']))
# Preserve the original N5 build and schema for old quizzes and saved routes.
if '--append-only' not in sys.argv:
 subprocess.run([sys.executable,str(root/'scripts/build-kanji-data.py'),'--n5-only'],check=True)
p=root/'dist/kanji-data.js'
with p.open('a') as f:
 f.write('\nconst KANJI_N4_DATA = '+json.dumps(all_rows,ensure_ascii=False,indent=2)+';\n')
 f.write('const KANJI_N4_CATEGORIES = '+json.dumps([dict(id=k,name=v) for k,v,cs in groups],ensure_ascii=False)+';\n')
 f.write("function kanjiEntries(level=(typeof prefs!=='undefined'?prefs.level:'N5')){return level==='N4'?KANJI_N4_DATA:KANJI_DATA}\nfunction kanjiCategories(level=(typeof prefs!=='undefined'?prefs.level:'N5')){return level==='N4'?KANJI_N4_CATEGORIES:KANJI_CATEGORIES}\n")
print('Built N5',len(n5),'N4',len(all_rows),'enrichment',sum(k['scope']=='a2-b1' for k in all_rows))
