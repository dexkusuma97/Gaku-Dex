# Kelengkapan detail Kanji N4 — 31 Oktober 2026

Seluruh 287 kartu dalam bagian N4 sudah dilengkapi mengikuti struktur detail N5: arti Indonesia dan Inggris, bacaan, radikal, jumlah guratan, jembatan ingatan, serta satu atau dua contoh kata dengan kana/romaji dan arti. Pembagian yang sudah ada tetap 217 karakter lanjutan A2 dan 70 karakter pengayaan A2/B1. Ini bukan klaim daftar resmi kanji ujian N4.

## Temuan awal dan hasil

| Bagian | Sebelum | Setelah |
| --- | ---: | ---: |
| Arti Inggris | 287 kosong | 287 terisi |
| Radikal | 287 kosong | 287 bersumber kamus |
| Jumlah guratan | 287 kosong | 287 bersumber kamus |
| Jembatan ingatan | 287 kosong | 287 bantuan visual orisinal |
| Contoh per kartu | 1–3 | 1–2 |
| Jumlah contoh ditampilkan | — | 372 |
| Kun’yomi tanpa entri dalam rujukan | — | 39, tetap kosong |

Sumber kamus adalah arsip KANJIDIC2 resmi EDRDG, versi 2026-304 yang dibuat dan diambil 31 Oktober 2026. Hash arsip tersimpan dalam data/kanji-n4-reference.json. Radikal memakai nomor klasik Kangxi dan guratan memakai hitungan utama, bukan alternatif salah hitung. Bentuk radikal yang berbeda ditampilkan sebagai varian, misalnya 水 / 氵 dan 心 / 忄.

Bacaan memakai kelompok ja_on dan ja_kun; bacaan nama khusus (nanori) tidak dimasukkan. Bacaan yang sebelumnya akrab ditempatkan lebih dahulu setelah diverifikasi; perbedaan anotasi awalan seperti あい- tetap diperlihatkan. Bacaan lain dilipat setelah tiga item per kolom pada N4 agar tampilan awal tidak terlalu panjang. Sebagian bacaan kamus tambahan jarang dipakai, sehingga bukan daftar semua bacaan yang wajib dihafal untuk N4. Tidak menambah bacaan buatan untuk mengisi kolom kosong.

Romaji juga menangani ヂュウ. Bacaan berakhiran ッ diberi keterangan “konsonan rangkap” karena pelafalan lengkap bergantung pada penggabungan kata; bukan dihilangkan diam-diam. Tanda ・ menunjukkan batas okurigana, sedangkan - menunjukkan bentuk terikat.

## Contoh: 海

- Arti Indonesia: laut.
- Arti Inggris: sea; ocean.
- On’yomi: カイ — kai.
- Kun’yomi: うみ — umi.
- Radikal: 水, dengan bentuk 氵 saat menjadi komponen samping.
- Guratan: 9.
- Jembatan ingatan: air di kiri menjadi ombak yang datang setiap hari ke tepi laut.
- Contoh: 海 / うみ / umi / laut; 海外 / かいがい / kaigai / luar negeri.

Jembatan ingatan merupakan bantuan visual orisinal, bukan penjelasan asal-usul historis atau analisis pembentukan kanji.

## Contoh kata dan pelacakan sumber

Contoh yang sudah valid tetap diambil dari baris materi pengguna. Pola akhiran/awalan dibuat lebih konkret bila diperlukan: 〜回 → 一回, 〜番目 → 一番目, 〜点 → 一点, 〜対〜 → 一対一, 〜式 → 結婚式, 〜市 → 京都市, dan 〜階 → 一階. Tanda pola pada 以上, 以下, 約, 航空 dan 世紀 dibuang dari tampilan contoh kata. Arti 方 dengan bacaanほう diperjelas sebagai arah/pihak.

Ada 14 pemakaian contoh yang diadaptasi atau diperbaiki, dicatat melalui adaptedFrom dan ledger editorial. Nomor baris dan halaman tetap menunjuk pola sumber asal, bukan klaim bahwa contoh hasil adaptasi tertulis persis dalam materi. Tambahan/contoh dipertahankan hanya bila mengandung karakter kartu tersebut. Satu contoh sudah dianggap lengkap sesuai permintaan pengguna.

Rujukan pembacaan kata tambahan juga meliputi kamus Cambridge untuk 一対一 dan kamus penerbit melalui Kotobank untuk 結婚式. Kalimat mnemonic dan arti belajar bukan klaim terjemahan resmi penerbit.

## Berkas pemeliharaan

- data/kanji-n4-reference.json: snapshot terbatas dari KANJIDIC2, nomor radikal, guratan utama, kelompok bacaan dan makna rujukan, versi serta hash.
- data/kanji-n4-editorial.json: arti Inggris terpilih, 287 jembatan ingatan dan koreksi contoh.
- data/kanji-n4-completeness-review.json: hasil kelengkapan seluruh 287 karakter serta adaptasi contoh yang diterapkan.
- scripts/lib/kanji_n4_review.py: lapisan validasi dan pelengkapan setelah kompilasi baris sumber.
- scripts/refresh-kanji-n4-reference.py: prosedur pembaruan rujukan yang harus ditinjau sebelum dibangun ulang. Build dan installer biasa tetap offline.
- data/KANJIDIC2-LICENSE-NOTICE.md dan halaman kredit dari Pengaturan: atribusi dan tautan lisensi CC BY-SA 4.0 untuk data rujukan/adaptasi terkait. Tidak mengubah lisensi perangkat lunak yang tidak terkait.

Dokumentasi resmi: https://www.edrdg.org/wiki/KANJIDIC_Project.html ; sumber: https://www.edrdg.org/kanjidic/kanjidic2.xml.gz ; lisensi: https://www.edrdg.org/edrdg/licence.html . Data kamus tidak menyiratkan pengesahan aplikasi oleh EDRDG.

## Verifikasi dan batas pengujian

Semua 41 berkas tes lulus. Tes baru memeriksa seluruh 287 karakter terhadap snapshot, grup bacaan kosong, pelipatan bacaan, kana/romaji, ketertelusuran contoh dan render seluruh detail. Kedua jalur build Kanji menghasilkan data/bundle yang identik dalam fixture terpisah; ekstraksi ulang arsip juga menghasilkan snapshot sama.

Data 115 Kanji N5 identik byte demi byte pada bagian bundle N5. ID, kategori, urutan, arti kepala entri dan cakupan sumber 287 karakter tetap. Data Kotoba/Bunpo tidak berubah; helper romanisasi bersama mendapat tambahan pasangan kana untuk ヂュウ. Semua 1.047 contoh N5 dan 2.225 contoh N4 Kotoba dipertahankan.

Installer kumulatif diuji pada salinan ZIP awal dan batch 11. Pemasang membuat cadangan, memeriksa konflik, menguji hasil dan memulihkan file bila tes gagal. Tidak melakukan push/deployment otomatis. Belum uji tampilan pada browser/perangkat Android fisik untuk batch ini; pengujian render HTML tidak menyatakan pemeriksaan visual piksel.
