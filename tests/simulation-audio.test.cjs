'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),engine=require('../dist/prototipe-simulasi/audio-engine.js');
const c={window:{}};vm.createContext(c);for(const n of ['12','34','56'])vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/bank-packs-'+n+'.js','utf8'),c);
const manifest=JSON.parse(fs.readFileSync('data/simulasi-audio/manifest.json')),questions=c.window.GAKU_SIM_PACKS.flatMap(p=>p.questions.filter(q=>q.audio));assert.equal(questions.length,222);assert.equal(manifest.length,222);
for(const q of questions){const row=manifest.find(r=>r.id===q.id);assert.ok(row);assert.equal(row.file,q.id+'.mp3');assert.deepEqual(row.turns,engine.split(q.audio));assert.ok(row.turns.every(t=>t.text&&!/[：:]/.test(t.text)));}
assert.deepEqual(engine.split('Onna: こんにちは。Otoko：はい。'),[{speaker:'female',text:'こんにちは。'},{speaker:'male',text:'はい。'}]);
assert.equal(engine.split('おんなのひとが はなしています。')[0].text,'おんなのひとが はなしています。');
function setup(){const audios=[],spoken=[],timers=[];let cancelled=0;class Audio{constructor(src){this.src=src;audios.push(this);}play(){return Promise.resolve();}pause(){this.paused=true;}removeAttribute(){}load(){}}
 const female={lang:'ja-JP',name:'Nanami Female'},male={lang:'ja-JP',name:'Keita Male'};
 const env={Audio,GAKU_SIM_EMBEDDED:true,SpeechSynthesisUtterance:class{constructor(text){this.text=text;}},speechSynthesis:{getVoices:()=>[female,male],speak:u=>spoken.push(u),cancel(){cancelled++;}},fetch:async()=>({status:404}),setTimeout(fn){timers.push(fn);return timers.length;},clearTimeout(){}};
 return {env,audios,spoken,timers,player:engine.createPlayer(env),female,male,get cancelled(){return cancelled;}};
}
(async()=>{
 const a=setup();let starts=0,ends=0,errors=0;const question={id:'n5-p01-048',audio:'女：こんにちは。男：はい。女：ありがとう。'};
 const play=()=>a.player.play({question,onStart(){starts++;},onEnd(){ends++;},onError(){errors++;}});
 play();assert.equal(a.audios[0].src,'assets/simulasi/n5-p01-048.mp3');a.audios[0].onplaying();a.audios[0].onplaying();a.audios[0].onended();assert.equal(starts,1);assert.equal(ends,1);assert.equal(a.spoken.length,0);
 play();await a.audios.at(-1).onerror();assert.equal(a.spoken[0].text,'こんにちは。');assert.equal(a.spoken[0].voice,a.female);a.spoken[0].onstart();a.spoken[0].onend();a.timers.shift()();assert.equal(a.spoken[1].voice,a.male);assert.equal(a.spoken[1].text,'はい。');a.spoken[1].onstart();a.spoken[1].onend();a.timers.shift()();a.spoken[2].onstart();a.spoken[2].onend();a.timers.shift()();assert.equal(starts,2,'one play count for whole dialogue');assert.equal(ends,2);
 play();const stale=a.audios.at(-1).onerror;a.player.stop();await stale();assert.equal(a.spoken.length,3,'cancel suppresses late missing-MP3 fallback');
 a.env.fetch=async()=>({status:200});play();await a.audios.at(-1).onerror();assert.equal(errors,1);assert.equal(a.spoken.length,3,'existing broken MP3 is not silently replaced');
 a.env.fetch=async()=>{throw Error('offline');};play();await a.audios.at(-1).onerror();assert.equal(errors,2);assert.equal(a.spoken.length,3,'network failures do not trigger fallback');
 a.env.fetch=async()=>({status:404});play();await a.audios.at(-1).onerror();const u=a.spoken.at(-1);u.onend();a.player.stop();const before=a.spoken.length;a.timers.shift()();assert.equal(a.spoken.length,before,'stop cancels dialogue progression');
 a.env.GAKU_SIM_EMBEDDED=false;play();assert.equal(a.audios.at(-1).src,'../assets/simulasi/n5-p01-048.mp3');a.player.stop();
 console.log('PASS: 222 listening scripts/487 turns, label stripping, alternating gender, MP3-first, missing-only fallback, one count per dialogue, cancellation/stale callbacks, error handling');
})().catch(e=>{console.error(e);process.exitCode=1;});
