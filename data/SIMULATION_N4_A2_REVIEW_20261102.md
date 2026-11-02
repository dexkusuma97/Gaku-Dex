# Simulasi N4/A2 paket 01–04 — 2 November 2026

## Hasil

Delapan paket latihan baru, 548 butir: JLPT N4 4 × 87 = 348; JFT-Basic sasaran A2 4 × 50 = 200. Semua berstatus draft. Paket 05–06 N4/A2 belum tersedia; menunggu hasil Claude dan audit penggabungan. Dua belas paket N5/A1 lama dipertahankan byte-identik.

Sumber kanonis adalah delapan JSON di `dist/prototipe-simulasi/authoring/paket-n4-a2/`. Bangun ulang bank dengan `python3 scripts/build-simulation-n4-a2.py`. Renderer tertanam dibangun dari sumber bersama dengan `python3 scripts/build-embedded-simulation.py`. Prompt Claude disertakan di folder authoring.

## Blueprint internal

- N4: section [28,31,28]; timer [25,55,35] menit. Jenis berurutan [7,5,8,4,4,13,4,4,4,4,2,8,7,5,8]. Bagian pertama bacaan/penulisan/konteks/parafrasa/penggunaan, kedua tata bahasa/bintang/teks/pendek/sedang/informasi, ketiga tindakan/informasi/ungkapan/respons.
- JFT A2: section [13,12,13,12], satu timer 60 menit. Jenis [3,4,3,3,6,6,5,4,4,6,6]. Huruf/kosakata, percakapan, menyimak dan membaca.
- Jumlah merupakan pilihan latihan aplikasi, bukan klaim jumlah resmi selalu sama. Nilai adalah jumlah benar dan persentase, tanpa konversi skor berskala atau penentuan kelulusan resmi. Kebijakan tanpa pembahasan dipertahankan.

## Pemisahan level dan sesi

- Pilihan N5 hanya menampilkan JLPT N5/JFT sasaran A1, enam paket tiap jenis. Pilihan N4 hanya JLPT N4/JFT sasaran A2, empat paket tiap jenis.
- Identitas paket dan soal berbeda: `jlpt-n4-*`, `n4-p*`, `jft-a2-*`. Pencarian paket memeriksa exam, nomor DAN level.
- Sesi N5/A1 mempertahankan kunci/revisi lama. Sesi N4/A2 memakai kunci tersendiri dan revisi bank tersendiri; validasi menolak sesi lintas level.
- Muat ulang memulihkan jawaban, nomor dan deadline pada bank yang cocok. Tombol ganti level dikunci selama ujian. Mengganti level setelah ujian mereset tampilan ke menu level baru, tanpa menghapus riwayat hasil.
- Route simulasi mencatat level. Route lama yang tidak cocok tidak digunakan untuk menampilkan bank level lain.
- Riwayat baru menyimpan level eksplisit N4/A2 dan identitas yang terpisah. Filter A2 ditambahkan; riwayat lama tetap dapat dibaca.

## Penyusunan dan pemeriksaan isi

- Soal ditulis sebagai latihan baru dengan konteks tempat tinggal, urusan kota, belajar/kerja dan kegiatan sosial. PDF/tautan pengguna dipakai sebagai referensi bentuk dan tingkat; soal dan gambar referensi tidak disalin ke bank.
- Kunci jawaban disimpan sebagai indeks nol. Opsi diacak secara deterministik per ID agar stabil pada reload, tanpa menjadikan semua kunci di posisi pertama.
- Pemeriksaan editorial meliputi bacaan/ejaan, kecocokan konteks, perhitungan jadwal/urutan tindakan, stimulus bersama, kunci listening, opsi respons alami dan susunan bintang. Lima soal bintang direvisi karena variasi susunan kata dapat mengubah posisi jawaban.
- Witness susunan lengkap untuk 16 soal bintang disimpan di tes; tidak ditampilkan sebagai pembahasan dalam aplikasi.
- Pemeriksaan duplikat persis dijalankan lintas 20 paket (1.274 butir termasuk 726 lama), menggunakan stem, bacaan/audio dan opsi yang dinormalisasi. Ini tidak membuktikan seluruh kemiripan semantik telah hilang.
- Bacaan sedang N4 sekitar 271–294 karakter termasuk spasi; panjang pedoman tidak dipaksakan dengan isi pengulangan.
- Ini pemeriksaan editorial dan struktural oleh pengembang, belum penelaahan pengajar penutur asli atau uji kalibrasi psikometrik.

## Listening dan aset

- Ada 164 naskah listening baru; audio/transkrip identik. Label `Narrator:`, `女:` dan `男:` konsisten; tidak lebih dari dua tokoh dialog ditambah narator.
- Belum ada rekaman MP3 N4/A2. Pemutar memakai TTS Jepang perangkat langsung untuk ID baru agar tidak bergantung pada respons 404 hosting. Perangkat harus memiliki dukungan suara Jepang. Rekaman lama N5/A1 tetap digunakan.
- Bila rekaman baru kelak tersedia, pengembang dapat mendaftarkan ID di `GAKU_SIM_RECORDED_IDS` untuk memakai jalur MP3. Tidak ada daftar palsu yang mengaku rekaman telah tersedia.
- Dua puluh situasi N4 memakai caption Jepang mandiri pada kartu situasi, tanpa gambar eksternal yang hilang atau rincian visual yang tidak disediakan. Gambar lama N5/A1 tidak diubah.

## Validasi

- 57 berkas tes: regresi seluruh fitur lama, jumlah/jenis/ID/kunci, opsi unik, stimulus, transkrip, kunci bintang, validator, isolasi level, paket belum tersedia, timer, reload, penguncian level, sesi dan hasil riwayat.
- Mock audio memastikan naskah baru memakai TTS tanpa mencoba MP3 yang belum dibuat.
- Browser desktop: pilih N4, empat paket 87 soal, aturan 25/55/35, mulai/menjawab, reload mempertahankan jawaban/deadline, akhiri menghasilkan 1/87, beralih N5 menampilkan N5/A1 dan enam paket.
- Browser iframe 390 × 844: JFT A2 empat paket, mulai 50 soal dengan timer bersama 60 menit, opsi/tombol dan dialog nomor soal terlihat. Belum diuji pada APK/Android fisik atau didengarkan seluruh 164 naskah dengan suara perangkat.
- Pemasang membuat cadangan, memverifikasi hash, menjalankan seluruh tes, serta rollback bila tes gagal. Tidak melakukan commit/push/deploy. Paket tambahan ini memerlukan Paket 33 lengkap.

## Acuan format yang telah diperiksa

- https://www.jlpt.jp/e/guideline/testsections.html
- https://www.jlpt.jp/sp/e/topics/202009091599642827.html
- https://www.jpf.go.jp/jft-basic/e/about/index.html
- https://www.jpf.go.jp/jft-basic/e/faq/
- https://www.arkalearn.com/en/blog/40-contoh-soal-jft-basic-a2-2026
- PDF pengguna: `N4-2018年.pdf`, `N4-2017年-7月.pdf`, `Đề N4 T7-2023.pdf`. Beberapa halaman berupa pindai/lapisan teks rusak; telah ditinjau struktur dan halaman perwakilan, bukan verifikasi keaslian atau audit penuh seluruh soal sumber. Rekaman asli PDF tidak tersedia dalam lampiran.
