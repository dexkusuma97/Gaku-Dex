# Audit paket simulasi 05–06 — 3 November 2026

Empat paket baru: JLPT N4 2 × 87 dan JFT A2 2 × 50, total 274 butir. N4/A2 menjadi 822 butir/12 paket. N5/A1 tetap 726 butir/12 paket; total aplikasi 1.548 butir/24 paket. Paket ditulis baru dalam sesi ini atas instruksi pengguna, tidak lagi menunggu materi Claude. Tidak mengklaim hasil sebagai soal/penilaian resmi.

Blueprint tetap: N4 [28,31,28] pada tiga sesi 25/55/35 menit; JFT A2 [13,12,13,12] dengan satu timer 60 menit. Nomor, tipe, ID, distribusi jawaban dan pemisahan level mengikuti kontrak sebelumnya. Tidak ada pembahasan pada layar ujian/hasil.

Tema: kebiasaan dan pengalaman baru; perjalanan dan kegiatan warga; keluarga dan layanan harian; komunikasi di tempat kerja. Bagian membaca menggunakan pesan, pengumuman, cerita pengalaman, jadwal, tarif dan syarat layanan. Bagian listening memuat instruksi, informasi utama, situasi sosial dan respons. Semua rincian penentu jawaban disediakan dalam teks/audio. Sepuluh scene baru mempunyai caption mandiri; tidak menambahkan gambar dekoratif atau mengharuskan gambar eksternal yang belum tersedia.

Seluruh 274 butir diperiksa saat penyusunan untuk kesesuaian stem, kunci dan pengecoh. Revisi editorial mengganti pengecoh ungkapan yang terlalu tidak wajar dan dua susunan bintang yang memungkinkan perpindahan jawaban posisi ketiga. Delapan witness bintang disimpan terpisah untuk verifikasi. Hitungan diskon foto, biaya ruang/proyektor, tiket keluarga dan waktu keberangkatan diperiksa secara numerik dalam tes. Validator memeriksa duplikat persis lintas seluruh 1.548 soal, bukan bukti tidak adanya kemiripan tema atau jaminan keunikan semantik.

Delapan JSON paket 01–04 dan dua belas bank N5/A1 sebelumnya tidak diubah. Revisi sesi N4 lama dipertahankan karena bank lama tidak berubah dan penambahan bersifat append-only; sesi aktif paket 01–04 tetap dapat dimuat. Paket 05–06 kini dapat dipilih, menyimpan jawaban/penanda/deadline dan memulihkan sesi. JFT listening tetap maju saja dan maksimal dua kali putar per soal. Popup nomor tetap mematuhi batas sesi tersebut.

Audio baru: 82 naskah, 202 giliran, 4.586 karakter. Manifest ekspor seluruh N4/A2: 246 MP3. Label pembicara dipisahkan memakai parser pemutar yang sama. Pengaturan voice mengikuti generator simulasi yang telah ada. Skrip Termux menyediakan dry-run, new/all/ID paket, cache giliran, sidik pengaturan/hash keluaran, berhenti pada HTTP gagal, --install dengan cek naskah/decode dan registrasi ID, serta --pack. MP3 lama tidak diganti. API/kuota ElevenLabs tidak digunakan dalam proses pembuatan paket ini.

Pengujian: struktur dan duplikat koleksi; kesetaraan bank dengan JSON; delapan witness bintang; kunci angka/jadwal; empat sesi paket baru, reload dan pemisahan level; manifest 246/82 dan label; MP3 terdaftar memilih jalur media; generator sungguhan diuji dengan curl tiruan dan audio senyap lokal untuk HTTP401, lanjut ulang tanpa permintaan baru, instalasi, korupsi keluaran dan ZIP. Seluruh tes proyek dijalankan melalui pemasang. Pengujian ini bukan kalibrasi psikometrik, tinjauan pengajar penutur asli, atau uji dengar 82 MP3 asli yang belum dibuat.

Sumber format: acuan JLPT/JFT yang dicatat pada audit Paket 34, dengan bentuk internal dipertahankan. Dokumentasi TTS yang diperiksa: https://elevenlabs.io/docs/api-reference/text-to-speech/convert .
