/* Deterministic authoring export; raw JSON serves as input/reference for Claude. */
const fs=require('fs'),vm=require('vm'),path=require('path');
const dir=path.resolve(__dirname,'../dist/prototipe-simulasi'),c={window:{}};vm.createContext(c);
for(const f of ['bank-packs-12.js','bank-packs-34.js'])vm.runInContext(fs.readFileSync(path.join(dir,f),'utf8'),c);
const out=path.join(dir,'authoring/paket-1-4');fs.mkdirSync(out,{recursive:true});for(const p of c.window.GAKU_SIM_PACKS)fs.writeFileSync(path.join(out,p.id+'.json'),JSON.stringify(p,null,2)+'\n');console.log('Exported '+c.window.GAKU_SIM_PACKS.length+' reference JSON packs');
