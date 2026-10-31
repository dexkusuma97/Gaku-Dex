const fs=require('node:fs'),assert=require('node:assert/strict'),cp=require('node:child_process');
const read=p=>JSON.parse(fs.readFileSync(p));
const edits=read('data/kotoba-n4-context-examples.json').entries;
const data=read('data/kotoba-n4.json'), by=new Map(data.entries.map(e=>[e.id,e]));
assert.equal(edits.length,2000);assert.equal(new Set(edits.map(e=>e.id)).size,2000);assert.equal(new Set(edits.map(e=>e.example.jp)).size,2000);
for(const r of edits){const e=by.get(r.id);assert.equal(e.jp,r.headword);assert.equal(e.kana,r.reading);assert.deepEqual(e.example,r.example);assert.ok(!/について教えてください|こともあります/.test(e.example.jp));assert.ok(!/[一-龯]/.test(e.example.kana));}
const before=fs.readFileSync('data/kotoba-n4.json');
cp.execFileSync('python3',['scripts/build-kotoba-data.py']);
assert.deepEqual(fs.readFileSync('data/kotoba-n4.json'),before,'Rebuild keeps editorial examples and is idempotent');
const report=read('data/kotoba-n4-quality-review.json');
assert.equal(report.queue.length,237);assert.ok(report.queue.every(e=>!edits.some(r=>r.id===e.id)));
assert.equal(data.entries.length,3227);
console.log('PASS: 2000 retained contextual examples, stable identity, honest pending queue and idempotent rebuild');

const vm=require('node:vm'),c={};vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
for(const r of edits){assert.ok(r.example.kana.includes(' '),r.id);assert.equal(r.example.kana.replace(/\s/g,''),r.example.jp,r.id);}
const baby=edits.find(e=>e.headword==='あかちゃん');
assert.equal(c.bunpoExampleRomaji(baby.example.kana),'akachan ga nete imasu.');
assert.equal(c.bunpoExampleRomaji(edits.find(e=>e.headword==='あじ').example.kana),'kono suupu wa aji ga usui desu.');
console.log('PASS: reviewed reading spaces preserve Japanese text and produce separated romaji, including particle wa');

for(const r of edits){const roman=c.bunpoExampleRomaji(r.example.kana);assert.ok(roman.includes(' '),r.id);assert.ok(!/[ぁ-ゖァ-ヺ一-龯]/.test(roman),r.id+' unconverted text: '+roman);assert.ok(!/undefined|null/.test(roman));}
console.log('PASS: all 2000 contextual sentences have distinct Japanese and spaced romanization');

assert.equal(c.kanjiRomanize('ウォーキング'),'wookingu');
assert.equal(c.kanjiRomanize('アイスティー'),'aisutii');
assert.equal(c.kanjiRomanize('ファイル'),'fairu');
assert.equal(c.kanjiRomanize('ボランティア'),'borantia');
console.log('PASS: loanword digraph romanization, including wo, ti and fa');

assert.equal(c.kanjiRomanize('パフューム'),'pafyuumu');
assert.equal(data.entries.find(e=>e.jp==='Perfume').romaji,'pafyuumu');

assert.equal(edits.find(e=>e.headword==='炊ける').example.kana,'ごはん が たけました。');
