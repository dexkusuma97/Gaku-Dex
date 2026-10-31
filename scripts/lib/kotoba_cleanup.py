"""Reviewed names, mislabeled subcategories and visible-text cleanup."""
import re,unicodedata,copy
REAL_NAMES=set('バッハ モネ 桓武天皇 徳川しょうぐん 岡本太郎 黒澤明 黒柳徹子 津田梅子 湯川秀樹 安室奈美恵 三船敏郎 村上春樹 夏目漱石 ショパン 五嶋みどり 山下泰裕 足利義満 坂本龍馬 豊臣秀吉'.split())
RECLASSIFY={
 'お土産':('noun','Belanja & uang'), 'お客様':('noun','Orang & identitas'), '1人で':('adverb','Cara & keadaan'),
 '~様':('expression','Sapaan & perkenalan'), 'さん':('expression','Sapaan & perkenalan'),
 'ほん':('number','Satuan benda'), 'とうがらし':('noun','Makanan & bahan masak'),
 'どくしん':('noun','Keluarga & hubungan'), '~になる':('expression','Pola & kata bantu'),
 '主夫':('noun','Pekerjaan & kantor'), '~合':('number','Ukuran & satuan'),
}
def is_name(e):
    if e['jp'] in REAL_NAMES:return True
    if e['jp'] in RECLASSIFY or e['jp'] in ['上野','りょう','量']:return False
    if e['subcategory']=='Nama orang':return True
    # Titles in a gloss alone are not names (e.g. Bapak/Ibu are common honorifics).
    return bool(re.match(r"^[A-Z][A-Za-z’' .-]+/\s*(?:Bapak|Ibu|Nona|Bpk\.|Adik|Kakak)",e['meaning']))
def tidy(s):return re.sub(r'[ \t]+',' ',unicodedata.normalize('NFC',s)).strip()
def clean(e,level,report):
    before=copy.deepcopy(e)
    for field in ['jp','kana','romaji','meaning']:
        if isinstance(e.get(field),str):e[field]=tidy(e[field])
    # Deduplicate slash-separated glosses despite spacing and the aksesori variant.
    # Keep punctuation inside parentheses and preserve non-repeated gloss text.
    parts=[];start=0;depth=0
    for i,char in enumerate(e['meaning']):
        if char in '(<[':depth+=1
        elif char in ')>]':depth=max(0,depth-1)
        elif char=='/' and depth==0:
            parts.append(e['meaning'][start:i]);start=i+1
    parts.append(e['meaning'][start:])
    pieces=[];seen=set();duplicate=False
    for part in parts:
        value=tidy(part)
        key=re.sub(r'\baksesori\b','aksesoris',value.casefold())
        if key in seen:duplicate=True
        elif value:seen.add(key);pieces.append(value)
    if duplicate:e['meaning']=' / '.join(pieces)
    if e['jp'] in RECLASSIFY:
        e['category'],e['subcategory']=RECLASSIFY[e['jp']];e['kind']=e['category']
    if e['jp']=='上野':e['meaning']='Ueno (nama daerah di Tokyo)'
    if e['jp']=='りょう' and 'jumlah' in e['meaning']:
        e.update(jp='量',meaning='jumlah; porsi',category='noun',kind='noun',subcategory='Konsep & informasi',example={'jp':'量は多くないです。','kana':'りょう は おおく ない です。','meaning':'Jumlahnya tidak banyak.'})
        e['aliases']=sorted(set(e.get('aliases',[])+['りょう']))
    for old,new,k,roman in [('いっぽん<じゅうどう>','いっぽん','いっぽん','ippon'),('わざあり<じゅうどう>','わざあり','わざあり','wazaari')]:
        if e['jp']==old:
            e.update(jp=new,kana=k,romaji=roman,readings=[k],note='Istilah dalam judo.')
            e['aliases']=[a for a in e.get('aliases',[]) if '<' not in a and 'じゅうどう' not in a]
    # Correct a source transcription that was previously rendered as filler text.
    if e['jp']=='そうね......':
        e['jp']='そうね';e['meaning']='begitu, ya; coba saya pikir';e['category']=e['kind']='expression';e['subcategory']='Tanggapan & perasaan'
        e['example']={'jp':'そうね、明日にしましょう。','kana':'そうね、あした に しましょう。','meaning':'Begitu, ya. Kita jadwalkan besok saja.'}
    fixes={
      '旅券':('paspor','りょけんをかばんにいれました。','りょけん を かばん に いれました。','Saya memasukkan paspor ke tas.'),
      '予約':('pemesanan; reservasi','レストランの予約をします。','れすとらん の よやく を します。','Saya membuat reservasi restoran。'.replace('。','.')),
      'レコード':('piringan hitam; rekaman','レコードで音楽を聞きます。','れこーど で おんがく を ききます。','Saya mendengarkan musik dari piringan hitam.'),
      'ストーブ':('pemanas ruangan','冬はストーブを使います。','ふゆ は すとーぶ を つかいます。','Pada musim dingin, saya menggunakan pemanas ruangan.'),
      'コース':('kursus; jalur; program; mode (mesin)','日本語のコースを選びます。','にほんご の こーす を えらびます。','Saya memilih kursus bahasa Jepang.'),
    }
    if e['jp'] in fixes:
        m,j,k,t=fixes[e['jp']];e['meaning']=m;e['example']={'jp':j,'kana':k,'meaning':t}
        if e['jp']=='予約':e['category']=e['kind']='noun';e['subcategory']='Layanan & administrasi' if level=='N4' else 'Belanja & uang'
    if e['jp']=='き' and 'perasaan' in e['meaning']:
        e.update(jp='気',meaning='perasaan; suasana hati',category='noun',kind='noun',subcategory='Perasaan & pikiran',example={'jp':'気が楽になりました。','kana':'き が らく に なりました。','meaning':'Perasaan saya menjadi lebih lega.'})
        e['aliases']=sorted(set(e.get('aliases',[])+['き']))
    if e['jp']=='スポーツ':e['meaning']='olahraga'
    changed={f:{'before':before.get(f),'after':e.get(f)} for f in e if before.get(f)!=e.get(f)}
    if changed:
        key=level+':'+e['id'];row=report['cleanedCards'].setdefault(key,{'jp':e['jp'],'fields':{}})
        for field,values in changed.items():
            if field in row['fields']:row['fields'][field]['after']=values['after']
            else:row['fields'][field]=values
    return e
