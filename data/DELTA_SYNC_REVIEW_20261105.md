# Sinkronisasi perubahan per entri — 5 November 2026

Paket pengganti langsung dari AUTO-SYNC, tanpa perlu memasang paket REALTIME-SYNC. HTML memuat cloud-delta.js dan cloud-auto-delta.js; modul otomatis lama tidak dimuat lagi. Login/config Google tetap dipakai.

## Pengiriman
- Kotoba tambahan, Kanji tambahan dan riwayat dipecah menjadi entri beridentitas stabil. Bandingkan isi kanonik; urutan properti/daftar tidak menimbulkan unggahan palsu.
- Hanya tambah/edit/hapus yang masuk satu batch perubahan setelah stabil 5 detik, diperiksa lokal setiap 2 detik. Hasil kuis tetap dicatat setelah kuis selesai oleh modul Quiz.
- Tidak ada unggahan maupun pembacaan ulang terjadwal jika tidak ada perubahan. Tetap ada pembacaan koneksi awal, metadata kecil, dan penerimaan perubahan perangkat lain.
- Setiap batch menulis satu dokumen perubahan + metadata urutan kecil. Transaksi hanya membaca metadata, bukan snapshot besar.
- Penambahan berbeda dari dua HP digabungkan. Edit berbeda pada entri sama dijeda untuk pilihan manual.
- Data masuk hanya diterapkan di layar aman; perubahan lokal yang belum dikirim tetap dipertahankan dalam penggabungan.
- Snapshot lengkap lama tetap sebagai titik awal. Penyiapan format baru satu kali dan perangkat baru/mode Ambil manual membaca titik awal beserta perubahan sejak itu.
- Simpan manual yang berbeda membuat checkpoint lengkap dan urutan perubahan baru; Simpan tanpa perubahan memeriksa metadata tanpa menulis ulang snapshot.
- Catatan perubahan bersifat immutable. Checkpoint manual menutup periode lama; log lama tetap tersimpan. Pengelolaan retensi/arsip log belum disertakan.
- Batas data belajar lengkap tetap 700 KB. Riwayat acak kata beranda, sesi ujian aktif, audio, PDF, token akun tidak dikirim.

## Penyimpanan
users/{uid}/study/snapshot: snapshot format lama.
users/{uid}/study/syncHead: version=2, epoch, seq, updatedAt.
users/{uid}/studyEpochs/{epoch}/changes/{seq}: version=2, epoch, seq, ops(JSON string), updatedAt.
Baseline lokal gaku-cloud-delta-v2 menggantikan gaku-cloud-auto-v1 setelah migrasi berhasil. Tidak menghapus data belajar saat migrasi atau logout.
Aturan baru harus diterbitkan. UID hanya dapat mengakses jalur akunnya. Sesudah format baru diaktifkan, klien lama tidak boleh menulis snapshot tanpa checkpoint metadata yang sesuai.

## Pengujian
Tes utama memakai SDK tiruan bersama untuk beberapa klien. Daftar 500 Kotoba + satu kata baru menghasilkan satu operasi kata; tidak mengirim 500 kata lainnya. Penghapusan hanya satu operasi null. Idle tidak membuat request baru. Diuji penggabungan penambahan berbeda, konflik edit entri sama, offline, migrasi, rekonstruksi perangkat baru, checkpoint manual, no-op manual, pergantian akun, pemulihan storage, serta UI produksi.
66 berkas tes pemasang diuji pada salinan basis AUTO-SYNC (paket realtime yang belum dipasang tidak diperlukan). Aturan belum diuji pada emulator Firebase; perlu terbitkan dan uji izin/sinkronisasi nyata setelah deployment.

Referensi:
https://firebase.google.com/docs/firestore/query-data/listen
https://firebase.google.com/docs/firestore/manage-data/transactions
https://firebase.google.com/docs/firestore/security/rules-conditions
