"""Build the reviewed N4/A2 drafts; authoring JSON remains canonical."""
import json
from pathlib import Path
root=Path(__file__).resolve().parents[1]
folder=root/'dist/prototipe-simulasi/authoring/paket-n4-a2'
packs=[json.loads(p.read_text()) for p in sorted(folder.glob('*.json'))]
assert len(packs)==8
for p in packs:
    counts=[28,31,28] if p['exam']=='jlpt' else [13,12,13,12]
    assert [sum(q['section']==i for q in p['questions']) for i in range(len(counts))]==counts,p['id']
dest=root/'dist/prototipe-simulasi/bank-n4-a2.js'
dest.write_text('/* Original N4/A2 practice drafts; authored scripts, no official score conversion. */\nwindow.GAKU_SIM_PACKS=(window.GAKU_SIM_PACKS||[]).concat('+json.dumps(packs,ensure_ascii=False,indent=2)+');\n')
print('Built 8 N4/A2 packs, 548 questions')
