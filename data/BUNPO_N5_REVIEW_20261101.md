# Bunpo N5 — audit pemula mandiri dari nol, 1 November 2026

83/83 materi dan 166 contoh ditinjau secara editorial internal. Target pembaca belum memahami istilah tata bahasa Jepang dan belajar sendiri. Penjelasan utama singkat, fungsi didahulukan, perubahan ditunjukkan lewat kata konkret, dan catatan menjelaskan pembeda. Ini bukan sertifikasi eksternal, silabus resmi JLPT, atau hasil uji pemahaman langsung pada pengguna pemula.

## Perubahan

- Tulis ulang 83 penjelasan, rumus dan catatan dengan istilah yang lebih langsung; jelaskan topik, objek, negatif, lampau, kata benda/kerja/sifat, serta pangkal ます lewat contoh.
- Tambahkan pengantar lipat “Mulai dari nol” pada daftar dan detail N5: tulisan/kana/kanji/romaji, です, は, kalimat tanya/negatif, kata tunjuk, urutan kata, partikel, arti simbol, dan cara belajar. Tautan fondasi membantu membuka materi yang dibutuhkan tanpa mengubah ID atau urutan koleksi.
- Tambahkan panduan kata kerja terlipat: gol. I/II/III, bentuk kamus/biasa/sopan, ない／て／た, tabel perubahan akhiran, dan pengecualian 行く／ある. Tabel bentuk pada materi awal memakai kana dan contoh よむ／たべる agar tidak mengandaikan pembaca mengenal kanji.
- Tinjau 166 contoh. Dua kalimat Jepang disesuaikan: contoh sifat sebelum benda memakai kalimat これは高い山です yang lebih sederhana; contoh Vの mencakup のが pada 泳ぐのが好きです. Tiga arti diperjelas: koran terbitan kemarin, ada payung, dan banyak orang di Tokyo.
- Rapikan spasi pada 52 baris bacaan, terutama です, bentuk ている, dan gabungan kegiatan する. Bahasa Jepang asli tetap tanpa spasi; baris kana adalah bantuan belajar. Romaji dihasilkan dari bacaan ini.
- Lengkapi bacaan untuk teks Jepang pada 16 cek: kana tampil dengan soal/pilihan yang memerlukannya, romaji mengikuti tombol Tampilkan romaji. Jumlah cek, pilihan, dan jawaban benar tidak berubah; bacaan pilihan yang sengaja salah tetap mengikuti tulisan pilihan itu.
- Pertahankan kata kanji lama sebagai alias pencarian ketika penjelasan dipermudah dengan kana. Hapus catatan internal tentang pembagian data N5/N4 dari alur belajar.

## Yang dipertahankan

83 materi, 11 kategori, 166 contoh, 16 cek, seluruh ID/urutan/level/pengayaan dan sumber halaman PDF awal. Bunpo N4 tetap 115 materi hasil audit paket 15; data Kotoba dan Kanji identik. Pengantar adalah bantuan tambahan, bukan penambahan jumlah pelajaran atau klaim bahwa 83 materi mencakup seluruh pembelajaran dari nol.

## Rujukan pemeriksaan dasar

Sumber awal tetap ALL_-_BUNPO_N5.pdf. Referensi berikut diakses 1 November 2026 untuk scope yang disebutkan; penjelasan Indonesia ditulis orisinal.

- Nです dan negatif: https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/lesson01/step1/explanation/001.html
- Nでした dan negatif lampau: https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c01/lesson01/step4/explanation/004.html
- Golongan kata kerja, pengecualian, hubungan て／た／ない／ます: https://www.coelang.tufs.ac.jp/mt/ja/gmod/contents/explanation/039.html
- Pengenalan diri dan pola dasar です／は untuk pemula: https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L03.pdf

## Validasi

Seluruh 42 berkas tes lulus. Build ulang stabil; tes mencocokkan JSON dengan bundle, memeriksa isi seluruh 83 detail, pengantar khusus N5, bantuan bacaan 16 cek, umpan balik jawaban, pencarian kanji/kana/romaji, navigasi, simpanan, dan pemisahan N4. Tabel di layar dapat digulir horizontal dan pengantar mula-mula dilipat agar penjelasan inti tetap ringkas.

Pemeriksaan render memakai VM; belum uji visual browser/perangkat Android atau uji pemahaman bersama pelajar pemula. Audit internal tidak menjamin seluruh nuansa bahasa dan pemahaman semua pengguna.

Paket 16 kumulatif mencakup 1–15. Pemasang memeriksa hash, mencadangkan target, menolak konflik dan memulihkan perubahan jika tes gagal. Cache Python tidak ditulis oleh proses tes pemasang. Tidak melakukan commit/push/deploy otomatis.
