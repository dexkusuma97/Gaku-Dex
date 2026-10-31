"""Refresh the limited KANJIDIC2 snapshot; review diffs before rebuilding.
Normal builds and the installer never access the network.
"""
import argparse,datetime,gzip,hashlib,json,unicodedata,urllib.request,xml.etree.ElementTree as ET
from pathlib import Path
root=Path(__file__).resolve().parents[1]
p=argparse.ArgumentParser(description=__doc__);p.add_argument('--archive',type=Path,help='Use a downloaded kanjidic2.xml.gz instead of downloading');p.add_argument('--output',type=Path,default=root/'data/kanji-n4-reference.json');args=p.parse_args()
url='https://www.edrdg.org/kanjidic/kanjidic2.xml.gz'
if args.archive:raw=args.archive.read_bytes()
else:
    with urllib.request.urlopen(url,timeout=60) as response:raw=response.read()
xml=ET.fromstring(gzip.decompress(raw));chars={c for _,_,group in json.loads((root/'data/kanji-category-additions.json').read_text()) for c in group};entries={}
for c in xml.findall('character'):
    char=c.findtext('literal')
    if char not in chars:continue
    radical=int(c.findtext('radical/rad_value[@rad_type="classical"]'));strokes=int(c.findtext('misc/stroke_count'))
    assert 1<=radical<=214 and strokes>0
    entries[char]=dict(char=char,strokes=strokes,radicalNumber=radical,radical=unicodedata.normalize('NFKC',chr(0x2f00+radical-1)),on=[x.text for x in c.findall('.//reading[@r_type="ja_on"]')],kun=[x.text for x in c.findall('.//reading[@r_type="ja_kun"]')],english=[x.text for x in c.findall('.//meaning') if not x.attrib])
assert set(entries)==chars and len(entries)==287
result=dict(source='KANJIDIC2',copyright='James William Breen and the Electronic Dictionary Research and Development Group',url=url,documentation='https://www.edrdg.org/wiki/KANJIDIC_Project.html',license='CC BY-SA 4.0',licenseUrl='https://www.edrdg.org/edrdg/licence.html',retrieved=datetime.datetime.now(datetime.timezone.utc).date().isoformat(),header={c.tag:c.text for c in xml.find('header')},archiveSha256=hashlib.sha256(raw).hexdigest(),policy='Primary stroke count; classical Kangxi radical; ja_on and ja_kun only, excluding nanori.',entries=entries)
args.output.parent.mkdir(parents=True,exist_ok=True);args.output.write_text(json.dumps(result,ensure_ascii=False,indent=2)+'\n');print('Reference:',len(entries),'characters; version',result['header']['database_version']);print('Review the diff, update editorial selections if needed, then rebuild and run tests before publishing.')
