/* Account access is kept in memory and issued by the payment server, outside study sync. */
(function(w){'use strict';
const ORIGIN='https://dex-gaku-payment.dexkusuma97.workers.dev';
const catalog={
 bunpo:{title:'Rangkuman Bunpo',scope:'Bab 11–50',price:'Rp20.000',url:'mxlgp3891mnw'},
 kotoba:{title:'Rangkuman Kotoba',scope:'Bab 11–50',price:'Rp15.000',url:'egqz9o02287x'},
 import_export:{title:'Import–Export',scope:'Impor dan ekspor data tambahan',price:'Rp10.000',url:'xxwqlmm6q60r'},
 simulasi:{title:'Simulasi JFT/JLPT',scope:'Paket 3–6',price:'Rp15.000',url:'yvnpx7gzmp4m'},
 full:{title:'Paket Lengkap',scope:'Semua empat paket premium',price:'Rp50.000',url:'xmr613d0ey4p'}
};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let user=null,epoch=0,packages=[],state='guest',loading=null,lastCheck=0,until=0,timer=null;
const assets=new Map(),pending=new Map(),simulationOriginals=new Map();
function has(code){return !!user&&state!=='guest'&&(packages.includes('full')||packages.includes(code));}
function chapterAllowed(n,section){return Number(n)<=10||has(section==='kotoba'?'kotoba':'bunpo');}
function simulationAllowed(n){return Number(n)<=2||has('simulasi');}
function changed(reason){api.onChange?.(reason);}
async function get(path,expected=epoch){
 const account=user;if(!account)throw Error('login_required');
 const token=await account.getIdToken();if(expected!==epoch)throw Error('account_changed');
 const controller=new AbortController(),timeout=setTimeout(()=>controller.abort(),15000);
 try{
  const response=await fetch(ORIGIN+path,{headers:{Authorization:'Bearer '+token},cache:'no-store',signal:controller.signal});
  if(expected!==epoch)throw Error('account_changed');
  const data=await response.json();if(!response.ok)throw Error(data.error||'service_unavailable');return data;
 }finally{clearTimeout(timeout);}
}
function clearPrivate(){
 assets.clear();pending.clear();
 for(const [pack,original] of simulationOriginals){pack.questions=original.questions;pack.remote=true;delete pack.loadedUid;}
 simulationOriginals.clear();api.onReset?.();
}
function authChanged(next,authState){
 if((next?.uid||null)===(user?.uid||null)){user=next||null;return;}
 epoch++;user=next||null;packages=[];loading=null;lastCheck=0;until=0;clearTimeout(timer);timer=null;
 state=user?'loading':'guest';clearPrivate();changed('account');if(user)refresh();
}
function refresh(){
 if(!user||loading)return loading||Promise.resolve(false);
 const mine=epoch,account=user;lastCheck=Date.now();
 const task=(async()=>{try{
  const data=await get('/v1/me',mine);if(mine!==epoch||data.uid!==account.uid)return false;
  if(!Array.isArray(data.packages)||data.packages.some(p=>!Object.hasOwn(catalog,p)))throw Error('invalid_response');
  const next=[...new Set(data.packages)].sort(),before=packages.join(',');
  const gain=next.some(p=>!packages.includes(p));packages=next;const was=state;state='ready';
  if(before!==next.join(',')){epoch++;loading=null;clearPrivate();changed('access');if(gain)w.GakuPremiumNotice?.('Akses premium telah diperbarui');}
  else if(was!==state)changed('status');return true;
 }catch{if(mine===epoch){state='error';changed('status');}return false;}
 finally{if(mine===epoch)loading=null;}})();loading=task;return task;
}
function productHTML(code){const p=catalog[code];return '<article class="premium-product"><h3>'+p.title+'</h3><p>'+p.scope+'</p><strong>'+p.price+'</strong><p>Sekali bayar, tanpa masa kedaluwarsa.</p>'+(has(code)?'<b>✓ Aktif di akun ini</b>':'<button class="google-button" onclick="GakuPremium.buy(\''+code+'\')">Beli paket</button>')+'</article>';}
function statusHTML(){return !user?'Login dengan Google untuk menghubungkan pembelian ke akun.':state==='loading'?'Memeriksa akses akun…':state==='error'?'Akses akun belum bisa diperiksa. Periksa koneksi; pemeriksaan akan dicoba lagi saat aplikasi dibuka.':packages.length?'Pembelianmu terhubung ke akun '+esc(user.email)+'.':'Akun ini menggunakan akses gratis.';}
function wall(code){return '<section class="account-card premium-wall" data-premium-wall="'+code+'"><span class="mini-tag">AKSES PREMIUM</span><h2>'+catalog[code].title+'</h2><p>'+catalog[code].scope+' tersedia melalui paket ini.</p><p role="status">'+statusHTML()+'</p>'+(!user?'<button class="google-button" onclick="GakuAuth.signIn()">Login dengan Google</button>':'')+productHTML(code)+(code!=='full'?productHTML('full'):'')+'<p class="hint">Gunakan email akun Google yang sama saat checkout. Akses diperiksa otomatis saat kembali ke aplikasi.</p></section>';}
function panel(){return '<section id="premium-account" class="account-card"><span class="mini-tag">PAKET BELAJAR</span><h2>Akses akunmu</h2><p role="status">'+statusHTML()+'</p><p>Gratis: Bunpo dan Kotoba bab 1–10, simulasi paket 1–2. Semua cerita tetap gratis.</p><div class="premium-products">'+Object.keys(catalog).map(productHTML).join('')+'</div></section>';}
function showWall(code){w.GakuPremiumDialog?.(wall(code));return false;}
function requireAccess(code){return has(code)||showWall(code);}
function buy(code){
 if(!Object.hasOwn(catalog,code))return;
 if(!user){w.GakuAuth?.signIn();return;}
 until=Date.now()+10*60000;
 w.open('https://lynk.id/kusumaadi/'+catalog[code].url+'/checkout','_blank','noopener,noreferrer');
}
function foreground(){
 if(document.hidden||!user)return;
 if(Date.now()-lastCheck>15000)refresh();
 clearTimeout(timer);timer=null;
 if(until>Date.now())timer=setTimeout(foreground,30000);
}
function asset(key,path){
 if(assets.has(key))return Promise.resolve(assets.get(key));if(pending.has(key))return pending.get(key);
 const mine=epoch;const promise=get(path,mine).then(data=>{if(mine!==epoch)throw Error('account_changed');assets.set(key,data);return data;}).finally(()=>{if(mine===epoch)pending.delete(key);});
 pending.set(key,promise);return promise;
}
function chapter(n){if(!has('bunpo')&&!has('kotoba'))return Promise.reject(Error('package_required'));return asset('chapter/'+n,'/v1/chapter/'+n);}
function simulation(pack){
 if(!has('simulasi'))return Promise.reject(Error('package_required'));
 const mine=epoch,uid=user.uid,key='simulation/'+pack.exam+'/'+pack.level+'/'+pack.number;
 return asset(key,'/v1/'+key).then(data=>{if(mine!==epoch)throw Error('account_changed');
  if(data.exam!==pack.exam||data.level!==pack.level||data.number!==pack.number||!Array.isArray(data.questions)||data.questions.length!==pack.questions.length)throw Error('invalid_content');
  if(!simulationOriginals.has(pack))simulationOriginals.set(pack,{questions:pack.questions});
  pack.questions=data.questions;pack.remote=false;pack.loadedUid=uid;return pack;
 });
}
const api={authChanged,refresh,has,chapterAllowed,simulationAllowed,wall,panel,showWall,require:requireAccess,buy,chapter,simulation,onChange:null,onReset:null,get epoch(){return epoch;},get state(){return state;},get uid(){return user?.uid||null;}};
w.GakuPremium=api;
w.addEventListener('focus',foreground);w.addEventListener('online',foreground);
document.addEventListener('visibilitychange',foreground);
})(window);
