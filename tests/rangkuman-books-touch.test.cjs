const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const books=JSON.parse(fs.readFileSync('data/rangkuman-books.json'));
const source=JSON.parse(fs.readFileSync('data/marugoto-starter-wordbook-source.json'));
assert.equal(source.pages,82);assert.equal(source.publisherUrl,'https://www.jpf.go.jp/');
assert.equal(books[2].assetPath,books[3].assetPath);
for(const book of books.slice(2)){
 assert.equal(book.pdfUrl,source.url);assert.equal(book.sourceName,'Japan Foundation');
 assert.ok(book.description.includes('Katsudo dan Rikai'));
 assert.equal(book.pageSizes.length,82);
 for(let n=1;n<=82;n++){
  const name=String(n).padStart(3,'0')+'.webp',bytes=fs.readFileSync('dist/'+book.assetPath+name);
  assert.ok(bytes.length>1000);assert.equal(bytes.subarray(0,4).toString(),'RIFF');
  assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),source.pageSha256[name]);
 }
}
const handlers={},globalHandlers={},strip={style:{}},label={},number={};let histories=0;
const canvas={dataset:{},scrollLeft:0,scrollTop:100,getBoundingClientRect:()=>({left:0,top:0}),contains:()=>false,
 addEventListener(name,fn,options){assert.equal(options.passive,false);assert.ok(!handlers[name]);handlers[name]=fn},
 scrollTo({top}){this.scrollTop=top}};
const c={page:'Rangkuman',esc:s=>String(s),localStorage:{getItem:()=>null,setItem(){}},history:{replaceState(){histories++}},appRoute:()=>({}),render(){},
 document:{addEventListener(name,fn,options){assert.equal(options.passive,false);globalHandlers[name]=fn},elementFromPoint:()=>null,
 getElementById:id=>id==='summary-book-scroll'?canvas:id==='summary-book-strip'?strip:id==='summary-zoom-value'?label:id==='summary-book-number'?number:id.startsWith('summary-book-sheet-')?{offsetTop:0}:null}};
vm.createContext(c);for(const file of ['rangkuman-data.js','rangkuman-ui.js'])vm.runInContext(fs.readFileSync('dist/'+file,'utf8'),c);
c.restoreRangkumanRoute({view:'reader',section:'books',book:3});
assert.ok(c.summaryBookReader().includes('Sumber: <a href="https://www.jpf.go.jp/"'));
assert.equal((c.summaryBookReader().match(/class="summary-book-sheet"/g)||[]).length,82);
assert.ok(c.summaryBooksLibrary().includes('Marugoto Starter (A1) Katsudo'));assert.ok(c.summaryBooksLibrary().includes('Marugoto Starter (A1) Rikai'));
c.summaryInitBookPinch(canvas);c.summaryInitBookPinch(canvas);
function event(points){return {touches:points.map(([x,y])=>({clientX:x,clientY:y})),preventDefault(){this.prevented=true}}}
const single=event([[50,100]]);handlers.touchstart(single);handlers.touchmove(single);assert.ok(!single.prevented);assert.equal(c.getRangkumanRoute().zoom,1);
const start=event([[50,100],[150,100]]);handlers.touchstart(start);assert.ok(start.prevented);
const move=event([[0,100],[200,100]]);handlers.touchmove(move);assert.ok(move.prevented);assert.equal(c.getRangkumanRoute().zoom,2);assert.equal(strip.style.width,'200%');assert.equal(label.textContent,'200%');assert.equal(canvas.scrollTop,300);
handlers.touchmove(event([[-500,100],[700,100]]));assert.equal(c.getRangkumanRoute().zoom,3);
handlers.touchmove(event([[99,100],[101,100]]));assert.equal(c.getRangkumanRoute().zoom,1);
const end=event([]);handlers.touchend(end);assert.ok(end.prevented);assert.equal(histories,1);
const outside=event([[0,0],[100,0]]);globalHandlers.touchmove(outside);assert.ok(outside.prevented);assert.equal(c.getRangkumanRoute().zoom,1);
const one=event([[0,0]]);globalHandlers.touchmove(one);assert.ok(!one.prevented);
const cancel=event([[50,100],[150,100]]);handlers.touchstart(cancel);handlers.touchcancel(event([]));const afterCancel=event([[0,100],[200,100]]);handlers.touchmove(afterCancel);assert.ok(!afterCancel.prevented);
const wheel={ctrlKey:false,deltaY:-30,clientX:100,clientY:100,preventDefault(){this.prevented=true}};handlers.wheel(wheel);assert.ok(!wheel.prevented);
wheel.ctrlKey=true;handlers.wheel(wheel);assert.ok(wheel.prevented);assert.ok(c.getRangkumanRoute().zoom>1);
c.summaryBookZoom(99);assert.equal(c.getRangkumanRoute().zoom,3);c.summaryBookZoom(-99);assert.equal(c.getRangkumanRoute().zoom,1);
c.restoreRangkumanRoute({book:999,view:'reader'});assert.equal(c.getRangkumanRoute().book,1);
const html=fs.readFileSync('dist/index.html','utf8');assert.ok(html.includes('maximum-scale=1, user-scalable=no'));
assert.ok(fs.readFileSync('dist/rangkuman.css','utf8').includes('html,body{touch-action:pan-x pan-y}'));
console.log('PASS: 82 intact shared Marugoto pages, attribution, valid book IDs, scoped pinch/wheel zoom limits and anchoring, single-finger scroll, cancellation, duplicate init, and app pinch prevention');
