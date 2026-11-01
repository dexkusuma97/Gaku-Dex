# DeX Gaku — Status dan keputusan proyek

Terakhir diperbarui: 31 Oktober 2026 (Asia/Jakarta)

> Status terkini: Kotoba N4 3.227; Kanji tambahan 287 (217 A2 + 70 pengayaan); Bunpo N4 115. Kuis Bunpo/Campuran N4 belum tersedia. Bagian awal di bawah merupakan catatan tahap lama; gunakan pembaruan bertanggal di akhir untuk keputusan yang menggantikannya.
Tahap: Home v3 disetujui; Kana, Kanji dasar, Bunpo N5, Kotoba N5/A1, dan Rangkuman Bab 1–50 beserta pembaca Minna I/II telah diimplementasikan di web; belum APK produksi.

## Cara melanjutkan

Baca file ini sebelum melanjutkan. Setelah menyelesaikan satu menu, perbarui status,
perubahan, verifikasi, keterbatasan, dan langkah selanjutnya. Jangan menyebut menu
selesai hanya karena tampilan contohnya tersedia. Jangan mengganti keputusan pengguna
tanpa arahan baru. Status di sini berlaku untuk proyek baru pada percakapan ini;
fitur proyek DeX Gaku lama tidak otomatis sudah terpasang.

## Keputusan pengguna yang sudah disepakati

- Mulai dari materi N5. Pilihan N5/N4 tersedia di Pengaturan; materi N4 belum diisi.
- Pengguna akan mengirim sumber materi satu per satu sesuai menu yang sedang dikerjakan.
- Pertahankan tata letak UI pertama; buat lebih colorful, lucu, interaktif, tetap rapi.
- Prioritas HP Android; web responsif dan APK menggunakan pengalaman yang konsisten.
- Kerjakan per menu, mulai Home, lalu Hiragana dan Katakana.
- APK harus dapat membuka materi lokal, latihan, dan menyimpan hasil saat offline.
- Saat kembali online, data lokal disinkronkan ke akun.
- Login Google berada di Pengaturan. Pengguna tetap dapat belajar sebagai Tamu.
- Akun menyimpan progres belajar serta data buatan sendiri dan impor; ini memerlukan backend.
- Kaiwa seperti chat; ada audio karakter wanita dan pria sesuai karakter pembicara.
- Jangan mengandalkan suara sistem selalu menyediakan suara wanita/pria. Pilih audio
  karakter yang jelas saat menu Kaiwa dikerjakan. Tidak ada kebutuhan mikrofon yang disepakati.
- Sediakan menu Sawer dan Premium; detail Premium dibahas ketika mengerjakan Rangkuman.
- Buat/perbarui STATUS.md setiap selesai mengerjakan menu.

## Spesifikasi per menu

| Menu | Persyaratan | Status saat ini |
| --- | --- | --- |
| Home | Kartu berwarna per menu, maskot Shiba, animasi lembut, tampilan HP | UI v3 disetujui pengguna |
| Hiragana | Seion, Yōon, Dakuten, Handakuten; tampilan huruf | Kelompok dan tabel lengkap 104 entri per jenis; audio TTS dan Back siap; perlu uji suara di HP |
| Katakana | Seion, Yōon, Dakuten, Handakuten; tampilan huruf | Kelompok dan tabel lengkap 104 entri per jenis; audio TTS dan Back siap; perlu uji suara di HP |
| Kanji | Kategori, 15 per halaman, cari romaji/kana/kanji/arti/Inggris | 115 kanji, 11 kategori, pagination 15, pencarian lengkap; diuji |
| Detail Kanji | Huruf besar, arti ID/EN, On/Kun jika ada, radikal, guratan, mnemonic, contoh kata | Detail 115 kanji tersedia: arti, bacaan, radikal, guratan, mnemonic, 2 contoh kata dan audio |
| Kotoba | Kategori/subkategori, 15 per halaman, cari kana/romaji/arti; detail dan kalimat sederhana | 1.801 entri unik dari 7 PDF, 6 kategori/51 subkategori, cari, 15 per halaman, detail, contoh dan simpan lokal |
| Bunpo | Kategori/subkategori, cari fungsi/kana/romaji; detail mudah dipahami | 83 materi dari PDF, kategori/subkategori, cari, detail, contoh interaktif dan simpan lokal |
| Rangkuman | Bunpo dan kotoba per bab Minna no Nihongo | 50 bab, 230 catatan pola, 2.910 entri Kotoba; semua terbuka di N5/N4; pembaca dua buku |
| Quiz | Pilih Hiragana, Katakana, Kanji, Kotoba, Bunpo | Contoh Kana/Kanji/Kotoba/Bunpo, 3 soal; pemisahan Hiragana/Katakana belum |
| Simulasi | Pengalaman ujian komputer/CBT | Tautan contoh quiz; CBT/timer belum dibuat |
| Riwayat | Hasil Quiz dan Simulasi | Prototipe log lokal; nanti difokuskan hasil quiz/simulasi |
| Tambah data | Form Kanji/Kotoba/Bunpo, simpan lokal dan akun, bisa hapus, label sumber | Tambah Kotoba lokal dengan pencegah duplikat dan label Buatanmu; form lain, hapus dan sync belum |
| Import–Export | Impor/ekspor massal, bisa hapus, label berbeda dari tambah manual | Halaman rencana; belum ada operasi impor/ekspor |
| Cerita/buku dongeng | Membaca buku cerita pendek | Satu contoh cerita dan furigana; pembaca buku final belum |
| Kaiwa | Chat, respons, audio sesuai karakter wanita/pria | Satu contoh chat pilihan; audio karakter belum |
| Pengaturan | Akun Google, tema, animasi; akses Sawer/Premium | UI akun dan halaman terkait tersedia; tema/animasi lokal berfungsi |
| Login/sinkronisasi | Google nyata, penyimpanan cloud, antrian perubahan offline | UI saja; autentikasi dan server belum dibuat |
| Sawer | Dukungan pengembangan | Halaman rencana; metode dan pembayaran belum |
| Premium | Nanti rangkuman Bunpo/Kotoba Bab 11–50 dikunci | Semua bab terbuka sekarang; pembayaran, backend dan penguncian belum aktif |
| APK/offline | Materi lokal, latihan offline, sinkron saat online | Belum dikemas APK; belum service worker/database/sync |

## Perubahan tahap ini: Home v2

- Hero menggunakan lavender, pink lembut, dan peach; latar tetap netral.
- Kartu Hiragana lavender, Katakana peach, Kanji mint, Bunpo pink,
  Kotoba biru langit, Rangkuman lilac.
- Warna aksen ungu untuk tombol, identitas, dan target belajar.
- Label N5 dan identitas Tamu ditampilkan.
- Pengaturan menaut ke halaman Login Google, Sawer, Premium, dan Import–Export.
- Halaman rencana menyatakan fitur belum aktif agar tidak memberi kesan login/payment palsu.
- Nama kelompok kana ditampilkan sebagai Seion, Dakuten, Handakuten, dan Yōon.
- Target/progres dashboard masih data contoh, belum pengukuran waktu belajar.

## Validasi tahap ini

- JavaScript: pemeriksaan sintaks sebelum publikasi.
- UI: inspeksi beranda dan navigasi Pengaturan → Login melalui browser pratinjau lokal.
- Pengujian bukan bukti Google login, sinkronisasi, pembayaran, dan APK berfungsi.
- Batas lingkungan: browser pengujian sebelumnya tidak bisa membuka domain hosting
  karena kebijakan jaringan. Hasil publikasi diverifikasi melalui layanan hosting.

## Langkah berikutnya

1. Pengguna mencoba Kotoba di HP: pencarian, kategori/subkategori, halaman,
   detail, simpan, audio Jepang perangkat dan gesture Back.
2. Berikutnya Quiz N5; rincian jenis soal/hasil dibahas bersama pengguna.
3. Materi N4 menunggu tahap setelah materi dan latihan N5 siap.
4. Perbarui STATUS.md pada setiap tahap selesai.
5. Backend autentikasi/sinkronisasi dan offline APK masih menjadi pekerjaan mendatang.

## Lokasi sumber

- Aplikasi: dist/index.html
- Dataset kana: dist/kana-data.js
- Pemeriksaan dataset: node tests/kana-data.test.cjs
- Manifest hosting: .openai/hosting.json
- Catatan ini: STATUS.md
- Situs: https://dex-gaku-ui-garden.wrygiant3.chatgpt.site

## Riwayat tahap

| Tanggal | Tahap | Hasil |
| --- | --- | --- |
| 27 Oktober 2026 | UI v1 | Pratinjau awal, contoh kana/quiz/kaiwa, tema dan data lokal |
| 27 Oktober 2026 | Home v2 | Warna lebih cerah, kerangka akun/login dan menu rencana, STATUS.md |

## Revisi Home v3 — 27 Oktober 2026

- Permintaan: hapus seluruh kartu Target hari ini yang dilingkari pengguna.
- Kartu target, lingkaran progres, indikator hari dan catatan progres contoh dihapus dari Home.
- Kartu Kata hari ini menjadi lebar penuh di bawah menu pada HP/tablet. Di desktop
  tetap menjadi panel samping yang ringkas; tidak ada ruang kosong bekas target.
- Font judul, kartu, deskripsi, menu, formulir, dialog dan navigasi diperbesar.
- Pengaturan memiliki tombol pilihan N5/N4; pilihan tersimpan di localStorage,
  tetap setelah reload, dan ditampilkan pada label level header.
- N4 belum memiliki materi. Kanji/Kotoba/Bunpo/Rangkuman/Quiz/Simulasi
  menampilkan keadaan kosong N4 dan tombol kembali ke N5, tidak menampilkan contoh N5.
- Kana tetap tersedia pada kedua pilihan level.
- Pengujian: pemeriksaan sintaks JavaScript dan browser lokal untuk Home, selector
  level, label header, keadaan kosong N4, serta persistensi setelah reload.
- Status: revisi UI; Google/cloud sync dan APK tetap belum aktif.

## Menu Hiragana dan Katakana — 27 Oktober 2026

Status: implementasi menu web selesai, menunggu pengguna mencoba di HP.

### Fitur

- Alur masuk kelompok → tabel huruf → ketuk audio; tidak membuka popup per huruf.
- Empat kelompok per jenis kana: Seion 46, Yōon 33, Dakuten 20, Handakuten 5.
- Total 104 entri Hiragana dan 104 Katakana; simbol dan romaji berpasangan.
- Seion memakai kolom a/i/u/e/o, termasuk ruang kosong yang mempertahankan
  posisi baris ya/wa/n. Huruf kuno ゐ/ゑ tidak masuk tabel dasar modern.
- Yōon memakai tiga kolom ya/yu/yo, gabungan berhuruf kecil dalam satu kotak.
- Bacaan khusus shi, chi, tsu, fu; penjelasan を, ん, は/へ, じ/ぢ, ず/づ.
- Catatan っ/ッ kecil, vokal panjang Katakana ー dan perbedaan ゛/゜.
- Kombinasi Katakana serapan seperti ファ/ティ tidak termasuk 33 Yōon dasar.
- Pemutar ringkas menampilkan huruf aktif, romaji, catatan dan tombol ulang audio.
- Suara ja-JP melalui Web Speech/TTS. Pemutaran sebelumnya dibatalkan jika
  memilih huruf lain atau berpindah halaman. Tidak ada penggunaan mikrofon.
- Pemberitahuan kendala audio dibatasi satu kali per pemuatan aplikasi.
- Back browser mengikuti tabel → kelompok → halaman asal; tombol Back UI
  memakai riwayat yang sama. Halaman/kelompok dipulihkan ketika reload.
- Warna Hiragana lavender dan Katakana peach; grid responsif, font besar,
  tema gelap dan preferensi reduced-motion dihormati.

### Verifikasi

- PASS: node tests/kana-data.test.cjs — jumlah 46/33/20/5, duplikasi, posisi
  kolom, bacaan khusus, diakritik, konversi Katakana termasuk huruf kecil,
  dan pemeriksaan sintaks seluruh JavaScript inline.
- PASS browser lokal: Home → Hiragana → Yōon, 33 tombol; ketuk きゃ
  memperbarui huruf, romaji kya dan satu tombol aktif.
- PASS browser Back: tabel Hiragana → kelompok Hiragana → Home.
- PASS browser Katakana: Seion 46, Dakuten 20, Handakuten 5, Yōon 33.
- PASS: pilihan リョ → ryo; reload tetap pada Katakana/Yōon dengan 33 tombol.
- PASS: tombol kembali dari tabel menuju kelompok tanpa melompat ke Home.
- Inspeksi visual menemukan simbol Yōon terbungkus dua baris; diperbaiki
  dengan ukuran simbol yang sesuai dan larangan line-wrap pada gabungan.
- Browser pengujian tidak menyediakan suara Jepang; kondisi audio tidak
  tersedia teramati dengan benar. Keluaran suara sebenarnya, gesture Back
  Android dan penampilan HP masih perlu dicoba pengguna.

### Batas pekerjaan

- Fitur ini belum membuat APK, service worker, sinkronisasi atau audio rekaman.
- Akses web baru saat benar-benar offline belum dijamin; teks dan data sudah
  dibundel lokal agar dapat dikemas bersama APK nanti.
- Audio offline bergantung pada mesin/voice Jepang offline di perangkat.
- Quiz kana masih prototipe terpisah; belum diperluas pada tahap ini.
- Tidak ada sumber PDF baru yang dipakai; tabel kana dasar modern disusun
  sebagai dataset alfabet. Sumber menu Kanji berikutnya menunggu pengguna.

## Perbaikan Yōon dan navigasi tab — 27 Oktober 2026

- Laporan pengguna: contoh きゃ meluber dari kotak penjelasan Yōon di HP.
- Contoh pada panel penjelasan sekarang ditumpuk き di atas ゃ (キャ mengikuti
  pola yang sama); pada HP simbol ditempatkan di atas teks penjelasan.
- Gabungan pada tabel tetap satu kotak, dibaca bersama, dan ditulis mendatar.
- Navigasi bawah/sidebar adalah tab tingkat utama, bukan jejak kunjungan.
  Beranda → Belajar → Quiz → Kaiwa → Back langsung Beranda.
- Detail tetap memiliki langkah Back: tabel kana → kelompok → menu asal.
- Pindah tab dari halaman detail membuang cabang detail sebelumnya. Back dari
  tab baru kembali ke Beranda, bukan ke tab/detail lama.
- State navigasi versi lama dimigrasikan saat pemuatan; reload tidak menambah
  kedalaman riwayat yang sudah menggunakan skema baru.
- Logika navigasi dipisahkan dalam dist/navigation.js.
- PASS tests/navigation.test.cjs: urutan tab, Back, detail, pindah tab dari
  detail, reload, klik tab berulang dan migrasi state lama.
- PASS tests/kana-data.test.cjs: dataset dan sintaks tidak berubah/rusak.
- PASS browser responsif 390px: Belajar → Quiz → Kaiwa → tombol Back UI
  kembali Beranda; urutan sama dengan browser Back juga kembali Beranda.
- PASS browser: Back dari tabel Hiragana/Yōon ke kelompok; dari tabel pindah
  tab Quiz lalu browser Back langsung Beranda.
- PASS inspeksi DOM mobile: kotak contoh Yōon lebar 65px dan tinggi 86px;
  scrollWidth=clientWidth serta scrollHeight=clientHeight (tidak meluber).
- Uji browser memakai iframe responsif sementara; file QA dihapus sebelum publikasi.
- Gesture fisik Android tetap perlu dikonfirmasi pengguna pada perangkatnya.

## Menu Kanji dasar — 27 Oktober 2026

Status: implementasi web selesai; menunggu uji perangkat Android pengguna.

### Materi dan fitur

- 103 kanji dari PDF Kanji N5 Dasar (103), RSP Sensei, halaman 2–7.
- Izin pengguna untuk melengkapi materi dipakai untuk 12 kanji dasar dari PDF
  Kanji JFT 429/Irodori: 白 国 私 外 空 電 何 花 犬 家 好 英.
- Total 115 kanji, 11 kategori; tambahan dibedakan dengan label dan filter sumber.
- Maksimal 15 per halaman (8 halaman; halaman terakhir 10).
- Pencarian di seluruh hasil kategori/sumber melalui romaji, kana, kanji,
  arti Indonesia atau Inggris. Mendukung katakana, makron dan beberapa variasi romaji.
- Detail setiap kanji: arti ID/EN, bacaan utama On/Kun dan romaji, radikal,
  jumlah guratan, bantuan ingatan visual, dua contoh kata dan tombol audio.
- Total 230 contoh kata. Audio memakai TTS Jepang yang sudah tersedia pada aplikasi;
  ketersediaan suara tetap bergantung pada perangkat.
- Detail mempertahankan pencarian, kategori, sumber dan halaman saat kembali.
  Reload memulihkan detail. Navigasi tab tetap memakai aturan Back ke Beranda.
- PDF merupakan acuan; label bacaan/ejaan dirapikan. Contoh, kategori, arti Inggris,
  metadata dan mnemonic dilengkapi secara editorial. Bacaan dipilih untuk pemula.
- Kumpulan belajar ini bukan daftar resmi seluruh kanji JLPT N5.
- Materi N4 tetap kosong dan terpisah. Tidak ada perubahan login/cloud/APK.

### Verifikasi

- PASS node tests/kanji.test.cjs: 115 unik, urutan 103 sumber, 12 tambahan,
  kelengkapan detail, contoh kata, 43 pencarian, filter dan pagination tanpa duplikasi.
- PASS node tests/kana-data.test.cjs dan node tests/navigation.test.cjs.
- PASS browser: pencarian mizu → 水, detail dan browser Back memulihkan query.
- PASS browser: kategori Hewan berisi 5, filter tambahan berisi 12,
  keadaan pencarian kosong, halaman 2 berisi 15, detail 山 setelah reload,
  tombol Back detail kembali halaman 2/8.
- Inspeksi visual responsif 390px untuk detail 百; tidak tampak huruf keluar kotak.
- Gesture fisik Android dan keluaran audio sebenarnya masih perlu uji perangkat pengguna.
- File iframe QA sementara dihapus sebelum publikasi.

### Sumber proyek

- data/kanji-n5.tsv: materi yang dapat diedit.
- data/kanji-provenance.json: checksum PDF dan indeks sumber.
- scripts/build-kanji-data.py: pembangkit dist/kanji-data.js.
- dist/kanji-search.js, dist/kanji-ui.js, dist/kanji.css: pencarian dan UI.
- data/KANJI_AUDIT.md: cakupan sumber dan koreksi editorial.

## Menu Bunpo N5 dan penghapusan progress bar - 27 Oktober 2026

Status: menu web selesai, menunggu pengguna mencoba pada HP Android sebenarnya.

### Materi

- Sumber pengguna: ALL_-_BUNPO_N5.pdf, 38 halaman, Nassu Kun / nassusensei /
  muzukashii nihongo. Seluruh halaman materi 2-37 dipetakan; 1/38 pembuka/penutup.
- 83 unit belajar dalam 11 kategori dan subkategori sesuai jenis/fungsi.
- 166 contoh kalimat dengan bacaan kana dan arti Indonesia; romaji bisa dinyalakan.
- Penjelasan, pola, tabel perubahan terpilih, catatan dan 25 kesalahan umum.
- 16 latihan kecil berumpan balik langsung, tanpa skor atau pencatatan hasil.
  Ini terpisah dari menu Quiz yang masih prototipe.
- Potensial halaman 37 dipertahankan sebagai pengayaan dari PDF.
- Detail penyuntingan dan peta halaman tersedia pada data/BUNPO_AUDIT.md.
- Jumlah unit adalah hasil pengelompokan untuk aplikasi, bukan daftar resmi
  lengkap JLPT N5 atau jaminan cakupan ujian.

### Interaksi dan UI

- Hero pink/peach dengan buku bergerak lembut; kartu aksen per kategori.
- Cari fungsi/kana/kanji pola/romaji; filter kategori dan subkategori.
- 12 materi per halaman, 7 halaman; pencarian dilakukan sebelum pagination.
- Buka/tutup arti, tabel dan kesalahan umum menggunakan elemen details native.
- Simpan materi dan filter Tersimpan; hanya localStorage browser ini.
- Preferensi romaji dan simpanan dipertahankan setelah reload.
- Detail memakai halaman tersendiri. Back memulihkan daftar/filter/halaman.
- Materi berikutnya mengganti detail yang aktif agar Back tetap satu langkah ke daftar.
- Tab Belajar tetap aktif pada halaman Kanji/Bunpo/Kotoba/Rangkuman.
- Seluruh bar tiny-progress dan nilai persentase contoh dihapus dari kartu
  Beranda/Materi belajar serta bar contoh Quiz. Nomor soal tetap tersedia.
- N4 tetap menampilkan kondisi belum tersedia, tanpa materi N5.
- Tidak menambahkan audio Bunpo, layanan akun, sinkronisasi atau kemasan APK.

### Verifikasi

- PASS tests/bunpo.test.cjs: 83 unik, 36 halaman materi tercakup, 166 contoh,
  16 latihan, pencarian fungsi/kana/romaji, filter/subkategori, simpanan, N4,
  serta pagination tanpa duplikasi/terlewat.
- PASS tests/bunpo-navigation.test.cjs: reload detail, pemulihan filter/halaman,
  materi berikutnya, simpan/hapus simpanan, dan tab kembali langsung Beranda.
- PASS regresi tests/kana-data.test.cjs, tests/kanji.test.cjs dan tests/navigation.test.cjs.
- PASS browser responsif 390px: 12 kartu, filter Keinginan & interaksi →
  Permintaan berisi 2, cari たい, detail, tombol simpan, romaji, arti contoh,
  feedback jawaban salah/benar. Daftar/detail tidak meluber secara horizontal.
- PASS browser halaman utama: filter Tersimpan hanya menampilkan Vたいです
  yang disimpan saat pengujian. Reload detail mempertahankan materi, simpanan,
  dan romaji. Browser Back memulihkan daftar Tersimpan.
- PASS browser: detail dari halaman 2 kembali halaman 2/7; pindah tab Quiz
  lalu Cerita & kaiwa dan browser Back kembali Beranda.
- Pemeriksaan visual detail kata sifat-i pada HP; screenshot disimpan untuk pratinjau.
- Lingkungan otomatis memiliki keterbatasan locator iframe setelah Back;
  pengujian riwayat dilanjutkan pada halaman utama dan berhasil.
- Gesture hardware Android tetap memerlukan uji pengguna.
- File QA sementara dihapus sebelum publikasi.

### Berkas

- data/bunpo-n5.json: sumber materi yang bisa diedit.
- scripts/build-bunpo-data.py: pembangkit bundle dist/bunpo-data.js.
- dist/bunpo-search.js, dist/bunpo-ui.js, dist/bunpo.css: pencarian dan tampilan.


## Kotoba N5/A1 — 27 Oktober 2026

### Materi dan keputusan

- 1.801 kartu unik setelah deduplikasi tujuh PDF pengguna. Kumpulan mengikuti
  materi N5, Irodori A1 dan tambahan harian; bukan daftar resmi lengkap ujian.
- Instruksi khusus: ambil separuh dari PDF 1000 Kotoba Sehari-hari.
  Ada 806 baris mentah; setelah pemisahan entri gabungan dan normalisasi,
  terdapat 822 entri unik. Dipilih 411, tepat separuh. Prioritaskan irisan
  N5/A1, lalu tema harian. Daftar pilihan/yang dikeluarkan ada dalam audit.
- Kontribusi sumber saling tumpang tindih: harian 411, benda 349, kerja 135,
  Irodori 1114, Kosakata N5 664, sifat 67, keterangan 50.
- Duplikat ejaan digabung, bentuk kamus/～ます dan variasi kanji/kana menjadi
  alias satu kartu. Homofon dengan makna berbeda tetap terpisah, misalnya
  雨/飴, 紙/髪 dan 泊まる/止まる. Penulisan hiragana/katakana dinormalisasi
  untuk pemeriksaan duplikat. Tidak ada alias yang dimiliki dua kartu.
- Koreksi salah ketik/arti sumber antara lain 制服, 泊まる, 履く, なくす,
  明るい, 終わる, 曲がる. Audit menyimpan rujukan halaman dan SHA-256 PDF.
- PDF gambar dicocokkan secara visual. Tabel Irodori diekstrak per sel dengan
  pemeriksaan batas kolom agar huruf pertama tidak terpotong.
- Setiap kata memiliki contoh JP, bacaan kana dan arti Indonesia. Contoh
  pembelajaran dilengkapi dengan pola sederhana; banyak nomina menggunakan
  pola templat. Ini belum merupakan penelaahan bahasa oleh pengajar eksternal.

### Fitur web

- Enam kategori dengan subkategori, cari kana/kanji/romaji/arti dan bentuk sopan.
- Pagination 15 entri; 121 halaman, halaman terakhir 1 entri. Lompat halaman.
- Filter sumber PDF dan kata tersimpan; detail sumber per halaman PDF.
- Detail arti, bacaan, bentuk kamus/sopan untuk kata kerja, contoh dengan arti
  yang bisa dibuka, variasi penulisan, catatan bila ada, dan kata berikutnya.
- Simpan kata melalui localStorage. Audio memakai suara ja-JP perangkat;
  ketersediaan dan kualitas suara tetap perlu uji HP pengguna.
- Data buatan sendiri tetap tampil dengan label Buatanmu; tambah data menolak
  penulisan yang sudah tersedia. Hapus/impor/sinkron akun belum dikerjakan.
- Pilihan N4 tetap kosong, tidak menampilkan data N5.
- Back memulihkan filter/pencarian/halaman, detail berikutnya mengganti detail,
  dan perpindahan tab tetap kembali langsung ke Beranda.
- Tampilan biru/mint, aksen kategori pastel, animasi ubin kana; mendukung
  tema gelap dan preferensi pengurangan animasi. Bar progres tetap dihapus.

### Verifikasi

- PASS tests/kotoba.test.cjs: 1.801 ID/penulisan unik, tidak ada alias ganda,
  kuota 411/822, tujuh sumber, contoh/bacaan, homofon, grup verba, pencarian,
  filter, simpanan, isolasi N4, pagination tanpa terlewat dan duplikat lokal.
- PASS tests/kotoba-navigation.test.cjs: reload detail, Back ke filter/halaman,
  penggantian detail berikutnya, simpan/hapus simpanan dan tab Back Beranda.
- PASS semua lima suite regresi Kana/Kanji/Bunpo/navigasi.
- PASS browser lebar 390px: 15 kartu, filter sumber harian 411 hasil,
  pencarian tabemasu menemukan 食べる, detail bentuk kamus/sopan,
  simpan dan buka arti contoh. Tombol Back memulihkan hasil pencarian.
- Detail tidak meluber horizontal (clientWidth = scrollWidth = 375px,
  sisanya scrollbar iframe). Tangkapan layar detail diperiksa secara visual.
- Otomasi memiliki keterbatasan locator/keyboard iframe; gesture hardware HP
  dan keluaran audio nyata tetap perlu diuji pengguna.
- File QA sementara dihapus sebelum publikasi.

### Berkas

- data/kotoba-n5.json: sumber data kanonis yang dapat diedit.
- data/kotoba-audit.json, data/KOTOBA_AUDIT.md: pilihan dan catatan penggabungan.
- scripts/build-kotoba-data.py: menghasilkan dist/kotoba-data.js.
- dist/kotoba-search.js, dist/kotoba-ui.js, dist/kotoba.css: fitur dan tampilan.


## Penyempurnaan kelompok Kotoba — 27 Oktober 2026

- Pengguna menyetujui perapian kategori. Enam kategori utama dipertahankan,
  subkategori diperjelas menjadi 51 kelompok terurut: kata benda 22 tema,
  kata kerja 3 grup, sifat 2 jenis, keterangan 5 fungsi, angka 9 kelompok,
  ungkapan 10 kelompok.
- 509 kata dalam kelompok Lainnya lama ditinjau bersama kelompok lain.
  Semua kartu kini mempunyai kelompok yang disebutkan secara jelas.
- Tema benda: keluarga/hubungan; orang/identitas; sekolah/bahasa;
  pekerjaan/kantor; makanan/bahan masak; minuman; dapur/alat makan;
  rumah/perabot; pakaian/aksesori; tubuh/kesehatan; alam/cuaca;
  hewan/tumbuhan; tempat/fasilitas; transportasi/perjalanan; arah/posisi;
  negara/kota; waktu/kalender; hobi/olahraga/budaya; teknologi/komunikasi;
  belanja/uang; warna/ukuran/bentuk; konsep/informasi.
- Contoh koreksi kelompok: ご主人 → Keluarga & hubungan, 延長コード →
  Rumah & perabot, 君の名は dan 村上春樹 → Hobi, olahraga & budaya,
  休みの日 → Waktu & kalender. Nominal yen, jam/durasi, tanggal,
  jumlah benda/orang, lantai/urutan dan satuan dipisahkan dalam Angka & hitungan.
- Jumlah kartu per kategori: benda 960, kerja 181, sifat 166, keterangan 55,
  angka/hitungan 227, ungkapan/kata bantu 212. Total tetap 1.801.
- Nama subkategori diurutkan menurut susunan tema yang ditentukan, bukan
  urutan kemunculan kata. Filter kategori/subkategori menampilkan jumlah
  total anggota kelompok; angka ini tetap total kelompok saat pencarian aktif.
- Pindah kategori menghapus subkategori sebelumnya dan kembali halaman 1.
  Riwayat lama yang memakai Lainnya pulih ke Semua subkategori.
- PASS perbandingan dengan versi sebelumnya: semua ID, penulisan, kana,
  romaji, arti, contoh, sumber, alias dan urutan tetap sama. Hanya klasifikasi
  dan metadata pengelompokan yang berubah. Simpanan pengguna memakai ID lama.
- PASS tests/kotoba-taxonomy.test.cjs: 51 kelompok terurut dan terisi,
  seluruh kartu terpetakan, koreksi tematik yang disebut di atas dan jumlah filter.
- PASS tests/kotoba.test.cjs dan kotoba-navigation.test.cjs: pagination 15,
  pencarian, kuota 411/822, deduplikasi, simpanan, Back dan kompatibilitas riwayat.
- PASS browser 390px: tema Dapur & alat makan 29 hasil, Uang & harga 24 hasil,
  Keluarga & hubungan 30 hasil; perubahan kategori memperbarui subkategori.
  Lebar isi 375px = scrollWidth, tidak meluber horizontal. Pratinjau kartu
  Keluarga & hubungan diperiksa. Berkas QA sementara dihapus sebelum terbit.
- Langkah berikutnya tetap uji pengguna pada HP, lalu pembahasan Quiz N5.


## Popup pilihan & penyederhanaan materi — 27 Oktober 2026

- Instruksi pengguna: popup lebih menarik, ringkas, tidak seperti dialog sistem;
  hilangkan keterangan/file sumber dari Kanji, Bunpo dan Kotoba.
- Semua pilihan kategori/subkategori tiga menu kini memakai dialog DeX Gaku:
  lavender/mint, kartu kategori Kotoba dua kolom, tanda pilihan dan jumlah
  dalam badge. Tombol filter membungkus teks panjang agar tidak terpotong.
- Ukuran dialog maksimal 430px dan 64dvh; daftar panjang menggulir di dalam
  panel. Pencarian pilihan tersedia untuk daftar lebih dari delapan entri.
  Pilihan lompat halaman Kotoba juga menggunakan panel ini.
- Penutupan melalui X, area luar, Escape dan browser/HP Back mengembalikan
  fokus dan posisi halaman. Isi halaman belakang dibuat inert sementara.
  Back menutup panel lebih dahulu; memilih langsung menerapkan filter.
- Panel dicatat pada history tanpa menambah kedalaman menu. Reload ketika
  panel terbuka mengembalikan halaman yang mendasarinya. Perubahan kategori,
  pagination dan pencarian tetap memakai fungsi data yang sudah ada.
- Peningkatan kontrol diterapkan ulang setelah pembaruan hasil Kotoba;
  tidak kembali ke dropdown sistem setelah mengetik/mengganti halaman.
- Hapus bagian Tentang pilihan/materi, filter sumber, nama berkas,
  rujukan halaman PDF dan jumlah rujukan dari daftar/detail tiga menu.
  Restore history lama mereset filter sumber yang sudah tidak terlihat.
- Ganti pengantar Kanji menjadi teks belajar; label/catatan pengayaan Bunpo
  dirapikan tanpa menyebut PDF. Asal materi tetap disimpan dalam data/audit
  internal, tidak ditampilkan di antarmuka belajar.
- PASS tests/learning-picker.test.cjs: pilihan, batal/Back, navigasi lebih jauh,
  pembersihan inert/fokus, pencarian dan pilihan aktif.
- PASS tests/learning-menu-ui.test.cjs: daftar/detail tiga menu tanpa sumber,
  termasuk detail pengayaan Bunpo; sumber lama direset; kontrol baru terhubung
  pada render utama maupun pembaruan hasil.
- PASS regresi seluruh suite Kana, Kanji, Bunpo, Kotoba, taxonomy dan navigasi.
- PASS browser lebar 390px: pilih Kata benda, cari dapur dalam subkategori,
  pilih tema (29 hasil), browser Back hanya menutup panel, lompat halaman 2
  menghasilkan 16–29 dari 29. Panel kategori berukuran 354 × 493px dalam
  viewport 390 × 844px; tangkapan layar diperiksa.
- Keyboard/gesture dan ukuran visual pada Android asli tetap perlu dicoba
  pengguna. Screenshot adalah pratinjau browser responsif.
- Berkas QA sementara dihapus sebelum publikasi. STATUS ini menggantikan
  catatan lama yang menyebut filter sumber/tentang materi sebagai fitur UI.


## Rangkuman Bab 1–50 & buku Minna — 27 Oktober 2026

### Keputusan terbaru (menggantikan ketentuan Rangkuman lama)

- Bab 1–50 dapat dibuka tanpa mengganti N5/N4; Rangkuman dikecualikan dari
  keadaan kosong N4. Menu materi lain tetap mengikuti level seperti sebelumnya.
- Semua rangkuman Bunpo dan Kotoba dibuka sekarang untuk pemeriksaan pengguna.
- Kelak akses gratis Bab 1–10; Premium untuk rangkuman Bunpo Bab 11–50 dan
  rangkuman Kotoba Bab 11–50. Belum menerapkan penguncian atau pembayaran.
- Lynk.id dapat dipertimbangkan untuk pembayaran. FAQ resmi menyediakan webhook
  transaksi sukses. Integrasi nanti memerlukan server untuk verifikasi transaksi
  dan pemetaan akun pembeli; redirect pembayaran saja tidak memberikan akses aman.
  Tidak ada integrasi, transaksi, atau janji paket/harga yang dibuat sekarang.

### Materi dan antarmuka

- Ekstrak PDF pengguna: 50 bab, 230 catatan pola dan 2.910 entri Kotoba per bab.
  Pengulangan kata lintas bab dipertahankan sesuai susunan buku; tidak ada
  duplikat penulisan di dalam satu bab. Dataset ini terpisah dari 1.801 kartu
  menu Kotoba, bukan ditambahkan sebagai kartu ganda ke menu tersebut.
- Setiap bab diberi tujuan, satu contoh utama JP/kana/arti, penjelasan susunan,
  satu tip dan satu cek pemahaman tanpa skor. Catatan seluruh pola bab tetap
  tersedia dalam panel lipat. Bukan 230 pelajaran dengan contoh terjemahan lengkap.
- Romaji dapat disembunyikan. Bookmark dan tanda sudah dipelajari disimpan lokal,
  bukan hasil ujian atau bukti sinkron Google.
- Daftar bab: Bunpo/Kotoba/Baca buku; rentang 10 bab dan pencarian judul/tujuan.
  Kotoba dalam bab mempunyai pencarian kana/kanji/romaji/arti, 15 kata per halaman
  dan audio ja-JP perangkat. Tidak ada progress bar.
- Pindah bab berikutnya mengganti riwayat detail; Back memulihkan daftar bab
  beserta filter. Perpindahan navigasi bawah tetap kembali langsung ke Beranda.
- Dua buku pengguna bisa dibaca terpisah: Minna I 204 halaman, Minna II 180.
  Seluruh 384 halaman tersedia, dengan nomor halaman, zoom 100–300%, navigasi
  dan halaman terakhir lokal. Nomor mengikuti urutan PDF termasuk pengantar.
- Buku dipertahankan sebagai gambar halaman scan, bukan teks yang ditulis ulang;
  sumber scan membatasi ketajaman. Materi bab dimuat per kelompok 10 saat dibuka.

### Pemeriksaan dan batasnya

- Audit terperinci data/rangkuman-audit.json: 435 perubahan bidang Kotoba termasuk
  normalisasi tanda baca/lebar karakter dan 29 koreksi/penjelasan catatan Bunpo.
  Angka 435 tidak berarti 435 kesalahan substantif. Contoh: なんんじ → なんじ,
  まちまｓう → まちます, kolom 自分/じぶん tertukar, arti 割れ物注意 kosong,
  serta contoh こませんでした → きませんでした.
- Perjelas は sebagai topik, です dengan nomina, perubahan verba, bentuk potensial,
  pasif, hormat/rendah hati, dan batas penggunaan pola. Belum penelaahan formal
  oleh pengajar eksternal; hasil dapat dikoreksi per bab saat pengguna memeriksa.
- PASS tests/rangkuman.test.cjs dan rangkuman-navigation.test.cjs: semua 50 bab,
  isi dan jumlah sumber, koreksi, pagination tanpa terlewat, pencarian, 50 cek,
  384 aset buku, reload/Back, bookmark lokal, batas halaman dan N4 Bab 50.
- PASS browser HP 390px: Bab 1, jawaban benar, Kotoba 38 kata dengan 15 per halaman,
  pencarian watashi, kembali daftar, buku II halaman 35 dan zoom 125%; gambar
  buku terunduh dan diperbesar di dalam area gulir.
- Data dan antarmuka diuji lokal; gesture Back fisik dan suara nyata tetap perlu
  dicoba pengguna di HP. Autentikasi/sinkron, Premium dan APK belum dibuat.

### Berkas tahap ini

- data/rangkuman-minna.json: data kanonis semua bab.
- data/rangkuman-audit.json dan data/RANGKUMAN_AUDIT.md: provenance/koreksi.
- data/rangkuman-books.json: metadata halaman buku.
- scripts/build-rangkuman-data.py: menghasilkan indeks dan lima kelompok bab.
- dist/rangkuman-ui.js, dist/rangkuman.css: tampilan dan perilaku.
- dist/assets/books/: 384 halaman WebP; dist/assets/rangkuman/: kelompok bab.

### Langkah selanjutnya

Pengguna memeriksa rangkuman Bab 1 terlebih dahulu, lalu koreksi per bab bila
perlu. Fitur Free/Premium ditunda sesuai instruksi. Jangan mengunci Bab 11–50
atau menambahkan checkout sebelum tahap itu diminta.

- Verifikasi akhir: seluruh 12 suite Node lulus. Browser N4 berhasil memuat
  Bunpo Bab 50; lebar isi 375px sama dengan scrollWidth, tanpa luapan horizontal.
  Berkas QA sementara dihapus sebelum pengemasan.


## Revisi Rangkuman versi mudah & buku gulir — 27 Oktober 2026

Keputusan pengguna: gunakan PDF Rangkuman Bunpo Versi Mudah Bab 1–50; bahasa
sederhana untuk pemula, hapus panel bunga/kalimat penutup/tombol Tandai sudah
dipelajari, dan ubah pembaca buku dari satu halaman per klik menjadi gulir vertikal.
Bagian ini menggantikan perilaku lama yang bertentangan di catatan sebelumnya.

- Seluruh 230 catatan Bunpo 50 bab diganti dari PDF versi mudah. Tiap pola memiliki
  paragraf terpisah; tabel perubahan disimpan dalam baris/kolom. Panel pertama
  terbuka, tersedia Buka semua/Tutup semua dan panduan singkatan sederhana.
- Istilah bentuk biasa, bentuk kamus, kata tanya dan V tanpa ます diperjelas.
  Audit data/rangkuman-simple-audit.json mencatat sumber/hash dan 33 koreksi
  editorial, di samping normalisasi istilah/ejaan. Contoh koreksi: ちょうごく →
  ちゅうごく, あこ → あそこ, sifat-na tanpa な sebelum です, dugaan bukan persentase
  pasti, dan ば bukan jaminan hasil pasti. Tidak mengklaim review pengajar formal.
- Contoh utama JP/kana/arti dan cek pemahaman dipertahankan sebagai pengulangan
  setelah catatan. Bahasa penjelasan teknis lama tidak menjadi materi utama lagi.
- Panel bunga, teks motivasi panjang, tombol completion dan badge Dipelajari
  dihapus dari Bunpo maupun Kotoba rangkuman. Simpan bab tetap tersedia.
  Nilai completion lama tidak dipakai lagi, tidak menghapus simpanan pengguna.
- Kedua buku: halaman tersusun terus ke bawah dalam area gulir; tombol slide
  Sebelumnya/Berikutnya dihapus. Lompat nomor, zoom 100–300%, retry gambar,
  serta halaman terakhir tetap tersedia. Gulir memperbarui posisi lokal/history
  tanpa menambah entri Back. Observer dibersihkan saat berpindah menu.
- Ukuran asli gambar dicatat untuk menjaga tempat halaman sebelum gambar
  selesai dimuat; gambar dimuat saat mendekati area baca. 384 halaman tetap utuh.
- Data 2.910 Kotoba beserta ID dan urutan identik dengan versi sebelum revisi.
  Semua Bab 1–50 tetap terbuka di N5/N4. Tidak menerapkan Premium.
- PASS browser 390px: Bab 1 berbahasa sederhana; panel Buka semua; tombol
  Tandai sudah dipelajari tidak ada; isi 375px sama dengan scrollWidth.
  Buku I lompat halaman 51, gambar termuat, gulir ke 53/54 tanpa tombol slide,
  zoom 125% hanya memperlebar area buku; buka kembali pulih ke halaman terakhir.
- Pemeriksaan otomatis meliputi data/paragraf/tabel, jumlah/aset/pagination,
  riwayat dan regresi menu lain. Gesture fisik Android tetap perlu uji pengguna.
- Sumber kanonis: data/rangkuman-minna.json. Regenerasi dengan
  python scripts/build-rangkuman-data.py. Catatan versi lama ada dalam Git/audit;
  gunakan grammarEdition versi-mudah-2026-10-27 sebagai versi terkini.


## Kartu Bunpo ramah pemula — 27 Oktober 2026

- Pengguna meminta kartu buka-tutup seperti referensi: pola besar, arti di bawahnya,
  potongan kalimat dan catatan oranye. Seluruh 230 kartu 50 bab kini memiliki
  arti/judul Indonesia, tanda +/−, judul membungkus teks, dan pemisah isi jelas.
- Bab 1–2 memiliki 12 contoh per kartu dengan potongan kata: kana, kanji opsional,
  arti/fungsi dan penanda partikel oranye. Bacaan ditulis eksplisit, tidak ditebak
  otomatis. Ini belum berarti semua 230 kartu memiliki contoh potongan baru.
- Contoh utama semua 50 bab menampilkan kana secara default. Tombol Tampilkan
  kanji menyimpan preferensi lokal. Pilihan berlaku juga untuk 12 contoh potongan.
  Materi pola/tabel dapat tetap memakai simbol Jepang sesuai kebutuhan belajar.
- Judul Jawaban singkat diperjelas menjadi ungkapan ya/bukan dan artinya.
  Tiga kegunaan の memiliki judul lengkap dan daftar tiga butir; bukan teks terpotong.
- Pengantar sederhana muncul sekali sebelum pertama membuka Bunpo per bab.
  Tidak mengajarkan bentuk kamus atau membuang ます pada pengantar Bab 1.
  Setelah itu cukup tautan Bantuan belajar di tiap bab. Pengantar dapat dibuka
  kembali; Back kembali ke bab asal, melanjutkan pengantar pertama mengganti
  route agar tidak menambah langkah Back. Keadaan pengantar pulih setelah reload.
- Bab 2 memiliki ilustrasi vektor interaktif: saya/teman/benda dengan tiga posisi.
  Tombol これ・それ・あれ menyorot posisi dan memperbarui keterangan yang sesuai.
- Semua 50 cek pemahaman diganti dengan pertanyaan situasional sesuai bab,
  masing-masing tiga pilihan dan penjelasan. Bab 2 menanyakan benda dekat teman;
  jawaban それ, tidak memakai こちら dari Bab 3 dan tidak menyalin kalimat contoh.
  Tidak menambah skor ujian/riwayat dari cek singkat ini.
- 2.910 kosakata, 384 halaman buku dan aturan semua Bab 1–50 terbuka pada N5/N4
  dipertahankan. Tidak menerapkan pembayaran/Premium pada perubahan ini.
- PASS pemeriksaan otomatis: arti seluruh judul, 12 contoh dan bacaan, daftar の,
  50 pertanyaan bab, pengantar pertama/manual/reload/Back, data dan riwayat.
- PASS browser HP 390px: pengantar → Bab 2, ilustrasi それ menyorot dekat teman,
  jawaban B memberi umpan balik benar, contoh berubah kana ↔ kanji, tautan bantuan
  kembali ke bab yang sama. Lebar isi = scrollWidth = 375px (tanpa luapan).
- Contoh bahasa dan latihan belum ditelaah pengajar eksternal. Gesture Back fisik
  Android dan suara TTS tetap perlu uji pengguna. File QA sementara dihapus.

## 2026-10-27 — 12 ilustrasi SVG Bunpo
- Selesai: seluruh enam ilustrasi prioritas tinggi dan enam prioritas sedang.
- File mandiri ada di dist/assets/grammar, nama sesuai permintaan.
- Dipasang pada kartu yang relevan di Bab 2, 3, 10, 11, 17, 18, 24, 29, 30,
  34, 37, 46, 48, 49, dan 50 (12 gambar, 15 penempatan; gambar gabungan dipakai bersama).
- Gaya pastel seragam, latar terang, label Jepang dan Indonesia, alt text, title
  dan desc SVG, skala responsif, lazy loading, tautan Perbesar gambar.
- Bab 2 mengganti gambar inline lama dengan aset SVG mandiri. Diagram baru
  statis; buka-tutup kartu tetap bekerja, dan gambar dapat dibuka berukuran penuh.
- Bab 24: tiga orang saya/A/B; panah saya → A あげます dan A → saya くれます.
  もらいます dijelaskan pada sisi penerima; B adalah orang lain di sekitar.
- Koreksi konsep: 〜ています tidak berarti kejadian pasti terjadi sendiri.
  Bab 29–30 menunjukkan kaca pecah dan jendela sengaja dibuka (bukan dua kaca pecah).
- Bab 48: いかせてください = izinkan saya pergi; いかせます bisa menyuruh
  atau mengizinkan sesuai konteks. Tangga Bab 49–50 menggambarkan sikap berbahasa.
- PASS: XML seluruh 12 SVG, render 15 penempatan dan resolusi seluruh berkas,
  sintaks JS, rangkuman.test.cjs dan rangkuman-navigation.test.cjs, git diff --check.
- PASS browser: galeri desktop dan Bab 2 di iframe 390px; gambar termuat,
  main clientWidth = scrollWidth = 375px, lebar gambar 317px.
- Script pembangun SVG disimpan di scripts/build-grammar-illustrations.py.
- Materi, kosakata, latihan, akses bab dan kebijakan Premium tetap seperti sebelumnya.

## 2026-10-28 — Menu Quiz lengkap (materi N5)
- Kana: pilih Hiragana/Katakana, pilih beberapa huruf, semua huruf atau seluruh
  kelompok Seion/Yōon/Dakuten/Handakuten; konfirmasi dan sesi 5–20 soal.
- Kotoba: arti → Jepang, Jepang → arti, campuran dua arah; beberapa kategori,
  subkategori, dan halaman dapat dipilih. Setiap subkategori dibagi halaman tetap
  berisi maksimal 15 kata sesuai urutan materi. Halaman tersisa <5 kata disembunyikan.
  Konfirmasi menampilkan cakupan dan pilihan jumlah 5–20 sesuai jumlah materi.
- Kanji: empat arah soal, pilihan On’yomi/Kun’yomi untuk arah bacaan, beberapa
  kategori sekaligus, konfirmasi dan sesi 5–20. Bacaan yang tidak tersedia tidak
  dijadikan soal. Pengecoh dengan bacaan yang sama dikeluarkan agar tidak ada
  dua jawaban benar. Okurigana Kun’yomi ditampilkan dalam tanda kurung.
- Bunpo: empat jenis (lengkapi, pilih kalimat sesuai arti/pola, arti/fungsi,
  susun kata). Beberapa kategori/subkategori + Pilih semua. Batas sesi 5–10.
- Bank Bunpo: 43 subkategori × 4 jenis × 15 = 2.580 soal. Dasarnya 645 situasi
  dari 129 kerangka kalimat yang ditulis untuk latihan, masing-masing lima konteks
  kosakata. Satu situasi dipakai pada empat bentuk latihan, bukan 2.580 pola unik.
  Mode arti/fungsi mencakup 8 soal arti dan 7 fungsi per subkategori.
  Susun kata memakai ketukan, urungkan, dan periksa; potongan pertama tetap.
  Tugas meminta urutan pola contoh agar tidak menganggap seluruh urutan alternatif
  Jepang salah secara umum. Penjelasan dan tinjauan jawaban tersedia setelah sesi.
- Campuran: langsung konfirmasi, total 40, tepat 10 Kana/10 Kanji/10 Kotoba/10 Bunpo.
  Situasi Bunpo tidak diulang pada jenis yang berbeda dalam satu sesi campuran.
- Seluruh sesi: waktu awal 60 detik, benar +3 detik, salah -5 detik/-1 nyawa.
  Tiga nyawa; nol waktu/nyawa = game over. Umpan balik 2,4 detik dengan waktu
  berhenti, lalu otomatis lanjut/hasil. Waktu berjalan kembali seusai jeda,
  termasuk bila browser berada di latar belakang. Tidak ada tombol lanjut soal.
- Timer memakai deadline nyata. Reload tidak mengulang waktu/nyawa. Sesi disimpan
  lokal, dapat dilanjutkan dari menu bila route browser hilang. Hasil selesai,
  gagal, atau dihentikan ditulis sekali ke Riwayat; maksimal 40 riwayat seperti sebelumnya.
- Navigasi keluar saat bermain memakai konfirmasi; X/Escape/Back pada dialog
  melanjutkan sesi. Berpindah tab mengakhiri sesi setelah dikonfirmasi. Back antar
  tab tetap kembali Beranda. Level terkunci saat sesi aktif.
- Soal utama selalu berasal dari materi yang dipilih. Pengecoh diprioritaskan dari
  pilihan tersebut; bila tidak cukup tiga pengecoh berbeda, dipakai materi N5 lain.
  Kana dengan romaji sama dan Kotoba/kanji dengan arti atau bacaan bertumpang tindih
  tidak dijadikan pilihan ganda yang sama.
- Tampilan pastel tenang, huruf cukup besar, pilihan multi-select, semua, preview
  cakupan yang bisa dibuka, umpan balik terlihat otomatis di HP, tema gelap, dan
  animasi fade yang mengikuti pengaturan/perangkat.
- PASS 14 suite Node: materi/menu lama, bank 43×4×15, empat pilihan unik, cakupan
  pilihan, filter halaman kecil, batas soal, pembagian campuran, timer/bonus/penalti,
  anti double tap, 2,4 detik, auto-next, susun kata/urungkan, reload, Back/tab/modal,
  game over nyawa/waktu/latar belakang, riwayat satu kali, pembersihan interval,
  dan unduhan bank gagal dengan tombol retry (tanpa retry berulang saat render).
- PASS browser 390px: Kana kelompok → konfirmasi 5 → jawaban benar → auto-next;
  reload wrapper → lanjut sesi tersimpan → waktu habis dengan nilai tetap;
  Bunpo susun kata Frasa benda → benar/auto-next; dialog keluar; Kotoba dua
  kategori + dua subkategori + dua halaman (15+6 = 21 materi), batas sampai 20;
  Kanji → Kun’yomi, kategori Alam/cuaca (14 bacaan tersedia), permainan dan keluar.
  main clientWidth = scrollWidth = 375px pada pilihan Kana dan konfirmasi Kotoba.
- Cakupan: bank Kanji/Kotoba/Bunpo/Campuran N5; Kana tersedia pada N5/N4.
  N4 lain, akun/sinkronisasi, APK, Simulasi CBT, serta Premium belum dikerjakan.
  Bank belum ditelaah pengajar eksternal; sumber dan cara membangun ada pada
  data/quiz/AUDIT.md, scripts/build-quiz-bunpo.py, dan scripts/quiz/frames.py.
- PASS browser: Campuran langsung ke konfirmasi 40 soal dengan 10 per materi.
- Kotoba Jepang → arti menampilkan bacaan kana di bawah kata bila tulisannya berbeda.

## 2026-10-28 — Paket Kana, jumlah soal bertahap, dan tanpa kedipan
- Pemilihan Kana sekarang hanya berupa paket per baris: A–I–U–E–O,
  KA–KI–KU–KE–KO, dan seterusnya. WA–WO dan N digabung menjadi WA–WO–N.
  Berlaku pada Hiragana dan Katakana; Yōon per tiga gabungan, Dakuten dan
  Handakuten per baris. Total 26 paket/104 huruf per jenis tulisan.
- Bisa memilih beberapa paket, seluruh kelompok, atau Pilih semua. Pilihan
  individual lama dalam route disesuaikan menjadi paket lengkap saat kembali
  ke setup; isi sesi yang sudah berjalan tetap dipertahankan.
- Jumlah soal hanya 5/10/15/20, dengan tombol +5. Batas pilihan dibulatkan
  ke kelipatan lima terdekat di atas jumlah materi, maksimal 20 (Bunpo 10).
  Contoh: 7 materi → batas 10; 11 → batas 15; 16 atau lebih → batas 20.
- Soal sesungguhnya = nilai terkecil antara jumlah yang dipilih dan materi
  tersedia. Semua materi dipakai jika permintaan melebihinya, tanpa pengulangan.
  Konfirmasi menjelaskan jumlah permintaan dan jumlah sesungguhnya; tombol
  Mulai menampilkan jumlah sesungguhnya. Sesi dan hasil memakai ukuran deck aktual.
- Minimal materi tetap 5 seperti keputusan awal; paket 3 huruf perlu digabung
  dengan paket lain. Campuran tetap 40 soal (10 per materi).
- Efek berkedip berasal dari animasi `.page` yang dimulai ulang setiap render.
  Seluruh halaman kuis, pilihan, jawaban/umpan balik, dan modal keluar kini tanpa
  animasi atau transisi, tanpa gerakan tombol dan sorot tap bawaan HP. Status
  pilihan/benar/salah tetap berubah warna secara langsung. Menu lain tidak diubah.
- PASS 14 suite Node, termasuk partisi 26 paket/104 huruf, WA–WO–N kedua skrip,
  pilihan beberapa paket, migrasi route, batas 7→10/11→15/Bunpo10, jumlah aktual
  7 dan 11, konfirmasi aktual, sesi 8 soal selesai tepat pada soal ke-8, tidak
  mengulang soal, serta seluruh regresi timer/nyawa/navigasi/data lama.
- PASS browser HP 390px: paket A–I–U–E–O + WA–WO–N = 8 huruf; hanya pilihan
  5 dan 10; tombol +5 berhenti/disabled di 10 dan konfirmasi menjelaskan 8 soal.
  Computed animation-name = none dan transition-duration = 0s setelah memilih;
  lebar halaman kuis 335px = scrollWidth 335px (tidak meluber).

## 2026-10-28 — Jeda kuis, accordion Kana, dan bacaan Kotoba
- Selesai: jeda umpan balik semua kuis dipersingkat dari 2,4 menjadi tepat 2 detik;
  aturan konfirmasi diperbarui. Waktu sesi tetap berhenti selama umpan balik.
- Seion, Yōon, Dakuten, dan Handakuten sekarang berupa accordion +/−, awalnya
  tertutup. Paket baris dan tombol semua berada di dalam kelompok. Buka/tutup
  tidak menghapus pilihan; kelompok tetap terbuka saat paket dipilih.
- Pilihan jawaban Kotoba Arti → Jepang memakai Jepang（kana） bila berbeda.
  Jepang → arti tetap memakai kana di bawah kata; berlaku juga untuk soal
  Kotoba dalam Campuran. Tampilan sesi tersimpan lama juga diberi bantuan kana.
- Tidak ada animasi/blink pada accordion atau jawaban; teks jawaban membungkus.
- Validasi: seluruh 14 suite Node lulus, termasuk batas tepat 1999/2000 ms,
  auto-next, timer/lives/reload, jawaban Kotoba setelah shuffle dan Campuran,
  serta empat accordion. Syntax JS dan git diff --check lulus.
- Browser 390 px: buka Seion, pilih A–I–U–E–O, tutup Seion; pilihan tetap 1 paket /
  5 huruf dan konfirmasi aktif. Screenshot diperiksa. API crop screenshot timeout;
  screenshot viewport alternatif berhasil. Tidak ada perubahan materi atau akses.

## 2026-10-28 — Hapus kotak umpan balik kuis
- Kotak penjelasan setelah menjawab (Betul/Belum tepat, penalti, jawaban,
  penjelasan, dan teks berpindah otomatis) dihapus dari semua kuis.
- Warna pilihan benar/salah dan tanda centang tetap tampil. Jeda tetap 2 detik,
  lalu otomatis lanjut; timer, nyawa, skor dan ulasan hasil tetap berfungsi.
- Auto-scroll menuju kotak yang dihapus juga dilepas; aturan konfirmasi kini
  menyebut penanda warna jawaban selama jeda.
- Validasi: dua suite Quiz/session lulus, syntax JS dan diff check lulus;
  renderer empat jenis soal pada status benar/salah tanpa kotak penjelasan.

## 2026-10-28 — Audit dan revisi 12 ilustrasi rangkuman Bunpo
- Semua 12 SVG digambar ulang/dilengkapi menurut daftar pengguna: bentuk penunjuk
  benda/tempat, 11 posisi, hitungan umum, garis waktu dengan contoh, tiga panel
  memberi/menerima, dua kalimat pasif lengkap, tokoro/bakari, kausatif dan tangga
  hormat/merendah beserta rumus umum.
- Perbandingan Bab 29–30 sekarang memakai dua jendela identik yang terbuka,
  berdampingan. Pasangan あく／あける dan われる／わる dibetulkan; keterangan
  Bab 30 diperjelas agar tidak menganggap bentuk intransitif selalu spontan.
- Gambar perbandingan hanya di kartu Bedakan Bab 30. Duplikat pada Keadaan setelah
  suatu kejadian Bab 29 dihapus. Diagram memberi/menerima ditambahkan ke Bab 7
  dan tetap dipakai di Bab 24. Total 12 aset / 15 penempatan.
- Audit lengkap: data/GRAMMAR_ILLUSTRATION_AUDIT.md. Generator SVG diperbarui.
- Validasi: seluruh 14 suite Node lulus, 12 SVG XML valid, pemeriksaan visual dan
  batas teks browser selesai. Dua label bertumpuk diperbaiki dan dicek ulang.
  Bab 30 diuji pada 390 px, gambar termuat dan tidak meluber. Diff check lulus.

## 2026-10-28 — Prototipe Simulasi JFT / JLPT N5
- Selesai sebagai pratinjau terpisah: dist/prototipe-simulasi/ (HTML/CSS/JS).
  Belum mengganti menu Simulasi utama; menunggu penilaian desain pengguna.
- Alur lengkap menu → paket → aturan → mengerjakan → hasil + pembahasan.
  Contoh JFT 8 soal/4 bagian; contoh JLPT N5 9 soal/3 sesi.
- PC dengan sidebar nomor; tablet menyesuaikan dua kolom; HP satu kolom dan
  dialog nomor. Timer tetap terlihat, navigasi bawah, penanda tinjau, ubah
  jawaban, peringatan soal kosong, konfirmasi selesai/keluar.
- JFT timer total 60 menit, bagian lampau terkunci, menyimak maju saja dan audio
  maksimal 2 kali. JLPT adaptasi digital: tiga timer 20/40/30; audio masih manual.
- Soal dan skor hanya contoh. Tidak ada skor berskala/kelulusan resmi, integrasi
  riwayat/Google atau paket lengkap. Audio TTS bergantung suara Jepang perangkat;
  pesan alternatif + transkrip tersedia. Detail: data/SIMULATION_PROTOTYPE.md.
- Uji Node prototipe lulus; browser PC/390 px/820 px lulus alur terkait. HP dan
  tablet tanpa overflow, reload menjaga jawaban/timer. Audio suara nyata tidak
  dapat diverifikasi di browser uji yang tidak memiliki suara Jepang.

## 2026-10-28 — Simulasi tanpa pembahasan + paket 1–4 + prompt Claude
- Permintaan terbaru: hapus pembahasan; tim tiga agen mengerjakan paket 1–4;
  Claude mendapat paket 5–6. Prototipe tetap di /prototipe-simulasi/.
- Hasil hanya nilai mentah/akurasi, terjawab/kosong, durasi dan per bagian.
  Halaman/tombol pembahasan dihapus; jalur review lama tidak dapat dipulihkan.
  Soal bank baru tidak memiliki field why/explanation/rationale.
- Empat paket N5 ×71 soal [21,26,24] dan empat paket latihan JFT A1 ×50
  [13,12,13,12], total484. Semua tersambung ke pemilihan paket dan rules.
- Ketiga anggota tim: penulis paket1–2, penulis paket3–4, pemilik integrasi/
  pemeriksaan/prompt. Penulis memeriksa kunci, bahasa, soal bintang, pilihan
  ambigu dan duplikasi. Beberapa soal diperbaiki setelah ulasan silang.
- A1 adalah sasaran latihan; JFT resmi tetap mengukur A1–A2. Jumlah soal N5
  merupakan blueprint latihan, bukan klaim jumlah persis ujian resmi.
- Setiap soal menyimak memiliki naskah Jepang/transkrip. Semua bank `draft`:
  pemeriksaan pengajar/penutur Jepang dan audio rekaman masih diperlukan.
  TTS prototipe tetap bergantung suara Jepang perangkat; JLPT audio manual.
- SessionStorage v2 menyimpan nomor paket dan jawaban; v1 diabaikan agar hasil
  pratinjau lama tidak tertukar dengan bank baru. Aplikasi utama tidak diubah.
- Prompt lengkap: dist/prototipe-simulasi/authoring/PROMPT_CLAUDE_PAKET_5_6.md.
  Meliputi empat keluaran JSON, 0-based answer/section, blueprint/subjenis,
  instruksi Jepang/Inggris/Indonesia, kualitas, audio, dan larangan pembahasan.
  Paket5–6 belum diterima dari Claude. Delapan JSON paket1–4 diekspor sebagai
  pembanding, ZIP prompt+acuan tersedia pada folder authoring.
- Validasi: kedua suite simulation-bank dan simulation-prototype lulus;
  484 ID/soal unik (fingerprint lengkap), jumlah section/subjenis N5 tepat,
  kunci/opsi valid, skrip/transkrip cocok, tanpa field pembahasan, seluruh
  8 alur menghasilkan skor sesuai data, reset/pilih paket/reload dan timeout
  global/per bagian diuji. Syntax tiga JS dan git diff --check lulus.
- Browser PC: pilih N5paket4, rules71/[21,26,24], mulai20menit, jawaban pertama
  disimpan, akhir awal dengan konfirmasi menghasilkan1/71,70kosong; hasil
  tidak memiliki pembahasan. Bukti screenshot tersimpan di scratch.
- Browser HP390: pilih JFTA1paket2, rules50, mulai60menit; dialog nomor13soal,
  pindahke13 dan akhir bagian memberi peringatan13kosong. Body/scrollWidth
  sama375px (tanpa overflow). Audio suara nyata tidak diuji ulang.

## 2026-10-28 — Melanjutkan paket1–4 sambil menunggu Claude
- Audit silang dilakukan: penulis paket1–2 meninjau242soal paket3–4 dan
  sebaliknya. Kedua laporan ada di data/SIMULATION_AUDIT_PACKS_12.md dan _34.md.
- Diterapkan16revisi: dua opsi nama sama-sama sah, selalu berjalan vs kondisi
  hujan, sepatu/daftar belanja, distraktor alat perjalanan, bintang dua susunan,
  jam tidur hari ini, penempatanつぎの, piring di bawah gelas, serta redaksi
  setengah kue/tawaran membawa barang/berlari di sisi sungai/kelas/apron/sepatu
  indoor/menyiram bunga/perbandingan pena. Tanpa menambah pembahasan.
- Opsi paket3–4 dipermutasi sekali dengan indeks kunci yang tetap benar untuk
  menghilangkan pola siklus posisi kunci. Total tetap484soal/8paket, semua draft.
- Pemulihan sesi diperkuat: validasi isi state, rentang indeks/jawaban, flags,
  plays, waktu dan versi bank. Sesi rusak/usang kembali ke pilihan paket dengan
  pesan; jawaban lama tidak dinilai dengan susunan opsi yang telah berubah.
- Ditambahkan kontrak bersama dan CLI JSON-only/hanya-baca untuk paket5–6;
  memeriksa field, jumlah, ID, kunci/opsi, HTML/audio, dan duplikat terhadap
  paket1–4 tanpa mengubah aplikasi. Panduan SIMULATION_IMPORT_GUIDE.md.
- JSON referensi dan ZIP diperbarui. Paket5–6 masih menunggu Claude, belum
  dimasukkan. Pemeriksaan pengajar/penutur Jepang dan audio rekaman tetap perlu.
- Validasi: simulation-bank, simulation-prototype, simulation-import lulus;
  termasuk semua8alur, skor, timer, pemulihan state rusak/usang, penolakan
  duplikat/malformedJSON/HTML tidak aman/kunci salah/skrip audio hilang. Syntax
  bank/app/validator dan diff check lulus. Pembaruan berupa data/validasi sesi;
  tidak mengubah layout, sehingga tidak dilakukan QA browser baru pada tahap ini.

## 2026-10-28 — Referensi Marugoto, Irodori dan contoh ujian resmi
- Melanjutkan permintaan pengguna mencari acuan soal. Diperiksa bahan publik
  Irodori StarterA1/Can-do, Marugoto StarterA1 Katsudoo/Can-do Indonesia dan
  penjelasan Rikai, halaman/contohN5 resmi serta pedoman jenis soal/waktu JLPT,
  contoh JFT dan FAQ resmi. Tidak mengklaim membaca seluruh buku cetak.
- Fakta kurikulum: Irodori Starter relevan untuk sasaranA1 JFT menurut FAQ JF;
  N5 tidak disamakan otomatis denganA1. Contoh lama JLPT hanya acuan gaya butir,
  pedoman waktu/format terkini didahulukan. Tidak memakai kumpulan bocoran.
- Direvisi12soal A1 (tiap paket nomor024/034/043) sebagai soal orisinal: meminta
  ulang, tujuanbus, tombolAC, kasir, konfirmasijumlah, panduanlantai, umurkeluarga,
  lokasitelepon, tarifanak, meminjampen, harganotebook dan posteracara.
- Pemetaan sumber/tujuan perID: data/SIMULATION_REFERENCE_MAP.json. Ini pemetaan
  editorial ke Can-do, bukan salinan soal atau pengesahan JapanFoundation.
- Dua peninjau silang memeriksa enam soal baru masing-masing, tanpa kesalahan
  konkret yang ditemukan. Jumlah/ID/posisi kunci tetap; 8paket/484soal draft.
- Bank N5 tidak diubah pada tahap ini; kategori14jenis sesuai blueprint yang
  diperiksa terhadap halaman resmi. Menyimak TTS/manual tetap belum rekamanfinal.
- Dokumen referensi dan tambahan prompt Claude disimpan di authoring; prompt
  utama menautkan tambahannya. JSON acuan dan ZIP diperbarui. Format5–6 tetap.
- BANK_REVISION diperbarui untuk menolak pemulihan jawaban atas versi soal lama.
  Tanpa perubahan layout/pembahasan; hasil tetap ringkas. STATUS diperbarui.
- Validasi: tiga suite simulation-bank/prototype/import lulus, syntax3JS bank/
  app lulus dan git diff --check lulus. Tidak ada QA browser baru untuk perubahan
  data/referensi ini. Paket5–6 masih menunggu Claude.

## 2026-10-28 — Perbaikan tombol Back Simulasi
- Penyebab: go selalu pushState; tombol kembali dan tombol menu dari hasil
  menumpuk paket/menu di atas hasil/aturan lama. popstate lalu merender entri lama.
- Ditambahkan navigation.js dengan jalur hierarkis/identitas alur. Cabang selesai
  dirapikan saat memilih paket/menu. Tombol kembali halaman tidak menambah entri
  balik lagi. Forward ke alur usang dan entri legacy tidak memulihkan sesi selesai.
- Hasil→Pilih paket lagi→Back kini menu simulasi; Back berikutnya webutama/keluar.
  Hasil→Menu simulasi→Back kini webutama/keluar. Run selesai dibersihkan saat
  meninggalkan hasil, reload tidak menambah riwayat baru. Tautan beranda memakai
  jalur keluar yang sama. BFCache disinkronkan ke sesi tersimpan.
- Back saat ujian aktif menampilkan konfirmasi; Back ketika dialog terbuka hanya
  menutup dialog. Jawaban/deadline tetap; tidak kembali ke aturan lama.
- Uji regresi baru dengan simulator riwayat asinkron: kedua laporan pengguna,
  tombol kembali halaman, Back langsung dari hasil, beberapa sesi berulang,
  dialog ujian, reload, Forward usang, tautan beranda dan riwayat legacy lulus.
  Suite simulation-prototype8paket juga lulus setelah memakai history simulator.
- Browser Chromium nyata: JFT hasil→paket→Back→menu→Back→Beranda web lulus.
  N5 Backujian membuka dialog, Backlagi menutupnya; lalu hasil→menu→reload→Back
  menujuBeranda web lulus. Tidak menguji pada Android fisik. Layout/banksoal
  tidak diubah. Bukti screenshot beranda setelahBack tersimpan di scratch.
- Syntax app/navigation dan git diff --check lulus.

## 28 Oktober 2026 — Paket Claude 5–6 dan integrasi Simulasi

- [x] Terima dan audit keempat JSON Claude: 242 soal. Struktur lulus; 20 soal direvisi untuk salah tulis, konteks/opsi ambigu, kolokasi, pertanyaan audio, dan susunan bintang. Catatan di data/SIMULATION_AUDIT_CLAUDE_56.md dan JSON revisi.
- [x] Aktifkan bank-packs-56.js. Kini 6 paket N5 × 71 dan 6 paket JFT A1 × 50 = 726 soal. Tanpa pembahasan; tetap latihan draf dan audio TTS.
- [x] Hubungkan tombol Simulasi di Beranda dan Quiz & simulasi ke modul asli, hapus placeholder 3 soal, akses tanpa berganti N5/N4. Path /prototipe-simulasi/ dipertahankan.
- [x] Simpan skor, paket, durasi, jawaban/kosong dan perbagian ke riwayat lokal, satu catatan per percobaan; muat ulang saat kembali ke web utama. Gagal penyimpanan tidak menghilangkan layar hasil. Google belum aktif.
- [x] Pertahankan Back: hasil→paket→Back menu→Back Beranda; masuk dari tab/detail web utama juga merapikan riwayat ke akar.
- [x] Suite bank, 12 alur simulasi, navigasi simulasi/utama, impor, quiz-session, kotoba/bunpo/rangkuman-navigation lulus. Browser Chromium JFT paket6 hasil1/50 muncul di Riwayat utama; Back sesuai. Android fisik belum diuji.

## 28 Oktober 2026 — Simulasi menjadi menu di dalam aplikasi utama

- [x] Hapus perpindahan dokumen pada tombol Simulasi. Modul dirender langsung di area #app seperti Kana, Quiz dan Kotoba; header utama, sidebar dan navigasi bawah tetap milik aplikasi utama.
- [x] Gaya Simulasi dibatasi pada .simulation-module, mengikuti warna/tema aplikasi. Hilangkan header merek ganda; tombol ujian berada di area konten dan menyesuaikan navigasi bawah pada layar kecil. Tanpa iframe, tanpa blink.
- [x] Gunakan mesin soal/timer/penilaian yang sama, diisolasi agar tidak menimpa render, state, audio, atau dialog menu lain. Generator: scripts/build-embedded-simulation.py; bridge dan style override di scripts/embedded-simulation-*.
- [x] Hubungkan riwayat Simulasi dengan router utama. Root Simulasi depth1; paket/aturan/ujian depth2/3/4. Hasil→paket→Back→menu→Back→Beranda. Sesi selesai tidak dibuka kembali dari cabang lama. Pindah tab saat ujian meminta konfirmasi; jawaban dan deadline tetap saat batal/refresh.
- [x] Tautan /prototipe-simulasi/ lama mengarah ke menu utama melalui #simulasi; hash dibersihkan setelah masuk. Bank 12 paket/726 soal dan hasil Riwayat lokal dipertahankan.
- [x] Suite native Simulasi untuk 12 paket, dialog bernamespace, Back, keluar/batal, pemulihan sesi, riwayat lokal dan pembersihan timer lulus. Bank/prototipe/navigasi utama dan Simulasi, quiz-session, kotoba/bunpo/rangkuman-navigation lulus. Syntax dan diff check lulus.
- [~] Browser Chromium menampilkan header/sidebar utama, paket6 JFT, aturan, soal, pilihan jawaban, dan dialog Back pada URL root yang sama. Setelah koreksi namespace dialog, percobaan reload browser pengujian timeout; browser tidak merespons pada pengecekan berikutnya. Verifikasi visual akhir setelah reload dan Android fisik belum selesai; pemulihan sesi dan handler dialog sudah tercakup pengujian otomatis.

## 28 Oktober 2026 — Rapikan Simulasi sesuai tanda merah

- [x] Hapus indikator langkah 1–5 dari menu/paket/aturan/hasil dan tombol kembali tambahan Jenis simulasi/Paket soal. Tombol kembali standar halaman tetap ada.
- [x] Jawaban Simulasi menjadi satu kolom penuh pada semua ukuran layar; teks membungkus di dalam kartu, nomor tetap di kiri. Ini mengatasi CSS grid jawaban Quiz yang sebelumnya ikut memengaruhi Simulasi.
- [x] Hapus kontrol dan isi Transkrip bantuan dari layar menyimak, serta petunjuk fallback yang menyuruh memakai transkrip. Audio TTS dan naskah sumber internal tetap tersedia; pengguna tidak melihat naskah jawaban.
- [x] Klik jawaban sekarang memperbarui kelas/ARIA tombol yang sudah ada, nomor soal, jumlah terjawab dan status tersimpan tanpa render ulang halaman atau memindah fokus/scroll. Hilangkan penyebab animasi blink di leluhur .page; padding/border pilihan tetap stabil.
- [x] Suite native/prototipe untuk 12 paket, navigasi utama/Simulasi serta tes pilihan tanpa redraw lulus. Browser Chromium mengonfirmasi 0 indikator/Back tambahan, 0 transkrip, jawaban satu kolom tanpa overflow, pilihan tersimpan dan navigasi antarbagian berjalan. Screenshot terbaru tersimpan; Android fisik belum diuji.

## 28 Oktober 2026 — PNG soal dan layar ujian penuh

- [x] Ganti renderer SVG generik dengan 23 ilustrasi PNG asli beresolusi tinggi untuk seluruh 30 soal bergambar. Pemetaan memakai ID soal agar gambar sesuai situasi, bukan kategori gestur umum. Gambar dapat dipakai ulang untuk situasi yang sama; alt berbahasa Indonesia tersedia.
- [x] Arsip prompt dan mode built-in ImageGen: data/SIMULATION_SCENE_PROMPTS.json. Aset: dist/assets/simulation-scenes/. Bank 726 soal, audio dan kunci jawaban tetap.
- [x] Area ujian memenuhi lebar area aplikasi; hapus batas lebar, padding luar, bingkai kartu dan celah atas. Ponsel memakai lebar layar dengan padding baca di dalam, desktop mempertahankan sidebar utama. Tidak menambah perpindahan dokumen atau blink pilihan.
- [x] Tes cakupan 30 gambar/23 PNG, resolusi/berkas, urutan pemuatan, renderer dan scope CSS lulus. Suite native/prototipe, navigasi simulasi/utama dan quiz-session lulus.
- [x] Browser Chromium menampilkan soal N5 paket 1 nomor 64 dengan PNG buku di rak tinggi yang berhasil dimuat; lebar konten 1124px memenuhi ruang setelah sidebar dan padding luar nol. Screenshot disimpan. Android fisik belum diuji.

## 29 Oktober 2026 — Menu Kaiwa N5

- [x] Ganti contoh kafe satu skenario dengan tiga skenario, empat baris per skenario: Perkenalan/Ryota, Belanja/Hori, Restoran/Hori. Data terpisah di kaiwa-data.js; kana, romaji, arti dan dua pengecoh beserta alasan setiap giliran pemain.
- [x] Baca & dengar: NPC kiri/pemain kanan, tap membuka romaji/arti, tombol audio per bubble serta Putar semua berurutan. Latihan: tampil bergiliran, tiga pilihan acak, salah diberi alasan Indonesia dan dinonaktifkan tanpa redraw/blink, benar lanjut, selesai/ulangi/menu.
- [x] UI mobile-first bernuansa pixel, DotGothic16/Noto Sans JP, warna scoped, tema gelap, fokus keyboard, label ARIA, reduced motion. Integrasi hanya renderer/lifecycle index dan snapshot router; isi modul lain tetap.
- [x] Single-player Audio dengan fallback speechSynthesis ja-JP, token pembatalan, timeout, berhenti saat pindah mode/skenario/menu. Preferensi gender suara fallback bergantung perangkat. Riwayat lokal setelah latihan selesai.
- [x] Skrip Bash generate-kaiwa-audio.sh memakai env ELEVENLABS_API_KEY, model multilingual_v2, voice ID Hori wanita dan Ryota/pemain pria, skip file tersedia, HTTP/error validation dan simpan atomik. Dry-run/syntax lulus. MP3 ElevenLabs BELUM dibuat karena key belum tersedia; saat ini memakai fallback perangkat.
- [x] Tes Kaiwa untuk urutan latihan, salah/coba lagi tanpa redraw, ketukan ganda, selesai tunggal, playlist/fallback/gender/cancel/cleanup dan Back/reload/tab lulus. Regresi navigation, simulation-embedded, quiz-session, rangkuman-navigation lulus.
- [x] Browser Chromium: buka baca, tap arti, salah dinonaktifkan, dua balasan benar sampai selesai, Menu Kaiwa→Back Beranda sesuai. Screenshot dialog Belanja disimpan. Android fisik dan produksi MP3 belum diuji.
- [x] Panduan lengkap data/KAIWA.md dan paket kode dist/downloads/dex-gaku-kaiwa.zip disiapkan.

## 29 Oktober 2026 — Kaiwa v2 dan revisi voice unggahan

- [x] Terapkan dex-gaku-kaiwa-v2-2.zip setelah audit perubahan kode: 10 skenario × 8 kalimat (40 giliran pemain), termasuk koreksi alur Telepon. Renderer/CSS/wiring yang sama dipertahankan, modul belajar lain tetap.
- [x] Ganti audio dari kaiwa-audio.zip terbaru: 20 klip Ryota diperbarui (baris NPC jiko/michi/nichi/kyoka/kansou); 60 lainnya sama. Seluruh 80 MP3 sesuai tepat dengan ID dan indeks baris data. ZIP tidak memuat metadata voice ID baru, jadi tidak menebak ID generator.
- [x] ffprobe membaca 80/80 sebagai MP3 berdurasi positif (0,97–4,08 detik), total 176,7 detik. Tidak menilai pelafalan/isi rekaman lewat decode metadata.
- [x] node tests/kaiwa.test.cjs lulus untuk 10 skenario/80 baris; kaiwa-navigation.test.cjs dan kaiwa-audio.test.cjs lulus. Syntax JS/Bash serta diff check lulus.
- [x] Browser Chromium: daftar menampilkan 10 situasi, Cerita Liburan terbuka dengan 8 bubble, Putar semua memulai audio. Android fisik belum diuji.
- [x] Panduan data/KAIWA.md diperbarui, skrip paket/Termux dari v2 terpasang dan paket unduhan Kaiwa disegarkan dengan kode serta 80 audio terbaru.

## 29 Oktober 2026 — Persona Hori/Ryota dan audio jiko-4

- [x] Terapkan ZIP audio terbaru: hanya jiko-4.mp3 yang berubah; 79 lainnya tetap. ffprobe membaca jiko-4 sebagai MP3 durasi 3,37 detik.
- [x] Sesuaikan metadata NPC ke Hori/wanita. Label/avatar mengikuti gender: wanita H/Hori, pria R/Ryota. Pemain berlabel Ryota · Kamu dengan avatar R. Nama tokoh yang diucapkan dalam naskah tetap mengikuti dialog audio; persona suara terpisah.
- [x] Pakai helper persona yang sama pada bubble, kartu/header dan preferensi TTS. Override line.gender didukung; generator memakai aturan gender yang sama. Data tidak bergantung nama NPC untuk menentukan inisial.
- [x] Tes Kaiwa, navigasi, 80 aset audio dan pemetaan persona per gender/per baris lulus. Syntax JS/Bash dan diff check lulus. Tidak melakukan klasifikasi gender otomatis dari pitch atau mengklaim mendengar seluruh audio.
- [x] Browser Chromium mengonfirmasi bubble NPC H/Hori dan pemain R/Ryota · Kamu pada Perkenalan; tombol kalimat ke-4 dapat dipicu. Screenshot pemeriksaan disimpan. Android fisik belum diuji.

## 29 Oktober 2026 — Buku, bacaan N5 dan contoh dongeng bergambar

- [x] Menu Cerita membuka Buku dalam aplikasi utama: rak horizontal N5/Dongeng, daftar vertikal, detail, bab, membaca, kuis dan hasil. Dictionary rak mendukung N4 berikutnya tanpa menulis ulang renderer.
- [x] Data Payung Biru dari ZIP dipertahankan persis. Satu contoh Issun Bōshi dibuat lengkap (12 kalimat, empat halaman berilustrasi, tiga soal), mengikuti brief agar contoh ditinjau dahulu sebelum dongeng lain.
- [x] Tulis ulang dongeng tradisional dengan bahasa Jepang sederhana, terjemahan dan penjelasan Indonesia baru. PDF modern hanya referensi alur, tidak disalin/didistribusikan. Sumber klasik domain publik dan referensi antarmuka dicatat dalam data/CERITA_README.md.
- [x] Dua sampul 600×900 dan empat ilustrasi 960×640 memakai WebP asli dari built-in ImageGen, tanpa SVG; sampul <120 KiB dan halaman <160 KiB. Prompt disimpan di data/CERITA_IMAGE_PROMPTS.json.
- [x] Reader berwarna per token, ruby/furigana, ukuran font, arti/penjelasan/audio per kalimat, Putar semua, progres scroll/halaman, persentase level dan kuis acak tiga soal. Hasil tersimpan sekali ke Riwayat lokal. Layout buku dua sisi di desktop dan gambar di atas teks pada layar sempit.
- [x] Audio MP3 belum dibuat sesuai brief; fallback speechSynthesis ja-JP tersedia. Skrip generator memakai key lingkungan, dua file data dan nomor global lintas bab; dry-run 21 kalimat lulus tanpa API berbayar.
- [x] Tes cerita, navigasi cerita, Kaiwa dan navigasi utama lulus; browser Chromium menyelesaikan empat halaman/kuis 3/3 dan memverifikasi satu entri Riwayat. Screenshot buku disimpan. Android fisik belum diuji.
- [x] Kikimimi, Nezumi dan Hanasaka dilanjutkan setelah instruksi pengguna; selesai pada perluasan koleksi berikut.

## 29 Oktober 2026 — Revisi warna level dan font Buku

- [x] Ubah penanda level: N1 merah, N2 jingga, N3 kuning, N4 hijau, N5 biru. Garis bawah kata, legenda dan diagram memakai variabel warna yang sama; mode gelap memakai versi lebih terang dari masing-masing warna.
- [x] Ganti DotGothic16 pada seluruh UI Buku dengan DM Sans dan fallback Noto Sans JP/system UI. Teks Jepang tetap Noto Sans JP dan judul sampul tetap Noto Serif JP. Tidak mengubah isi cerita atau perilaku membaca/kuis.

## 29 Oktober 2026 — Beranda satu kolom dan kartu harian di bawah

- [x] Pindahkan Kata hari ini dan pesan penyemangat ke bawah empat menu latihan, sebelum footer; beranda tidak lagi memiliki kolom kartu harian di kanan. Area hero dan materi memakai lebar konten penuh.
- [x] Kartu materi tiga kolom pada desktop/tablet dan dua kolom pada HP; latihan dua kolom, satu kolom pada layar sangat kecil. Kartu harian berdampingan pada layar lebar dan tersusun vertikal pada tablet/HP. Pesan penyemangat tetap terlihat pada HP.
- [x] Sesuaikan pembungkusan teks, jarak, ukuran maskot, heading dan batas lebar kartu. Maskot ditempatkan setelah teks pada HP sempit untuk mencegah tumpang tindih. Perubahan CSS dibatasi beranda.
- [x] Browser Chromium dengan viewport iframe 390, 820 dan 1280 piksel: tidak ada overflow horizontal, kartu harian selalu setelah menu latihan; HP/tablet diperiksa visual dan screenshot desktop disimpan. Tes navigasi utama dan diff check lulus. Halaman fixture QA sementara sudah dihapus sebelum publikasi. Android/tablet fisik belum diuji.

## 29 Oktober 2026 — Pemasangan 21 MP3 Cerita

- [x] Pasang ZIP pengguna berisi kasa-1 sampai kasa-9 dan issun-1 sampai issun-12 ke dist/assets/cerita/. Ekstraksi hanya nama MP3 yang divalidasi; checksum SHA256 keenam WebP sebelum/sesudah identik.
- [x] ffprobe membaca 21/21 sebagai MP3 berdurasi positif, total 71,24 detik. Tidak mengklaim memeriksa pelafalan seluruh rekaman.
- [x] Pemutar memprioritaskan Audio MP3. Fallback perangkat hanya setelah pemeriksaan HEAD menunjukkan 404/410; penolakan autoplay, timeout, gangguan jaringan dan kegagalan file yang ada menampilkan coba lagi tanpa mengganti ke TTS. Pemeriksaan async dibatalkan secara logis saat keluar halaman.
- [x] node tests/cerita.test.cjs dan cerita-navigation.test.cjs lulus, termasuk fallback file hilang, tidak fallback untuk MP3 yang ada/gangguan jaringan, antrean tunggal dan pembersihan. Syntax dan diff check lulus.

## 29 Oktober 2026 — Enam bacaan tambahan

- [x] Tambah tiga cerpen orisinal N5 (Bekal untuk Ibu, Anak Kucing di Taman, Janji di Perpustakaan) dan tiga dongeng dari alur PDF unggahan (Tudung Pendengar Ajaib, Sumo Dua Tikus, Kakek Pemekar Bunga). Teks Jepang/Indonesia baru; tidak mendistribusikan PDF modern.
- [x] Masing-masing 12 kalimat, furigana manual, arti Indonesia, bantuan pola dan tiga kuis. Koleksi total delapan buku/93 kalimat/24 soal. Dongeng baru tiga halaman berilustrasi per buku.
- [x] Buat 12 ilustrasi asli via built-in ImageGen; 15 aset WebP final termasuk tiga cover crop. Maksimal 120 KiB cover dan 160 KiB halaman. Perbaiki alignment sampul pada judul yang membungkus. Prompt/asal crop terdokumentasi.
- [x] Pertahankan data dan 21 MP3 lama. Muat cerita-tambahan.js di aplikasi, tes dan generator. Paket Termux baru membuat 72 MP3 baru dengan voice ID terakhir pengguna; tidak menjalankan API berbayar.
- [x] Tes cerita untuk delapan buku, furigana seluruh kanji, kuis, aset, audio/fallback/cleanup, navigasi Cerita, Kaiwa dan navigasi utama lulus. Browser Chromium memverifikasi delapan kartu serta pembaca Tudung Pendengar Ajaib; Back kembali ke rak.
- [x] Unggahan cerita-audio-lanjutan.zip (72 MP3) sudah dipasang pada pembaruan berikut. Android fisik dan pelafalan seluruh naskah belum diuji.

## 29 Oktober 2026 — Audio enam cerita tambahan

- [x] Validasi ZIP tepat 72 nama MP3: bento, neko, toshokan, kikimimi, nezumi, hanasaka; masing-masing nomor 1–12. Pasang hanya MP3 ke dist/assets/cerita/.
- [x] ffprobe membaca 72/72 sebagai MP3 berdurasi positif; total 223,95 detik. Seluruh 93 MP3 sekarang sesuai tepat dengan 93 kalimat pada delapan buku. Tidak mengklaim telah mendengar seluruh rekaman.
- [x] SHA256 untuk 21 MP3 lama dan 21 WebP sebelum/sesudah identik. Pemutar tetap mendahulukan MP3 dengan fallback perangkat hanya untuk file yang tidak ditemukan (404/410).
- [x] node tests/cerita.test.cjs dan cerita-navigation.test.cjs lulus; diff check lulus. Tidak mengubah renderer atau materi cerita.


## 29 Oktober 2026 — Kaiwa: referensi Schoters dan LBI FIB UI

- [x] Baca kedua sumber; susun dialog adaptasi dengan Jepang, romaji dan arti Indonesia yang selaras. Ganti Perkenalan menjadi 16 baris, tanpa kartu ganda; pertahankan sembilan skenario lama.
- [x] Tambah enam skenario: Asal & Tempat Tinggal, Berkenalan dengan Senior, Teman Lama, Sapaan Sehari-hari, Berangkat & Pulang, Salam saat Makan. Total 16 skenario/136 kalimat/68 balasan latihan; semua punya dua pengecoh dan penjelasan.
- [x] Persona H/Hori wanita dan R/Ryota pria konsisten pada dialog baru. Tidak mengubah desain, modul lain, atau rekaman lama.
- [x] Prefix audio Perkenalan baru `kenalan` mencegah rekaman `jiko` lama terputar untuk naskah berbeda. Renderer/generator memakai pemetaan yang sama; manifest 64 audio baru disiapkan. MP3 baru menyusul, sementara fallback suara perangkat.
- [x] Tes Kaiwa (data/baca/latihan semua skenario, audio, navigasi), navigasi utama, dan Cerita lulus. Shell syntax, dry-run Perkenalan dan diff check lulus. Tidak mengklaim uji pelafalan rekaman baru; rekamannya belum ada.
- [x] Browser Chromium: daftar menampilkan 16 situasi; Perkenalan baru 16 bubble, label Hori/Ryota dan buka romaji/arti tampil benar. Screenshot pratinjau disimpan.


## 29 Oktober 2026 — Audio Kaiwa tambahan selesai

- [x] ZIP tepat 64 nama sesuai manifest, tanpa duplikat/tambahan/kekurangan; CRC valid. Pasang hanya ke dist/assets/kaiwa/.
- [x] Semua 64 MP3 valid menurut ffprobe dan decode penuh ffmpeg, durasi gabungan 156,45 detik. SHA256 seluruh aset lama tetap sama.
- [x] Total 136 rekaman aktif untuk 16 skenario; delapan jiko lama dipertahankan tanpa dirujuk. Bersihkan tujuh flag audioPending; pertahankan manifest sebagai acuan rekaman.
- [x] Tes data/latihan/pemutar Kaiwa, cakupan MP3, navigasi Kaiwa, navigasi utama, Cerita dan diff check lulus. Belum mengaudit pelafalan seluruh rekaman lewat pendengaran.

## 29 Oktober 2026 — Kisah Bersambung: Nee Nee, Nene-san

- [x] Adaptasi naskah lengkap pengguna menjadi enam bagian/90 blok Jepang dan terjemahan Indonesia, tanpa menghapus petunjuk Sabtu/Natal/pintu, pengungkapan keluarga dan janji terakhir. Furigana seluruh kanji, bantuan bahasa per blok dan 18 kuis opsional; label N4–N3 terbimbing.
- [x] Rak Cerpen → Dongeng → Kisah Bersambung. Enam kartu dengan sampul sama seperti contoh seri; mulai membaca sesuai bagian yang dipilih, lanjut/sebelumnya, TAMAT dan atribusi Amairo Chu. Kuis tidak diwajibkan untuk lanjut.
- [x] Sampul original ImageGen → WebP 600×900/70.766 byte. Tidak mengambil panel manga atau teks Sherlock dari screenshot. Sumber dan prompt tersimpan.
- [x] Generator dan manifest siap 90 audio Nene; belum membuat MP3 berbayar, sementara fallback perangkat saat file tidak ada. Rekaman dan delapan buku lama dipertahankan.
- [x] Tes Cerita, seluruh bagian/kuis, audio, navigasi, regresi Kaiwa dan navigasi utama lulus; syntax/dry-run/diff check lulus.
- [ ] Pemeriksaan visual browser belum terverifikasi karena kebijakan URL lingkungan menolak pengamatan tab pratinjau setelah daemon diaktifkan. Tidak melewati pembatasan; Android fisik belum diuji.

## 29 Oktober 2026 — Rak per judul dan Nitamono Bab 1–6

- [x] Hapus label/kategori UI Kisah Bersambung. Rak sekarang Cerpen → Dongeng → Nee Nee, Nene-san → Nitamono, masing-masing judul enam kartu bagian; daftar “Lihat semua” terpisah.
- [x] Pasang keenam bab Nitamono dari dua ZIP pengguna: 78 blok Jepang dengan furigana, terjemahan Indonesia, bantuan bahasa dan 18 kuis opsional. Kredit Efu mengikuti README. Selaraskan lompatan SD→SMA menjadi beberapa tahun, bukan sepuluh tahun.
- [x] Sampul original ImageGen dikompresi WebP 600×900/94.860 byte; prompt serta naskah sumber terdokumentasi. Isi Nene dan rekaman lama tetap.
- [x] Manifest/generator siap 78 audio baru; belum membuat MP3 berbayar. Sementara fallback perangkat untuk audio yang belum ada.
- [x] Tes Cerita, pemisahan rak, enam bagian kedua judul, migrasi rute lama, navigasi, regresi Kaiwa dan navigasi utama lulus. Browser Chromium berhasil membuka rak/detail/Bab 1 Nitamono dan terjemahan; screenshot tersimpan. Android/tablet fisik belum diuji.


## 29 Oktober 2026 — I Sold My Life Bab 1–7

- [x] Tambah rak judul sendiri setelah Nitamono, tujuh kartu bagian; 100 blok Jepang, furigana, terjemahan Indonesia, bantuan bahasa, 21 pertanyaan opsional.
- [x] Kredit Sugaru Miaki / Shouichi Taguchi diverifikasi pada metadata penerbit; salinan sumber pengguna, manifest audio, prompt sampul dan catatan adaptasi disimpan.
- [x] Sampul original WebP 600×900; 100 jalur audio baru siap, belum membuat MP3 berbayar. Aset dan rekaman sebelumnya dipertahankan.
- [x] Tes Cerita/navigasi, semua bagian termasuk bagian 7, fallback audio, regresi Kaiwa/audio/navigasi, syntax, dry-run dan diff check lulus. Chromium memverifikasi rak/detail/Bagian 1 serta terjemahan. Android/tablet fisik belum diuji.


## 30 Oktober 2026 — Audio Nene, Nitamono, I Sold My Life

- [x] Pasang 268 MP3 dari cerita-audio-baru.zip: nene 1–90, nitamono 1–78, isold 1–100. Semua 361 blok Cerita kini memiliki rekaman MP3.
- [x] CRC ZIP, nama tepat, codec MP3, durasi positif dan dekode penuh FFmpeg seluruh 268 rekaman lulus (total sekitar 51,5 menit). Hash 117 aset sebelumnya tetap sama, termasuk sampul/ilustrasi dan audio cerita lama.
- [x] Tandai audio ketiga judul tersedia; renderer tetap MP3-first dengan fallback hanya pada berkas hilang. Tes cerita, audio, navigasi cerita dan regresi audio Kaiwa lulus.
- [x] Catatan impor/hash/durasi disimpan di data/cerita-audio-import-20261030.json. Voice ID nMLAJvHm96aMWubKsf0q mengikuti pengaturan pengguna; identitas suara/kecocokan tutur tidak dapat diverifikasi dari metadata MP3. Tidak mengklaim pemeriksaan dengar seluruh isi atau uji Android fisik.


## 30 Oktober 2026 — Suara simulasi per pembicara

- [x] Pisahkan label pembicara dari ucapan pada 222 soal/487 giliran (129 dialog). Teks bank/kunci/aturan ujian tetap.
- [x] Pemutar bersama mengutamakan MP3 per soal, fallback hanya untuk MP3 hilang; suara perangkat bergantian bila tersedia, label tidak dibaca. Stop dan callback terlambat aman, dialog dihitung sekali, batas dua putar JFT tetap.
- [x] Paket generator Termux memakai voice pria/wanita Kaiwa berbeda dan narator voice Cerita pilihan terakhir. Cache/resume, regenerasi saat voice berubah, FFmpeg gabung dengan jeda, ZIP untuk impor. Tidak memakai kuota berbayar; MP3 simulasi menunggu pengguna.
- [x] Tes audio/parser/pemutar/generator mock, integrasi count/limit/next, regresi prototype/embedded/bank/import/scenes/navigasi dan audio Cerita lulus. Belum uji dengar MP3 baru atau Android fisik.


## 30 Oktober 2026 — Rekaman simulasi terpasang

- [x] Impor 222 MP3 dari simulasi-audio-baru.zip ke dist/assets/simulasi/: 144 JLPT N5 dan 78 JFT latihan A1, semua soal menyimak pada 12 paket lengkap. Pemutar MP3-first yang sudah ada langsung memakai rekaman.
- [x] CRC ZIP, kecocokan nama, codec/durasi dan dekode penuh FFmpeg seluruh rekaman lulus (sekitar 33,5 menit). Hash 954 aset lain tetap sama. Catatan impor SHA/durasi disimpan.
- [x] Tes recordings/audio/prototype/embedded/navigation dan regresi audio Cerita/Kaiwa lulus. Batas putar dan penghentian saat pindah soal tetap. Tidak mengklaim dengar seluruh isi, verifikasi identitas voice dari metadata, atau uji Android fisik.


## 30 Oktober 2026 — Penggantian ID voice Kaiwa dan Simulasi

- [x] Kaiwa: pria Bj4Malc5SZLoXfPtxRxH, wanita 3321Alera3fXjEWjjbAX; Simulasi: narator GxxMAMfQkDlnqjpzjLHH, pria xya0RvcJtofTcFTOdX4E, wanita 0ptCJp0xgdabdcpVtCB5.
- [x] Paket Termux gabungan untuk membuat ulang 136 Kaiwa + 222 Simulasi; ID tetap agar env lama tidak terpakai, manifest sesuai data aktif, cache/resume dan dua ZIP keluaran. Label pembicara tetap tidak dibaca.
- [x] Tes pemetaan gender/teks dan mock seluruh lima voice, FFmpeg, resume, ZIP serta regresi Kaiwa/audio Simulasi lulus. Tidak memakai API berbayar. Seluruh MP3 terpasang masih rekaman sebelumnya sampai pengguna mengirim pengganti; Cerita tidak diubah.


## 30 Oktober 2026 — Tes suara simulasi memakai narator

- [x] Tombol tes suara menggunakan player MP3-first yang sama, assets/simulasi/tes-suara.mp3. Kalimat tes tetap こんにちは。音声のテストです。; voice pembuatan GxxMAMfQkDlnqjpzjLHH.
- [x] Tambah satu baris narrator pada manifest generator v3 (222 audio soal + 1 tes). Pemutaran tes tidak mengubah jatah putar soal dan dibatalkan ketika meninggalkan halaman.
- [x] Tes voice-v3/prototype/audio/embedded/syntax/diff lulus. MP3 tes baru menunggu pengguna; fallback suara perangkat berlaku jika berkas belum ada. Rekaman lain tidak diubah.


## 30 Oktober 2026 — Pasang pengganti voice Kaiwa/Simulasi

- [x] Timpa 136 MP3 Kaiwa dan 222 MP3 soal Simulasi; tambah tes-suara.mp3 narator. Total 359 file baru, semua berbeda/baru dari target sebelumnya. MP3-first langsung memakai pengganti.
- [x] CRC, nama sesuai manifest, codec MP3/durasi positif dan dekode penuh FFmpeg seluruh 359 file lulus. Catatan SHA/durasi data/voice-v3-import-20261030.json. Hash 818 aset lain tetap, termasuk audio Cerita dan 8 jiko legacy.
- [x] Tes Kaiwa/audio/voice-v3, rekaman Simulasi/audio/prototype/embedded/navigation dan regresi audio Cerita lulus. Uji mencakup tes narator, penghentian navigasi dan batas replay JFT. Tidak mengklaim pemeriksaan dengar seluruh isi atau pembuktian voice ID dari metadata.


## Kotoba N4 / A2 and menu recovery — 2026-10-30

Added 4,535 cards from seven supplied PDFs, including the exact 411-word complementary daily set. Six categories and 53 subcategories; level-aware library and Kotoba quiz. Corrected source readings/meanings are retained in data/kotoba-n4-corrections.json; detailed accounting and rebuild instructions in data/KOTOBA_N4_AUDIT.md. N5 data/audio preserved. Restored missing Settings row renderer, made header level badge interactive, reset routes on level change, and guard the switch during active sessions. Full-shell menu and N4 isolation regressions added.

30 Oct 2026 — Kotoba follow-up: remove source disclosure and Premium placeholder;
merge 241 orthographic variants; complete examples for all 4,294 N4 cards, using
specialized examples and simple reusable frames. Preserve saved merged IDs. All
32 suites pass. Prepared as a small patch for the user's GitHub/Cloudflare workflow;
not directly deployed from this checkout to the user's private GitHub repository.

30 Oct 2026 — revised rule: remove filler interjections and N4 words taught in N5.
N5 1,794; N4 3,419; all retained cards have examples. 7 N5 fillers, 21 N4 fillers,
and 854 N4 duplicates removed. All 33 test suites pass. Patch prepared for user
GitHub Actions/Cloudflare deployment; not yet published by this checkout.

30 Oct 2026 — remove personal-name cards/subcategory across N5/N4, rescue
misclassified common words, normalize reading scripts for cross-level dedup,
trim repeated glosses, and fix identified lexical/example issues. Final counts:
N5 1,791 and N4 3,227, all with examples. 34 suites pass. Cumulative patch prepared
for user GitHub/Cloudflare publishing; not yet deployed from this checkout.

## Kanji lanjutan — 30 Oktober 2026

Audit tiga PDF Marugoto: 1.106 baris, 397 karakter sumber. Pertahankan 115 kanji N5; tambahkan 217 karakter A2 dan 70 pengayaan A2/B1 terpisah (287 tambahan, tanpa pengulangan N5). Arti berulang diringkas; 15 kategori tema; setiap karakter tambahan memiliki contoh kata sumber. Halaman, pencarian, detail, filter cakupan dan kuis Kanji mengikuti level. Detail yang tidak diberikan sumber (guratan/radikal) tidak diisi dengan tebakan. Lihat data/KANJI_N4_AUDIT.md. Tidak mengubah audio atau konfigurasi penerbitan.

## Bunpo N4 — 30 Oktober 2026

Audit empat PDF (476 halaman fisik). Tambahkan 115 materi N4 dalam 14 kategori, 233 contoh dengan kana/arti, 16 cek singkat, serta tabel bentuk dan catatan pembeda. Materi yang sudah ada di 83 kartu N5 tidak dibuat ulang; variasi sefungsi digabung dengan pemetaan sumber. Kartu nominal-no N5 diperjelas agar fungsi のは／のが／のを tetap satu keluarga. Daftar, pencarian, detail, simpanan dan rute mengikuti level. Bank kuis Bunpo N4 bertimer belum ditambahkan. Lihat data/BUNPO_N4_AUDIT.md. Audio, gambar dan konfigurasi penerbitan tidak diubah.


## 31 Oktober 2026 — Audit kualitas Kotoba N4, batch pertama

- ZIP Gaku-Dex-main menjadi baseline; aturan tanpa duplikat N5, tanpa kartu nama orang, dan pemisahan pengayaan dipertahankan.
- 138 contoh generik diganti dengan contoh kontekstual orisinal; kepala entri, ID, urutan, sumber, kategori dan jumlah kartu tetap.
- Koreksi tersimpan dalam data/kotoba-n4-context-examples.json; diterapkan setelah completion dan setelah level cleanup pada build bundle.
- Antrean transparan data/kotoba-n4-quality-review.json: 2.099 contoh masih memakai bingkai topik/kejadian sesekali. Ini penanda untuk peninjauan, bukan vonis salah bahasa. Contoh lainnya dan gloss juga belum diaudit seluruhnya.
- Seluruh 37 berkas tes lulus, termasuk kestabilan koreksi setelah rebuild. Belum uji visual/Android untuk batch ini; hanya data yang berubah.
- Bunpo lulus pemeriksaan struktur yang sudah tersedia; belum dilakukan peninjauan editorial lengkap pada batch ini. Kanji belum dilengkapi.
- Langkah berikutnya: lanjutkan contoh per kelompok tema, tangani arti campuran/homonim, lalu tinjau Bunpo per keluarga fungsi. Jangan sebut audit seluruh N4 selesai.


## 31 Oktober 2026 — Batch 2: spasi bacaan dan contoh lanjutan

- 138 contoh batch 1 diberi pemisah frasa/kata secara manual pada kolom kana. Teks Jepang utama tetap rapat mengikuti penulisan Jepang. Romaji mengikuti spasi kana lewat renderer yang sudah ada: akachan ga nete imasu.
- Tambah 35 contoh kontekstual untuk anggota tubuh dan kebutuhan sehari-hari: total 173. Antrean bingkai berulang tersisa 2.064. Belum menyelesaikan audit seluruh N4 atau menambahkan spasi pada seluruh contoh lama di luar 173 ini.
- Paket kumulatif terhadap ZIP awal, cocok dengan baseline awal atau batch 1. Installer membuat backup, menolak isi file tak dikenal, dan memulihkan file target bila tes gagal.
- Seluruh 37 berkas tes lulus, termasuk output romaji dengan spasi dan konsistensi teks kana/Jepang. Tidak mengubah audio, gambar, atau workflow deployment.


## 31 Oktober 2026 — Batch 3: total 500 contoh kontekstual

- Tambah 327 contoh baru ke 173 contoh sebelumnya; total 500, seluruhnya unik dan memakai spasi pada kolom bacaan. Jepang utama tetap tanpa spasi bantuan. Romaji mengikuti segmentasi bacaan, bukan CSS letter-spacing.
- Kelompok mencakup perjalanan, keluarga, pekerjaan, makanan, kegiatan, acara, dan ungkapan sehari-hari. ID dan kategori kartu tetap, N5 1.791 dan N4 3.227.
- Sisa antrean bingkai berulang 1.737. Belum mengklaim audit seluruh 3.227 kata atau seluruh contoh lama selesai.
- 14 dugaan masalah leksikal (arti bercampur, kepala entri/bacaan berbeda, nama orang yang lolos) dicatat dalam data/kotoba-n4-lexical-review-pending.json. Belum dikoreksi, perlu bukti sumber dan penanganan ID sebelum perubahan.
- Build penuh dari data normalisasi dijalankan: seluruh record aktif identik sebelum/sesudah rebuild. Tes 37 berkas lulus; seluruh 500 contoh tetap terpasang, terpisah romajinya dan tak mengubah teks Jepang saat spasi dihapus.
- Installer kumulatif batch 3 menerima ZIP awal, batch 1, batch 2, serta pemasangan ulang batch 3; tanpa deployment otomatis.

- Batch 3 juga memperbaiki romanisasi gabungan katakana asing (misalnya ウォ, ティ, ファ) di helper bersama; grid kana tidak berubah. Tes semua 500 contoh memastikan tidak ada kana tersisa di romaji.


## 31 Oktober 2026 — Batch 4: total 1.000 contoh kontekstual

- Tambah tepat 500 contoh ke batch 3, menjadi 1.000 kalimat Jepang unik, masing-masing dengan bacaan berjarak dan arti Indonesia. 500 contoh terdahulu dipertahankan persis.
- Contoh 結婚式 yang disepakati sudah terpasang: ともだちのけっこんしきにでました。 / ともだち の けっこんしき に でました。 / Saya menghadiri upacara pernikahan teman.
- Antrean topic-frame/occasional-frame tersisa 1.237. Spasi pada contoh lama di luar 1.000 ini belum ditinjau secara menyeluruh. Catatan masalah leksikal tetap menunggu verifikasi sumber.
- Dibanding paket 500: tepat 500 field example berubah. Satu romaji kepala entri Perfume diperbarui dari pafuゅumu menjadi pafyuumu setelah rebuild memakai pemetaan フュ yang diperbaiki pada batch 3. ID, arti kepala entri, bacaan kata, kategori, urutan, dan sumber seluruh 3.227 kartu tidak berubah. N5 tetap 1.791.
- Build penuh dari normalisasi tidak mengubah record aktif hasil koreksi. 37 berkas tes lulus, termasuk konversi romaji penuh semua 1.000 contoh, keunikan kalimat, pemisahan level, dan idempotensi.
- Paket kumulatif batch 4 berisi BACA-DULU dan installer yang membuat backup serta memeriksa konflik. Belum deployment otomatis. Belum uji Android fisik atau sertifikasi pengajar atas seluruh kalimat.


## 31 Oktober 2026 — Batch 5: total 1.500 contoh kontekstual

- Tambah tepat 500 contoh ke batch 4: total 1.500 kalimat Jepang unik, masing-masing dengan bacaan berjarak, hasil romaji tanpa kana tersisa, dan terjemahan Indonesia. Contoh meliputi prosedur kerja, kegiatan, percakapan di fasilitas kesehatan, belanja, perjalanan, transportasi, acara dan kebiasaan.
- Seluruh 1.000 koreksi terdahulu dipertahankan persis. Dibanding paket 1.000, hanya tepat 500 field example kartu berubah; ID, kepala entri, arti kata, kategori, sumber dan seluruh field kartu lainnya tetap.
- Sisa antrean topic-frame/occasional-frame 737. Jumlah ini bukan ukuran seluruh sisa audit leksikal atau semua contoh lain: arti/bacaan ambigu dan kartu nama orang yang terlewat tetap perlu ditangani terpisah.
- N4 3.227 dan N5 1.791; 37 berkas tes lulus, termasuk seluruh 1.500 contoh, keunikan, pemisahan level, spasi/romaji, dan idempotensi. Build penuh dari normalisasi mempertahankan record aktif.
- Paket kumulatif batch 5 mencakup batch 1–4; installer menerima baseline awal atau versi terdahulu yang dikenal. Audio, gambar, workflow dan konfigurasi penerbitan tetap. Tidak deployment otomatis, belum uji perangkat Android fisik.


## 31 Oktober 2026 — Batch 6: total 2.000 contoh kontekstual

- Tambah tepat 500 contoh ke batch 5, menjadi 2.000 kalimat Jepang unik, dengan bacaan berjarak, romaji yang terkonversi penuh dan arti Indonesia. Seluruh 1.500 contoh sebelumnya tetap identik.
- Sisa antrean topic-frame/occasional-frame: 237. Jumlah ini hanya antrean contoh berpola berulang, bukan sisa semua audit arti, bacaan, atau nama orang yang terlewat. Contoh lain di luar antrean dan daftar masalah leksikal masih perlu ditinjau.
- Dibanding paket 1.500, tepat 500 field example berubah tanpa perubahan field lain pada 3.227 kartu N4. N5 tetap 1.791. Jepang utama tanpa spasi tambahan; pemisah hanya kolom bacaan.
- Contoh 炊ける menggunakan ごはんがたけました。untuk menunjukkan keadaan nasi telah matang. Contoh istilah bencana berupa pengalaman, berita, dan kegiatan latihan; tidak mengganti panduan keselamatan resmi.
- Build penuh dari normalisasi menjaga record aktif. 37 berkas tes lulus, mencakup 2.000 kalimat unik, konversi romaji, spasi, pemisahan level, dan idempotensi.
- Paket kumulatif batch 6 mencakup batch 1–5. Installer membuat cadangan dan menolak file berbeda dari versi dikenal. Audio/gambar/workflow/Cloudflare tidak diubah. Belum deployment otomatis atau uji Android fisik.


## 31 Oktober 2026 — Batch 7: total 2.200 contoh, 37 entri leksikal tersisa

- Dari 237 entri antrean batch 6, 200 contoh ditulis ulang dengan bacaan berjarak. Total 2.200 kalimat unik; seluruh 2.000 contoh terdahulu tetap identik.
- Arti 旅券 dikoreksi dari tiket transportasi menjadi paspor; rujukan resmi Kedutaan Jepang di Indonesia: https://www.id.emb-japan.go.jp/itpr_ja/visaj_01.html . Koreksi masuk scripts/lib/kotoba_cleanup.py agar bertahan saat rebuild, dan tercatat di ledger pembersihan yang sudah ada.
- Tepat 200 field example berubah dan satu field meaning 旅券 berubah dibanding batch 6. Jumlah N4 3.227 dan N5 1.791 tetap; tidak mengubah ID, kategori, sumber, audio, gambar, atau workflow.
- Antrean belum kosong: 37 kartu masih aktif dengan contoh bingkai lama karena memerlukan perbaikan kata utama. Daftar lengkap dan alasan ada di data/kotoba-n4-lexical-review-pending.json. Termasuk nama orang/sebutan bernama yang lolos filter, salah ketik, makna campuran dan deskripsi terpotong. Jangan melaporkan tahap ini sebagai selesai seluruh Kotoba.
- Build penuh dari normalisasi stabil. Seluruh 37 berkas tes lulus, mencakup 2.200 contoh, romaji/spasi dan arti paspor yang sudah dikoreksi.
- Paket kumulatif batch 7 mencakup batch 1–6, dengan backup/conflict gate. Langkah berikutnya: perbaiki 37 kartu memakai ledger dan redirect ID sebelum mengosongkan antrean. Audit contoh lain, arti, bacaan, dan Bunpo belum selesai menyeluruh.


- Batch 7 menjadikan tes context-review hanya baca. Pemeriksaan rebuild/idempotensi dilakukan oleh tes level-policy dalam fixture sementara, agar tes paralel tidak saling menulis berkas kerja. Installer menjalankan tes berurutan dan memverifikasi hash hasil salinan.


## 31 Oktober 2026 — Batch 8: 37 masalah leksikal diselesaikan

37 entri tertandai ditangani melalui ledger sumber dan redirect ID: 11 kartu nama/sebutan bernama dihapus, 6 duplikat digabung, 1 duplikat dialihkan ke N5, dan 6 kartu ditambahkan untuk arti berbeda. N4 menjadi 3.215 kartu; N5 tetap 1.791 dan berkas data/bundle N5 identik dengan baseline. Rincian keputusan dan rekaman asal tersimpan di kotoba-n4-lexical-repairs.json serta kotoba-n4-lexical-repair-audit.json.

Perbaikan mencakup 似る (grup 2), 探す, 落とす, 取り出す, 汚す, 国際結婚する; pemisahan 瓶/便, 自信/地震, 取れる/採れる, 点く/付く, 亡くなる/無くなる serta 点/～展. Sumber tiap arti dipisahkan sesuai baris normalisasi yang tersimpan. 建てる dibedakan dari 立てる; ホーム dan 守る menampilkan rincian arti tambahan di detail. EXPO’70 merujuk 1970, Perfume adalah nama kelompok musik, dan 資源 diperjelas sebagai sumber daya/bahan yang dapat dimanfaatkan kembali.

Rujukan verifikasi: daftar kosakata resmi Japan Foundation https://www.irodori.jpf.go.jp/assets/data/wordlist_Z.pdf dan https://www.irodori.jpf.go.jp/assets/data/wordlist_Y.pdf ; entri kamus https://kotobank.jp/word/資源-4129 ; profil resmi https://www.perfume-web.jp/profile/ ; catatan BIE https://site.bie-paris.org/site/en/1970-osaka?layout=bieparis:expo&view=bieexpo . Contoh kalimat ditulis orisinal, bukan kutipan atau sertifikasi penerbit.

25 contoh primer baru ditambahkan; seluruh 2.200 contoh sebelumnya identik. Total 2.225 contoh editorial dengan bacaan berspasi; antrean bingkai berulang 0 dan antrean 37 masalah 0. Ini tidak menyatakan semua arti/bacaan/contoh lain dari 3.215 kartu sudah diaudit, atau Bunpo/Kanji sudah selesai.

Dua build penuh berturut-turut menghasilkan data/bundle identik. Semua 38 berkas tes lulus, termasuk pemisahan arti/sumber, redirect favorit/route, tampilan arti tambahan dan pengecoh kuis homofon. Belum diuji pada perangkat Android fisik. Paket kumulatif mencakup pembaruan terdahulu; pemasang membuat cadangan, menolak konflik dan memulihkan target bila tes gagal. Tidak menerbitkan website otomatis.


## 31 Oktober 2026 — Batch 9: kartu Kotoba dan satu arti di daftar

Kartu daftar N5/N4 mengikuti struktur referensi pengguna: pita kategori dan tombol buka di atas, kata Jepang sebagai fokus di tengah, satu arti utama di pita bawah. Font dan warna mengikuti aplikasi; kartu tetap seluruhnya dapat diketuk. Kana, romaji dan arti lengkap tersedia di detail. Kata panjang dapat membungkus dan memakai ukuran lebih kecil; gaya terang/gelap dan fokus keyboard disediakan. Tidak ada pembatasan arti dengan ellipsis; arti utama dibungkus bila panjang.

Daftar memilih arti pertama berdasarkan pemisah slash/titik koma di luar tanda kurung, serta koma pada kosakata non-ungkapan (koma desimal dipertahankan); pertanyaan ganda seperti berapa banyak?/berapa umur? hanya menampilkan pertanyaan pertama. おかげさまで diringkas menjadi berkat di daftar sesuai permintaan. Data arti lengkap dipertahankan, termasuk pencarian berdasarkan arti kedua. Ini aturan tampilan, bukan audit linguistik baru atas semua arti.

39 field meaning N4 dibersihkan dari potongan berulang meskipun spasi slash berbeda. Aksesori/aksesoris dianggap varian ejaan yang sama untuk deduplikasi; アクセサリー menjadi perhiasan / aksesoris. Tanda kurung dan keterangan dalam <...> dilindungi. Seluruh ID, urutan, bacaan, sumber, 2.225 contoh editorial dan jumlah kartu tetap; data/bundle N5 identik dengan baseline. N4 3.215; N5 1.791.

39 rangkaian tes lulus; dua build penuh menghasilkan data/bundle dan audit identik. Tes baru memeriksa arti tunggal, pencarian arti sekunder, escaping teks, deduplikasi dan ID pembukaan kartu. Browser lokal tidak tersedia dan unduhan runtime tidak berhasil; belum ada verifikasi visual browser/Android untuk batch ini. Pemasang diuji pada salinan baseline awal dan batch 8; backup/conflict gate dipertahankan. Paket kumulatif mencakup batch 1–8 dan tidak melakukan push/deploy otomatis.


## 31 Oktober 2026 — Batch 10: contoh Kotoba N5

Pemeriksaan struktur seluruh 1.791 kartu N5 dan pembenahan 427 contoh orisinal dengan bacaan berspasi/romaji teruji. Termasuk 118 bingkai tas, 132 kata kerja, kesalahan makan/minum objek yang tidak sesuai, pemberi/penerimaくれる, tanggal versus durasi, serta nilai yen yang terpotong. Lima arti diperjelas: 半分, 差す, 15分, 30分, 45分. Rincian, contoh sebelum/sesudah dan sumber ada di data/KOTOBA_N5_REVIEW_20261031.md; rekaman sebelum dan patch ada di data/kotoba-n5-context-examples.json.

Antrean mekanis tersisa 620 (592 identifikasi, 28 waktu+belajar). Bingkai bukan vonis salah; 744 kartu di luar koreksi dan antrean juga tidak dianggap tersertifikasi. Empat kata majemuk/ambigu dicatat untuk audit leksikal berikutnya. N5 tetap 1.791; N4 3.215; seluruh data N4, 2.225 contoh N4 dan desain kartu batch 9 dipertahankan. Semua 40 berkas tes lulus dan rebuild penuh stabil; belum uji Android fisik. Paket kumulatif menerima versi dikenal sebelumnya, membuat cadangan dan tidak melakukan deployment otomatis.


## 31 Oktober 2026 — Batch 11: 620 contoh N5 dalam antrean ditangani

Tambahan 620 contoh, total 1.047 contoh editorial N5 yang berbeda; 427 rekaman batch 10 tetap persis. 542 pengganti ditulis per entri dan 78 pola paralel ditinjau untuk keluarga angka. Antrean identifikasi/waktu+belajar menjadi nol; 744 kartu lain serta audit arti/bacaan menyeluruh tidak dianggap otomatis selesai. N5 1.791 dan N4 3.215; ID, sumber, kategori, desain kartu dan semua contoh N4 dipertahankan.

Enam arti diperjelas: マッチ (makna olahraga yang sudah diajarkan), ステージ, チェックイン, 真っ赤, 真っ白, 中人 (kategori tarif pelajar). Rujukan dan batas lingkup ada di data/KOTOBA_N5_REVIEW_20261031.md. Helper romaji bersama membedakan nominaは sebelum partikel dari partikel topikは, dengan regresi ha o/ha ga/ha wa dan watashi wa. Seluruh 40 berkas tes lulus dan dua rebuild penuh stabil. Paket kumulatif, backup/conflict gate, tanpa deployment otomatis; belum uji Android fisik.


## 31 Oktober 2026 — Batch 12: detail lengkap 287 Kanji bagian N4

Lengkapi 217 karakter lanjutan A2 dan 70 pengayaan A2/B1 dengan arti Inggris, radikal klasik/guratan utama terverifikasi KANJIDIC2 versi 2026-304, seluruh bacaan ja_on/ja_kun tanpa nanori, 287 mnemonic visual orisinal, serta 1–2 contoh (372 total). Sebanyak 39 grup kun’yomi tetap kosong sesuai rujukan. Bacaan tambahan dilipat agar tampilan awal ringkas; anotasi bacaan terikat dan konsonan rangkap dijelaskan.14 pemakaian contoh konkret/koreksi dicatat sebagai adaptasi dari baris sumber.

Rujukan, editorial dan audit disimpan terpisah; normal build tetap offline. Tambahkan kredit data melalui Pengaturan, catatan lisensi CC BY-SA 4.0 dan prosedur pembaruan rujukan. Ringkasan ada di data/KANJI_N4_REVIEW_20261031.md. Data 115 Kanji N5, ID/cakupan N4, seluruh Kotoba serta desain kartu dipertahankan. Semua 41 berkas tes lulus; kedua jalur build dan ekstraksi rujukan stabil. Pemasang kumulatif diuji dari versi awal/batch 11; belum deploy otomatis atau uji visual Android fisik.


## 1 November 2026 — Batch 13: audit seluruh 115 Kanji N5

N5 sebelumnya sudah lengkap secara struktur. Verifikasi 115 guratan terhadap KANJIDIC2, standardisasi keluarga radikal 毋/母, dan lengkapi bacaan kamus tanpa nanori. Pertahankan 中 ジュウ dan bentuk 休み/好き dengan rujukan pelengkap yang eksplisit. Empat kun tetap kosong. Perhalus tiga arti Inggris dan satu mnemonic; seluruh 230 contoh, ID, kategori, sumber serta arti Indonesia tetap. Bacaan tambahan N5 dilipat seperti N4.

Simpan referensi/editorial/hasil/audit N5 dan skrip pembaruan rujukan, dengan atribusi data di Pengaturan. Semua 42 tes lulus; kedua build dan ekstraksi arsip stabil. Seluruh data N4/Kotoba tetap; tidak deploy otomatis atau uji visual Android fisik. Ringkasan: data/KANJI_N5_REVIEW_20261101.md.


## 1 November 2026 — Batch 14: Bunpo N4 untuk pemula setelah N5

Tinjau 23 materi awal (urutan 1–23) dan 46 contohnya: bentuk kata kerja, keadaan, syarat, izin dan kewajiban. Tulis ulang fungsi secara ringkas; rumus memakai perubahan konkret; catatan membandingkan pola yang mudah tertukar. Ganti satu contoh kausatif untuk menunjukkan membiarkan, perjelas satu arti てある, dan tambahkan tabel perbandingan ている／てある. Pengingat istilah N5 tersedia dalam bagian lipat detail N4.

Tetap 115 materi, 14 kategori, 233 contoh dan 16 cek. ID, level, urutan dan provenans tetap; 92 materi urutan 24–115 belum diaudit pada tahap ini dan identik dengan paket 13. Bunpo N5, Kotoba dan Kanji dipertahankan. Cakupan, rujukan dan antrean tercatat di data/bunpo-n4-editorial-review.json dan data/BUNPO_N4_REVIEW_20261101.md. Ini audit editorial internal, bukan sertifikasi pengajar atau penyetaraan resmi JLPT/CEFR.

Seluruh 42 berkas tes lulus; build Bunpo stabil. Tes mencocokkan JSON dengan bundle dan render detail, pencarian/favorit/rute serta pemisahan N5/N4. Belum uji visual browser/Android fisik. Paket kumulatif mencakup 1–13; pemasang backup, conflict gate dan rollback dipertahankan, tanpa push/deploy otomatis.


## 1 November 2026 — Batch 15: selesaikan audit editorial Bunpo N4

Tinjau 92 materi sisanya (urutan 24–115) dan 187 contoh: total 115/115 materi serta 233 contoh selesai audit internal, antrean nol. Penjelasan ringkas untuk pemula setelah N5; rumus/perbedaan diperjelas pada tujuan, waktu, bantuan, penghubung, pelaporan/dugaan, pembentukan kata, bahasa hormat dan percakapan. Perjelas sambungan N/sifat-na positif kini dibanding negatif/lampau dan batas rumus bahasa hormat. Tambahkan pola konkret しかない dan 勉強の仕方.

Dua contoh Jepang diganti (Vてばかりいる dan inferensi はずがない berdasarkan jadwal), tiga arti diperhalus (てもらう, てほしい, やっと); bacaan pengganti berspasi. Tetap 115 materi, 14 kategori, 233 contoh, 16 cek; semua ID, cakupan/sumber dan urutan tetap. Hasil 23 materi batch 14, Bunpo N5, Kotoba dan Kanji identik. Cakupan/rujukan: data/bunpo-n4-editorial-review.json dan data/BUNPO_N4_REVIEW_20261101.md.

42 berkas tes lulus; build Bunpo stabil. Cek render meliputi seluruh 115 materi; belum uji visual Android/browser fisik. Ini audit editorial internal atas data yang ada, bukan sertifikasi pengajar eksternal atau silabus/penyetaraan resmi JLPT/CEFR. Paket kumulatif dengan backup/conflict gate/rollback; tes pemasang mencegah penulisan cache Python baru. Tanpa push/deploy otomatis.


## 1 November 2026 — Batch 16: Bunpo N5 untuk pemula otodidak dari nol

Tinjau 83/83 materi dan 166 contoh. Tulis ulang penjelasan, rumus dan catatan agar fungsi/istilah dijelaskan lewat contoh konkret. Tambahkan pengantar dasar lipat, tautan fondasi, serta panduan tiga golongan kata kerja beserta tabel kamus/ます/ない/て/た dan pengecualian. Dua kalimat contoh disesuaikan, tiga arti diperjelas, dan 52 baris kana diberi spasi yang lebih jelas. Tambahkan kana/romaji untuk teks Jepang pada 16 cek tanpa mengubah jawaban. Pertahankan alias kanji untuk pencarian.

Tetap 83 materi/11 kategori/166 contoh/16 cek, semua ID, urutan dan sumber awal. Seluruh data Bunpo N4, Kotoba dan Kanji identik dengan paket 15. Pengantar khusus N5, bantuan N4 dipertahankan. Rincian: data/BUNPO_N5_REVIEW_20261101.md dan data/bunpo-n5-editorial-review.json. Audit internal, belum sertifikasi pengajar atau pengujian pemahaman dengan pelajar dari nol.

Semua 42 berkas tes lulus, rebuild stabil; cek render VM meliputi seluruh detail N5 dan bacaan cek, pencarian serta isolasi level. Belum uji visual browser/Android fisik. Paket kumulatif menerima versi dikenal, backup/rollback dan pencegahan cache Python; tanpa push/deploy otomatis.


## 1 November 2026 — Batch 17: tambahan Marugoto dan zoom area buku

Tambahkan dua entri Starter A1 Katsudo/Rikai pada Rangkuman → Buku. Keduanya memakai tautan pengguna yang sama: Daftar Kosakata Indonesia bersama, 82 halaman; diberi label jelas dan 82 aset hanya disimpan sekali. Footer Marugoto menampilkan sumber Japan Foundation (https://www.jpf.go.jp/) serta PDF asli setelah catatan nomor halaman. Dua buku Minna, 50 bab rangkuman, serta seluruh data Bunpo/Kotoba/Kanji tetap.

Tambahkan pembesaran cubit 100–300% dalam area buku dengan jangkar posisi, panning/scroll, tombol zoom dan Ctrl+wheel. Batasi zoom sentuh halaman aplikasi lewat viewport/CSS dan pencegahan gestur browser. Route buku menerima ID tersedia; posisi masing-masing entri terpisah dan kompatibel dengan penyimpanan lama.

43 berkas tes lulus, build stabil, hash 82 aset terverifikasi, sampel render PDF diperiksa visual. Tes gestur adalah simulasi DOM; belum uji browser/Android fisik. Asal/hash PDF, proses render dan batas pemeriksaan ada di data/RANGKUMAN_BOOKS_UPDATE_20261101.md. Paket kumulatif, backup/conflict gate/rollback, tanpa commit/push/deploy otomatis.


## 1 November 2026 — Batch 18: Rangkuman interaktif Bab 1–25

130 pola ditinjau untuk pemula mandiri dari nol: tujuan, penjelasan singkat, resep, contoh terurai dengan bacaan berjarak, dan catatan. Alur satu pola: Pahami → Bongkar → Coba; ketuk potongan untuk arti/fungsi dan suara perangkat; 119 latihan susun + 11 ungkapan singkat, petunjuk, koreksi dan ulang. Tabel/daftar serta cek situasi bab tetap tersedia. Tanpa skor/penandaan selesai baru.

Bab 26–50 identik; seluruh kosakata dan pertanyaan bab dipertahankan. Kosakata rangkuman belum diaudit satu per satu. Buku/zoom/atribusi dan seluruh perbaikan 1–17 termasuk. 44 berkas tes lulus; browser desktop dan area 390 piksel diperiksa, belum Android fisik atau uji pemahaman pemula. Rincian di data/RANGKUMAN_INTERACTIVE_20261101.md. Selanjutnya: audit/interaksi Bab 26–50 dan audit kosakata rangkuman.


## 1 November 2026 — Batch 19: sederhanakan latihan Rangkuman

Sesuai permintaan pengguna, hapus panel tambahan “Coba satu situasi lain di Bab …” dari seluruh Bab 1–25 interaktif, termasuk tombol ulang dan handler khusus panel. Alur Pahami → Bongkar → Coba serta tombol Bekal kosakata tetap. Data pertanyaan sumber dan tampilan Bab 26–50 tidak diubah. Ini menggantikan keputusan batch 18 tentang menampilkan cek situasi bab pada bab interaktif. Tes memastikan panel/cek tambahan tidak dirender pada semua 25 bab.


## 1 November 2026 — Batch 20: Bab 26–50 interaktif dan arti di bawah romaji

100 pola Bab 26–50 ditinjau: fungsi, pembentukan, contoh terurai dan catatan. Total 50 bab/230 pola interaktif, 216 latihan susun + 14 ungkapan. Arti kalimat pada Bongkar langsung terlihat setelah romaji pada semua bab; lipatan khusus catatan. Tidak menambahkan kembali cek situasi dari paket 19. Judul Bab 46 menghindari klaim pasti.

44 berkas tes lulus; cakupan kegiatan dan terjemahan semua 230 pola. Build stabil; kosakata/pertanyaan semua bab dan data Bab 1–25 identik dengan paket 19. Browser lebar 390 piksel diperiksa pada Bab 1/26/50. Belum Android fisik atau uji pemahaman peserta. Rincian: data/RANGKUMAN_26_50_20261101.md. Audit kosakata rangkuman satu per satu masih belum dilakukan. Paket kumulatif 1–19.


## 1 November 2026 — Batch 21: audit kosakata Rangkuman Bab 1–25

1.357 entri ditinjau internal; 536 entri dikoreksi pada Jepang/kana/arti/catatan (termasuk normalisasi ejaan). Tambahkan arti utama tunggal dan romaji yang dapat dicari pada semua 1.357 entri. Daftar menampilkan satu arti; detail tambahan dilipat. Sifat-na, arah memberi, konteks kata, istilah bank, nama ikan dan nama lama hari olahraga dijelaskan. ID, nomor, halaman dan urutan tetap; pengulangan lintas bab dipertahankan.

45 berkas tes lulus; browser 390 piksel memeriksa hasil shizuka, pencarian bersih dan buka detail. Build stabil. Seluruh grammar/cek/fokus dan Bab 26–50 identik dengan paket 20. Tersisa 1.553 kosakata Bab 26–50 untuk audit berikutnya. Rincian/catatan perubahan: data/RANGKUMAN_VOCAB_01_25_20261101.md dan data/rangkuman-vocab-review-01-25.json. Belum Android fisik atau uji pemahaman peserta. Paket kumulatif 1–20.


## 1 November 2026 — Batch 22: audit kosakata Rangkuman Bab 26–50

1.553 entri ditinjau internal; 719 entri berubah pada Jepang/kana/arti/catatan, termasuk normalisasi. Pasangan arti tertukar, 国連, syarat batas 以上／以下, kata intransitif dan bahasa hormat/merendah dibenahi. Arti utama dan romaji tersedia untuk semua entri. Total 2.910 entri Bab 1–50 telah ditinjau; arti lain/catatan tetap dapat dibuka dan dicari. Tidak menghapus pengulangan antar bab atau mengubah ID/nomor/halaman/urutan.

46 berkas tes lulus; build stabil; Bab 1–25 dan seluruh grammar/cek/fokus identik dengan paket 21. Batch ini memakai tes render/paginasi; tidak ada uji browser/Android fisik baru. Rincian dan batas audit: data/RANGKUMAN_VOCAB_26_50_20261101.md serta data/rangkuman-vocab-review-26-50.json. Berikutnya audit kesesuaian Quiz dengan materi. Paket kumulatif 1–21.
