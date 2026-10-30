const KOTOBA_PAGE_SIZE=15;
Object.assign(KANA_ROMAJI,{'ふぁ':'fa','ふぃ':'fi','ふぇ':'fe','ふぉ':'fo','てぃ':'ti','でぃ':'di','とぅ':'tu','どぅ':'du','うぃ':'wi','うぇ':'we','うぉ':'wo','ゔ':'vu','ゔぁ':'va','ゔぃ':'vi','ゔぇ':'ve','ゔぉ':'vo','しぇ':'she','じぇ':'je','ちぇ':'che','つぁ':'tsa','つぃ':'tsi','つぇ':'tse','つぉ':'tso'});
let kotobaSearchIndex={};
function kotobaBaseEntries(level='N5'){return level==='N4'?(typeof KOTOBA_N4_DATA!=='undefined'?KOTOBA_N4_DATA:[]):KOTOBA_DATA}
function kotobaCategories(level='N5'){return level==='N4'?(typeof KOTOBA_N4_CATEGORIES!=='undefined'?KOTOBA_N4_CATEGORIES:[]):KOTOBA_CATEGORIES}
function kotobaNormalize(s){return kanjiNormalize(s).replace(/[~〜～＋+]/g,'')}
function kotobaWritten(s){return kanjiToHiragana(String(s).normalize('NFKC')).replace(/[\s、。.,!?！？，・()（）「」『』~〜～]/g,'').toLowerCase()}
function kotobaIndexEntry(entry){return {entry,primary:[entry.jp,entry.kana,entry.romaji,...(entry.aliases||[]),...(entry.readings||[]),entry.meaning].map(kotobaNormalize),secondary:[entry.note||'',entry.polite?.jp||'',entry.polite?.kana||''].map(kotobaNormalize)}}
function getKotobaSearchIndex(level='N5'){return kotobaSearchIndex[level]||(kotobaSearchIndex[level]=kotobaBaseEntries(level).map(kotobaIndexEntry))}
function kotobaCustomEntries(level='N5'){const used=new Set(kotobaBaseEntries(level).flatMap(e=>[e.jp,...e.aliases]).map(kotobaWritten));return customData.flatMap((e,i)=>{if((e.level||'N5')!==level)return [];const written=kotobaWritten(e.jp||'');if(!written||used.has(written))return [];used.add(written);return [{id:'custom-'+i,jp:e.jp,kana:e.kana||'',romaji:e.rom||'',meaning:e.meaning,category:'custom',subcategory:'Buatanmu',kind:'custom',scope:'Buatanmu',order:kotobaBaseEntries(level).length+i+1,sources:[{id:'custom'}],aliases:[],readings:e.kana?[e.kana]:[],note:'Data ini kamu tambahkan di perangkat ini. Sinkronisasi akun belum aktif.',example:e.example||null}]})}
function allKotobaEntries(level='N5'){return [...kotobaBaseEntries(level),...kotobaCustomEntries(level)]}
function findKotoba(query='',category='all',sub='all',source='all',savedOnly=false,savedIds=[],level='N5'){

 const q=kotobaNormalize(String(query).slice(0,100));const exact=kotobaWritten(query);
 return [...getKotobaSearchIndex(level),...kotobaCustomEntries(level).map(kotobaIndexEntry)]
 .filter(({entry:e})=>(category==='all'||e.category===category)&&(sub==='all'||e.subcategory===sub)&&(source==='all'||e.sources.some(s=>String(s.id)===String(source)))&&(!savedOnly||savedIds.includes(e.id)))
 .map(({entry,primary,secondary})=>({entry,rank:!q?0:kotobaWritten(entry.jp)===exact?0:primary.some(f=>f===q)?1:primary.some(f=>f.startsWith(q))?2:primary.some(f=>f.includes(q))?3:secondary.some(f=>f.includes(q))?4:9}))
 .filter(x=>x.rank<9).sort((a,b)=>a.rank-b.rank||a.entry.order-b.entry.order).map(x=>x.entry)
}
function kotobaPageSlice(items,page=1){const totalPages=Math.max(1,Math.ceil(items.length/KOTOBA_PAGE_SIZE)),current=Math.min(totalPages,Math.max(1,Math.floor(Number(page)||1)));return {items:items.slice((current-1)*KOTOBA_PAGE_SIZE,current*KOTOBA_PAGE_SIZE),page:current,totalPages,total:items.length}}
function kotobaSubcategories(category='all',level='N5'){
 const present=new Set(allKotobaEntries(level).filter(e=>category==='all'||e.category===category).map(e=>e.subcategory));
 const ordered=kotobaCategories(level).filter(c=>category==='all'||c.id===category).flatMap(c=>c.subcategories||[]);
 return [...new Set([...ordered,...present])].filter(s=>present.has(s))
}
function kotobaFilterCounts(category='all',level='N5'){const categories={},subcategories={};for(const e of allKotobaEntries(level)){categories[e.category]=(categories[e.category]||0)+1;if(category==='all'||e.category===category)subcategories[e.subcategory]=(subcategories[e.subcategory]||0)+1}return {categories,subcategories}}

function kotobaHasSpelling(jp,level='N5'){const key=kotobaWritten(jp);return allKotobaEntries(level).some(e=>[e.jp,...e.aliases].some(w=>kotobaWritten(w)===key))}
