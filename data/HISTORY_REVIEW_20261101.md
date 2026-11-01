# Riwayat — Paket 28, 1 November 2026

## Perilaku akhir

Menu Riwayat menampilkan ringkasan total aktivitas, Quiz/Simulasi dan Cerita/Kaiwa; kartu dikelompokkan menurut tanggal setempat, berisi jenis, level, hasil, waktu, dan tombol hapus. Filter jenis mencakup Quiz, Simulasi, Kaiwa, Cerita, Tambah data, dan lainnya. Filter level mencakup N5, N4, A1 dan Belum tercatat. Label gabungan Cerita seperti N4–N3 tetap ditampilkan lengkap dan ikut filter N4; tidak diubah menjadi klaim bacaan N4 murni. Tampilan awal 20 entri, dengan tombol memuat 20 lagi.

Hapus satu dan Hapus semua membuka konfirmasi yang dapat dibatalkan, termasuk melalui tutup modal/Escape/Back. Dialog menjelaskan penghapusan tidak bisa dibatalkan. Hapus semua mencakup seluruh daftar saat dialog dibuka, termasuk di luar filter; aktivitas yang masuk setelah dialog dibuka dipertahankan. Menghapus Riwayat hanya mengubah kunci gaku-ui-history; kosakata pengguna, favorit, materi, rekaman dan sesi latihan tidak dihapus. Tidak ada penghapusan riwayat pengguna saat memasang paket.

## Data lama dan pencatatan baru

history-core.js menjadi penulis bersama untuk aplikasi utama. Ia membaca penyimpanan terbaru sebelum perubahan, memberi pengenal entri yang stabil, memisahkan pengenal entri dan identitas percobaan, serta mencegah pencatatan ganda untuk percobaan yang sama. Quiz, Simulasi, Cerita, Kaiwa dan Tambah data tersambung. Aktivitas generik yang sama pada percobaan berbeda tetap boleh dicatat.

Kunci lama tetap digunakan. Membuka atau memfilter Riwayat tidak menulis ulang data lama; properti tambahan dan detail hasil lama dipertahankan ketika melakukan perubahan. Level lama diambil dari metadata, jenis ujian, identitas buku atau penanda level pada detail. Jika tidak tersedia, tampil Belum tercatat; preferensi level aktif tidak digunakan untuk menebak level aktivitas lama. Tanggal tidak valid ditampilkan sebagai Tanggal belum tercatat.

Pencatatan baru menampung hingga 200 aktivitas terbaru, menggantikan batas lama 40. Entri yang sudah dibuang oleh versi lama tidak dapat dipulihkan. Nilai per aktivitas berasal dari hasil tersimpan, bukan dihitung ulang seolah-olah menjawab ulang soal. Kaiwa menampilkan balasan selesai, bukan akurasi karena latihan membolehkan mencoba lagi. Level Simulasi mengikuti ujian N5/A1, bukan level materi yang sedang dipilih.

Writer selesai hanya mencatat per percobaan; membuka ulang hasil Simulasi yang sudah tersimpan tidak mengembalikan entri yang telah dihapus. Latihan baru tetap mencatat hasil baru. Penulis mandiri di prototipe Simulasi memiliki fallback penyimpanan lama bila dijalankan tanpa aplikasi utama. Sinyal storage/pageshow menyegarkan tampilan utama untuk perubahan dari tab lain. LocalStorage bukan transaksi lintas-tab; pembacaan terbaru dan penghapusan berdasarkan ID mengurangi risiko menimpa data usang.

JSON Riwayat yang tidak dapat dibaca tidak ditimpa otomatis; antarmuka memberi pesan. Jika penyimpanan menolak perubahan, entri tetap ada dan pengguna mendapat pemberitahuan. Isi yang ditampilkan di-escape agar teks lama/kosakata tidak menjadi HTML aktif.

## Validasi

52 berkas tes lulus, termasuk migrasi tanpa penulisan otomatis, detail lama, level tidak diketahui, skor nol, deduplikasi percobaan, pengenal stabil, batas 200, filter, cancel/confirm/reload, penghapusan satu/semua dan penyimpanan gagal, data rusak, data baru di antara buka dialog dan konfirmasi, pelestarian data/favorit dan integrasi penulis Quiz/Kaiwa/Cerita/Simulasi. Seluruh regresi belajar, audio N4 paket 27 dan Simulasi lulus.

Pratinjau browser pada iframe lebar 390 piksel dengan data contoh diperiksa: jarak kartu, filter N4 (dua dari lima entri), Batal, hapus satu, konfirmasi hapus semua saat filter aktif dan kondisi kosong. Pengujian browser memakai penyimpanan sementara fixture, bukan Riwayat pengguna. Belum uji Android fisik. Sumber dan hasil bangun ulang modul Simulasi konsisten.

Paket kumulatif 1–27. Pemasang memeriksa hash/konflik, mencadangkan dan memulihkan jika tes gagal, tanpa commit/push/deploy otomatis.
