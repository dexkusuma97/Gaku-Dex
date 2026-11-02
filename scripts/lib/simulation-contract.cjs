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
 const n5=pack.exam==='jlpt',high=pack.level==='N4'||pack.level==='A2',counts=n5?(high?[28,31,28]:[21,26,24]):[13,12,13,12],prefix=n5?(high?'n4':'n5'):(high?'jft-a2':'jft-a1');
 check(pack.level===(n5?(high?'N4':'N5'):(high?'A2':'A1')),'Level tidak sesuai exam.');check(pack.id===(n5?(high?'jlpt-n4-':'jlpt-n5-'):(high?'jft-a2-':'jft-a1-'))+String(pack.number).padStart(2,'0'),'ID paket tidak sesuai exam/nomor.');
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
 if(high){
  const kinds=n5?['Bacaan kanji','Penulisan kata','Kosakata sesuai konteks','Ungkapan bermakna serupa','Penggunaan kata','Bentuk tata bahasa','Susun kalimat','Tata bahasa dalam teks','Bacaan pendek','Bacaan sedang','Mencari informasi','Menyimak tindakan atau tugas','Menyimak informasi utama','Menyimak ungkapan sesuai situasi','Menyimak respons langsung']:['Arti kosakata','Penggunaan kosakata','Bacaan kanji','Arti dan penggunaan kanji','Tata bahasa dalam percakapan','Ungkapan dalam situasi','Menyimak percakapan sehari-hari','Menyimak di toko dan tempat umum','Menyimak pengumuman dan instruksi','Memahami pesan dan teks pendek','Mencari informasi praktis'];
  const sizes=n5?[7,5,8,4,4,13,4,4,4,4,2,8,7,5,8]:[3,4,3,3,6,6,5,4,4,6,6];
  const expected=kinds.flatMap((kind,i)=>Array(sizes[i]).fill(kind));
  check(pack.questions.every((q,i)=>q.kind===expected[i]),'Urutan/jumlah subjenis N4/A2 tidak sesuai blueprint.');
  pack.questions.forEach((q,i)=>{if(n5&&['Tata bahasa dalam teks','Bacaan pendek','Bacaan sedang','Mencari informasi'].includes(q.kind))check(text(q.passage),'Soal '+(i+1)+': stimulus bacaan wajib.');if(q.section===2)check(q.audio===q.transcript,'Soal '+(i+1)+': audio/transcript harus identik.');});
 }
 check(actual.every((n,i)=>n===counts[i]),'Jumlah per section salah: '+actual.join('/')+'.');return errors;
}
function validateCollection(packs){const errors=[],packIds=new Set(),qIds=new Set(),seen=new Map();for(const p of packs){const tag=p?.id||'Paket';const local=validatePack(p);errors.push(...local.map(e=>tag+': '+e));if(local.length)continue;if(packIds.has(p.id))errors.push('ID paket duplikat: '+p.id);packIds.add(p.id);for(const q of p.questions){if(qIds.has(q.id))errors.push('ID soal duplikat: '+q.id);qIds.add(q.id);const fp=fingerprint(q);if(seen.has(fp))errors.push('Soal identik: '+seen.get(fp)+' / '+q.id);else seen.set(fp,q.id);}}return errors;}
module.exports={validatePack,validateCollection,fingerprint,normalized};
