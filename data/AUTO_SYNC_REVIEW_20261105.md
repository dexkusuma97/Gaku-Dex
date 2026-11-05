# Sinkronisasi otomatis — 5 November 2026

## Aktivasi dan perilaku
Paket tambahan untuk DEX-GAKU-CLOUD-SYNC yang telah terpasang dan berhasil diuji antar-HP. Tidak mengubah aturan Firestore.
Pengguna memilih data awal satu kali per perangkat: Mulai dari data HP ini (unggah dengan pratinjau) atau Mulai dari data akun (ambil dengan pratinjau dan cadangan lokal).
Sesudah konfirmasi berhasil, simpan/ambil berikutnya berjalan otomatis selama aplikasi terbuka dan online. Perubahan lokal menunggu stabil minimal 3 detik, diperiksa setiap 2 detik. Akun diperiksa sekitar sekali per 60 detik selama aplikasi terlihat, serta saat fokus/online. Tidak ada janji penyimpanan setelah aplikasi ditutup.

## Perlindungan
- Identitas UID dan revisi terakhir disimpan lokal sebagai titik pembanding; tidak ikut diekspor sebagai materi.
- Keluar atau berganti akun mematikan otomatis. Memerlukan pemilihan data awal untuk akun berikutnya.
- Tidak menggabungkan data: kedua perangkat berubah sejak baseline -> jeda dan pilih melalui pratinjau manual.
- Setiap unggah memakai transaksi dengan pemeriksaan revisi, termasuk pemeriksaan ulang saat transaksi dicoba ulang.
- Perubahan lokal selama unggah tetap terdeteksi pada putaran berikutnya.
- Perubahan lokal selama pembacaan mencegah penggantian data.
- Data masuk hanya diterapkan di Beranda/Pengaturan/Login, tanpa kuis atau simulasi aktif. Saat belajar, tunda sampai kembali ke Beranda.
- Data sebelum pengambilan memakai jurnal/cadangan lokal dari paket sebelumnya, lalu reload.
- Satu tab DeX Gaku per perangkat disarankan. Pembaruan baseline dari tab lain menunda proses dan memuat ulang layar aman.
- Tidak mengirim sesi ujian berjalan, token, audio, PDF, atau status premium.
- Ruang penyimpanan gagal untuk baseline: otomatis dimatikan, bukan berpura-pura sudah tersinkron.
- Batas snapshot dan 13 kunci data sama dengan paket manual.

## Validasi
65 berkas tes aplikasi lokal lulus. Tes baru memakai dua klien dan backend SDK tiruan bersama untuk menguji aktivasi, debounce, unggah/ambil, konflik, resolusi manual, retry transaksi, offline, pergantian akun, perubahan lokal saat membaca, dan penundaan reload di layar belajar. Tes tidak memakai akun Google nyata atau menerbitkan aplikasi.
Sinkronisasi manual sebelumnya sudah dikonfirmasi pengguna berhasil antar-HP. Jalur otomatis masih memerlukan uji sesudah deployment.

Referensi transaksi: https://firebase.google.com/docs/firestore/manage-data/transactions
