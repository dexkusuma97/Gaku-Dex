# Audit Kotoba — 27 Oktober 2026

Data kanonis: `kotoba-n5.json`. Bundle statis dibangun dengan
`python scripts/build-kotoba-data.py`. Riwayat penggabungan dan pilihan lengkap
tersimpan di `kotoba-audit.json`, termasuk hash file dan rujukan halaman.

## Pilihan separuh PDF harian

PDF berjudul **1000 Kotoba Sehari-hari** berisi 806 baris tabel yang dapat
diekstrak. Baris gabungan dipisah, kata yang terpotong disatukan, penulisan
salah diperbaiki, dan ejaan berulang digabung. Hasilnya **822 entri unik**.
Dipilih **411 entri**, tepat separuh. Urutan prioritas: kosakata yang juga ada
dalam sumber N5/A1, lalu tema harian. Judul PDF tidak diperlakukan sebagai
jaminan ada tepat 1.000 kata unik. Kata yang tidak dipilih dari sumber ini
masih dapat hadir bila berasal dari PDF lain; atribusi sumber 0 tetap hanya
411 kartu.

## Sumber

| PDF | Kartu yang merujuk sumber |
| --- | ---: |
| 1000 Kotoba Sehari-hari | 411 |
| Kata Benda N5 | 349 |
| Kata Kerja Grup 123 | 135 |
| Kotoba Irodori A1 Buku Pink | 1114 |
| Kosakata N5 | 664 |
| Kata Sifat N5 by Protect | 67 |
| Kata Keterangan N5 | 50 |

Jumlah di atas tidak dijumlahkan karena satu kartu dapat memakai banyak
sumber. Total akhir **1.801 kartu**. Beberapa PDF juga berisi ungkapan atau
pola, sehingga jumlah ini bukan jumlah nomina saja atau daftar resmi JLPT.

## Kebijakan penyatuan

- NFKC, perbedaan lebar karakter dan tanda pemisah dinormalisasi.
- Kanji/kana yang merujuk kata dan makna yang sama disatukan sebagai alias.
- Bentuk kamus dan sopan kata kerja disatukan; partikel/objek pada frasa utuh
  tetap dapat membentuk kartu frasa berbeda.
- Ejaan angka Arab/kanji yang setara disatukan ketika konteksnya sama.
- Homofon berbeda dipertahankan: 雨/飴, 紙/髪, 要る/居る, 切る/着る,
  止まる/泊まる. 蕎麦 dan そば (dekat) memakai kartu berbeda.
- Label Pengayaan berlaku bila hanya bersumber dari pilihan PDF harian.
- Contoh ditambahkan sebagai materi pembelajaran; banyak nomina memakai
  templat sederhana. Contoh bukan kutipan verbatim seluruh PDF dan belum
  ditelaah secara individual oleh pengajar eksternal.

PDF pindai dicocokkan melalui gambar halaman. Tabel Irodori dibaca per sel,
dengan titik tengah karakter untuk menghindari huruf terpotong di batas kolom.
Perbaikan mencakup salah ketik penulisan, arti yang tertukar dan konjugasi.

Pemeriksaan otomatis memverifikasi ID dan penulisan unik, kuota tepat separuh,
kelengkapan bacaan/contoh, sumber, homofon, pencarian dan seluruh pagination.
Bila sumber perlu direvisi, edit JSON kanonis lalu bangun kembali bundle dan
jalankan `node tests/kotoba.test.cjs` serta tes navigasinya.


## Revisi pengelompokan (v2)

Enam kategori utama kini memiliki 51 subkategori terurut. Kelompok Lainnya
lama dipecah menjadi tema yang jelas; seluruh kata ditetapkan menurut
headword dan konteks sumber, tanpa pencocokan potongan kata pada arti.
Bentuk angka, tanggal, jam, nominal yen dan satuan dibagi menurut fungsi.
Sapaan, permintaan dan respons percakapan dikelompokkan tersendiri.

| Kategori | Kartu | Subkategori |
| --- | ---: | ---: |
| Kata benda | 960 | 22 |
| Kata kerja | 181 | 3 |
| Kata sifat | 166 | 2 |
| Kata keterangan | 55 | 5 |
| Angka & hitungan | 227 | 9 |
| Ungkapan & kata bantu | 212 | 10 |

Penulisan, bacaan, arti, contoh, ID, rujukan sumber, urutan dan pilihan 411
kosakata harian tetap sama. Revisi ini hanya memperbaiki klasifikasi.
Susunan lengkap disimpan pada `categories[].subcategories` dalam JSON kanonis.
Regresi tema dan jumlah filter diperiksa dalam `tests/kotoba-taxonomy.test.cjs`.
