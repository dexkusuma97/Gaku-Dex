# Simulasi: ilustrasi terpilih dan nomor soal — 2 November 2026

## Enam gambar yang dipasang

Gambar baru dibuat dengan imagegen bawaan, diperiksa visual dan disalin utuh ke `dist/assets/simulation-scenes/`. Masing-masing PNG 1536 × 1024, tanpa tulisan jawaban. Manifest tambahan `scene-images-n4.js` memetakan ID soal secara eksplisit; 30 pemetaan N5 dan seluruh aset lamanya tetap sama.

| ID soal | Gambar | Tujuan visual |
|---|---|---|
| n4-p01-076 | n4-moving-boxes.png | Bantuan membawa kotak pindahan berat |
| n4-p01-077 | n4-neighbor-noise.png | Musik mengganggu penghuni apartemen sebelah |
| n4-p01-078 | n4-high-shelf.png | Kotak yang tidak dapat dijangkau di rak tinggi |
| n4-p02-077 | n4-dropped-goods.png | Barang toko jatuh karena tidak sengaja |
| n4-p03-078 | n4-document-check.png | Meminta rekan memeriksa dokumen |
| n4-p04-078 | n4-group-photo.png | Meminta pejalan kaki memotret dua teman |

Empat belas situasi N4 lainnya tetap berupa caption karena tugasnya cukup jelas tanpa gambar baru. Tidak menambahkan gambar dekoratif pada bacaan atau soal arti kata. Tidak mengubah kunci, opsi, naskah listening atau jumlah 548 soal yang disusun pada Paket 34. Prompt dan catatan aset ada di `SIMULATION_SCENE_PROMPTS_20261102.md` dan `SIMULATION_SCENE_ASSETS_20261102.json`.

## Perbaikan popup nomor

Penyebab: generator modul tertanam hanya mengubah handler tombol pada bagian actions dialog. Tombol nomor ada di body dialog sehingga masih memanggil fungsi global yang tidak tersedia di aplikasi utama. Generator kini juga mengubah handler di body dialog menjadi `GakuSimulation.*`.

Satu fungsi `chooseQuestion(index)` memeriksa bahwa ujian aktif, indeks berada pada bagian yang berjalan, waktu belum habis dan navigasi diperbolehkan. Setelah lolos, popup ditutup lalu nomor terpilih dibuka. Jawaban, tanda, deadline dan kunci sesi dipertahankan. Ini berlaku pada N5/A1 dan N4/A2, termasuk tombol nomor di panel desktop.

Bagian yang telah ditutup tetap tidak dapat dibuka ulang. JFT listening tetap maju sesuai rancangan mode ujian: nomor dikunci dan popup menjelaskan alasannya. Tidak membuat jalan pintas untuk mengubah jawaban setelah waktu habis.

## Pemisahan level

Paket gabungan ini menyertakan seluruh perubahan Paket 34: N5 menampilkan N5/A1, N4 menampilkan N4/A2, beserta timer/sesi/riwayat yang terpisah. Screenshot pengguna memperlihatkan N4 di header dan A1 di ujian; dukungan level dari Paket 34 ikut dipasang agar versi tanpa Paket 34 memperoleh perbaikannya juga.

## Validasi

- 58 berkas tes Node lulus. Tes baru membaca dan menjalankan handler HTML popup yang sebenarnya, bukan hanya memanggil fungsi navigasi langsung.
- Pengujian N5/N4 × JLPT/JFT: pindah nomor, popup tertutup, jawaban/tanda/deadline tetap; ganti bagian; larangan lintas bagian; larangan mundur JFT listening; klik setelah waktu habis.
- Aset: enam PNG, resolusi, hash/ukuran, pemetaan ke soal scene N4 yang ada; render gambar dan pelestarian pemetaan N5.
- Browser iframe 390 × 844: JFT A2 pilih nomor 9 dari popup, kembali ke 1 lalu 9 dengan pilihan tetap tersimpan; N4 pilih nomor 28/59 untuk pindah bagian lalu 78 untuk menampilkan gambar rak tinggi. Timer tetap sesuai bagian.
- Gambar diperiksa visual satu per satu. Belum diuji pada Android fisik/APK. Audio baru tetap naskah/TTS sebagaimana Paket 34, belum MP3.

## Paket pengganti

Paket 35 berisi perubahan 34 + 35. Dapat dipasang di atas Paket 33 lengkap atau Paket 34 lengkap; pemasang menerima hash kedua versi yang dikenal, membuat cadangan, menjalankan tes dan rollback jika gagal. Tidak melakukan commit/push/deploy.

Pemasangan nyata dari baseline Paket 34 dan baseline Paket 33 telah selesai dengan 58 berkas tes lulus pada masing-masing jalur. Hash seluruh payload diperiksa sesudah tes. Pemasang menyalin mode berkas dan mempertahankan fsync per berkas tanpa menyalin timestamp/xattr atau menjalankan sinkronisasi global perangkat.
