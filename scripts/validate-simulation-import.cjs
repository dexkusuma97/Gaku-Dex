#!/usr/bin/env node
'use strict';
/* Read-only gate for Claude's authoring JSON. This command never installs content. */
const fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const {validateCollection}=require('./lib/simulation-contract.cjs');
const paths=process.argv.slice(2);if(!paths.length){console.error('Usage: node scripts/validate-simulation-import.cjs FILE.json [FILE.json ...]');process.exit(2);}
try{
 const c={window:{}};vm.createContext(c);const root=path.resolve(__dirname,'../dist/prototipe-simulasi');for(const f of ['bank-packs-12.js','bank-packs-34.js','bank-n4-a2.js'])vm.runInContext(fs.readFileSync(path.join(root,f),'utf8'),c);
 const incoming=paths.map(file=>{if(path.extname(file).toLowerCase()!=='.json')throw Error('Hanya menerima file .json: '+path.basename(file));if(fs.statSync(file).size>10*1024*1024)throw Error('File melebihi 10 MiB.');const p=JSON.parse(fs.readFileSync(file,'utf8'));if(!p||![5,6].includes(p.number))throw Error('File masuk hanya boleh paket 5 atau 6.');return p;});
 const errors=validateCollection([...c.window.GAKU_SIM_PACKS,...incoming]);if(errors.length){console.error('DITOLAK — belum ada file aplikasi yang diubah.\n'+errors.map(e=>'• '+e).join('\n'));process.exitCode=1;}
 else console.log('LULUS STRUKTUR: '+incoming.map(p=>p.id+' ('+p.questions.length+' soal)').join(', ')+'.\nBelum diaktifkan. Kunci jawaban, tingkat materi, soal yang mirip, dan audio tetap perlu pemeriksaan manusia.');
}catch(e){console.error('DITOLAK: '+e.message+'\nTidak ada file aplikasi yang diubah.');process.exitCode=1;}
