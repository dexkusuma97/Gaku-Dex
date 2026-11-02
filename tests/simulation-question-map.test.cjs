'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),app=require('./helpers/main-app.cjs');
function boot(level){
 const a=app(new Map([['gaku-ui-prefs',JSON.stringify({level,motion:false,dark:false})]])),els=new Map();
 a.c.document.querySelector=selector=>{if(selector==='.modal')return null;if(!els.has(selector))els.set(selector,{innerHTML:'',open:false,style:{},classList:{toggle(){}},showModal(){this.open=true;},close(){this.open=false;},focus(){}});return els.get(selector);};
 a.c.showPage('Simulasi');return {...a,appEls:a.els,els,s:a.c.GakuSimulation};
}
function clickNumber(a,number){const dialog=a.els.get('#simulation-dialog');const tag=dialog.innerHTML.match(new RegExp('<button[^>]*aria-label="Soal '+number+',[^>]+>'))?.[0];assert.ok(tag,'button '+number);assert.ok(!/\bdisabled\b/.test(tag));const handler=tag.match(/onclick="([^"]+)"/)[1];assert.equal(handler,'GakuSimulation.chooseQuestion('+(number-1)+')');a.run(handler);}
for(const level of ['N5','N4'])for(const exam of ['jft','jlpt']){
 const a=boot(level),s=a.s;s.selectExam(exam);s.go('rules');s.state.accepted=true;s.startExam();s.setAnswer(1);s.toggleFlag();const deadline=s.state.run.deadline;
 s.questionMap();assert.equal(a.els.get('#simulation-dialog').open,true);clickNumber(a,9);assert.equal(s.state.run.index,8);assert.equal(s.state.run.answers[0],1);assert.ok(s.state.run.flags.includes(0));assert.equal(s.state.run.deadline,deadline);assert.equal(a.els.get('#simulation-dialog').open,false);assert.match(a.appEls.get('app').innerHTML,/Soal 9/);
 s.questionMap();clickNumber(a,1);assert.equal(s.state.run.answers[0],1);assert.equal(s.state.run.index,0);
 const wrongSection=s.getPack().questions.findIndex(q=>q.section===1);s.chooseQuestion(wrongSection);assert.equal(s.state.run.index,0);
 s.advanceSection();s.beginSection();s.questionMap();const first=s.state.run.index;clickNumber(a,first+2);assert.equal(s.state.run.index,first+1);assert.equal(a.els.get('#simulation-dialog').open,false);
 if(exam==='jft'){s.advanceSection();s.beginSection();const index=s.state.run.index;s.questionMap();assert.match(a.els.get('#simulation-dialog').innerHTML,/Bagian menyimak JFT bergerak maju/);assert.ok((a.els.get('#simulation-dialog').innerHTML.match(/disabled/g)||[]).length===13);s.chooseQuestion(index+1);assert.equal(s.state.run.index,index);}
}
// An expired timer must transition/finish rather than accept a stale map click.
{const a=boot('N4'),s=a.s;s.selectExam('jft');s.go('rules');s.state.accepted=true;s.startExam();s.questionMap();s.state.run.deadline=1;clickNumber(a,5);assert.equal(s.state.view,'result');assert.equal(s.state.run.index,0);}
// The six new raster assets must be mapped to existing N4 scene items, without altering N5 mappings.
const ctx={window:{}};vm.createContext(ctx);for(const f of ['scene-images.js','bank-n4-a2.js'])vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/'+f,'utf8'),ctx);
const before=JSON.parse(JSON.stringify(ctx.window.GAKU_SIM_SCENES));vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/scene-images-n4.js','utf8'),ctx);
const all=ctx.window.GAKU_SIM_SCENES,added=Object.keys(all).filter(id=>!before[id]);assert.equal(added.length,6);assert.equal(Object.keys(all).length,36);
for(const [id,entry] of Object.entries(before))assert.deepEqual(JSON.parse(JSON.stringify(all[id])),entry);
for(const id of added){const q=ctx.window.GAKU_SIM_PACKS.flatMap(p=>p.questions).find(q=>q.id===id);assert.ok(q?.scene);assert.ok(all[id].alt.length>25);const b=fs.readFileSync('dist/'+all[id].src);assert.equal(b.subarray(0,8).toString('hex'),'89504e470d0a1a0a');assert.ok(b.readUInt32BE(16)>=1024&&b.readUInt32BE(20)>=768);const a=boot('N4');assert.ok(a.s.sceneIllustration(q.scene,id).includes(all[id].src));}
console.log('PASS: actual popup handlers jump/close for both levels/exams, answers/flags/timer survive, section/listening/time locks hold; six N4 raster scenes render and N5 assets remain intact.');
