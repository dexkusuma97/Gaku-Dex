import pdfplumber,json,re,hashlib
from pathlib import Path
import argparse
parser=argparse.ArgumentParser(description='Extract the three user-supplied kanji PDFs into reviewable source rows.')
parser.add_argument('pdf_directory',type=Path)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]; allrows=[]; sources=[]
for sid,name in [('marugoto-a2-1','kanji marugoto1'),('marugoto-a2-2','kanji marugoto2'),('marugoto-a2-b1','Kanji JFTA2 Lengkap')]:
 path=args.pdf_directory/(name+'.pdf'); rows=[]; section='';topic=''
 with pdfplumber.open(path) as doc:
  for page,n in zip(doc.pages,range(1,len(doc.pages)+1)):
   for table in page.extract_tables():
    for row in table:
     if len(row)!=4:continue
     head=(row[0] or '').replace('\n',' ')
     if head.isdigit():
      word=(row[1] or '').replace('\n','').replace(' ','')
      kana=(row[2] or '').replace('\n','').replace(' ','')
      rows.append(dict(number=int(head),word=word,kana=kana,lesson=(row[3] or '').strip(),page=n,section=section,topic=topic,source=sid))
     elif 'トピック' in head:topic=head
     elif '初級' in head or '入門' in head: section=head
 sources.append(dict(id=sid,filename=path.name,sha256=hashlib.sha256(path.read_bytes()).hexdigest(),pages=len(doc.pages),rows=len(rows),maxNumber=max(r['number'] for r in rows)))
 (root/'data/kanji-sources'/f'{sid}.json').write_text(json.dumps(rows,ensure_ascii=False,indent=2)+'\n'); allrows+=rows
(root/'data/kanji-sources/sources.json').write_text(json.dumps(sources,ensure_ascii=False,indent=2)+'\n')
n5={x.split('|')[0] for x in (root/'data/kanji-n5.tsv').read_text().splitlines() if x and not x.startswith('#')}
chars=sorted({c for r in allrows for c in re.sub('（.*?）','',r['word']) if '\u4e00'<=c<='\u9fff'}-n5)
print(sources);print('new',len(chars),''.join(chars))
(root/'data/kanji-sources/new-chars.txt').write_text(''.join(chars))
