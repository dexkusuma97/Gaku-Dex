# Pemeriksaan Kanji N5 — 1 November 2026

Seluruh 115 kartu Kanji N5 sudah memiliki bagian utama sejak awal. Batch ini memverifikasi dan merapikan data tersebut, bukan menyatakan semua isinya sebelumnya salah. Arti Indonesia, urutan, ID, kategori, sumber dan 230 contoh kata dipertahankan. Standar detail sama dengan N4: arti Indonesia/Inggris, bacaan, radikal, guratan, bantuan ingatan visual serta 1–2 contoh.

## Hasil

- 115 jumlah guratan lama cocok dengan hitungan utama KANJIDIC2; tidak ada hitungan yang dikarang.
- Radikal 母 distandarkan ke radikal klasik 毋; tampilan memperlihatkan keluarga 毋 / 母. Ini penyeragaman konvensi, bukan menganggap bentuk 母 tidak berkaitan dengan radikalnya.
- Seluruh kelompok ja_on/ja_kun di snapshot ditambahkan, dengan bacaan dasar lama ditempatkan dahulu. Bacaan nama (nanori) tidak dimasukkan. Empat kelompok kun kosong: 駅, 校, 週, 電. Tidak ada kelompok on kosong.
- Tiga bacaan lama yang sah dipertahankan dengan rujukan pelengkap: 中 ジュウ; bentuk kata 休み やすみ dari 休む; 好き すき dari 好く. Bentuk kata tersebut dicatat sebagai bentuk turunan, bukan disamarkan sebagai entri kun dasar di KANJIDIC2.
- Arti Inggris 百, 千 dan 好 diperhalus menjadi one hundred, one thousand, dan like/fond of.
- Mnemonic 駅 diganti menjadi asosiasi visual perjalanan dengan kuda, agar tidak terbaca sebagai klaim sejarah pembentukan kanji. Mnemonic lainnya yang memadai tetap.
- Dua contoh kata per kartu, total 230, tetap identik dengan sumber TSV. Contoh di luar kosakata paling dasar tidak dianggap otomatis wajib untuk ujian N5.

Bacaan tambahan dilipat setelah tiga item per kolom, sama seperti N4. Sebagian bacaan kamus bersifat jarang atau terikat; penjelasan tanda titik/okurigana, tanda hubung, dan konsonan rangkap disediakan. Kelengkapan kamus bukan instruksi menghafal semua bacaan sekaligus.

## Rujukan dan reproduksi

KANJIDIC2 resmi EDRDG: https://www.edrdg.org/kanjidic/kanjidic2.xml.gz ; dokumentasi: https://www.edrdg.org/wiki/KANJIDIC_Project.html ; lisensi: https://www.edrdg.org/edrdg/licence.html . Arsip yang diterima berheader versi 2026-304, dibuat 31 Oktober 2026; diambil untuk pemeriksaan ini pada 1 November 2026 waktu Jakarta. Versi dicatat sesuai header, bukan diasumsikan sebagai tanggal unduhan. Hash arsip tersimpan dalam snapshot N5.

Rujukan pelengkap: https://www.kanjipedia.jp/kanji/0004721700 ; https://www.kanjipedia.jp/kanji/0001375100 ; https://www.kanjipedia.jp/kanji/0002163400 ; https://kotobank.jp/word/休み-648363 ; https://kotobank.jp/word/好き-540943 . Tidak menyalin uraian sejarah sumber ke mnemonic.

Data referensi: data/kanji-n5-reference.json. Pilihan editorial dan pengecualian bersumber: data/kanji-n5-editorial.json. Hasil akhir: data/kanji-n5.json. Audit: data/kanji-n5-completeness-review.json. Build menerapkan scripts/lib/kanji_n5_review.py setelah membaca TSV; build normal tetap offline.

Pembaruan manual memakai scripts/refresh-kanji-n5-reference.py. Gunakan --archive untuk arsip lokal dan --retrieved-date bila mereproduksi tanggal snapshot yang disimpan. Tinjau perubahan sebelum rebuild/publikasi. Kredit data N5/N4 tersedia melalui Pengaturan. Data turunan KANJIDIC2 dilengkapi atribusi CC BY-SA 4.0.

## Pengujian

Semua 42 berkas tes lulus. Pengujian mencakup seluruh 115 kartu, fakta kamus, tiga bacaan pelengkap, kelompok kosong, 230 contoh, romaji dan render detail. Kedua pintu build Kanji menghasilkan data/bundle identik dalam fixture terpisah; ekstraksi ulang arsip dengan tanggal yang disimpan menghasilkan snapshot identik.

Data 287 Kanji N4, 1.047 contoh editorial Kotoba N5 dan 2.225 contoh editorial Kotoba N4 dipertahankan. Tidak ada penghapusan kartu/favorit atau perubahan kategori. Installer kumulatif diuji dari ZIP awal dan batch 12; backup/conflict gate dan pemulihan saat gagal tetap tersedia. Tidak push/deploy otomatis; belum uji visual pada Android fisik.
