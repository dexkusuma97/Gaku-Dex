const fs=require('node:fs'),assert=require('node:assert/strict'),cp=require('node:child_process');
const read=p=>JSON.parse(fs.readFileSync(p));
const edits=read('data/kotoba-n4-context-examples.json').entries;
const data=read('data/kotoba-n4.json'), by=new Map(data.entries.map(e=>[e.id,e]));
assert.equal(edits.length,138);assert.equal(new Set(edits.map(e=>e.id)).size,138);
for(const r of edits){const e=by.get(r.id);assert.equal(e.jp,r.headword);assert.equal(e.kana,r.reading);assert.deepEqual(e.example,r.example);assert.ok(!/について教えてください|こともあります/.test(e.example.jp));assert.ok(!/[一-龯]/.test(e.example.kana));}
const before=fs.readFileSync('data/kotoba-n4.json');
cp.execFileSync('python3',['scripts/build-kotoba-data.py']);
assert.deepEqual(fs.readFileSync('data/kotoba-n4.json'),before,'Rebuild keeps editorial examples and is idempotent');
const report=read('data/kotoba-n4-quality-review.json');
assert.equal(report.queue.length,2099);assert.ok(report.queue.every(e=>!edits.some(r=>r.id===e.id)));
assert.equal(data.entries.length,3227);
console.log('PASS: 138 retained contextual examples, stable identity, honest pending queue and idempotent rebuild');
