# Pemeriksaan contoh Kotoba N5 — 31 Oktober 2026

Semua 1.791 kartu aktif dipindai strukturnya dan daftar Jepang/terjemahan ditinjau untuk menemukan contoh mekanis yang salah konteks. Sebanyak 427 contoh dipilih untuk koreksi atau penambahan konteks; bukan klaim semua nuansa 1.791 kartu sudah tersertifikasi. Seluruh 427 kalimat baru berbeda, memakai spasi bantuan pada bacaan, terjemahan Indonesia, dan helper romaji aplikasi. Kalimat Jepang utama memakai kana tanpa spasi bantuan, seperti batch editorial N4 sebelumnya.

| Kelompok pembenahan | Jumlah |
| --- | ---: |
| Bingkai “tas ini …”, termasuk ungkapan/nama fasilitas yang salah subjek | 118 |
| Kata kerja dengan pelaku, objek, tujuan atau situasi yang lebih jelas | 132 |
| Salah konteks, rujukan atau terjemahan lain | 149 |
| Tanggal kalender dan komponen jam | 12 |
| Nilai yen yang terpotong sebelum koma | 10 |
| Pertanyaan/ungkapan dan tanda baca ganda | 6 |
| Total contoh diganti | 427 |

## Contoh temuan

| Kata | Sebelum | Setelah |
| --- | --- | --- |
| 喫茶店 | Saya minum kafe. | きっさてんでコーヒーをのみます。 — Saya minum kopi di kafe. |
| 留学生 | Saya makan siswa internasional. | わたしはインドネシアからきたりゅうがくせいです。 — Saya pelajar dari Indonesia yang belajar di luar negeri. |
| 電気 | Orang ini listrik. | ねるまえにでんきをけします。 — Saya mematikan lampu sebelum tidur. |
| 夫 | Saya makan suami. | おっとはかいしゃではたらいています。 — Suami saya bekerja di perusahaan. |
| くれる | 私はくれます。 / Saya memberi. | あねがわたしにマフラーをくれました。 — Kakak perempuan saya memberi saya syal. |
| 五日 | Saya bertemu teman pada lima hari. | Saya bertemu teman pada tanggal lima. |
| 一月・ひとつき | Pertemuan pada satu bulan. | Pekerjaan ini memerlukan waktu satu bulan. |
| 1時間半 | Ini 1. | Dari sini ke bandara diperlukan waktu satu setengah jam. |
| 1,000円 | Ini 1. | Harga buku ini 1.000 yen. |
| はい | Tas ini bagus. | はい、わたしがたなかです。 — Ya, saya Tanaka. |

Lima arti kepala entri diperjelas: 半分 → setengah/separuh; 差す ditambahkan pemakaian payung agar selaras dengan contoh; 15分, 30分 dan 45分 diberi arti jumlah menit serta penggunaannya sebagai komponen jam. Tidak mengganti bacaanひとつき menjadiいちがつ: satu bulan dan Januari dibedakan. 一日 memakaiいちにち dalam konteks satu hari, bukan tanggal pertama.

## Rujukan

- Japan Foundation, Irodori 入門: https://www.irodori.jpf.go.jp/assets/data/wordlist_X.pdf — istilah kehidupan sehari-hari dan konteks bagian kebutuhan rumah tangga untuk 暮らし.
- Japan Foundation, Marugoto Starter Indonesia: https://marugoto.jpf.go.jp/assets/docs/download/starter_a/MarugotoStarterWordbook_ID.pdf — bacaan tanggal dan bulan.
- Japan Foundation, くれます: https://www.kyozai.jpf.go.jp/kyozai/material/BMA00083/ja/render.do — pemberi bukan penutur dalam pemakaian biasa, penerima penutur atau pihaknya.
- Shogakukan, Digital Daijisen melalui Kotobank: https://kotobank.jp/word/半分-607292 — setengah/separuh; https://kotobank.jp/word/差す-510683 — termasuk pemakaian payung.

Contoh baru ditulis orisinal. Rujukan dipakai untuk memeriksa titik bahasa tertentu, bukan mengklaim penerbit meninjau semua kalimat atau semua kalimat berada dalam silabus ujian N5 resmi.

## Yang masih perlu dilanjutkan

Antrean mekanis tersisa 620: 592 bingkai identifikasi “Ini …” dan 28 bingkai waktu + belajar. Bingkai sederhana tidak otomatis salah; antrean membantu memprioritaskan penggantian dengan situasi yang lebih berguna. Ada 744 kartu lainnya di luar 427 koreksi dan antrean tersebut, termasuk contoh lama yang sudah lebih kontekstual dan ungkapan pendek yang wajar. Jangan mengartikan angka 620 sebagai jumlah semua kesalahan tersisa.

Laporan JSON juga mencatat 40 kalimat yang digunakan oleh lebih dari satu kartu, termasuk kata/ungkapan yang bertumpang tindih. Duplikasi kalimat bukan duplikasi kartu atau bukti kalimat salah. Arti majemuk seperti マッチ, 方, 一日 dan 一月 tetap dicatat untuk audit leksikal berikutnya; paket ini tidak menggabungkan/menghapusnya.

## Verifikasi dan pemeliharaan

- Seluruh 1.791 kartu memiliki field contoh lengkap; pemindaian kanji pada bacaan dan pola tanda baca/terjemahan terpotong yang ditentukan tidak lagi menghasilkan flag. Ini tidak menggantikan penilaian bahasa per kalimat.
- Semua 427 contoh baru sesuai dengan data editorial tersimpan; konversi romaji teruji tanpa kana tersisa. Spasi kana disimpan secara manual, bukan letter-spacing CSS.
- ID, urutan, bacaan kata utama, kategori, sumber, favorit, dan jumlah kartu dipertahankan. Perbandingan hanya menemukan 427 field contoh dan lima field arti berubah pada kartu N5. Semua data N4 dan desain kartu batch 9 identik.
- Koreksi diterapkan sesudah cleanup dalam build-kotoba-data.py agar bertahan saat rebuild. Dua build penuh dari normalisasi menghasilkan data/bundle identik.
- Semua 40 berkas tes lulus. Installer kumulatif diuji dari baseline awal dan batch 9; membuat backup dan menolak konflik. Tidak melakukan push atau deployment otomatis. Belum menguji perangkat Android fisik untuk batch ini.
