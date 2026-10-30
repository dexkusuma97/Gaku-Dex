const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=JSON.parse(fs.readFileSync('data/rangkuman-minna.json')),books=JSON.parse(fs.readFileSync('data/rangkuman-books.json'));
const c={esc:s=>String(s),localStorage:{getItem:()=>null},prefs:{level:'N4'}};vm.createContext(c);
for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','kotoba-data.js','kotoba-search.js','rangkuman-data.js','rangkuman-ui.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
assert.equal(source.chapters.length,50);assert.deepEqual(source.chapters.map(e=>e.id),Array.from({length:50},(_,i)=>i+1));assert.equal(source.meta.levelIndependent,true);assert.equal(source.meta.access.premiumEnabled,false);assert.equal(source.meta.access.allChaptersOpen,true);assert.equal(source.meta.access.futureFreeThrough,10);assert.equal(source.meta.access.futurePremiumFrom,11);
let words=0,patterns=0;
for(const ch of source.chapters){
 assert.ok(ch.title&&ch.goal&&ch.focus.pattern&&ch.focus.explanation&&ch.focus.note);assert.ok(ch.patterns.length);assert.ok(ch.vocab.length);assert.ok(ch.focus.parts.length);
 for(const k of ['jp','kana','meaning'])assert.ok(ch.focus.example[k]);assert.ok(!/[一-龯]/.test(ch.focus.example.kana));assert.ok(!/[一-龯]/.test(c.bunpoExampleRomaji(ch.focus.example.kana)));for(const p of ch.patterns){assert.ok(p.blocks.length);assert.ok(p.meaning);assert.ok(!p.title.endsWith(':'));assert.ok(!/Page \d+ of/.test(p.text));}
 assert.equal(ch.check.options.length,3);assert.equal(new Set(ch.check.options).size,3);assert.equal(ch.check.chapter,ch.id);assert.ok(ch.check.answer>=0&&ch.check.answer<3);assert.ok(ch.check.explanation);assert.ok(!ch.check.options.includes(ch.focus.example.jp));
 assert.equal(new Set(ch.vocab.map(e=>e.id)).size,ch.vocab.length);assert.equal(new Set(ch.vocab.map(e=>e.jp)).size,ch.vocab.length);
 for(const e of ch.vocab){assert.equal(e.chapter,ch.id);assert.ok(e.jp&&e.kana&&e.meaning);assert.ok(!/[一-龯ｓ]/.test(e.kana));assert.ok(e.page>=1&&e.page<=60)}
 const visited=[];for(let p=1;p<=Math.ceil(ch.vocab.length/15);p++)visited.push(...c.summaryWordSlice(ch.vocab,p).items.map(e=>e.id));assert.deepEqual(visited,ch.vocab.map(e=>e.id));
 assert.equal(c.summaryWordSlice(ch.vocab,999).page,Math.ceil(ch.vocab.length/15));words+=ch.vocab.length;patterns+=ch.patterns.length;
}
assert.equal(words,2910);assert.equal(patterns,230);
const fromGroups=[];for(let n=1;n<=41;n+=10){const data=JSON.parse(fs.readFileSync('dist/assets/rangkuman/chapters-'+String(n).padStart(2,'0')+'-'+String(n+9).padStart(2,'0')+'.json'));assert.equal(data.length,10);fromGroups.push(...data);assert.equal(c.summaryLibraryResults('',n).length,10)}assert.equal(JSON.stringify(fromGroups),JSON.stringify(source.chapters));
assert.equal(new Set(fromGroups.flatMap(e=>e.vocab.map(w=>w.id))).size,2910);
assert.ok(c.summaryLibraryResults('kenalan').some(e=>e.id===1));assert.ok(c.summaryLibraryResults('rencana').some(e=>e.id===31));
const ch1=source.chapters[0];for(const q of ['watashi','わたし','ワタシ','私','saya'])assert.ok(c.summaryWordResults(ch1,q).some(e=>e.jp==='私'),q);
assert.ok(source.chapters[30].patterns.some(e=>e.text.includes('ちゅうごく')));assert.ok(source.chapters[7].patterns.some(e=>e.text.includes('しずかです')));assert.ok(!source.chapters[34].patterns.some(e=>e.text.includes('(hasil pasti)')));
assert.equal(source.chapters[13].vocab.find(e=>e.number===6).kana,'まちます');assert.equal(source.chapters[3].vocab.find(e=>e.number===16).kana,'なんじ');assert.equal(source.chapters[26].vocab.find(e=>e.number===49).jp,'自分');assert.ok(source.chapters[32].vocab.find(e=>e.number===63).meaning);
for(const b of books){assert.ok(b.pages>100);for(let n=1;n<=b.pages;n++){const file='dist/'+b.assetPath+String(n).padStart(3,'0')+'.webp';assert.ok(fs.statSync(file).size>1000,file)}}assert.equal(books.reduce((s,b)=>s+b.pages,0),384);
c.restoreRangkumanRoute({view:'reader',book:2,bookPage:999,chapter:99,zoom:99});assert.equal(c.getRangkumanRoute().bookPage,180);assert.equal(c.getRangkumanRoute().chapter,50);assert.equal(c.getRangkumanRoute().zoom,3);
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(!html.includes("['Kanji','Kotoba','Bunpo','Rangkuman','Quiz','Simulasi']"));assert.ok(html.includes("else if(page==='Rangkuman')html=rangkumanScreen()"));
console.log('PASS: 50 chapters accessible across levels, all-open access policy, 230 notes, 2910 vocabulary rows, source corrections, lazy group parity, per-chapter search/pagination, 50 checks and 384 book pages');

assert.equal(source.meta.grammarEdition,'versi-mudah-2026-10-27');
const ui=fs.readFileSync('dist/rangkuman-ui.js','utf8');assert.ok(!ui.includes('summary-finish'));assert.ok(!ui.includes('Tandai sudah dipelajari'));assert.ok(!ui.includes('rangkumanCompleted'));
for(const b of books){assert.equal(b.pageSizes.length,b.pages);for(const size of b.pageSizes)assert.ok(size[0]>0&&size[1]>0)}
const reader=c.summaryBookReader();assert.equal((reader.match(/class="summary-book-sheet"/g)||[]).length,180);assert.ok(reader.includes('loading="lazy"'));assert.ok(!reader.includes('Berikutnya'));
const allTables=source.chapters.flatMap(ch=>ch.patterns.flatMap(p=>p.blocks.filter(b=>b.type==='table')));assert.ok(allTables.length>=8);
assert.ok(source.chapters[13].patterns.some(p=>p.blocks.some(b=>b.type==='table'&&b.rows.some(r=>r.includes('かいます → かって')))));
console.log('PASS: simple PDF edition, structured tables, completion feature removed, continuous lazy book pages and stable image dimensions');

assert.ok(!ui.includes('Cara membaca pola</summary>'));assert.ok(ui.includes('summaryIntroScreen'));assert.ok(ui.includes('summaryKanji?f.example.jp:f.example.kana'));
assert.ok(!JSON.stringify(source.chapters[1].check).includes('こちら'));
assert.equal(source.chapters[1].check.answer,1);assert.ok(source.chapters[1].check.options[1].includes('それ'));
assert.equal(source.chapters[1].patterns[4].blocks.find(b=>b.type==='list').items.length,3);
for(const ch of source.chapters.slice(0,2))for(const p of ch.patterns){assert.ok(p.example.tokens.length);for(const t of p.example.tokens){assert.ok(t.meaning);assert.ok(!/[一-龯]/.test(t.kana));}}
console.log('PASS: 230 meaningful subtitles, three complete uses of の, 12 explicit token examples, kana-first default and 50 within-chapter situation checks');

const diagrams=vm.runInContext('summaryIllustrations',c);assert.equal(new Set(Object.values(diagrams).map(v=>v.file)).size,12);
for(const [key,value] of Object.entries(diagrams)){const [chapter,index]=key.split(':').map(Number);assert.ok(source.chapters[chapter-1].patterns[index]);assert.ok(fs.existsSync('dist/assets/grammar/'+value.file));assert.ok(value.caption);}
assert.equal(diagrams['29:0'],undefined);assert.equal(Object.values(diagrams).filter(v=>v.file==='bab29-30-teiru-vs-tearu.svg').length,1);assert.ok(diagrams['30:1']);assert.equal(diagrams['7:2'].file,diagrams['24:0'].file);
const positions=fs.readFileSync('dist/assets/grammar/bab10-posisi.svg','utf8');for(const label of ['うえ','した','なか','そと','まえ','うしろ','みぎ','ひだり','となり','ちかく','あいだ'])assert.ok(positions.includes(label));
const windows=fs.readFileSync('dist/assets/grammar/bab29-30-teiru-vs-tearu.svg','utf8');assert.ok(windows.includes('あいています')&&windows.includes('あけて あります'));assert.ok(!windows.includes('ガラスが'));
assert.ok(source.chapters[29].patterns[1].text.includes('われる (pecah) ↔ わる (memecahkan)'));assert.ok(!fs.readFileSync('dist/rangkuman-ui.js','utf8').includes('われる (pecah) dan あける'));
console.log('PASS: 12 illustration assets, valid chapter/card placements, Bab 7/24 shared diagram, 11 positions and one corrected window comparison in Bedakan only');
