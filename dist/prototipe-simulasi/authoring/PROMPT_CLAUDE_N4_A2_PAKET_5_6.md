# Patokan penyusunan simulasi DeX Gaku — JLPT N4 dan JFT-Basic A2

Disusun 2 November 2026. Kirim seluruh isi file ini kepada Claude, bersama tiga PDF referensi yang sama. Ini panduan penyusunan, belum bank soal final atau pembaruan aplikasi.

## Pembagian pekerjaan

- ChatGPT: paket 01–04 untuk JLPT N4 dan paket 01–04 untuk JFT-Basic A2.
- Claude: paket 05–06 untuk JLPT N4 dan paket 05–06 untuk JFT-Basic A2.
- Total empat file Claude: 274 soal. Tiap N4 berisi 87; tiap JFT A2 berisi 50.
- Keseluruhan rencana 12 paket = 822 soal; bagian ChatGPT 548 soal.
- Angka ini blueprint latihan DeX Gaku, bukan jaminan jumlah soal ujian resmi. Paket harus setara kesulitannya, bukan makin sulit mengikuti nomor.

---

## MULAI PROMPT UNTUK CLAUDE

Kamu bertugas menjadi penyusun dan pemeriksa soal bahasa Jepang untuk DeX Gaku. Buat latihan orisinal JLPT N4 dan JFT-Basic dengan sasaran kemampuan A2. Tugasmu HANYA paket 05 dan 06 pada masing-masing jenis ujian. Jangan menulis paket 01–04 atau mengubah bank N5/A1 yang sudah ada.

Kerjakan satu file lengkap per balasan, sesuai urutan pada bagian identitas. Jangan menulis empat paket sekaligus hingga terpotong. Hasil utama berupa file JSON UTF-8 yang dapat diparse; jangan mengeluarkan kode aplikasi.

### 1. Acuan dan cara memakai referensi

Prioritas: struktur resmi terkini, contoh resmi, lalu referensi pengguna untuk mengenali gaya dan tingkat kemampuan. Gunakan:

- JLPT: https://www.jlpt.jp/e/guideline/testsections.html
- Perubahan format N4/N5 sejak Desember 2020: https://www.jlpt.jp/sp/e/topics/202009091599642827.html
- JFT: https://www.jpf.go.jp/jft-basic/e/about/index.html
- Contoh resmi JFT: https://www.jpf.go.jp/jft-basic/e/sample/
- Belajar JFT: https://www.jpf.go.jp/jft-basic/e/faq/
- Irodori Dasar 1 dan Dasar 2: https://www.irodori.jpf.go.jp/en/
- Referensi tambahan pengguna: https://www.arkalearn.com/en/blog/40-contoh-soal-jft-basic-a2-2026
- Lampiran pengguna: `N4-2018年.pdf`, `N4-2017年-7月.pdf`, `Đề N4 T7-2023.pdf`.

Penting:
- Situs Arkalearn merupakan latihan tambahan; ikuti struktur resmi jika berbeda. Jangan menjadikan 40 contoh di artikel sebagai jumlah paket.
- PDF 2017/2018 lebih tua dari perubahan 2020. Jangan mengambil batas waktu atau jumlah lama secara otomatis.
- Beberapa halaman PDF berupa pindai dan lapisan teks dapat rusak. Periksa gambar halaman untuk garis bawah, furigana, tabel, gambar dan urutan opsi. Jangan menebak teks/kunci dari ekstraksi yang kacau.
- Lampiran tidak membuktikan keaslian atau izin publikasi bank soal. Kenali kompetensi dan bentuk soalnya, kemudian tulis soal baru secara mandiri. Jangan menyalin atau sekadar mengganti nama/angka pada kalimat referensi.
- Jangan mengaku sudah membuka tautan, membaca semua halaman, mendengarkan rekaman, menjalankan program, atau memeriksa paket 01–04 jika bahan/kemampuan tersebut tidak tersedia. Jelaskan keterbatasan singkat di luar JSON.
- Jika paket 01–04 belum dilampirkan, tetap susun soal orisinal; pemeriksaan duplikat lintas penulis akan dilakukan saat penggabungan.

### 2. Standar isi bersama

- Setiap soal hanya punya SATU jawaban benar yang didukung konteks.
- Distraktor masuk akal tetapi jelas salah dalam konteks; hindari sinonim yang sama-sama dapat diterima.
- Bahasa Jepang alami, ejaan dan konjugasi benar. Periksa partikel, jumlah benda, penghitung, tanggal, jam, negasi, perbandingan, bunyi panjang, sokuon dan makna kalimat.
- Jangan membuat jebakan lewat informasi hilang, kalender yang tidak ditentukan, atau pengetahuan budaya di luar teks/audio.
- Konteks bervariasi: tempat tinggal, kegiatan harian, sekolah, pekerjaan dasar, transportasi, belanja, makanan, fasilitas umum, janji, kesehatan sehari-hari, cuaca, tetangga dan layanan publik.
- JFT berpusat pada keberhasilan komunikasi dalam kehidupan nyata; jangan menjadikannya kumpulan soal terjemahan atau tes tata bahasa N4 dengan nama JFT.
- JLPT N4 menguji bahasa Jepang dasar melalui bacaan kanji/kosakata, tata bahasa, bacaan dan menyimak. N4 dan A2 bukan sertifikasi yang saling identik.
- Gunakan fondasi N5/A1 dengan tuntutan N4/A2: alasan, rencana, pengalaman, perubahan keadaan, izin/larangan, permintaan, urutan tindakan dan informasi penting dalam teks/percakapan. Jangan memperberat dengan pola N2/N3 atau istilah teknis.
- Sebagai sasaran editorial, kira-kira 20% soal pengantar, 60% sasaran utama, 20% lebih menantang tetapi tetap dalam tingkat sasaran. Ini bukan label resmi atau kalibrasi psikometrik.
- Jangan menaikkan tingkat hanya dengan memperpanjang kalimat. Ukur keterampilan yang jelas pada setiap butir.
- Tanpa romaji. Jangan memberikan furigana/bacaan pada kata yang sedang diuji cara bacanya. Di luar tes bacaan, gunakan kanji dasar; kata yang tidak penting untuk target boleh ditulis kana.
- Instruksi Indonesia hanya menjelaskan tugas, tidak membocorkan arti teks, pilihan atau jawaban.
- Pertahankan kebijakan bank simulasi saat ini: TANPA pembahasan/terjemahan jawaban. `answer` wajib untuk penilaian mesin; jangan menambahkan `why`, `explanation`, `rationale` atau ulasan.
- Sebarkan posisi kunci secara wajar; hindari pola berulang yang mudah ditebak. Jangan mengubah kebenaran kalimat hanya untuk menyeimbangkan posisi.
- Bacaan/audio/opsi harus selesai ditulis, tanpa TODO, placeholder, elipsis pengganti isi, atau rujukan ke gambar/rekaman yang tidak disediakan.

### 3. Blueprint JLPT N4: 87 soal per paket

Waktu bagian 0: 25 menit; bagian 1: 55 menit; bagian 2: 35 menit. Total 115 menit, di luar jeda/instruksi. Jumlah latihan dipatok agar semua penulis sama; jumlah resmi dapat bervariasi.

Urutkan tepat seperti tabel. Isi `kind` harus sama persis dengan nama pada tabel.

| section | kind | Jumlah |
|---:|---|---:|
| 0 | Bacaan kanji | 7 |
| 0 | Penulisan kata | 5 |
| 0 | Kosakata sesuai konteks | 8 |
| 0 | Ungkapan bermakna serupa | 4 |
| 0 | Penggunaan kata | 4 |
| 1 | Bentuk tata bahasa | 13 |
| 1 | Susun kalimat | 4 |
| 1 | Tata bahasa dalam teks | 4 |
| 1 | Bacaan pendek | 4 |
| 1 | Bacaan sedang | 4 |
| 1 | Mencari informasi | 2 |
| 2 | Menyimak tindakan atau tugas | 8 |
| 2 | Menyimak informasi utama | 7 |
| 2 | Menyimak ungkapan sesuai situasi | 5 |
| 2 | Menyimak respons langsung | 8 |

Total per section: **[28, 31, 28]**. Section 0–1: empat opsi. Section 2: tindakan/informasi utama empat opsi, ungkapan/respons langsung tiga opsi.

Rincian khusus:
- Bacaan kanji dan penulisan: tandai SATU kata sasaran memakai `<u>...</u>`. Tidak perlu menggarisbawahi seluruh kalimat.
- Penggunaan kata: berikan kata sasaran, lalu empat kalimat penggunaan; hanya satu yang alami dan sesuai makna.
- Susun kalimat: stem memiliki empat slot `＿＿ ＿＿ ★ ＿＿`. Empat opsi adalah empat potongan berbeda yang semuanya dipakai satu kali. Hanya satu urutan yang menghasilkan kalimat alami. `answer` adalah indeks potongan di slot ketiga (★), bukan indeks urutan kalimat penuh. Uji susunan lengkap sebelum menetapkan kunci.
- Tata bahasa dalam teks: dua teks koheren dengan dua soal per teks. Pakai `passage` yang sama persis pada pasangan soal. Tampilkan kedua blank bernomor, dan `jp` menjelaskan nomor blank yang ditanyakan.
- Bacaan pendek: empat teks, masing-masing satu soal, kurang lebih 100–180 karakter Jepang per teks.
- Bacaan sedang: dua teks, masing-masing dua soal, kurang lebih 300–450 karakter per teks. Ulangi `passage` identik pada dua soal yang memakai teks sama.
- Mencari informasi: satu jadwal/pengumuman/tabel teks sederhana dengan dua pertanyaan berbeda. Ulangi `passage` identik. Data harus cukup untuk menentukan satu jawaban.
- Panjang bacaan tersebut pedoman editorial, bukan syarat resmi. Jangan mengisi panjang dengan pengulangan.
- Semua soal section 1 pada jenis tata bahasa teks/bacaan/mencari informasi wajib mempunyai `passage`.

### 4. Blueprint JFT-Basic sasaran A2: 50 soal per paket

Waktu bersama 60 menit, bukan 60 menit per bagian. Empat bagian berurutan. Blueprint internal **[13, 12, 13, 12]**; ini memilih 50 soal untuk latihan, bukan menetapkan jumlah resmi yang selalu tepat 50.

| section | kind | Jumlah |
|---:|---|---:|
| 0 | Arti kosakata | 3 |
| 0 | Penggunaan kosakata | 4 |
| 0 | Bacaan kanji | 3 |
| 0 | Arti dan penggunaan kanji | 3 |
| 1 | Tata bahasa dalam percakapan | 6 |
| 1 | Ungkapan dalam situasi | 6 |
| 2 | Menyimak percakapan sehari-hari | 5 |
| 2 | Menyimak di toko dan tempat umum | 4 |
| 2 | Menyimak pengumuman dan instruksi | 4 |
| 3 | Memahami pesan dan teks pendek | 6 |
| 3 | Mencari informasi praktis | 6 |

Section 0, 1 dan 3: empat opsi. Section 2: tiga atau empat opsi sesuai kebutuhan, selalu satu kunci.

Rincian khusus:
- Sasaran A2 mencakup kemampuan Irodori Dasar 1 dan Dasar 2. Gunakan juga fondasi A1 secara wajar, tetapi jangan mendominasi paket dengan identitas/jam/arti kata dasar saja.
- Seimbangkan permintaan bantuan, mengklarifikasi, menjelaskan alasan, memahami perubahan jadwal, memilih layanan, menanggapi keluhan sederhana, dan mengambil tindakan dari pesan.
- Reading wajib memiliki `passage`: chat, surel pendek, catatan kerja, instruksi pemakaian, poster, jadwal, menu atau pemberitahuan. Gunakan sekitar 50–250 karakter untuk teks pendek; daftar/tabel secukupnya. Jangan mengubahnya menjadi bacaan abstrak panjang.
- Boleh dua soal berbagi stimulus, tetapi masing-masing menguji informasi berbeda dan tidak saling membocorkan jawaban. Ulangi stimulus identik.
- Listening wajib benar-benar memerlukan audio untuk menjawab. Satu butir dapat meminta menghubungkan dua informasi praktis, tanpa rantai penalaran rumit.
- Instruksi utama `instruction` berbahasa Inggris sederhana, `idn` bahasa Indonesia; opsi, dialog dan bacaan bahasa Jepang.
- Sasaran latihan ini A2; nama file `jft-a2` bukan klaim ada pendaftaran ujian JFT A2 yang terpisah. Jangan memberi skor resmi/sertifikat dari persentase benar.

### 5. Naskah menyimak dan gambar

- Seluruh 28 soal listening N4 dan 13 soal listening JFT per paket wajib memiliki `audio` dan `transcript` yang sama persis.
- Dua field tersebut berupa NASKAH, bukan URL/berkas rekaman. Jangan mengaku audio sudah direkam.
- Gunakan pemisah pembicara konsisten: `Narrator:`, `女:`, `男:`. Tulis nama atau peran dalam narasi bila perlu, tetapi identitas label suara tetap konsisten. Maksimal dua pembicara dialog ditambah narator pada tahap ini.
- Narasi memperjelas situasi, dialog memuat informasi, dan pertanyaan akhir menyebut siapa/apa yang ditanyakan. Respons langsung memakai satu ucapan pemicu dan pilihan respons.
- Pada respons langsung, jangan membacakan kunci sebagai bagian naskah. Pada soal lain, jangan membacakan daftar opsi kecuali memang bagian tugas; opsi terlihat pada layar latihan.
- Untuk narator setelah dialog, pakai label `Narrator:` lagi agar pertanyaan tidak dibacakan dengan suara tokoh terakhir.
- Dialog ringkas dan alami. N4 kira-kira 4–10 giliran untuk tindakan/informasi utama; JFT kira-kira 3–8 giliran. Ungkapan dan respons langsung lebih singkat. Ini pedoman, bukan kuota kalimat yang harus dipaksakan.
- Stem `jp` yang terlihat hanya pertanyaan/konteks aman, bukan transkrip atau ringkasan yang membocorkan isi audio.
- Lima soal N4 ungkapan sesuai situasi wajib memakai `scene` yang didukung: masing-masing satu `greeting`, `thanks`, `apology`, `request`, `farewell`.
- `scene.caption` menggambarkan situasi dalam bahasa Jepang, bukan ucapan jawaban. Audio tetap wajib. Uji ungkapan dengan tuntutan N4, bukan sekadar salam paling dasar.
- Jangan mengandalkan rincian gambar yang tidak ada pada sistem. Tipe gambar selain lima tipe di atas tidak boleh dibuat sendiri. Gunakan stimulus teks mandiri jika gambar baru diperlukan; tulis usulan aset secara terpisah, jangan masukkan soal yang belum bisa dijawab.

### 6. Identitas file dan ID

Kerjakan sesuai urutan berikut, satu file per giliran:

| File / id paket | exam | number | level | Awalan id soal |
|---|---|---:|---|---|
| jlpt-n4-05.json / jlpt-n4-05 | jlpt | 5 | N4 | n4-p05- |
| jlpt-n4-06.json / jlpt-n4-06 | jlpt | 6 | N4 | n4-p06- |
| jft-a2-05.json / jft-a2-05 | jft | 5 | A2 | jft-a2-p05- |
| jft-a2-06.json / jft-a2-06 | jft | 6 | A2 | jft-a2-p06- |

Nomor soal tiga digit mulai 001 di setiap paket; urutan terus berlanjut lintas section sampai 087 atau 050. Field paket wajib: `id`, `exam`, `number`, `title`, `level`, `status`, `questions`. `status` harus `draft`. `title` singkat dalam bahasa Indonesia dan berbeda antarpaket.

### 7. Kontrak JSON

Gunakan struktur yang sama dengan bank DeX Gaku saat ini. Contoh MINIMAL ini hanya untuk format, bukan paket lengkap atau soal final:

```json
{
  "id": "jlpt-n4-05",
  "exam": "jlpt",
  "number": 5,
  "title": "Kegiatan dan rencana",
  "level": "N4",
  "status": "draft",
  "questions": [
    {
      "id": "n4-p05-001",
      "section": 0,
      "kind": "Bacaan kanji",
      "instruction": "＿＿の ことばは どう よみますか。",
      "idn": "Pilih bacaan kata yang digarisbawahi.",
      "jp": "午後は <u>会議</u>が あります。",
      "options": ["かいぎ", "かぎ", "かいき", "かぎい"],
      "answer": 0
    }
  ]
}
```

Field wajib setiap soal: `id` string unik, `section` integer mulai 0, `kind` sesuai blueprint, `instruction`, `idn`, `jp`, `options` array string, `answer` integer mulai 0.

Field tambahan yang diperbolehkan HANYA:
- `passage`: string teks Jepang, newline ditulis `\n` di JSON.
- `audio`: string naskah yang dibacakan.
- `transcript`: string sama persis dengan `audio`.
- `scene`: objek `{"type":"request","caption":"図書館で、となりの人に声を小さくしてもらいたいです。"}`.

Aturan serialisasi:
- `answer: 0` berarti opsi pertama, 1 opsi kedua, dan seterusnya.
- `options` tanpa awalan A/B/C/D atau angka opsi, tanpa HTML.
- `jp` boleh memakai HANYA tag `<u>...</u>` untuk sasaran. Tidak boleh HTML lain, Markdown, ruby, script, tautan atau URL gambar.
- `passage`, `audio`, `transcript`, instruksi dan caption berupa teks biasa. Jangan memakai tabel HTML; gunakan baris teks yang tetap mudah dibaca di HP.
- Tanpa komentar, trailing comma, nilai null, fungsi, data pengguna atau field penjelasan tambahan.
- Untuk soal tanpa field opsional, hilangkan field tersebut; jangan memakai placeholder atau string kosong sebagai pengganti stimulus wajib.
- Jangan menambahkan field timer, skor, rekaman audio atau level baru di dalam soal. Integrasi dan pengaturan ujian ditangani pengembang.

### 8. Pemeriksaan wajib sebelum menyerahkan

1. Hitung jumlah tiap jenis, section dan paket; tepat mengikuti blueprint.
2. Semua ID unik, nomor kontinu, section dan jenis soal terurut.
3. JSON valid; semua tipe field benar; answer dalam rentang opsi.
4. Opsi tidak identik setelah normalisasi spasi; hanya satu yang benar.
5. Kerjakan setiap soal sendiri tanpa melihat kunci, lalu bandingkan. Khusus bintang susun seluruh potongan; khusus jadwal/negasi/perubahan rencana telusuri bukti.
6. Seluruh reading dan tata bahasa teks punya stimulus yang diperlukan. Teks bersama sama persis; tidak ada rujukan gambar yang hilang.
7. Seluruh listening mempunyai naskah dan transkrip identik; label suara benar; stem tidak membocorkan isi audio.
8. Pastikan tidak ada salinan referensi atau duplikasi dangkal antarpaketmu. Periksa dengan paket ChatGPT jika tersedia; jangan mengklaim pemeriksaan lintas paket jika tidak ada file pembanding.
9. Tidak ada romaji, pembahasan, terjemahan jawaban, klaim soal resmi/bocoran, atau perhitungan skor resmi.
10. Jelaskan secara jujur apakah JSON diperiksa manual atau diparse dengan program. Status tetap draft sampai diaudit.

### 9. Cara mengirim hasil

Mulai dengan `jlpt-n4-05.json`, lengkap 87 soal. Berhenti setelah satu paket. Saat saya mengetik LANJUT, kerjakan file berikutnya sesuai urutan. Bila keterbatasan keluaran membuat satu paket tidak muat, beri tahu sebelum mulai; jangan diam-diam mengurangi soal atau mengirim JSON yang terpotong.

Jika bisa membuat lampiran, kirim file JSON UTF-8 utuh. Jika hanya bisa teks, keluarkan satu blok JSON utuh tanpa prosa di dalamnya. Catatan validasi singkat boleh ditempatkan di luar JSON; tidak perlu pembahasan tiap jawaban.

## AKHIR PROMPT UNTUK CLAUDE

---

## Catatan penggabungan untuk pemilik proyek

- Kirim hasil JSON Claude kembali ke ChatGPT untuk audit bahasa, kunci, duplikat, kesetaraan tingkat dan integrasi.
- Format inti sudah mengikuti bank simulasi yang ada. Runtime saat ini masih memakai konfigurasi N5/A1; dukungan pemilihan level, timer N4, pemisahan paket, progres/riwayat, label dan aset audio N4/A2 akan ditambahkan ketika integrasi. File ini tidak menyatakan N4/A2 sudah dapat dimainkan.
- Persentase jawaban benar akan dilaporkan sebagai hasil latihan; bukan skor berskala resmi JLPT/JFT dan bukan jaminan lulus.
- Naskah listening bukan rekaman. Rekaman/voice diproduksi sesudah naskah dan kunci lolos audit agar tidak merekam ulang soal yang salah.
- Ketiga PDF telah dicek struktur dan beberapa halaman perwakilan; bukan audit penuh setiap butir atau verifikasi keaslian sumber.
