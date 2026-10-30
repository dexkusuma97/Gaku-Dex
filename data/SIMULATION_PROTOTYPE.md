# Prototipe Simulasi — 28 Oktober 2026

Menu aktif: `Simulasi` di router web utama, dirender langsung dalam #app. URL `/prototipe-simulasi/` lama hanya mengarahkan ke `/#simulasi`; aplikasi menghapus hash setelah membuka menu. Tidak ada dokumen simulasi terpisah atau iframe untuk penggunaan menu.

## Revisi terbaru

Pengguna meminta hasil tanpa pembahasan, tim bertiga menulis paket 1–4,
Claude menulis paket 5–6. Hasil sekarang berhenti pada jumlah benar, akurasi,
jumlah dijawab/kosong, durasi, dan ringkasan per bagian. Tidak ada tombol,
halaman, field, atau jalur riwayat browser untuk pembahasan jawaban.

## Bank latihan

- Enam paket JLPT N5, masing-masing 71 soal: [21, 26, 24].
- Enam paket latihan JFT-Basic A1, masing-masing 50 soal: [13, 12, 13, 12].
- Total 726 soal latihan; seluruh paket berstatus editorial `draft`.
- Ini blueprint latihan DeX Gaku; jumlah soal N5 bukan klaim jumlah resmi.
- JFT resmi mengukur rentang A1–A2. "A1" adalah sasaran kesulitan latihan,
  bukan jenis ujian resmi terpisah atau penentu otomatis level CEFR pengguna.
- Data: `dist/prototipe-simulasi/bank-packs-12.js` `bank-packs-34.js`, dan `bank-packs-56.js`.
- Opsi diputar deterministik, kunci tetap cocok. Soal tidak diacak agar susunan
  jenis soal dan identitas soal dapat ditinjau dengan jelas.
- Setiap soal menyimak memiliki naskah Jepang. Prototipe membacakan dengan
  TTS Jepang perangkat, bukan rekaman produksi. Transkrip masih tersedia
  untuk mengecek prototipe. Audio manual JLPT belum simulasi rekaman terjadwal.
- Materi tetap perlu pemeriksaan guru/penutur Jepang dan produksi/review audio
  sebelum diposisikan sebagai paket simulasi final.

## Alur dan antarmuka

Menu → pilih jenis → pilih paket 1–6 → aturan + persetujuan → ujian → hasil.
Pemilihan paket memperbarui judul, isi, jumlah per bagian dan penilaian.

- Menu/paket mengikuti warna tenang DeX Gaku. Saat ujian: header berwarna,
  lembar soal putih, pilihan bernomor, timer tetap terlihat, navigasi bawah.
- PC: nomor soal di samping. Tablet lebar: dua kolom. HP: satu kolom, nomor
  soal dalam dialog. Daftar nomor bisa digulir untuk paket berisi banyak soal.
- Tidak ada blink, nyawa atau penalti waktu. Pilihan tidak dinilai saat ujian.
- Tanda tinjau, ubah jawaban, petunjuk Indonesia JFT, peringatan kosong,
  konfirmasi akhir/keluar dan timer deadline nyata tetap berfungsi.
- JFT timer 60 menit untuk semua bagian, bagian lama terkunci, menyimak hanya
  maju dan maksimum dua pemutaran suara yang berhasil.
- N5 timer 20/40/30 menit. Jeda antar sesi sampai pengguna menekan mulai sesi.
  JLPT asli memakai kertas; ini adaptasi digital independen.
- SessionStorage `gaku-simulation-prototype-v2` menyimpan paket dan jawaban
  dalam tab yang sama. Data pratinjau lama v1 tidak dipakai untuk bank baru.
- Hasil ditulis satu kali per percobaan ke `gaku-ui-history` di perangkat ini. Riwayat utama memuat ulang data saat kembali melalui BFCache. Tidak ada sinkronisasi Google. Hasil berupa nilai latihan mentah, bukan skor berskala/kelulusan resmi.

## Serah-terima Claude

Prompt: `dist/prototipe-simulasi/authoring/PROMPT_CLAUDE_PAKET_5_6.md`.
Kontrak JSON sesuai runtime: satu objek paket, question ID, section 0-based,
opsi teks, answer 0-based; tanpa pembahasan. Semua klausul tingkat latihan,
jumlah/subjenis, naskah audio, pengecekan jawaban dan duplikat dicantumkan.

`scripts/export-simulation-banks.cjs` mengekspor delapan JSON referensi paket
1–4 agar Claude bisa membandingkan soal. JSON Claude sudah diterima, diaudit dan dikoreksi pada 20 soal, lalu diaktifkan sebagai empat paket tambahan. Lihat `SIMULATION_AUDIT_CLAUDE_56.md`.

## Acuan resmi (diperiksa 28 Oktober 2026)

- https://www.jpf.go.jp/jft-basic/e/about/
- https://www.jpf.go.jp/jft-basic/e/faq/
- https://www.jlpt.jp/e/guideline/testsections.html
- https://www.jlpt.jp/e/guideline/pdf/n5_e_revised.pdf
- https://info.jees-jlpt.jp/myjlpt/precautions.html

Tidak memakai logo resmi atau menyalin soal resmi. Visual memakai identitas
DeX Gaku. Rincian verifikasi revisi terbaru dicatat pada STATUS.md.

## Audit lanjutan dan kesiapan kiriman Claude

Pemeriksaan silang seluruh484soal menghasilkan16revisi konkret (konteks,
ambiguitas pilihan/★, kondisi waktu, posisi benda, dan redaksi). Rincian dan
status penerapan ada di SIMULATION_AUDIT_PACKS_12.md dan _34.md. Pilihan paket
3–4 dipermutasi sekali saat penyuntingan agar posisi kunci tidak membentuk
siklus1–2–3–4. Skema, jumlah soal dan hasil tanpa pembahasan tetap sama.

`BANK_REVISION` memisahkan sesi yang memakai versi soal lama. Pemulihan sesi
memeriksa jawaban/indeks/bagian/penanda/audio/tanggal sebelum merender ujian;
sesi rusak atau usang kembali ke pilihan paket dengan pemberitahuan.

`scripts/validate-simulation-import.cjs` adalah gerbang JSON hanya-baca untuk
paket5–6, memeriksa kontrak dan duplikasi terhadap data aplikasi. Bukan tombol
import pengguna; tidak otomatis memasukkan atau memublikasikan soal. Panduan:
SIMULATION_IMPORT_GUIDE.md. Kelulusan struktur bukan pemeriksaan semantik.

## Referensi materi dan format

Bahan publik Irodori Starter A1, daftar Can-do Marugoto A1 (Katsudoo dan acuan
Rikai), contoh resmi JFT, serta pedoman/contoh resmi JLPT diperiksa28Oktober2026.
Dua belas soal JFT A1 diganti dengan tugas orisinal yang mengisi variasi konteks;
masing-masing paket memiliki satu percakapan, satu menyimak dan satu bacaan baru.
Pemetaan editorial ada di SIMULATION_REFERENCE_MAP.json; bukan klaim menyalin
soal atau validasi penerbit. Dua peninjau memeriksa12butir, tanpa temuan konkret.

Bank tetap8paket/484soal draft. Soal N5 tidak diubah pada tahap referensi ini;
blueprint kategori disandingkan dengan pedoman jenis soal N5 terkini. Contoh
JLPT lama tidak dipakai untuk menentukan waktu/jumlah terkini. Batas prototipe
audio dan pemeriksaan pengajar tetap berlaku. BANK_REVISION diganti agar sesi
lama tidak dinilai dengan soal yang sudah berubah.

Daftar sumber/penerapan dan tambahan prompt Claude ada di folder authoring pada
prototipe. JSON referensi serta ZIP diperbarui. Kontrak kiriman paket5–6 tetap.

## Navigasi Back setelah sesi selesai

Riwayat browser sekarang mengikuti hierarki menu → paket → aturan → ujian/hasil,
bukan rekaman semua klik. `navigation.js` mengelola kedalaman/identitas alur.
Dari hasil, Pilih paket lagi membangun ulang cabang menu→paket; Menu simulasi
kembali ke akar. Back berikutnya tidak memulihkan aturan atau hasil lama.
Tombol kembali pada halaman mengikuti aturan sama. Keluar lewat tautan beranda
juga merapikan alur terlebih dahulu. Run selesai dibersihkan ketika meninggalkan
hasil; penanda alur menolak Forward ke sesi usang. Reload memakai entri yang
sudah ada; pemulihan BFCache diselaraskan dengan sesi tersimpan.

Saat ujian aktif, Back mempertahankan jawaban/deadline dan menampilkan konfirmasi.
Bila dialog sudah terbuka, Back menutup dialog saja. Semua perilaku berlaku pada
API riwayat browser yang digunakan tombol/gesture Back; belum diuji pada perangkat
Android fisik. Kasus utama sudah diuji dengan Back nyata Chromium dan unit history
asinkron, termasuk riwayat lama sebelum perbaikan.

## Integrasi web utama dan Claude 5–6

Paket 1–6 per jenis aktif (12 paket, 726 soal). Semua tombol Simulasi menuju modul yang sama, tanpa penghalang level N4. Riwayat navigasi utama dikembalikan ke akar Beranda sebelum membuka dokumen simulasi, sehingga Back dari menu simulasi langsung kembali ke Beranda. Hasil per bagian disimpan idempoten ke riwayat lokal; quota/penyimpanan terblokir tetap menampilkan hasil dan pemberitahuan gagal simpan. BANK_REVISION baru menolak sesi bank lama. URL fisik lama dipertahankan untuk kompatibilitas. Tidak ada pembahasan.

Pengujian: 12 alur paket dan penilaian 100%, kontrak/duplikat, navigasi utama/simulasi, pemulihan sesi, timer, penyimpanan idempoten dan gagal simpan lulus. Browser Chromium: masuk dari Beranda, paket JFT 6, satu jawaban, akhiri, hasil, pilih paket, Back menu, Back Beranda, catatan Riwayat terlihat. Belum diuji pada Android fisik; CSS responsif sebelumnya dipertahankan.

## Penyatuan shell aplikasi (menggantikan integrasi tautan sebelumnya)

Keluhan tampak seperti situs lain diselesaikan dengan renderer native di `dist/simulation-module.js`, host `dist/simulation-host.js`, dan stylesheet `dist/simulation-module.css` yang sepenuhnya dibatasi ke `.simulation-module`. Aset dihasilkan dari mesin bersama `prototipe-simulasi/app.js` lewat `python scripts/build-embedded-simulation.py`; jika mesin bersama diubah, jalankan generator dan tes native/prototipe. Header/sidebar/bottomnav hanya satu, dari web utama. Halaman menu/paket/aturan/ujian/hasil semuanya tetap dalam dokumen utama. Tautan lama hanya redirect untuk kompatibilitas.

History adapter memakai gaku route dengan field simulation (scope/epoch/view/depth), mendasarkan hierarki pada entry Beranda utama. Pengujian `simulation-embedded.test.cjs` meliputi seluruh 12 paket, pemangkasan hasil, dialog browser Back dan pindah tab, reload session, penyimpanan hasil, serta timer yang berhenti ketika menu ditinggalkan. CSS tidak mengubah menu lain. Bank soal dan sistem skor tidak diubah.

Batas browser QA: shell/menu/paket/aturan/soal/Back dialog diamati di Chromium dengan URL root tetap. Browser QA berhenti merespons saat reload pada akhir uji, sehingga visual akhir setelah reload dan screenshot baru tidak tersedia; pengujian pemulihan sesi otomatis lulus. Android fisik belum diuji.

## Revisi tampilan setelah penyatuan menu

Indikator tahapan 1–5 dan tombol kembali tambahan di dalam isi dihapus; kembali memakai header standar. Jawaban ditata satu kolom agar tidak dipengaruhi grid Quiz global dan teks panjang tetap membungkus dalam kartu. Transkrip bantuan tidak dirender; naskah data hanya untuk audio internal. Klik jawaban melakukan pembaruan DOM terbatas pada tombol/counter, tanpa render ulang shell sehingga animasi .page tidak terpicu. Status jawaban, ARIA, nomor terjawab dan hitungan tetap diperbarui. Browser Chromium memeriksa alur sampai menyimak, susunan vertikal tanpa overflow dan ketiadaan kontrol transkrip. Uji otomatis memeriksa tidak ada redraw, jawaban dapat diganti dan tersimpan, serta regresi navigasi/penilaian.

## Ilustrasi raster dan area ujian penuh

Seluruh 30 soal bergambar kini menggunakan 23 PNG asli, bukan lima SVG gestur generik. Manifest `prototipe-simulasi/scene-images.js` memetakan ID soal ke berkas/alt; prompt dan mode built-in ImageGen di `data/SIMULATION_SCENE_PROMPTS.json`. Renderer bersama memakai img; wrapper tertanam memberi prefix aset yang benar. Aset asli tetap beresolusi tinggi dan dipakai ulang hanya pada situasi sama. Caption generik yang dapat menyesatkan dihapus.

Kelas body `simulation-exam` menghilangkan max-width/padding luar khusus ujian. Header/isi/footer mengikuti seluruh area konten; bingkai kartu luar dan celah atas dihapus. Padding baca dalam tetap ada; sidebar desktop dan navigasi utama mobile dipertahankan. Tes mencakup 30 mapping/23 PNG, file dan resolusi, pemuatan manifest serta regresi sesi/navigasi. Browser Chromium memuat PNG rak buku dan mengonfirmasi lebar/padding; Android fisik belum diuji.
