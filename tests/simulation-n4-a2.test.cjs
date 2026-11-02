'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const {validateCollection,fingerprint}=require('../scripts/lib/simulation-contract.cjs');
const dir='dist/prototipe-simulasi/authoring/paket-n4-a2';
const packs=fs.readdirSync(dir).filter(p=>p.endsWith('.json')).map(p=>JSON.parse(fs.readFileSync(dir+'/'+p)));
assert.equal(packs.length,8);assert.equal(packs.reduce((n,p)=>n+p.questions.length,0),548);
const c={window:{}};vm.createContext(c);for(const f of ['bank-packs-12.js','bank-packs-34.js','bank-packs-56.js','bank-n4-a2.js'])vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/'+f,'utf8'),c);
assert.equal(c.window.GAKU_SIM_PACKS.length,20);
assert.deepEqual(validateCollection(JSON.parse(JSON.stringify(c.window.GAKU_SIM_PACKS))),[]);
assert.deepEqual(JSON.parse(JSON.stringify(c.window.GAKU_SIM_PACKS.slice(12))),packs,'built bank equals canonical source');
{const broken=JSON.parse(JSON.stringify(packs));broken[0].questions[0].kind='Jenis tidak didukung';assert.ok(validateCollection(broken).some(x=>x.includes('subjenis')));}
{const broken=JSON.parse(JSON.stringify(packs));const reading=broken.find(p=>p.exam==='jlpt').questions.find(q=>q.kind==='Bacaan pendek');delete reading.passage;assert.ok(validateCollection(broken).some(x=>x.includes('stimulus')));}
const shapes={jlpt:[7,5,8,4,4,13,4,4,4,4,2,8,7,5,8],jft:[3,4,3,3,6,6,5,4,4,6,6]};
for(const p of packs){
 const groups=[];for(const q of p.questions){const last=groups.at(-1);if(last?.kind===q.kind&&last.section===q.section)last.n++;else groups.push({kind:q.kind,section:q.section,n:1});
  if(q.section===2)assert.equal(q.audio,q.transcript,q.id);
  if(/Bacaan pendek|Bacaan sedang|Mencari informasi|Tata bahasa dalam teks/.test(q.kind)||p.exam==='jft'&&q.section===3)assert.ok(q.passage?.trim(),q.id+' stimulus');
  assert.ok(!/TODO|placeholder|ではなく返さなくては/.test(JSON.stringify(q)),q.id);
 }
 assert.deepEqual(groups.map(g=>g.n),shapes[p.exam],p.id+' exact subtypes');
 assert.ok(!packs.some(x=>x!==p&&x.id===p.id));
 const answers=p.questions.reduce((a,q)=>(a[q.answer]++,a),[0,0,0,0]);assert.ok(Math.max(...answers)<p.questions.length*.5,p.id+' balanced key');
 if(p.exam==='jlpt')assert.deepEqual(p.questions.filter(q=>q.scene).map(q=>q.scene.type),['greeting','thanks','apology','request','farewell']);
}
// Independent, manually checked witnesses for the star questions: all four chunks used once.
const witnesses=[
['私の','友達が','作って','くれた'],['窓が','閉まって','いるか','確かめて'],['多かった','ので','友達に','手伝ってもらい'],['使い方が','分かる','ように','説明が書いて'],
['夜遅く','まで','開いて','いるので'],['駅までの','行き方を','教えて','もらって'],['図書館が','決めた','期限を','守って'],['食事を','した','あとで','飲んで'],
['忘れない','ように','気を','付けて'],['もう','一度','説明して','くれ'],['上手に','なる','ために','毎日練習'],['日本での','生活に','役立つ','ことが書いて'],
['外で','食べる','ことにしよう','と'],['必要な','物を','忘れない','ようにして'],['歩いて','行く','ことに','したの'],['待って','いる','間に','本を読んだり']];
const stars=packs.filter(p=>p.exam==='jlpt').flatMap(p=>p.questions.filter(q=>q.kind==='Susun kalimat'));
stars.forEach((q,i)=>{assert.deepEqual([...q.options].sort(),[...witnesses[i]].sort());assert.equal(q.options[q.answer],witnesses[i][2]);assert.equal((q.jp.match(/★/g)||[]).length,1);});

const app=require('./helpers/main-app.cjs');
function boot(level){const a=app(new Map([['gaku-ui-prefs',JSON.stringify({level,motion:false,dark:false})]]));const els=new Map();a.c.document.querySelector=s=>{if(s==='.modal')return null;if(!els.has(s))els.set(s,{innerHTML:'',textContent:'',open:false,style:{},classList:{toggle(){}},showModal(){this.open=true;},close(){this.open=false;},focus(){}});return els.get(s);};const session=new Map();a.c.sessionStorage={getItem:k=>session.get(k)||null,setItem:(k,v)=>session.set(k,v)};return {...a,session};}
for(const level of ['N5','N4'])for(const exam of ['jlpt','jft']){
 const a=boot(level),s=a.c.GakuSimulation;a.c.showPage('Simulasi');assert.ok(s.menu().includes(level==='N4'?'JLPT N4':'JLPT N5'));assert.ok(!s.menu().includes(level==='N4'?'JLPT N5':'JLPT N4'));
 s.selectExam(exam);assert.equal(s.availablePacks().length,level==='N4'?4:6);assert.equal(s.getPack().level,exam==='jlpt'?level:level==='N4'?'A2':'A1');
 if(level==='N4'){s.selectPack(5);assert.equal(s.state.pack,1);assert.ok(s.packages().includes('Paket 5–6 akan ditambahkan'));}
 s.go('rules');s.state.accepted=true;s.startExam();const r=s.state.run;assert.equal(r.answers.length,exam==='jlpt'?(level==='N4'?87:71):50);assert.equal(Math.round((r.deadline-r.startedAt)/60000),exam==='jlpt'?(level==='N4'?25:20):60);
 s.setAnswer(2);a.c.selectLevel(level==='N4'?'N5':'N4');assert.equal(a.run('prefs.level'),level,'level locked during exam');
 const before=r.deadline;vm.runInContext(fs.readFileSync('dist/simulation-module.js','utf8'),a.c);a.c.initAppNavigation();const restored=a.c.GakuSimulation;assert.equal(restored.state.run.deadline,before);assert.equal(restored.state.run.answers[0],2);assert.equal(restored.getPack().level,s.getPack().level);
 if(exam==='jlpt'){restored.advanceSection();assert.equal(restored.state.run.deadline,0);restored.beginSection();assert.ok(Math.abs((restored.state.run.deadline-Date.now())/60000-(level==='N4'?55:40))<.1);}else{restored.advanceSection();restored.beginSection();restored.advanceSection();restored.beginSection();assert.equal(restored.canNavigate(restored.state.run.index),false);}
 restored.finishExam();const row=a.c.GakuHistory.read()[0];assert.equal(row.level,exam==='jlpt'?level:level==='N4'?'A2':'A1');assert.equal(row.simulation.total,exam==='jlpt'?(level==='N4'?87:71):50);
 a.c.selectLevel(level==='N4'?'N5':'N4');const screen=restored.screen();assert.ok(screen.includes(level==='N4'?'JLPT N5':'JLPT N4'));assert.equal(restored.state.run,null);
}
// Both levels may use package 1; storage keys and restored bank validation stay isolated.
{const a=boot('N4'),s=a.c.GakuSimulation;a.c.showPage('Simulasi');s.selectExam('jlpt');s.go('rules');s.state.accepted=true;s.startExam();const run=JSON.parse(JSON.stringify(s.state.run));s.finishExam();a.c.selectLevel('N5');s.screen();assert.equal(s.validSavedRun(run,s.getPack('jlpt',1)),false);assert.ok(a.session.has('gaku-simulation-prototype-v2-n4'));assert.ok(a.session.has('gaku-simulation-prototype-v2'));assert.equal(a.c.GakuHistory.level({simulation:{exam:'jft',level:'A2'}}),'A2');a.c.historySetFilter('level','A2');assert.equal(a.run('historyView.level'),'A2');}
console.log('PASS: 548 originals, exact blueprint/keys/star witnesses/stimuli, 20-pack duplicate check, N5/N4 visibility, unavailable packs, timers, reload, level lock, separate sessions and level-correct history.');

// New scripts have no MP3 yet: use device TTS directly, independent of host 404 rewrites.
{const audio=require('../dist/prototipe-simulasi/audio-engine.js');let started=0,ended=0;const spoken=[];const env={Audio:class{constructor(){throw Error('Pending recording must not request an MP3');}},SpeechSynthesisUtterance:class{constructor(t){this.text=t;}},speechSynthesis:{cancel(){},getVoices(){return [{lang:'ja-JP',name:'female'},{lang:'ja-JP',name:'male'}];},speak(u){spoken.push(u.text);u.onstart();u.onend();}},setTimeout(fn){fn();return 1;},clearTimeout(){}};const player=audio.createPlayer(env);const question=packs.find(p=>p.exam==='jft').questions.find(q=>q.audio);player.play({question,onStart(){started++;},onEnd(){ended++;},onError(){throw Error('TTS failed');}});assert.equal(started,1);assert.equal(ended,1);assert.ok(spoken.length>=3);assert.ok(spoken.every(t=>!/^Narrator:|^女:|^男:/.test(t)));}
