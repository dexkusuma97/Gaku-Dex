'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),app=require('./helpers/main-app.cjs');
const source=fs.readFileSync('dist/home-personalization.js','utf8'),words=JSON.parse(fs.readFileSync('data/HOME_WORDS_20261103.json'));
assert.equal(words.length,70);assert.equal(new Set(words.map(w=>w.id)).size,70);assert.equal(new Set(words.map(w=>w.jp)).size,70);
for(const w of words){for(const k of ['jp','kana','romaji','meaning','category','source'])assert.ok(typeof w[k]==='string'&&w[k].length);assert.ok(/^[ぁ-ゖー]+$/.test(w.kana));assert.ok(w.example.jp.includes(w.jp)||(w.jp==='愛おしい'&&w.example.jp.includes('愛おしく'))||(w.jp==='ときめき'&&w.example.jp.includes('ときめく'))||(w.jp==='寄り添う'&&w.example.jp.includes('寄り添って')));assert.ok(w.example.meaning);}
assert.equal(words[0].jp,'朝焼け');assert.equal(words[69].jp,'おやすみ');assert.ok(words.some(w=>w.jp==='愛しい'));assert.ok(words.some(w=>w.jp==='愛おしい'));
function load(storage,broken=false){const c={localStorage:{getItem:k=>{if(broken)throw Error('blocked');return storage.get(k)},setItem:(k,v)=>{if(broken)throw Error('blocked');storage.set(k,v)}},speak:t=>c.spoken=t};c.window=c;vm.createContext(c);vm.runInContext(source,c);return c;}
const storage=new Map(),draws=[];
for(let i=0;i<300;i++){const c=load(storage),w=c.GakuHome.word();assert.ok(!draws.slice(-2).includes(w.id));draws.push(w.id);assert.equal(c.GakuHome.word().id,w.id);assert.equal(c.GakuHome.wordCard(),c.GakuHome.wordCard());c.GakuHome.speakWord();assert.equal(c.spoken,w.kana);}
const broken=load(new Map(),true);broken.GakuHome.remember('Kanji');assert.equal(broken.GakuHome.hero().name,'Kanji');assert.ok(broken.GakuHome.word());
for(const bad of ['{','null','42','[]','"<script>"']){const c=load(new Map([['gaku-home-last-learning',bad],['gaku-home-word-history',bad]]));assert.equal(c.GakuHome.hero().name,'Hiragana');assert.ok(c.GakuHome.word());}
const a=app();assert.ok(a.run('home()').includes('Ayo belajar Hiragana'));const first=a.c.GakuHome.word().id;
for(const name of ['Hiragana','Katakana','Kanji','Bunpo','Kotoba','Rangkuman']){a.c.showPage(name);const h=a.run('home()');assert.ok(h.includes('Ayo belajar '+name));assert.ok(h.includes("showPage('"+name+"')"));assert.equal(a.c.GakuHome.word().id,first);assert.equal(app(a.storage).c.GakuHome.hero().name,name);}
a.c.showPage('Pengaturan');assert.equal(a.c.GakuHome.hero().name,'Rangkuman');a.c.selectLevel('N4');assert.equal(a.c.GakuHome.hero().name,'Rangkuman');
console.log('PASS: 70 user-supplied words, 300 reloads exclude last two, stable redraw/audio, six routes and reload/level persistence, corrupt/blocked storage fallback.');
