"""Compile 15 authored situations × four question modes for every Bunpo subcategory."""
import json,sys,hashlib
from pathlib import Path
root=Path(__file__).resolve().parents[1]
sys.path.insert(0,str(root/'scripts/quiz'))
from frames_n4 import FRAMES
source=json.loads((root/'data/bunpo-n4.json').read_text())
lessons={l['id']:l for l in source['lessons']}
groups={k:[k] for k in lessons}
for k,frames in FRAMES.items():
 for f in frames:
  f['why']=f['why'] or lessons[k]['explanation'].split('. ')[0].rstrip('.')+'.'
  if len(f['jp'].split('|'))<3: f['jp']=f['jp'].replace('{x}を','{x}|を').replace('{x}に','{x}|に')
assert set(groups)==set(FRAMES),(set(groups)-set(FRAMES),set(FRAMES)-set(groups))
allq=[];cases=[];submeta=[]
for gi,(key,frames) in enumerate(FRAMES.items(),1):
 assert len(frames)==3,(key,len(frames))
 cat,sub=lessons[key]['category'],lessons[key]['subcategory'];sc=[]
 for fi,f in enumerate(frames):
  assert len(f['values'])==5,(key,fi)
  for vi,(x,m) in enumerate(f['values']):
   chunks=f['jp'].format(x=x).split('|');target=f['target'];idx=chunks.index(target)
   wrong=list(f['wrong'])
   assert len(wrong)==3 and len(set(wrong))==3 and target not in wrong,(key,target,wrong)
   meaning=f['meaning'].format(m=m);jp=''.join(chunks)+'。';base=f'bq-n4-{gi:03}-{fi*5+vi+1:02}'
   assert len(chunks)>=3,(key,chunks)
   c=dict(level='N4',id=base,category=cat,subcategory=sub,jp=jp,chunks=chunks,blankIndex=idx,target=target,wrong=wrong,meaning=meaning,explanation=f['why'],lessonIds=groups[key]);sc.append(c)
 assert len({c['jp'] for c in sc})==15,key
 for ci,c in enumerate(sc):
  base={k:c[k] for k in ['level','category','subcategory','explanation','lessonIds']}
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
    if lessons[other_key]['category']==cat:continue
    why=other_frames[0]['why']
    if why not in function_choices:function_choices.append(why)
    if len(function_choices)==4:break
   allq.append(dict(shared,id=c['id']+'-meaning',mode='meaning',prompt='Apa fungsi “'+c['target']+'” pada kalimat ini?',display=c['jp'],options=function_choices,answer=0))
  else:
   allq.append(dict(shared,id=c['id']+'-meaning',mode='meaning',prompt='Apa arti kalimat dengan pola ini?',display=c['jp'],options=choices,answer=0))
  # The first piece is fixed and the requested source order is stated explicitly.
  allq.append(dict(shared,id=c['id']+'-order',mode='order',prompt='Susun sesuai arti dan urutan pola contoh. Potongan pertama sudah tetap.',display=c['meaning'],chunks=c['chunks'],answerText=c['jp']))
 cases.extend(sc);submeta.append(dict(level='N4',id=cat+'::'+sub,category=cat,name=sub,counts={m:15 for m in ['cloze','correct','meaning','order']}))
assert len(allq)==115*60
out=root/'dist/assets/quiz/bunpo-n4-bank.json';out.write_text(json.dumps(allq,ensure_ascii=False,separators=(',',':')))
(root/'data/quiz/bunpo-n4-cases.json').write_text(json.dumps(cases,ensure_ascii=False,indent=2))
(root/'dist/quiz-bunpo-n4-index.js').write_text('/* 15 situations × 4 modes for each subcategory; generated from scripts/quiz/frames_n4.py. */\nconst QUIZ_BUNPO_N4_SUBS='+json.dumps(submeta,ensure_ascii=False,separators=(',',':'))+';\n')
(root/'data/quiz/BUNPO_N4_README.md').write_text("""# Bank soal Bunpo N4

115 subkategori × 15 situasi × 4 mode = 6.900 soal.
1.725 situasi berasal dari 345 kerangka, masing-masing lima variasi kosakata.
Setiap sub memiliki 15 soal per mode: lengkapi, pilih kalimat, arti/fungsi (8 arti + 7 fungsi), dan susun kata.
Terjemahan membatasi konteks jawaban. Urutan susun kata mengikuti contoh; potongan pertama tetap.
Penjelasan merujuk materi N4 yang sudah ditinjau di aplikasi. Bank N5 tetap terpisah.
Tinjauan internal dan pengujian otomatis tidak menggantikan pemeriksaan pengajar eksternal.
""")
print(f'Built {len(allq)} questions / {len(cases)} situations / {len(submeta)} subcategories')
