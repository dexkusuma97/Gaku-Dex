/* Validate current recordings, new narration, and archived introduction clips. */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={window:{}};vm.createContext(c);vm.runInContext(fs.readFileSync('dist/kaiwa-data.js','utf8'),c);
const expected=new Map();
for(const s of c.window.GAKU_KAIWA_DATA){
 const audioId=s.audioId||s.id;assert.match(audioId,/^[a-z0-9-]+$/);
 s.lines.forEach((line,i)=>{const name=`${audioId}-${i+1}.mp3`;assert.ok(!expected.has(name));expected.set(name,{pending:s.audioPending===true,jp:line.jp});});
}
assert.equal(expected.size,136);
const actual=fs.readdirSync('dist/assets/kaiwa').filter(x=>x.endsWith('.mp3')).sort();
const archived=new Set(Array.from({length:8},(_,i)=>`jiko-${i+1}.mp3`));
assert.equal(actual.length,144,'136 active recordings plus 8 preserved legacy introduction clips');
assert.ok([...expected.values()].every(x=>!x.pending),'All current narration is installed');
for(const [name,item] of expected)assert.ok(actual.includes(name),'Missing published recording: '+name);
for(const name of actual){
 assert.ok(expected.has(name)||archived.has(name),'Unexpected recording: '+name);
 const bytes=fs.readFileSync('dist/assets/kaiwa/'+name);assert.ok(bytes.length>100);assert.ok(bytes.subarray(0,3).toString()==='ID3'||bytes[0]===255&&(bytes[1]&224)===224,name+' MP3 signature');
}
assert.ok([...archived].every(name=>!expected.has(name)),'Old introduction must be unreachable by the player');
const pending=JSON.parse(fs.readFileSync('data/kaiwa-audio-pending.json','utf8'));
assert.equal(pending.length,64);
assert.deepEqual(pending.map(x=>x.file).sort(),[...expected.keys()].filter(name=>/^(kenalan|shusshin|teinei|tomodachi|aisatsu|uchi|shokuji)-/.test(name)).sort());
for(const row of pending){assert.equal(row.jp,expected.get(row.file).jp);assert.ok(['male','female'].includes(row.gender));}
console.log('PASS: all 136 active sentences have matching MP3, 64 new recordings match the generation manifest, 8 unused legacy jiko clips preserved; all 144 MP3 signatures valid');

const imported=JSON.parse(fs.readFileSync('data/voice-v3-import-20261030.json','utf8')).groups.kaiwa;
assert.equal(imported.count,136);assert.deepEqual(imported.files.map(r=>r.file).sort(),[...expected.keys()].sort());
const crypto=require('node:crypto');for(const row of imported.files){const bytes=fs.readFileSync('dist/assets/kaiwa/'+row.file);assert.equal(bytes.length,row.bytes);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),row.sha256);assert.ok(row.duration_seconds>0);}
console.log('PASS: all 136 replacement Kaiwa MP3 match current import hashes, lengths and durations');
