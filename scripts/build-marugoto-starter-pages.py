"""Render the supplied official wordbook once; ordinary app builds stay offline.

Usage: python3 scripts/build-marugoto-starter-pages.py /path/to/MarugotoStarterWordbook_ID.pdf
Requires PyMuPDF and Pillow in the asset-preparation environment, not in Termux.
"""
import argparse, hashlib, json, io
from pathlib import Path
import fitz
from PIL import Image

parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('pdf',type=Path)
args=parser.parse_args()
root=Path(__file__).resolve().parents[1]
raw=args.pdf.read_bytes()
digest=hashlib.sha256(raw).hexdigest()
doc=fitz.open(stream=raw,filetype='pdf')
assert len(doc)==82, 'Expected the 82-page Indonesian Starter wordbook'
assert 'Daftar Kosakata' in doc[0].get_text(), 'Unexpected document'
reference=root/'data/marugoto-starter-wordbook-source.json'
if reference.exists():
 assert json.loads(reference.read_text())['sha256']==digest, 'PDF differs from the reviewed source'
asset='assets/books/marugoto-starter-wordbook-id/'
out=root/'dist'/asset;out.mkdir(parents=True,exist_ok=True)
sizes=[];total=0;width=2200;page_hashes={}
for i,page in enumerate(doc,1):
 pix=page.get_pixmap(matrix=fitz.Matrix(width/page.rect.width,width/page.rect.width),alpha=False)
 image=Image.frombytes('RGB',[pix.width,pix.height],pix.samples)
 dest=out/f'{i:03}.webp';buffer=io.BytesIO();image.save(buffer,'WEBP',quality=90,method=4)
 payload=buffer.getvalue();assert len(payload)>1000
 temporary=dest.with_suffix('.webp.tmp');temporary.write_bytes(payload);temporary.replace(dest)
 assert dest.read_bytes()==payload
 page_hashes[dest.name]=hashlib.sha256(payload).hexdigest()
 sizes.append([pix.width,pix.height]);total+=len(payload)
 if i%20==0:print('Rendered',i,'of',len(doc),flush=True)
source={'title':'Marugoto Starter (A1) — Daftar Kosakata Bahasa Indonesia','publisher':'The Japan Foundation','publisherUrl':'https://www.jpf.go.jp/','url':'https://marugoto.jpf.go.jp/assets/docs/download/starter_a/MarugotoStarterWordbook_ID.pdf','retrieved':'2026-11-01','sha256':digest,'pdfBytes':len(raw),'pages':len(doc),'renderWidth':width,'renderedBytes':total,'pageSha256':page_hashes,'sharedUse':'Daftar kosakata yang sama untuk Katsudo dan Rikai; bukan dua buku utama berbeda.'}
reference.write_text(json.dumps(source,ensure_ascii=False,indent=2)+'\n')
path=root/'data/rangkuman-books.json';books=json.loads(path.read_text())
books=[b for b in books if b['id'] not in [3,4]]
for id,kind in [(3,'Katsudo'),(4,'Rikai')]:
 books.append({'id':id,'title':f'Marugoto Starter (A1) {kind}','subtitle':'Daftar kosakata · Bahasa Indonesia','description':'Daftar kosakata bersama untuk Katsudo dan Rikai.','pages':len(doc),'width':width,'assetPath':asset,'bytes':total,'pageSizes':sizes,'sourceName':'Japan Foundation','sourceUrl':source['publisherUrl'],'pdfUrl':source['url']})
path.write_text(json.dumps(books,ensure_ascii=False,indent=2)+'\n')
print('Rendered',len(doc),'shared pages;',total,'bytes. Added book IDs 3 and 4.',flush=True)
