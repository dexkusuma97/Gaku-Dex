# Google Login — 5 November 2026

Basis GitHub dexkusuma97/Gaku-Dex commit 7afdbddfd27ef1564a48f0142d55d230ebbb1656. Paket kecil hanya mengubah index dan menambah modul akun, tes, catatan ini. Konfigurasi web project dex-gaku-web berasal dari pengguna; bukan kredensial admin. SDK modular CDN versi 13.2.0 sesuai dokumentasi Firebase saat pengerjaan. Tidak perlu npm/build tambahan.

Login Google melalui popup pada desktop dan browser HP. Popup dipanggil langsung dari klik setelah SDK siap. Tidak menggunakan redirect lintas situs otomatis pada Android: Cloudflare pages.dev berbeda dari firebaseapp.com dan redirect memiliki batas penyimpanan lintas domain. Referensi: https://firebase.google.com/docs/auth/web/redirect-best-practices (Option 2), https://firebase.google.com/docs/web/alt-setup .

Halaman Login dan Pengaturan menampilkan nama/email/foto atau status tamu, logout, pesan kesalahan dan tombol coba lagi. Sesi dikelola Firebase browserLocalPersistence. SDK diambil setelah browser load, sehingga materi tetap dapat dibuka saat offline/gagal koneksi. Saat SDK gagal, klik Hubungkan akan mencoba lagi; setelah siap klik Login. Foto hanya HTTPS googleusercontent.com; nama/email di-escape. Callback status hanya menggambar ulang halaman Akun/Pengaturan agar tidak mengganggu quiz aktif. Logout tidak menghapus data belajar lokal.

Lingkup paket adalah Authentication; belum ada Firestore, migrasi data tamu, pembayaran atau sinkronisasi progres. Login di perangkat kedua tidak memindahkan riwayat perangkat pertama. UI menjelaskan batas tersebut. Persiapan sinkronisasi baru tahap berikutnya setelah uji masuk nyata berhasil. Jangan menambahkan aturan database terbuka untuk paket ini.

Validasi lokal memakai mock SDK untuk persistensi, observer, popup sinkron, klik ganda, pemulihan status, profil/escaping, logout, error popup, retry, offline dan integrasi halaman. Consent Google nyata, sesi setelah tutup browser Android, dan konfigurasi Firebase harus diuji pengguna setelah deployment; tidak diklaim telah diuji langsung. Uji: Pengaturan > Login, pilih akun; cek nama/email/foto; muat ulang; keluar; pastikan materi dan riwayat tetap ada. Jika popup diblokir, izinkan popup untuk dex-gaku.pages.dev dan ulangi melalui Chrome/browser utama.

Prasyarat: Google provider enabled; authorized domains mencakup dex-gaku.pages.dev. AUTH tidak memberikan hak premium atau hak akses server dengan sendirinya. Akses premium nantinya harus divalidasi server.
