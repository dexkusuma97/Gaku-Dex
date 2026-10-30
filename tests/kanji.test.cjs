const vm=require('node:vm'),fs=require('node:fs'),assert=require('node:assert/strict');
const ctx=vm.createContext({});
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','kanji-ui.js','navigation.js']){new vm.Script(fs.readFileSync('dist/'+f,'utf8'));if(!['kanji-ui.js','navigation.js'].includes(f))vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),ctx)}
const get=code=>vm.runInContext(code,ctx),data=get('KANJI_DATA');
assert.equal(data.length,115);assert.equal(new Set(data.map(k=>k.char)).size,115);
assert.equal(data.filter(k=>k.source.id==='n5-pdf').length,103);assert.equal(data.filter(k=>k.source.id==='jft-pdf').length,12);
const original='一二三四五六七八九十百千万円年山川田日月火水木金土上下中半分人子女男目口耳手足力父母店駅先生学校友本毎前後左右東西南北名牛馬魚貝雨天気車門午大小高安新古長多少早行来食見入出立書言飲話読語間聞買休時週道今会社';
assert.equal(data.slice(0,103).map(k=>k.char).join(''),original,'All PDF characters in original order');
for(const k of data){assert.ok(k.meaning&&k.english&&k.mnemonic);assert.ok(Number.isInteger(k.strokes)&&k.strokes>0&&k.strokes<30);assert.equal([...k.radical].length,1);assert.ok(k.on.length+k.kun.length>0);assert.equal(k.examples.length,2);for(const e of k.examples){assert.ok(e.word.includes(k.char),'Example contains '+k.char);assert.match(e.kana,/^[\u3041-\u3096ー]+$/);assert.ok(e.meaning)}}
let tests=0;
function finds(query,char){const result=ctx.findKanji(query);assert.ok(result.some(k=>k.char===char),query+' → '+char);tests++}
for(const q of ['水','みず','ミズ','mizu','air','water','WATER','  ＭＩＺＵ  '])finds(q,'水');
for(const q of ['gakkou','gakkō','gakko','gakou','がっこう','ガッコウ'])finds(q,'校');
for(const q of ['shi','si','し','シ'])finds(q,'四');
for(const q of ['chi','ti','ち','チ'])finds(q,'千');
for(const q of ['chikara','tikara','ちから'])finds(q,'力');
for(const q of ['juu','jū','zyuu','じゅう'])finds(q,'十');
for(const q of ['shiro','siro','しろ','putih','white'])finds(q,'白');
for(const q of ['fu','hu','ふ'])finds(q,'父');
for(const q of ['ji','zi','じ'])finds(q,'時');
finds('わかる','分');finds('seratus','百');finds('hundred','百');
assert.equal(ctx.findKanji('日')[0].char,'日','Exact glyph first');
assert.equal(ctx.findKanji('thereisnosuchkanji').length,0);
assert.equal(ctx.findKanji('','all','n5-pdf').length,103);
assert.equal(ctx.findKanji('','all','jft-pdf').length,12);
const pages=[];for(let p=1;p<=8;p++){const x=ctx.kanjiPageSlice(ctx.findKanji(),p);assert.equal(x.items.length,p===8?10:15);pages.push(...x.items.map(k=>k.id))}assert.equal(new Set(pages).size,115,'No skips or repeats across pages');
assert.equal(ctx.kanjiPageSlice(ctx.findKanji(),100).page,8);
assert.equal(ctx.kanjiPageSlice([],100).items.length,0);
for(const c of get('KANJI_CATEGORIES'))assert.ok(ctx.findKanji('',c.id).every(k=>k.category===c.id));
console.log('PASS: PDF coverage, 115 complete records, 230 examples, '+tests+' search checks, ranking, source filters and 15-per-page pagination');
