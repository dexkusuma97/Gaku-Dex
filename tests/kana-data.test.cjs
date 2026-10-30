const {readFileSync}=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const data=vm.runInNewContext(readFileSync('dist/kana-data.js','utf8')+';KANA_GROUPS;');
const counts={Seion:46,Yoon:33,Dakuon:20,Handakuon:5};
const all=[];
for(const [key,count] of Object.entries(counts)){
 const g=data[key], cells=g.rows.flat().filter(Boolean);
 assert.equal(cells.length,count,key+' coverage');
 assert.equal(g.count,count,key+' label');
 assert.equal(new Set(cells.map(c=>c[0])).size,count,key+' duplicate kana');
 for(const row of g.rows)assert.equal(row.length,g.columns.length,key+' column alignment');
 for(const [char,rom] of cells){assert.match(char,/^[\u3041-\u3096]+$/);assert.match(rom,/^[a-z]+$/);assert.equal(char.length,key==='Yoon'?2:1);if(key==='Yoon')assert.ok('ゃゅょ'.includes(char[1]));all.push(char)}
}
assert.equal(new Set(all).size,104,'No character duplicates between groups');
const base=data.Seion.rows.flat().filter(Boolean);
for(const [char,rom] of [['し','shi'],['ち','chi'],['つ','tsu'],['ふ','fu'],['を','wo'],['ん','n']])assert.equal(base.find(c=>c[0]===char)?.[1],rom,'Special reading '+char);
for(const key of ['Dakuon','Handakuon'])for(const [char] of data[key].rows.flat()){
 const decomposed=char.normalize('NFD');
 assert.ok(base.some(c=>c[0]===decomposed[0]),'Voiced kana derives from base');
 assert.equal(decomposed[1],key==='Dakuon'?'\u3099':'\u309a');
}
// Verify conversion used by the app preserves the small second kana in every yōon.
const source=readFileSync('dist/index.html','utf8');
const conversion=source.match(/function kata\(s\)\{[^\n]+/)[0];
const toKata=vm.runInNewContext(conversion+';kata');
assert.equal(toKata('きゃ しゃ ぱ が'),'キャ シャ パ ガ');
for(const char of all){const kat=toKata(char);assert.match(kat,/^[\u30a1-\u30f6]+$/);assert.equal(kat.length,char.length)}
const inline=source.match(/<script>([\s\S]*)<\/script>/)[1];
new vm.Script(inline);
console.log('PASS: 104 kana per script, row alignment, special readings, diacritics, katakana conversion, JS syntax');
