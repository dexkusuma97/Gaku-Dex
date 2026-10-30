const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={prefs:{level:'N5'},title:(a,b)=>a+b,esc:s=>String(s),stopAudio(){},pushRoute(){},updateScreen(){},page:'Kanji',history:{replaceState(){}},appRoute:()=>({})};vm.createContext(c);
for(const file of ['kana-data.js','kanji-data.js','kanji-search.js','kanji-ui.js','quiz-core.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
const run=s=>vm.runInContext(s,c),n5=run('KANJI_DATA'),n4=run('KANJI_N4_DATA'),audit=JSON.parse(fs.readFileSync('data/kanji-audit.json'));
assert.equal(n5.length,115);assert.equal(n4.length,287);assert.equal(new Set([...n5,...n4].map(k=>k.char)).size,402);
assert.equal(audit.sourceRows,1106);assert.equal(audit.repeatedRows,610);
const sourceChars=new Set(),sources={};
for(const src of audit.sources){const rows=JSON.parse(fs.readFileSync('data/kanji-sources/'+src.id+'.json'));sources[src.id]=rows;assert.equal(rows.length,src.rows);assert.deepEqual(rows.map(x=>x.number).sort((a,b)=>a-b),Array.from({length:src.maxNumber},(_,i)=>i+1));for(const row of rows)for(const ch of row.word.replace(/（.*?）/g,''))if(/[\u4e00-\u9fff]/.test(ch))sourceChars.add(ch)}
assert.equal(sourceChars.size,397);for(const ch of sourceChars)assert.ok([...n5,...n4].some(k=>k.char===ch),'Covered source character '+ch);
const categories=run('KANJI_N4_CATEGORIES');assert.equal(categories.length,15);
for(const k of n4){assert.equal(k.level,'N4');assert.ok(categories.some(x=>x.id===k.category));assert.ok(k.meaning&&k.on.length+k.kun.length>0);assert.ok(k.examples.length>=1);assert.equal(k.strokes,null,'No invented stroke counts');for(const text of [k.meaning,...k.examples.map(x=>x.meaning)]){const parts=text.split(/[/;,]/).map(s=>s.trim().toLowerCase()).filter(Boolean);assert.equal(new Set(parts).size,parts.length,'No repeated gloss: '+text)}for(const e of k.examples){assert.ok(e.word.includes(k.char));assert.match(e.kana,/^[ぁ-ゖァ-ヶー /]+$/);const source=sources[e.source].find(r=>r.number===e.number);assert.ok(source&&source.page===e.page&&source.word.includes(k.char))}}
assert.equal(c.findKanji().length,115);c.prefs.level='N4';c.resetKanjiRoute();assert.equal(c.getKanjiRoute().scope,'a2');assert.equal(c.findKanji().length,287);assert.equal(c.findKanji('','all','all','N4','a2').length,217);assert.equal(c.findKanji('','all','all','N4','a2-b1').length,70);
assert.ok(!c.findKanji('水').some(k=>k.char==='水'));for(const q of ['海','laut','umi'])assert.ok(c.findKanji(q).some(k=>k.char==='海'));
let html=c.kanjiScreen();assert.ok(html.includes('217 kanji lanjutan A2'));assert.ok(html.includes('Cakupan kanji'));assert.ok(!html.includes("openKanji('kanji-6c34')"));
c.restoreKanjiRoute({view:'detail',id:'kanji-6d77',scope:'a2'});html=c.kanjiScreen();assert.ok(html.includes('Kenali 海')&&html.includes('うみ'));assert.ok(!/null|undefined|Radikal <strong/.test(html));
c.restoreKanjiRoute({view:'detail',id:'kanji-6c34'});assert.equal(c.getKanjiRoute().view,'list');
c.restoreKanjiRoute({view:'list',scope:'a2-b1',page:2});assert.equal(c.getKanjiRoute().scope,'a2-b1');
const poolData=c.quizKanjiData();assert.equal(poolData.length,217);assert.ok(poolData.every(k=>k.level==='N4'&&k.scope==='a2'));
assert.equal(c.quizCategories('kanji').reduce((n,x)=>n+x.count,0),217);
const cfg={...c.quizDefaultConfig(),type:'kanji',mode:'kanji-meaning',categories:categories.map(x=>x.id)};const pool=c.quizPool(cfg);assert.ok(pool.length>150);assert.ok(pool.every(q=>poolData.some(k=>k.id===q.sourceId)));
c.prefs.level='N5';c.resetKanjiRoute();assert.equal(c.findKanji().length,115);assert.equal(c.quizKanjiData().length,115);assert.ok(c.kanjiScreen().includes('115 kanji dasar'));
const index=fs.readFileSync('dist/index.html','utf8');assert.ok(!index.includes("['Kanji','Bunpo'].includes(page)"));
console.log('PASS: 1,106 source rows audited; 115 N5 + 217 A2 + 70 A2/B1; no repeated characters/glosses; level-safe search, detail routes, scope filter and quiz pools');
