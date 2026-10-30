'use strict';
const PACK_KEYS=['id','exam','number','title','level','status','questions'];
const Q_KEYS=['id','section','kind','instruction','idn','jp','options','answer','passage','audio','transcript','scene'];
const SCENE_TYPES=['greeting','thanks','apology','request','farewell'];
const normalized=s=>String(s).normalize('NFKC').replace(/<\/?u>/g,'').replace(/[\s。、！？!?「」『』：:（）()]/g,'').toLowerCase();
const fingerprint=q=>[normalized(q.jp),normalized(q.passage||''),normalized(q.audio||''),...q.options.map(normalized).sort()].join('|');
function validatePack(pack){
 const errors=[];const check=(ok,msg)=>{if(!ok)errors.push(msg)};const object=x=>x!==null&&typeof x==='object'&&!Array.isArray(x);const text=x=>typeof x==='string'&&x.trim().length>0&&x.length<=10000;
 if(!object(pack))return ['Paket harus berupa objek JSON.'];
 check(Object.keys(pack).every(k=>PACK_KEYS.includes(k)),'Field paket tidak dikenal.');check(['jlpt','jft'].includes(pack.exam),'exam harus jlpt atau jft.');check(Number.isInteger(pack.number)&&pack.number>=1&&pack.number<=6,'Nomor paket harus 1–6.');check(text(pack.title),'Judul paket kosong/tidak valid.');check(pack.status==='draft','status wajib draft sampai pemeriksaan manusia.');
 const n5=pack.exam==='jlpt',counts=n5?[21,26,24]:[13,12,13,12],prefix=n5?'n5':'jft-a1';
 check(pack.level===(n5?'N5':'A1'),'Level tidak sesuai exam.');check(pack.id===(n5?'jlpt-n5-':'jft-a1-')+String(pack.number).padStart(2,'0'),'ID paket tidak sesuai exam/nomor.');
 if(!Array.isArray(pack.questions))return [...errors,'questions harus array.'];
 check(pack.questions.length===counts.reduce((a,b)=>a+b,0),'Jumlah soal paket salah.');let lastSection=0;const ids=new Set();
 const actual=counts.map(()=>0);
 pack.questions.forEach((q,i)=>{
  const tag='Soal '+(i+1)+': ';if(!object(q)){errors.push(tag+'harus objek.');return;}
  check(Object.keys(q).every(k=>Q_KEYS.includes(k)),tag+'field tidak dikenal atau pembahasan terlarang.');
  check(q.id===prefix+'-p'+String(pack.number).padStart(2,'0')+'-'+String(i+1).padStart(3,'0'),tag+'ID harus berurutan dan cocok dengan paket.');check(!ids.has(q.id),tag+'ID duplikat.');ids.add(q.id);
  const sectionValid=Number.isInteger(q.section)&&q.section>=0&&q.section<counts.length;check(sectionValid&&q.section>=lastSection,tag+'section tidak valid/tidak berurutan.');if(sectionValid){actual[q.section]++;lastSection=q.section;}
  for(const k of ['kind','instruction','idn','jp'])check(text(q[k]),tag+k+' kosong/tidak valid.');
  if(typeof q.jp==='string')check(/^(?:[^<>]|<u>[^<>]+<\/u>)*$/.test(q.jp),tag+'jp hanya boleh teks dan pasangan <u>...</u>.');
  const optionsValid=Array.isArray(q.options)&&(q.options.length===3||q.options.length===4);check(optionsValid,tag+'harus ada 3/4 pilihan.');if(optionsValid){check(q.section===2||q.options.length===4,tag+'di luar menyimak wajib 4 pilihan.');check(q.options.every(o=>text(o)&&!/[<>]/.test(o)),tag+'opsi harus teks biasa.');check(new Set(q.options.map(normalized)).size===q.options.length,tag+'opsi duplikat setelah normalisasi.');check(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,tag+'answer harus indeks opsi mulai 0.');}
  for(const k of ['passage','audio','transcript'])if(k in q)check(text(q[k])&&!/[<>]/.test(q[k]),tag+k+' harus teks biasa, tidak kosong.');
  if(q.section===2){check(text(q.audio)&&text(q.transcript),tag+'menyimak wajib audio dan transcript.');if(text(q.audio)&&text(q.transcript))check(normalized(q.audio)===normalized(q.transcript),tag+'isi audio/transcript berbeda.');}else check(!('audio' in q)&&!('transcript' in q),tag+'audio/transcript hanya pada section menyimak.');
  if(!n5&&q.section===3)check(text(q.passage),tag+'membaca JFT wajib passage.');
  if('scene' in q){check(object(q.scene),tag+'scene harus objek.');if(object(q.scene)){check(Object.keys(q.scene).every(k=>['type','caption'].includes(k)),tag+'field scene tidak dikenal.');check(SCENE_TYPES.includes(q.scene.type)&&text(q.scene.caption)&&!/[<>]/.test(q.scene.caption),tag+'scene type/caption tidak valid.');check(q.section===2,tag+'scene hanya untuk menyimak.');}}
 });
 check(actual.every((n,i)=>n===counts[i]),'Jumlah per section salah: '+actual.join('/')+'.');return errors;
}
function validateCollection(packs){const errors=[],packIds=new Set(),qIds=new Set(),seen=new Map();for(const p of packs){const tag=p?.id||'Paket';const local=validatePack(p);errors.push(...local.map(e=>tag+': '+e));if(local.length)continue;if(packIds.has(p.id))errors.push('ID paket duplikat: '+p.id);packIds.add(p.id);for(const q of p.questions){if(qIds.has(q.id))errors.push('ID soal duplikat: '+q.id);qIds.add(q.id);const fp=fingerprint(q);if(seen.has(fp))errors.push('Soal identik: '+seen.get(fp)+' / '+q.id);else seen.set(fp,q.id);}}return errors;}
module.exports={validatePack,validateCollection,fingerprint,normalized};
