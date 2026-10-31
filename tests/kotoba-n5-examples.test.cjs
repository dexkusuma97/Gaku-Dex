'use strict';
const crypto=require('node:crypto');
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const d=JSON.parse(fs.readFileSync('data/kotoba-n5.json')),p=JSON.parse(fs.readFileSync('data/kotoba-n5-context-examples.json')),r=JSON.parse(fs.readFileSync('data/kotoba-n5-quality-review.json')),by=new Map(d.entries.map(e=>[e.id,e]));
const c={};vm.createContext(c);for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
assert.equal(d.entries.length,1791);assert.equal(p.entries.length,1047);assert.equal(new Set(p.entries.map(e=>e.id)).size,1047);assert.equal(r.reviewedExampleCount,1047);assert.equal(r.activeTotal,1791);assert.equal(r.missingFieldOrReadingIssues.length,0);
for(const row of p.entries){const e=by.get(row.id);assert.ok(e,row.headword);assert.equal(e.jp,row.headword);assert.equal(e.kana,row.reading);assert.deepEqual(e.example,row.example);assert.notDeepEqual(e.example,row.before);assert.equal(e.example.jp,e.example.kana.replaceAll(' ',''));assert.ok(e.example.kana.includes(' '));assert.ok(!/[一-龯A-Za-z]/u.test(e.example.kana));const romaji=c.bunpoExampleRomaji(e.example.kana);assert.ok(!/[ぁ-ヿ一-龯]/u.test(romaji),e.jp+': '+romaji);assert.ok(romaji.includes(' '),e.jp);}
const word=w=>d.entries.find(e=>e.jp===w);
for(const word of ['喫茶店','留学生','夫','電気','おつまみ','コピー機','国際フェスティバル'])assert.ok(p.entries.some(e=>e.headword===word));
assert.equal(word('半分').meaning,'setengah; separuh');assert.ok(word('くれる').example.kana.startsWith('あね が わたし に'));assert.ok(word('一月').example.kana.includes('ひとつき'));assert.ok(word('一日').example.kana.includes('いちにち'));assert.ok(word('五日').example.meaning.includes('tanggal lima'));assert.ok(word('1時間半').example.meaning.includes('satu setengah jam'));
for(const e of d.entries){assert.ok(!e.example.jp.startsWith('このかばんは'));assert.ok(!['Saya minum kafe.','Saya makan suami.','Saya menjadi berawan.','Orang ini listrik.'].includes(e.example.meaning));}
for(const e of d.entries.filter(e=>/^\d{1,2},\d{3}円$/.test(e.jp)))assert.ok(e.example.meaning.includes(e.jp.slice(0,-1).replace(',','.')));
assert.equal(c.bunpoExampleRomaji(word('熱い').example.kana),'kono ocha wa atsui desu.');assert.ok(c.bunpoExampleRomaji(word('歩いて').example.kana).includes('aruite ikimasu'));
for(const row of p.meaningCorrections)assert.equal(by.get(row.id).meaning,row.meaning);
assert.equal(r.queue.length,0);assert.ok(r.queue.every(e=>!p.entries.some(p=>p.id===e.id)));assert.equal(r.queue.length,Object.values(r.remainingFrameCounts).reduce((a,b)=>a+b,0));
console.log('PASS: all 1791 N5 records screened; 1047 retained examples, spaced kana/romaji, proper referents, give/receive direction, dates/month durations, full yen values, 11 gloss clarifications and transparent remaining queue');

assert.equal(crypto.createHash('sha256').update(JSON.stringify(p.entries.slice(0,427))).digest('hex'),'768975ded323bf169d514dc61abd47208bee1eda7ffd3ecb974ccdcba758d680','first 427 editorial rows preserved');
assert.equal(p.entries.slice(427).length,620);assert.equal(p.meaningCorrections.length,11);
assert.equal(new Set(p.entries.map(e=>e.example.jp)).size,1047,'all retained editorial sentences are distinct');
assert.equal(c.bunpoExampleRomaji('は を みがきます。'),'ha o migakimasu.');
assert.equal(c.bunpoExampleRomaji('わたし は がくせい です。'),'watashi wa gakusei desu.');
assert.equal(c.bunpoExampleRomaji('は が いたい です。'),'ha ga itai desu.');
assert.equal(c.bunpoExampleRomaji('この は は しろい です。'),'kono ha wa shiroi desu.');
assert.ok(word('3時').example.kana.startsWith('ごご '));assert.ok(word('3時').example.meaning.includes('15.00'));
assert.equal(word('中人').meaning,'pelajar (kategori tarif)');assert.equal(word('ステージ').meaning,'panggung; pertunjukan');
