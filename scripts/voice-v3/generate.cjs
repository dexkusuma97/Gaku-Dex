/* Termux narration generator. Labels stay metadata; only turn.text is sent. */
'use strict';
const fs=require('node:fs'),path=require('node:path'),crypto=require('node:crypto'),{spawnSync}=require('node:child_process');
const mode=process.argv[2];if(!['kaiwa','simulasi'].includes(mode))throw Error('Pilih kaiwa atau simulasi.');
const base=path.join(__dirname,mode),manifest=JSON.parse(fs.readFileSync(path.join(__dirname,mode+'-manifest.json'))),args=process.argv.slice(3),dry=args.includes('--dry-run'),packOnly=args.includes('--pack');
const filter=args.find(x=>!x.startsWith('--'))||'all';
const rows=manifest.filter(q=>filter==='all'||q.pack===filter);
if(!rows.length)throw Error('Pilihan tidak ditemukan. Gunakan all atau ID paket/skenario dalam manifest.');
const voices=mode==='kaiwa'?{male:'Bj4Malc5SZLoXfPtxRxH',female:'3321Alera3fXjEWjjbAX'}:{male:'xya0RvcJtofTcFTOdX4E',female:'0ptCJp0xgdabdcpVtCB5',narrator:'GxxMAMfQkDlnqjpzjLHH'};
const speed=Number(process.env.ELEVENLABS_SPEED||0.85),key=process.env.ELEVENLABS_API_KEY;
if(!Object.values(voices).every(v=>/^[A-Za-z0-9]+$/.test(v))||!Number.isFinite(speed)||speed<.7||speed>1.2)throw Error('Voice ID atau speed tidak valid.');
if(voices.male===voices.female)throw Error('Voice pria dan wanita harus berbeda.');
const hash=x=>crypto.createHash('sha256').update(JSON.stringify(x)).digest('hex');
const out=path.join(base,'audio'),cache=path.join(base,'cache');
const fingerprint=q=>hash({q,voices,speed,model:'eleven_multilingual_v2',gap:.3,version:1});
const exists=p=>fs.existsSync(p)&&fs.statSync(p).size>100;
const complete=q=>{try{return exists(path.join(out,q.file))&&JSON.parse(fs.readFileSync(path.join(cache,q.id+'.json'))).fingerprint===fingerprint(q);}catch{return false;}};
function run(command,argv,options={}){const result=spawnSync(command,argv,{encoding:'utf8',maxBuffer:2*1024*1024,...options});if(result.error||result.status!==0)throw Error(command+' gagal. '+(result.error?'Perintah tidak tersedia.':(result.stderr||'').slice(-700)));return result.stdout;}
if(packOnly){
 const missing=rows.filter(q=>!complete(q));if(missing.length)throw Error(missing.length+' audio belum lengkap atau memakai pengaturan voice berbeda. Jalankan generator dulu.');
 const zip=path.join(base,mode==='kaiwa'?'kaiwa-audio.zip':'simulasi-audio-baru.zip'),temp=path.join(base,mode==='kaiwa'?'kaiwa-audio.tmp.zip':'simulasi-audio-baru.tmp.zip');
 fs.rmSync(temp,{force:true});run('zip',['-q',temp,...rows.map(q=>q.file)],{cwd:out});fs.renameSync(temp,zip);console.log('Selesai: '+zip+' ('+rows.length+' MP3)');process.exit(0);
}
if(dry){for(const q of rows)console.log('RENCANA '+q.file+' · '+q.turns.length+' bagian: '+q.turns.map(t=>t.speaker).join(' → '));console.log('TOTAL '+rows.length+' MP3, '+rows.reduce((n,q)=>n+q.turns.length,0)+' bagian suara.');process.exit(0);}
if(!key||/[\r\n"\\]/.test(key))throw Error('Atur ELEVENLABS_API_KEY di Termux. Jangan kirim ke chat.');
run('curl',['--version']);run('ffmpeg',['-version']);
fs.mkdirSync(out,{recursive:true});fs.mkdirSync(cache,{recursive:true});
for(const q of rows){
 if(complete(q)){console.log('LEWATI '+q.file);continue;}
 const clips=[];
 for(const [i,turn] of q.turns.entries()){
  if(!voices[turn.speaker]||!turn.text.trim())throw Error('Data suara tidak valid: '+q.id);
  const payload={text:turn.text,model_id:'eleven_multilingual_v2',voice_settings:{speed}},digest=hash({payload,voice:voices[turn.speaker]}),clip=path.join(cache,digest+'.mp3');
  if(!exists(clip)){
   const tmp=clip+'.tmp';fs.rmSync(tmp,{force:true});
   const result=spawnSync('curl',['--config','-','--silent','--show-error','--connect-timeout','15','--max-time','120','--request','POST','https://api.elevenlabs.io/v1/text-to-speech/'+voices[turn.speaker]+'?output_format=mp3_44100_128','--header','Content-Type: application/json','--header','Accept: audio/mpeg','--data',JSON.stringify(payload),'--output',tmp,'--write-out','%{http_code}\t%{content_type}'],{input:'header = "xi-api-key: '+key+'"\n',encoding:'utf8',maxBuffer:1024*1024});
   const [code,mime]=String(result.stdout||'').split('\t');
   if(result.error||result.status!==0||code!=='200'||!/^audio\//.test(mime||'')||!exists(tmp)){fs.rmSync(tmp,{force:true});throw Error('GAGAL '+q.file+' bagian '+(i+1)+' HTTP '+(code||'koneksi')+'. Proses dihentikan; periksa key/izin/kuota/koneksi, lalu jalankan lagi.');}
   try{run('ffmpeg',['-v','error','-i',tmp,'-f','null','-']);}catch(e){fs.rmSync(tmp,{force:true});throw e;}
   fs.renameSync(tmp,clip);
  }
  clips.push(clip);console.log('BAGIAN '+q.id+' '+(i+1)+'/'+q.turns.length+' '+turn.speaker);
 }
 const inputs=clips.flatMap(p=>['-i',p]),filters=clips.map((_,i)=>'['+i+':a]aformat=sample_rates=44100:channel_layouts=mono'+(i<clips.length-1?',apad=pad_dur=0.3':'')+'[a'+i+']').join(';')+';'+clips.map((_,i)=>'[a'+i+']').join('')+'concat=n='+clips.length+':v=0:a=1[out]';
 const tmp=path.join(out,q.id+'.tmp.mp3');
 run('ffmpeg',['-y','-v','error',...inputs,'-filter_complex',filters,'-map','[out]','-c:a','libmp3lame','-b:a','128k',tmp]);
 if(!exists(tmp))throw Error('Gabungan audio kosong: '+q.file);
 fs.renameSync(tmp,path.join(out,q.file));fs.writeFileSync(path.join(cache,q.id+'.json'),JSON.stringify({fingerprint:fingerprint(q),voices}));console.log('OK '+q.file);
}
console.log('Selesai. Jalankan bash pack-semua.sh untuk membuat kedua ZIP.');
