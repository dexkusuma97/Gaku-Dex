"""Import supplied A2 PDFs. Usage: python scripts/import-kotoba-n4.py PDF_DIRECTORY.
Raw rows and provenance are retained for reproducible review; N5 is never rewritten.
"""
import json,re,sys,logging,unicodedata,hashlib,subprocess
from pathlib import Path
import pdfplumber
logging.getLogger('pdfminer').setLevel(logging.ERROR)
ROOT=Path(__file__).resolve().parents[1]; PDF=Path(sys.argv[1]); rows=[]; sources=[]
def norm(s):return unicodedata.normalize('NFKC',s or '').replace('\n',' ').strip()
def hira(s):return ''.join(chr(ord(c)-96) if 'ァ'<=c<='ヶ' else c for c in norm(s))
def cell(p,x0,x1,y0,y1):
 chars=[c for c in p.chars if x0<=(c['x0']+c['x1'])/2<x1 and y0<=(c['top']+c['bottom'])/2<y1 and c['size']>=6.5]
 return norm(pdfplumber.utils.extract_text(chars,x_tolerance=2,y_tolerance=3)) if chars else ''
patterns=['MarugotoElementary1Activities*','MarugotoElementary1Competences*','MarugotoElementary2Competences*','MarugotoElementary2Activities*','Kotoba Irodori A2(1)*','Kotoba Irodori A2(2)*','1000*']
for sid,pat in enumerate(patterns,7):
 f=next(PDF.glob(pat));sources.append(dict(id=sid,filename=f.name,label=['Marugoto A2-1 Aktivitas','Marugoto A2-1 Pemahaman','Marugoto A2-2 Pemahaman','Marugoto A2-2 Aktivitas','Irodori A2-1','Irodori A2-2','Kotoba harian · bagian N4'][sid-7],credit='The Japan Foundation' if sid<13 else 'Daftar Informasi · Anita',sha256=hashlib.sha256(f.read_bytes()).hexdigest()))
 if sid==13:break
 before=len(rows)
 with pdfplumber.open(f) as doc:
  for pn,p in enumerate(doc.pages,1):
   if sid<11:
    for table in p.extract_tables():
     for row in table:
      if len(row)!=6:continue
      _,word,kanji,accent,meaning,_=map(norm,row)
      if not word or not re.search('[a-zA-Z]',meaning) or meaning=='インドネシアご':continue
      rows.append(dict(word=word,written=kanji,reading=accent,meaning=meaning,source=sid,page=pn))
   elif pn>2:
    ys=[]
    for edge in sorted(p.edges,key=lambda e:e['top']):
     if edge['orientation']=='h' and abs(edge['x0']-348.66)<1 and abs(edge['x1']-538.58)<1:
      if not ys or edge['top']-ys[-1]>.8:ys.append(edge['top'])
    for top,bottom in zip(ys,ys[1:]):
     word=cell(p,56.6,192.76,top,bottom);reading=cell(p,192.76,348.66,top,bottom);meaning=cell(p,348.66,538.65,top,bottom)
     if word and reading and re.search('[a-zA-Z]',meaning) and 'Bahasa Indonesia' not in meaning:
      rows.append(dict(word=word,written=word,reading=reading,meaning=meaning,source=sid,page=pn))
 print(sid,len(rows)-before,flush=True)
(ROOT/'data/kotoba-n4-source-rows.json').write_text(json.dumps(dict(sources=sources,rows=rows),ensure_ascii=False,indent=2))
