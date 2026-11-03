'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path'),cp=require('node:child_process'),os=require('node:os');
const folder='dist/prototipe-simulasi/authoring/paket-n4-a2';const packs=fs.readdirSync(folder).filter(f=>/-0[56]\.json$/.test(f)).sort().map(f=>JSON.parse(fs.readFileSync(folder+'/'+f)));
assert.equal(packs.length,4);assert.equal(packs.reduce((n,p)=>n+p.questions.length,0),274);
const stars=JSON.parse(fs.readFileSync('data/SIMULATION_N4_A2_STARS_56_20261103.json'));
for(const p of packs)for(const q of p.questions.filter(q=>q.kind==='Susun kalimat')){const order=stars[q.id];assert.equal(order.length,4);assert.equal(new Set(order).size,4);assert.deepEqual([...q.options].sort(),[...order].sort());assert.equal(q.options[q.answer],order[2]);}
const manifest=JSON.parse(fs.readFileSync('scripts/voice-v3/simulasi-n4-a2-manifest.json'));assert.equal(manifest.length,246);assert.equal(manifest.filter(r=>/-0[56]$/.test(r.pack)).length,82);
const {split,createPlayer}=require('../dist/prototipe-simulasi/audio-engine.js');for(const p of packs)for(const q of p.questions.filter(q=>q.audio)){const row=manifest.find(r=>r.id===q.id);assert.deepEqual(row.turns,split(q.audio));assert.equal(row.file,q.id+'.mp3');assert.ok(row.turns.every(t=>!t.text.includes('Narrator:')&&!t.text.includes('女:')&&!t.text.includes('男:')));}
function answer(id){const q=packs.flatMap(p=>p.questions).find(q=>q.id===id);assert.ok(q,id);return q.options[q.answer];}
assert.equal(answer('n4-p06-058'),'1,200円。'); // 2×500 + 2×200 = 1400; family pass = 1200.
assert.equal(answer('n4-p06-065'),'八時四十五分。'); // 09:00 minus 5 minutes early arrival and 10 minutes walking.
assert.equal(answer('jft-a2-p05-045'),'300円。'); // 12 L prints × discounted 25 yen.
assert.equal(answer('jft-a2-p05-047'),'160円。'); // 2 2L prints × 80 yen, no discount.
assert.equal(answer('jft-a2-p06-049'),'1,300円。'); // 2 hours ×500 plus one projector fee of300.
const app=require('./helpers/main-app.cjs');
for(const exam of ['jlpt','jft'])for(const number of [5,6]){
 const a=app(new Map([['gaku-ui-prefs',JSON.stringify({level:'N4',motion:false})]])),session=new Map();a.c.sessionStorage={getItem:k=>session.get(k)||null,setItem:(k,v)=>session.set(k,v)};
 const els=new Map();a.c.document.querySelector=selector=>{if(selector==='.modal')return null;if(!els.has(selector))els.set(selector,{innerHTML:'',textContent:'',open:false,style:{},classList:{toggle(){}},showModal(){this.open=true},close(){this.open=false},focus(){}});return els.get(selector)};a.c.showPage('Simulasi');const s=a.c.GakuSimulation;s.selectExam(exam);s.selectPack(number);assert.equal(s.getPack().number,number);s.go('rules');s.state.accepted=true;s.startExam();assert.equal(s.state.run.answers.length,exam==='jlpt'?87:50);s.setAnswer(1);const deadline=s.state.run.deadline;s.toggleFlag();
 vm.runInContext(fs.readFileSync('dist/simulation-module.js','utf8'),a.c);a.c.initAppNavigation();const re=a.c.GakuSimulation;assert.equal(re.state.pack,number);assert.equal(re.state.run.answers[0],1);assert.ok(re.state.run.flags.includes(0));assert.equal(re.state.run.deadline,deadline);assert.equal(re.availablePacks().length,6);re.finishExam();assert.equal(a.c.GakuHistory.read()[0].simulation.total,exam==='jlpt'?87:50);
 a.c.selectLevel('N5');re.screen();assert.ok(re.availablePacks(exam).every(p=>p.level===(exam==='jlpt'?'N5':'A1')));
}
// A registered new ID selects the installed MP3 instead of TTS; labels stay out of synthesis.
{const paths=[];const env={GAKU_SIM_EMBEDDED:true,GAKU_SIM_RECORDED_IDS:[manifest[0].id],Audio:class{constructor(url){paths.push(url)}play(){return Promise.resolve()}pause(){}},speechSynthesis:{cancel(){}},clearTimeout(){}};createPlayer(env).play({question:{id:manifest[0].id,audio:'女:こんにちは。'}});assert.equal(paths[0],'assets/simulasi/'+manifest[0].file);}
for(const filter of ['new','all','jlpt-n4-05','jft-a2-06']){const r=cp.spawnSync('bash',['scripts/voice-v3/buat-simulasi-n4-a2.sh',filter,'--dry-run'],{encoding:'utf8',env:{...process.env,ELEVENLABS_API_KEY:''}});assert.equal(r.status,0,r.stderr);assert.ok(r.stdout.includes('TOTAL '+({new:82,all:246,'jlpt-n4-05':28,'jft-a2-06':13}[filter])+' MP3'));}
// Exercise the actual generator with local silent audio: no external calls or quota consumption.
const tmp=fs.mkdtempSync(path.join(os.tmpdir(),'gaku-audio56-'));
try{
 const project=path.join(tmp,'project'),voice=path.join(project,'scripts/voice-v3'),bank=path.join(project,folder),dist=path.join(project,'dist/prototipe-simulasi');fs.mkdirSync(voice,{recursive:true});fs.mkdirSync(bank,{recursive:true});
 for(const f of ['generate-n4-a2.cjs','buat-simulasi-n4-a2.sh'])fs.copyFileSync('scripts/voice-v3/'+f,path.join(voice,f));fs.copyFileSync('dist/prototipe-simulasi/audio-engine.js',path.join(dist,'audio-engine.js'));fs.writeFileSync(path.join(dist,'recorded-n4-a2.js'),'window.GAKU_SIM_RECORDED_IDS = [];\n');
 const fixture=[manifest.find(r=>r.id==='n4-p05-060'),manifest.find(r=>r.id==='n4-p06-080')];fs.writeFileSync(path.join(voice,'simulasi-n4-a2-manifest.json'),JSON.stringify(fixture));for(const p of packs.filter(p=>p.exam==='jlpt'))fs.writeFileSync(path.join(bank,p.id+'.json'),JSON.stringify(p));
 const sample=path.join(tmp,'sample.mp3');let run=cp.spawnSync('ffmpeg',['-y','-v','error','-f','lavfi','-i','anullsrc=r=44100:cl=mono','-t','0.1','-c:a','libmp3lame',sample]);assert.equal(run.status,0);
 const bin=path.join(tmp,'bin');fs.mkdirSync(bin);fs.writeFileSync(path.join(bin,'curl'),`#!/usr/bin/env python3\nimport os,sys,shutil,json\nif '--version' in sys.argv: print('mock curl');sys.exit(0)\nargs=sys.argv[1:]\nassert os.environ['ELEVENLABS_API_KEY'] not in ' '.join(args)\nheader=sys.stdin.read();assert 'xi-api-key:' in header\npayload=json.loads(args[args.index('--data')+1]);assert not payload['text'].startswith(('Narrator:','男:','女:'))\nwith open(os.environ['MOCK_LOG'],'a') as f:f.write(payload['text']+'\\n')\ncode=os.environ.get('MOCK_STATUS','200')\nshutil.copyfile(os.environ['MOCK_MP3'],args[args.index('--output')+1])\nprint(code+'\\t'+('audio/mpeg' if code=='200' else 'application/json'),end='')\n`,{mode:0o700});
 const env={...process.env,PATH:bin+path.delimiter+process.env.PATH,ELEVENLABS_API_KEY:'mock-secret-never-real',MOCK_MP3:sample,MOCK_LOG:path.join(tmp,'calls.log')};
 const invoke=(args,extra={})=>cp.spawnSync('node',[path.join(voice,'generate-n4-a2.cjs'),...args],{env:{...env,...extra},encoding:'utf8'});
 run=invoke(['new'],{MOCK_STATUS:'401'});assert.notEqual(run.status,0);assert.ok(!run.stderr.includes(env.ELEVENLABS_API_KEY));assert.ok(!fs.existsSync(path.join(voice,'simulasi-n4-a2/audio',fixture[0].file)));
 run=invoke(['new']);assert.equal(run.status,0,run.stderr);const calls=fs.readFileSync(env.MOCK_LOG,'utf8');run=invoke(['new']);assert.equal(run.status,0,run.stderr);assert.ok(run.stdout.includes('LEWATI'));assert.equal(fs.readFileSync(env.MOCK_LOG,'utf8'),calls,'resume must not call API again');
 run=invoke(['new','--install']);assert.equal(run.status,0,run.stderr);const registry=fs.readFileSync(path.join(dist,'recorded-n4-a2.js'),'utf8');for(const row of fixture){assert.ok(registry.includes(row.id));assert.ok(fs.statSync(path.join(project,'dist/assets/simulasi',row.file)).size>100);}
 run=invoke(['new','--pack']);assert.equal(run.status,0,run.stderr);assert.ok(fs.existsSync(path.join(voice,'simulasi-n4-a2/simulasi-n4-a2-audio-baru.zip')));
 fs.writeFileSync(path.join(voice,'simulasi-n4-a2/audio',fixture[0].file),'corrupt');run=invoke(['new','--install']);assert.notEqual(run.status,0);assert.ok(run.stderr.includes('hash/voice/naskah'));
}finally{fs.rmSync(tmp,{recursive:true,force:true});}
console.log('PASS: 274 new questions, eight star witnesses, numeric reading/listening keys, four live package sessions/reload/levels, 246-turn manifest, 82-new filter, MP3 registry, API failure, resumable generation, verified installation and ZIP with mocked API.');
