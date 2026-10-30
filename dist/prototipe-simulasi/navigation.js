/* Canonical browser history: menu > packages > rules > exam/result. */
(function(root){
'use strict';
const DEPTH={menu:0,packages:1,rules:2,exam:3,result:3},SCOPE='gaku-simulation-nav-v1';
class SimulationNavigation{
 constructor({history,onNavigate,onLeave,isExamActive,onExamBack,canEnter=()=>true}){Object.assign(this,{history,onNavigate,onLeave,isExamActive,onExamBack,canEnter});this.depth=0;this.view='menu';this.epoch=this.newEpoch();this.pending=null;}
 newEpoch(){return Date.now().toString(36)+'-'+Math.random().toString(36).slice(2);}
 valid(s){return s?.scope===SCOPE&&typeof s.epoch==='string'&&Object.hasOwn(DEPTH,s.view)&&s.depth===DEPTH[s.view];}
 entry(view){return {scope:SCOPE,epoch:this.epoch,depth:DEPTH[view],view};}
 write(view,replace=false){this.history[replace?'replaceState':'pushState'](this.entry(view),'');this.depth=DEPTH[view];this.view=view;}
 commit(view){this.view=view;this.onNavigate(view);}
 build(view){const path=['menu','packages','rules',view];for(let d=this.depth+1;d<=DEPTH[view];d++)this.write(path[d]);this.commit(view);}
 init(view){const s=this.history.state;if(this.valid(s)){this.epoch=s.epoch;this.depth=s.depth;this.view=s.view;if(s.view!==view){this.reset(view);return;}this.write(view,true);this.commit(view);return;}this.depth=0;this.write('menu',true);this.build(view);}
 completeReset(){const action=this.pending;this.pending=null;this.epoch=this.newEpoch();this.depth=0;this.write('menu',true);this.build(action.view);action.after?.();}
 reset(view,after){if(this.pending){this.pending={view,after};return;}this.pending={view,after};if(this.depth>0)this.history.go(-this.depth);else this.completeReset();}
 go(view,replace=false){if(!Object.hasOwn(DEPTH,view))return;if(this.pending){this.pending.view=view;return;}if(view===this.view){this.write(view,true);this.commit(view);return;}if(this.view==='result'||DEPTH[view]<this.depth){this.reset(view);return;}if(replace&&DEPTH[view]===this.depth){this.write(view,true);this.commit(view);return;}if(DEPTH[view]===this.depth){this.write(view,true);this.commit(view);return;}this.build(view);}
 leave(){this.reset('menu',()=>this.onLeave());}
 handlePop(event){const target=event.state,owned=this.valid(target),previous=this.view,active=this.isExamActive();
  if(owned)this.depth=target.depth;
  if(this.pending){if(owned&&target.depth===0)this.completeReset();else if(owned)this.history.go(-target.depth);else{this.pending=null;this.onLeave();}return;}
  if(active){if(!owned||target.epoch!==this.epoch){this.depth=0;this.epoch=this.newEpoch();this.write('menu',true);}this.build('exam');this.onExamBack();return;}
  if(previous==='result'){if(owned)this.reset('menu');else this.onLeave();return;}
  if(!owned){this.onLeave();return;}
  if(target.epoch!==this.epoch||!this.canEnter(target.view)){if(previous==='menu')this.onLeave();else this.reset('menu');return;}
  this.commit(target.view);
 }
}
root.GakuSimulationNavigation=SimulationNavigation;
if(typeof module==='object'&&module.exports)module.exports=SimulationNavigation;
})(typeof window==='object'?window:globalThis);
