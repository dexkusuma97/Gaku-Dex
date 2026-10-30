'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const d=JSON.parse(fs.readFileSync('data/kotoba-n4.json','utf8'));
assert.equal(d.meta.examplesMissing,0);
for(const e of d.entries){
 assert.ok(e.example,e.jp);
 for(const key of ['jp','kana','meaning'])assert.ok(typeof e.example[key]==='string'&&e.example[key].trim(),e.jp+' '+key);
 assert.ok(!/[~〜<>]/.test(e.example.jp+e.example.kana+e.example.meaning),e.jp+' unresolved notation');
 assert.ok(!e.example.meaning.includes('tentang .'),e.jp+' missing translation');
}
for(const word of ['~人','~月','~本','~度~分','~ますように','~から~にかけて','~始める','どんなふうに','恐れ入りますが','網膜'])assert.ok(d.entries.filter(e=>e.jp===word).every(e=>e.example),word);
const c={};vm.createContext(c);vm.runInContext(fs.readFileSync('dist/kotoba-n4-data.js','utf8'),c);
assert.deepEqual(JSON.parse(vm.runInContext('JSON.stringify(KOTOBA_N4_DATA)',c)),d.entries,'bundle matches canonical data');
const ids=new Set(d.entries.map(e=>e.id));for(const [oldId,newId] of Object.entries(d.mergedIds)){assert.ok(!ids.has(oldId));assert.ok(ids.has(newId));assert.notEqual(oldId,newId)}
const rain=d.entries.find(e=>e.jp==='雨'),candy=d.entries.find(e=>e.jp==='飴');assert.ok(rain&&candy&&rain.id!==candy.id,'homophones retained');
const ui=fs.readFileSync('dist/kotoba-ui.js','utf8');assert.ok(!ui.includes('<summary>Sumber materi</summary>'));
const app=fs.readFileSync('dist/index.html','utf8');assert.ok(!app.includes("showPage('Premium')"));assert.ok(!app.includes('Rincian konten Premium'));
console.log('PASS: all '+d.entries.length+' N4 cards have Japanese/kana/Indonesian examples; filled counters; homophones preserved; valid merged IDs; no source disclosure or Premium route');
