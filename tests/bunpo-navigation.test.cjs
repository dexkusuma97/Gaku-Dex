const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map();let onPop;const entries=[null];let pos=0;
const c={page:'Beranda',category:'Seion',kanaView:'groups',selectedKana:null,prefs:{level:'N5'},stopAudio(){},closeModal(){},render(){},toast(){},esc:s=>s,
 localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},document:{querySelector:()=>null,getElementById:()=>null},window:{addEventListener:(e,fn)=>{if(e==='popstate')onPop=fn}},updateScreen(){}};
c.history={get state(){return entries[pos]},pushState(s){entries.splice(pos+1);entries.push(structuredClone(s));pos++},replaceState(s){entries[pos]=structuredClone(s)},go(n){pos+=n;assert.ok(pos>=0&&pos<entries.length);onPop({state:entries[pos]})},back(){this.go(-1)}};
vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','bunpo-ui.js','navigation.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
c.initAppNavigation();c.switchTab('Materi belajar');c.showPage('Bunpo');
vm.runInContext("bunpoState.q='partikel';bunpoState.category='partikel';bunpoState.sub='all';bunpoState.page=2;rememberBunpo()",c);
c.openBunpo('goro');assert.equal(c.history.state.bunpo.view,'detail');
c.initAppNavigation();assert.equal(c.getBunpoRoute().id,'goro','Reload restores detail');
c.appBack();let s=c.getBunpoRoute();assert.equal(s.view,'list');assert.equal(s.q,'partikel');assert.equal(s.category,'partikel');assert.equal(s.sub,'all');assert.equal(s.page,2);
c.openBunpo('goro');const n=entries.length;c.openBunpo('gurai',true);assert.equal(entries.length,n,'Next lesson replaces detail, no extra Back step');c.appBack();assert.equal(c.getBunpoRoute().view,'list');
c.openBunpo('tai');c.saveBunpo();assert.deepEqual(JSON.parse(storage.get('gaku-bunpo-saved')),['tai']);c.saveBunpo();assert.deepEqual(JSON.parse(storage.get('gaku-bunpo-saved')),[]);
c.switchTab('Quiz');c.switchTab('Kaiwa');c.appBack();assert.equal(c.page,'Beranda','Tab navigation from Bunpo detail returns directly Home');
c.showPage('Bunpo');assert.equal(c.getBunpoRoute().q,'','Fresh menu entry clears old filter');
console.log('PASS: Bunpo detail reload, filter/page Back, next replacement, bookmark persistence and root tab navigation');
