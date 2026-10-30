# Menerima paket 5–6 dari Claude

Kontrak saat ini: JLPT N5 71 soal [21,26,24], latihan JFT A1 50 soal
[13,12,13,12]. Semua paket editorial berstatus `draft`.

## Validasi sebelum memasukkan data

Simpan keluaran Claude sebagai JSON asli, satu objek paket per file. Jangan
menjalankan JavaScript/HTML/shell yang diberikan sebagai pengganti JSON.

```bash
node scripts/validate-simulation-import.cjs /path/jlpt-n5-05.json
```

Boleh memeriksa beberapa file sekaligus; urutan file tidak mengubah hasil:

```bash
node scripts/validate-simulation-import.cjs /path/jlpt-n5-05.json /path/jlpt-n5-06.json /path/jft-a1-05.json /path/jft-a1-06.json
```

Perintah hanya membaca dan memeriksa. Tidak mengganti bank aplikasi, mengaktifkan
paket, mengirim data, atau memublikasikan situs. Exit0 berarti struktur lulus,
exit1 berarti ditolak, exit2 berarti argumen file belum diberikan.

Pemeriksaan: JSON biasa maksimal10MiB/file, hanya nomor5–6; identitas/level dan
nomor urut ID, jumlah bagian/soal, field yang diizinkan, rentang kunci, opsi unik
setelah normalisasi, pasangan tag underline aman, naskah audio/transkrip yang
sepadan, passage JFT, scene yang didukung, tanpa field pembahasan. Duplikat
fingerprint lengkap dan ID diperiksa terhadap paket1–4 serta seluruh kiriman.

Pemeriksaan ini TIDAK dapat membuktikan kunci bahasa Jepang benar, hanya satu
penafsiran yang sah, kesulitan A1/N5, kelayakan gambar, mutu/kecepatan audio,
atau semua soal yang mirip secara makna. Semua itu tetap perlu peninjauan isi.

## Sesudah struktur lulus

1. Audit kunci dan seluruh opsi, baca naskah/paragraf. Periksa susunan ★ secara
   utuh dan pengecualian waktu/kondisi; temukan jawaban alternatif yang sah.
2. Cocokkan subjenis dengan blueprint prompt; pemeriksaan otomatis section
   tidak mengidentifikasi subjenis semantik setiap soal.
3. Tinjau tingkat bahasa bersama pengajar/penutur Jepang, lalu produksi dan
   periksa rekaman audio; TTS prototipe bukan sertifikasi pelafalan.
4. Integrasikan JSON yang sudah ditinjau sebagai aset data tepercaya dengan
   wrapper yang sama seperti bank lain, lalu daftarkan script sebelum app.js.
   Jangan mencampurkan skrip yang dikirim Claude secara langsung.
5. Saat isi/opsi/kunci bank yang ada berubah, perbarui BANK_REVISION dalam
   app.js agar jawaban sesi lama tidak dinilai memakai opsi baru.
6. Perbarui ekspektasi jumlah paket pada pengujian sesuai kiriman yang memang
   sudah diterima. Jika semua paket1–6 lengkap:12paket/726soal, bukan8/484.
7. Jalankan contract, suite bank dan suite UI; periksa alur browser untuk paket
   baru. Ekspor ulang JSON referensi/ZIP; update STATUS.md; baru publikasikan.

Paket 5–6 sudah diterima, dikoreksi pada 20 soal, dan diaktifkan pada pembaruan 28 Oktober 2026. Lihat SIMULATION_AUDIT_CLAUDE_56.md. Validator tetap memakai paket 1–4 sebagai pembanding agar kiriman 5–6 dapat diperiksa ulang tanpa menduplikasi bank yang sudah terpasang. ZIP acuan Claude tetap snapshot paket 1–4 saat penugasan; JSON hasil koreksi 5–6 tersedia terpisah.
