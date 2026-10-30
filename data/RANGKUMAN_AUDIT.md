# Audit Rangkuman Minna 1–50

27 Oktober 2026. Sumber: empat PDF pengguna; SHA-256 dan rujukan halaman
tersimpan pada rangkuman-audit.json dan data kanonis.

- Rangkuman Bunpo: 230 catatan sumber, 50 bab. Tambahan editorial: 50 fokus
  pembelajaran dengan contoh utama, bacaan, arti, penjelasan bagian dan tip.
- Kotoba: 2.910 baris; pemetaan judul berdasarkan posisi halaman, termasuk bab
  20/21 dan 25/26 yang berbagi halaman. Nomor urut tiap bab dipertahankan.
- 435 perubahan bidang Kotoba mencakup normalisasi tanda baca/lebar karakter,
  koreksi ejaan/bacaan/arti dan perbaikan kolom. 29 koreksi catatan Bunpo.
  Detail before/after ada pada audit JSON; bukan klaim 435 typo substantif.
- Tidak ada duplikat penulisan dalam bab. Pengulangan lintas bab sengaja
  dipertahankan agar daftar sesuai konteks belajar per bab.
- Buku I: 204 halaman. Buku II: 180 halaman. Seluruh halaman dirender sebagai
  WebP lebar 1600px untuk reader, tidak mengubah teks scan asli.
- Belum diperiksa pengajar eksternal. Rangkuman ini bantuan belajar, bukan
  daftar resmi lingkup JLPT/JFT atau jaminan ketuntasan ujian.
- Semua bab terbuka di kedua level. Akses Premium belum diterapkan;
  metadata hanya mencatat rencana Bab 11–50 Bunpo dan Kotoba.

Validasi: tests/rangkuman.test.cjs (kelengkapan/isi/search/pagination/aset)
dan tests/rangkuman-navigation.test.cjs (state/reload/Back/local save/level).


## Versi mudah — pembaruan 27 Oktober 2026

Catatan Bunpo lama telah diganti dengan PDF versi mudah pengguna (50 bab,
230 kelompok catatan). Struktur paragraf dan tabel dipertahankan, dengan istilah
lebih sederhana dan koreksi editorial pada 33 bagian. Hash sumber dan pasangan
before/after tersedia di rangkuman-simple-audit.json. Audit lama di atas menjadi
riwayat versi sebelumnya; Kotoba tetap identik, tidak diekstrak ulang.

Panel completion dihapus. Reader kini gulir vertikal dengan gambar lazy-load
berukuran stabil, zoom lokal dan posisi halaman terakhir. Semua bab terbuka.


## Pembaruan pedagogi kartu — 27 Oktober 2026

230 judul dilengkapi arti Indonesia; 12 contoh potongan ditulis eksplisit pada
Bab 1–2. Semua 50 cek diganti pertanyaan situasional dengan metadata nomor bab,
tiga pilihan dan penjelasan. Tiga fungsi の dijadikan daftar. Default contoh utama
kana, pilihan kanji lokal; pengantar satu kali dan ilustrasi tiga posisi di Bab 2.
Jumlah pola, kosakata dan halaman buku tetap. Tidak mengklaim pengayaan contoh
potongan pada seluruh 230 kartu atau review pengajar profesional.
