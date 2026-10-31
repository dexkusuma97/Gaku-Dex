"""Apply retained editorial examples after normalization/level cleanup.
Report remaining repetitive examples without calling them linguistically wrong.
"""
import json
from collections import Counter

def apply_context_review(root):
    path=root/'data/kotoba-n4.json'
    data=json.loads(path.read_text())
    edits=json.loads((root/'data/kotoba-n4-context-examples.json').read_text())['entries']
    known={e['id']:e for e in data['entries']}
    assert len({e['id'] for e in edits})==len(edits)
    applied=[]
    for row in edits:
        e=known.get(row['id'])
        # A rebuild before level policy still has the reviewed IDs. A future
        # removal must deliberately update this editorial file.
        if e is None:raise ValueError('Reviewed card missing: '+row['id'])
        assert (e['jp'],e['kana'])==(row['headword'],row['reading']),row['id']
        ex=row['example'];assert all(ex.get(k,'').strip() for k in ['jp','kana','meaning'])
        e['example']=dict(ex);applied.append(e['id'])
    data['meta']['contextReviewDate']='2026-10-31'
    data['meta']['contextReviewCount']=len(applied)
    path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
    queue=[]
    for e in data['entries']:
        jp=e.get('example',{}).get('jp','')
        reason='topic-frame' if 'について教えてください' in jp else 'occasional-frame' if 'こともあります' in jp else None
        if reason:queue.append({'id':e['id'],'jp':e['jp'],'kana':e['kana'],'meaning':e['meaning'],'reason':reason})
    report={'updated':'2026-10-31','activeTotal':len(known),'reviewedBatch':applied,'remainingFrameCounts':dict(Counter(e['reason'] for e in queue)),'note':'Queue flags repetitive frames, not proven errors. Other examples and all glosses still require editorial review.','queue':queue}
    (root/'data/kotoba-n4-quality-review.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n')
    return {'reviewed':len(applied),'remainingFrames':len(queue)}
