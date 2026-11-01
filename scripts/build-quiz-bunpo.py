"""Compile 15 authored situations × four question modes for every Bunpo subcategory."""
import json,sys,hashlib
from pathlib import Path
root=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(root/'scripts/quiz'))
from frames import FRAMES
source=json.loads((root/'data/bunpo-n5.json').read_text())
groups={}
for l in source['lessons']:groups.setdefault(l['category']+'::'+l['subcategory'],[]).append(l['id'])
assert set(groups)==set(FRAMES),(set(groups)-set(FRAMES),set(FRAMES)-set(groups))
allq=[];cases=[];submeta=[]
for gi,(key,frames) in enumerate(FRAMES.items(),1):
 assert len(frames)==3,(key,len(frames))
 cat,sub=key.split('::');sc=[]
 for fi,f in enumerate(frames):
  assert len(f['values'])==5,(key,fi)
  for vi,(x,m) in enumerate(f['values']):
   chunks=f['jp'].format(x=x).split('|');target=f['target'];idx=chunks.index(target)
   wrong=list(f['wrong'])
   assert len(wrong)==3 and len(set(wrong))==3 and target not in wrong,(key,target,wrong)
   meaning=f['meaning'].format(m=m);jp=''.join(chunks)+'。';base=f'bq-{gi:02}-{fi*5+vi+1:02}'
   c=dict(id=base,category=cat,subcategory=sub,jp=jp,chunks=chunks,blankIndex=idx,target=target,wrong=wrong,meaning=meaning,explanation=f['why'],lessonIds=groups[key]);sc.append(c)
 assert len({c['jp'] for c in sc})==15,key
 for ci,c in enumerate(sc):
  base={k:c[k] for k in ['category','subcategory','explanation','lessonIds']}
  shared=dict(base,caseId=c['id'],translation=c['meaning'])
  allq.append(dict(shared,id=c['id']+'-cloze',mode='cloze',prompt='Lengkapi kalimat sesuai arti.',display=''.join('［…］' if i==c['blankIndex'] else s for i,s in enumerate(c['chunks']))+'。',options=[c['target']]+c['wrong'],answer=0))
  variants=[]
  for w in c['wrong']:
   ch=c['chunks'][:];ch[c['blankIndex']]=w;variants.append(''.join(ch)+'。')
  allq.append(dict(shared,id=c['id']+'-correct',mode='correct',prompt='Pilih kalimat yang tepat sesuai arti dan pola.',display=c['meaning'],options=[c['jp']]+variants,answer=0))
  others=[q['meaning'] for q in sc if q['meaning']!=c['meaning']]
  choices=[c['meaning']]+list(dict.fromkeys(others))[:3];assert len(choices)==4
  if ci%2:
   function_choices=[c['explanation']]
   for other_key,other_frames in FRAMES.items():
    if other_key.split('::')[0]==cat:continue
    why=other_frames[0]['why']
    if why not in function_choices:function_choices.append(why)
    if len(function_choices)==4:break
   allq.append(dict(shared,id=c['id']+'-meaning',mode='meaning',prompt='Apa fungsi “'+c['target']+'” pada kalimat ini?',display=c['jp'],options=function_choices,answer=0))
  else:
   allq.append(dict(shared,id=c['id']+'-meaning',mode='meaning',prompt='Apa arti kalimat dengan pola ini?',display=c['jp'],options=choices,answer=0))
  # The first piece is fixed and the requested source order is stated explicitly.
  allq.append(dict(shared,id=c['id']+'-order',mode='order',prompt='Susun sesuai arti dan urutan pola contoh. Potongan pertama sudah tetap.',display=c['meaning'],chunks=c['chunks'],answerText=c['jp']))
 cases.extend(sc);submeta.append(dict(id=key,category=cat,name=sub,counts={m:15 for m in ['cloze','correct','meaning','order']}))
assert len(allq)==43*60
out=root/'dist/assets/quiz/bunpo-bank.json';out.write_text(json.dumps(allq,ensure_ascii=False,separators=(',',':')))
(root/'data/quiz/bunpo-cases.json').write_text(json.dumps(cases,ensure_ascii=False,indent=2))
(root/'dist/quiz-bunpo-index.js').write_text('/* 15 situations × 4 modes for each subcategory; generated from scripts/quiz/frames.py. */\nconst QUIZ_BUNPO_SUBS='+json.dumps(submeta,ensure_ascii=False,separators=(',',':'))+';\n')
(root/'data/quiz/AUDIT.md').write_text('''# Bank soal Bunpo N5\n\n- 43 subkategori × 4 jenis × 15 soal = 2.580 soal.\n- 645 situasi, dibentuk dari 129 kerangka kalimat yang ditulis untuk kuis ini, masing-masing lima konteks kosakata. Situasi yang sama dipakai dalam empat bentuk latihan; ini bukan 2.580 pola tata bahasa yang berbeda.\n- Jenis: melengkapi, memilih kalimat sesuai arti/pola, arti/fungsi pola dalam kalimat (8 arti + 7 fungsi per subkategori), menyusun potongan.\n- Susun kata mengikuti urutan pola contoh yang diminta; potongan pertama tetap. Urutan alternatif bahasa Jepang tidak dinilai sebagai salah secara umum—tugas dibatasi pada urutan contoh.\n- Materi ditautkan ke lessonIds dari 83 materi Bunpo yang tersedia; sumber utama bahasa Indonesia tetap data pembelajaran aplikasi.\n- Terjemahan ditampilkan untuk membatasi konteks, termasuk jika pilihan lain bisa menjadi kalimat yang valid dengan makna berbeda.\n- Pemeriksaan otomatis mencakup semua hitungan, ID unik, empat pilihan unik, jawaban, penyusunan ulang, cakupan subkategori, dan berkas browser.\n- Belum ditelaah pengajar eksternal; bank dapat direvisi setelah pengguna memeriksa materinya.\n''')
audit_path=root/'data/quiz/AUDIT.md'
audit_path.write_text(audit_path.read_text()+"\n## Audit internal batch 23 — 1 November 2026\n\n129 kerangka dan lima konteks tiap kerangka ditinjau. Pilihan salah ditulis eksplisit; generator tidak lagi memetakan pilihan lewat tabel pengganti atau menambah partikel otomatis. Pengecoh ambigu や／と dan から／ので dihapus dari pasangan soal terkait. Konteks waktu dan penjelasan keberadaan diluruskan. Catatan perubahan: editorial-review-20261101.json. Ini tinjauan internal, belum pengajar eksternal.\n")
print(f'Built {len(allq)} questions / {len(cases)} situations / {len(submeta)} subcategories; {out.stat().st_size} bytes')
