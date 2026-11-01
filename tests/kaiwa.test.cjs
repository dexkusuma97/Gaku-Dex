'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
function app(){
 let html='',timer=0;const timers=new Map(),audios=[],utterances=[],messages={textContent:''},feedback={textContent:''};
 const root={isConnected:true,contains:()=>true,addEventListener(){},querySelectorAll:()=>[],querySelector:s=>s==='[data-audio-status]'?messages:s==='[data-feedback]'?feedback:null,get innerHTML(){return html},set innerHTML(v){html=v}};
 class Audio{constructor(src){this.src=src;this.paused=false;audios.push(this)}play(){return Promise.resolve()}pause(){this.paused=true}removeAttribute(){}load(){}}
 const c={window:null,document:{getElementById:()=>root},Audio,SpeechSynthesisUtterance:class{constructor(text){this.text=text}},speechSynthesis:{getVoices:()=>[{name:'Kyoko',lang:'ja-JP'},{name:'Keita',lang:'ja-JP'}],speak:u=>utterances.push(u),cancel(){}},setTimeout(f){const id=++timer;timers.set(id,f);return id},clearTimeout:id=>timers.delete(id),addEventListener(){},console};c.window=c;vm.createContext(c);
 for(const file of ['kaiwa-data.js','kaiwa-render.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
 const api=c.GakuKaiwa;api.sync(true);
 return {c,api,root,audios,utterances,messages,feedback,timers,tick(){const values=[...timers.values()];timers.clear();for(const f of values)f()}};
}
const a=app(),data=a.c.GAKU_KAIWA_DATA;
assert.deepEqual(Array.from(data,s=>s.id),['jiko','kai','resu','michi','densha','nichi','yaku','kyoka','denwa','kansou','shusshin','teinei','tomodachi','aisatsu','uchi','shokuji']);
for(const s of data){assert.equal(s.lines.length,s.id==='jiko'?16:8);assert.ok(['male','female'].includes(s.gender));for(const line of s.lines){for(const key of ['jp','rom','id'])assert.ok(line[key].trim());if(line.who==='me'){assert.equal(line.salah.length,2);assert.equal(new Set([line.jp,...line.salah.map(x=>x.jp)]).size,3);assert.ok(line.salah.every(x=>x.why.length>20))}}}
// Identity comes from the spoken script, not names in incorrect options.
const adiIds=new Set(['nichi','yaku','kyoka','denwa']);
for(const scenario of data){
 assert.equal(scenario.playerName,adiIds.has(scenario.id)?'Adi':'Ryota');
 const script=scenario.lines.map(l=>l.jp).join('');
 assert.equal(script.includes('アディ'),adiIds.has(scenario.id));
 if(!adiIds.has(scenario.id))for(const l of scenario.lines)for(const w of l.salah||[])assert.ok(!w.jp.includes('アディ'));
 for(const l of scenario.lines)for(const w of l.salah||[])assert.ok(!w.why.includes('Ryota'),'Feedback must name the actual interlocutor Hori');
}
assert.equal(data.find(s=>s.id==='resu').lines[5].id,'Saya mulai makan, ya.');
assert.ok(data.find(s=>s.id==='denwa').lines[2].id.includes('kembali ke sini'));
assert.ok(data.find(s=>s.id==='tomodachi').lines[4].id.includes('siang'));
// Personas follow voice metadata, including a per-line override, not bubble position or a stale NPC name.
for(const scenario of data){
 a.api.open(scenario.id,'read');const html=a.api.screen();
 assert.equal((html.match(/class="kw-line-note"/g)||[]).length,scenario.lines.filter(l=>l.note).length);
 assert.equal((html.match(/class="kw-avatar" aria-hidden="true">H<\/div>/g)||[]).length,scenario.lines.length/2);
 assert.equal((html.match(new RegExp('class="kw-avatar" aria-hidden="true">'+(scenario.playerName==='Adi'?'K':'R')+'</div>','g'))||[]).length,scenario.lines.length/2);
 assert.equal((html.match(/class="kw-speaker">Hori<\/div>/g)||[]).length,scenario.lines.length/2);
 assert.equal((html.match(new RegExp('class="kw-speaker">'+(scenario.playerName==='Adi'?'Kamu':'Ryota')+'</div>','g'))||[]).length,scenario.lines.length/2);
 assert.ok(!html.includes(' · Kamu'));
 assert.ok(!html.includes(' · Aku'));
}
{const s=data[0],oldName=s.npc,oldGender=s.gender;s.npc='Hori';s.gender='male';s.lines[1].gender='female';a.api.open(s.id,'read');const html=a.api.screen();assert.equal((html.match(/class="kw-speaker">Ryota<\/div>/g)||[]).length,s.lines.length-1);assert.equal((html.match(/class="kw-speaker">Hori<\/div>/g)||[]).length,1);s.npc=oldName;s.gender=oldGender;delete s.lines[1].gender;}
console.log('PASS: script identities, Adi → Kamu/K, other players → Ryota/R, no duplicate suffix, short notes, feedback and per-line voice override');
const choiceIndex=(html,jp)=>Number([...html.matchAll(/data-choice="(\d+)"[^>]*><span[^>]*>.*?<\/span><span lang="ja">(.*?)<\/span>/g)].find(m=>m[2]===jp)?.[1]);
let completed=0;a.api.onComplete=()=>completed++;
for(const s of data){
 a.api.open(s.id,'read');const read=a.api.screen();const n=s.lines.length;assert.equal((read.match(/class="kw-row/g)||[]).length,n);assert.equal((read.match(/data-play=/g)||[]).length,n);assert.equal((read.match(/class="kw-meaning"[^>]+ hidden/g)||[]).length,n);
 a.api.open(s.id,'practice');assert.equal((a.api.screen().match(/class="kw-row/g)||[]).length,1);
 for(const line of s.lines.filter(l=>l.who==='me')){
  const before=a.root.innerHTML;const wrong=choiceIndex(a.api.screen(),line.salah[0].jp);assert.ok(Number.isInteger(wrong));a.api.choose(wrong);assert.equal(a.feedback.textContent,line.salah[0].why);assert.equal(a.root.innerHTML,before,'wrong choice does not redraw/bink');
  const right=choiceIndex(a.api.screen(),line.jp);a.api.choose(right);a.api.choose(right);a.tick();
 }
 assert.match(a.api.screen(),/Percakapan selesai!/);assert.equal((a.api.screen().match(/class="kw-row/g)||[]).length,s.lines.length);
}
assert.equal(completed,data.length,'completion exactly once despite duplicate taps');
a.api.open('resu','practice');const right=choiceIndex(a.api.screen(),data[2].lines[1].jp);a.api.choose(right);a.api.sync(false);a.tick();assert.ok(!a.api.screen().includes('Percakapan selesai!'),'leaving cancels pending transitions');
a.api.restore({id:'missing',mode:'practice'});assert.match(a.api.screen(),/PILIH CERITAMU/);
(async()=>{
 a.api.sync(true);a.api.open('jiko','read');const revised=a.api.play(0);assert.equal(a.audios.at(-1).src,'assets/kaiwa/kenalan-1.mp3','revised introduction must not play old jiko audio');a.audios.at(-1).onerror();assert.equal(a.utterances.at(-1).text,data[0].lines[0].jp);a.utterances.at(-1).onend();await revised;
 a.api.open('kai','read');const first=a.api.play(0);assert.equal(a.audios.at(-1).src,'assets/kaiwa/kai-1.mp3');a.audios.at(-1).onerror();assert.equal(a.utterances.at(-1).voice.name,'Kyoko');a.utterances.at(-1).onend();await first;
 const second=a.api.play(1);a.audios.at(-1).onerror();assert.equal(a.utterances.at(-1).voice.name,'Keita');a.utterances.at(-1).onend();await second;
 const chain=a.api.playAll();let previous=a.audios.length;
 const total=data.find(s=>s.id==='kai').lines.length;for(let i=0;i<total;i++){assert.ok(a.audios.at(-1).src.endsWith('kai-'+(i+1)+'.mp3'));a.audios.at(-1).onended();await Promise.resolve();await Promise.resolve();if(i<total-1)assert.equal(a.audios.length,++previous)}await chain;
 const cancel=a.api.playAll();const current=a.audios.at(-1),count=a.audios.length;a.api.stop();await cancel;assert.equal(current.paused,true);assert.equal(a.audios.length,count,'cancelled queue cannot start next clip');
 const one=a.api.play(0);const old=a.audios.at(-1);const two=a.api.play(1);assert.equal(old.paused,true);a.api.sync(false);await Promise.all([one,two]);assert.equal(a.timers.size,0);
 console.log('PASS: 16 scenarios, 136 lines, hidden translations, practice sequence/wrong retry/no redraw/double tap/completion, route restore, audio paths, gender preference fallback, ordered playlist, single-player cancellation and cleanup');
})().catch(e=>{console.error(e);process.exitCode=1});
