'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),cp=require('node:child_process');
const c={customData:[],prefs:{level:'N4'},localStorage:{getItem:()=>null},esc:s=>String(s).replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]))};vm.createContext(c);
for(const file of ['kana-data.js','kanji-data.js','kanji-search.js','kotoba-data.js','kotoba-n4-data.js','kotoba-search.js','kotoba-ui.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
for(const [meaning,expected]of [['perhiasan / aksesoris','perhiasan'],['hydrangea/kembang bokor','hydrangea'],['berapa banyak? berapa umur?','berapa banyak?'],['melindungi; menaati (aturan)','melindungi'],['bentuk (A/B); pilihan lain','bentuk (A/B)'],['satu arti saja','satu arti saja']])assert.equal(c.kotobaListMeaning({meaning}),expected);
assert.equal(c.kotobaListMeaning({category:'verb',meaning:'bertemu, berjumpa'}),'bertemu');
assert.equal(c.kotobaListMeaning({category:'expression',meaning:'permisi, saya duluan.'}),'permisi, saya duluan.');
assert.equal(c.kotobaListMeaning({category:'number',meaning:'3,5 derajat; lainnya'}),'3,5 derajat');
assert.equal(c.kotobaListMeaning({jp:'おかげさまで',meaning:'Berkat perlindungan/kemurahan (Tuhan). / Terima kasih.'}),'berkat');
const data=JSON.parse(fs.readFileSync('data/kotoba-n4.json')).entries,accessory=data.find(e=>e.jp==='アクセサリー');assert.equal(accessory.meaning,'perhiasan / aksesoris');
const html=c.kotobaListCard(accessory);assert.ok(html.includes('onclick="openKotoba(\''+accessory.id+'\')"'));assert.ok(html.includes('kotoba-card-top'));assert.ok(html.includes('kotoba-card-body'));assert.ok(html.includes('kotoba-card-meaning">perhiasan</span>'));assert.ok(!html.includes('kotoba-card-romaji'));assert.ok(!html.includes('kotoba-card-kana'));assert.ok(!html.includes('perhiasan / aksesoris'));
assert.ok(c.findKotoba('aksesoris','all','all','all',false,[],'N4').some(e=>e.id===accessory.id));
assert.ok(c.kotobaListCard({...accessory,jp:'<img src=x onerror=alert(1)>'}).includes('&lt;img'));assert.ok(!c.kotobaListCard({...accessory,meaning:'<script>x</script>'}).includes('<script>'));
cp.execFileSync('python3',['-c',`import sys;sys.path.insert(0,'scripts/lib');from kotoba_cleanup import clean
for raw,expected in [('perhiasan/aksesoris / perhiasan / aksesori','perhiasan / aksesoris'),('a (b/c) / a (b/c)','a (b/c)'),('satu/dua','satu/dua')]:
 e=dict(id='test',jp='テスト',kana='てすと',romaji='tesuto',meaning=raw,subcategory='Konsep & informasi',category='noun');report=dict(cleanedCards={});clean(e,'N4',report);assert e['meaning']==expected,(raw,e);clean(e,'N4',report);assert e['meaning']==expected
`]);
console.log('PASS: one list gloss, full secondary-meaning search, duplicate cleanup across slash spacing, parenthetical senses preserved, card opens stable ID and escapes text');
