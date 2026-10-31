# Audit kualitas 31 Oktober 2026 — batch pertama

138 contoh Kotoba N4 ditulis ulang sesuai pemakaian kata. Contoh Jepang memakai kana untuk membantu pemula; kolom kana sama dengan kalimat contoh. Tidak mengubah arti kepala entri, keanggotaan level, ID, atau audio.

Contoh: あかちゃんがねています。— Bayinya sedang tidur.
Contoh: アンケートにこたえてください。— Silakan isi angket ini.
Contoh: このスープはあじがうすいです。— Rasa sup ini kurang kuat.

Baseline: 1.600 topic-frame dan 637 occasional-frame. Sesudah batch: 2.099 bingkai berulang masih mengantre. Periksa JSON quality-review untuk daftar ID. Ini belum audit menyeluruh 3.227 kata, 115 Bunpo, atau detail Kanji.

Pemeriksaan: 37 berkas tes otomatis lulus, build idempoten dan koreksi bertahan saat rebuild. N5 tetap 1.791; N4 tetap 3.227.

Referensi tersedia untuk tahap verifikasi selanjutnya: https://www.irodori.jpf.go.jp/en/resources.html dan https://marugoto.jpf.go.jp/assets/docs/download/elementary1_a/MarugotoElementary1ActivitiesVocabularyIndex2_ID.pdf . Contoh baru adalah tulisan orisinal, bukan kutipan atau klaim sudah divalidasi penerbit.

## Pemasangan patch

Ekstrak ZIP patch ke akar repository Gaku-Dex yang memiliki folder data, scripts, tests, dan dist. Timpa berkas dengan jalur sama. Patch tidak memuat aset lama; jangan hapus repository lama. dist/kotoba-n4-data.js sudah dibangun. Jalankan node --test tests/*.test.cjs bila Node/Python tersedia, lalu unggah perubahan seperti biasa. Belum dipublikasikan otomatis.


## Batch 2

Total 173 contoh (138 sebelumnya + 35 baru). Seluruh 173 kolom kana diberi spasi manual; teks Jepang utama tidak berubah karena penambahan spasi. Romanisasi contoh mengikuti spasi tersebut, termasuk は menjadi wa ketika berperan sebagai partikel. Contoh あかちゃん: akachan ga nete imasu.

Antrean tersisa 2.064 contoh. Penambahan spasi belum mencakup seluruh contoh lama di luar batch editorial ini. Pemisahan bersifat bantuan membaca, bukan analisis morfologi otomatis. Paket batch 2 sudah mencakup batch 1; jalankan pasang.sh sesuai BACA-DULU.txt.


## Batch 3 — total 500

327 contoh tambahan ditulis per entri, menjadikan total 500 contoh kontekstual unik dengan spasi bacaan. Contoh kalimat baru bukan kutipan penerbit dan belum sertifikasi linguistik pihak ketiga. Spasi dibagi untuk membantu pembaca; akhiran kata tetap disatukan bila sesuai, partikel dipisahkan. Seluruhnya memakai romanisasi yang sudah ada pada aplikasi.

Antrean bingkai berulang tersisa 1.737. Tambahan data/kotoba-n4-lexical-review-pending.json mencatat 14 masalah yang terlihat dan belum ditindaklanjuti. Tidak menganggap contoh kalimat baru menyelesaikan seluruh ambiguitas makna kepala entri.

Verifikasi: 500 kalimat unik, ID dan jumlah kartu terjaga, penghapusan spasi pada bacaan sama persis dengan Jepang utama, output romaji contoh teruji. Build penuh dari normalisasi menghasilkan record aktif sama persis; 37 berkas tes lulus. Paket kumulatif batch 3 menggantikan kebutuhan memasang batch terdahulu.

- Batch 3 juga memperbaiki romanisasi gabungan katakana asing (misalnya ウォ, ティ, ファ) di helper bersama; grid kana tidak berubah. Tes semua 500 contoh memastikan tidak ada kana tersisa di romaji.
