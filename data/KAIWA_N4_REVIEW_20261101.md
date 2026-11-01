# Kaiwa N4 — Paket 26, 1 November 2026

## Materi dan batas cakupan

18 skenario adaptasi: sembilan topik dari Elementary 1 dan sembilan dari Elementary 2. Masing-masing delapan giliran, total 144 baris dengan romaji/arti; 72 balasan latihan dan 144 pilihan salah. Sumber: dua PDF Lesson Review (Can-do Conversation) A2 yang diberikan pengguna. Peta topik, pasangan pelajaran, halaman dan SHA-256 ada di data/kaiwa-sources/index.json dan data/kaiwa-n4.json.

Dua pelajaran terkait dipadukan menjadi satu percakapan per topik. Ini pilihan tujuan komunikasi untuk latihan, bukan klaim mencakup setiap Can-do atau seluruh isi 36 pelajaran. A2 adalah level CEFR pada sumber; N4 merupakan pengelompokan aplikasi, bukan pernyataan kesetaraan resmi CEFR/JLPT. Skenario dan rincian pribadi, perjalanan, festival, tempat/perusahaan adalah contoh adaptasi; bukan informasi dunia nyata yang harus dihafalkan. Dialog baru ditulis dengan konteks/kosakata yang disesuaikan, bukan terjemahan harfiah seluruh PDF.

Elementary 1: keluarga/hobi, cuaca, kota/arah, janji/ajakan, belajar bahasa/bantuan, piknik/makanan, kunjungan kantor, kebiasaan sehat, hadiah/perayaan.
Elementary 2: teman baru/kesan, restoran, persiapan perjalanan, festival/rencana cadangan, hari istimewa, belanja daring, tur/museum, kebiasaan ramah lingkungan, kenangan/perubahan kemampuan.

## Perilaku aplikasi

Menu Kaiwa mengikuti prefs.level. N4 hanya menampilkan 18 skenario N4; N5 tetap 16 skenario hasil audit paket 25. ID terpisah dan pemulihan route hanya menerima skenario dari level aktif. Mengganti level menghentikan audio, membatalkan transisi dan mengembalikan Kaiwa ke menu level terpilih. Riwayat terdahulu dipertahankan; hasil baru memuat label level.

Baca & dengar serta Latihan tetap dipakai. Tujuan balasan diberikan di latihan N4 untuk membatasi maksud, karena percakapan alami dapat memiliki banyak balasan yang sah. Kunci memenuhi tujuan yang diminta; pilihan lain tidak otomatis salah dalam semua percakapan. Terjemahan/romaji dan catatan pola tetap dibuka melalui bubble. Nama pemain Ryota, tanpa tambahan Aku/Kamu. Petunjuk pergantian waktu ditampilkan sebagai penanda adegan dan tidak dibacakan.

## Audio

Belum ada rekaman MP3 N4. N4 langsung memakai TTS Jepang dari perangkat (tanpa meminta MP3 yang belum tersedia). Tampilan menjelaskan sumber suara; kualitas dan pilihan suara mengikuti perangkat. N5 tetap memakai 136 MP3 lama dan fallback perangkatnya. Tidak ada rekaman N4 yang diklaim sudah dibuat atau didengarkan.

144 naskah rekaman terpisah tersedia dalam scripts/voice-v3/kaiwa-n4-manifest.json. Generator menerima mode kaiwa-n4 dengan voice ID Kaiwa yang sama seperti pengaturan terdahulu; output/cache/ZIP dipisahkan dari N5. Hanya dry-run yang dijalankan, tanpa API key, biaya atau panggilan layanan suara. Memasukkan MP3 dan mengaktifkannya dalam aplikasi menjadi tahap berikutnya setelah rekaman tersedia.

## Validasi

49 berkas tes lulus. Tes baru memeriksa 18 skenario/144 baris/72 jawaban, field, pilihan unik, peta dua PDF dan hash, cakupan topik, kecocokan naskah rekaman, label, petunjuk, penyelesaian latihan, pencegahan route lintas level, TTS langsung tanpa MP3, antrean suara dan pembatalan. Regresi N5, Quiz N4, modul belajar dan navigasi lulus. Build data N4 stabil. Ini pemeriksaan internal dan tes renderer; belum pengajar eksternal, verifikasi pendengaran atau uji Android fisik baru.

Hak cipta PDF sumber tetap ©2017 The Japan Foundation. Salinan sumber dipertahankan sebagai referensi audit. Paket kumulatif 1–25; pemasang memeriksa konflik, backup dan rollback, tanpa commit/push/deploy otomatis.
