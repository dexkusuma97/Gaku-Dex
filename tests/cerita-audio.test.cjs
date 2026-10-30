'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const c={window:{}};vm.createContext(c);
for(const f of ['data','dongeng','tambahan','bersambung','nitamono','isold'])vm.runInContext(fs.readFileSync('dist/cerita-'+f+'.js','utf8'),c);
const expected=new Set();
for(const b of c.window.GAKU_CERITA_DATA){assert.notEqual(b.audioPending,true,b.id+' narration still pending');let n=0;for(const part of b.bab)for(const line of part.kalimat){assert.ok(line.t.length);expected.add(b.id+'-'+(++n)+'.mp3');}}
const actual=fs.readdirSync('dist/assets/cerita').filter(f=>f.endsWith('.mp3'));
assert.equal(expected.size,361);assert.deepEqual(actual.sort(),[...expected].sort());
for(const name of expected){const data=fs.readFileSync('dist/assets/cerita/'+name);assert.ok(data.length>100);assert.ok(data.subarray(0,3).toString()==='ID3'||data[0]===255&&(data[1]&224)===224,name);}
const imported=JSON.parse(fs.readFileSync('data/cerita-audio-import-20261030.json','utf8'));assert.equal(imported.count,268);assert.equal(new Set(imported.files.map(f=>f.file)).size,268);
for(const row of imported.files){assert.ok(expected.has(row.file));const data=fs.readFileSync('dist/assets/cerita/'+row.file);assert.equal(data.length,row.bytes);assert.equal(crypto.createHash('sha256').update(data).digest('hex'),row.sha256);assert.ok(row.duration_seconds>0);}
console.log('PASS: all 361 story blocks have MP3; 268 imported recordings match hashes/lengths/durations; no pending story narration');
