"""Apply retained N5 examples after cleanup; flag remaining simple frames.
A frame flag is an editorial queue, never a verdict of incorrect Japanese.
"""
import json,re
from collections import Counter

def scan(entries,reviewed=()):
    reviewed=set(reviewed);queue=[];issues=[]
    for e in entries:
        ex=e.get('example') or {};j=ex.get('jp','');k=ex.get('kana','');t=ex.get('meaning','')
        for key in ('jp','kana','meaning'):
            if not isinstance(ex.get(key),str) or not ex[key].strip():issues.append(dict(id=e['id'],field=key,reason='missing-example-field'))
        if re.search(r'[一-龯]',k):issues.append(dict(id=e['id'],field='kana',reason='kanji-in-reading'))
        if re.search(r'\?\.|!\.|\)\(Tolong|^Ini\s*\.$',t):issues.append(dict(id=e['id'],field='meaning',reason='translation-punctuation-or-truncation'))
        if e['id'] in reviewed:continue
        reason=None
        if re.fullmatch(r'これは.+です。',j):reason='identification-frame'
        elif re.fullmatch(r'このかばんは.+です。',j):reason='bag-frame'
        elif re.fullmatch(r'私は.+。',j) and e['category']=='verb':reason='bare-verb-frame'
        elif j.endswith('、勉強します。'):reason='study-time-frame'
        if reason:queue.append(dict(id=e['id'],jp=e['jp'],kana=e['kana'],reason=reason,example=ex))
    duplicates=[dict(jp=j,count=n) for j,n in Counter(e.get('example',{}).get('jp','') for e in entries).items() if n>1]
    return dict(activeTotal=len(entries),missingFieldOrReadingIssues=issues,remainingFrameCounts=dict(Counter(e['reason'] for e in queue)),queue=queue,duplicateSentences=duplicates)

def apply_n5_review(root):
    folder=root/'data';path=folder/'kotoba-n5.json';data=json.loads(path.read_text());plan=json.loads((folder/'kotoba-n5-context-examples.json').read_text());known={e['id']:e for e in data['entries']}
    for row in plan['entries']:
        e=known[row['id']];assert (e['jp'],e['kana'])==(row['headword'],row['reading']),row['id'];ex=row['example']
        assert all(isinstance(ex.get(k),str) and ex[k].strip() for k in ('jp','kana','meaning'))
        assert ex['jp']==ex['kana'].replace(' ','') and ' ' in ex['kana'],row['id']
        e['example']=dict(ex)
    for row in plan['meaningCorrections']:
        e=known[row['id']];assert (e['jp'],e['kana'])==(row['headword'],row['reading']);e['meaning']=row['meaning']
    data['meta']['contextReviewDate']='2026-10-31';data['meta']['contextReviewCount']=len(plan['entries']);path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
    report=scan(data['entries'],(row['id'] for row in plan['entries']));report.update(updated=plan['updated'],reviewedExampleCount=len(plan['entries']),meaningCorrectionCount=len(plan['meaningCorrections']),reviewedIds=[row['id'] for row in plan['entries']],scope='Structural screening covers all active N5 cards. Selected examples were replaced/reviewed; a simple frame or duplicate is not proof of incorrect language. The remaining cards are not certified.',sources=plan['sources'])
    # Keep the source meanings requiring separate editorial attention visible.
    report['lexicalFollowup']=[dict(id=e['id'],jp=e['jp'],meaning=e['meaning'],reason='Check ambiguous source gloss and sense partition before expanding lexical audit') for e in data['entries'] if e['jp'] in ['マッチ','方','半分','一日','一月'] and e['jp']!='半分']
    (folder/'kotoba-n5-quality-review.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    return dict(reviewed=len(plan['entries']),remainingFrames=len(report['queue']),structuralFlags=len(report['missingFieldOrReadingIssues']))
