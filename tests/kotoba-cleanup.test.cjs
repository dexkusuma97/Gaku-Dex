'use strict';
const fs=require('node:fs'),assert=require('node:assert/strict');
const n5=JSON.parse(fs.readFileSync('data/kotoba-n5.json')),n4=JSON.parse(fs.readFileSync('data/kotoba-n4.json')),audit=JSON.parse(fs.readFileSync('data/kotoba-level-policy-audit.json'));
const all=[...n5.entries,...n4.entries];
for(const d of [n5,n4]){
 assert.ok(d.categories.every(c=>!c.subcategories.includes('Nama orang')));
 assert.ok(d.entries.every(e=>e.subcategory!=='Nama orang'));
 for(const e of d.entries){
  assert.equal(e.jp,e.jp.trim());assert.equal(e.meaning,e.meaning.trim());
  const parts=e.meaning.split(' / ').map(p=>p.trim().toLowerCase());assert.equal(new Set(parts).size,parts.length,e.jp+' repeated meanings');
  assert.ok(e.example?.jp&&e.example.kana&&e.example.meaning,e.jp+' example');
 }
}
for(const word of ['あべ','田中','すずき','村上春樹','夏目漱石','ショパン','五嶋みどり','山下泰裕','豊臣秀吉'])assert.ok(!all.some(e=>e.jp===word),word);
for(const word of ['とうがらし','どくしん','主夫','~様','さん','ほん','~合','上野','量','君の名は','海辺のカフカ'])assert.ok(all.some(e=>e.jp===word),word+' is not a personal name');
const quantity=n4.entries.find(e=>e.jp==='量');assert.equal(quantity.kana,'りょう');assert.ok(!quantity.meaning.includes('Ryoo'));
for(const word of ['カレー','クラシック','サッカー','ギター','テニス','コンピューター','コップ'])assert.ok(!n4.entries.some(e=>e.jp===word),word+' katakana/hiragana duplicate');
assert.ok(n4.entries.some(e=>e.jp==='イクラ'),'salmon roe retained separately from price question');
for(const word of ['~様','さん','ほん','~合'])assert.ok(n4.entries.find(e=>e.jp===word).category!=='noun',word+' correct part of speech');
for(const word of ['いっぽん','わざあり']){const e=n4.entries.find(e=>e.jp===word);assert.ok(e);assert.equal(e.kana,word);assert.ok(!e.jp.includes('<'))}
assert.ok(audit.removedN5Names.length>=3&&audit.removedN4Names.length>=50);
console.log('PASS: no personal-name subcategory/cards; common words rescued; repeat meanings trimmed; quantity and judo corrected; script-variant duplicates removed');

for(const [word,meaning] of [['予約','pemesanan; reservasi'],['レコード','piringan hitam; rekaman'],['ストーブ','pemanas ruangan']])assert.equal(n5.entries.find(e=>e.jp===word).meaning,meaning);
assert.equal(n4.entries.find(e=>e.jp==='気').meaning,'perasaan; suasana hati');
