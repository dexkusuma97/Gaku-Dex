'use strict';
const assert=require('node:assert/strict'),app=require('./helpers/main-app.cjs'),fs=require('node:fs');
const storage=new Map([['gaku-ui-data',JSON.stringify([{jp:'独自語',rom:'dokujigo',meaning:'kata pribadi'}])]]),a=app(storage),c=a.c;
c.FormData=class{constructor(obj){this.obj=obj}get(k){return this.obj[k]||''}};
c.document.querySelector=s=>s==='.modal'?{focus(){}}:null;
const save=data=>c.submitData({preventDefault(){},target:data});
c.showPage('Tambah data');assert.ok(a.els.get('app').innerHTML.includes('Kotoba'));assert.ok(a.els.get('app').innerHTML.includes('Kanji'));
save({jp:'テスト専用語',rom:'tesuto senyougo',meaning:'uji',level:'N4'});assert.equal(JSON.parse(storage.get('gaku-ui-data')).length,2);assert.ok(c.allKotobaEntries('N4').some(e=>e.jp==='テスト専用語'));assert.ok(!c.allKotobaEntries('N5').some(e=>e.jp==='テスト専用語'));
let records=c.customRecords('kotoba'),id=records[1].customId;save({jp:'テスト専用語',rom:'a',meaning:'a',level:'N4'});assert.equal(c.customRecords('kotoba').length,2);
c.customEdit(id);save({jp:'テスト専用語',rom:'tesuto',meaning:'diubah',level:'N4'});assert.equal(c.customRecords('kotoba')[1].meaning,'diubah');assert.equal(c.customRecords('kotoba')[1].customId,id);
// Legacy stable IDs, cancellation, reload and targeted deletion.
c.customAskDelete('custom-0');c.closeModal();c.customConfirmDelete();assert.equal(c.customRecords('kotoba').length,2);c.customAskDelete('custom-0');c.customConfirmDelete();assert.equal(c.customRecords('kotoba').length,1);assert.equal(c.customRecords('kotoba')[0].customId,id);assert.ok(app(storage).c.allKotobaEntries('N4').some(e=>e.id===id));
// One optional-reading kanji, searchable and readable in N4 default scope.
c.customChooseKind('kanji');save({jp:'龘',meaning:'naga terbang',level:'N4'});assert.equal(c.customRecords('kanji').length,1);const k=c.kanjiEntries('N4').find(k=>k.char==='龘');assert.ok(k);assert.equal(k.on.length,0);assert.ok(c.findKanji('naga','all','all','N4','a2').some(k=>k.char==='龘'));assert.ok(!c.kanjiEntries('N5').some(k=>k.char==='龘'));c.selectLevel('N4');c.showPage('Kanji');c.openKanji(k.id);assert.ok(a.els.get('app').innerHTML.includes('Belum ada contoh kata'));assert.ok(!c.quizKanjiData().some(k=>k.char==='龘'));
c.showPage('Tambah data');c.customEdit(k.id);save({jp:'龘',meaning:'naga terbang',level:'N4',on:'トウ',exampleWord:'龘',exampleKana:'とう',exampleMeaning:'naga',mnemonic:'<img src=x>'});c.selectLevel('N4');c.showPage('Kanji');c.openKanji(k.id);assert.ok(a.els.get('app').innerHTML.includes('&lt;img'));assert.ok(!a.els.get('app').innerHTML.includes('<img src=x>'));
c.showPage('Tambah data');for(const value of [{jp:'食',meaning:'x',level:'N4'},{jp:'森山',meaning:'x',level:'N4'},{jp:'龘',meaning:'x',level:'N5'}]){c.customNew();save(value)}assert.equal(c.customRecords('kanji').length,1);
c.customNew();save({jp:'靐',meaning:'suara petir',level:'N5',exampleWord:'雨',exampleKana:'あめ',exampleMeaning:'hujan'});assert.equal(c.customRecords('kanji').length,1);
// Storage failures never silently drop existing records; corrupt data untouched.
const before=storage.get('gaku-ui-kanji');c.localStorage.setItem=()=>{throw Error('full')};save({jp:'靐',meaning:'suara petir',level:'N5'});assert.equal(storage.get('gaku-ui-kanji'),before);c.localStorage.setItem=(k,v)=>storage.set(k,v);
c.customAskDelete(k.id);storage.set('gaku-ui-kanji',JSON.stringify([...JSON.parse(before),{jp:'靐',meaning:'petir',level:'N5',on:[],kun:[],examples:[],customId:'new-row'}]));c.customConfirmDelete();assert.equal(c.customRecords('kanji').length,1);assert.equal(c.customRecords('kanji')[0].jp,'靐');storage.set('gaku-ui-kanji','broken');save({jp:'龘',meaning:'naga',level:'N4'});assert.equal(storage.get('gaku-ui-kanji'),'broken');
// Both History filters and every Add Data select get the app's themed picker.
const picker=fs.readFileSync('dist/learning-picker.js','utf8');assert.ok(picker.includes('.history-filters select'));assert.ok(picker.includes('.custom-data-page select'));assert.ok(fs.readFileSync('dist/history-ui.js','utf8').includes('aria-label="Jenis aktivitas"'));
console.log('PASS: Kotoba/Kanji CRUD, stable legacy IDs, duplicates, levels, optional readings, examples, escaping, cancellation, storage safety and themed picker scope');
