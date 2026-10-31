"""Apply the retained KANJIDIC2 reference and original N4 editorial material."""
import copy,json

def enrich(root,entries):
    folder=root/'data';ref=json.loads((folder/'kanji-n4-reference.json').read_text());plan=json.loads((folder/'kanji-n4-editorial.json').read_text());report=[];used=set();adapt={(r['sourceWord'],r['sourceKana']):r for r in plan['exampleCorrections']}
    assert len(entries)==len(ref['entries'])==len(plan['entries'])==287
    for e in entries:
        old=copy.deepcopy(e);source=ref['entries'][e['char']];edit=plan['entries'][e['char']]
        assert set(edit['on'])==set(source['on']) and set(edit['kun'])==set(source['kun'])
        assert source['strokes']>0 and 1<=source['radicalNumber']<=214
        e.update(strokes=source['strokes'],radical=source['radical'],english=edit['english'],mnemonic=edit['mnemonic'],on=edit['on'],kun=edit['kun'])
        examples=[];seen=set()
        for original in old['examples']:
            x=copy.deepcopy(original);key=(x['word'],x['kana'])
            if key in adapt:
                row=adapt[key];x.update(word=row['word'],kana=row['kana'],meaning=row['meaning'],adaptedFrom=dict(word=original['word'],kana=original['kana'],meaning=original['meaning']));used.add(key)
            # Avoid a loose affix as the second item when a concrete example exists.
            if ('〜' in x['word'] or '～' in x['word']) and examples:continue
            pair=(x['word'],x['kana'])
            if pair in seen:continue
            assert e['char'] in x['word'];examples.append(x);seen.add(pair)
            if len(examples)==2:break
        assert 1<=len(examples)<=2
        e['examples']=examples
        e['reference']=dict(source='KANJIDIC2',version=ref['header']['database_version'],radicalNumber=source['radicalNumber'])
        report.append(dict(id=e['id'],char=e['char'],strokes=e['strokes'],radical=e['radical'],onCount=len(e['on']),kunCount=len(e['kun']),exampleCount=len(examples),fieldsChanged=[k for k in e if e.get(k)!=old.get(k)],adaptedExamples=[dict(word=x['word'],fromWord=x['adaptedFrom']['word']) for x in examples if 'adaptedFrom' in x]))
    audit=dict(updated=plan['updated'],total=287,complete=287,emptyOn=sum(not e['on'] for e in entries),emptyKun=sum(not e['kun'] for e in entries),referenceDate=ref['header']['date_of_creation'],referenceArchiveSha256=ref['archiveSha256'],dictionaryLicense=ref['license'],adaptedPatternsUsed=[dict(word=a,kana=b) for a,b in sorted(used)],note='Meaning/English/mnemonic/radical/strokes and 1–2 source-backed or explicitly adapted words are complete. Empty reading groups are allowed when the dictionary has none. All dictionary readings are available; the UI folds additional readings. This is not an official JLPT syllabus or a historical etymology study.',entries=report)
    (folder/'kanji-n4-completeness-review.json').write_text(json.dumps(audit,ensure_ascii=False,indent=2)+'\n')
    return entries
