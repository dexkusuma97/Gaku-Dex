"""Normalize the retained PDF rows and exact everyday complement into N4/A2 cards.
Usage: python scripts/normalize-kotoba-n4.py PATH_TO_DAILY_PDF
"""
import json,re,hashlib,unicodedata,sys,subprocess
from pathlib import Path
R=Path(__file__).resolve().parents[1]
base=json.loads((R/'data/kotoba-n5.json').read_text());audit=json.loads((R/'data/kotoba-audit.json').read_text());raw=json.loads((R/'data/kotoba-n4-source-rows.json').read_text())
def n(s):return unicodedata.normalize('NFKC',s or '').strip()
def h(s):return ''.join(chr(ord(c)-96) if 'ァ'<=c<='ヶ' else c for c in n(s))
def clean(s):
 s=n(s)
 while s.startswith('(') and s.endswith(')'):
  depth=0;full=True
  for i,c in enumerate(s):
   depth+=(c=='(')-(c==')')
   if depth==0 and i<len(s)-1:full=False;break
  if not full:break
  s=s[1:-1]
 s=re.sub(r'【.*?】|\[.*?\]','',s)
 s=re.sub(r'\(([^()]*)\)',lambda m:m[1] if m[1] in ['が','を','は','します'] else '',s)
 return re.split('[／/]',s)[0].replace(' ','').strip('、。()')
def reading(s):
 s=clean(h(s));return re.sub('[^ぁ-ゖー〜～]','',s)
bykana={};byjp={}
for e in base['entries']:
 bykana.setdefault(e['kana'],[]).append(e)
 for key in [e['jp'],*e['aliases']]:byjp[key]=e
# Exact spelling fixes verified against the source meaning (never merge homophones by reading alone).
fix={
 '胃':('い','lambung'),'お腹':('おなか','perut'),'網膜':('もうまく','retina'),'内臓':('ないぞう','organ dalam'),'動脈':('どうみゃく','arteri'),'静脈':('じょうみゃく','vena'),'頭蓋骨':('ずがいこつ','tengkorak'),
 '肋骨':('ろっこつ','tulang rusuk'),'肺':('はい','paru-paru'),'外す':('はずす','melepaskan; menghilangkan'),'凍る':('こおる','membeku'),'預ける':('あずける','menitipkan'),'譲る':('ゆずる','menyerahkan; memberi jalan'),'沈む':('しずむ','tenggelam'),'喋る':('しゃべる','mengobrol'),'開始する':('かいしする','memulai'),
 '信じる':('しんじる','percaya'),'人体':('じんたい','tubuh manusia'),'神経質':('しんけいしつ','mudah khawatir; sensitif'),
 '爆発する':('ばくはつする','meledak'),'捕まる':('つかまる','tertangkap'),'就職する':('しゅうしょくする','mendapat pekerjaan'),'飼う':('かう','memelihara hewan'),'掲示する':('けいじする','memasang pengumuman'),'変化する':('へんかする','berubah'),'積もる':('つもる','menumpuk'),'育つ':('そだつ','tumbuh'),'繋ぐ':('つなぐ','menghubungkan'),'済ませる':('すませる','menyelesaikan'),'及ぼす':('およぼす','menimbulkan; memberikan pengaruh'),'通じる':('つうじる','tersampaikan; dapat dipahami; terhubung'),'気に入る':('きにいる','menyukai; merasa cocok'),'留める':('とめる','menahan; memasang; mencatat'),'立ち上げる':('たちあげる','memulai; mendirikan; meluncurkan'),'訴える':('うったえる','mengadukan; menuntut; mengungkapkan keluhan')}
fix.update({'完了':('かんりょう','penyelesaian; selesai'),'網膜':('もうまく','retina')})
fix.update({'血': ('ち', 'darah'), '婚約する': ('こんやくする', 'bertunangan'), '希望する': ('きぼうする', 'berharap; menginginkan'), '騒ぐ': ('さわぐ', 'membuat keributan'), '混乱する': ('こんらんする', 'menjadi kacau; bingung'), '解釈する': ('かいしゃくする', 'menafsirkan; menginterpretasikan'), '優れる': ('すぐれる', 'unggul'), '発車する': ('はっしゃする', 'berangkat (kendaraan)'), '建設する': ('けんせつする', 'membangun'), '供給する': ('きょうきゅうする', 'memasok; menyediakan'), '貢献する': ('こうけんする', 'berkontribusi'), '会合する': ('かいごうする', 'bertemu; mengadakan pertemuan'), '占める': ('しめる', 'menempati; menduduki; mencakup'), '張る': ('はる', 'membentangkan; menempelkan; memasang'), '適用する': ('てきようする', 'menerapkan'), '勧める': ('すすめる', 'menyarankan; menganjurkan'), '変更する': ('へんこうする', 'mengubah'), '発展する': ('はってんする', 'berkembang'), '握る': ('にぎる', 'menggenggam'), '迷惑する': ('めいわくする', 'merasa terganggu; mengalami kesulitan akibat orang lain'), '転ぶ': ('ころぶ', 'jatuh; tersandung'), '確認する': ('かくにんする', 'memastikan; mengonfirmasi'), '承認する': ('しょうにんする', 'menyetujui; mengesahkan'), '消費する': ('しょうひする', 'mengonsumsi; menghabiskan'), '修正する': ('しゅうせいする', 'memperbaiki; merevisi'), '支配する': ('しはいする', 'menguasai; memerintah'), '混雑する': ('こんざつする', 'ramai; penuh sesak'), '批判する': ('ひはんする', 'mengkritik'), '完成する': ('かんせいする', 'selesai; rampung'), '撃つ': ('うつ', 'menembak'), '感動する': ('かんどうする', 'terharu; tersentuh'), '当てる': ('あてる', 'mengenai; menebak dengan tepat'), '快復する': ('かいふくする', 'pulih (kesehatan)'), '決心する': ('けっしんする', 'bertekad; membulatkan tekad'), '叩く': ('たたく', 'memukul; mengetuk'), '解ける': ('とける', 'terurai; terlepas; terpecahkan'), '満ちる': ('みちる', 'menjadi penuh'), '呼吸する': ('こきゅうする', 'bernapas')})
# Source contains inflected forms; dictionary-group markers supply unambiguous base readings.
def dict_written(w,g,k):
 if w.endswith('します'):return w[:-3]+'する'
 if w.endswith('きます') and k=='くる':return w[:-3]+'くる'
 if w.endswith('ます'):
  stem=w[:-2]
  if g==2:return stem+'る'
  mp=dict(zip('いきぎしちにびみり','うくぐすつぬぶむる'))
  if stem and stem[-1] in mp:return stem[:-1]+mp[stem[-1]]
 return w
records=[];issues=[]
for r in raw['rows']:
 w=n(r['word']);g=None;polite=None
 m=re.search(r'【([^】]+?)([123])】',w)
 if m:
  k=reading(m[1]);g=int(m[2]);written=clean(r['written']) or clean(w)
  if g==3 and k=='する':k=reading(clean(w).removesuffix('します'))+'する'
  polite=dict(jp=written,kana=clean(w));jp=dict_written(written,g,k)
 else:
  m=re.search(r'\[([123])\]',w);g=int(m[1]) if m else None
  jp=clean(r['written'] or w);k=reading(r['reading'] if r['source']>=11 else w)
 if not jp or not k or not re.search('[a-zA-Z]',r['meaning']):issues.append(r);continue
 meaning=re.sub(r'\s+',' ',n(r['meaning'])).strip()
 if jp in fix:k,meaning=fix[jp]
 e=next((x for x in base['entries'] if x['jp']==jp and re.search('[一-龯]',jp)),None)
 if not e:
  candidates=[x for x in bykana.get(k,[]) if set(re.findall(r'[a-z]{4,}',meaning.lower()))&set(re.findall(r'[a-z]{4,}',x['meaning'].lower()))]
  if len(candidates)==1:e=candidates[0]
 if e:jp=e['jp'];g=g or e.get('group')
 if k=='あげる' and re.match('memberi',meaning,re.I):jp='あげる'
 rec=dict(jp=jp,kana=k,meaning=meaning,sources=[dict(id=r['source'],page=r['page'])],aliases=list(dict.fromkeys([clean(w),*([e['jp']] if e else [])])),readings=[k],group=g,na='(な)' in w or '(な)' in n(r['reading']),daily=False)
 if polite:rec['polite']=polite
 if e:
  rec['known']=e['id'];rec['kind']=e['kind'];rec['category']=e['category'];rec['subcategory']=e['subcategory'];rec['example']=e['example']
 records.append(rec)
# Daily PDF: only the audited complementary spellings are admitted.
romcode="const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','kotoba-data.js','kotoba-search.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);process.stdout.write(vm.runInContext('JSON.stringify(KANA_ROMAJI)',c))"
rom=json.loads(subprocess.check_output(['node','-e',romcode],cwd=R));rev={v:k for k,v in rom.items()};rev.update({'ji':'じ','zu':'ず','si':'し','ti':'ち','tu':'つ','hu':'ふ','zi':'じ','syu':'しゅ','sya':'しゃ','syo':'しょ','jya':'じゃ','jyu':'じゅ','jyo':'じょ','dzu':'づ','du':'づ'})
def fromrom(s):
 s=re.sub('[^a-z]','',s.lower());out='';i=0
 while i<len(s):
  if i+1<len(s) and s[i]==s[i+1] and s[i] not in 'aeioun':out+='っ';i+=1;continue
  for size in (4,3,2,1):
   if s[i:i+size] in rev:out+=rev[s[i:i+size]];i+=size;break
  else:
   if s[i]=='n':out+='ん';i+=1
   else:raise ValueError(s)
 return out
text=subprocess.check_output(['pdftotext','-layout',sys.argv[1],'-']).decode();daily={}
for pn,page in enumerate(text.split('\f'),1):
 for line in page.splitlines():
  line=n(line).replace('\uf106','').strip()
  # Both hyphen-separated verb rows and spaced body-word rows.
  m=re.match(r'^([^a-zA-Z]+?)[\s-]+([a-zA-Z][a-zA-Z /\'-]*?)\s*[–—-]\s*(.+)$',line)
  if not m:continue
  written,latin,meaning=m.groups();written=re.sub(r'\([^)]*\)','',written).strip(' -');written=re.sub(r'\s+','',written)
  for jp in written.split('/'):
   if jp in audit['everydayExcludedWords']:
    try:k=fromrom(latin.split('/')[0].split(' tubuh')[0])
    except ValueError:continue
    daily[jp]=dict(jp=jp,kana=k,meaning=meaning,page=pn)
pronouns=[('僕','ぼく','saya (umumnya laki-laki)'),('あたし','あたし','aku (informal, umumnya perempuan)'),('俺','おれ','aku (sangat informal, umumnya laki-laki)'),('私たち','わたしたち','kami; kita'),('僕たち','ぼくたち','kami; kita (umumnya laki-laki)'),('僕ら','ぼくら','kami; kita (informal)'),('あたしたち','あたしたち','kami; kita (informal, umumnya perempuan)'),('俺たち','おれたち','kami; kita (sangat informal)'),('君','きみ','kamu (akrab; perhatikan hubungan)'),('お前','おまえ','kamu (sangat informal; dapat terdengar kasar)'),('あなた方','あなたがた','Anda sekalian'),('君たち','きみたち','kalian (akrab)'),('お前ら','おまえら','kalian (sangat informal; dapat terdengar kasar)'),('彼','かれ','dia (laki-laki); pacar laki-laki'),('彼ら','かれら','mereka'),('彼女','かのじょ','dia (perempuan); pacar perempuan'),('彼女ら','かのじょら','mereka (perempuan)'),('これら','これら','benda-benda ini'),('それら','それら','benda-benda itu'),('あれら','あれら','benda-benda itu di sana')]
for jp,k,meaning in pronouns:daily[jp]=dict(jp=jp,kana=k,meaning=meaning,page=4)
for jp in audit['everydayExcludedWords']:
 if jp in fix:
  k,meaning=fix[jp];daily[jp]=dict(jp=jp,kana=k,meaning=meaning,page=daily.get(jp,{}).get('page',10 if jp=='頭蓋骨' else 9))
missing=[j for j in audit['everydayExcludedWords'] if j not in daily]
if missing:print('MISSING DAILY',missing);raise SystemExit(1)
for index,jp in enumerate(audit['everydayExcludedWords']):
 d=daily[jp];g=None
 if index>=80 and jp!='真っ直ぐ':
  k=d['kana'];g=3 if jp.endswith('する') else 2 if re.search('[いきぎしちにひびぴみりえけげせぜてでねへべぺめれ]る$',k) else 1
  if jp in '入る 気に入る 限る 帰る 切る 減る 握る 喋る 知る 走る 要る 参る 滑る 混じる'.split():g=1
  if jp in byjp:g=byjp[jp].get('group',g)
 records.append(dict(jp=jp,kana=d['kana'],meaning=d['meaning'],sources=[dict(id=13,page=d['page'])],aliases=[],readings=[d['kana']],group=g,daily=True))
(R/'data/kotoba-n4-corrections.json').write_text(json.dumps([dict(jp=jp,kana=k,meaning=m) for jp,(k,m) in fix.items()],ensure_ascii=False,indent=2)+'\n')
(R/'data/kotoba-n4-normalized.json').write_text(json.dumps(dict(records=records,issues=issues),ensure_ascii=False,indent=2))
print('Normalized',len(records),'daily',len(daily),'issues',len(issues))
