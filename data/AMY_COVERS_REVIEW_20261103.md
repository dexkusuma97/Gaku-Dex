# Sampul Amy — Paket 39

Lima ilustrasi baru dengan pembuat gambar bawaan (built-in image_gen), gaya manga berwarna dengan tinta dan sapuan warna. Karakter, busana dan motif Amy konsisten. Adegan: bunga di ruang kerja, foto keluarga, dua amplop, perjalanan 37 hari, dan rumah baru di toko bunga. Bagian 4 memperlihatkan satu lengan dan satu sepatu sesuai kisah; Bagian 5 tetap satu lengan.

Berkas untuk aplikasi: dist/assets/cerita/cover-amy-part-01.webp sampai cover-amy-part-05.webp, 600 × 900, masing-masing paling banyak 120 KiB. Sumber PNG asli disimpan oleh pembuat gambar; paket pemasang berisi versi WebP untuk aplikasi. Prompt lengkap: data/AMY_COVER_PROMPTS_20261103.json. Hash, ukuran dan pengaturan kompresi: data/AMY_COVERS_20261103.json.

Perubahan renderer berlaku umum: memilih cover dari bab yang dipilih sebelum fallback ke sampul buku. Rak dan daftar meneruskan nomor bagian; detail mengambil bagian aktif. Judul dan nomor bagian tetap sebagai teks aplikasi di luar gambar. Alt text deskriptif di-escape; fallback tersedia bila gambar gagal. Buku lain tetap memakai sampul lamanya. Cakupan gambar baru pada pembaruan ini adalah lima bagian Amy.

Validasi: lima hash/gambar berbeda, dimensi/format/anggaran file, pemetaan rak/daftar/detail dan Back/restore, gambar tanpa strip judul lama, alt/fallback, cerita/soal/audio lama, dan seluruh tes melalui pemasang. Pratinjau browser dengan iframe lebar 390 px menampilkan kelima kartu dan alt text yang sesuai; pemeriksaan interaksi lanjutan dibatasi timeout browser. Pemeriksaan otomatis mencakup pemilihan bagian dan detail.

Pemasang membutuhkan Paket 38. Daftar rekaman N4/A2 yang diubah oleh instalasi audio diperiksa sebagai data JSON/ID yang dikenal, tidak diwajibkan sama dengan daftar kosong bawaan. Berkas itu dan seluruh MP3 tidak termasuk payload, sehingga audio terpasang dipertahankan.

Tes impor MP3 lama diperbarui agar tetap memverifikasi 223 hash N5/A1, menerima MP3 N4/A2 dengan ID kanonis, serta memastikan setiap ID rekaman terdaftar mempunyai berkas. Pemasang diuji dengan daftar rekaman tidak kosong dan MP3 yang sudah ada.
