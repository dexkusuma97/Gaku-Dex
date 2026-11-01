# Audit Quiz — batch 23, 1 November 2026

## Bunpo N5

129 kerangka beserta kelima variasi kosakatanya ditinjau internal. Bank tetap 645 situasi × empat mode = 2.580 soal, 43 subkategori. 46 definisi kerangka sumber berubah, termasuk normalisasi pilihan lama yang sebelumnya diganti diam-diam oleh generator; perubahan efektif kalimat/arti/penjelasan/pilihan mencakup 80 situasi. Rincian ada di data/quiz/editorial-review-20261101.json.

Pengecoh と di daftar や…など dihapus karena dapat ikut membentuk kalimat yang sesuai maksud. ので tidak lagi menjadi pilihan salah untuk alasan から yang sama. Pengecoh konektor yang terlalu dekat diganti; konteks waktu ごぜん／ごご serta tujuan lokasi diperjelas. Guru dalam contoh alasan diubah menjadi guru bahasa Jepang agar alasan keterampilannya masuk akal. Penjelasan keberadaan tidak menyamakan semua makhluk hidup dengan います; tumbuhan umumnya memakai あります.

Semua pengecoh kini tersimpan eksplisit dalam frames.py. Generator memeriksa tepat tiga pilihan unik, bukan memetakan string buatan ke partikel lain lalu menambahkan partikel cadangan otomatis. Dengan begitu, build ulang tidak memasukkan kembali pilihan yang tidak ditinjau. Arti tetap membatasi jawaban; pilihan yang gramatikal pada arti/konteks berbeda tidak dinyatakan salah secara universal. Susun kata tetap mengikuti contoh dengan potongan pertama tetap, tanpa klaim hanya satu urutan bahasa Jepang yang sah.

## Kotoba, Kanji, Kana dan level

Penyaringan arti membandingkan bentuk ejaan/tanda baca dan kelompok sinonim umum, misalnya tiba/sampai, sulit/susah, hadiah/kado. Keterangan dalam kurung tidak membuat dua arti sama lolos sebagai pengecoh berbeda. Ini filter konservatif: beberapa pilihan yang dekat dapat dikeluarkan walau sebenarnya berbeda konteks. Bukan mesin yang memahami semua sinonim atau seluruh kemungkinan makna. Kata sumber, kategori dan level tetap memakai data Kotoba/Kanji yang sudah tersedia; kosakata Rangkuman tidak otomatis dicampurkan sebagai bank baru.

Kana tidak lagi menawarkan pasangan romanisasi wo/o, di/ji, du/zu sebagai bunyi pengecoh yang bersaing. Label jawaban tetap mengikuti tabel Kana aplikasi. Kanji tanpa bacaan pada jenis yang dipilih tidak dijadikan soal bacaan.

Bunpo N4 dan Campuran N4 tetap belum tersedia. Penjagaan kini berlaku juga pada pembuatan pool/deck dan tombol mulai, sehingga route lama atau pemanggilan fungsi tidak membuat soal Bunpo N5 dalam level N4. Memilih Bunpo N4 tidak mengambil bank N5. Pertanyaan sesi yang sudah tersimpan tetap merupakan snapshot sesi tersebut.

## Validasi dan batas

47 berkas tes lulus. Pemeriksaan mencakup semua 645 situasi/2.580 bentuk soal, kunci terhadap sumber, lessonIds, susunan potongan, empat pilihan unik dan determinisme build. Tes berseed membuat 12.150 soal Kana/Kotoba/Kanji dari seluruh sumber N5/N4 yang memenuhi syarat bacaan; kunci, label dan keunikan diperiksa. Regresi independen memakai tiba/sampai, daftar や／と, alasan から／ので dan pembatasan level pada mesin serta UI.

Tes sesi yang ada lulus: 60 detik, tambah/kurang waktu, tiga nyawa, jeda umpan balik, cegah jawaban ganda, pengacakan kunci, muat ulang, tombol kembali dan riwayat. Semua modul lain dan data belajar dipertahankan. Batch ini menggunakan tes mesin/DOM simulasi; belum uji browser/Android fisik baru atau telaah pengajar eksternal. Pemeriksaan otomatis 12.150 soal tidak berarti semua kemungkinan pengecoh acak telah dibuktikan bebas ambiguitas secara semantik.

Paket 23 kumulatif mencakup 1–22. Pemasang memeriksa konflik, backup dan rollback; tidak melakukan commit/push/deploy. Selanjutnya dapat menguji Quiz di ponsel dengan beberapa kategori pilihan pengguna, lalu mengaudit Cerita/Kaiwa jika diperlukan.
