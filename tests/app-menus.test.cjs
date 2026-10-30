const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const browserHistory=require('./helpers/browser-history.cjs');
const html=fs.readFileSync('dist/index.html','utf8');
function app(storage=new Map()){
 const listeners={},els=new Map();let timer=0;
 function el(){return {innerHTML:'',textContent:'',style:{},dataset:{},classList:{toggle(){},add(){},remove(){}},setAttribute(){},addEventListener(){},removeEventListener(){},focus(){},querySelector(){return null},querySelectorAll(){return []}}}
 const document={body:el(),getElementById(id){if(!els.has(id))els.set(id,el());return els.get(id)},querySelector:()=>null,querySelectorAll:()=>[],addEventListener(){}};
 const c={console,document,navigator:{},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v),removeItem:k=>storage.delete(k)},sessionStorage:{getItem:()=>null,setItem(){},removeItem(){}},setTimeout(){return ++timer},clearTimeout(){},setInterval(){return ++timer},clearInterval(){},scrollTo(){},matchMedia:()=>({matches:false,addEventListener(){}}),location:{hash:'',pathname:'/',search:''},addEventListener(event,fn){(listeners[event]??=[]).push(fn)},URL,URLSearchParams,Date};c.window=c;c.history=browserHistory({onPop:e=>(listeners.popstate||[]).forEach(fn=>fn(e))});vm.createContext(c);
 for(const match of html.matchAll(/<script(?: src="([^"]+)")?>([\s\S]*?)<\/script>/g))vm.runInContext(match[1]?fs.readFileSync('dist/'+match[1],'utf8'):match[2],c,{filename:match[1]||'index-inline.js'});
 return {c,els,storage,run:s=>vm.runInContext(s,c)};
}
const a=app();
for(const name of ['Beranda','Materi belajar','Quiz & simulasi','Cerita & kaiwa','Riwayat','Tambah data','Import–Export','Pengaturan']){a.c.switchTab(name);assert.equal(a.run('page'),name);assert.ok(a.els.get('app').innerHTML.includes(name==='Beranda'?'Hari yang baik untuk belajar.':name),name)}
assert.ok(a.c.settings().includes('Level materi'),'Settings renders all linked rows without ReferenceError');
a.c.selectLevel('N4');assert.equal(a.run('prefs.level'),'N4');assert.equal(a.els.get('active-level').textContent,'N4');assert.equal(JSON.parse(a.storage.get('gaku-ui-prefs')).level,'N4');
for(const name of ['Hiragana','Katakana','Kotoba','Rangkuman','Quiz','Kaiwa','Cerita','Login','Sawer']){a.c.showPage(name);assert.equal(a.run('page'),name);assert.ok(a.els.get('app').innerHTML.length>100,name)}
a.c.showPage('Kotoba');assert.ok(a.els.get('app').innerHTML.includes('KOSAKATA N4 & A2'));
const id=a.run('kotobaBaseEntries("N4")[0].id');a.c.openKotoba(id);assert.equal(a.c.getKotobaRoute().view,'detail');a.c.toggleLevel();assert.equal(a.run('prefs.level'),'N5');assert.equal(a.c.getKotobaRoute().view,'list');assert.ok(a.els.get('app').innerHTML.includes('KOSAKATA N5 & A1'));assert.equal(a.run('kotobaResults().length'),1801);
a.c.selectLevel('N4');a.c.selectLevel('N3');assert.equal(a.run('prefs.level'),'N4');const restored=app(a.storage);assert.equal(restored.run('prefs.level'),'N4');restored.c.showPage('Kotoba');assert.ok(restored.els.get('app').innerHTML.includes('KOSAKATA N4 & A2'));
a.c.showPage('Quiz');a.run("quizSession={status:'active',deadline:Date.now()+60000};quizState.view='play'");a.c.selectLevel('N5');assert.equal(a.run('prefs.level'),'N4','Switch is locked during quiz');a.run("quizSession=null;quizState.view='menu'");
a.c.showPage('Simulasi');a.c.GakuSimulation.state.view='exam';a.c.selectLevel('N5');assert.equal(a.run('prefs.level'),'N4','Switch is locked during simulation');
const corrupt=new Map([['gaku-ui-prefs','"invalid"'],['gaku-ui-history','{}'],['gaku-ui-data','[null,42]']]);const b=app(corrupt);b.c.showPage('Kotoba');b.c.showPage('Pengaturan');assert.ok(b.els.get('app').innerHTML.includes('Level materi'));
console.log('PASS: full application scripts render every menu; Settings rows, N5/N4 badge and settings switch, reload persistence, isolated details and active-session locks; malformed local state recovers');
assert.ok(!a.c.settings().includes('Premium'));
const merged=a.run('Object.entries(KOTOBA_N4_MERGED_IDS)[0]');
const savedStorage=new Map([['gaku-kotoba-saved',JSON.stringify([merged[0],merged[1]])]]);
const migrated=app(savedStorage);assert.deepEqual(JSON.parse(migrated.run('JSON.stringify(kotobaSaved)')),[merged[1]],'saved duplicates redirect and deduplicate');
migrated.c.selectLevel('N4');migrated.c.showPage('Kotoba');migrated.c.openKotoba(merged[0]);assert.equal(migrated.c.getKotobaRoute().id,merged[1]);
assert.ok(migrated.els.get('app').innerHTML.includes('Buka arti kalimat'));assert.ok(!migrated.els.get('app').innerHTML.includes('Sumber materi'));
