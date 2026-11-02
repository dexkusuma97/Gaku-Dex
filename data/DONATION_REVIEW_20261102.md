# Sawer / Donasi — 2 November 2026

- Gambar `24732.png` dari pengguna disalin byte-identik ke `dist/assets/donation/donasi-shiba.png`. QR tidak dibuat ulang, dipotong atau diubah.
- Startup satu kali per pemuatan dokumen, setelah gambar siap. Reload atau pembukaan dokumen baru menampilkan lagi; perpindahan menu tidak menampilkan lagi. Tidak memakai localStorage/sessionStorage untuk menyembunyikan popup.
- Dialog modal HTML, backdrop gelap, gambar utuh, × 44px di kanan atas. Ukuran mengikuti lebar dan tinggi viewport, termasuk layar mendatar. Background tidak dapat dioperasikan saat modal terbuka.
- Klik ×, ketuk di luar panel, Escape atau cancel dialog menutup dengan transisi keluar 200ms. Transisi masuk 300ms. Ketukan gambar tidak menutup; drag dari gambar ke backdrop tidak menutup. Membuka kembali saat transisi keluar membatalkan penutupan.
- Scroll dikunci sementara; nilai overflow dan fokus sebelumnya dipulihkan. Preferensi animasi aplikasi dan reduced-motion sistem dihormati. Dialog berdiri sendiri dari dialog hapus/pilihan/ujian.
- Jika gambar gagal dimuat saat startup, popup kosong tidak dibuka. Pembukaan manual menampilkan pesan kegagalan dan tombol tutup tetap tersedia.
- Menu Pengaturan > Sawer menampilkan gambar, tombol Lihat QR donasi, dan tautan Simpan gambar QR untuk pemindaian dari galeri pada aplikasi pembayaran yang mendukungnya.
- Tidak ada nominal, checkout, pembayaran otomatis, analitik atau pengiriman data tambahan. Tidak memverifikasi transaksi donasi.

## Validasi

- 56 berkas tes Node lulus, termasuk alur startup/tunggu gambar, buka manual, klik gambar/backdrop, drag, Escape/cancel, animasi nonaktif, pemulihan scroll/fokus, pembukaan saat exit, dan hash aset asli.
- Browser aplikasi: gambar utuh, tutup ×, navigasi Pengaturan > Sawer tanpa popup ulang, buka dari menu, tutup backdrop dan fokus kembali ke tombol pemicu.
- Browser dengan viewport iframe 390 × 844: gambar tidak terpotong, × terlihat, Escape menutup dan reload memunculkan kembali.
- Tidak diuji pada Android fisik atau APK. Perubahan diterapkan pada sumber web; wrapper APK perlu memuat aset web yang diperbarui. Tidak mengubah uji audio Irodori yang ditunda.

## Pemasangan

Paket tambahan 33 membutuhkan baseline Paket 32 lengkap (yang memerlukan Paket 30). Pemasang memeriksa hash sebelum menulis, membuat cadangan, memasang secara atomik per berkas, menjalankan seluruh tes dan mengembalikan berkas bila gagal. Tidak melakukan commit/push/deploy.
