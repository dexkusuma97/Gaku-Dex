const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={customData:[],prefs:{level:'N5'},title:(a,b)=>a+b,esc:s=>String(s),localStorage:{getItem:()=>null},document:{},history:{}};
vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','kanji-ui.js','bunpo-data.js','bunpo-search.js','bunpo-ui.js','kotoba-data.js','kotoba-search.js','kotoba-ui.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
function clean(html){html=html.replace(/<[^>]*>/g,'');assert.ok(!/PDF|filename|Acuan:|Sumber kata|Tentang pilihan|Tentang materi|Filter sumber|rujukan sumber|Kanji JFT 429|RSP Sensei/i.test(html),'Source metadata is absent from learning UI: '+html.match(/.{0,35}(?:PDF|filename|Acuan:|Sumber kata|Tentang pilihan|Tentang materi|Filter sumber|rujukan sumber|Kanji JFT 429|RSP Sensei).{0,50}/i))}
for(const name of ['kanjiScreen','bunpoScreen','kotobaScreen'])clean(c[name]());
vm.runInContext("kanjiState.id=KANJI_DATA[0].id;bunpoState.id=BUNPO_DATA[0].id;kotobaState.id=KOTOBA_DATA[0].id",c);
for(const name of ['kanjiDetail','bunpoDetail','kotobaDetail'])clean(c[name]());
vm.runInContext("bunpoState.id=BUNPO_DATA.find(e=>e.enrichment).id",c);clean(c.bunpoDetail());
c.restoreKanjiRoute({source:'n5-pdf'});assert.equal(c.getKanjiRoute().source,'all');
c.restoreKotobaRoute({source:'0'});assert.equal(c.getKotobaRoute().source,'all');
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.includes('enhanceLearningPickers()'));assert.ok(html.includes('learning-picker.js'));assert.ok(html.includes('if(activeLearningPicker){closeLearningPicker();return}'));
assert.ok(fs.readFileSync('dist/kotoba-ui.js','utf8').includes('el.innerHTML=kotobaResultHTML();enhanceLearningPickers()'));
console.log('PASS: no source disclosures in all three lists/details; old source filters cleared; picker enhancement wired to full and partial renders');
