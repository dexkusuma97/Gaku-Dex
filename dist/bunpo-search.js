/* Shared kana/romaji normalization is loaded from kanji-search.js. */
const BUNPO_PAGE_SIZE=12;
function bunpoNormalize(value){return kanjiNormalize(value).replace(/[~〜～＋+]/g,'')}
const BUNPO_INDEX=[...BUNPO_DATA,...BUNPO_N4_DATA].map(entry=>{
  const category=bunpoCategories(entry.level).find(c=>c.id===entry.category);
  const primary=[entry.title,entry.kana,entry.romaji,entry.meaning,...(entry.searchTerms||[])].map(bunpoNormalize);
  const fields=[...primary,...[entry.explanation,entry.note,entry.subcategory,category.name,...entry.patterns,...entry.examples.flatMap(e=>[e.jp,e.kana,e.meaning]),...(entry.table?.rows.flat()||[])].map(bunpoNormalize)];
  return {entry,primary,fields};
});
function findBunpo(query='',category='all',subcategory='all',savedOnly=false,savedIds=[],level='N5'){
  const q=bunpoNormalize(String(query).slice(0,100));
  return BUNPO_INDEX.filter(({entry:e})=>e.level===level&&(category==='all'||e.category===category)&&(subcategory==='all'||e.subcategory===subcategory)&&(!savedOnly||savedIds.includes(e.id)))
    .map(({entry,primary,fields})=>({entry,rank:!q?0:primary.some(f=>f===q)?0:primary.some(f=>f.startsWith(q))?1:primary.some(f=>f.includes(q))?2:fields.some(f=>f.includes(q))?3:9}))
    .filter(x=>x.rank<9).sort((a,b)=>a.rank-b.rank||a.entry.order-b.entry.order).map(x=>x.entry);
}
function bunpoPageSlice(items,page=1){const totalPages=Math.max(1,Math.ceil(items.length/BUNPO_PAGE_SIZE));const current=Math.min(totalPages,Math.max(1,Math.floor(Number(page)||1)));return {items:items.slice((current-1)*BUNPO_PAGE_SIZE,current*BUNPO_PAGE_SIZE),page:current,totalPages,total:items.length}}
function bunpoSubcategories(category='all',level=(typeof prefs!=='undefined'?prefs.level:'N5')){return [...new Set(bunpoEntries(level).filter(e=>category==='all'||e.category===category).map(e=>e.subcategory))]}
function bunpoExampleRomaji(kana){return kana.split(/(\s+)/).map((part,i,parts)=>part==='は'&&/^(を|が|の|に|も|は|で|と|から|まで)(?:[。！？、]|$)/.test(parts.slice(i+1).find(x=>!/^\s*$/.test(x))||'')?'ha':({'は':'wa','へ':'e','を':'o'}[part]||kanjiRomanize(part))).join('').replace(/(\S)(desu|deshita)(?=[。！？、\s]|$)/g,'$1 $2').replace(/。/g,'. ').replace(/、/g,', ').replace(/！/g,'! ').replace(/？/g,'? ').trim()}
