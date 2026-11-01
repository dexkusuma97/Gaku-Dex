const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let seed=2301;const math=Object.create(Math);math.random=()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);
const c={Math:math,prefs:{level:'N5'},customData:[]};vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','kotoba-data.js','kotoba-n4-data.js','kotoba-search.js','quiz-bunpo-index.js','quiz-core.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
const run=s=>vm.runInContext(s,c),bank=JSON.parse(fs.readFileSync('dist/assets/quiz/bunpo-bank.json')),cases=JSON.parse(fs.readFileSync('data/quiz/bunpo-cases.json')),lessons=JSON.parse(fs.readFileSync('data/bunpo-n5.json')).lessons;
c.bank=bank;run('quizBunpoBank=bank');
for(const x of cases){assert.ok(x.lessonIds.every(id=>lessons.some(l=>l.id===id)));assert.equal(x.chunks.join('')+'。',x.jp);assert.equal(x.chunks[x.blankIndex],x.target);assert.equal(x.wrong.length,3);assert.ok(!x.wrong.includes(x.target));const forms=bank.filter(q=>q.caseId===x.id);assert.equal(forms.length,4);for(const q of forms){if(q.mode==='cloze')assert.equal(q.options[q.answer],x.target);if(q.mode==='correct')assert.equal(q.options[q.answer],x.jp);if(q.mode==='order')assert.equal(q.answerText,x.jp);}}
for(const x of cases.filter(x=>x.id.startsWith('bq-09-')&&Number(x.id.slice(-2))>=11))assert.ok(!x.wrong.includes('と'));
for(const x of cases.filter(x=>x.id.startsWith('bq-26-')&&Number(x.id.slice(-2))<=5))assert.ok(!x.wrong.includes('ので'));
assert.ok(cases.find(x=>x.id==='bq-10-01').jp.includes('ごごごじまで'));
// Independent regression pairs: synonymous answer labels must not compete.
const item={id:'a',jp:'着く',kana:'つく',meaning:'Tiba.'},synonym={id:'b',jp:'到着する',kana:'とうちゃくする',meaning:'sampai (di tujuan)'};
const other=[{id:'c',jp:'見る',kana:'みる',meaning:'Melihat'},{id:'d',jp:'読む',kana:'よむ',meaning:'Membaca'},{id:'e',jp:'飲む',kana:'のむ',meaning:'Minum'}];
for(const mode of ['id-jp','jp-id']){const q=c.quizChoiceQuestion(item,[item,synonym,...other],mode,'kotoba',{});assert.ok(q);assert.ok(!q.options.includes(mode==='id-jp'?c.quizWordLabel(synonym):synonym.meaning));}
let generated=0;
for(const level of ['N5','N4']){
 c.prefs.level=level;const words=c.quizKotobaData(),kanji=c.quizKanjiData();assert.ok(words.length>1000);assert.ok(kanji.length>=100);
 for(const e of words)for(const mode of ['id-jp','jp-id']){const q=c.quizChoiceQuestion(e,words,mode,'kotoba',{});assert.ok(q,e.id);assert.equal(q.options.length,4);assert.equal(new Set(q.options.map(c.quizNorm)).size,4);assert.equal(q.options[q.answer],mode==='id-jp'?c.quizWordLabel(e):e.meaning);generated++;}
 for(const e of kanji)for(const mode of ['kanji-meaning','meaning-kanji','kanji-reading','reading-kanji'])for(const reading of (mode.includes('reading')?['on','kun']:['on'])){
  const q=c.quizChoiceQuestion(e,kanji,mode,'kanji',{reading});if(mode.includes('reading')&&!c.quizReadings(e,reading).length){assert.equal(q,null);continue}assert.ok(q,e.id+' '+mode+' '+reading);assert.equal(new Set(q.options.map(c.quizNorm)).size,4);assert.equal(q.options[q.answer],mode==='kanji-meaning'?e.meaning:mode==='kanji-reading'?c.quizReadings(e,reading).join('・'):e.char);generated++;
 }
}
c.prefs.level='N5';for(const script of ['Hiragana','Katakana']){const letters=c.quizKanaItems(script);for(const e of letters){const q=c.quizChoiceQuestion(e,letters,'kana-romaji','kana',{script});assert.equal(q.options[q.answer],e.romaji);const keys=q.options.map(c.quizKanaSoundKey);assert.equal(new Set(keys).size,4);generated++;}}
console.log('PASS: N5 bank and Kana/Kotoba/Kanji distractor audits across both levels: '+generated);
