"""User rule: no filler interjections; N4 excludes words already taught in N5.
No reading-only removal: homophones with different meanings must survive.
"""
import json,re,unicodedata
from collections import defaultdict
from pathlib import Path
from kotoba_cleanup import is_name,clean
INTERJECTIONS=set('あ ああ あー あっ あのう あのー いやあ う え ええと えー えっと おお おー おっ はあ ははは ふふふ うふふ あはは ふうん ふーん へえ へー ほっ わあ わー まあ あら さあ'.split())
def norm(s):return re.sub(r'[\s・･]','',unicodedata.normalize('NFKC',s)).strip('。！？!?')
def senses(e):
    s=re.sub(r'\([^)]*\)|<[^>]*>','',e['meaning'])
    return {re.sub(r'[^\w]','',x.lower()) for x in re.split(r'[/;,]',s) if len(re.sub(r'[^\w]','',x))>2}
def forms(e):return {norm(w) for w in [e['jp']]+e.get('aliases',[])}
def kana(s):return ''.join(chr(ord(c)-96) if 'ァ'<=c<='ヶ' else c for c in norm(s))
def readings(e):return {kana(w) for w in [e['kana']]+e.get('readings',[])}
def has_kanji(s):return bool(re.search('[一-龯]',s))
REVIEWED_VARIANTS=dict(pair.split(':') for pair in "あぶない:危ない おかし:お菓子 かど:角 からあげ:唐揚げ きっぷ:切符 きゅうり:胡瓜 こうさてん:交差点 こんど:今度 すう:吸う すずしい:涼しい つぎ:次 ならう:習う ふく:吹く むこう:向こう いちご:苺 おそい:遅い 結婚:結婚する ちがう:違う 電話:電話する よやく:予約 旅行:旅行する しんぱいする:心配する さいこう:最高 むかえる:迎える 出する:出す 10日:十日 あける:開ける けする:消す 思い出する:思い出す しぬ:死ぬ おとなしい:大人しい しあわせ:幸せ たしか:確か もの:物 うすい:薄い はじめ:初め こわい:怖い くわしい:詳しい 真っ直ぐ:まっすぐ".split())
def match_n5(e,index):
    for b in index.get(kana(e['kana']),[]):
        if REVIEWED_VARIANTS.get(e['jp'])==b['jp']:return b,'reviewed-spelling-variant'
        if forms(e)&forms(b):return b,'same-writing-and-reading'
        if not(has_kanji(e['jp']) and has_kanji(b['jp'])) and kana(e['kana'])==kana(b['kana']) and senses(e)&senses(b):
            return b,'kana-variant-and-meaning'
    return None,None

def apply(root):
    root=Path(root);folder=root/'data';p=folder/'kotoba-level-policy-audit.json'
    report=json.loads(p.read_text()) if p.exists() else {'removedN5':[],'removedN4Interjections':[],'removedN4Duplicates':[]}
    n5=json.loads((folder/'kotoba-n5.json').read_text());n4=json.loads((folder/'kotoba-n4.json').read_text())
    report.setdefault('removedN5Names',[]);report.setdefault('removedN4Names',[]);report.setdefault('cleanedCards',{})
    names5={e['id']:e for e in report['removedN5Names']};names4={e['id']:e for e in report['removedN4Names'] if is_name(e)}
    old5={e['id']:e for e in report['removedN5']};old4={e['id']:e for e in report['removedN4Interjections']};olddup={r['entry']['id']:r for r in report['removedN4Duplicates']}
    # Match headword, not reading: 絵 (picture) and 母 (mother) must not be removed.
    keep5=[]
    for e in n5['entries']:
        if norm(e['jp']) in INTERJECTIONS:old5[e['id']]=e
        elif is_name(e):names5[e['id']]=e
        else:keep5.append(clean(e,'N5',report))
    for key,row in list(olddup.items()):
        if row['n5Id'] in names5:names4[key]=row['entry'];del olddup[key]
    index=defaultdict(list)
    for e in keep5:
        for k in readings(e):index[k].append(e)
    keep4=[]
    for e in n4['entries']:
        if is_name(e):names4[e['id']]=e;continue
        e=clean(e,'N4',report)
        # The imported kana card conflated 恋 (love) and 濃い (strong taste).
        # Keep the genuinely different noun; the taste adjective is in N5.
        if e['jp']=='こい' and 'cinta' in e['meaning']:
            e.update(jp='恋',meaning='cinta; asmara',category='noun',kind='noun',subcategory='Perasaan & pikiran',example={'jp':'彼は恋をしています。','kana':'かれ は こい を しています。','meaning':'Dia sedang jatuh cinta。'.replace('。','.')})
        if norm(e['jp']) in INTERJECTIONS:old4[e['id']]=e;continue
        b,why=match_n5(e,index)
        if b:olddup[e['id']]={'entry':e,'n5Id':b['id'],'reason':why}
        else:keep4.append(e)
    # Names absorbed by the prior orthographic merge are recorded in that ledger,
    # rather than counted twice as independent removed cards.
    merge_ledger=folder/'kotoba-duplicate-review.json'
    if merge_ledger.exists():
        alias_ids={row['id'] for row in json.loads(merge_ledger.read_text()).get('merged',[])}
        names4={key:e for key,e in names4.items() if key not in alias_ids}
    n5['entries']=keep5;n4['entries']=keep4
    for d in [n5,n4]:
        for e in d['entries']:
            c=next(c for c in d['categories'] if c['id']==e['category'])
            if e['subcategory'] not in c['subcategories']:c['subcategories'].append(e['subcategory'])
    ids5={e['id'] for e in keep5};ids4={e['id'] for e in keep4}
    redirects=dict(n4.get('mergedIds',{}));redirects.update({key:r['n5Id'] for key,r in olddup.items()})
    def target(key):
        seen=set()
        while key in redirects and key not in seen:seen.add(key);key=redirects[key]
        return key
    # Also redirect previous kana/kanji merges through their new N5 destination.
    n4['mergedIds']={k:target(k) for k in redirects if k not in ids4 and target(k) in ids4|ids5}
    for d in [n5,n4]:
        for i,e in enumerate(d['entries'],1):e['order']=i
        d['meta']['total']=len(d['entries']);d['meta']['levelPolicyVersion']=2
        d['meta']['examplesMissing']=sum(not e.get('example') for e in d['entries'])
        for c in d['categories']:
            c['subcategories']=[s for s in c['subcategories'] if any(e['category']==c['id'] and e['subcategory']==s for e in d['entries'])]
    n5['meta']['everydaySelected']=sum(any(s['id']==0 for s in e['sources']) for e in keep5)
    n4['meta']['everydaySelected']=sum(any(s['id']==13 for s in e['sources']) for e in keep4)
    n4['meta']['description']='Kosakata lanjutan N4 / A2; kata seru pengisi dan kata yang sudah tersedia di N5 dikeluarkan.'
    report.update(policy='Remove filler interjections by exact headword. Remove N4 by shared spelling plus reading, or kana variant plus matching reading and sense. Keep different kanji homophones. Greetings and meaningful replies retained.',removedN5Names=list(names5.values()),removedN4Names=list(names4.values()),removedN5=list(old5.values()),removedN4Interjections=list(old4.values()),removedN4Duplicates=list(olddup.values()))
    report['counts']={'N5':len(keep5),'N4':len(keep4),'interjectionsN5':len(old5),'interjectionsN4':len(old4),'duplicatesN4':len(olddup),'namesN5':len(names5),'namesN4':len(names4)}
    for name,d in [('kotoba-n5.json',n5),('kotoba-n4.json',n4),('kotoba-level-policy-audit.json',report)]:
        (folder/name).write_text(json.dumps(d,ensure_ascii=False,indent=2)+'\n')
    return report['counts']
