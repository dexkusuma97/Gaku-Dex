'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const books=JSON.parse(fs.readFileSync('data/rangkuman-books.json'));
const expected={5:{pages:424,starts:[26,46,65,84,99,115,132,145,166,187,207,228,251,274,296,321,340,361],drive:'1tNI9eLTlek_23keb6PuJ5asjeRqigl21'},6:{pages:517,starts:[20,40,62,89,116,146,178,204,226,256,286,311,330,355,382,402,436,451],drive:'1SNfRAilsNREpXSE0Hd6IRUyhVTkRb7vK'}};
let total=0;
for(const id of [5,6]){
 const b=books.find(b=>b.id===id),s=JSON.parse(fs.readFileSync('data/irodori-dasar-'+(id-4)+'-source.json'));
 assert.equal(b.pages,expected[id].pages);assert.equal(b.sourceName,'The Japan Foundation');assert.equal(b.sourceUrl,'https://www.jpf.go.jp/');assert.ok(b.pdfUrl.includes(expected[id].drive));assert.equal(b.pdfLabel,'PDF gabungan');assert.ok(b.title.includes('(A2)'));assert.ok(!b.title.includes('N4'));assert.deepEqual(b.chapters.map(c=>c.number),Array.from({length:18},(_,i)=>i+1));assert.deepEqual(b.chapters.map(c=>c.page),expected[id].starts);assert.deepEqual(b.chapters,s.chapters);assert.equal(b.pageSizes.length,b.pages);assert.equal(s.pages,b.pages);assert.equal(Object.keys(s.pageSha256).length,b.pages);
 let bytes=0;
 for(let n=1;n<=b.pages;n++){
  const name=String(n).padStart(3,'0')+'.webp',file='dist/'+b.assetPath+name,data=fs.readFileSync(file);assert.equal(data.subarray(0,4).toString(),'RIFF');assert.equal(data.subarray(8,12).toString(),'WEBP');assert.equal(crypto.createHash('sha256').update(data).digest('hex'),s.pageSha256[name]);assert.ok(b.pageSizes[n-1][0]>=2200&&b.pageSizes[n-1][1]>0);bytes+=data.length;
 }
 assert.equal(bytes,b.bytes);assert.equal(bytes,s.renderedBytes);total+=b.pages;
}
assert.equal(total,941);
const store=new Map(),els=new Map();let pushed=0;
const element=id=>{if(!els.has(id))els.set(id,{offsetTop:Number(id.split('-').at(-1))*10||0,focus(){this.focused=true},scrollTo({top}){this.scrollTop=top},style:{}});return els.get(id)};
const c={page:'Rangkuman',esc:s=>String(s),prefs:{level:'N5'},localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},history:{replaceState(){}},appRoute:()=>({}),pushRoute(){pushed++},updateScreen(){},render(){},document:{addEventListener(){},getElementById:element}};
vm.createContext(c);for(const file of ['rangkuman-data.js','rangkuman-ui.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
assert.ok(c.summaryBooksLibrary().includes('Irodori Dasar 1 (A2)'));assert.ok(c.summaryBooksLibrary().includes('Irodori Dasar 2 (A2)'));assert.ok(c.summaryBooksLibrary().includes('Minna no Nihongo I'));assert.ok(c.summaryBooksLibrary().includes('Marugoto Starter'));
c.openSummaryBook(5);assert.equal(c.getRangkumanRoute().book,5);const html=c.summaryBookReader();assert.equal((html.match(/class="summary-book-sheet"/g)||[]).length,424);assert.equal((html.match(/onclick="summaryBookChapter\(/g)||[]).length,18);assert.ok(html.includes('The Japan Foundation'));assert.ok(html.includes('PDF gabungan'));assert.ok(html.includes('loading="lazy"'));c.summaryBookChapter(1);assert.equal(c.getRangkumanRoute().bookPage,26);assert.equal(element('summary-book-chapters').open,false);assert.equal(element('summary-book-scroll').scrollTop,260);assert.ok(element('summary-book-scroll').focused);c.summaryBookChapter(18);assert.equal(c.getRangkumanRoute().bookPage,361);c.summaryBookChapter(99);assert.equal(c.getRangkumanRoute().bookPage,361);
c.openSummaryBook(6);c.summaryBookChapter(16);assert.equal(c.getRangkumanRoute().bookPage,402);c.openSummaryBook(5);assert.equal(c.getRangkumanRoute().bookPage,361);assert.deepEqual(JSON.parse(store.get('gaku-minna-pages')),{'5':361,'6':402});c.restoreRangkumanRoute({view:'reader',section:'books',book:6,bookPage:9999});assert.equal(c.getRangkumanRoute().bookPage,517);assert.equal((c.summaryBookReader().match(/class="summary-book-sheet"/g)||[]).length,517);c.restoreRangkumanRoute({view:'reader',book:1});assert.ok(!c.summaryBookReader().includes('id="summary-book-chapters"'));assert.equal(pushed,3);
console.log('PASS: 941 Irodori page hashes/dimensions, two sources, 36 chapter anchors, preserved books, lazy reader, shortcuts and independent saved positions');
