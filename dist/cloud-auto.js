/* Account-bound automatic snapshots. Concurrent changes stop for explicit review. */
(function(w){'use strict';
const KEY='gaku-cloud-auto-v1';
let busy=false,status='',stopped=false,nextRead=0,nextTry=0,observed='',observedAt=0,started=false,otherTab=false;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const id=()=>w.GakuAuth?.user?.uid||null;
const serial=v=>JSON.stringify(Object.fromEntries(w.GakuCloud.KEYS.map(k=>[k,v[k]])));
function read(){try{const m=JSON.parse(w.localStorage.getItem(KEY)||'null');if(!m||m.version!==1||typeof m.uid!=='string'||!Number.isInteger(m.revision)||m.revision<1)return null;w.GakuCloud.validate(m.values);return m;}catch{return null;}}
function changed(text){if(status!==text){status=text;w.GakuAuth?.onChange?.();}}
function save(uid,revision,values){try{w.localStorage.setItem(KEY,JSON.stringify({version:1,uid,revision,values}));return true;}catch{try{w.localStorage.removeItem(KEY);}catch{}changed('Sinkronisasi otomatis berhenti: penyimpanan HP penuh. Cadangan akun tetap tersedia.');return false;}}
function accepted(uid,revision,values,enable=false){const m=read();if(!enable&&m?.uid!==uid)return;stopped=false;otherTab=false;nextRead=0;nextTry=0;observed=serial(values);observedAt=Date.now();if(save(uid,revision,values))changed('Sinkronisasi otomatis aktif.');}
function disable(){try{w.localStorage.removeItem(KEY);stopped=false;changed('Sinkronisasi otomatis dimatikan. Data belajar tetap tersimpan.');}catch{stopped=true;changed('Belum bisa mematikan penyimpanan otomatis. Periksa penyimpanan HP.');}}
function authChanged(uid,state){if(state!=='ready')return;const m=read();if(m&&m.uid!==uid){disable();changed('Akun berubah. Aktifkan ulang sinkronisasi untuk memilih data yang akan digunakan.');}}
function guard(uid){if(id()!==uid||read()?.uid!==uid)throw Error('Akun atau pengaturan sinkronisasi berubah.');}
async function connect(uid){guard(uid);const sdk=await import('https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js');guard(uid);return {sdk,db:sdk.getFirestore(w.GakuAuth.firebaseApp)};}
function unpack(doc){if(!doc.exists())return null;const d=doc.data();if(d.version!==1||!Number.isInteger(d.revision)||d.revision<1||typeof d.payload!=='string')throw Error('Cadangan akun tidak sesuai.');return {revision:d.revision,values:w.GakuCloud.validate(JSON.parse(d.payload))};}
function conflict(){stopped=true;changed('Data HP dan akun sama-sama berubah. Otomatis dijeda. Gunakan Simpan atau Ambil di bawah untuk memeriksa dan memilih data; unduh kedua cadangan dahulu jika diperlukan.');}
async function tick(force=false){const uid=id(),m=read(),cloud=w.GakuCloud;if(busy||stopped||!uid||m?.uid!==uid||w.GakuAuth.state!=='ready'||cloud.busy||cloud.reviewing||cloud.recoveryBlocked||w.document.hidden)return;
 if(otherTab){if(cloud.canApply?.())w.location.reload();else changed('Data diperbarui dari tab lain. Kembali ke Beranda untuk memuatnya.');return;}
 if(w.navigator?.onLine===false){changed('Offline: data tetap di HP dan akan dicoba lagi saat online.');return;}
 if(!force&&Date.now()<nextTry)return;
 let local,payload;try{local=cloud.capture();payload=serial(local);}catch(e){changed(e.message);return;}
 if(payload!==observed){observed=payload;observedAt=Date.now();}
 const dirty=payload!==serial(m.values);
 if(dirty&&!force&&Date.now()-observedAt<3000){changed('Menunggu perubahan tersimpan…');return;}
 if(!dirty&&!force&&Date.now()<nextRead)return;
 busy=true;
 try{const {sdk,db}=await connect(uid),ref=sdk.doc(db,'users',uid,'study','snapshot');let remote;
 if(dirty){changed('Menyimpan otomatis…');let revision;
 await sdk.runTransaction(db,async tx=>{guard(uid);const current=unpack(await tx.get(ref));if(!current||current.revision!==m.revision){const e=Error('conflict');e.conflict=true;throw e;}guard(uid);revision=current.revision+1;tx.set(ref,{version:1,revision,payload,updatedAt:sdk.serverTimestamp()});});
 guard(uid);if(save(uid,revision,local))changed('Tersimpan otomatis ke akun.');
 }else{remote=unpack(await sdk.getDocFromServer(ref));guard(uid);
 if(!remote){conflict();return;}
 if(remote.revision!==m.revision){const latest=cloud.capture();if(serial(latest)!==payload){conflict();return;}
 if(serial(remote.values)===payload){if(save(uid,remote.revision,remote.values))changed('Data akun sudah sama.');}
 else if(cloud.canApply?.()){
 // Restore is synchronous; reload only on safe screens, never mid-lesson/exam.
 cloud.restore(remote.values);save(uid,remote.revision,remote.values);w.location.reload();return;
 }else{changed('Ada data baru dari perangkat lain. Kembali ke Beranda untuk menerapkannya.');nextRead=Date.now()+4000;return;}
 }else changed('Data akun sudah sama.');}
 nextRead=Date.now()+60000;nextTry=0;
 }catch(e){if(e.conflict)conflict();else{nextTry=Date.now()+15000;changed(e.code==='permission-denied'?'Sinkronisasi ditolak Firebase. Periksa aturan dan login akun.':'Belum tersinkron. Data tetap di HP; akan dicoba lagi saat aplikasi terbuka.');}}
 finally{busy=false;}
}
function loop(){tick().finally(()=>{w.setTimeout(loop,2000);});}
function start(){if(started)return;started=true;w.setTimeout(loop,2000);}
function panel(){const m=read(),enabled=m?.uid===id();return `<div style="margin:16px 0;padding:16px;border:1px solid currentColor;border-radius:18px"><h3>Sinkronisasi otomatis</h3><p>${enabled?'Aktif untuk akun ini di HP ini. Perubahan dikirim beberapa detik setelah tersimpan; data akun diperiksa berkala saat aplikasi terbuka.':'Pilih data awal satu kali untuk mengaktifkan sinkronisasi di HP ini.'}</p>${enabled?`<button class="chip" onclick="GakuAuto.tick(true)" ${busy?'disabled':''}>Periksa sekarang</button> <button class="chip" onclick="GakuAuto.disable()" ${busy?'disabled':''}>Matikan otomatis</button>`:`<button class="google-button" onclick="GakuCloud.prepare('upload',true)" ${busy?'disabled':''}>Mulai dari data HP ini</button> <button class="google-button" onclick="GakuCloud.prepare('download',true)" ${busy?'disabled':''}>Mulai dari data akun</button>`}<p class="hint" role="status" aria-live="polite">${esc(status||'Belum diaktifkan di perangkat ini.')}</p><p class="hint">Saat pindah akun atau keluar, otomatis dimatikan. Data berbeda dari dua HP perlu diperiksa; tidak digabungkan otomatis. Gunakan satu tab DeX Gaku per perangkat.</p></div>`;}
w.GakuAuto={accepted,disable,authChanged,tick,panel,get busy(){return busy;}};
w.addEventListener('load',start);
w.addEventListener('online',()=>tick(true));
w.addEventListener('focus',()=>tick(true));
w.addEventListener('storage',event=>{if(event.key===KEY){otherTab=true;nextRead=0;}});
})(window);
