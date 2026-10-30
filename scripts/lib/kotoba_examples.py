"""Simple N4 learning examples: authored fixed expressions and safe sentence frames.
Original examples are retained. Plain kana examples intentionally aid beginners.
"""
import json,re
from pathlib import Path
ROOT=Path(__file__).resolve().parents[2]

def load_authored():
    groups={}
    for p in sorted((ROOT/'data/kotoba-examples').glob('*.txt')):
        group={}
        for n,line in enumerate(p.read_text().splitlines(),1):
            if not line.strip() or line.startswith('#'):continue
            parts=line.split('|')
            if len(parts)!=3:raise ValueError(f'{p}:{n}: expected key|kana sentence|translation')
            key,jp,meaning=parts
            if key in group:raise ValueError(f'{p}:{n}: repeated key {key}')
            group[key]=dict(jp=jp,kana=jp,meaning=meaning)
        groups[p.stem]=group
    return groups

def gloss(e):
    s=e['meaning'].split(' / ')[0]
    s=re.sub(r'<[^>]*>|\([^)]*\)','',s).strip(' .;')
    s=re.split(r'[/;]',s)[0].strip(' .')
    return s

def example(j,k,m):return dict(jp=j,kana=k,meaning=m)

def make_example(e,authored):
    w,k=e['jp'],e['kana'];m=gloss(e);sub=e['subcategory'];cat=e['category']
    # Headword is required for ambiguous fixed expressions and affixes. Reading
    # maps are used only for adjective/adverb alternate spellings.
    for key in [w+':'+k,w]:
        for group in ['patterns','fragments','numbers','expressions','verbs']:
            if key in authored[group]:return authored[group][key], 'authored'
    if cat in ['adverb','adjective']:
        group='adverbs' if cat=='adverb' else 'adjectives'
        if k in authored[group]:return authored[group][k],'authored'
    if cat=='number':
        if re.fullmatch(r'\d+(か月|年)',w):
            return example(f'日本に{w}住んでいます。',f'にほん に {k} すんでいます。',f'Saya sudah tinggal di Jepang selama {m}.'),'duration-frame'
        if re.fullmatch(r'\d+人',w):
            return example(f'教室に{w}います。',f'きょうしつ に {k} います。',f'Di kelas ada {m}.'),'people-counter-frame'
    if cat=='verb' and '~' not in w:
        v,vk=w,k
        if w in ['生活','相談','休憩','調理','断水','通話','充電','吸引','両替','再生']:
            v+='する';vk+='する'
        if vk.endswith(tuple('うくぐすつぬぶむる')):
            return example(f'{v}こともあります。',f'{vk} ことも あります。',f'Ada kalanya {m[0].lower()+m[1:]}.'),'verb-occasional-frame'
    if cat=='noun' and '~' not in w:
        if re.match(r'bahasa\b',m,re.I) and w.endswith(('語','ご')):
            return example(f'{w}を勉強しています。',f'{k} を べんきょうしています。',f'Saya sedang mempelajari {m}.'),'language-frame'
        if sub=='Nama orang' and re.search(r'Bapak|Ibu|Nona|Bpk\.|Bpk\b',e['meaning']):
            suffix='' if k.endswith(('さん','くん','ちゃん','さま')) else 'さん'
            name=re.split(r'[/;(]',e['meaning'])[0].strip()
            return example(f'{w}{suffix}はどこですか。',f'{k}{suffix} は どこ ですか。',f'{name} ada di mana?'),'person-frame'
        if sub=='Hewan & tumbuhan':
            return example(f'{w}を見ました。',f'{k} を みました。',f'Saya melihat {m}.'),'seeing-frame'
        if sub=='Pakaian & aksesori' and not re.search(r'pakaian|busana|penampilan|gaya',m,re.I):
            return example(f'{w}を買いました。',f'{k} を かいました。',f'Saya membeli {m}.'),'shopping-frame'
        if sub=='Makanan & bahan masak' and not re.search(r'rasa|pasar|toko|permainan|musim|satuan|frekuensi|piring|bumbu|garam|gula|minyak|tepung|bahan|kandungan|alergi|pedas|asin|asap|harga|pahit|kalori|halal|rendah|bebas|tanpa|pertanian|ternak|racun|pesan|produksi|produk|makan|masak|pangan',m,re.I):
            return example(f'{w}を買いました。',f'{k} を かいました。',f'Saya membeli {m}.'),'food-shopping-frame'
        if sub=='Sekolah & bahasa':
            return example(f'{w}について勉強しています。',f'{k} に ついて べんきょうしています。',f'Saya sedang belajar tentang {m}.'),'study-frame'
        if re.fullmatch(r'(?:telepon seluler|komputer|kamus elektronik|mesin cuci|pendingin ruangan|AC|kamera|alat pencetak|printer|mesin penyedot debu|kalkulator|internet|ponsel|sumpit|sendok|garpu|sedotan|pisau|setrika|kompor gas|kompor portabel|cangkir|gelas|payung|tas)',m,re.I):
            return example(f'{w}を使います。',f'{k} を つかいます。',f'Saya menggunakan {m}.'),'tool-frame'
        if re.match(r'^(?:kota |negara |desa |stasiun|kuil |bandara|museum|taman |toko |restoran|pusat perbelanjaan|kebun binatang|sekolah )',m,re.I):
            return example(f'{w}へ行きます。',f'{k} へ いきます。',f'Saya pergi ke {m}.'),'place-frame'
        # Topic + について has no animacy, transitivity, countability, or physical
        # availability assumptions. Used for abstract or ambiguous nouns rather
        # than falsely calling every noun something to eat/wear/visit.
        return example(f'{w}について教えてください。',f'{k} に ついて おしえてください。',f'Tolong jelaskan tentang {m}.'),'topic-frame'
    return None,None
