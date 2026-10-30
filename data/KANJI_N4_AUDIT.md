# Audit Kanji lanjutan — 30 Oktober 2026

## Cakupan berkas pengguna

| Berkas | Isi sebenarnya | Halaman | Baris bernomor |
|---|---|---:|---:|
| kanji marugoto1.pdf | Marugoto A1 dan A2-1 | 3 | 221 |
| kanji marugoto2.pdf | Marugoto A1, A2-1 dan A2-2 | 5 | 391 |
| Kanji JFTA2 Lengkap.pdf | Marugoto A1 sampai A2/B1 | 5 | 494 |

Jumlah 1.106 baris, 496 pasangan penulisan/bacaan persis unik, dan 610 baris yang berulang lintas dokumen. Angka 496 mempertahankan dua perbedaan penulisan sumber; ini bukan jumlah karakter atau jumlah kata baru. Seluruh rentang nomor diperiksa, tanpa baris hilang. Teks dua kolom diambil per tabel agar kata dan bacaannya tidak tercampur.

Daftar itu berisi **kata berkanji**, bukan daftar karakter tunggal. Karakter diambil hanya dari kepala entri, bukan dari contoh angka dalam tanda kurung. Ditemukan 397 karakter berbeda: 110 sudah ada di N5, sehingga tersisa **287 tambahan**. Lima kanji N5 yang tidak ada dalam ketiga sumber tetap dipertahankan: 田・馬・貝・門・犬. Hasil keseluruhan: **115 N5 + 287 tambahan**, tanpa karakter ganda.

## Pembagian pembelajaran

- 217 karakter tambahan muncul dalam Marugoto A2-1/A2-2: kelompok lanjutan A2.
- 70 karakter hanya muncul dalam tambahan A2/B1: pengayaan, dipisahkan dengan filter cakupan.
- Saat pengguna memilih N4, halaman Kanji membuka kelompok A2 terlebih dahulu.
- Kuis Kanji N4 menggunakan 217 karakter A2; pengayaan A2/B1 tidak otomatis masuk bank kuis.
- Ini pembagian belajar aplikasi berdasarkan sumber. **A2/A2-B1 tidak sama dengan daftar resmi JLPT N4**. Tidak ada klaim semua tambahan pasti keluar di N4.

## Penyuntingan

Arti karakter dan bacaan on/kun pilihan disunting sebagai materi pembelajaran; bukan salinan seluruh entri kamus. Contoh kata dan bacaan gabungan dilacak ke sumber, nomor entri, dan halaman. Terjemahan contoh ditinjau dan diringkas; pengulangan bagian arti dengan pemisah garis miring, koma atau titik koma dibuang. Misalnya arti bertumpuk untuk 道具, 無料, 電気製品, 受付 dan 機能 dirapikan. Kata dengan arti berbeda tetap dipertahankan.

Setiap tambahan memiliki setidaknya satu contoh kata sumber yang memuat karakter terkait. Contoh yang hanya berbeda sumber tidak digandakan. Nama orang tidak ditambahkan sebagai kartu; contoh nama keluarga 田中 pada kanji N5 田 diganti dengan 水田（すいでん）.

Kelompok tema: angka & hitungan; alam & cuaca; orang & keluarga; tubuh & kesehatan; letak & arah; waktu & urutan; belajar & bahasa; tempat & kendaraan; ukuran & sifat; kegiatan sehari-hari; makanan & minuman; pekerjaan & layanan; budaya & hiburan; pakaian; aturan & masyarakat.

PDF tidak memberikan jumlah guratan, radikal, atau jembatan ingatan untuk karakter tambahan. Nilai itu **tidak ditebak**, dan blok yang belum memiliki data tidak ditampilkan. Detail N5 yang sudah ada dipertahankan. Tes struktur tidak menggantikan penilaian pedagogis oleh pengajar.

## Berkas pemeliharaan

- `data/kanji-sources/`: hasil ekstraksi, nomor halaman, bacaan, dan checksum tiga sumber.
- `data/kanji-additions.tsv`: arti dan bacaan pilihan karakter tambahan.
- `data/kanji-category-additions.json`: pemetaan kategori, satu karakter hanya satu kategori.
- `data/kanji-word-overrides.json`: terjemahan contoh yang ditinjau.
- `data/kanji-n4.json`: hasil kompilasi untuk audit.
- `data/kanji-audit.json`: angka cakupan dan daftar pengayaan.

Regenerasi tanpa internet:

```sh
python3 scripts/build-kanji-data.py
node tests/kanji.test.cjs
node tests/kanji-n4.test.cjs
```

Untuk mengulang ekstraksi PDF (opsional, memerlukan `pdfplumber` dan tiga PDF asli):

```sh
python3 scripts/audit-kanji-pdfs.py /lokasi/pdf
```

Referensi penerbit untuk identitas materi: https://marugoto.jpf.go.jp/en/download/pre_intermediate/
