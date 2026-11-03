'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const c={document:{getElementById:()=>null},localStorage:{getItem:()=>null,setItem(){}},addEventListener(){},clearTimeout(){},setTimeout(){},scrollTo(){}};c.window=c;vm.createContext(c);
for(const name of ['data','dongeng','tambahan','bersambung','nitamono','isold','amy','render'])vm.runInContext(fs.readFileSync('dist/cerita-'+name+'.js','utf8'),c);
const nene=c.GAKU_CERITA_DATA.find(b=>b.id==='nene'),api=c.GakuBuku,manifest=JSON.parse(fs.readFileSync('data/NENE_COVERS_20261103.json'));
assert.equal(nene.bab.length,6);assert.equal(manifest.assets.length,6);assert.equal(new Set(nene.bab.map(p=>p.cover)).size,6);assert.equal(new Set(manifest.assets.map(p=>p.sha256)).size,6);
for(const [i,part] of nene.bab.entries()){
 const row=manifest.assets[i],bytes=fs.readFileSync('dist/'+part.cover);assert.equal(row.file,'dist/'+part.cover);assert.equal(bytes.toString('ascii',8,12),'WEBP');assert.ok(bytes.length>20000&&bytes.length<=120*1024);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),row.sha256);assert.equal(row.width,600);assert.equal(row.height,900);assert.ok(part.coverAlt.length>30);
 api.detail('nene',true,i);let html=api.screen();assert.ok(html.includes('src="'+part.cover+'"'));assert.ok(html.includes('alt="'+part.coverAlt+'"'));assert.ok(html.includes('Baca bagian '+(i+1)));assert.ok(html.includes('bk-cover-part'));assert.ok(!html.includes('bk-cover-title'),'do not obscure chapter art with the old vertical title strip');
 api.read(i);api.restore({id:'nene',view:'detail',chapter:i,origin:'home'});assert.ok(api.screen().includes('src="'+part.cover+'"'),'back/restore must use selected chapter cover');
}
api.reset();let html=api.screen();for(const part of nene.bab)assert.ok(html.includes('src="'+part.cover+'"'));
api.list('nene');html=api.screen();assert.equal((html.match(/bk-cover-part/g)||[]).length,6);assert.equal((html.match(/data-entry-chapter=/g)||[]).length,6);
api.detail('kasa');html=api.screen();assert.ok(html.includes('cover-kasa.webp'));assert.ok(html.includes('bk-cover-title'),'legacy book styling retained');
const cover=nene.bab[2].cover;nene.bab[2].cover='';api.detail('nene',true,2);assert.ok(api.screen().includes('src="assets/cerita/cover-nene.webp"'));assert.ok(!api.screen().includes('src="undefined"'));nene.bab[2].cover=cover;
const alt=nene.bab[0].coverAlt;nene.bab[0].coverAlt='<script>alert(1)</script>';api.detail('nene',true,0);assert.ok(api.screen().includes('&lt;script&gt;'));assert.ok(!api.screen().includes('<script>'));nene.bab[0].coverAlt=alt;
console.log('PASS: six distinct optimized color covers, per-part shelf/list/detail and Back/restore mapping, unobscured art, descriptive/escaped alt text, fallback and old book rendering.');
