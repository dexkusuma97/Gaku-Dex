# Audit materi Kanji dasar

115 karakter: 103 dari Kanji N5 Dasar (103), 12 tambahan dari Kanji JFT 429.
Urutan karakter utama dipertahankan. Asal halaman/nomor tersedia dalam dataset.
Checksum file dan indeks JFT disimpan di kanji-provenance.json.

## Penyuntingan

- Arti 校 (sekolah) dan 社 (perusahaan/kuil Shinto) dilengkapi.
- Label On/Kun yang tertukar pada beberapa baris sumber dirapikan, termasuk 人 dan 見.
- Bacaan dipilih yang umum untuk pemula; bukan seluruh bacaan kamus.
- Arti Inggris, contoh kata, terjemahan, kategori, radikal, jumlah guratan,
  dan mnemonic dilengkapi secara editorial. Mnemonic bukan etimologi historis.
- Tambahan: 白 国 私 外 空 電 何 花 犬 家 好 英. Label tambahan dipertahankan.
- Tidak menganggap daftar ini daftar resmi JLPT: https://jlpt.jp/sp/e/faq/index.html

## Pemeriksaan terpilih

Bacaan/jumlah guratan diperiksa pada sumber utama Kanjipedia untuk:

- 来: https://www.kanjipedia.jp/kanji/0007020500
- 書: https://www.kanjipedia.jp/kanji/0003288700
- 半: https://www.kanjipedia.jp/kanji/0005726200
- 今: https://www.kanjipedia.jp/kanji/0002417400/
- 日, 校, 円: hasil pencarian halaman karakter Kanjipedia juga diperiksa.

Pemeriksaan ini berupa pemeriksaan terpilih, bukan audit kamus seluruh dataset.
Pemeriksaan otomatis mengecek kelengkapan/struktur, bukan menggantikan tinjauan pengajar.

## Regenerasi

Jalankan python3 scripts/build-kanji-data.py lalu node tests/kanji.test.cjs dan node tests/kanji-n4.test.cjs. Skrip sekarang juga membangun tambahan lanjutan; lihat KANJI_N4_AUDIT.md.
