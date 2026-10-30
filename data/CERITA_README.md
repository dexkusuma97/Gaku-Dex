# Buku / Cerita — DeX Gaku

29 Oktober 2026. Menu **Cerita** pada beranda membuka **Buku** di aplikasi yang sama.

## Isi awal

- **N5: Payung Biru** (`kasa`), satu bab, sembilan kalimat, tiga soal. Isi data dipertahankan persis dari `cerita-untuk-codex-v2.zip`.
- **Dongeng: Issun Bōshi** (`issun`), satu bab, dua belas kalimat dalam empat halaman bergambar, tiga soal. Contoh awal yang kemudian dilanjutkan dengan tiga dongeng berikutnya.

Rak horizontal → Lihat semua → daftar vertikal → detail → bab → membaca → kuis → hasil. Setiap kalimat memiliki Terjemahkan, Jelaskan, dan audio. Toolbar mengatur furigana, warna level, ukuran huruf, Putar semua, dan bab. Desktop memakai dua sisi buku; layar sempit menempatkan ilustrasi di atas teks. Pilihan tidak memakai animasi blink.

Hasil kuis tersimpan sekali per percobaan di Riwayat lokal. Tombol kembali mengikuti asal rak/daftar, detail dan pembaca. Membuka ulang halaman browser mengembalikan menu Buku ke rak awal. Font UI memakai DM Sans dengan Noto Sans JP untuk teks Jepang, tanpa font pixel. Penanda level memakai N1 merah, N2 jingga, N3 kuning, N4 hijau dan N5 biru; pemetaan yang sama berlaku pada garis bawah, legenda dan diagram persentase, termasuk mode gelap. Warna dan persentase berasal dari token yang ditandai manual; bukan sertifikasi daftar kosakata resmi JLPT. Partikel, tanda baca dan istilah budaya tanpa label level bernilai 0 dan tidak masuk persentase.

## Referensi dan materi

- [Shinobi Japanese](https://www.shinobi-japanese.com/id/japanese-stories): referensi alur bacaan bertingkat, furigana dan bantuan arti; teks/gambar situs tidak disalin.
- [Runruneando](https://runruneando.com/id-id/cerita-dari/jepang?orden=recientes): referensi pengalaman membaca dongeng berilustrasi. Contoh halaman yang diperiksa: [Omusubi yang Menggelinding](https://runruneando.com/id-id/cerita/omusubi-yang-menggelinding).
- Empat PDF unggahan diperiksa sebagai referensi judul/alur. PDF memuat terjemahan modern JITCO dan tidak menyatakan izin penggunaan ulang yang jelas, sehingga PDF, teks terjemahan dan gambarnya tidak dimasukkan ke distribusi aplikasi.
- Issun Bōshi ditulis ulang dengan kalimat Jepang sederhana dan terjemahan Indonesia baru dari alur dongeng tradisional. [Sumber klasik Otogi-zōshi sekitar 1725](https://commons.wikimedia.org/wiki/File:Tale_of_Issun_B%C5%8Dshi_from_Otogi-z%C5%8Dshi.jpg) tercatat sebagai domain publik. Adaptasi ringkas ini menghilangkan adegan kekerasan terperinci.

## Gambar

Enam ilustrasi raster asli dibuat melalui built-in ImageGen. Prompt dan mode tersimpan di `data/CERITA_IMAGE_PROMPTS.json`; aset final ada di `dist/assets/cerita/`. Tidak menggunakan SVG untuk sampul maupun ilustrasi cerita.

- Dua sampul WebP 600 × 900, masing-masing di bawah 120 KiB, tanpa judul yang tertanam dalam gambar; judul Jepang vertikal ditampilkan dengan HTML.
- Empat ilustrasi isi WebP 960 × 640, masing-masing di bawah 160 KiB. Total keenam aset sekitar 751 KiB.

## Audio

21 MP3 unggahan pengguna sudah dipasang: sembilan untuk Payung Biru dan dua belas untuk Issun Bōshi. Pemutar mendahulukan MP3; hanya respons HEAD 404/410 yang mengaktifkan `speechSynthesis` bahasa Jepang dari perangkat. Gangguan jaringan, penolakan autoplay, timeout atau audio rusak meminta pengguna mencoba lagi tanpa beralih ke TTS. Kualitas/ketersediaan suara bergantung perangkat. Hanya satu audio aktif; keluar dari buku membatalkan audio dan antrean.

Jalankan dari root proyek:

```bash
bash scripts/generate-cerita-audio.sh --dry-run all
export ELEVENLABS_API_KEY='isi_di_terminal_pribadi'
bash scripts/generate-cerita-audio.sh all
```

Skrip memuat kedua file data, melewati MP3 yang sudah tersedia dan melaporkan GAGAL beserta HTTP code. API key hanya dari lingkungan terminal, tidak masuk frontend. Tahap pertama memerlukan 21 MP3: `kasa-1.mp3`–`kasa-9.mp3` dan `issun-1.mp3`–`issun-12.mp3`. Nomor audio berlanjut antar bab, bukan diulang dari 1 pada bab berikutnya.

## Menambah buku

1. Tambahkan objek ke `GAKU_CERITA_DATA` melalui file data yang dimuat setelah `cerita-data.js`. Gunakan ID unik, rak, judul, judul Jepang, deskripsi, sampul, level, sumber dan array `bab`.
2. Rak baru cukup ditambahkan ke `GAKU_CERITA_SHELVES`, misalnya `n4:{nama:'N4',sub:'Cerita untuk langkah berikutnya'}`; renderer tidak membatasi dua rak awal.
3. Tiap bab berisi `no`, `judul`, `kalimat`, dan tiga `kuis`. Kalimat memakai `t:[[teks,furigana,level],...]`, `id` untuk arti Indonesia dan `jelas:[{pola,arti,catatan}]` sebanyak 1–3 poin. Beri furigana hiragana secara manual pada token kanji. `tts` opsional dapat memberi naskah audio khusus.
4. Tiap soal memiliki `q`, empat `opsi` unik dan `benar` (indeks 0–3). Jangan mengacak data sumber; renderer mengacak pilihan dan mempertahankan kuncinya.
5. Buku bergambar menambahkan `tipe:'bergambar'` dan `bab.halaman:[{dari:0,sampai:3,gambar:'assets/cerita/…webp',alt:'…'},...]`. Rentang memakai indeks kalimat berbasis nol, `sampai` eksklusif; seluruh rentang harus berurutan dan mencakup kalimat bab. Gambar harus sesuai adegan dan tidak mengandung jawaban kuis berbentuk teks.
6. Pakai WebP/PNG/JPG ringan, sampul rasio 2:3 dan judul HTML; jangan menambah SVG. Simpan prompt bila membuat ilustrasi baru. Periksa izin sebelum mengadaptasi materi modern.
7. Jalankan generator audio setelah data final. Berkas per kalimat memakai ID buku dan nomor global. Jangan menaruh key di JS atau Git.

## Validasi

```bash
node tests/cerita.test.cjs
node tests/cerita-navigation.test.cjs
```

Tes mencakup data, aset, bantuan membaca, persentase token, pengacakan kuis, penyimpanan tunggal, kegagalan penyimpanan, audio cadangan/antrean/pembatalan, penomoran lintas bab, serta Back/reload/tab. Regresi Kaiwa dan navigasi utama juga lulus. Browser Chromium diperiksa sampai halaman keempat, kuis 3/3 dan satu entri Riwayat. Android fisik dan pelafalan seluruh MP3 belum diperiksa. Metadata 21 MP3 valid melalui ffprobe.

## Perluasan koleksi — 29 Oktober 2026

Sekarang ada delapan buku, 93 kalimat, dan 24 soal kuis. Tambahan dalam cerita-tambahan.js: Bekal untuk Ibu, Anak Kucing di Taman, Janji di Perpustakaan (cerpen orisinal); Tudung Pendengar Ajaib, Sumo Dua Tikus, Kakek Pemekar Bunga (adaptasi baru dongeng dari alur PDF pengguna). Enam tambahan masing-masing 12 kalimat dan tiga soal. Ketiga dongeng masing-masing tiga halaman, empat kalimat per halaman. Hanasaka diringkas dan kekerasan tidak digambarkan secara terperinci; judul Sumo memakai sabuk mawashi sebagai penyederhanaan kostum.

Semua kanji memiliki furigana; level kata adalah panduan manual, bukan daftar resmi JLPT. Gambar tambahan dibuat melalui built-in ImageGen: sembilan halaman dan tiga sampul cerpen. Tiga sampul dongeng menggunakan crop portrait dari ilustrasi baru. Aset final di dist/assets/cerita/, tanpa SVG. Prompt dan asal crop ada di data/CERITA_IMAGE_PROMPTS.json. Sampul maksimal 120 KiB, ilustrasi maksimal 160 KiB.

21 MP3 lama tetap tersedia. 72 MP3 tambahan sudah dipasang dari unggahan pengguna, sehingga seluruh 93 kalimat pada delapan buku memiliki MP3. Generator Termux dan panduan terdapat dalam data/CERITA_TERMUX_LANJUTAN.md, paket unduhan dist/downloads/dex-gaku-cerita-lanjutan-termux.zip. Voice default generator diperbarui sesuai ID pilihan pengguna terakhir; key hanya dari lingkungan terminal.


## Kisah Bersambung — 29 Oktober 2026

Kini sembilan buku, dengan tambahan Nee Nee, Nene-san (enam bagian/90 blok/18 kuis opsional), di rak Kisah Bersambung setelah Dongeng. Nama tampilan rak n5 menjadi Cerpen; ID dan isi delapan buku lama tidak berubah. `cerita-bersambung.js` dimuat setelah `cerita-tambahan.js`. Rincian adaptasi, kredit, pemeriksaan dan keterbatasan visual: `data/NENE_ADAPTATION.md`. Audio nene-1–90 belum dibuat; generator memakai voice narator Cerita yang sudah dipilih pengguna.

## Pembaruan rak per judul — 29 Oktober 2026

Versi terbaru: sepuluh buku. Konsep rak umum Kisah Bersambung diganti rak judul: Cerpen → Dongeng → Nee Nee, Nene-san → Nitamono. Tiap judul panjang memiliki enam kartu bagian sendiri. Nene: 90 blok; Nitamono: 78 blok, 18 kuis opsional. `cerita-nitamono.js` dimuat setelah `cerita-bersambung.js` (nama file lama tetap internal). Rincian: `data/NITAMONO_ADAPTATION.md`. Audio dua judul ini belum dibuat; 93 MP3 cerita lama tetap terpasang.


## I Sold My Life
7 bagian / 100 blok / 21 pertanyaan opsional. Rak tersendiri sesudah Nitamono. Lihat ISOLD_ADAPTATION.md dan isold-audio-manifest.json. Audio MP3 menyusul.


## Pembaruan audio 30 Oktober 2026
Rekaman untuk Nene (90), Nitamono (78), I Sold My Life (100) sudah dipasang dari ZIP pengguna. Total 361 MP3 sesuai semua blok cerita. Catatan audio menyusul pada dokumen adaptasi sebelumnya adalah riwayat; status terkini sudah lengkap. Voice ID yang dipilih pengguna: nMLAJvHm96aMWubKsf0q. Tidak ada perubahan pemutar atau aset WebP.
