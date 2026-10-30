/* Replace learning-menu native selects with compact themed dialogs. */
let activeLearningPicker=null;
const learningPickers=new Map();
function enhanceLearningPickers(){
 learningPickers.clear();
 document.querySelectorAll('.kanji-selects select,.bunpo-filters select,.kotoba-filters select,.kotoba-page-jump select').forEach((select,index)=>{
  if(select.nextElementSibling?.classList.contains('picker-trigger'))select.nextElementSibling.remove();
  const label=select.getAttribute('aria-label')||'Pilih kelompok';
  const id='learning-choice-'+index;
  const options=[...select.options].map(o=>{const m=o.textContent.match(/^(.*?) \((\d+)\)$/);return {value:o.value,label:m?m[1]:o.textContent,count:m?Number(m[2]):null}});
  const selected=options.find(o=>o.value===select.value)||options[0];
  const trigger=document.createElement('button');trigger.type='button';trigger.id=id;trigger.className='picker-trigger';
  trigger.setAttribute('aria-label',label);trigger.setAttribute('aria-haspopup','dialog');
  trigger.innerHTML='<span>'+esc(selected.label)+'</span><i aria-hidden="true">⌄</i>';
  const config={id,label,options,value:select.value,select,trigger,tiles:label==='Kategori Kotoba'};
  learningPickers.set(id,config);trigger.addEventListener('click',()=>openLearningPicker(id));
  select.classList.add('learning-native-select');select.setAttribute('aria-hidden','true');select.tabIndex=-1;select.after(trigger);
 });
}
function learningPickerOptions(query=''){
 const config=activeLearningPicker?.config;if(!config)return '';
 const q=query.normalize('NFKC').toLocaleLowerCase('id-ID').trim();
 const options=config.options.map((o,index)=>({...o,index})).filter(o=>o.label.toLocaleLowerCase('id-ID').includes(q));
 if(!options.length)return '<p class="picker-empty">Belum ketemu. Coba kata yang lebih singkat, ya.</p>';
 return options.map(o=>{
  const chosen=o.value===config.value,icon=config.tiles?['全','名','動','形','副','数','話','✎'][o.index]:'';
  return '<button type="button" class="picker-option '+(chosen?'chosen':'')+'" aria-pressed="'+chosen+'" onclick="chooseLearningPicker('+o.index+')">'+(icon?'<span class="picker-symbol" aria-hidden="true">'+icon+'</span>':'')+'<span class="picker-option-label">'+esc(o.label)+'</span>'+(o.count!==null?'<small>'+o.count+'</small>':'')+'<span class="picker-check" aria-hidden="true">'+(chosen?'✓':'›')+'</span></button>';
 }).join('');
}
function openLearningPicker(id){
 if(activeLearningPicker)return;const config=learningPickers.get(id);if(!config)return;
 activeLearningPicker={config,focus:document.activeElement,overflow:document.body.style.overflow,route:history.state,closing:false,choice:null};
 history.pushState({...history.state,learningPicker:true},'');
 document.body.style.overflow='hidden';
 document.querySelectorAll('.workspace,aside,#bottomnav').forEach(el=>el.setAttribute('inert',''));
 const overlay=document.getElementById('overlay');
 overlay.innerHTML='<div class="modal-wrap picker-wrap" onclick="if(event.target===this)closeLearningPicker()"><section class="modal learning-picker" role="dialog" aria-modal="true" aria-labelledby="picker-title"><header><span class="picker-flower" aria-hidden="true">✿</span><div><small>PILIH LANGKAHMU</small><h2 id="picker-title">'+esc(config.label)+'</h2></div><button type="button" class="picker-close" aria-label="Tutup pilihan" onclick="closeLearningPicker()">×</button></header>'+(config.options.length>8?'<label class="picker-search"><span aria-hidden="true">⌕</span><input type="search" aria-label="Cari pilihan" placeholder="Cari pilihan…" maxlength="80"></label>':'')+'<div class="picker-options '+(config.tiles?'picker-tiles':'')+'" id="picker-options" role="group" aria-label="Pilihan '+esc(config.label)+'">'+learningPickerOptions()+'</div><p class="picker-footnote">Pilih satu, lalu lanjut belajar 🌱</p></section></div>';
 overlay.querySelector('input')?.addEventListener('input',e=>{document.getElementById('picker-options').innerHTML=learningPickerOptions(e.target.value)});
 (overlay.querySelector('.picker-option.chosen')||overlay.querySelector('.picker-option')||overlay.querySelector('.picker-close'))?.focus({preventScroll:true});
}
function chooseLearningPicker(index){
 if(!activeLearningPicker)return;const option=activeLearningPicker.config.options[index];if(option)closeLearningPicker(option.value);
}
function closeLearningPicker(choice=null){
 if(!activeLearningPicker||activeLearningPicker.closing)return;
 activeLearningPicker.choice=choice;activeLearningPicker.closing=true;history.back();
}
function removeLearningPicker(){
 const active=activeLearningPicker;if(!active)return null;activeLearningPicker=null;
 document.getElementById('overlay').innerHTML='';document.body.style.overflow=active.overflow;
 document.querySelectorAll('.workspace,aside,#bottomnav').forEach(el=>el.removeAttribute('inert'));
 active.focus?.focus({preventScroll:true});return active;
}
window.addEventListener('popstate',event=>{
 if(!activeLearningPicker)return;
 const sameRoute=event.state?.gaku&&event.state.page===activeLearningPicker.route?.page&&event.state.depth===activeLearningPicker.route?.depth;
 const active=removeLearningPicker();
 if(sameRoute){
  event.stopImmediatePropagation();
  if(active.choice!==null){active.config.select.value=active.choice;active.config.select.dispatchEvent(new Event('change',{bubbles:true}));document.getElementById(active.config.id)?.focus({preventScroll:true})}
 }
},true);
