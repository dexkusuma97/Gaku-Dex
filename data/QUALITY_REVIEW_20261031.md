# Audit kualitas 31 Oktober 2026

Status terkini: batch 5, total 1.500 contoh kontekstual. Catatan di bawah menyimpan riwayat setiap batch.

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


## Batch 4 — total 1.000

Tambahan tepat 500 contoh; seluruh 500 contoh batch 3 tetap sama. Kalimat ditulis per entri untuk menggambarkan kegiatan, percakapan, pekerjaan, perjalanan, makanan, belanja, budaya, dan fungsi alat. Kolom kana memakai spasi bantuan; Jepang utama tidak memakai spasi tambahan. Seluruh 1.000 contoh memiliki kalimat Jepang yang berbeda.

Contoh yang dipratinjau kepada pengguna untuk 結婚式 diterapkan sesuai pratinjau: ともだちのけっこんしきにでました。 — Saya menghadiri upacara pernikahan teman.

Pemeriksaan terhadap batch 3 memastikan tepat 500 perubahan pada field example. Rebuild juga mengoreksi satu romaji kepala entri Perfume, dari pafuゅumu menjadi pafyuumu; hal ini mengikuti perbaikan pemetaan フュ dari batch 3. Identitas kartu, arti kata, kategori, urutan dan sumber tidak berubah. Ini bukan klaim seluruh arti kata dan klasifikasi sudah disertifikasi; masalah yang dicatat pada batch 3 masih menunggu perbaikan berbasis sumber.

Antrean bingkai berulang tersisa 1.237. Audit editorial seluruh N4, detail Kanji dan Bunpo belum selesai. Build penuh dari normalisasi menjaga record aktif; seluruh 37 berkas tes lulus. Installer menerima baseline awal dan semua batch sebelumnya yang disertakan dalam manifest.


## Batch 5 — total 1.500

500 contoh tambahan disusun per kata; 1.000 contoh sebelumnya dipertahankan. Pemeriksaan terhadap paket batch 4 membuktikan tepat 500 perubahan pada field example, tanpa perubahan field lain pada kartu. Semua 1.500 kalimat berbeda dan memiliki bacaan dengan pemisah, terjemahan, dan konversi romaji penuh.

Untuk kosakata fasilitas kesehatan, contoh berfokus pada pelaporan gejala, konfirmasi penjelasan dan pengalaman; tidak menetapkan dosis atau terapi. Contoh adalah tulisan orisinal, bukan kutipan dari sumber pengguna atau sertifikasi pengajar.

Antrean contoh berpola berulang tersisa 737. Ini belum menyelesaikan audit keseluruhan 3.227 kata N4: daftar masalah leksikal, nama orang yang terlewat, arti bercampur, dan contoh di luar bingkai berulang masih memerlukan peninjauan. Pemeriksaan Bunpo dan detail Kanji belum menjadi bagian batch ini.

Build penuh dari normalisasi teruji stabil dan seluruh 37 berkas tes lulus. Panduan pemasangan ada dalam BACA-DULU paket kumulatif batch 5.
