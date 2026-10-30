const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
let onPop,changes=0,focused=0,removed=0;
const route={gaku:true,page:'Kotoba',depth:1};
const select={value:'all',dispatchEvent(e){assert.equal(e.type,'change');changes++}};
const overlay={innerHTML:''};
const c={esc:s=>String(s),Event:class{constructor(type){this.type=type}},history:{state:route,back(){onPop({state:route,stopImmediatePropagation(){this.stopped=true}})},pushState(s){this.state=s}},window:{addEventListener:(name,fn,capture)=>{assert.equal(capture,true);onPop=fn}},document:{body:{style:{overflow:''}},activeElement:{focus(){focused++}},querySelectorAll:()=>[{setAttribute(){},removeAttribute(){removed++}}],getElementById:id=>id==='overlay'?overlay:null}};
vm.createContext(c);vm.runInContext(fs.readFileSync('dist/learning-picker.js','utf8'),c);
function prepare(choice=null){vm.runInContext("activeLearningPicker={config:{select:mockSelect,id:'test'},focus:document.activeElement,overflow:'',route:history.state,closing:false,choice:null}",Object.assign(c,{mockSelect:select}));}
prepare();c.closeLearningPicker();assert.equal(changes,0);assert.equal(c.document.body.style.overflow,'');assert.equal(vm.runInContext('activeLearningPicker',c),null);
prepare();c.closeLearningPicker('noun');assert.equal(select.value,'noun');assert.equal(changes,1);
prepare();let stopped=false;onPop({state:route,stopImmediatePropagation(){stopped=true}});assert.equal(stopped,true);assert.equal(changes,1,'Hardware/browser Back cancels selection');
prepare();stopped=false;onPop({state:{gaku:true,page:'Beranda',depth:0},stopImmediatePropagation(){stopped=true}});assert.equal(stopped,false,'A larger navigation jump still reaches app router');assert.ok(focused>=4&&removed>=4);
vm.runInContext("activeLearningPicker={config:{value:'a',tiles:false,options:[{value:'a',label:'Keluarga & hubungan',count:30},{value:'b',label:'Dapur & alat makan',count:29}]}}",c);
assert.ok(c.learningPickerOptions('dapur').includes('Dapur'));assert.ok(!c.learningPickerOptions('dapur').includes('Keluarga'));assert.ok(c.learningPickerOptions('xyz987').includes('Belum ketemu'));assert.ok(c.learningPickerOptions().includes('aria-pressed="true"'));
console.log('PASS: picker choice, cancel, browser Back, larger navigation, focus/inert cleanup, search and selected option');
