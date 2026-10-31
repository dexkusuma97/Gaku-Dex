'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const read=p=>JSON.parse(fs.readFileSync(p));
const d=read('data/kotoba-n4.json'),n5=read('data/kotoba-n5.json'),plan=read('data/kotoba-n4-lexical-repairs.json'),audit=read('data/kotoba-n4-lexical-repair-audit.json'),pending=read('data/kotoba-n4-lexical-review-pending.json');
const by=new Map(d.entries.map(e=>[e.id,e])),word=w=>d.entries.find(e=>e.jp===w);
assert.equal(d.entries.length,3215);assert.equal(n5.entries.length,1791);
assert.equal(plan.originalRecords.length,37);assert.equal(audit.resolutions.length,37);assert.equal(new Set(audit.resolutions.map(r=>r.id)).size,37);assert.equal(pending.remainingCount,0);assert.deepEqual(pending.entries,[]);
for(const row of plan.removeNames){assert.ok(!by.has(row.id));assert.ok(!d.entries.some(e=>e.jp===row.jp));}
for(const row of plan.merges){assert.ok(!by.has(row.source));assert.equal(d.mergedIds[row.source],row.target);assert.ok(by.has(row.target));const original=plan.originalRecords.find(e=>e.id===row.source);for(const s of original.sources)assert.ok(by.get(row.target).sources.some(t=>t.id===s.id&&t.page===s.page));}
assert.ok(!by.has(plan.n5Duplicate.id));assert.equal(d.mergedIds[plan.n5Duplicate.id],plan.n5Duplicate.target);assert.ok(n5.entries.some(e=>e.id===plan.n5Duplicate.target&&e.jp==='違う'));
for(const bad of ['ぬ','のこする','さがする','すごする','おとする','とりだする','ながする','へらする','よごする','守るま'])assert.ok(!word(bad),bad);
assert.equal(word('似る').group,2);assert.equal(word('似る').polite.jp,'似ます');assert.equal(word('似る').polite.kana,'にます');assert.ok(word('煮る'));
for(const [a,b]of [['瓶','便'],['自信','地震'],['取れる','採れる'],['点く','付く'],['亡くなる','無くなる'],['建てる','立てる']]){assert.ok(word(a)&&word(b));assert.notEqual(word(a).id,word(b).id);assert.notEqual(word(a).meaning,word(b).meaning);assert.equal(word(a).kana,word(b).kana);}
assert.ok(word('梅雨'));assert.equal(word('つゆ').sources.length,1);assert.deepEqual(word('つゆ').sources[0],{id:12,page:15});assert.ok(!word('つゆ').meaning.includes('musim'));
assert.ok(word('瓶').sources.every(s=>s.id!==7));assert.deepEqual(word('便').sources,[{id:7,page:12}]);
assert.ok(word('自信').sources.every(s=>!(s.id===9&&s.page===16)&&s.id!==12));assert.ok(word('地震').sources.some(s=>s.id===12&&s.page===73));
assert.equal(word('国際結婚する').polite.jp,'国際結婚します');assert.equal(word('国際結婚する').kana,'こくさいけっこんする');assert.ok(word('就職').meaning.includes('mendapat'));assert.ok(!word('就職').meaning.includes('pencarian'));
assert.equal(word('Perfume').subcategory,'Hobi, olahraga & budaya');assert.equal(word('Perfume').meaning,'Perfume (grup musik Jepang)');assert.ok(word("EXPO'70大阪").meaning.includes('1970'));assert.ok(!word("EXPO'70大阪").meaning.includes('ke-70'));
assert.ok(word('資源').meaning.startsWith('sumber daya'));assert.equal(word('ホーム').senses.length,2);
const c={prefs:{level:'N4'},customData:[],localStorage:{getItem:()=>JSON.stringify(plan.merges.map(r=>r.source).concat(plan.n5Duplicate.id))},title:()=>'',esc:s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])),stopAudio(){},pushRoute(){},updateScreen(){},history:{replaceState(){}},page:'Kotoba',appRoute:()=>({})};vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','kotoba-data.js','kotoba-n4-data.js','kotoba-search.js','bunpo-data.js','bunpo-search.js','kotoba-ui.js','quiz-bunpo-index.js','quiz-core.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
const run=s=>vm.runInContext(s,c);
for(const row of plan.merges){assert.equal(c.canonicalKotobaId(row.source),row.target);c.restoreKotobaRoute({view:'detail',id:row.source});assert.equal(c.getKotobaRoute().id,row.target);assert.equal(c.getKotobaRoute().view,'detail');}
assert.equal(c.canonicalKotobaId(plan.n5Duplicate.id),plan.n5Duplicate.target);c.restoreKotobaRoute({view:'detail',id:plan.n5Duplicate.id});assert.equal(c.getKotobaRoute().view,'list');c.prefs.level='N5';c.restoreKotobaRoute({view:'detail',id:plan.n5Duplicate.id});assert.equal(c.getKotobaRoute().id,plan.n5Duplicate.target);c.prefs.level='N4';
for(const e of [word('ホーム'),word('立てる'),word('守る')]){c.restoreKotobaRoute({view:'detail',id:e.id});const html=c.kotobaDetail();for(const sense of e.senses){assert.ok(html.includes(sense.label));if(sense.example){assert.ok(html.includes(sense.example.meaning));assert.ok(c.bunpoExampleRomaji(sense.example.kana).includes(' '));}}}
for(const r of plan.splits){const e=by.get(r.id);assert.ok(e.example.jp&&e.example.kana.includes(' '));assert.ok(c.findKotoba(e.jp,'all','all','all',false,[],'N4').some(x=>x.id===e.id));for(const mode of ['id-jp','jp-id']){const q=c.quizChoiceQuestion(e,d.entries,mode,'kotoba',{});assert.ok(q);assert.ok(!q.options.some((label,i)=>i!==q.answer&&d.entries.some(other=>other.id!==e.id&&other.kana===e.kana&&(label===other.meaning||label===c.quizWordLabel(other)))));}}
console.log('PASS: all 37 cases resolved; homonyms and sources separated; names removed; 6 merges and N5 favorite redirects; extra sense rendering; quiz excludes homophone distractors');
