"""Precise, editable teaching diagrams. Run from the repository root."""
from pathlib import Path
from html import escape
out=Path('dist/assets/grammar');out.mkdir(parents=True,exist_ok=True)
INK='#30483f';PURPLE='#8a6caf';GREEN='#438a78';ORANGE='#ca8440';MUTED='#657c73'
def text(x,y,s,size=26,color=INK,weight='500',anchor='middle'):
 return f'<text x="{x}" y="{y}" font-size="{size}" fill="{color}" font-weight="{weight}" text-anchor="{anchor}">{escape(s)}</text>'
def lines(x,y,ss,size=24,color=INK,gap=34):return ''.join(text(x,y+i*gap,s,size,color) for i,s in enumerate(ss))
def rect(x,y,w,h,fill='#fff',rx=18,stroke='none'):
 return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="3"/>'
def line(x,y,a,b,color=PURPLE,arrow=False,dash=False,width=5):
 return f'<path d="M{x} {y}L{a} {b}" fill="none" stroke="{color}" stroke-width="{width}" stroke-linecap="round"'+(' marker-end="url(#arrow)"' if arrow else '')+(' stroke-dasharray="8 9"' if dash else '')+'/>'
def dot(x,y,color=PURPLE,r=11):return f'<circle cx="{x}" cy="{y}" r="{r}" fill="{color}" stroke="#fff" stroke-width="3"/>'
def person(x,y,name,color=PURPLE,face=0):
 return f'<g transform="translate({x} {y})"><circle cy="-30" r="23" fill="#ffe1bc"/><path d="M-30 40v-28q30-28 60 0v28" fill="{color}"/><circle cx="{-7+face}" cy="-33" r="2.8" fill="{INK}"/><circle cx="{7+face}" cy="-33" r="2.8" fill="{INK}"/><path d="M-5 -22q5 5 10 0" fill="none" stroke="{INK}" stroke-width="2"/></g>'+ (text(x,y+70,name,24) if name else '')
def book(x,y,w=46):return rect(x,y,w,48,'#e9b870',6)+line(x+10,y+5,x+10,y+42,'#fff',width=3)
def pill(x,y,w,jp,idn):return rect(x,y,w,85)+text(x+w/2,y+34,jp,28,weight='700')+text(x+w/2,y+67,idn,22,MUTED)
def save(name,title,body,h,desc):
 svg=f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 {h}" role="img" aria-labelledby="title desc"><title id="title">{escape(title)}</title><desc id="desc">{escape(desc)}</desc><defs><marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill="context-stroke"/></marker></defs><style>text{{font-family:'Noto Sans JP','Hiragino Kaku Gothic ProN','Yu Gothic',sans-serif}}</style>{rect(0,0,720,h,'#f0f6f3',24)}{text(360,48,title,29,weight='700')}{body}</svg>'''
 sid=name.removesuffix('.svg')
 svg=svg.replace('id="title"','id="'+sid+'-title"').replace('id="desc"','id="'+sid+'-desc"').replace('aria-labelledby="title desc"','aria-labelledby="'+sid+'-title '+sid+'-desc"').replace('id="arrow"','id="'+sid+'-arrow"').replace('url(#arrow)','url(#'+sid+'-arrow)')
 (out/name).write_text(svg)
# 1: Facing people, three distances, noun-modifying forms.
b=person(86,310,'私 · saya',PURPLE,6)+person(634,310,'kamu',GREEN,-6)
b+=line(112,311,147,296,PURPLE,width=9)+line(608,311,573,296,GREEN,width=9)
b+=line(145,248,330,150,'#b7cec3',dash=True)+line(575,248,390,150,'#b7cec3',dash=True)
b+=book(185,282)+book(489,282)+book(337,110)+text(208,264,'これ',30)+text(512,264,'それ',30)+text(360,98,'あれ',30)
b+=pill(24,408,216,'これ','dekat saya')+pill(252,408,216,'それ','dekat kamu')+pill(480,408,216,'あれ','jauh dari kita')
b+=rect(24,515,672,105)+text(360,551,'この ほん ／ その ほん ／ あの ほん',29,weight='700')+text(360,590,'buku ini ／ buku itu ／ buku itu (jauh)',24,MUTED)
save('bab02-kore-sore-are.svg','Benda: ini, itu, itu yang jauh',b,646,'Pembicara kiri dan lawan bicara kanan saling berhadapan. Tiga buku: dekat saya, dekat kamu, dan jauh dari keduanya. この／その／あの langsung diikuti ほん.')
# 2: Top-down plan and polite place/direction equivalents.
b=rect(24,80,672,330,'#fff',18,'#d4e3da')
for x,name,col in [(105,'saya',PURPLE),(615,'kamu',GREEN)]:b+=dot(x,310,col,29)+text(x,369,name,23)
b+=line(137,310,170,310,PURPLE,True)+line(583,310,550,310,GREEN,True)
for x,y,jp,label,col in [(220,288,'ここ','di sini',PURPLE),(500,288,'そこ','di situ',GREEN),(360,138,'あそこ','di sana',ORANGE)]:
 b+=dot(x,y,col,14)+text(x,y-27,jp,31,weight='700')+text(x,y+47,label,23,MUTED)
b+=text(360,451,'Versi sopan untuk menunjuk tempat / arah',25,weight='700')
for x,jp,idn in [(24,'こちら','di sini / arah sini'),(252,'そちら','di situ / arah situ'),(480,'あちら','di sana / arah sana')]:b+=pill(x,477,216,jp,idn)
save('bab03-koko-soko-asoko.svg','Tempat dilihat dari atas',b,590,'Denah dari atas: saya di kiri, kamu di kanan, titik ここ dekat saya, そこ dekat kamu, あそこ jauh dari keduanya. Versi sopan こちら／そちら／あちら.')
# 3: One shared box, not eleven separate unrelated scenes.
b=text(360,94,'Bola merah muda = benda yang dicari',24,MUTED)
# Back ball first, partly hidden by the main box.
b+=dot(405,243,'#ce85ac',17)+text(473,224,'うしろ',27)+text(485,253,'belakang',21,MUTED)
b+=f'<path d="M245 282l45-35h186l-45 35z" fill="#f0dfbf" stroke="#bb9b67" stroke-width="3"/>'+rect(245,282,186,150,'#f2dfbd',5,'#bb9b67')+f'<path d="M431 282l45-35v150l-45 35z" fill="#d6bd94" stroke="#bb9b67" stroke-width="3"/>'
b+=rect(275,319,116,79,'#fff6e6',5,'#d2b78e')+dot(330,356,'#ce85ac',14)+text(330,388,'なか',24)
b+=text(344,419,'正面 · depan kotak',18,MUTED)
for x,y,jp,idn,tx,ty in [(337,181,'うえ','atas',337,131),(337,496,'した','bawah',337,538),(188,348,'ひだり','kiri',100,320),(532,348,'みぎ','kanan',600,320),(338,444,'まえ','depan',208,464),(562,178,'そと','luar',575,124),(535,431,'となり','sebelah',609,453),(557,542,'ちかく','dekat',586,583)]:
 b+=dot(x,y,'#ce85ac',14)+text(tx,ty,jp,27,weight='700')+text(tx,ty+28,idn,21,MUTED)
 if (x,y)==(338,444):b+=line(226,450,316,444,'#ce85ac',width=2)
b+=rect(24,623,672,135)+rect(155,658,62,54,'#e6d2ae',6)+dot(360,684,'#ce85ac',16)+rect(503,658,62,54,'#e6d2ae',6)+line(229,685,332,685,'#bfcfc5',dash=True)+line(388,685,490,685,'#bfcfc5',dash=True)+text(360,651,'あいだ · antara dua benda',27,weight='700')
b+=text(360,802,'つくえの うえに ほんが あります。',29,weight='700')+text(360,841,'Ada buku di atas meja.',24,MUTED)
save('bab10-posisi.svg','Di mana bendanya?',b,870,'Satu kotak besar dan bola: atas, bawah, dalam, luar, depan, belakang, kanan, kiri, sebelah dan dekat. Panel bawah: bola di antara dua kotak. Depan kotak menghadap pembaca.')
# 4: General tsu counting plus four icon groups.
b=rect(24,80,672,150)+text(360,113,'Hitungan umum (1–10)',25,weight='700')+lines(360,155,['ひとつ　ふたつ　みっつ　よっつ　いつつ','むっつ　ななつ　やっつ　ここのつ　とお'],26,gap=39)
for i,(jp,idn) in enumerate([('〜にん','orang'),('〜まい','lembar kertas'),('〜だい','kendaraan / mesin'),('〜こ','apel / benda kecil')]):
 x=24+i%2*342;y=254+i//2*285;b+=rect(x,y,330,264)
 if i==0:
  for dx in [100,165,230]:b+=person(x+dx,y+85,'',PURPLE)
 if i==1:
  for d in [0,10,20]:b+=rect(x+120+d,y+30+d,70,85,'#e3d9f3',4,'#b8a1d0')
 if i==2:b+=rect(x+80,y+72,170,52,'#99cabb',12)+rect(x+115,y+40,100,45,'#c9e8f1',8)+dot(x+111,y+126,INK,13)+dot(x+220,y+126,INK,13)
 if i==3:b+=f'<path d="M{x+165} {y+57}c-45-35-79 22-44 64 21 22 27 5 44 5s23 17 44-5c35-42 1-99-44-64z" fill="#e6a17b"/>'+line(x+165,y+58,x+172,y+32,GREEN,width=6)
 b+=text(x+165,y+175,jp,32,weight='700')+text(x+165,y+208,idn,23,MUTED)
 if i==0:b+=text(x+165,y+243,'ひとり・ふたり・さんにん',23)
 else:b+=text(x+165,y+243,['','いちまい・にまい','いちだい・にだい','いっこ・にこ'][i],24)
save('bab11-satuan-hitung.svg','Pilih hitungan sesuai bendanya',b,831,'Hitungan umum ひとつ sampai とお. Empat kelompok ikon: orang にん dengan pengecualian ひとり・ふたり, kertas まい, kendaraan atau mesin だい, apel こ.')
# 5: Duration first, deadline second; same 5 o'clock boundary.
b=''
for y,jp,meaning,col in [(88,'〜まで','berlangsung terus sampai batas',PURPLE),(381,'〜までに','selesai paling lambat pada batas',GREEN)]:
 b+=rect(24,y,672,270)+text(360,y+43,jp,34,col,'700')+text(360,y+81,meaning,25,MUTED)+line(88,y+160,637,y+160,'#c8d7cf',True)+line(565,y+109,565,y+190,ORANGE,width=5)+text(565,y+219,'5じ · jam 5',24,ORANGE)
 if jp=='〜まで':b+=line(88,y+160,560,y+160,PURPLE,width=10)+text(360,y+255,'5じまで はたらきます。',28)
 else:b+=dot(350,y+160,GREEN,15)+text(350,y+138,'selesai',23,GREEN)+line(375,y+160,546,y+160,GREEN,dash=True,width=3)+text(360,y+255,'5じまでに かえります。',28)
b+=text(360,690,'Ungu: kegiatan terus berjalan. Hijau: sudah selesai.',24,MUTED)+text(360,724,'〜までに juga boleh tepat pada batas akhirnya.',23,MUTED)
save('bab17-made-madeni.svg','Sampai kapan atau paling lambat kapan?',b,753,'Dua garis waktu dengan batas tegak pada jam lima. Atas まで: bekerja terus sampai lima. Bawah までに: pulang sebelum atau tepat jam lima; titik contoh selesai lebih awal.')
# 6: One shared timeline and examples.
b=line(70,207,650,207,arrow=True)+dot(360,207,ORANGE,16)+text(360,168,'kejadian',29,weight='700')+text(180,254,'sebelum',24,MUTED)+text(540,254,'setelah',24,MUTED)
b+=pill(24,290,330,'〜まえに','sebelum kejadian')+pill(366,290,330,'〜あとで','setelah kejadian')
b+=rect(24,400,672,175)+text(360,442,'ねるまえに ほんを よみます。',29,weight='700')+text(360,478,'Sebelum tidur, saya membaca buku.',24,MUTED)+text(360,523,'しごとの あとで のみに いきます。',28,weight='700')+text(360,559,'Setelah bekerja, saya pergi minum.',24,MUTED)
save('bab18-34-mae-ato.svg','Sebelum dan sesudah kejadian',b,605,'Satu garis waktu dengan titik kejadian di tengah, まえに di kiri dan あとで di kanan. Contoh sebelum tidur membaca buku, setelah bekerja pergi minum. Dipakai Bab 18 dan 34.')
# 7: Three panels; B stays present as the other observer in each scene.
b=''
for i,(verb,label,col,reverse) in enumerate([('あげます','Saya memberi kepada A.',PURPLE,False),('くれます','A memberi saya / keluarga saya.',GREEN,True),('もらいます','Saya menerima dari A.',ORANGE,True)]):
 y=80+i*292;b+=rect(24,y,672,270)+text(360,y+44,verb,33,col,'700')
 b+=person(130,y+130,'私 · saya',PURPLE,4)+person(505,y+130,'A',GREEN,-4)+person(634,y+140,'B','#b9c6c0',-3)
 b+=line(438 if reverse else 197,y+115,197 if reverse else 438,y+115,col,True,width=8)+book(295,y+93)
 if i==2:b+=f'<ellipse cx="130" cy="{y+137}" rx="58" ry="94" fill="none" stroke="{ORANGE}" stroke-width="3" stroke-dasharray="7 7"/>'+text(360,y+230,'Sudut pandang: penerima (私)',23,ORANGE)
 b+=text(360,y+(260 if i==2 else 249),label,25)
b+=text(360,995,'Panah = arah benda. B = orang lain di sekitar.',24,MUTED)
save('bab24-memberi-menerima.svg','Memberi atau menerima: lihat arahnya',b,1025,'Tiga panel dengan saya, A dan B. あげます saya ke A; くれます A ke saya atau keluarga saya; もらいます saya menerima dari A. Penerima disorot pada panel ketiga. Bab 7 dan 24.')
# 8: Identical actual window geometry on both sides. Thin glass panes, no door panels.
def window(x,y):
 return rect(x,y,200,150,'#d8edf3',3,'#77a2b1')+rect(x+12,y+12,176,126,'#f5fbfc',0)+line(x+100,y+4,x+100,y+146,'#77a2b1',width=4)+f'<path d="M{x+13} {y+13}l48 22v84l-48 18z M{x+187} {y+13}l-48 22v84l48 18z" fill="#d6edf3" fill-opacity=".65" stroke="#77a2b1" stroke-width="3"/>'+line(x-8,y+155,x+208,y+155,'#aabeb5',width=6)
b=''
for x in [24,366]:b+=rect(x,80,330,450)
b+=text(189,123,'Keadaan terlihat',26,PURPLE,'700')+text(531,123,'Ada tujuan / persiapan',26,GREEN,'700')+window(89,170)+window(431,170)+text(308,182,'?',36,PURPLE,'700')+person(659,296,'',GREEN,-4)
b+=text(189,380,'まどが',29)+text(189,419,'あいています',30,PURPLE,'700')+text(531,380,'まどが',29)+text(531,419,'あけて あります',29,GREEN,'700')
b+=lines(189,459,['Jendela terbuka.','Tidak tahu siapa yang','membukanya.'],22,gap=27)+lines(531,459,['Ada yang sengaja membuka','jendela (misalnya','untuk ventilasi).'],22,gap=27)
b+=rect(24,551,672,155)+text(360,592,'〜ています = keadaan hasil,',26,PURPLE,'700')+text(360,625,'penyebab tidak disebut.',25)+text(360,670,'〜てあります = hasil perbuatan disengaja.',25,GREEN,'700')
b+=lines(360,751,['Pasangan kata: あく (terbuka) ↔ あける (membuka)','Contoh lain: われる (pecah) ↔ わる (memecahkan)'],25,gap=38)+text(360,833,'あく／われる tidak menyebut pelaku;',23,MUTED)+text(360,864,'bukan berarti selalu terjadi dengan sendirinya.',23,MUTED)
save('bab29-30-teiru-vs-tearu.svg','Jendela sama, fokus kalimat berbeda',b,894,'Dua panel berdampingan dengan jendela yang sama, kusen dan kaca tipis, sama-sama terbuka. Kiri tanda tanya dan まどが あいています; kanan ikon orang dan まどが あけて あります. Pasangan あく／あける dan われる／わる.')
# 9: Same actors and same arrow in two rows; receiver highlighted only below.
b=''
for i,(heading,sentence) in enumerate([('AKTIF','せんせいが わたしを ほめました'),('PASIF','わたしは せんせいに ほめられました')]):
 y=80+i*315;b+=rect(24,y,672,290)+text(360,y+39,heading,23,PURPLE,'700')+text(360,y+85,sentence,29,weight='700')
 if i:b+=rect(480,y+119,151,151,'#ede3fa',20, PURPLE)
 b+=person(150,y+184,'せんせい',GREEN,4)+person(555,y+184,'わたし',PURPLE,-4)+line(219,y+173,483,y+173,GREEN,True,width=8)+text(350,y+153,'pujian',23,MUTED)
b+=text(360,755,'に = pelaku (せんせいに)',27,weight='700')+text(360,796,'Yang dikenai menjadi topik: わたしは',26)+text(360,834,'Arah pujiannya tetap sama: guru → saya.',24,MUTED)
save('bab37-pasif.svg','Peristiwa sama, sudut pandang berbeda',b,864,'Dua baris aktif dan pasif dengan panah guru ke saya yang sama. Aktif lengkap: guru memuji saya. Pasif lengkap: saya dipuji oleh guru. Pada pasif saya disorot sebagai topik; に menandai pelaku.')
# 10: One horizontal timeline, examples and separate subjective bakari indicator.
b=line(66,176,655,176,arrow=True)
for x,col in [(130,PURPLE),(360,ORANGE),(590,GREEN)]:b+=dot(x,176,col,15)
b+=text(130,128,'sebelum',25)+text(360,128,'sedang',25)+text(590,128,'setelah',25)
for i,(jp,meaning,ex) in enumerate([('〜る ところ','baru akan','たべる ところです。'),('〜ている ところ','sedang','たべている ところです。'),('〜た ところ','baru saja selesai','たべた ところです。')]):
 y=227+i*147;b+=rect(24,y,672,127)+text(360,y+35,jp+' · '+meaning,28,weight='700')+text(360,y+87,ex,29)
b+=rect(24,690,672,185,'#fff2df')+text(360,732,'〜た ばかり',31,ORANGE,'700')+text(360,775,'Baru saja menurut perasaan pembicara.',25)+text(360,814,'Tidak harus tepat sesaat setelah selesai.',24,MUTED)+text(360,853,'にほんに きた ばかりです。',28)
save('bab46-tokoro.svg','Sebelum, sedang, dan tepat sesudah',b,903,'Satu garis waktu tiga titik: るところ baru akan, ているところ sedang, たところ tepat baru selesai, semuanya dengan contoh makan. たばかり terpisah: baru saja menurut perasaan pembicara, bukan titik waktu yang sama.')
# 11: Boss points; employee performs the going action, employee also asks permission.
b=person(123,190,'ぶちょう · atasan',GREEN,5)+person(560,190,'ミラーさん',PURPLE,-5)+line(153,204,206,167,GREEN,width=10)+line(215,175,487,175,ORANGE,True,width=8)+text(360,129,'いかせます',32,ORANGE,'700')
b+=line(590,206,653,206,PURPLE,True)+text(631,184,'pergi',23,MUTED)+rect(599,288,80,65,'#e4d6f2',6)+text(639,329,'大阪',25)
b+=rect(24,386,672,120)+text(360,430,'ぶちょうは ミラーさんを',29,weight='700')+text(360,470,'おおさかへ いかせました。',29,weight='700')
b+=text(360,547,'Atasan menyuruh Miller pergi ke Osaka.',25,MUTED)
b+=rect(24,581,672,220,'#fff2df')+f'<path d="M550 581l22-36 12 36z" fill="#fff2df"/>'+text(360,629,'いかせて ください',32,ORANGE,'700')+text(360,673,'“Mohon izinkan saya pergi.”',26)+text(360,717,'Yang berbicara = yang akan pergi.',25)+text(360,761,'Di sini Miller meminta izin kepada atasan.',24,MUTED)
save('bab48-kausatif.svg','Menyuruh pergi dan meminta izin',b,830,'Atasan kiri menunjuk bawahan kanan; panah menyuruh dari atasan ke bawahan. Miller melakukan aksi pergi ke Osaka. Gelembung permintaan izin berasal dari Miller, yang juga menjadi pelaku pergi.')
# 12: Two actual stairs, formulas visibly separated from special vocabulary.
b=''
for x,title in [(24,'Bab 49 · hormat'),(366,'Bab 50 · merendah')]:
 b+=rect(x,80,330,565)+text(x+165,124,title,28,weight='700')+f'<path d="M{x+30} 390h80v-70h80v-70h100" fill="none" stroke="#c5b3de" stroke-width="13" stroke-linejoin="round"/>'
b+=person(260,184,'tamu / atasan',GREEN)+person(437,343,'saya',PURPLE)+line(73,275,207,183,GREEN,True)+line(661,290,511,392,PURPLE,True)
b+=text(189,454,'いらっしゃいます',29,GREEN,'700')+text(189,493,'dia pergi / datang / ada',24,MUTED)+text(531,454,'まいります',31,PURPLE,'700')+text(531,493,'saya pergi / datang',24,MUTED)
b+=text(189,546,'Pola umum',22,MUTED)+text(189,582,'お V-ます(stem)',25,weight='700')+text(189,618,'になります',29,weight='700')+text(531,546,'Pola umum',22,MUTED)+text(531,582,'お V-ます(stem)',25,weight='700')+text(531,618,'します',29,weight='700')
b+=lines(360,693,['stem = bagian kata kerja setelah ます dilepas.','Contoh: よみます → よみ','Kata khusus di atas tidak dibentuk dengan rumus ini.'],24,gap=37)+text(360,826,'Tangga = sikap berbahasa, bukan nilai pribadi.',24,MUTED)
save('bab49-50-hormat-merendah.svg','Hormat kepada orang lain, rendah untuk diri',b,857,'Dua tangga berdampingan. Kiri tamu atau atasan di anak tangga atas dengan いらっしゃいます. Kanan saya di anak tangga bawah dengan まいります. Di bawah setiap tangga pola umum お V-ます(stem)になります dan お V-ます(stem)します, terpisah dari kata kerja khusus.')
print('Created',len(list(out.glob('*.svg'))),'SVG illustrations')
