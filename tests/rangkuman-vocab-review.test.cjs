const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const data=JSON.parse(fs.readFileSync('data/rangkuman-minna.json')),review=JSON.parse(fs.readFileSync('data/rangkuman-vocab-review-01-25.json'));
const hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
assert.equal(hash(data.chapters.slice(25)),review.preserved.chapters26to50Sha256);
assert.equal(hash(data.chapters.map(c=>({id:c.id,patterns:c.patterns,focus:c.focus,check:c.check}))),review.preserved.grammarSha256);
const storage=new Map(),c={esc:s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'),localStorage:{getItem:k=>storage.get(k)||null},prefs:{level:'N5'},render(){}};vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','rangkuman-data.js','rangkuman-ui.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
let count=0;
for(const ch of data.chapters.slice(0,25)){
 const ids=[];assert.equal(ch.vocabReview.batch,21);
 for(const w of ch.vocab){count++;assert.ok(w.primaryMeaning.trim());assert.ok(!/[/;,]/.test(w.primaryMeaning.replace(/, /g,'')),w.id);assert.ok(!/[\u3040-\u30ff一-龯]/.test(w.romaji),w.id);assert.ok(!/[一-龯]/.test(w.kana),w.id);assert.ok(w.note!==undefined);assert.equal(w.vocabReview,'bab-01-25-2026-11-01');}
 c.restoreRangkumanRoute({view:'chapter',chapter:ch.id,section:'kotoba'});
 for(let page=1;page<=Math.ceil(ch.vocab.length/15);page++){
  c.restoreRangkumanRoute({view:'chapter',chapter:ch.id,section:'kotoba',wordPage:page});
  const html=c.summaryWordHTML(ch),slice=c.summaryWordSlice(ch.vocab,page);
  assert.equal((html.match(/class="summary-word-meaning"/g)||[]).length,slice.items.length);
  for(const w of slice.items){ids.push(w.id);assert.ok(html.includes('<p class="summary-word-meaning">'+c.esc(w.primaryMeaning)+'</p>'));assert.ok(html.includes(c.esc(w.romaji)));}
  assert.ok(!/<details[^>]*\bopen\b/.test(html),'extra senses stay collapsed');
 }
 assert.deepEqual(ids,ch.vocab.map(w=>w.id));
}
assert.equal(count,1357);assert.equal(review.rowsReviewed,count);
const word=(ch,n)=>data.chapters[ch-1].vocab[n-1];
for(const [ch,n,jp,kana] of [[8,3,'静か','しずか'],[8,6,'親切','しんせつ'],[10,11,'象','ぞう'],[11,56,'野菜炒め','やさいいため'],[13,19,'お正月','おしょうがつ'],[13,37,'教会','きょうかい'],[13,38,'大使館','たいしかん'],[14,29,'砂糖','さとう'],[17,33,'おなかが痛い','おなかがいたい']]){assert.equal(word(ch,n).jp,jp);assert.equal(word(ch,n).kana,kana);}
assert.equal(word(25,13).romaji,'iroiro osewa ni narimashita');assert.equal(word(1,29).romaji,'onamae wa');assert.equal(word(17,34).romaji,'ha ga itai');assert.equal(word(24,1).primaryMeaning,'Memberi kepada saya');assert.equal(word(14,66).primaryMeaning,'Tiba …');assert.equal(word(6,85).primaryMeaning,'Ikan kod');
assert.ok(word(5,72).note.includes('2020'));assert.ok(word(5,72).note.includes('スポーツの日'));
// Search includes full senses and spaced authored romanization, even when the list has one meaning.
assert.ok(c.summaryWordResults(data.chapters[7],'bersih').some(w=>w.id===word(8,2).id));
assert.ok(c.summaryWordResults(data.chapters[0],'onamae wa').some(w=>w.id===word(1,29).id));
const detail=c.summaryWordDetailHTML(word(8,2));assert.ok(detail.includes('Cantik; bersih'));assert.ok(!detail.includes('open'));
// Unreviewed chapters keep their existing reading/meaning fallback until their own audit.
const untouched=word(26,1);assert.equal(c.summaryWordRomaji(untouched),c.kanjiRomanize(untouched.kana));
console.log('PASS: 1357 reviewed words, primary gloss/hidden extra senses, readable romaji, kana/kanji corrections, all pages/search, source slots and grammar/later chapters preserved');
