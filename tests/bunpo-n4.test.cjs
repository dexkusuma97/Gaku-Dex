const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const data=JSON.parse(fs.readFileSync('data/bunpo-n4.json')),n5=JSON.parse(fs.readFileSync('data/bunpo-n5.json')),audit=JSON.parse(fs.readFileSync('data/bunpo-n4-review.json'));
assert.equal(data.lessons.length,115);assert.equal(data.categories.length,14);assert.equal(n5.lessons.length,83);
const n5ids=new Set(n5.lessons.map(e=>e.id)),ids=new Set(data.lessons.map(e=>e.id)),concepts=new Set(data.lessons.map(e=>e.concept));assert.equal(ids.size,115);assert.equal(concepts.size,115);for(const id of concepts)assert.ok(!n5ids.has(id),id);
for(const field of ['title','meaning','explanation'])assert.equal(new Set(data.lessons.map(e=>e[field])).size,115,'No duplicate '+field);
const limits=new Map(audit.sources.map(s=>[s.id,s.pages])),examples=new Set();let checks=0;
for(const e of data.lessons){assert.equal(e.level,'N4');assert.ok(e.sources.length&&data.categories.some(c=>c.id===e.category));for(const field of ['title','kana','romaji','meaning','explanation','note','subcategory'])assert.ok(e[field]?.trim(),e.id+' '+field);assert.ok(e.explanation.length>90&&e.note.length>30);assert.ok(e.patterns.length&&new Set(e.patterns).size===e.patterns.length);assert.ok(e.examples.length>=2);for(const ref of e.sources)assert.ok(limits.has(ref.id)&&ref.page>=1&&ref.page<=limits.get(ref.id));for(const ex of e.examples){assert.ok(ex.jp&&ex.kana&&ex.meaning&&!/[一-龯]/.test(ex.kana));assert.ok(!examples.has(ex.jp),ex.jp);examples.add(ex.jp)}if(e.table)for(const row of e.table.rows)assert.equal(row.length,e.table.headers.length);if(e.check){checks++;assert.equal(e.check.options.length,2);assert.ok([0,1].includes(e.check.answer)&&e.check.prompt&&e.check.explanation);assert.notEqual(...e.check.options)}}
assert.equal(examples.size,233);assert.equal(checks,16);
const master=audit.decisions.filter(r=>r.source==='master'&&r.number);assert.deepEqual(master.map(r=>r.number),Array.from({length:131},(_,i)=>i+1));assert.equal(master.filter(r=>r.decision==='existing-n5').length,16);
for(const row of audit.decisions){assert.ok(limits.has(row.source)&&row.pages.every(p=>p>=1&&p<=limits.get(row.source)));if(row.target.startsWith('N5:'))assert.ok(n5ids.has(row.target.slice(3)));else if(!row.target.startsWith('NON:'))assert.ok(ids.has(row.target))}
for(const k of ['noni-contrast','noni-purpose','sou-appearance','sou-hearsay'])assert.ok(ids.has('n4-'+k));for(const k of ['potential-verbs','ato-de','amari','zenzen','suru-change'])assert.ok(!concepts.has(k));
const storage=new Map([['gaku-bunpo-saved',JSON.stringify(['tai','n4-passive','missing'])]]);const c={prefs:{level:'N5'},page:'Bunpo',title:(a,b)=>a+b,esc:x=>String(x),localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},stopAudio(){},pushRoute(){},updateScreen(){},toast(){},history:{replaceState(){}},appRoute:()=>({}),render(){},document:{getElementById:()=>null,querySelector:()=>null}};vm.createContext(c);for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','bunpo-ui.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);const run=s=>vm.runInContext(s,c);
assert.equal(c.findBunpo().length,83);assert.deepEqual(JSON.parse(run('JSON.stringify(bunpoSaved)')),['tai','n4-passive']);c.prefs.level='N4';c.resetBunpoRoute();assert.equal(c.bunpoResults().length,115);assert.equal(c.bunpoCategories().length,14);
for(const [q,id]of [['ka douka','ka-douka'],['noni','noni-contrast'],['のに','noni-purpose'],['mendadak','kyuuni'],['kemungkinan','kamo'],['pasif','passive'],['ようにする','youni-suru'],['te yaru','te-ageru'],['to iwareteiru','sou-hearsay'],['de gozaimasu','gozaimasu'],['gari','garu']])assert.ok(c.findBunpo(q,'all','all',false,[],'N4').some(e=>e.id==='n4-'+id),q);
assert.ok(c.findBunpo('','all','all',false,[],'N4').every(e=>e.level==='N4'));for(const cat of data.categories){assert.ok(c.bunpoSubcategories(cat.id,'N4').length);assert.ok(c.findBunpo('',cat.id,'all',false,[],'N4').length)}
let paged=[];for(let i=1;i<=10;i++)paged.push(...c.bunpoPageSlice(c.bunpoResults(),i).items);assert.equal(paged.length,115);assert.equal(new Set(paged.map(e=>e.id)).size,115);
for(const e of data.lessons){c.restoreBunpoRoute({view:'detail',id:e.id});let html=c.bunpoScreen();assert.ok(html.includes(e.title)&&html.includes('Bunpo <span>N4</span>'));assert.ok(!/undefined|null/.test(html));assert.ok(!html.includes('Sumber materi'))}
c.restoreBunpoRoute({q:'pasif',category:'forms',sub:'all',page:1,view:'detail',id:'n4-passive'});const savedRoute=c.getBunpoRoute();c.resetBunpoRoute();c.restoreBunpoRoute(savedRoute);assert.equal(c.getBunpoRoute().q,'pasif');assert.equal(c.getBunpoRoute().id,'n4-passive');c.saveBunpo();assert.deepEqual(JSON.parse(storage.get('gaku-bunpo-saved')),['tai']);c.saveBunpo();assert.deepEqual(JSON.parse(storage.get('gaku-bunpo-saved')),['tai','n4-passive']);
run('bunpoState.savedOnly=true;bunpoState.q="";bunpoState.category="all"');assert.equal(c.bunpoResults().length,1);c.prefs.level='N5';c.resetBunpoRoute();c.openBunpo('n4-passive');assert.equal(c.getBunpoRoute().view,'list');c.restoreBunpoRoute(savedRoute);assert.equal(c.getBunpoRoute().view,'list');assert.equal(c.bunpoEntries().length,83);
assert.ok(!fs.readFileSync('dist/index.html','utf8').includes("page==='Bunpo')html=n4Pending()"));
console.log('PASS: 115 N4 lessons; 14 categories; 233 unique examples; 16 checks; source coverage; N5 isolation; level-safe search, detail routes, saves and pagination');

for(const [source,limit] of limits){const covered=new Set(audit.decisions.filter(r=>r.source===source).flatMap(r=>r.pages));assert.equal(covered.size,limit,'Every PDF page accounted for: '+source)}

// Canonical edits must reach the generated browser bundle and detail renderer.
assert.deepEqual(JSON.parse(run('JSON.stringify(BUNPO_N4_DATA)')),data.lessons);
assert.deepEqual(JSON.parse(run('JSON.stringify(BUNPO_DATA)')),n5.lessons);
c.prefs.level='N4';c.resetBunpoRoute();
for(const e of data.lessons){
 c.restoreBunpoRoute({view:'detail',id:e.id});
 const html=c.bunpoScreen();
 for(const text of [e.explanation,e.note,...e.patterns,...e.examples.flatMap(x=>[x.jp,x.kana,x.meaning])])assert.ok(html.includes(text),e.id+' rendered content');
 assert.ok(html.includes('Ingat kembali bekal N5'));
}
c.prefs.level='N5';c.resetBunpoRoute();c.restoreBunpoRoute({view:'detail',id:n5.lessons[0].id});
assert.ok(!c.bunpoScreen().includes('Ingat kembali bekal N5'));
