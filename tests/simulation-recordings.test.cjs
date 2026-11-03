'use strict';
const fs=require('node:fs'),crypto=require('node:crypto'),assert=require('node:assert/strict');
const manifest=JSON.parse(fs.readFileSync('scripts/voice-v3/simulasi-manifest.json','utf8'));
const report=JSON.parse(fs.readFileSync('data/voice-v3-import-20261030.json','utf8')).groups.simulasi;
const expected=manifest.map(q=>q.file).sort(),actual=fs.readdirSync('dist/assets/simulasi').filter(x=>x.endsWith('.mp3')).sort();
assert.equal(expected.length,223);assert.equal(new Set(expected).size,223);
// N4/A2 MP3s are installed by the user's Termux generator; retain strict legacy hashes.
const high=JSON.parse(fs.readFileSync('scripts/voice-v3/simulasi-n4-a2-manifest.json','utf8')),knownHigh=new Set(high.map(row=>row.file));
assert.deepEqual(actual.filter(file=>!knownHigh.has(file)),expected,'all legacy MP3s present and no unknown filenames');
const registry=fs.readFileSync('dist/prototipe-simulasi/recorded-n4-a2.js','utf8').match(/GAKU_SIM_RECORDED_IDS\s*=\s*(\[[\s\S]*?\])\s*;/);assert.ok(registry);const registered=JSON.parse(registry[1]);assert.equal(new Set(registered).size,registered.length);
for(const id of registered){const file=id+'.mp3';assert.ok(knownHigh.has(file));assert.ok(actual.includes(file),'registered MP3 exists: '+file);}
for(const file of actual.filter(file=>knownHigh.has(file))){const data=fs.readFileSync('dist/assets/simulasi/'+file);assert.ok(data.length>100);assert.ok(data.subarray(0,3).toString()==='ID3'||data[0]===255&&(data[1]&224)===224,file);}

assert.equal(report.count,223);assert.deepEqual(report.files.map(r=>r.file).sort(),expected);
for(const row of report.files){const data=fs.readFileSync('dist/assets/simulasi/'+row.file);assert.equal(data.length,row.bytes);assert.ok(data.length>100);assert.equal(crypto.createHash('sha256').update(data).digest('hex'),row.sha256);assert.ok(row.duration_seconds>0);assert.ok(data.subarray(0,3).toString()==='ID3'||data[0]===255&&(data[1]&224)===224,row.file);}
const counts=new Map();for(const q of manifest.filter(q=>q.id!=='tes-suara'))counts.set(q.pack,(counts.get(q.pack)||0)+1);assert.equal(counts.size,12);for(const [pack,n] of counts)assert.equal(n,pack.startsWith('jlpt')?24:13);
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.indexOf('prototipe-simulasi/audio-engine.js')<html.indexOf('simulation-module.js'));
console.log('PASS: all 222 listening questions in 12 packs plus narrator test resolve to installed MP3; 144 JLPT + 78 JFT + 1 test; import hashes/bytes/durations/signatures; player loaded before module; known installed N4/A2 recordings accepted and registered IDs checked');
