# Sinkronisasi otomatis tanpa reload — 5 November 2026

Paket tambahan setelah HEMAT-SYNC. Aturan Firebase tidak diubah; pengguna menyatakan sudah memperbaruinya. Penolakan izin nyata tetap perlu diperiksa bila belum terselesaikan setelah koneksi ulang.

Perubahan:
- Panel sinkronisasi besar, seluruh tombol kirim/Simpan/Ambil/Matikan/cadangan, dan penjelasan panjang di Pengaturan tidak ditampilkan lagi. Hanya status kecil.
- Login otomatis menghubungkan dan menyiapkan baseline bila belum aktif, tanpa tombol aktivasi. Data guest milik perangkat pertama dapat ikut dimasukkan.
- Respons sinkronisasi memperbarui state prefs, historyData, customData, simpanan materi, halaman buku, dan hero Beranda melalui hook onApplied. Tidak memanggil render() atau reload halaman pada jalur otomatis.
- Status diperbarui pada node teks yang sama, tidak merender ulang halaman Pengaturan.
- Toast bawah memakai komponen aplikasi yang sudah ada dengan teks Data telah diperbarui. Muncul setelah perubahan dikirim/diterapkan; bukan setiap pemeriksaan idle.
- Layar belajar dan ujian tetap dilindungi. Data masuk menunggu kembali ke layar aman agar input tidak hilang.
- Informasi permission-denied tetap tampil sebagai Belum tersambung dan tidak disamarkan menjadi sukses. Retry otomatis; tidak perlu tombol kirim.
- Menunggu konfirmasi penanda server sebelum mengumumkan tersinkron; menunggu operasi yang belum tiba sebelum mencoba unggah.
- Pergantian akun membuat arsip lokal per UID, dengan penanda transisi agar data akun A tidak terkirim ke B. Archive dapat memakai ruang penyimpanan lokal; bila gagal, perpindahan sinkronisasi dijeda dan data tidak dihapus.
- Baseline dan perubahan saja tetap memakai protokol HEMAT-SYNC. Penambahan berbeda dapat digabung; konflik edit entri sama tetap dijeda dan memerlukan pemeriksaan pemilik. API pemulihan manual tetap ada untuk penanganan, tidak ditampilkan sebagai alur biasa.

Validasi: 66 berkas tes pada basis HEMAT-SYNC. Tes produksi memeriksa data dan preferensi baru masuk tanpa mengubah root HTML, teks toast tepat, tombol sinkron tidak ada, login tanpa opt-in, isolasi akun/arsip perubahan offline, serta permission-denied. Backend memakai SDK tiruan; hasil pada Firebase nyata setelah update aturan perlu diuji pengguna.
