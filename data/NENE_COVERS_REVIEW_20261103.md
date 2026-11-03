# Sampul Nene — 3 November 2026

Enam ilustrasi baru berwarna dibuat dengan built-in image_gen; bukan salinan panel manga. Prompt lengkap: NENE_COVER_PROMPTS_20261103.json. Aset: dist/assets/cerita/cover-nene-part-01.webp sampai cover-nene-part-06.webp.

Adegan mengikuti terjemahan setiap bagian: makan malam, pintu tertutup, kamar bayi, janji, pertemuan kembali, dan Rintaro bersama Nana. Desain Nene dan Rintaro mengacu pada gambar pertama. Sampul terakhir menggambarkan ketidakhadiran Nene melalui foto dan tempat makan kosong. Beberapa sampul mengisyaratkan pengungkapan cerita. Semua keluaran diperiksa secara visual sebelum dikonversi.

600 × 900 piksel, WebP maksimum 120 KiB per berkas. Judul dan nomor bagian tetap berupa teks HTML. Renderer Paket 39 menghubungkan sampul pada rak, daftar, detail, dan pemulihan bagian. Teks cerita, latihan, kredit karya, audio, dan daftar rekaman tidak diubah.

Validasi: tes pemetaan enam bagian, hash aset, dimensi WebP, teks alternatif, fallback, dan semua tes proyek melalui pemasang. Tidak ada klaim pengujian langsung di perangkat Android.

Pemeriksaan suara dry-run kini menguras stdout sebelum berhenti, agar laporan ratusan baris tidak terpotong saat dites melalui pipe. Tidak ada perubahan API, voice ID, audio, atau kuota.
