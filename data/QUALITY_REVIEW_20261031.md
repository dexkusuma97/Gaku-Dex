# Audit kualitas 31 Oktober 2026

Status terkini: batch 7, total 2.200 contoh kontekstual; 37 entri masih menunggu perbaikan leksikal. Catatan di bawah menyimpan riwayat setiap batch.

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


## Batch 6 — total 2.000

Tambahan 500 contoh meliputi layanan umum, transaksi, pengiriman, lingkungan, transportasi, berita bencana, kegiatan latihan, pekerjaan, dan ungkapan sehari-hari. 1.500 contoh terdahulu tetap identik. Seluruh 2.000 kalimat unik, dengan bacaan berjarak dan romanisasi tanpa kana tersisa. Contoh orisinal ini bukan sertifikasi semua arti atau klaim kutipan sumber.

Perbandingan terhadap batch 5 menunjukkan tepat 500 field example berubah, tanpa perubahan ID, kepala entri, arti kata, kategori, urutan, atau sumber. Jumlah N4 tetap 3.227, N5 1.791. Build penuh teruji stabil; seluruh 37 berkas tes lulus.

Antrean bingkai berulang tersisa 237. Audit makna ambigu, bacaan bermasalah, nama orang yang terlewat, serta contoh di luar antrean belum selesai. Panduan pemasangan ada dalam BACA-DULU paket kumulatif batch 6.


## Batch 7 — total 2.200, antrean tersisa 37

200 contoh tambahan dipasang, sementara 2.000 contoh lama dipertahankan. Sebagian besar tambahan kali ini kata kerja dengan konteks yang memperjelas objek, pelaku, dan hasil tindakan. Jepang utama tetap tanpa spasi bantuan; kolom bacaan memakai pemisah. Seluruh contoh editorial sekarang memiliki 2.200 kalimat berbeda.

旅券 berarti paspor, bukan tiket transportasi. Verifikasi istilah memakai halaman resmi Kedutaan Jepang di Indonesia: https://www.id.emb-japan.go.jp/itpr_ja/visaj_01.html ; halaman Kementerian Luar Negeri Jepang: https://www.mofa.go.jp/mofaj/toko/passport/page22_004056.html . Hanya arti kata yang diambil sebagai dasar; tidak menyusun nasihat atau aturan pengurusan paspor.

Perbandingan batch 6: 200 field example dan satu field meaning 旅券 berubah. ID dan semua field kartu lain tetap. Arti paspor terpasang melalui layer cleanup yang bertahan saat build ulang.

37 entri yang tersisa dicatat lengkap di lexical-review-pending. Kartu itu masih aktif, belum dihapus/merge dan masih berada dalam antrean bingkai berulang. Ini sengaja tidak ditutupi dengan contoh baru yang dapat mengesankan kata utamanya sudah benar. Tahap berikutnya memerlukan normalisasi kepala entri, penanganan arti berbeda, penghapusan nama yang sesuai kebijakan, dan redirect ID favorit. Audit Kotoba belum selesai.

Seluruh 37 berkas tes lulus; build penuh stabil dan menghasilkan record aktif yang sama. Paket kumulatif batch 7 mencakup koreksi terdahulu.


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
