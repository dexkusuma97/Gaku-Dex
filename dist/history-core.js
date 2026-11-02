/* Local learning history. Read old records without rewriting them on page open. */
(function(g){
'use strict';
const KEY='gaku-ui-history',LIMIT=200;let error='',sequence=0;
const object=v=>v&&typeof v==='object'&&!Array.isArray(v);
const stamp=v=>typeof v==='string'&&v.trim()&&Number.isFinite(Date.parse(v))?Date.parse(v):0;
function hash(s){let n=2166136261;for(let i=0;i<s.length;i++){n^=s.charCodeAt(i);n=Math.imul(n,16777619)}return (n>>>0).toString(36)}
function normalize(rows){const used=new Set(),counts=new Map();return rows.filter(object).map(row=>{const copy={...row},base=/^[a-zA-Z0-9:_-]{1,120}$/.test(row.historyId||'')?row.historyId:'h-'+hash(JSON.stringify(row));let id=base,n=counts.get(base)||0;while(used.has(id)){n++;id=base+'-'+n}counts.set(base,n);used.add(id);copy.historyId=id;return copy}).sort((a,b)=>stamp(b.time)-stamp(a.time))}
function load(){try{const raw=g.localStorage.getItem(KEY);if(raw===null||raw===undefined||raw===''){error='';return []}const rows=JSON.parse(raw);if(!Array.isArray(rows))throw Error('shape');error='';return normalize(rows)}catch{error='read';return null}}
function read(){return load()||[]}
function write(rows){try{g.localStorage.setItem(KEY,JSON.stringify(rows));error=''}catch{error='write';return false}try{api.onChange?.(rows)}catch{}return true}
function eventKey(r){if(typeof r.eventId==='string'&&r.eventId)return r.eventId;if(r.quiz?.id)return 'quiz:'+r.quiz.id;if(r.buku?.attempt)return 'buku:'+r.buku.attempt;if(r.kaiwa?.attempt)return 'kaiwa:'+r.kaiwa.attempt;if(r.simulation&&r.id)return 'simulasi:'+r.id;return null}
function add(record){if(!object(record))return false;const rows=load();if(!rows)return false;const key=eventKey(record);if(key&&rows.some(r=>eventKey(r)===key))return true;const row={...record,historyId:'h-new-'+(g.crypto?.randomUUID?.()||Date.now().toString(36)+'-'+(++sequence)+'-'+Math.random().toString(36).slice(2)),time:stamp(record.time)?record.time:new Date().toISOString()};return write(normalize([row,...rows]).slice(0,LIMIT))}
function removeMany(ids){const rows=load();if(!rows)return false;const wanted=new Set(ids);return write(rows.filter(r=>!wanted.has(r.historyId)))}
function remove(id){const rows=load();if(!rows)return false;if(!rows.some(r=>r.historyId===id)){error='missing';return false}return write(rows.filter(r=>r.historyId!==id))}
function kind(r){if(r.simulation||r.type==='Simulasi')return 'simulation';if(r.quiz||/^Quiz\b/i.test(r.type||''))return 'quiz';if(r.kaiwa||r.type==='Kaiwa')return 'kaiwa';if(r.buku||r.type==='Buku'||r.type==='Cerita')return 'book';if(r.type==='Tambah data')return 'data';return 'other'}
function level(r){const explicit=r.level||r.quiz?.level||r.kaiwa?.level||r.simulation?.level;if(typeof explicit==='string'&&/^(?:N[1-5]|A[12])(?:[–—-]N[1-5])?(?:\s*[·/].{0,30}|\s+awal)?$/.test(explicit))return explicit;if(r.simulation?.exam==='jlpt')return 'N5';if(r.simulation?.exam==='jft')return 'A1';if(r.buku?.id){const b=g.GAKU_CERITA_DATA?.find(b=>b.id===r.buku.id);if(b?.level)return b.level}const matches=String(r.detail||'').match(/\b(?:N[1-5]|A[12])\b/g)||[];return [...new Set(matches)].join('–')||'unknown'}
function matchesLevel(r,value){const l=level(r);return value==='all'||(value==='unknown'?l==='unknown':(l.match(/\b(?:N[1-5]|A[12])\b/g)||[]).includes(value))}
function score(r){const v=r.quiz||r.simulation||r.buku;if(!v)return null;const correct=v.correct??v.score,total=v.total;return Number.isInteger(correct)&&Number.isInteger(total)&&total>0&&correct>=0&&correct<=total?{correct,total}:null}
const api={KEY,LIMIT,read,add,remove,removeMany,normalize,eventKey,kind,level,matchesLevel,score,stamp,getError:()=>error,onChange:null};g.GakuHistory=api;
})(window);
