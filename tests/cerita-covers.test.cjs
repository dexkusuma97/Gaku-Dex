'use strict';
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),crypto=require('node:crypto');
const c={document:{getElementById:()=>null},localStorage:{getItem:()=>null,setItem(){}},addEventListener(){},clearTimeout(){},setTimeout(){},scrollTo(){}};c.window=c;vm.createContext(c);
for(const name of ['data','dongeng','tambahan','bersambung','nitamono','isold','amy','render'])vm.runInContext(fs.readFileSync('dist/cerita-'+name+'.js','utf8'),c);
const amy=c.GAKU_CERITA_DATA.find(b=>b.id==='amy'),api=c.GakuBuku,manifest=JSON.parse(fs.readFileSync('data/AMY_COVERS_20261103.json'));
assert.equal(amy.bab.length,5);assert.equal(manifest.assets.length,5);assert.equal(new Set(amy.bab.map(p=>p.cover)).size,5);assert.equal(new Set(manifest.assets.map(p=>p.sha256)).size,5);
for(const [i,part] of amy.bab.entries()){
 const row=manifest.assets[i],bytes=fs.readFileSync('dist/'+part.cover);assert.equal(row.file,'dist/'+part.cover);assert.equal(bytes.toString('ascii',8,12),'WEBP');assert.ok(bytes.length>20000&&bytes.length<=120*1024);assert.equal(crypto.createHash('sha256').update(bytes).digest('hex'),row.sha256);assert.equal(row.width,600);assert.equal(row.height,900);assert.ok(part.coverAlt.length>30);
 api.detail('amy',true,i);let html=api.screen();assert.ok(html.includes('src="'+part.cover+'"'));assert.ok(html.includes('alt="'+part.coverAlt+'"'));assert.ok(html.includes('Baca bagian '+(i+1)));assert.ok(html.includes('bk-cover-part'));assert.ok(!html.includes('bk-cover-title'),'do not obscure chapter art with the old vertical title strip');
 api.read(i);api.restore({id:'amy',view:'detail',chapter:i,origin:'home'});assert.ok(api.screen().includes('src="'+part.cover+'"'),'back/restore must use selected chapter cover');
}
api.reset();let html=api.screen();for(const part of amy.bab)assert.ok(html.includes('src="'+part.cover+'"'));
api.list('amy');html=api.screen();assert.equal((html.match(/bk-cover-part/g)||[]).length,5);assert.equal((html.match(/data-entry-chapter=/g)||[]).length,5);
api.detail('kasa');html=api.screen();assert.ok(html.includes('cover-kasa.webp'));assert.ok(html.includes('bk-cover-title'),'legacy book styling retained');
const cover=amy.bab[2].cover;amy.bab[2].cover='';api.detail('amy',true,2);assert.ok(api.screen().includes('bk-cover-fallback'));assert.ok(!api.screen().includes('src="undefined"'));amy.bab[2].cover=cover;
const alt=amy.bab[0].coverAlt;amy.bab[0].coverAlt='<script>alert(1)</script>';api.detail('amy',true,0);assert.ok(api.screen().includes('&lt;script&gt;'));assert.ok(!api.screen().includes('<script>'));amy.bab[0].coverAlt=alt;
console.log('PASS: five distinct optimized color covers, per-part shelf/list/detail and Back/restore mapping, unobscured art, descriptive/escaped alt text, fallback and old book rendering.');
