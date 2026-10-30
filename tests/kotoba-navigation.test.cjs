const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map();let onPop;const entries=[null];let pos=0;
const c={page:'Beranda',category:'Seion',kanaView:'groups',selectedKana:null,customData:[],prefs:{level:'N5'},stopAudio(){},closeModal(){},render(){},toast(){},esc:s=>s,
 localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},document:{querySelector:()=>null,getElementById:()=>null},window:{addEventListener:(e,fn)=>{if(e==='popstate')onPop=fn}},updateScreen(){}};
c.history={get state(){return entries[pos]},pushState(s){entries.splice(pos+1);entries.push(structuredClone(s));pos++},replaceState(s){entries[pos]=structuredClone(s)},go(n){pos+=n;assert.ok(pos>=0&&pos<entries.length);onPop({state:entries[pos]})},back(){this.go(-1)}};
vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','bunpo-ui.js','kotoba-data.js','kotoba-search.js','kotoba-ui.js','navigation.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
c.initAppNavigation();c.switchTab('Materi belajar');c.showPage('Kotoba');
vm.runInContext("kotobaState.q='';kotobaState.category='noun';kotobaState.page=2;rememberKotoba()",c);
const first=vm.runInContext("KOTOBA_DATA[0].id",c),second=vm.runInContext("KOTOBA_DATA[1].id",c);
c.openKotoba(first);assert.equal(c.history.state.kotoba.view,'detail');c.initAppNavigation();assert.equal(c.getKotobaRoute().id,first);
c.appBack();let s=c.getKotobaRoute();assert.equal(s.view,'list');assert.equal(s.category,'noun');assert.equal(s.page,2);
c.openKotoba(first);const n=entries.length;c.openKotoba(second,true);assert.equal(entries.length,n);c.appBack();assert.equal(c.getKotobaRoute().view,'list');
c.openKotoba(first);c.saveKotoba();assert.deepEqual(JSON.parse(storage.get('gaku-kotoba-saved')),[first]);c.saveKotoba();assert.deepEqual(JSON.parse(storage.get('gaku-kotoba-saved')),[]);
c.switchTab('Quiz');c.switchTab('Kaiwa');c.appBack();assert.equal(c.page,'Beranda');c.showPage('Kotoba');assert.equal(c.getKotobaRoute().category,'all');
console.log('PASS: Kotoba detail reload, filters/page Back, next replacement, saved words and root tab Back Home');

// Old saved history may refer to a removed generic subgroup.
c.restoreKotobaRoute({category:'noun',sub:'Lainnya',q:'neko',page:2});assert.equal(c.getKotobaRoute().sub,'all');assert.equal(c.getKotobaRoute().q,'neko');
c.restoreKotobaRoute({category:'noun',sub:'Hewan & tumbuhan',page:2});assert.equal(c.getKotobaRoute().sub,'Hewan & tumbuhan');c.kotobaFilter('category','verb');assert.equal(c.getKotobaRoute().sub,'all');assert.equal(c.getKotobaRoute().page,1);
console.log('PASS: renamed subgroup history recovers and changing category clears its old subgroup');
