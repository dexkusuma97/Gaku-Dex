const vm=require('node:vm');
const fs=require('node:fs');
const assert=require('node:assert/strict');
function app(initial=null){
 const entries=[initial];let position=0,onPop;
 const context={page:'Beranda',category:'Seion',kanaView:'groups',selectedKana:null,KANA_GROUPS:{Seion:{},Yoon:{}},stopAudio(){},closeModal(){},updateScreen(){},document:{querySelector(){return null}},sessionStorage:{removeItem(){}},window:{location:{assign(url){context.lastNavigation=url}},addEventListener(event,fn){if(event==='popstate')onPop=fn}}};
 context.history={get state(){return entries[position]},pushState(state){entries.splice(position+1);entries.push(state);position++},replaceState(state){entries[position]=state},go(delta){const next=position+delta;assert.ok(next>=0&&next<entries.length,'navigation remains inside seeded app history');position=next;onPop({state:entries[position]})},back(){this.go(-1)}};
 vm.createContext(context);vm.runInContext(fs.readFileSync('dist/navigation.js','utf8'),context);context.initAppNavigation();
 return {context,entries,get position(){return position}};
}
const {context:c,entries}=app();
for(const tab of ['Materi belajar','Quiz','Kaiwa'])c.switchTab(tab);
assert.equal(entries.length,2,'Tabs replace one shared root entry');
assert.equal(c.page,'Kaiwa');c.appBack();assert.equal(c.page,'Beranda','One Back from Kaiwa returns Home');
c.switchTab('Materi belajar');c.showPage('Hiragana');c.kanaView='grid';c.category='Yoon';c.pushRoute();
assert.equal(c.history.state.depth,3);c.appBack();assert.equal(c.page,'Hiragana');assert.equal(c.kanaView,'groups','Back preserves group layer');
c.kanaView='grid';c.pushRoute();c.switchTab('Quiz');
assert.equal(c.page,'Quiz');assert.equal(entries.length,2,'Switching from nested content discards old branch');
c.appBack();assert.equal(c.page,'Beranda');
c.switchTab('Kaiwa');c.switchTab('Kaiwa');assert.equal(entries.length,2,'Repeated tab taps do not stack');
c.showPage('Hiragana');c.kanaView='grid';c.pushRoute();const size=entries.length;c.initAppNavigation();assert.equal(entries.length,size,'Reload keeps existing history depth');c.appBack();assert.equal(c.kanaView,'groups');
const migrated=app({gaku:true,page:'Katakana',kanaView:'grid',category:'Yoon'});assert.equal(migrated.entries.length,3,'Legacy history rebuilt around Home');migrated.context.switchTab('Kaiwa');migrated.context.appBack();assert.equal(migrated.context.page,'Beranda');
console.log('PASS: tab Back to Home, nested Back, tab switch from deep pages, reload, repeated taps, legacy migration');

for(const depth of [0,1,3]){const {context:s}=app();if(depth>0)s.switchTab('Quiz & simulasi');if(depth>1){s.showPage('Hiragana');s.kanaView='grid';s.pushRoute()}s.showPage('Simulasi');assert.equal(s.lastNavigation,undefined);assert.equal(s.history.state.page,'Simulasi');assert.equal(s.history.state.depth,1)}console.log('PASS: native simulation entry stays in-document and collapses old tab/detail branches');
