const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const src=fs.readFileSync('dist/cloud-sync.js','utf8');
const JOURNAL='gaku-cloud-restore-journal-v1';
function setup(initial=[]){let remote=null,fail=false,reloaded=0,reads=0,writes=0,afterRead=null,quotaAt=-1,sets=0;
 const storage=new Map(initial),auth={user:{uid:'a',email:'a@example.com'},firebaseApp:{},onChange(){}};
 const snap=()=>({exists:()=>remote!==null,data:()=>remote});
 const sdk={getFirestore:a=>a,doc:(db,...parts)=>parts.join('/'),getDocFromServer:async ref=>{reads++;if(fail)throw {code:'permission-denied'};const result=snap();if(afterRead)afterRead();return result;},serverTimestamp:()=>({server:true}),runTransaction:async(db,fn)=>{let pending;await fn({get:async()=>snap(),set:(ref,value)=>{assert.equal(ref,'users/a/study/snapshot');pending=value;}});if(pending){remote=pending;writes++;}}};
 const c={TextEncoder,URL,Blob,Date,setTimeout,localStorage:{getItem:k=>storage.has(k)?storage.get(k):null,setItem:(k,v)=>{sets++;if(sets===quotaAt)throw Error('quota');storage.set(k,v);},removeItem:k=>storage.delete(k)},GakuAuth:auth,addEventListener(){},location:{reload(){reloaded++;}},document:{createElement:()=>({click(){}})},testSDK:async()=>sdk};c.window=c;vm.createContext(c);vm.runInContext(src.replace("await import('https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js')","await w.testSDK()"),c);
 return {api:c.GakuCloud,storage,auth,set remote(v){remote=v},get remote(){return remote},set fail(v){fail=v},set afterRead(v){afterRead=v},set quotaIn(v){quotaAt=sets+v},get writes(){return writes},get reloaded(){return reloaded},get reads(){return reads}};
}
(async()=>{
 const t=setup([['gaku-ui-history','[{"type":"Quiz","detail":"1/2"}]'],['gaku-ui-data','[]'],['gaku-home-last-learning','"Kanji"'],['gaku-summary-kanji','true'],['firebase:secret','stay']]);
 assert.equal(t.reads,0);assert.equal(t.writes,0);assert.ok(!Object.keys(t.api.capture()).includes('firebase:secret'));
 await t.api.prepare('upload');assert.equal(t.writes,0);assert.ok(t.api.panel().includes('Simpan data HP ini?'));await t.api.confirm();assert.equal(t.writes,1);assert.equal(t.remote.revision,1);assert.equal(JSON.parse(t.remote.payload)['gaku-home-last-learning'],'"Kanji"');
 await t.api.prepare('upload');t.remote={...t.remote,revision:2};await t.api.confirm();assert.equal(t.writes,1);assert.ok(t.api.panel().includes('perangkat lain'));
 await t.api.prepare('upload');t.storage.set('gaku-ui-data','[{"jp":"本","meaning":"buku"}]');await t.api.confirm();assert.equal(t.writes,1);assert.ok(t.api.panel().includes('Data HP berubah'));
 await t.api.prepare('download');await t.api.confirm();assert.equal(t.reloaded,1);assert.equal(t.storage.get('gaku-ui-data'),'[]');assert.equal(t.storage.get('firebase:secret'),'stay');assert.ok(t.storage.get('gaku-cloud-local-backup-v1').includes('本'));assert.equal(t.storage.has(JOURNAL),false);
 await t.api.prepare('download');t.auth.user={uid:'b',email:'b@example.com'};await t.api.confirm();assert.equal(t.reloaded,1);assert.ok(t.api.panel().includes('Akun berubah'));
 t.auth.user={uid:'a'};t.afterRead=()=>{t.auth.user={uid:'b'}};await t.api.prepare('download');assert.ok(t.api.panel().includes('Akun berubah'));assert.equal(t.reloaded,1);
 t.afterRead=null;t.auth.user={uid:'a'};t.fail=true;await t.api.prepare('upload');assert.ok(t.api.panel().includes('Akses ditolak'));assert.equal(t.writes,1);
 const before=t.api.capture(),bad={...before,'gaku-ui-history':'null'};assert.throws(()=>t.api.validate(bad));assert.throws(()=>t.api.validate({...before,'gaku-ui-prefs':'{"__proto__":{}}'}));assert.throws(()=>t.api.validate({...before,'gaku-ui-data':JSON.stringify(['あ'.repeat(240000)])}));
 const q=setup([['gaku-ui-data','[]']]),old=q.api.capture(),next={...old,'gaku-ui-data':'[{"jp":"山","meaning":"gunung"}]'};q.quotaIn=3;assert.throws(()=>q.api.restore(next));assert.equal(JSON.stringify(q.api.capture()),JSON.stringify(old));assert.equal(q.api.recoveryBlocked,false);
 const recovered=setup([['gaku-ui-data','["partial"]'],[JOURNAL,JSON.stringify({version:1,before:old})]]);assert.equal(recovered.storage.get('gaku-ui-data'),'[]');assert.equal(recovered.storage.has(JOURNAL),false);
 const broken=setup([[JOURNAL,'broken']]);assert.equal(broken.api.recoveryBlocked,true);assert.throws(()=>broken.api.capture());
 const none=setup();await none.api.prepare('download');assert.ok(none.api.panel().includes('Belum ada cadangan'));assert.equal(none.reloaded,0);none.auth.user=null;assert.equal(none.api.panel(),'');
 const app=require('./helpers/main-app.cjs')();app.c.showPage('Pengaturan');assert.ok(app.run('settings()').includes('Akun belajar'));assert.ok(fs.readFileSync('dist/index.html','utf8').indexOf('cloud-sync.js')<fs.readFileSync('dist/index.html','utf8').indexOf('home-personalization.js'));
 const rules=fs.readFileSync('firestore.rules','utf8');assert.ok(rules.includes('request.auth.uid == uid'));assert.ok(rules.includes('hasOnly'));assert.ok(!/allow\s+(?:read|write|delete|list)/.test(rules));
 console.log('PASS: explicit preview, revision conflicts, changed local data, UID changes, permission errors, restore and rollback, startup recovery, quota/size/format guards, no credentials uploaded, guest and page integration. Rules assertions are structural; live rules need console verification.');
})().catch(e=>{console.error(e);process.exitCode=1});
