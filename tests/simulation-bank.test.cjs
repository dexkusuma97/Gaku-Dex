/* Content contract checks: independent of UI, for the local draft bank. */
const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const c={window:{}};vm.createContext(c);for(const f of ['bank-packs-12.js','bank-packs-34.js','bank-packs-56.js'])vm.runInContext(fs.readFileSync('dist/prototipe-simulasi/'+f,'utf8'),c);
const packs=c.window.GAKU_SIM_PACKS,ids=new Set(),seen=new Map(),rows=[];
const norm=s=>String(s).normalize('NFKC').replace(/<\/?u>/g,'').replace(/[\s。、！？!?「」『』：:（）()]/g,'').toLowerCase();
assert.equal(packs.length,12);assert.equal(new Set(packs.map(p=>p.id)).size,12);
for(const p of packs){const counts=p.exam==='jlpt'?[21,26,24]:[13,12,13,12],total=counts.reduce((a,b)=>a+b,0);assert.ok(['jlpt','jft'].includes(p.exam));assert.ok([1,2,3,4,5,6].includes(p.number));assert.equal(p.status,'draft');assert.equal(p.level,p.exam==='jlpt'?'N5':'A1');assert.equal(p.questions.length,total);assert.deepEqual(counts,counts.map((_,i)=>p.questions.filter(q=>q.section===i).length));let prev=0;const answers=[0,0,0,0];
 for(const [i,q] of p.questions.entries()){const prefix=p.exam==='jlpt'?'n5':'jft-a1';assert.equal(q.id,`${prefix}-p${String(p.number).padStart(2,'0')}-${String(i+1).padStart(3,'0')}`);assert.ok(!ids.has(q.id),q.id);ids.add(q.id);assert.ok(Number.isInteger(q.section)&&q.section>=prev&&q.section<counts.length,q.id+' orderedsection');prev=q.section;for(const key of ['kind','instruction','idn','jp'])assert.ok(typeof q[key]==='string'&&q[key].trim(),q.id+' '+key);assert.ok(q.options.length===3||q.options.length===4,q.id+' options');if(q.section!==(p.exam==='jlpt'?2:2))assert.equal(q.options.length,4,q.id+' fouroptions');assert.equal(new Set(q.options.map(norm)).size,q.options.length,q.id+' uniqueoptions');assert.ok(q.options.every(o=>typeof o==='string'&&o.trim()&&!/<[^>]*>/.test(o)),q.id+' textoptions');assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,q.id+' answer');answers[q.answer]++;
 for(const field of ['why','explanation','rationale','review'])assert.ok(!(field in q),q.id+' noexplanation');assert.ok(!/<(?!\/?u>)[^>]*>/i.test(q.jp),q.id+' html');assert.equal((q.jp.match(/<u>/g)||[]).length,(q.jp.match(/<\/u>/g)||[]).length,q.id+' underline');assert.ok(!/TODO|placeholder/i.test(q.jp));
 if(q.section===2){assert.ok(typeof q.audio==='string'&&q.audio.trim(),q.id+' audio');assert.ok(typeof q.transcript==='string'&&q.transcript.trim(),q.id+' transcript');assert.equal(norm(q.audio),norm(q.transcript),q.id+' sameaudio');}if(p.exam==='jft'&&q.section===3)assert.ok(q.passage?.trim(),q.id+' readingpassage');if(q.scene)assert.ok(['greeting','thanks','apology','request','farewell'].includes(q.scene.type),q.id+' scene');
 const fp=norm(q.jp)+'|'+norm(q.passage||'')+'|'+norm(q.audio||'')+'|'+q.options.map(norm).sort().join('|');if(seen.has(fp))throw Error('Duplicate complete item: '+seen.get(fp)+' / '+q.id);seen.set(fp,q.id);
 }
 if(p.exam==='jlpt'){const groups=[];for(const q of p.questions){const last=groups.at(-1);if(last&&last.kind===q.kind&&last.section===q.section)last.n++;else groups.push({kind:q.kind,section:q.section,n:1});}assert.deepEqual(groups.map(g=>g.n),[7,5,6,3,12,4,4,3,2,1,7,6,5,6],p.id+' subtypeblueprint');}
 assert.ok(Math.max(...answers)<=Math.ceil(total*.55),p.id+' skewedanswerkey');rows.push({id:p.id,total,counts,answers});
}
const byId=id=>packs.flatMap(p=>p.questions).find(q=>q.id===id);
assert.equal(byId('n5-p03-037').options[byId('n5-p03-037').answer],'かいて');
assert.ok(byId('n5-p03-037').jp.startsWith('あなたの なまえを'));
assert.ok(byId('jft-a1-p04-033').jp.includes('きょう'));
assert.ok(!byId('jft-a1-p02-015').options.includes('はるです'));
assert.ok(byId('n5-p01-056').jp.includes('あめが ふっていない'));
assert.equal(ids.size,726);console.table(rows);console.log('PASS: 726 unique items, 12 packs, section counts, IDs, option/key integrity, listening scripts, safe text, draft labels, no explanation fields');
