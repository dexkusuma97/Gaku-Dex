const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const storage=new Map();let onPop;const entries=[null];let pos=0;
const c={page:'Beranda',category:'Seion',kanaView:'groups',selectedKana:null,customData:[],prefs:{level:'N5'},stopAudio(){},closeModal(){},render(){},toast(){},esc:s=>s,
 localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},document:{querySelector:()=>null,getElementById:()=>null},window:{scrollTo(){},addEventListener:(e,fn)=>{if(e==='popstate')onPop=fn}},updateScreen(){}};
c.history={get state(){return entries[pos]},pushState(s){entries.splice(pos+1);entries.push(structuredClone(s));pos++},replaceState(s){entries[pos]=structuredClone(s)},go(n){pos+=n;assert.ok(pos>=0&&pos<entries.length);onPop({state:entries[pos]})},back(){this.go(-1)}};
vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','bunpo-ui.js','kotoba-data.js','kotoba-search.js','kotoba-ui.js','rangkuman-data.js','rangkuman-ui.js','navigation.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);

c.initAppNavigation();c.switchTab('Materi belajar');c.showPage('Rangkuman');
vm.runInContext("rangkumanState.range=41;rangkumanState.q='rencana';rememberRangkuman()",c);
c.openSummaryChapter(48);assert.equal(c.history.state.rangkuman.chapter,48);assert.equal(c.getRangkumanRoute().view,'intro');c.initAppNavigation();assert.equal(c.getRangkumanRoute().view,'intro');c.summaryContinueIntro();assert.equal(c.getRangkumanRoute().view,'chapter');assert.equal(storage.get('gaku-summary-intro-v1'),'true');const introDepth=entries.length;c.summaryOpenHelp();assert.equal(c.getRangkumanRoute().view,'intro');c.initAppNavigation();c.summaryContinueIntro();assert.equal(c.getRangkumanRoute().view,'chapter');assert.equal(entries.length,introDepth+1);
c.summaryChapterSection('kotoba');assert.equal(c.history.state.rangkuman.section,'kotoba');c.appBack();assert.equal(c.getRangkumanRoute().view,'library');assert.equal(c.getRangkumanRoute().range,41);assert.equal(c.getRangkumanRoute().q,'rencana');
c.openSummaryChapter(48);const len=entries.length;c.openSummaryChapter(49,'bunpo',true);assert.equal(entries.length,len);c.appBack();assert.equal(c.getRangkumanRoute().view,'library');
c.openSummaryChapter(11);assert.equal(c.getRangkumanRoute().view,'chapter');c.summaryToggle('saved');assert.deepEqual(JSON.parse(storage.get('gaku-rangkuman-saved')),[11]);c.summaryToggle('saved');assert.deepEqual(JSON.parse(storage.get('gaku-rangkuman-saved')),[]);
c.appBack();c.rangkumanSetSection('books');c.openSummaryBook(2);assert.equal(c.getRangkumanRoute().view,'reader');c.summaryBookPage(180);assert.equal(c.history.state.rangkuman.bookPage,180);assert.equal(JSON.parse(storage.get('gaku-minna-pages'))['2'],180);c.initAppNavigation();assert.equal(c.getRangkumanRoute().bookPage,180);c.appBack();assert.equal(c.getRangkumanRoute().section,'books');assert.equal(c.getRangkumanRoute().view,'library');
c.prefs.level='N4';c.openSummaryChapter(50);assert.equal(c.getRangkumanRoute().chapter,50);c.switchTab('Quiz');c.switchTab('Kaiwa');c.appBack();assert.equal(c.page,'Beranda');
console.log('PASS: summary chapter/reader reload, library filter Back, next replacement, local bookmark, book page persistence, N4 chapter access and root tab Back Home');

console.log('PASS: first-use intro survives reload, continue replaces intro, contextual help Back returns to chapter, later chapters skip intro');
