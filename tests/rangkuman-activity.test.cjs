const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const source=JSON.parse(fs.readFileSync('data/rangkuman-minna.json'));
const blocks={},storage=new Map(),spoken=[];let focused=null;
const c={page:'Rangkuman',prefs:{level:'N5'},esc:s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;'),localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},history:{replaceState(){}},appRoute:()=>({}),pushRoute(){},updateScreen(){},render(){},speak:t=>spoken.push(t),document:{getElementById:id=>blocks[id]||(blocks[id]={innerHTML:'',focus(){focused=id}})}};
vm.createContext(c);for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','bunpo-data.js','bunpo-search.js','rangkuman-data.js','rangkuman-ui.js','rangkuman-activity.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);
const run=s=>vm.runInContext(s,c),plain=s=>JSON.parse(run('JSON.stringify('+s+')'));
for(const ch of source.chapters)run('rangkumanCache.set('+ch.id+','+JSON.stringify(ch)+')');
let arranged=0,recalled=0;
for(const ch of source.chapters){
 assert.equal(ch.interactive.version,1);c.restoreRangkumanRoute({view:'chapter',chapter:ch.id});
 for(const [index,p] of ch.patterns.entries()){
  assert.ok(p.learning.gist&&p.learning.recipe&&p.learning.note);assert.ok(p.example.tokens.length);
  assert.equal(p.example.jp,p.example.tokens.map(t=>t.jp).join('')+(p.example.tokens.at(-1).jp.endsWith('？')?'':'。'));
  for(const t of p.example.tokens)assert.ok(t.meaning&&!/[一-龯]/.test(t.kana));
  c.summaryChoosePattern(index);let html=c.summaryGrammarHTML(ch);
  assert.ok(html.includes(c.esc(p.learning.gist)));assert.ok(html.includes(c.esc(p.learning.recipe)));
  assert.ok(!html.includes('summary-note summary-teaching-card'),'one activity rather than a wall of notes');
  c.summaryChooseStage(1);c.summaryExploreToken(0);assert.equal(plain('summaryActivityContext().attempt.token'),0);
  assert.ok(blocks['summary-activity-host'].innerHTML.includes(c.esc(p.example.tokens[0].meaning)));
  const explored=blocks['summary-activity-host'].innerHTML;assert.ok(explored.includes('</p><p class="summary-example-meaning">'+c.esc(p.example.meaning)+'</p><details'));assert.ok(explored.indexOf('summary-romaji')<explored.indexOf('summary-example-meaning'));
  c.summaryActivitySpeak(0);assert.equal(spoken.at(-1),p.example.tokens[0].kana);
  c.summaryChooseStage(2);c.summaryResetActivity();
  if(p.learning.practice==='arrange'){
   arranged++;c.summaryCheckOrder();assert.equal(plain('summaryActivityContext().attempt.checked'),false);
   c.summaryChoosePiece(0);c.summaryChoosePiece(0);assert.deepEqual(plain('summaryActivityContext().attempt.order'),[0]);
   c.summaryChoosePiece(-1);c.summaryChoosePiece(999);c.summaryChoosePiece('1');assert.deepEqual(plain('summaryActivityContext().attempt.order'),[0]);
   c.summaryResetActivity();for(let i=p.example.tokens.length-1;i>=0;i--)c.summaryChoosePiece(i);
   c.summaryCheckOrder();assert.ok(blocks['summary-activity-host'].innerHTML.includes('is-retry'));
   c.summaryRemovePiece(0);assert.equal(plain('summaryActivityContext().attempt.checked'),false);
   c.summaryResetActivity();for(let i=0;i<p.example.tokens.length;i++)c.summaryChoosePiece(i);c.summaryCheckOrder();
   assert.ok(blocks['summary-activity-host'].innerHTML.includes('is-right'));assert.equal(focused,'summary-activity-feedback');
   assert.ok(run('summaryOrderMatches(summaryActivityContext().pattern,summaryActivityContext().attempt)'));
   // Repeated identical words are interchangeable, regardless of tile identity.
   const kana=p.example.tokens.map(t=>t.kana),a=kana.findIndex((t,i)=>kana.indexOf(t)!==i);
   if(a>=0){const b=kana.indexOf(kana[a]);run('{const swapOrder=summaryActivityContext().attempt.order;[swapOrder['+a+'],swapOrder['+b+']]=[swapOrder['+b+'],swapOrder['+a+']]}');assert.ok(run('summaryOrderMatches(summaryActivityContext().pattern,summaryActivityContext().attempt)'))}
  }else{recalled++;c.summaryRevealActivity();assert.ok(blocks['summary-activity-host'].innerHTML.includes(c.esc(p.example.kana)));assert.equal(plain('summaryActivityContext().attempt.revealed'),true)}
  const route=c.getRangkumanRoute();c.resetRangkumanRoute();c.restoreRangkumanRoute(route);assert.equal(c.getRangkumanRoute().studyPattern,index);assert.equal(c.getRangkumanRoute().studyStage,2);
 }
 const chapterHTML=c.summaryActivityHTML(ch);assert.ok(!chapterHTML.includes('summary-chapter-challenge'));assert.ok(!chapterHTML.includes('Coba satu situasi'));assert.ok(!chapterHTML.includes('summary-check'));assert.ok(chapterHTML.includes('summary-switch-section'));
}
assert.equal(arranged,216);assert.equal(recalled,14);
c.restoreRangkumanRoute({view:'chapter',chapter:50});assert.ok(c.summaryGrammarHTML(source.chapters[49]).includes('summary-activity-host'));
c.restoreRangkumanRoute({view:'chapter',chapter:1,studyPattern:999,studyStage:999});c.summaryGrammarHTML(source.chapters[0]);assert.equal(c.getRangkumanRoute().studyPattern,5);assert.equal(c.getRangkumanRoute().studyStage,2);
c.summaryChoosePattern(0);c.summaryChooseStage(1);c.summaryToggleKanji();assert.ok(c.summaryActivityBody(source.chapters[0]).includes('私'));
const doc=fs.readFileSync('dist/index.html','utf8');assert.ok(doc.includes('rangkuman-activity.js')&&doc.includes('rangkuman-activity.css'));
console.log('PASS: 50 interactive chapters / 230 explanations and token examples with visible translations, 216 arrangement and 14 recall activities, feedback/retry/removal/duplicate tiles, speech, route restore, keyboard focus, and final chapter access');
