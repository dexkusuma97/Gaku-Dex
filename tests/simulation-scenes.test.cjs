const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict');
const c={window:{}};vm.createContext(c);
for(const f of ['bank-packs-12.js','bank-packs-34.js','bank-packs-56.js','scene-images.js'])vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/'+f,'utf8'),c);
const scenes=c.window.GAKU_SIM_SCENES,questions=c.window.GAKU_SIM_PACKS.flatMap(p=>p.questions).filter(q=>q.scene);
assert.equal(questions.length,30);assert.equal(Object.keys(scenes).length,30);
assert.equal(new Set(Object.values(scenes).map(s=>s.src)).size,23);
for(const q of questions){
 const asset=scenes[q.id];assert.ok(asset,q.id+' missing scene');
 assert.match(asset.src,/^assets\/simulation-scenes\/[a-z-]+\.png$/);assert.ok(asset.alt.length>20);
 const bytes=fs.readFileSync('dist/'+asset.src);
 assert.equal(bytes.subarray(0,8).toString('hex'),'89504e470d0a1a0a');
 assert.ok(bytes.readUInt32BE(16)>=1024&&bytes.readUInt32BE(20)>=768,q.id+' resolution');
}
const html=fs.readFileSync('dist/index.html','utf8');
assert.ok(html.indexOf('prototipe-simulasi/scene-images.js')<html.indexOf('src="simulation-module.js"'));
const engine=fs.readFileSync('dist/prototipe-simulasi/app.js','utf8');
const renderer=engine.slice(engine.indexOf('function sceneIllustration('),engine.indexOf('function sceneIllustration(')+600);
assert.ok(renderer.includes('<img'));assert.ok(!renderer.includes('<svg'));
assert.ok(fs.readFileSync('dist/simulation-module.css','utf8').includes('body.simulation-exam .content'));
console.log('PASS: all 30 scene questions use 23 high-resolution PNGs, mapped by ID with alt text, manifest loads before engine, no inline SVG renderer, full-width exam scope');
