"""Verified N5 reference layer; retain beginner examples and legitimate word forms."""
import copy,json

def enrich(root,entries):
    folder=root/'data';ref=json.loads((folder/'kanji-n5-reference.json').read_text());plan=json.loads((folder/'kanji-n5-editorial.json').read_text());audit=[]
    assert len(entries)==len(ref['entries'])==len(plan['entries'])==115
    for e in entries:
        old=copy.deepcopy(e);source=ref['entries'][e['char']];edit=plan['entries'][e['char']]
        for group in ('on','kun'):
            allowed=set(source[group])|{s['reading'] for s in plan['supplementaryReadings'] if s['char']==e['char'] and s['group']==group}
            assert set(edit[group])==allowed
        e.update(on=edit['on'],kun=edit['kun'],strokes=source['strokes'],radical=source['radical'],english=edit['english'],mnemonic=edit['mnemonic'])
        assert 1<=len(e['examples'])<=2 and all(e.get(k) for k in ('meaning','english','mnemonic','radical','strokes'))
        e['reference']=dict(source='KANJIDIC2',version=ref['header']['database_version'],radicalNumber=source['radicalNumber'])
        audit.append(dict(id=e['id'],char=e['char'],fieldsChanged=[k for k in e if e.get(k)!=old.get(k)],factChanges={k:dict(before=old[k],after=e[k]) for k in ('strokes','radical') if old[k]!=e[k]}))
    (folder/'kanji-n5.json').write_text(json.dumps(dict(meta=dict(total=115,reviewed='2026-11-01',readingPolicy=plan['note']),entries=entries),ensure_ascii=False,indent=2)+'\n')
    report=dict(updated=plan['updated'],total=115,complete=115,examples=sum(len(e['examples']) for e in entries),emptyOn=sum(not e['on'] for e in entries),emptyKun=sum(not e['kun'] for e in entries),referenceVersion=ref['header']['database_version'],referenceCreated=ref['header']['date_of_creation'],referenceArchiveSha256=ref['archiveSha256'],supplementaryReadings=plan['supplementaryReadings'],note='Existing complete sections retained after review; dictionary extras are folded in UI. Radical family 毋/母 is standardized to the classical reference. Word forms yasumi/suki and the juu reading of 中 are explicitly supported by complementary sources.',entries=audit)
    (folder/'kanji-n5-completeness-review.json').write_text(json.dumps(report,ensure_ascii=False,indent=2)+'\n');return entries
