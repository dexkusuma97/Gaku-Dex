# Rangkuman — tambahan buku Marugoto dan zoom, 1 November 2026

Tambahan hanya pada bagian Buku dan perilaku pembesaran halaman aplikasi. Data rangkuman 50 bab/230 catatan/2.910 kosakata, Bunpo N5/N4, Kotoba dan Kanji dipertahankan.

## Buku

Tambahkan ID 3: Marugoto Starter (A1) Katsudo, dan ID 4: Marugoto Starter (A1) Rikai. Kedua tautan dari pengguna identik dan menunjuk **Daftar Kosakata Bahasa Indonesia**, bukan dua buku utama yang berbeda. Deskripsi kartu dan footer menjelaskan bahwa daftar kosakatanya digunakan bersama untuk Katsudo dan Rikai.

Sumber resmi: https://marugoto.jpf.go.jp/assets/docs/download/starter_a/MarugotoStarterWordbook_ID.pdf
Penerbit/atribusi pada footer: **Sumber: Japan Foundation** dengan tautan https://www.jpf.go.jp/ serta tautan PDF asli. Atribusi tampil tepat setelah catatan nomor halaman/posisi bacaan, khusus buku Marugoto. Minna no Nihongo I/II beserta asetnya tidak diganti atau diatribusikan kepada Japan Foundation.

PDF 82 halaman diambil 1 November 2026. SHA-256: 51d18dc93db6c403938c94b9df0993d7c38a8fc609ad1556f3ef9d1a4232e72d. Render 82 WebP beresolusi lebar sekitar 2.200 piksel disimpan satu kali dan dipakai kedua kartu. Hash setiap halaman dan asal PDF dicatat di data/marugoto-starter-wordbook-source.json. Navigasi mengikuti urutan halaman PDF; masing-masing entri memiliki posisi terakhir sendiri dengan skema simpanan lama yang tetap kompatibel. Restore route kini memeriksa ID buku yang tersedia, menggantikan batas keras dua buku.

Skrip persiapan aset: scripts/build-marugoto-starter-pages.py menerima PDF lokal yang identik dengan sumber terverifikasi; memerlukan PyMuPDF/Pillow hanya saat menyiapkan ulang aset. Pemasangan Termux dan build data biasa tetap offline serta tidak memerlukan pustaka PDF tersebut. Penulisan aset memakai buffer dan penggantian atomik serta verifikasi hash untuk menghindari file kosong.

## Zoom

Pembesaran dua jari diterapkan pada isi area buku, dengan rentang 100–300% yang sama dengan tombol. Titik bacaan di bawah pusat gestur dipertahankan sejauh batas scroll mengizinkan. Gerakan satu jari tetap menggulir; gestur batal dan inisialisasi ulang ditangani. Ctrl+wheel di area buku mengikuti pembesaran isi yang sama. Tombol −／＋ dan lompat halaman tetap ada.

Halaman aplikasi memakai viewport skala tetap, touch-action pan-x pan-y, serta pencegahan gestur pembesaran bawaan browser. Header/navigasi aplikasi tidak ikut diskalakan oleh kode viewer. Batas platform atau pengaturan browser yang memaksakan zoom dapat berbeda; belum diuji langsung pada Android fisik.

## Validasi

43 berkas tes lulus. Termasuk validitas/hash seluruh 82 aset, empat kartu buku, atribusi dan link, restore posisi untuk kedua entri, kompatibilitas dua buku lama, cubit/wheel dengan batas dan jangkar, gestur batal, init ganda, serta scroll satu jari. Build rangkuman stabil; lima grup bab tidak berubah.

Sampel render halaman 1/3/20/82 diperiksa visual: sampul, petunjuk Indonesia, isi kosakata dan kolofon terbaca tanpa pemotongan tambahan. Pengujian gestur berupa simulasi peristiwa DOM; belum uji UI browser/Android fisik.

Paket 17 kumulatif mencakup 1–16, dengan pemeriksaan hash, backup, penolakan konflik, rollback jika tes gagal, dan pencegahan penulisan cache Python oleh tes pemasang. Tidak melakukan commit/push/deploy.
