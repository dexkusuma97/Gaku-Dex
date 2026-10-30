'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const root='scripts/voice-v3/',kaiwa=JSON.parse(fs.readFileSync(root+'kaiwa-manifest.json')),sim=JSON.parse(fs.readFileSync(root+'simulasi-manifest.json'));
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('dist/kaiwa-data.js','utf8'),c);let i=0;
for(const s of c.window.GAKU_KAIWA_DATA)for(const [n,line] of s.lines.entries()){const row=kaiwa[i++];assert.equal(row.file,(s.audioId||s.id)+'-'+(n+1)+'.mp3');assert.deepEqual(row.turns,[{speaker:line.gender||(line.who==='npc'?s.gender:'male'),text:line.jp}]);}
assert.equal(i,136);assert.deepEqual(sim.filter(q=>q.id!=='tes-suara'),JSON.parse(fs.readFileSync('data/simulasi-audio/manifest.json')));assert.equal(sim.length,223);assert.deepEqual(sim.find(q=>q.id==='tes-suara').turns,[{speaker:'narrator',text:'こんにちは。音声のテストです。'}]);
const code=fs.readFileSync(root+'generate.cjs','utf8');for(const id of ['Bj4Malc5SZLoXfPtxRxH','3321Alera3fXjEWjjbAX','GxxMAMfQkDlnqjpzjLHH','xya0RvcJtofTcFTOdX4E','0ptCJp0xgdabdcpVtCB5'])assert.ok(code.includes(id));
for(const legacy of ['CwhRBWXzGAHq8TQ4Fs17','Xb7hH8MSUJpSbSDYk0k2','nMLAJvHm96aMWubKsf0q','process.env.SIM_MALE_VOICE_ID','process.env.SIM_FEMALE_VOICE_ID'])assert.ok(!code.includes(legacy));
assert.ok(kaiwa.every(q=>q.turns.every(t=>['male','female'].includes(t.speaker))));
console.log('PASS: exact five new IDs; 136 Kaiwa text/gender/audioId mappings; 222 unchanged simulation scripts plus narrator test; no old voice env override');
