'use strict';
const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),crypto=require('node:crypto');
const app=require('./helpers/main-app.cjs');
const a=app();a.c.showPage('Sawer');assert.match(a.els.get('app').innerHTML,/Simpan gambar QR/);assert.doesNotMatch(a.els.get('app').innerHTML,/Segera kita kerjakan/);
function setup({loaded=true,motion=true}={}){
 const events=new Map(),timers=new Map();let timer=0,focusCount=0,opens=0,closes=0;
 const classes=new Set(),button={addEventListener:(n,f)=>events.set('button:'+n,f),focus(){focusCount++;}};
 const picture={complete:loaded,naturalWidth:loaded?1229:0,addEventListener:(n,f)=>events.set('img:'+n,f)},error={hidden:true};
 const previous={isConnected:true,focus(){focusCount++;}};
 const dialog={open:false,classList:{add:n=>classes.add(n),remove:n=>classes.delete(n)},
   querySelector:s=>s==='img'?picture:s==='.donation-close'?button:error,
   addEventListener:(n,f)=>events.set(n,f),showModal(){this.open=true;opens++;},close(){this.open=false;closes++;events.get('close')();},
   getBoundingClientRect:()=>({left:20,right:370,top:80,bottom:520})};
 const document={activeElement:previous,documentElement:{style:{overflow:'auto'}},body:{style:{overflow:'scroll'},classList:{contains:()=>!motion}},
   getElementById:()=>dialog,addEventListener:(n,f)=>events.set('document:'+n,f)};
 const c={document,matchMedia:()=>({matches:false}),setTimeout:f=>{timers.set(++timer,f);return timer;},clearTimeout:id=>timers.delete(id)};c.window=c;
 vm.runInNewContext(fs.readFileSync('dist/donation.js','utf8'),c);
 function emit(n,values={}){const e={target:dialog,clientX:0,clientY:0,preventDefault(){this.prevented=true;},stopPropagation(){this.stopped=true;},...values};events.get(n)(e);return e;}
 return {c,document,dialog,picture,error,classes,events,emit,flush(){const all=[...timers.values()];timers.clear();all.forEach(f=>f());},get opens(){return opens;},get closes(){return closes;},get focusCount(){return focusCount;}};
}
const s=setup();s.emit('document:DOMContentLoaded');assert.equal(s.opens,1);assert.equal(s.document.body.style.overflow,'hidden');
// Opening twice does not stack dialogs; touching the artwork leaves it open.
s.c.GakuDonation.open();assert.equal(s.opens,1);s.emit('pointerdown',{target:s.picture});s.emit('click',{target:s.picture});assert.equal(s.closes,0);
// A drag from artwork to backdrop does not count as an outside tap.
s.emit('pointerdown',{target:s.picture});s.emit('click');assert.equal(s.classes.has('donation-closing'),false);
s.emit('pointerdown');s.emit('click');assert.ok(s.classes.has('donation-closing'));assert.equal(s.closes,0);s.flush();assert.equal(s.closes,1);assert.equal(s.document.body.style.overflow,'scroll');assert.equal(s.document.documentElement.style.overflow,'auto');
s.c.GakuDonation.open();const escape=s.emit('keydown',{key:'Escape'});assert.ok(escape.prevented&&escape.stopped);s.flush();assert.equal(s.closes,2);
s.c.GakuDonation.open();const cancel=s.emit('cancel');assert.ok(cancel.prevented);s.flush();assert.equal(s.closes,3);
// Reopening during exit cancels that exit, keeps the scroll lock, and creates no second dialog.
s.c.GakuDonation.open();s.emit('button:click');s.c.GakuDonation.open();s.flush();assert.equal(s.dialog.open,true);assert.equal(s.document.body.style.overflow,'hidden');s.emit('button:click');s.flush();assert.equal(s.dialog.open,false);
const r=setup({motion:false});r.emit('document:DOMContentLoaded');r.emit('button:click');assert.equal(r.closes,1);
// Startup waits for the original poster, so it never flashes an empty dialog.
const pending=setup({loaded:false});pending.emit('document:DOMContentLoaded');assert.equal(pending.opens,0);pending.emit('img:load');assert.equal(pending.opens,1);
const failed=setup({loaded:false});failed.emit('document:DOMContentLoaded');failed.emit('img:error');assert.equal(failed.opens,0);assert.equal(failed.error.hidden,false);assert.equal(failed.picture.hidden,true);
const image=fs.readFileSync('dist/assets/donation/donasi-shiba.png');assert.equal(crypto.createHash('sha256').update(image).digest('hex'),'0f39fa7707f047512831067ab783e3d76167637f1605f4bf62f4468948c4d57d');
console.log('Donation: startup, manual opening, image load/error, backdrop, drag, Escape, scroll/focus recovery and motion controls passed.');
