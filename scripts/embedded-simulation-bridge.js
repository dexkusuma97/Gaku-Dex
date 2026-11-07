let initialized=false,pendingExit=null,wasActive=false;
const browserHistory=window.history;
const embeddedHistory={
 get state(){return browserHistory.state?.simulation||null},
 pushState(s){window.GakuSimulationHost.writeRoute({...s,level:activeLevel},false)},
 replaceState(s){window.GakuSimulationHost.writeRoute({...s,level:activeLevel},true)},
 go(delta){browserHistory.go(delta)}
};
function makeNavigation(){return new window.GakuSimulationNavigation({history:embeddedHistory,onNavigate:applyNavigation,onLeave:()=>{stopAudio();state.view='menu';state.run=null;state.accepted=false;persist();window.GakuSimulationHost.returnHome()},isExamActive:()=>window.GakuSimulationHost.active()&&state.view==='exam'&&state.run&&!state.run.finishedAt,onExamBack:()=>{if($('#simulation-dialog').open)closeDialog();else requestExit()},canEnter:view=>view==='exam'?!!state.run&&!state.run.finishedAt:view==='result'?!!state.run?.finishedAt:true})}
function enter(){persist();configureLevel();state={view:'menu',exam:'jft',pack:1,accepted:false,run:null};pendingExit=null;navigation=makeNavigation();initialized=true;window.GakuSimulationHost.clearRoute();navigation.init('menu')}
function restore(route){if(!route)return;configureLevel();state=read();if(route.level&&route.level!==activeLevel){state={view:'menu',exam:'jft',pack:1,accepted:false,run:null};navigation=makeNavigation();initialized=true;navigation.init('menu');return;}if(!initialized){navigation=makeNavigation();initialized=true}const view=route.view;if(view==='exam'&&(!state.run||state.run.finishedAt)||view==='result'&&!state.run?.finishedAt){navigation.init('menu');return}state.view=view;navigation.init(view);tick()}
function getRoute(){return initialized?{...navigation.entry(state.view),level:activeLevel}:null}
function handlePop(route){if(!initialized&&route?.page!=='Simulasi')return false;if(!window.GakuSimulationHost.active()&&route?.page!=='Simulasi')return false;if(!initialized){restore(route.simulation);return true}if(route?.page==='Simulasi'){window.GakuSimulationHost.activate();if(route.simulation?.level&&route.simulation.level!==selectedLevel()){enter();return true;}}navigation.handlePop({state:route?.simulation});return true}
function guard(action){if(!window.GakuSimulationHost.active()||state.view!=='exam'||!state.run||state.run.finishedAt)return false;if(pendingExit)return true;pendingExit=action;openDialog('Akhiri simulasi?','<p>Waktu tetap berjalan. Jika keluar, sesi diakhiri dan hasilnya disimpan di Riwayat perangkat.</p>','<button onclick="GakuSimulation.cancelExit()">Tetap mengerjakan</button><button class="primary" onclick="GakuSimulation.confirmExit()">Akhiri & keluar</button>');return true}
function cancelExit(){pendingExit=null;closeDialog()}
function confirmExit(){const action=pendingExit;pendingExit=null;closeDialog();finishExam();navigation.reset('menu',()=>action?.())}
function syncLifecycle(){if(clock)clearInterval(clock);clock=null;const active=window.GakuSimulationHost.active();if(active&&state.view==='exam')clock=setInterval(tick,500);if(wasActive&&!active)stopAudio();wasActive=active}
function qualifyHandlers(html){return html.replace(/\bon(click|change)="([^"]*)"/g,(_,event,handler)=>{handler=handler.replace(/\bstate\./g,'GakuSimulation.state.');for(const name of EXPORTED_NAMES)handler=handler.replace(new RegExp('(?<![.\\w])'+name+'\\(','g'),'GakuSimulation.'+name+'(');return 'on'+event+'="'+handler+'"'})}
function syncLevel(){if(selectedLevel()===activeLevel)return;if(state.view==='exam'&&state.run&&!state.run.finishedAt)return;persist();configureLevel();state={view:'menu',exam:'jft',pack:1,accepted:false,run:null};pendingExit=null;if(initialized){navigation=makeNavigation();window.GakuSimulationHost.clearRoute();navigation.init('menu');}else persist();}
let premiumPackPending=null,premiumPackError='',premiumPackEpoch=-1;
function screen(){
 syncLevel();
 if(state.pack>2&&['rules','exam','result'].includes(state.view)){
  if(!window.GakuPremium?.has('simulasi'))return window.GakuPremium?.wall('simulasi')||'<p>Login untuk membuka paket ini.</p>';
  const pack=getPack();
  if(pack?.remote){
   const mine=window.GakuPremium.epoch;
   if(premiumPackEpoch!==mine){premiumPackEpoch=mine;premiumPackPending=null;premiumPackError='';}
   if(!premiumPackPending&&!premiumPackError){premiumPackPending=window.GakuPremium.simulation(pack).catch(()=>{if(mine===window.GakuPremium.epoch)premiumPackError='Paket belum bisa dibuka. Periksa koneksi lalu kembali ke daftar paket.';}).finally(()=>{if(mine===premiumPackEpoch)premiumPackPending=null;if(mine===window.GakuPremium.epoch)render();});}
   return '<section class="account-card" role="status"><h2>Membuka paket latihan</h2><p>'+esc(premiumPackError||'Menyiapkan soal pilihanmu…')+'</p><button onclick="GakuSimulation.go(\'packages\')">Kembali ke daftar paket</button></section>';
  }
 }else premiumPackError='';
 const html=state.view==='packages'?packages():state.view==='rules'?rules():state.view==='exam'?examScreen():state.view==='result'?resultScreen():menu();
 const body=qualifyHandlers(html).replace(/<aside\b/g,'<section').replace(/<\/aside>/g,'</section>');
 return '<div class="simulation-module '+(state.view==='exam'?'in-exam':'')+'" data-exam="'+state.exam+'">'+body+'</div>';
}

const EXPORTED_NAMES='__EXPORTED_FUNCTIONS__'.split(',');
window.GakuSimulation={__EXPORTED_FUNCTIONS__,screen,syncLevel,enter,restore,getRoute,handlePop,guard,cancelExit,confirmExit,syncLifecycle,get state(){return state}};
window.addEventListener('pagehide',()=>{stopAudio();persist()});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&window.GakuSimulationHost.active())tick()});
