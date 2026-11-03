/* Export the canonical Japanese turns; do not speak gender labels or answer keys. */
'use strict';
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..'),{split}=require('../dist/prototipe-simulasi/audio-engine.js');
const dir=path.join(root,'dist/prototipe-simulasi/authoring/paket-n4-a2');
const packs=fs.readdirSync(dir).filter(f=>f.endsWith('.json')).sort().map(f=>JSON.parse(fs.readFileSync(path.join(dir,f),'utf8')));
const rows=packs.flatMap(p=>p.questions.filter(q=>q.audio).map(q=>({pack:p.id,id:q.id,file:q.id+'.mp3',turns:split(q.audio)})));
if(rows.length!==246||new Set(rows.map(r=>r.id)).size!==246)throw Error('Bank audio harus 246 ID unik.');
for(const r of rows)if(!r.turns.length||r.turns.some(t=>!['female','male','narrator'].includes(t.speaker)||!t.text.trim()||/^(?:Narrator|女|男)\s*[:：]/.test(t.text)))throw Error('Naskah suara tidak valid: '+r.id);
fs.writeFileSync(path.join(root,'scripts/voice-v3/simulasi-n4-a2-manifest.json'),JSON.stringify(rows,null,2)+'\n');
console.log('Exported 246 audio scripts; 82 from packs 05–06.');
