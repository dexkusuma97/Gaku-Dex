"""Render the two user-provided Irodori PDFs for the existing local book reader.

Usage: python3 scripts/build-irodori-books.py --dasar-1 PDF --dasar-2 PDF
Requires PyMuPDF and Pillow. No credentials or Google access needed to rebuild.
"""
import argparse, concurrent.futures, hashlib, json, re, io, os
from pathlib import Path
import pymupdf
from PIL import Image
ROOT=Path(__file__).resolve().parents[1]
WIDTH=2200
QUALITY=78
SOURCES=[
 {'id':5,'part':1,'pages':424,'sha256':'292f4691f4469a3da93391b11f86433295a5ed623cfd73ec624cb5ab6ee71307','drive':'https://drive.google.com/file/d/1tNI9eLTlek_23keb6PuJ5asjeRqigl21/view','starts':[26,46,65,84,99,115,132,145,166,187,207,228,251,274,296,321,340,361]},
 {'id':6,'part':2,'pages':517,'sha256':'84a1a34fc1db25e6cad4645e1214efc25680b1916bad6cf9bf40741bdab2cbe6','drive':'https://drive.google.com/file/d/1SNfRAilsNREpXSE0Hd6IRUyhVTkRb7vK/view','starts':[20,40,62,89,116,146,178,204,226,256,286,311,330,355,382,402,436,451]}
]
def sha(p):return hashlib.sha256(p.read_bytes()).hexdigest()
def render_book(spec,path,reuse=False):
 path=Path(path)
 if sha(path)!=spec['sha256']:raise ValueError('PDF differs from reviewed source: '+str(path))
 doc=pymupdf.open(path)
 assert len(doc)==spec['pages']
 out=ROOT/f'dist/assets/books/irodori-dasar-{spec["part"]}-id';out.mkdir(parents=True,exist_ok=True)
 sizes=[];hashes={};total=0
 for i,page in enumerate(doc):
  target=out/f'{i+1:03}.webp';scale=WIDTH/page.rect.width
  size=None
  if reuse and target.is_file():
   # Explicit recovery of this build's already rendered pages after an interrupted run.
   try:
    with Image.open(target) as image:
     image.load()
     if image.width>=WIDTH and image.format=='WEBP':size=list(image.size)
   except (OSError,ValueError):pass
  if size is None:
   pix=page.get_pixmap(matrix=pymupdf.Matrix(scale,scale),alpha=False,colorspace=pymupdf.csRGB)
   image=Image.frombytes('RGB',(pix.width,pix.height),pix.samples)
   buffer=io.BytesIO();image.save(buffer,'WEBP',quality=QUALITY,method=4)
   temporary=target.with_suffix('.webp.tmp')
   with temporary.open('wb') as f:
    f.write(buffer.getvalue());f.flush();os.fsync(f.fileno())
   os.replace(temporary,target);size=[pix.width,pix.height]
  sizes.append(size);hashes[target.name]=sha(target);total+=target.stat().st_size
  if (i+1)%50==0:print(f'Dasar {spec["part"]}: {i+1}/{len(doc)} pages',flush=True)
 # Each shortcut must be the first main lesson page, not a sample in the guide or an answer-key page.
 for n,start in enumerate(spec['starts'],1):
  text=doc[start-1].get_text()
  assert re.search(fr'L\s*{n}\s*[-－–]\s*1(?!\d)',text),(spec['part'],n,start)
  assert '解答' not in text[:100]
 book={'id':spec['id'],'title':f'Irodori Dasar {spec["part"]} (A2)','subtitle':'Bab 1–18 · Bahasa Indonesia','description':'Buku gabungan dengan pengantar dan lampiran. Materi menyimak memerlukan audio pendamping.','pages':len(doc),'width':WIDTH,'assetPath':f'assets/books/irodori-dasar-{spec["part"]}-id/','bytes':total,'pageSizes':sizes,'sourceName':'The Japan Foundation','sourceUrl':'https://www.jpf.go.jp/','pdfUrl':spec['drive'],'pdfLabel':'PDF gabungan','chapters':[{'number':n,'page':p} for n,p in enumerate(spec['starts'],1)]}
 metadata={'title':book['title'],'publisher':'The Japan Foundation','publisherUrl':book['sourceUrl'],'pdfUrl':spec['drive'],'sourceType':'User-provided merged PDF','retrieved':'2026-11-02','sha256':spec['sha256'],'pdfBytes':path.stat().st_size,'pages':len(doc),'renderWidth':WIDTH,'webpQuality':QUALITY,'renderedBytes':total,'chapters':book['chapters'],'pageSha256':hashes}
 print(f'Dasar {spec["part"]} complete: {len(doc)} pages, {total} bytes',flush=True)
 return book,metadata
if __name__=='__main__':
 parser=argparse.ArgumentParser();parser.add_argument('--dasar-1',required=True);parser.add_argument('--dasar-2',required=True);parser.add_argument('--reuse-rendered-pages',action='store_true',help='Resume only your own verified, interrupted render');args=parser.parse_args()
 with concurrent.futures.ProcessPoolExecutor(max_workers=2) as pool:
  jobs=[pool.submit(render_book,s,p,args.reuse_rendered_pages) for s,p in zip(SOURCES,[args.dasar_1,args.dasar_2])];results=[j.result() for j in jobs]
 books=json.loads((ROOT/'data/rangkuman-books.json').read_text());books=[b for b in books if b['id'] not in [5,6]]
 for book,metadata in results:
  books.append(book);(ROOT/f'data/irodori-dasar-{book["id"]-4}-source.json').write_text(json.dumps(metadata,ensure_ascii=False,indent=2)+'\n')
 (ROOT/'data/rangkuman-books.json').write_text(json.dumps(books,ensure_ascii=False,indent=2)+'\n')
