/* Quiz data selection and question construction; no DOM or timers in this module. */
const QUIZ_TYPES={kana:{name:'Kana',symbol:'あ',description:'Pilih huruf, lalu kenali bunyinya.',color:'lavender'},kotoba:{name:'Kotoba',symbol:'言',description:'Kata yang kamu pilih, dalam dua arah.',color:'blue'},kanji:{name:'Kanji',symbol:'漢',description:'Hubungkan bentuk, makna, dan bacaan.',color:'mint'},bunpo:{name:'Bunpo',symbol:'文',description:'Pahami pola lewat kalimat.',color:'pink'},mixed:{name:'Campuran',symbol:'✦',description:'10 soal tiap materi · total 40 soal.',color:'peach'}};
const QUIZ_MODES={kotoba:[['id-jp','Arti → Jepang'],['jp-id','Jepang → arti'],['mixed','Campuran dua arah']],kanji:[['kanji-meaning','Kanji → arti'],['meaning-kanji','Arti → kanji'],['reading-kanji','Bacaan → kanji'],['kanji-reading','Kanji → bacaan']],bunpo:[['cloze','Lengkapi kalimat'],['correct','Kalimat yang benar'],['meaning','Arti / fungsi Bunpo'],['order','Susun kata acak']]};
let quizBunpoBank=null,quizBunpoN4Bank=null;
function quizActiveBunpoBank(){return quizKotobaLevel()==='N4'?quizBunpoN4Bank:quizBunpoBank}
function quizBunpoSubs(){return quizKotobaLevel()==='N4'?(typeof QUIZ_BUNPO_N4_SUBS==='undefined'?[]:QUIZ_BUNPO_N4_SUBS):QUIZ_BUNPO_SUBS}
function quizBunpoCategories(){return typeof bunpoCategories==='function'?bunpoCategories(quizKotobaLevel()):BUNPO_CATEGORIES}
function quizDefaultConfig(){return {type:'kana',script:'Hiragana',mode:'jp-id',reading:'on',letters:[],categories:[],subs:[],pages:[],count:10}}
function quizNorm(s){return String(s).normalize('NFKC').replace(/[\s。、・.!?！？]/g,'').toLowerCase()}
function quizShuffle(items,rng=Math.random){const a=items.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(rng()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a}
function quizUnique(items,key=x=>x){const seen=new Set();return items.filter(e=>{const k=key(e);if(seen.has(k))return false;seen.add(k);return true})}
function quizKanaItems(script='Hiragana'){return Object.entries(KANA_GROUPS).flatMap(([group,g])=>g.rows.flat().filter(Boolean).map(([char,romaji])=>({id:script+':'+char,char:script==='Katakana'?String.fromCharCode(...[...char].map(c=>c.charCodeAt(0)+0x60)):char,romaji,group})))}
// Packs follow kana rows. WA / WO and N share one final Seion pack.
function quizKanaPacks(script='Hiragana'){
 const lookup=new Map(quizKanaItems(script).map(e=>[e.id,e]));
 return Object.entries(KANA_GROUPS).flatMap(([group,g])=>{
  let rows=g.rows.map(row=>row.filter(Boolean));
  if(group==='Seion')rows=[...rows.slice(0,-2),[...rows.at(-2),...rows.at(-1)]];
  return rows.map((row,index)=>{const letters=row.map(([char])=>lookup.get(script+':'+char));return {id:script+':'+group+':'+index,group,letters,ids:letters.map(e=>e.id),kana:letters.map(e=>e.char).join(' '),label:letters.map(e=>e.romaji.toUpperCase()).join(' · ')}})
 })
}
function quizExpandKanaSelection(c){const selected=new Set(c.letters);return quizKanaPacks(c.script).filter(p=>p.ids.some(id=>selected.has(id))).flatMap(p=>p.ids)}
function quizCountLimit(type,available){const max=type==='bunpo'?10:20;return Math.min(max,Math.max(5,Math.ceil((Number(available)||0)/5)*5))}
function quizCountChoices(type,available){if(available<5)return [];return Array.from({length:quizCountLimit(type,available)/5},(_,i)=>(i+1)*5)}
function quizRequestedCount(type,requested,available){return Math.min(quizCountLimit(type,available),Math.max(5,Math.ceil((Number(requested)||5)/5)*5))}
function quizActualCount(type,requested,available){return type==='mixed'?40:Math.min(available,quizRequestedCount(type,requested,available))}
function quizSubKey(e){return e.category+'::'+e.subcategory}
function quizKotobaLevel(){return typeof prefs!=='undefined'?prefs.level:'N5'}
function quizKotobaData(){return typeof kotobaBaseEntries==='function'?kotobaBaseEntries(quizKotobaLevel()):KOTOBA_DATA}
function quizKotobaCategories(){return typeof kotobaCategories==='function'?kotobaCategories(quizKotobaLevel()):KOTOBA_CATEGORIES}
function quizKanjiData(){return typeof kanjiEntries==='function'?kanjiEntries(quizKotobaLevel()).filter(k=>k.source.id!=='custom'&&(k.level!=='N4'||k.scope==='a2')):KANJI_DATA}
function quizKanjiCategories(){return typeof kanjiCategories==='function'?kanjiCategories(quizKotobaLevel()):KANJI_CATEGORIES}
function quizCategories(type){if(type==='kanji')return quizKanjiCategories().map(c=>({...c,count:quizKanjiData().filter(e=>e.category===c.id).length}));if(type==='kotoba')return quizKotobaCategories().map(c=>({...c,count:quizKotobaData().filter(e=>e.category===c.id).length}));return quizBunpoCategories().map(c=>({...c,count:quizBunpoSubs().filter(s=>s.category===c.id).length}))}
function quizSubs(type,categories){if(type==='bunpo')return quizBunpoSubs().filter(s=>categories.includes(s.category)).map(s=>({id:s.id,name:s.name,category:s.category,count:60}));return quizKotobaCategories().filter(c=>categories.includes(c.id)).flatMap(c=>c.subcategories.map(name=>({id:c.id+'::'+name,name,category:c.id,count:quizKotobaData().filter(e=>e.category===c.id&&e.subcategory===name).length}))).filter(s=>s.count>0)}
function quizWordPages(config){return quizSubs('kotoba',config.categories).filter(s=>config.subs.includes(s.id)).flatMap(s=>{const items=quizKotobaData().filter(e=>quizSubKey(e)===s.id).sort((a,b)=>a.order-b.order);const pages=[];for(let i=0;i<items.length;i+=15){const words=items.slice(i,i+15);if(words.length>=5)pages.push({id:s.id+'::'+(i/15+1),sub:s.id,name:s.name,category:s.category,number:i/15+1,items:words})}return pages})}
// Conservative equivalence: avoid offering common synonyms as wrong answers.
const quizMeaningCache=new Map();
const QUIZ_GLOSS_ALIASES=[['tiba','sampai'],['membeli','beli'],['menjual','jual'],['makan','menyantap'],['mendengar','mendengarkan'],['berbicara','bicara'],['melihat','memandang'],['mengatakan','berkata'],['memakai','mengenakan'],['memperbaiki','membetulkan'],['memikirkan','berpikir'],['bagus','baik'],['cantik','indah'],['murah','berharga murah'],['sulit','susah'],['mudah','gampang'],['cepat','lekas'],['lambat','pelan'],['sepi','sunyi'],['tenang','tenteram'],['gembira','senang'],['takut','ketakutan'],['pelajar','siswa','murid'],['karyawan','pegawai'],['bekerja','kerja'],['beristirahat','istirahat'],['hadiah','kado'],['tas','kantong'],['buku tulis','buku catatan'],['telepon seluler','ponsel','hp'],['kamar kecil','toilet','wc'],['kendaraan','alat transportasi'],['biaya','ongkos','tarif'],['terima kasih','berterima kasih']];
function quizGlossKey(s){const key=String(s).normalize('NFKC').toLowerCase().replace(/\([^)]*\)|（[^）]*）/g,'').replace(/[.?!。！？]/g,'').replace(/\s+/g,' ').trim();const group=QUIZ_GLOSS_ALIASES.find(a=>a.includes(key));return group?group[0]:key}
function quizMeaningTokens(s){const raw=String(s);if(!quizMeaningCache.has(raw))quizMeaningCache.set(raw,raw.split(/[,;；／/、|]/).map(quizGlossKey).filter(Boolean));return quizMeaningCache.get(raw)}
function quizKanaSoundKey(s){return ({wo:'o',di:'ji',du:'zu'}[s]||s)}
function quizTypeAvailable(type){return ['N5','N4'].includes(quizKotobaLevel())}
function quizOverlap(a,b){return a.some(x=>b.includes(x))}
function quizReadings(k,kind){return (k[kind]||[]).filter(r=>r&&r!=='—'&&r!=='-'&&r!=='なし').map(r=>r.replace(/\./g,'（')+(r.includes('.')?'）':''))}
function quizReadingKeys(k,kind){return quizReadings(k,kind).map(s=>kanjiToHiragana(s).replace(/[（）\-]/g,''))}
function quizWordLabel(e){return e.jp&&e.kana&&e.jp!==e.kana?e.jp+'（'+e.kana+'）':e.jp}
function quizChoiceQuestion(item,all,mode,type,config){let display,correct,prompt,accept,value,sourceLabel;
 if(type==='kana'){display=item.char;correct=item.romaji;prompt='Huruf ini dibaca apa?';accept=e=>quizKanaSoundKey(e.romaji)!==quizKanaSoundKey(item.romaji);value=e=>e.romaji;sourceLabel=config.script+' · '+KANA_GROUPS[item.group].name}
 if(type==='kotoba'){const reverse=mode==='id-jp';display=reverse?item.meaning:item.jp;correct=reverse?quizWordLabel(item):item.meaning;prompt=reverse?'Pilih kata Jepang yang sesuai.':'Apa arti kata ini?';accept=e=>e.id!==item.id&&!quizOverlap(quizMeaningTokens(e.meaning),quizMeaningTokens(item.meaning))&&quizNorm(e.kana)!==quizNorm(item.kana)&&quizNorm(e.jp)!==quizNorm(item.jp);value=e=>reverse?quizWordLabel(e):e.meaning;sourceLabel=item.subcategory}
 if(type==='kanji'){const readings=quizReadings(item,config.reading);const label=config.reading==='on'?"On’yomi":"Kun’yomi";const reading=mode.includes('reading');if(reading&&!readings.length)return null;
 display=mode==='kanji-meaning'||mode==='kanji-reading'?item.char:mode==='meaning-kanji'?item.meaning:readings.join('・');correct=mode==='kanji-meaning'?item.meaning:mode==='kanji-reading'?readings.join('・'):item.char;
 prompt=mode==='kanji-meaning'?'Apa arti kanji ini?':mode==='meaning-kanji'?'Pilih kanji yang sesuai.':mode==='kanji-reading'?'Pilih '+label+' yang sesuai.':'Pilih kanji dengan '+label+' ini.';
 accept=e=>e.id!==item.id&&(reading?(quizReadings(e,config.reading).length&&!quizOverlap(quizReadingKeys(e,config.reading),quizReadingKeys(item,config.reading))):!quizOverlap(quizMeaningTokens(e.meaning),quizMeaningTokens(item.meaning)));value=e=>mode==='kanji-meaning'?e.meaning:mode==='kanji-reading'?quizReadings(e,config.reading).join('・'):e.char;sourceLabel=quizKanjiCategories().find(c=>c.id===item.category)?.name||'Kanji';if(reading)sourceLabel+=' · '+label}
 const alternatives=[],seen=new Set([quizNorm(correct)]),start=Math.floor(Math.random()*all.length);for(let n=0;n<all.length&&alternatives.length<3;n++){const e=all[(start+n)%all.length];if(!accept(e))continue;const v=value(e),key=quizNorm(v);if(!seen.has(key)){alternatives.push(v);seen.add(key)}}if(alternatives.length<3)return null;
 const options=quizShuffle([correct,...alternatives]);return {id:type+':'+item.id+':'+mode,type,mode,display,prompt,options,answer:options.indexOf(correct),sourceId:item.id,sourceLabel,kana:type==='kotoba'?item.kana:'',explanation:type==='kana'?item.char+' dibaca '+correct+'.':type==='kotoba'?item.jp+'（'+item.kana+'）: '+item.meaning+'.':item.char+' berarti '+item.meaning+'.'+(mode.includes('reading')?' '+(config.reading==='on'?"On’yomi":"Kun’yomi")+': '+quizReadings(item,config.reading).join('・')+'.':'')}
}
function quizSelectedWords(c){return quizUnique(quizWordPages(c).filter(p=>c.pages.includes(p.id)).flatMap(p=>p.items),e=>e.id)}
function quizPool(c){if(!quizTypeAvailable(c.type))return [];if(c.type==='bunpo')return (quizActiveBunpoBank()||[]).filter(q=>q.mode===c.mode&&c.categories.includes(q.category)&&c.subs.includes(quizSubKey(q))).map(q=>({...q,type:'bunpo',sourceLabel:q.subcategory,sourceId:q.caseId}));let items=[],all=[],mode=c.mode;
 if(c.type==='kana'){all=quizKanaItems(c.script);items=all.filter(e=>c.letters.includes(e.id));mode='kana-romaji'}
 if(c.type==='kotoba'){all=quizKotobaData();items=quizSelectedWords(c)}
 if(c.type==='kanji'){all=quizKanjiData();items=all.filter(e=>c.categories.includes(e.category))}
 return items.map((e,i)=>{const m=mode==='mixed'?(i%2?'id-jp':'jp-id'):mode;return quizChoiceQuestion(e,items,m,c.type,c)||quizChoiceQuestion(e,all,m,c.type,c)}).filter(Boolean)
}
function quizMixedPool(){if(!quizTypeAvailable('mixed'))return {kana:[],kanji:[],kotoba:[],bunpo:[]};const kanaConfig={...quizDefaultConfig(),type:'kana'};const kana=quizShuffle([...quizKanaItems('Hiragana'),...quizKanaItems('Katakana')]).map(e=>quizChoiceQuestion(e,quizKanaItems(e.id.startsWith('Katakana')?'Katakana':'Hiragana'),'kana-romaji','kana',{...kanaConfig,script:e.id.startsWith('Katakana')?'Katakana':'Hiragana'})).filter(Boolean);const words=quizShuffle(quizKotobaData()).map((e,i)=>quizChoiceQuestion(e,quizKotobaData(),i%2?'id-jp':'jp-id','kotoba',{})).filter(Boolean);const kanji=quizShuffle(quizKanjiData()).map((e,i)=>quizChoiceQuestion(e,quizKanjiData(),i%2?'meaning-kanji':'kanji-meaning','kanji',{})).filter(Boolean);const bunpo=quizUnique(quizShuffle(quizActiveBunpoBank()||[]),q=>q.caseId).map(q=>({...q,type:'bunpo',sourceId:q.caseId,sourceLabel:q.subcategory}));return {kana,kanji,kotoba:words,bunpo}}
function quizReshuffleQuestion(q){if(q.mode==='order')return {...q,pieces:quizShuffle(q.chunks.slice(1).map((text,i)=>({text,index:i+1}))),picked:[]};const order=quizShuffle(q.options.map((_,i)=>i));return {...q,options:order.map(i=>q.options[i]),answer:order.indexOf(q.answer)}}
function quizMakeDeck(c,pool){if(!quizTypeAvailable(c.type))return [];if(c.type==='mixed'){const groups=quizMixedPool();if(Object.values(groups).some(a=>a.length<10))return [];return quizShuffle(Object.values(groups).flatMap(g=>quizShuffle(g).slice(0,10))).map(quizReshuffleQuestion)}const n=Number(c.count),limit=quizCountLimit(c.type,pool.length);if(!Number.isInteger(n)||n<5||n>limit||n%5!==0||pool.length<5)return [];return quizShuffle(pool).slice(0,Math.min(n,pool.length)).map(quizReshuffleQuestion)}
