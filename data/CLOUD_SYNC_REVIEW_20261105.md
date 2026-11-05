# Cadangan akun DeX Gaku — 5 November 2026

Tahap ini adalah sinkronisasi MANUAL, bukan sinkronisasi otomatis atau penggabungan data.

## Perilaku
- Pengaturan menampilkan Simpan ke akun dan Ambil dari akun untuk pengguna Google yang masuk.
- Tidak membaca/menulis Firestore saat aplikasi hanya dibuka. Tombol memulai pembacaan server.
- Pratinjau menampilkan akun tujuan, jumlah riwayat, Kotoba dan Kanji tambahan; konfirmasi penggantian wajib.
- Seluruh snapshot mengganti tujuan, termasuk penghapusan. Data tidak digabungkan.
- Revisi Firestore diperiksa dalam transaksi; cadangan yang berubah harus diperiksa ulang.
- Pergantian akun tidak otomatis mengirim, menghapus, atau mengambil data HP. Periksa akun dan isi pratinjau.
- Pengambilan mencadangkan data HP sebelumnya, memakai jurnal rollback, kemudian memuat ulang halaman.
- Data sebelum pemulihan bisa diunduh dari Pengaturan. Cadangan akun juga bisa diunduh dari pratinjau.
- File JSON cadangan belajar lengkap adalah arsip terpisah dari format Import–Export Kotoba/Kanji. Belum ada impor berkas cadangan belajar lengkap dalam UI.
- Tidak menyinkronkan sesi kuis/simulasi aktif, token login, audio/PDF, atau riwayat acak dua kata beranda.
- Status premium tidak dibuat atau dipercaya dari snapshot ini.

## Kunci yang dicadangkan
- gaku-ui-prefs
- gaku-ui-history
- gaku-ui-data
- gaku-ui-kanji
- gaku-bunpo-saved
- gaku-bunpo-romaji
- gaku-kotoba-saved
- gaku-rangkuman-saved
- gaku-summary-romaji
- gaku-summary-kanji
- gaku-summary-intro-v1
- gaku-minna-pages
- gaku-home-last-learning

## Batas dan keamanan
Snapshot maksimal 700.000 byte UTF-8. Aturan hanya mengizinkan pemilik UID membaca satu dokumen users/{uid}/study/snapshot dan membuat/memperbaruinya dengan empat field yang ditentukan, timestamp server, dan revisi berurutan. Daftar, hapus dokumen, jalur lain, serta data premium tidak mendapat izin.
Tutup tab DeX Gaku lain sebelum mengambil cadangan supaya tidak ada tab lama yang menulis ulang data HP.
Simpan ke akun mengganti cadangan sebelumnya. Unduh cadangan akun melalui pratinjau jika masih diperlukan.

## Validasi
64 berkas tes Node lulus, termasuk konflik revisi, perubahan data lokal, pergantian UID saat operasi tertunda, izin ditolak, batas ukuran, penolakan format, rollback kegagalan penyimpanan, dan pemulihan startup. Tes SDK memakai mock, bukan layanan akun asli.
Aturan diperiksa strukturnya; belum diuji dengan emulator atau diterbitkan ke Firebase oleh pembuat paket. Verifikasi izin akun nyata dan simpan/ambil diperlukan sesudah deployment.

Referensi: https://firebase.google.com/docs/firestore/manage-data/transactions dan https://firebase.google.com/docs/firestore/security/rules-fields
