/* Fail deployment if a generator accidentally republishes paid question/content payloads. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
for(const n of [11,21,31,41])assert.ok(!fs.existsSync(`dist/assets/rangkuman/chapters-${n}-${n+9}.json`),'Premium chapter JSON must stay outside dist');
const c={window:{}};vm.createContext(c);
for(const f of ['bank-packs-12.js','bank-packs-34.js','bank-packs-56.js','bank-n4-a2.js'])vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/'+f,'utf8'),c);
for(const p of c.window.GAKU_SIM_PACKS){
 if(p.number<=2){assert.ok(p.questions.every(q=>Array.isArray(q.options)&&Number.isInteger(q.answer)));continue;}
 assert.equal(p.remote,true,'Paid packs must use the authorized server');
 for(const q of p.questions){assert.ok(Object.keys(q).every(k=>['section','options','audio'].includes(k)));assert.ok(q.options.every(v=>v===null));}
}
assert.ok(!fs.existsSync('dist/content.sql'));
console.log('PASS: eight free packs and metadata-only premium packs; paid chapters absent from public assets');
