const summaryIllustrations = {
 "2:0": {
  "file": "bab02-kore-sore-are.svg",
  "caption": "Benda dekat saya, dekat kamu, atau jauh dari kita."
 },
 "3:0": {
  "file": "bab03-koko-soko-asoko.svg",
  "caption": "Denah dari atas: posisi tempat mengikuti sudut pandang pembicara."
 },
 "10:2": {
  "file": "bab10-posisi.svg",
  "caption": "Sebelas posisi terhadap kotak, termasuk luar, kanan, kiri, dekat, dan di antara dua benda. Sisi depan kotak menghadap pembaca."
 },
 "11:1": {
  "file": "bab11-satuan-hitung.svg",
  "caption": "Hitungan umum ひとつ sampai とお, lalu satuan orang, lembar, kendaraan/mesin, dan benda kecil. Satu/dua orang dibaca ひとり／ふたり."
 },
 "17:5": {
  "file": "bab17-made-madeni.svg",
  "caption": "までに adalah tenggat: selesai paling lambat saat batas. まで menunjukkan durasi sampai batas."
 },
 "18:3": {
  "file": "bab18-34-mae-ato.svg",
  "caption": "まえに: sebelum kejadian. あとで: sesudah kejadian."
 },
 "24:0": {
  "file": "bab24-memberi-menerima.svg",
  "caption": "あげます: saya memberi A. くれます: A memberi saya/pihak saya. もらいます: saya menerima dari A; fokus pada penerima."
 },
 "30:1": {
  "file": "bab29-30-teiru-vs-tearu.svg",
  "caption": "Jendela yang sama: あく (terbuka) ↔ あける (membuka). Contoh lain: われる (pecah) ↔ わる (memecahkan). Kata あく／われる tidak menyebut pelaku; tidak selalu berarti terjadi sendiri."
 },
 "34:1": {
  "file": "bab18-34-mae-ato.svg",
  "caption": "まえに: sebelum kejadian. あとで: sesudah kejadian."
 },
 "37:1": {
  "file": "bab37-pasif.svg",
  "caption": "Guru memuji saya. Kalimat pasif menceritakan kejadian dari sisi saya yang menerima pujian."
 },
 "46:0": {
  "file": "bab46-tokoro.svg",
  "caption": "ところ menandai titik tepat sebelum, sedang, atau sesudah kegiatan. たばかり menyatakan baru saja menurut perasaan pembicara."
 },
 "48:3": {
  "file": "bab48-kausatif.svg",
  "caption": "いかせます bisa berarti menyuruh atau mengizinkan pergi, sesuai situasi. いかせてください adalah permintaan izin: izinkan saya pergi."
 },
 "49:0": {
  "file": "bab49-50-hormat-merendah.svg",
  "caption": "いらっしゃいます menghormati tindakan orang lain. まいります merendahkan cara menyebut tindakan pihak sendiri."
 },
 "50:0": {
  "file": "bab49-50-hormat-merendah.svg",
  "caption": "Tangga hanya gambaran sikap berbahasa. まいります digunakan untuk pergi atau datang dengan sopan merendah."
 },
 "7:2": {
  "file": "bab24-memberi-menerima.svg",
  "caption": "あげます: saya memberi A. くれます: A memberi saya/pihak saya. もらいます: saya menerima dari A; fokus pada penerima."
 }
};
function summaryIllustration(ch,index){const a=summaryIllustrations[ch+':'+index];return a?'<figure class="summary-grammar-illustration"><img src="assets/grammar/'+a.file+'" alt="'+esc(a.caption)+'" loading="lazy" decoding="async"><figcaption>'+esc(a.caption)+'</figcaption><a class="summary-illustration-zoom" href="assets/grammar/'+a.file+'" target="_blank" rel="noopener">Perbesar gambar ↗</a></figure>':''}
let rangkumanState={helpReturn:false,view:'library',section:'bunpo',range:1,q:'',chapter:1,wordQuery:'',wordPage:1,book:1,bookPage:1,zoom:1,studyPattern:0,studyStage:0};
const rangkumanCache=new Map(),rangkumanPending=new Map(),rangkumanErrors=new Map(),rangkumanAnswers=new Map();
function readSummaryStorage(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback}catch{return fallback}}
let rangkumanSaved=readSummaryStorage('gaku-rangkuman-saved',[]),rangkumanBookPages=readSummaryStorage('gaku-minna-pages',{});
if(!Array.isArray(rangkumanSaved))rangkumanSaved=[];if(!rangkumanBookPages||typeof rangkumanBookPages!=='object')rangkumanBookPages={};
let summaryIntroSeen=readSummaryStorage('gaku-summary-intro-v1',false)===true,summaryKanji=readSummaryStorage('gaku-summary-kanji',false)===true;
let rangkumanRomaji=readSummaryStorage('gaku-summary-romaji',true)!==false;
function getRangkumanRoute(){return {...rangkumanState}}
function resetRangkumanRoute(){rangkumanState={helpReturn:false,view:'library',section:'bunpo',range:1,q:'',chapter:1,wordQuery:'',wordPage:1,book:1,bookPage:1,zoom:1,studyPattern:0,studyStage:0}}
function summaryInteger(v,min,max){return Math.min(max,Math.max(min,Math.floor(Number(v)||min)))}
function restoreRangkumanRoute(s){resetRangkumanRoute();if(!s)return;rangkumanState.helpReturn=s.helpReturn===true;rangkumanState.section=['bunpo','kotoba','books'].includes(s.section)?s.section:'bunpo';rangkumanState.view=['chapter','reader','intro'].includes(s.view)?s.view:'library';rangkumanState.range=[1,11,21,31,41].includes(s.range)?s.range:1;rangkumanState.q=typeof s.q==='string'?s.q.slice(0,80):'';rangkumanState.chapter=summaryInteger(s.chapter,1,50);rangkumanState.wordQuery=typeof s.wordQuery==='string'?s.wordQuery.slice(0,80):'';rangkumanState.wordPage=summaryInteger(s.wordPage,1,100);rangkumanState.book=RANGKUMAN_BOOKS.some(b=>b.id===Number(s.book))?Number(s.book):RANGKUMAN_BOOKS[0].id;rangkumanState.bookPage=summaryInteger(s.bookPage,1,RANGKUMAN_BOOKS.find(b=>b.id===rangkumanState.book).pages);rangkumanState.zoom=Math.min(3,Math.max(1,Number(s.zoom)||1));rangkumanState.studyPattern=summaryInteger(s.studyPattern,0,129);rangkumanState.studyStage=summaryInteger(s.studyStage,0,2)}
function rememberRangkuman(){if(page==='Rangkuman')history.replaceState(appRoute(),'')}
function summaryLibraryResults(q='',range=1){const term=kanjiNormalize(q);return RANGKUMAN_INDEX.filter(c=>term?kanjiNormalize(c.id+' '+c.title+' '+c.goal).includes(term):c.id>=range&&c.id<range+10)}
function summaryWordResults(chapter,q=''){const term=kanjiNormalize(q);return chapter.vocab.filter(e=>!term||[e.jp,e.kana,e.meaning,e.primaryMeaning||'',summaryWordRomaji(e)].some(s=>kanjiNormalize(s).includes(term)))}
function summaryWordSlice(words,p){const totalPages=Math.max(1,Math.ceil(words.length/15)),page=summaryInteger(p,1,totalPages);return {page,totalPages,total:words.length,items:words.slice((page-1)*15,page*15)}}
function rangkumanSetSection(section){rangkumanState.section=section;rangkumanState.view='library';rememberRangkuman();render()}
function rangkumanSetRange(n){rangkumanState.range=n;rememberRangkuman();render()}
function rangkumanSearch(value){rangkumanState.q=value.slice(0,80);rememberRangkuman();document.getElementById('summary-chapters').innerHTML=summaryChapterCards()}
async function loadRangkumanChapter(n){
 const start=Math.floor((n-1)/10)*10+1;if(rangkumanCache.has(n))return rangkumanCache.get(n);
 if(rangkumanPending.has(start))return rangkumanPending.get(start);
 const task=(async()=>{try{rangkumanErrors.delete(start);const response=await fetch('assets/rangkuman/chapters-'+String(start).padStart(2,'0')+'-'+String(start+9).padStart(2,'0')+'.json');if(!response.ok)throw Error('chapter download');const data=await response.json();if(!Array.isArray(data)||data.length!==10)throw Error('chapter data');for(const c of data)rangkumanCache.set(c.id,c);return rangkumanCache.get(n)}catch(e){rangkumanErrors.set(start,true);return null}finally{rangkumanPending.delete(start);if(page==='Rangkuman'&&rangkumanState.view==='chapter'&&Math.floor((rangkumanState.chapter-1)/10)*10+1===start)render()}})();
 rangkumanPending.set(start,task);return task
}
function openSummaryChapter(n,section=rangkumanState.section,replace=false){rangkumanState.chapter=summaryInteger(n,1,50);rangkumanState.section=section==='kotoba'?'kotoba':'bunpo';rangkumanState.helpReturn=false;rangkumanState.view=!summaryIntroSeen&&rangkumanState.section==='bunpo'?'intro':'chapter';rangkumanState.wordPage=1;rangkumanState.wordQuery='';rangkumanState.studyPattern=0;rangkumanState.studyStage=0;if(replace)rememberRangkuman();else pushRoute();updateScreen()}
function summaryChapterSection(section){rangkumanState.section=section;if(section==='bunpo'&&!summaryIntroSeen){rangkumanState.view='intro';rangkumanState.helpReturn=false}rememberRangkuman();render()}
function summaryToggle(){const n=rangkumanState.chapter,next=rangkumanSaved.includes(n)?rangkumanSaved.filter(x=>x!==n):[...rangkumanSaved,n];try{localStorage.setItem('gaku-rangkuman-saved',JSON.stringify(next))}catch{toast('Belum bisa menyimpan. Periksa penyimpanan browser.');return}rangkumanSaved=next;render()}
function summaryToggleRomaji(){rangkumanRomaji=!rangkumanRomaji;try{localStorage.setItem('gaku-summary-romaji',JSON.stringify(rangkumanRomaji))}catch{}render()}
function summaryWordQuery(value){rangkumanState.wordQuery=value.slice(0,80);rangkumanState.wordPage=1;rememberRangkuman();document.getElementById('summary-word-results').innerHTML=summaryWordHTML(rangkumanCache.get(rangkumanState.chapter))}
function summaryWordPage(n){rangkumanState.wordPage=n;rememberRangkuman();document.getElementById('summary-word-results').innerHTML=summaryWordHTML(rangkumanCache.get(rangkumanState.chapter));document.getElementById('summary-word-results').scrollIntoView({block:'start',behavior:'instant'})}
function summarySpeak(index){const c=rangkumanCache.get(rangkumanState.chapter),e=c?.vocab[index];if(e)speak(e.kana.replace(/[～〜]/g,''))}
function summaryCheck(index){const c=rangkumanCache.get(rangkumanState.chapter);if(!c)return;rangkumanAnswers.set(c.id,index);document.getElementById('summary-check').innerHTML=summaryCheckHTML(c)}
function summaryNavigation(c){return '<div class="summary-chapter-nav">'+(c.id>1?'<button onclick="openSummaryChapter('+(c.id-1)+',rangkumanState.section,true)">‹ Bab '+(c.id-1)+'</button>':'<span></span>')+(c.id<50?'<button onclick="openSummaryChapter('+(c.id+1)+',rangkumanState.section,true)">Bab '+(c.id+1)+' →</button>':'<span></span>')+'</div>'}
function summarySectionTabs(){return '<div class="summary-tabs" role="group" aria-label="Isi Rangkuman">'+[['bunpo','文','Bunpo per bab'],['kotoba','言','Kotoba per bab'],['books','本','Baca buku']].map(([key,icon,name])=>'<button aria-pressed="'+(rangkumanState.section===key)+'" onclick="rangkumanSetSection(\''+key+'\')"><span aria-hidden="true">'+icon+'</span>'+name+'</button>').join('')+'</div>'}
function summaryChapterCards(){const all=summaryLibraryResults(rangkumanState.q,rangkumanState.range);return all.length?'<div class="summary-chapter-grid">'+all.map(c=>'<button class="summary-chapter-card" onclick="openSummaryChapter('+c.id+')"><span class="summary-chapter-number">'+String(c.id).padStart(2,'0')+'</span><span class="summary-chapter-copy"><small>BUKU '+c.book+'</small><h2>'+esc(c.title)+'</h2><p>'+esc(c.goal)+'</p><b>'+c.patternCount+' catatan pola · '+c.vocabCount+' kosakata</b></span><span class="summary-card-arrow" aria-hidden="true">'+(rangkumanSaved.includes(c.id)?'♥':'↗')+'</span></button>').join('')+'</div>':'<div class="summary-empty"><span>🌱</span><h2>Bab belum ditemukan</h2><p>Coba nomor bab atau tema seperti “kenalan”, “waktu”, atau “rencana”.</p></div>'}
function rangkumanScreen(){
 if(rangkumanState.view==='intro')return summaryIntroScreen();
 if(rangkumanState.view==='reader')return summaryBookReader();
 if(rangkumanState.view==='chapter')return summaryChapterScreen();
 return title('Rangkuman','Catatan kecil untuk langkah belajar yang besar.')+'<div class="summary-library"><section class="summary-hero"><div><span class="summary-kicker">みんなの日本語 · BAB 1–50</span><h2>Pilih babmu,<br>coba satu kalimat.</h2><p>Bab 1–50: pahami satu pola, bongkar kalimat, lalu coba sendiri. Semua bab tetap bisa dijelajahi tanpa mengganti level.</p></div><div class="summary-notebook" aria-hidden="true"><small>まいにち</small><strong>文</strong><span>ひとつずつ ✿</span></div></section>'+summarySectionTabs()+(rangkumanState.section==='books'?summaryBooksLibrary():'<section class="summary-find"><label for="summary-search">Mau belajar bab apa?</label><input id="summary-search" type="search" maxlength="80" placeholder="Nomor bab atau tema…" value="'+esc(rangkumanState.q)+'" oninput="rangkumanSearch(this.value)"><div class="summary-ranges" role="group" aria-label="Kelompok bab">'+[1,11,21,31,41].map(n=>'<button aria-pressed="'+(rangkumanState.range===n)+'" onclick="rangkumanSetRange('+n+')">'+n+'–'+(n+9)+'</button>').join('')+'</div></section><div id="summary-chapters" aria-live="polite">'+summaryChapterCards()+'</div>')+'</div>'
}
function summaryChapterScreen(){
 const index=RANGKUMAN_INDEX.find(c=>c.id===rangkumanState.chapter),c=rangkumanCache.get(index.id),start=Math.floor((index.id-1)/10)*10+1;
 const head='<header class="page-header"><button class="back" aria-label="Kembali ke daftar bab" onclick="appBack()">‹</button><div><div class="eyebrow">BUKU '+index.book+' · BAB '+index.id+'</div><h1>'+esc(index.title)+'</h1></div></header>';
 if(!c){if(!rangkumanErrors.has(start))loadRangkumanChapter(index.id);return head+'<div class="summary-empty" role="status"><span>📖</span><h2>'+(rangkumanErrors.has(start)?'Catatan belum terbuka':'Membuka catatan…')+'</h2><p>'+(rangkumanErrors.has(start)?'Periksa koneksi, lalu coba buka bab ini lagi.':'Sebentar, kita siapkan bab pilihanmu.')+'</p>'+(rangkumanErrors.has(start)?'<button class="primary" onclick="loadRangkumanChapter('+index.id+')">Coba lagi</button>':'')+'</div>'}
 return '<article class="summary-lesson '+(rangkumanRomaji?'summary-show-romaji':'')+'">'+head+'<section class="summary-goal"><span class="summary-kicker">LANGKAH KECIL HARI INI</span><h2>'+esc(c.goal)+'</h2><p>Baca pelan-pelan. Kamu tidak harus menghafal semuanya sekaligus.</p></section><div class="summary-lesson-tools"><button aria-pressed="'+rangkumanSaved.includes(c.id)+'" onclick="summaryToggle(\'saved\')">'+(rangkumanSaved.includes(c.id)?'♥ Disimpan':'♡ Simpan bab')+'</button><button aria-pressed="'+rangkumanRomaji+'" onclick="summaryToggleRomaji()">'+(rangkumanRomaji?'Romaji aktif':'Tampilkan romaji')+'</button></div><div class="summary-reading-tabs" role="group" aria-label="Bagian bab"><button aria-pressed="'+(rangkumanState.section==='bunpo')+'" onclick="summaryChapterSection(\'bunpo\')">文 Bunpo</button><button aria-pressed="'+(rangkumanState.section==='kotoba')+'" onclick="summaryChapterSection(\'kotoba\')">言 Kotoba · '+c.vocab.length+'</button></div>'+(rangkumanState.section==='kotoba'?'<section class="summary-vocab"><h2>Bekal kata Bab '+c.id+'</h2><p class="summary-muted">Bentuk kata mengikuti bab ini. Ketuk ♪ untuk mendengarkan bacaan dengan suara Jepang perangkat.</p><label for="summary-word-search">Cari dalam bab ini</label><input id="summary-word-search" type="search" maxlength="80" placeholder="Kana, kanji, romaji, atau arti…" value="'+esc(rangkumanState.wordQuery)+'" oninput="summaryWordQuery(this.value)"><div id="summary-word-results" aria-live="polite">'+summaryWordHTML(c)+'</div></section>':summaryGrammarHTML(c))+summaryNavigation(c)+'</article>'
}
function summaryOpenHelp(){rangkumanState.helpReturn=true;rangkumanState.view='intro';pushRoute();updateScreen()}
function summaryContinueIntro(){summaryIntroSeen=true;try{localStorage.setItem('gaku-summary-intro-v1','true')}catch{}if(rangkumanState.helpReturn){appBack();return}rangkumanState.view='chapter';rememberRangkuman();updateScreen()}
function summaryToggleKanji(){summaryKanji=!summaryKanji;try{localStorage.setItem('gaku-summary-kanji',JSON.stringify(summaryKanji))}catch{}render()}
function summaryIntroScreen(){return '<article class="summary-intro"><button class="back" aria-label="Kembali" onclick="appBack()">‹</button><span class="summary-kicker">SEBELUM MEMBUKA CATATAN</span><h1>Kita mulai dari yang sederhana.</h1><p>Tidak harus bisa kanji. Contoh utama memakai kana, dan artinya selalu tersedia.</p><ol><li><b>Lihat artinya dulu.</b><p>Di bawah judul Jepang ada arti Indonesia. Pilih satu pola yang ingin kamu pahami.</p></li><li><b>Susun potongan kalimatnya.</b><p>Pada Bab 1–50, ketuk potongan untuk membuka artinya, lalu susun kembali contoh. Kotak jingga menyoroti penanda kecil seperti は.</p></li><li><b>Coba susun sendiri.</b><p>Rangkai potongan mengikuti contoh, lalu cocokkan. Untuk ungkapan singkat, coba ucapkan dan buka contohnya.</p></li></ol><div class="summary-intro-sample"><span>わたし <small>saya</small></span><span class="particle">は <small>topik · dibaca wa</small></span><span>がくせい <small>pelajar</small></span><span>です <small>sopan</small></span></div><p class="summary-muted">Saat melihat N, bayangkan nama orang, benda, atau tempat. N1 dan N2 hanya dua bagian yang bisa kamu ganti. Misalnya: “saya” dan “pelajar”.</p><button class="primary" onclick="summaryContinueIntro()">'+(rangkumanState.helpReturn?'Kembali belajar':'Mulai Bab '+rangkumanState.chapter+' →')+'</button><small>Panduan ini bisa dibuka lagi lewat tautan Bantuan belajar di setiap bab.</small></article>'}
function summaryTokenExample(e){return '<div class="summary-sentence"><div class="summary-token-row" aria-label="Potongan kalimat">'+e.tokens.map(t=>'<span class="summary-token '+(t.particle?'is-particle':'')+'"><b lang="ja">'+esc(summaryKanji?t.jp:t.kana)+'</b><small>'+esc(t.meaning)+'</small></span>').join('')+'</div><p class="summary-token-meaning">'+esc(e.meaning)+'</p></div>'}
function summaryBlocksHTML(blocks){return blocks.map(b=>b.type==='table'?'<div class="summary-table-wrap"><table><thead><tr>'+b.rows[0].map(t=>'<th scope="col">'+esc(t)+'</th>').join('')+'</tr></thead><tbody>'+b.rows.slice(1).map(row=>'<tr>'+Array.from({length:b.rows[0].length},(_,i)=>'<td>'+esc(row[i]||'—')+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>':b.type==='list'?'<ol class="summary-uses">'+b.items.map(t=>'<li>'+esc(t)+'</li>').join('')+'</ol>':'<p class="'+(b.text.startsWith('Awas!')?'summary-caution':'')+'">'+esc(b.text)+'</p>').join('')}
function summaryExpandNotes(open){document.querySelectorAll('.summary-note').forEach(e=>e.open=open)}
function summaryGrammarHTML(c){if(c.interactive?.version===1)return summaryActivityHTML(c);const f=c.focus;return '<section class="summary-notes"><div class="summary-notes-top"><span class="summary-step">UNGU: POLA · ORANYE: PARTIKEL</span><button class="summary-help-link" onclick="summaryOpenHelp()">? Bantuan belajar</button></div><h2>Catatan Bunpo Bab '+c.id+'</h2><div class="summary-note-tools"><button onclick="summaryToggleKanji()" aria-pressed="'+summaryKanji+'">'+(summaryKanji?'Kanji aktif':'Tampilkan kanji')+'</button><button onclick="summaryExpandNotes(true)">Buka semua</button><button onclick="summaryExpandNotes(false)">Tutup semua</button></div>'+c.patterns.map((p,i)=>'<details class="summary-note summary-teaching-card" '+(i===0?'open':'')+'><summary><span class="summary-note-heading"><b>'+esc(p.title)+'</b><small>'+esc(p.meaning)+'</small></span></summary><div class="summary-note-body">'+summaryIllustration(c.id,i)+summaryBlocksHTML((p.blocks||[{type:'p',text:p.text}]).filter(b=>!b.text?.startsWith('Awas!')))+(p.example?summaryTokenExample(p.example):'')+summaryBlocksHTML((p.blocks||[]).filter(b=>b.text?.startsWith('Awas!')))+'</div></details>').join('')+'</section><section class="summary-example"><span class="summary-step">CONTOH TAMBAHAN</span><p lang="ja" class="summary-japanese">'+esc(summaryKanji?f.example.jp:f.example.kana)+'</p><p class="summary-romaji">'+esc(bunpoExampleRomaji(f.example.kana))+'</p><details open class="summary-meaning"><summary>Arti kalimat</summary><p>'+esc(f.example.meaning)+'</p></details>'+(summaryKanji?'<details class="summary-breakdown"><summary>Penjelasan dengan kanji</summary>'+f.parts.map(p=>'<div><strong>'+esc(p.text)+'</strong><p>'+esc(p.explanation)+'</p></div>').join('')+'</details>':'')+'</section><section class="summary-practice"><span class="summary-step">COBA DI SITUASI BARU</span><h2>Sekarang giliranmu.</h2><p class="summary-muted">Pakai pola yang baru kamu pelajari. Tidak ada batas waktu.</p><div id="summary-check">'+summaryCheckHTML(c)+'</div></section><button class="summary-switch-section" onclick="summaryChapterSection(\'kotoba\')">Lihat '+c.vocab.length+' kosakata Bab '+c.id+' →</button>'}
function summaryCheckHTML(c){const selected=rangkumanAnswers.get(c.id),done=selected!==undefined;return '<p class="summary-check-prompt">'+esc(c.check.prompt)+'</p><div class="summary-check-options">'+c.check.options.map((s,i)=>'<button '+(done?'disabled':'')+' class="'+(done?(i===c.check.answer?'right':i===selected?'wrong':''):'')+'" onclick="summaryCheck('+i+')"><span>'+String.fromCharCode(65+i)+'</span>'+esc(s)+'</button>').join('')+'</div>'+(done?'<div class="summary-check-feedback" role="status"><strong>'+(selected===c.check.answer?'✓ Betul, kamu memahaminya.':'Belum tepat. Yuk, cocokkan lagi.')+'</strong><p>'+esc(c.check.explanation)+'</p></div>':'')}
function summaryWordRomaji(e){return e.romaji||kanjiRomanize(e.kana)}
function summaryWordDetailHTML(e){const more=e.primaryMeaning&&e.primaryMeaning!==e.meaning;return more||e.note?'<details class="summary-word-detail"><summary>Arti lain dan catatan</summary>'+(more?'<p>'+esc(e.meaning)+'</p>':'')+(e.note?'<p>'+esc(e.note)+'</p>':'')+'</details>':''}
function summaryWordHTML(c){const p=summaryWordSlice(summaryWordResults(c,rangkumanState.wordQuery),rangkumanState.wordPage);rangkumanState.wordPage=p.page;if(!p.total)return '<p class="summary-empty">Kata belum ditemukan dalam bab ini. Coba bacaan atau arti lainnya.</p>';return '<div class="summary-word-count">'+((p.page-1)*15+1)+'–'+((p.page-1)*15+p.items.length)+' dari '+p.total+' kata</div><div class="summary-word-list">'+p.items.map(e=>'<article class="summary-word"><div><strong lang="ja">'+esc(e.jp)+'</strong>'+(e.kana!==e.jp?'<p lang="ja" class="summary-kana">'+esc(e.kana)+'</p>':'')+'<p class="summary-romaji">'+esc(summaryWordRomaji(e))+'</p><p class="summary-word-meaning">'+esc(e.primaryMeaning||e.meaning)+'</p>'+summaryWordDetailHTML(e)+'</div><button class="round" aria-label="Dengarkan kosakata '+esc(e.jp)+'" onclick="summarySpeak('+c.vocab.indexOf(e)+')">♪</button></article>').join('')+'</div><nav class="summary-word-pages" aria-label="Halaman kosakata bab"><button '+(p.page===1?'disabled':'')+' onclick="summaryWordPage('+(p.page-1)+')" aria-label="Kosakata bab halaman sebelumnya">‹</button><span>'+p.page+' / '+p.totalPages+'</span><button '+(p.page===p.totalPages?'disabled':'')+' onclick="summaryWordPage('+(p.page+1)+')" aria-label="Kosakata bab halaman berikutnya">›</button></nav>'}
function summaryBooksLibrary(){return '<section class="summary-books"><h2>Belajar langsung dari buku.</h2><p class="summary-muted">Buka halaman, perbesar bagian yang ingin dibaca, lalu lanjut sesuai ritmemu.</p><div class="summary-book-grid">'+RANGKUMAN_BOOKS.map(b=>'<button class="summary-book-card" onclick="openSummaryBook('+b.id+')"><img src="'+b.assetPath+'001.webp" alt="Sampul '+esc(b.title)+'" loading="lazy"><div><small>'+esc(b.subtitle)+'</small><h3>'+esc(b.title)+'</h3><p>'+b.pages+' halaman</p>'+(b.description?'<p>'+esc(b.description)+'</p>':'')+'<b>Buka buku →</b></div></button>').join('')+'</div></section>'}
function openSummaryBook(id){const b=RANGKUMAN_BOOKS.find(b=>b.id===id);if(!b)return;rangkumanState.view='reader';rangkumanState.section='books';rangkumanState.book=id;rangkumanState.bookPage=summaryInteger(rangkumanBookPages[id],1,b.pages);rangkumanState.zoom=1;pushRoute();updateScreen()}
let summaryReaderObserver=null,summaryReaderFrame=0;
function summaryRememberBookPage(n){const b=RANGKUMAN_BOOKS.find(b=>b.id===rangkumanState.book);rangkumanState.bookPage=summaryInteger(n,1,b.pages);rangkumanBookPages[b.id]=rangkumanState.bookPage;try{localStorage.setItem('gaku-minna-pages',JSON.stringify(rangkumanBookPages))}catch{}rememberRangkuman()}
function summaryBookPage(n){summaryRememberBookPage(n);const canvas=document.getElementById('summary-book-scroll'),target=document.getElementById('summary-book-sheet-'+rangkumanState.bookPage);if(canvas&&target){canvas.scrollTo({top:target.offsetTop,behavior:'instant'});summaryReaderPageLabel()}else render()}
function summaryReaderPageLabel(){const label=document.getElementById('summary-current-page'),input=document.getElementById('summary-book-number');if(label)label.textContent='Halaman '+rangkumanState.bookPage+' / '+RANGKUMAN_BOOKS.find(b=>b.id===rangkumanState.book).pages;if(input&&document.activeElement!==input)input.value=rangkumanState.bookPage}
function summaryBookZoom(delta){const n=rangkumanState.bookPage;rangkumanState.zoom=Math.min(3,Math.max(1,Math.round((rangkumanState.zoom+delta)*4)/4));rememberRangkuman();const strip=document.getElementById('summary-book-strip');if(strip)strip.style.width=(rangkumanState.zoom*100)+'%';const label=document.getElementById('summary-zoom-value');if(label)label.textContent=Math.round(rangkumanState.zoom*100)+'%';summaryBookPage(n)}
function summaryRetryBookImage(button){const sheet=button.closest('.summary-book-sheet'),img=sheet.querySelector('img');button.parentElement.hidden=true;img.hidden=false;const src=img.getAttribute('src');img.removeAttribute('src');img.setAttribute('src',src)}
function initSummaryReader(){
 if(summaryReaderObserver){summaryReaderObserver.disconnect();summaryReaderObserver=null}if(summaryReaderFrame){cancelAnimationFrame(summaryReaderFrame);summaryReaderFrame=0}
 if(page!=='Rangkuman'||rangkumanState.view!=='reader')return;
 const canvas=document.getElementById('summary-book-scroll');if(!canvas)return;
 const target=document.getElementById('summary-book-sheet-'+rangkumanState.bookPage);if(target)canvas.scrollTop=target.offsetTop;
 const visible=new Set();
 if(typeof IntersectionObserver==='function'){summaryReaderObserver=new IntersectionObserver(entries=>{for(const e of entries){if(e.isIntersecting)visible.add(e.target);else visible.delete(e.target)}if(!visible.size)return;const top=canvas.getBoundingClientRect().top;const sheets=[...visible].sort((a,b)=>Math.abs(a.getBoundingClientRect().top-top)-Math.abs(b.getBoundingClientRect().top-top));const n=Number(sheets[0].dataset.bookPage);if(n!==rangkumanState.bookPage){summaryRememberBookPage(n);summaryReaderPageLabel()}},{root:canvas,threshold:[0,.25,.5,.75,1]});canvas.querySelectorAll('.summary-book-sheet').forEach(e=>summaryReaderObserver.observe(e))}
 else canvas.addEventListener('scroll',()=>{if(summaryReaderFrame)return;summaryReaderFrame=requestAnimationFrame(()=>{summaryReaderFrame=0;const sheets=[...canvas.querySelectorAll('.summary-book-sheet')];const target=sheets.reduce((a,b)=>Math.abs(b.offsetTop-canvas.scrollTop)<Math.abs(a.offsetTop-canvas.scrollTop)?b:a);summaryRememberBookPage(Number(target.dataset.bookPage));summaryReaderPageLabel()})},{passive:true});
 summaryInitBookPinch(canvas);summaryReaderPageLabel()
}
function summaryBookReader(){const b=RANGKUMAN_BOOKS.find(b=>b.id===rangkumanState.book);return '<article class="summary-reader"><header class="page-header"><button class="back" aria-label="Kembali ke pilihan buku" onclick="appBack()">‹</button><div><div class="eyebrow">'+esc(b.subtitle)+'</div><h1>'+esc(b.title)+'</h1></div></header><p class="summary-muted">Gulir ke bawah untuk terus membaca. Cubit dua jari di area buku atau gunakan tombol −／＋ untuk memperbesar halaman buku.</p><div class="summary-reader-tools"><div><button aria-label="Perkecil halaman buku" onclick="summaryBookZoom(-0.25)">−</button><span id="summary-zoom-value">'+Math.round(rangkumanState.zoom*100)+'%</span><button aria-label="Perbesar halaman buku" onclick="summaryBookZoom(0.25)">＋</button></div><form onsubmit="event.preventDefault();summaryBookPage(document.getElementById(\'summary-book-number\').value)"><label for="summary-book-number">Ke halaman</label><input id="summary-book-number" aria-label="Nomor halaman buku" type="number" inputmode="numeric" min="1" max="'+b.pages+'" value="'+rangkumanState.bookPage+'"><span>/ '+b.pages+'</span><button type="submit">Buka</button></form></div><p id="summary-current-page" class="summary-page-position">Halaman '+rangkumanState.bookPage+' / '+b.pages+'</p><div id="summary-book-scroll" class="summary-page-canvas summary-continuous" role="region" aria-label="Buku, gulir halaman dari atas ke bawah" tabindex="0"><div id="summary-book-strip" class="summary-book-strip" style="width:'+(rangkumanState.zoom*100)+'%">'+Array.from({length:b.pages},(_,i)=>{const n=i+1,size=b.pageSizes[i];return '<figure id="summary-book-sheet-'+n+'" class="summary-book-sheet" data-book-page="'+n+'"><figcaption>Halaman '+n+'</figcaption><img src="'+b.assetPath+String(n).padStart(3,'0')+'.webp" width="'+size[0]+'" height="'+size[1]+'" loading="lazy" decoding="async" alt="'+esc(b.title)+', halaman '+n+'" onerror="this.hidden=true;this.nextElementSibling.hidden=false"><div hidden class="summary-image-error"><p>Halaman '+n+' belum berhasil dimuat.</p><button onclick="summaryRetryBookImage(this)">Coba lagi</button></div></figure>'}).join('')+'</div></div><p class="summary-muted">Nomor mengikuti urutan buku, termasuk sampul dan pengantar. Posisi bacaan terakhir tersimpan di perangkat ini.</p>'+(b.sourceName?'<p class="summary-book-source">Sumber: <a href="'+esc(b.sourceUrl)+'" target="_blank" rel="noopener noreferrer">'+esc(b.sourceName)+'</a>. '+esc(b.description)+' <a href="'+esc(b.pdfUrl)+'" target="_blank" rel="noopener noreferrer">PDF asli</a>.</p>':'')+'</article>'}

// Keep two-finger scaling inside the reader; single-finger scrolling stays native.
function summaryZoomAnchor(canvas,x,y){
 const bounds=canvas.getBoundingClientRect(),localX=x-bounds.left,localY=y-bounds.top;
 const hit=typeof document.elementFromPoint==='function'?document.elementFromPoint(x,y):null;
 const sheet=hit?.closest?.('.summary-book-sheet');
 return {zoom:rangkumanState.zoom,localX,localY,contentX:(canvas.scrollLeft+localX)/rangkumanState.zoom,contentY:(canvas.scrollTop+localY)/rangkumanState.zoom,sheet:sheet&&canvas.contains(sheet)?sheet:null,fraction:sheet?Math.max(0,Math.min(1,(y-sheet.getBoundingClientRect().top)/sheet.getBoundingClientRect().height)):0}
}
function summaryApplyPinchZoom(value,anchor,canvas){
 const strip=document.getElementById('summary-book-strip');if(!strip)return;
 rangkumanState.zoom=Math.min(3,Math.max(1,Math.round(value*1000)/1000));
 strip.style.width=(rangkumanState.zoom*100)+'%';
 canvas.scrollLeft=anchor.contentX*rangkumanState.zoom-anchor.localX;
 canvas.scrollTop=anchor.sheet?anchor.sheet.offsetTop+anchor.fraction*anchor.sheet.offsetHeight-anchor.localY:anchor.contentY*rangkumanState.zoom-anchor.localY;
 const label=document.getElementById('summary-zoom-value');if(label)label.textContent=Math.round(rangkumanState.zoom*100)+'%'
}
function summaryInitBookPinch(canvas){
 if(canvas.dataset.pinchReady)return;canvas.dataset.pinchReady='true';let pinch=null;
 const distance=touches=>Math.hypot(touches[0].clientX-touches[1].clientX,touches[0].clientY-touches[1].clientY);
 const center=touches=>[(touches[0].clientX+touches[1].clientX)/2,(touches[0].clientY+touches[1].clientY)/2];
 canvas.addEventListener('touchstart',event=>{
  if(event.touches.length<2)return;event.preventDefault();
  const [x,y]=center(event.touches);pinch={distance:Math.max(1,distance(event.touches)),zoom:rangkumanState.zoom,anchor:summaryZoomAnchor(canvas,x,y)}
 },{passive:false});
 canvas.addEventListener('touchmove',event=>{
  if(!pinch||event.touches.length<2)return;event.preventDefault();
  const [x,y]=center(event.touches),bounds=canvas.getBoundingClientRect();
  const anchor={...pinch.anchor,localX:x-bounds.left,localY:y-bounds.top};
  summaryApplyPinchZoom(pinch.zoom*distance(event.touches)/pinch.distance,anchor,canvas)
 },{passive:false});
 const finish=event=>{if(!pinch||event.touches.length>=2)return;event.preventDefault();pinch=null;rememberRangkuman();summaryReaderPageLabel()};
 canvas.addEventListener('touchend',finish,{passive:false});canvas.addEventListener('touchcancel',finish,{passive:false});
 canvas.addEventListener('wheel',event=>{
  if(!event.ctrlKey)return;event.preventDefault();
  const anchor=summaryZoomAnchor(canvas,event.clientX,event.clientY);
  summaryApplyPinchZoom(rangkumanState.zoom*Math.exp(-event.deltaY*.01),anchor,canvas);rememberRangkuman()
 },{passive:false})
}
// Browser-page pinch must not enlarge the app shell or bottom navigation.
if(typeof document!=='undefined'&&typeof document.addEventListener==='function'){
 document.addEventListener('touchmove',event=>{if(event.touches?.length>1)event.preventDefault()},{passive:false});
 for(const type of ['gesturestart','gesturechange'])document.addEventListener(type,event=>event.preventDefault(),{passive:false})
}
