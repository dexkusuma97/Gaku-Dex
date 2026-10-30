"""Compile the reviewed source rows; no network requests or external runtime dependency."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
source=json.loads((root/'data/kanji-provenance.json').read_text())
categories=[
 ('numbers','Angka & hitungan','一二三四五六七八九十百千万円半分'),
 ('nature','Alam & cuaca','山川田日月火水木金土雨天気空花'),
 ('people','Orang & keluarga','人子女男父母友名生私何会'),
 ('body','Tubuh & tenaga','目口耳手足力'),
 ('position','Letak & arah','上下中前後左右東西南北外間'),
 ('time','Waktu','年毎先午早時週今'),
 ('learning','Belajar & bahasa','学校本書言話読語聞英'),
 ('places','Tempat & kendaraan','店駅車門社国電家道'),
 ('qualities','Ukuran & sifat','大小高安新古長多少好白'),
 ('actions','Kegiatan sehari-hari','行来食見入出立飲買休'),
 ('animals','Hewan','牛馬魚貝犬')
]
cat_map={k:key for key,label,chars in categories for k in chars}
rows=[]
for line in (root/'data/kanji-n5.tsv').read_text().splitlines():
 if not line or line.startswith('#'):continue
 char,meaning,english,on,kun,strokes,radical,examples,mnemonic=line.split('|')
 number=len(rows)+1
 assert char in cat_map,char
 assert not any(r['char']==char for r in rows),char
 core=number<=103
 ref=source['jftIndex'].get(char)
 assert core or ref,('Supplement absent from uploaded JFT',char)
 rows.append({'id':'kanji-'+format(ord(char),'x'),'char':char,'category':cat_map[char],
 'meaning':meaning,'english':english,'on':[] if on=='—' else on.split(','),'kun':[] if kun=='—' else kun.split(','),
 'strokes':int(strokes),'radical':radical,'mnemonic':mnemonic,
 'examples':[dict(zip(['word','kana','meaning'],e.split('~'))) for e in examples.split(';')],
 'source':{'id':'n5-pdf' if core else 'jft-pdf','label':'PDF utama' if core else 'Tambahan dasar',
 'pages':[(number-1)//20+2] if core else ref['pages'],'number':number if core else ref['number']},'order':number})
assert len(rows)==115
assert set(cat_map)==set(r['char'] for r in rows),(set(cat_map)-set(r['char'] for r in rows),set(r['char'] for r in rows)-set(cat_map))
(root/'dist/kanji-data.js').write_text('/* Reviewed learning dataset from the two user-provided PDFs. Supplementary explanations are editorial. */\nconst KANJI_CATEGORIES = '+json.dumps([{'id':key,'name':label} for key,label,chars in categories],ensure_ascii=False,indent=2)+';\nconst KANJI_DATA = '+json.dumps(rows,ensure_ascii=False,indent=2)+';\n')
print('Built',len(rows),'kanji in',len(categories),'categories')
