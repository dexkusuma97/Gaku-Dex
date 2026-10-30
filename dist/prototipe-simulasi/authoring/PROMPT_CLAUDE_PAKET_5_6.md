# Prompt Claude — Paket 5–6 Simulasi DeX Gaku

Salin seluruh bagian di antara **MULAI PROMPT** dan **AKHIR PROMPT** ke Claude.
Gunakan bersama JSON paket 1–4 yang dilampirkan sebagai referensi pengecekan
kemiripan, bukan untuk disalin. Kerjakan satu paket per balasan agar tidak terpotong.
Acuan yang sudah diperiksa dan tambahan instruksi tersedia dalam
`REFERENSI_SOAL_N5_JFT_A1.md` dan `TAMBAHAN_PROMPT_CLAUDE_REFERENSI.md`.

---

## MULAI PROMPT

Kamu adalah penulis soal bahasa Jepang dan pemeriksa mutu untuk DeX Gaku,
aplikasi belajar berbahasa Indonesia. Buat bank soal ORISINAL untuk:

1. JLPT N5 Paket 05.
2. JLPT N5 Paket 06.
3. Latihan JFT-Basic tingkat A1 Paket 05.
4. Latihan JFT-Basic tingkat A1 Paket 06.

Paket 01–04 sedang dikerjakan tim lain. Hanya kerjakan 05–06. Bila paket 01–04
terlampir, periksa agar soalmu tidak menduplikasi soal mereka. Jangan mengaku
sudah membandingkan jika file referensi tidak ada.

### Batas dan sasaran

- Ini latihan independen, bukan soal resmi, bocoran, atau hasil konversi bank soal berhak cipta.
- JFT-Basic resmi mengukur rentang A1–A2; "A1" di sini adalah sasaran kesulitan
  materi latihan, bukan nama level ujian terpisah atau jaminan kelulusan resmi.
- Tiap soal pilihan ganda punya SATU jawaban benar. Tiga atau empat opsi sesuai
  ketentuan di bawah. Distraktor harus masuk akal tetapi salah dalam konteksnya.
- Tidak ada pembahasan: jangan mengeluarkan `why`, `explanation`, `rationale`,
  terjemahan jawaban, atau ulasan. `answer` tetap wajib untuk mesin penilai.
- Jangan hanya mengganti nama/angka untuk membuat duplikat. Beragamkan tujuan
  komunikasi, konteks, pola kalimat, jenis informasi, dan distractor.
- Gunakan bahasa Jepang alami yang bisa dipertanggungjawabkan. Jangan membuat
  kalimat ganjil demi menyesuaikan kunci. Hindari opsi yang sama maknanya sehingga
  dua jawaban menjadi benar. Periksa partikel, konjugasi, bunyi panjang, sokuon,
  dakuten, ejaan katakana, dan bacaan angka/waktu.
- Kanji N5 boleh diuji pada soal bacaan/penulisan. Di luar sasaran tersebut,
  prioritaskan kana atau kanji dasar yang dapat dipahami dari konteks.
- Tanpa romaji dan tanpa furigana yang membocorkan bacaan kanji yang diuji.
- Instruksi Indonesia hanya menjelaskan tugas, tidak menerjemahkan isi jawaban.
- Sebarkan posisi jawaban benar secara wajar; hindari semua jawaban di posisi sama.

### Blueprint JLPT N5: 71 soal per paket

Ini jumlah yang dipilih untuk latihan DeX Gaku, BUKAN klaim jumlah soal resmi.
Waktu: bagian 0 = 20 menit; bagian 1 = 40 menit; bagian 2 = 30 menit.

| section | Isi | Jumlah |
|---|---|---:|
| 0 | Bacaan kanji | 7 |
| 0 | Penulisan kanji/katakana dari kata hiragana | 5 |
| 0 | Kosakata sesuai konteks | 6 |
| 0 | Ungkapan bermakna serupa | 3 |
| 1 | Bentuk tata bahasa/partikel | 12 |
| 1 | Susun kalimat, memilih unsur di posisi ★ | 4 |
| 1 | Tata bahasa dalam teks | 4 |
| 1 | Bacaan pendek | 3 |
| 1 | Bacaan sedang | 2 |
| 1 | Mencari informasi dari pengumuman/jadwal | 1 |
| 2 | Menyimak: memahami tindakan/tugas | 7 |
| 2 | Menyimak: menangkap informasi utama | 6 |
| 2 | Menyimak: ungkapan sesuai situasi | 5 |
| 2 | Menyimak: respons langsung | 6 |

Total per section: **[21, 26, 24]**. Semua soal section 0–1 punya empat opsi.
Section 2 boleh tiga atau empat opsi; respons langsung lazimnya tiga.

Rincian:
- Urutkan soal menurut section, lalu menurut urutan jenis di tabel.
- Soal susun kata: tampilkan empat slot `＿＿ ＿＿ ★ ＿＿`, empat opsi berupa
  empat potongan yang harus dipakai sekali masing-masing. Pastikan urutan
  kalimat hanya satu yang masuk akal; `answer` adalah indeks potongan yang
  menempati slot ketiga (★), BUKAN nomor urutan seluruh kalimat.
- Untuk tata bahasa teks, buat teks koheren dengan satu tempat kosong jelas.
- Bacaan pendek kira-kira 80 karakter; bacaan sedang kira-kira 200–260 karakter.
  Ini panduan panjang, bukan alasan untuk mengisi teks dengan pengulangan.
- Soal mencari informasi memakai pengumuman/jadwal/menu yang dapat dibaca,
  dengan satu pertanyaan dan satu jawaban yang dapat ditentukan dari isinya.
- Semua 24 soal menyimak WAJIB punya `audio` dan `transcript` bahasa Jepang.
  Pertanyaan atau opsi terlihat tidak boleh membocorkan jawaban dari skrip.
- Audio memuat konteks dan pertanyaan yang cukup; untuk respons langsung,
  sertakan ucapan pemicu. Opsi ditampilkan sebagai teks dalam prototipe ini.
- Untuk ungkapan sesuai situasi, gunakan `scene` dengan tipe yang didukung:
  `greeting`, `thanks`, `apology`, `request`, `farewell`. Caption singkat
  menggambarkan situasi dalam bahasa Jepang, bukan jawaban. Audio tetap diperlukan.
  Jangan membuat pertanyaan bergantung pada detail gambar yang tidak ada.
- Mode menyimak prototipe masih diputar manual/TTS. Jangan menjanjikan bahwa
  skrip ini sudah menjadi rekaman audio ujian atau sudah mengikuti jadwal audio final.

### Blueprint latihan JFT-Basic A1: 50 soal per paket

Waktu bersama: **60 menit**. Total per section: **[13, 12, 13, 12]**.

| section | Isi | Jumlah |
|---|---|---:|
| 0 | Huruf dan kosakata: arti, penggunaan, bacaan, arti kanji | 13 |
| 1 | Percakapan dan ungkapan: tata bahasa dan respons dalam situasi | 12 |
| 2 | Menyimak: interaksi sehari-hari, toko/tempat umum, pengumuman | 13 |
| 3 | Membaca: pesan, jadwal, menu, pengumuman, mencari informasi | 12 |

- Tulis pertanyaan pada tingkat A1: identitas, keluarga, waktu, makanan, arah
  sederhana, belanja, tempat tinggal, transportasi, kegiatan sehari-hari.
- Bahasa konkret, ucapan pendek, satu atau dua informasi yang perlu ditemukan.
  Hindari keigo rumit, kalimat bersarang panjang, pola N3/N2, atau logika jebakan.
- Section 0, 1, 3 memiliki empat opsi. Section 2 boleh tiga atau empat opsi.
- Semua 13 soal section 2 WAJIB punya `audio` dan `transcript` bahasa Jepang.
- Section 3 WAJIB punya `passage` yang sungguh diperlukan untuk menjawab soal.
- Instruksi utama `instruction` berbahasa Inggris sederhana, dan `idn`
  berbahasa Indonesia. Isi, dialog, opsi, dan bacaan tetap bahasa Jepang.
- Jangan mengubah konteks menjadi tes terjemahan kata Indonesia semata;
  utamakan memahami atau memilih ungkapan dalam situasi nyata.
- Navigasi akan ditangani aplikasi; jangan menulis kode timer atau skor berskala.

### Kontrak JSON yang WAJIB dipakai

Keluarkan **satu objek paket per file JSON**, bukan JavaScript, Markdown,
komentar, atau string berisi JSON. UTF-8, kutip ganda, tanpa trailing comma.

```json
{
  "id": "jlpt-n5-05",
  "exam": "jlpt",
  "number": 5,
  "title": "Judul tema singkat dalam bahasa Indonesia",
  "level": "N5",
  "status": "draft",
  "questions": [
    {
      "id": "n5-p05-001",
      "section": 0,
      "kind": "Bacaan kanji",
      "instruction": "＿＿の ことばは どう よみますか。",
      "idn": "Pilih bacaan kata yang digarisbawahi.",
      "jp": "きょう、<u>山</u>へ いきます。",
      "options": ["うみ", "やま", "かわ", "そら"],
      "answer": 1
    }
  ]
}
```

Contoh di atas hanya menunjukkan format; jangan masukkan sebagai soal final.

Identitas file/paket:

| File | id | exam | number | level | Awalan ID soal |
|---|---|---|---:|---|---|
| jlpt-n5-05.json | jlpt-n5-05 | jlpt | 5 | N5 | n5-p05- |
| jlpt-n5-06.json | jlpt-n5-06 | jlpt | 6 | N5 | n5-p06- |
| jft-a1-05.json | jft-a1-05 | jft | 5 | A1 | jft-a1-p05- |
| jft-a1-06.json | jft-a1-06 | jft | 6 | A1 | jft-a1-p06- |

Nomor soal berurutan tiga digit mulai 001 di setiap paket. `answer` adalah
indeks mulai 0: opsi pertama = 0, kedua = 1, dan seterusnya.

Field wajib per soal: `id`, `section`, `kind`, `instruction`, `idn`, `jp`,
`options`, `answer`.

Field opsional:
- `passage`: teks bacaan, newline boleh memakai `\n`.
- `audio`: naskah Jepang yang akan dibacakan mesin/aktor suara, termasuk
  konteks dan pertanyaan jika dibutuhkan. Tanpa instruksi Indonesia.
- `transcript`: naskah yang isinya sama dengan audio; line break boleh berbeda.
- `scene`: objek `{"type":"greeting","caption":"あさ、となりの ひとに あいます。"}`.

Dalam `jp`, hanya tag HTML `<u>...</u>` untuk kata yang diuji yang diperbolehkan.
Jangan gunakan HTML lain, tautan, gambar eksternal, fungsi JS, Markdown,
`ruby`, placeholder konten, `TODO`, elipsis pengganti soal, atau nilai `null`.
Opsi berupa teks biasa; `audio`/`transcript`/`passage` juga teks biasa.
Jangan menaruh label A/B/C/D atau 1/2/3/4 dalam teks opsi.
Jangan menambahkan field pembahasan, rubrik jawaban, atau data pengguna.

### Pemeriksaan sebelum mengirim

Lakukan pemeriksaan ini secara internal, perbaiki masalah, baru keluarkan file:

1. JSON dapat diparse; field dan tipe benar; ID unik; section berurutan.
2. Tepat 71 soal [21,26,24] untuk tiap N5; tepat 50 [13,12,13,12] untuk tiap A1.
3. Distribusi subjenis N5 tepat seperti blueprint; JFT mencakup berbagai situasi.
4. Opsi unik setelah normalisasi spasi, answer ada di rentang opsi, hanya satu benar.
5. Semua soal listening memiliki audio/transkrip; tidak ada jawaban tersurat pada
   stem yang seharusnya hanya bisa diperoleh dari audio.
6. Semua kunci diperiksa ulang; khusus bintang uji susun potongan kalimat utuh.
7. Tidak ada soal identik/nyaris sama di empat paket ini maupun lampiran paket1–4.
8. Tidak ada penjelasan jawaban, konten di luar kemampuan sasaran, atau klaim resmi.

### Cara mengerjakan agar tidak terpotong

Mulai dengan **jlpt-n5-05.json**, satu paket lengkap 71 soal. Setelah selesai,
berhenti. Saat saya mengetik `LANJUT`, kerjakan file berikutnya sesuai urutan
empat file di atas. Jangan mengurangi jumlah soal untuk memuat semua paket dalam
satu balasan. Jika platform mendukung lampiran, kirim file JSON lengkap.
Jangan mengklaim telah menjalankan validator/program bila kamu hanya memeriksa
secara manual. Pertahankan status `draft` sampai diperiksa manusia.

Acuan untuk memeriksa format/tingkat (bukan untuk menyalin soal):
- https://www.jlpt.jp/e/guideline/testsections.html
- https://www.jlpt.jp/e/guideline/pdf/n5_e_revised.pdf
- https://www.jpf.go.jp/jft-basic/e/about/
- https://www.irodori.jpf.go.jp/en/starter/pdf.html

## AKHIR PROMPT

---

Catatan penggunaan DeX Gaku: setelah empat JSON selesai, kirimkan kembali file
kepada tim pengembang untuk validasi bahasa, pemeriksaan duplikat dengan paket
1–4, dan integrasi. Jangan mengganti aplikasi dengan kode HTML/JS dari Claude.
Tidak ada fitur import bank simulasi yang dibuka untuk pengguna pada prototipe ini.
