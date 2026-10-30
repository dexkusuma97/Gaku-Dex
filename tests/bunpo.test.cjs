const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const source=JSON.parse(fs.readFileSync('data/bunpo-n5.json','utf8'));
const c={};vm.createContext(c);
for(const path of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js'])vm.runInContext(fs.readFileSync('dist/'+path,'utf8'),c);
const data=vm.runInContext('BUNPO_DATA',c),categories=vm.runInContext('BUNPO_CATEGORIES',c);
assert.equal(data.length,83);assert.equal(categories.length,11);assert.equal(new Set(data.map(x=>x.id)).size,83);
assert.equal(JSON.stringify(data),JSON.stringify(source.lessons),'Browser data matches editable source');
const pages=new Set();let checks=0,examples=0;
for(const item of data){
 assert.ok(categories.some(x=>x.id===item.category));
 for(const key of ['id','title','kana','romaji','meaning','explanation','note','subcategory'])assert.ok(item[key]?.trim(),item.id+': '+key);
 assert.equal(item.level,'N5');assert.ok(item.patterns.length);assert.equal(item.examples.length,2);
 item.sourcePages.forEach(p=>{assert.ok(p>=2&&p<=37);pages.add(p)});
 for(const ex of item.examples){assert.ok(ex.jp&&ex.kana&&ex.meaning);assert.ok(!/[一-龯]/.test(ex.kana),'Reading line contains kana, not unreadable kanji: '+item.id);examples++}
 if(item.mistake){assert.notEqual(item.mistake.wrong,item.mistake.correct);assert.ok(item.mistake.why)}
 if(item.table){for(const row of item.table.rows)assert.equal(row.length,item.table.headers.length)}
 if(item.check){checks++;assert.equal(item.check.options.length,2);assert.ok([0,1].includes(item.check.answer));assert.ok(item.check.prompt&&item.check.explanation);assert.notEqual(...item.check.options)}
}
assert.equal(pages.size,36,'Every content page is mapped, including enrichment');assert.equal(checks,16);assert.equal(examples,166);
const queries=[['たい','tai'],['タイ','tai'],['tai','tai'],['te kudasai','te-kudasai'],['てください','te-kudasai'],['～てください','te-kudasai'],['sebelum','mae-ni'],['setelah','ato-de'],['ingin','tai'],['toki','toki'],['tōki','toki'],['から','kara-reason'],['moraimasu','morau'],['perbandingan','yori'],['bisa','koto-dekiru'],['のほうが','houga'],['kanoukei','potential-verbs'],['静か','na-adjective']];
for(const [q,id] of queries)assert.ok(c.findBunpo(q).some(x=>x.id===id),q+' finds '+id);
assert.equal(c.findBunpo('te kudasai')[0].id,'te-kudasai');
assert.equal(c.findBunpo('madeup-query-937').length,0);assert.ok(c.findBunpo('','all','all',false,[],'N4').every(e=>e.level==='N4'),'No N5 data leaks into N4');
for(const category of categories){const all=c.findBunpo('',category.id);assert.ok(all.length);assert.ok(all.every(x=>x.category===category.id));for(const sub of c.bunpoSubcategories(category.id)){assert.ok(c.findBunpo('',category.id,sub).every(x=>x.subcategory===sub))}}
const all=c.findBunpo(''),seen=[];
for(let p=1;p<=7;p++){const page=c.bunpoPageSlice(all,p);assert.equal(page.items.length,p===7?11:12);seen.push(...page.items.map(x=>x.id))}
assert.equal(new Set(seen).size,83);assert.deepEqual(seen,Array.from(all,x=>x.id));assert.equal(c.bunpoPageSlice(all,999).page,7);assert.equal(c.bunpoPageSlice([],0).page,1);
assert.deepEqual(Array.from(c.findBunpo('','all','all',true,['tai','naru']),x=>x.id),['tai','naru']);
assert.ok(c.bunpoExampleRomaji('わたし は がっこう へ いきます。').includes('watashi wa gakkou e ikimasu'));
assert.ok(!fs.readFileSync('dist/index.html','utf8').includes('tiny-progress'),'Removed progress bars, including demo quiz bar');
console.log('PASS: 83 Bunpo records, all 36 source pages, 166 examples, 16 checks, search, filters, saved-only, N4 isolation and pagination');
