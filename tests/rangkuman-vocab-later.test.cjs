const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const data=JSON.parse(fs.readFileSync('data/rangkuman-minna.json')),review=JSON.parse(fs.readFileSync('data/rangkuman-vocab-review-26-50.json'));
const hash=v=>crypto.createHash('sha256').update(JSON.stringify(v)).digest('hex');
assert.equal(hash(data.chapters.slice(0,25)),review.preserved.chapters1to25Sha256);
assert.equal(hash(data.chapters.map(c=>({id:c.id,patterns:c.patterns,focus:c.focus,check:c.check}))),review.preserved.grammarSha256);
const c={esc:s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'),localStorage:{getItem:()=>null},prefs:{level:'N5'},render(){}};vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','rangkuman-data.js','rangkuman-ui.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
let count=0;
for(const ch of data.chapters.slice(25)){
 const ids=[];assert.equal(ch.vocabReview.batch,22);
 for(const w of ch.vocab){count++;assert.ok(w.primaryMeaning.trim());assert.ok(!/[/;\n]/.test(w.primaryMeaning),w.id);assert.ok(w.romaji&&!/[ぁ-ヶ一-龯]/.test(w.romaji),w.id);assert.ok(!/[一-龯0-9]/.test(w.kana),w.id);assert.equal(w.vocabReview,'bab-26-50-2026-11-01');}
 for(let page=1;page<=Math.ceil(ch.vocab.length/15);page++){
  c.restoreRangkumanRoute({view:'chapter',chapter:ch.id,section:'kotoba',wordPage:page});
  const html=c.summaryWordHTML(ch),slice=c.summaryWordSlice(ch.vocab,page);
  assert.equal((html.match(/class="summary-word-meaning"/g)||[]).length,slice.items.length);
  for(const w of slice.items){ids.push(w.id);assert.ok(html.includes('<p class="summary-word-meaning">'+c.esc(w.primaryMeaning)+'</p>'));assert.ok(html.includes(c.esc(w.romaji)));}
  assert.ok(!/<details[^>]*\bopen\b/.test(html));
 }
 assert.deepEqual(ids,ch.vocab.map(w=>w.id));
}
assert.equal(count,1553);assert.equal(data.meta.vocabReviewedThrough,50);
const w=(ch,n)=>data.chapters[ch-1].vocab[n-1];
for(const [ch,n,jp,kana] of [[28,13,'習慣','しゅうかん'],[29,14,'止まります','とまります'],[34,80,'電子オーブンレンジ','でんしオーブンレンジ'],[36,54,'健康診断を受ける','けんこうしんだんをうける'],[45,33,'非常の場合','ひじょうのばあい'],[48,38,'自信','じしん'],[49,1,'勤めます','つとめます']]){assert.equal(w(ch,n).jp,jp);assert.equal(w(ch,n).kana,kana);}
for(const [ch,n,meaning] of [[36,65,'Umbi-umbian'],[36,66,'Lemak'],[37,62,'Menolong'],[37,63,'Meledak'],[40,14,'Acara lanjutan'],[40,39,'… atau lebih'],[40,40,'… atau kurang'],[42,34,'Perserikatan Bangsa-Bangsa'],[44,3,'Menjadi kering'],[44,12,'Encer'],[48,38,'Percaya diri']])assert.equal(w(ch,n).primaryMeaning,meaning);
assert.equal(w(35,29).romaji,'ha');assert.equal(w(40,87).romaji,'wa');assert.equal(w(32,21).romaji,'seki ga demasu');
assert.ok(w(50,1).note.includes('pihak sendiri'));assert.ok(w(49,6).note.includes('hormat'));assert.ok(w(41,2).note.includes('penerima saya'));
assert.ok(c.summaryWordResults(data.chapters[49],'ukagaimasu').some(x=>x.id===w(50,8).id));
assert.ok(c.summaryWordResults(data.chapters[43],'muda').some(x=>x.id===w(44,12).id));
assert.equal(data.chapters.flatMap(ch=>ch.vocab).length,2910);
console.log('PASS: 1553 later vocabulary rows, primary meanings/romaji, corrected swapped glosses/readings/honorific direction, full pagination/search and preserved earlier chapters/grammar');
