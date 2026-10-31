"""Deterministic, source-tracked repairs for the 37 final review records.
Run before level policy so corrected N5 duplicates and names use normal removal.
"""
import copy,json

def apply_lexical_review(root):
    folder=root/'data';path=folder/'kotoba-n4.json'
    data=json.loads(path.read_text());plan=json.loads((folder/'kotoba-n4-lexical-repairs.json').read_text())
    known={e['id']:e for e in data['entries']};redirects=dict(data.get('mergedIds',{}))
    for row in plan['updates']:
        if row['id'] not in known:
            if row['id']==plan['n5Duplicate']['id'] and redirects.get(row['id'])==plan['n5Duplicate']['target']:continue
            raise ValueError('Missing repair target: '+row['id'])
        known[row['id']].update(copy.deepcopy(row['patch']))
    for row in plan['splits']:
        if row['id'] not in known:
            entry=copy.deepcopy(known[row['parent']]);entry['id']=row['id'];data['entries'].append(entry);known[entry['id']]=entry
        known[row['id']].update(copy.deepcopy(row['patch']))
    removed=set()
    for row in plan['merges']:
        target=known[row['target']]
        if row['source'] in known:
            source=known[row['source']]
            target['sources']=[dict(id=i,page=p) for i,p in sorted({(s['id'],s['page']) for s in source['sources']+target['sources']})]
            target['aliases']=sorted(set(target.get('aliases',[])+[row['reading']])-{target['jp']})
            removed.add(row['source'])
        redirects[row['source']]=row['target']
    data['entries']=[e for e in data['entries'] if e['id'] not in removed]
    data['mergedIds']=redirects
    data['meta']['lexicalReviewVersion']=plan['version']
    path.write_text(json.dumps(data,ensure_ascii=False,indent=2)+'\n')
    audit=dict(updated=plan['updated'],reviewedSourceCount=len(plan['originalRecords']),originalRecords=plan['originalRecords'],merged=plan['merges'],added=plan['splits'],removedNames=plan['removeNames'],n5Duplicate=plan['n5Duplicate'],sources=plan['sources'],note='Stable IDs retained for primary senses. Old merged IDs redirect to existing cards. Name removal and N5 isolation are applied by level policy. Sources for split senses are assigned from retained normalized rows.')
    (folder/'kotoba-n4-lexical-repair-audit.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
    return dict(reviewed=len(plan['originalRecords']),splits=len(plan['splits']),merges=len(plan['merges']))

def finalize_lexical_review(root):
    folder=root/'data';plan=json.loads((folder/'kotoba-n4-lexical-repairs.json').read_text());data=json.loads((folder/'kotoba-n4.json').read_text())
    known={e['id']:e for e in data['entries']};names={r['id'] for r in plan['removeNames']};merges={r['source']:r['target'] for r in plan['merges']};dup=plan['n5Duplicate'];resolutions=[]
    for old in plan['originalRecords']:
        ident=old['id'];target=None
        if ident in names:
            assert ident not in known
            action='removed-personal-name'
        elif ident in merges:
            target=merges[ident];assert ident not in known and data['mergedIds'][ident]==target and target in known
            action='merged-duplicate'
        elif ident==dup['id']:
            target=dup['target'];assert ident not in known and data['mergedIds'][ident]==target
            action='redirected-to-n5'
        else:
            assert ident in known
            action='corrected-or-sense-separated';target=ident
        resolutions.append(dict(id=ident,oldHeadword=old['jp'],action=action,target=target))
    p=folder/'kotoba-n4-lexical-repair-audit.json';audit=json.loads(p.read_text());audit['resolutions']=resolutions;audit['status']='resolved';p.write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
    pending=dict(status='resolved',remainingCount=0,entries=[],resolved=resolutions,note='The 37 flagged records are resolved by correction, sense separation, duplicate redirect or name removal. This does not certify all other vocabulary records.')
    (folder/'kotoba-n4-lexical-review-pending.json').write_text(json.dumps(pending,ensure_ascii=False,indent=2)+'\n')
