# Audio Cerita Lanjutan — Termux

Enam cerita baru, masing-masing 12 kalimat: `bento`, `neko`, `toshokan`, `kikimimi`, `nezumi`, `hanasaka`. Total **72 MP3 baru**. Dua cerita lama beserta 21 MP3 di web tetap dipertahankan.

## Menjalankan paket unduhan

```bash
pkg install nodejs curl python unzip
termux-setup-storage
cd ~
unzip ~/storage/downloads/dex-gaku-cerita-lanjutan-termux.zip
cd dex-gaku-cerita-lanjutan
bash scripts/termux-cerita-lanjutan.sh
```

Skrip meminta API key tersembunyi. Tempel key di Termux dan tekan Enter; key tidak disimpan ke file. Generator memakai kuota ElevenLabs akunmu. Default voice ID sesuai pilihan terakhir: `r1KmysJdVYZjJCm4mL3b`, model `eleven_multilingual_v2`, kecepatan 0.85.

Untuk mengganti voice sebelum membuat MP3:

```bash
export CERITA_VOICE_ID='VOICE_ID_PILIHANMU'
bash scripts/termux-cerita-lanjutan.sh
```

Berkas yang sudah ada dilewati. Jika proses terputus, jalankan kembali perintah yang sama. Mengubah voice tidak menimpa MP3 lama: pindahkan berkas yang ingin dibuat ulang lebih dahulu.

Hasil akhir:

```bash
cp cerita-audio-lanjutan.zip ~/storage/downloads/
```

Kirim `cerita-audio-lanjutan.zip` untuk dipasang ke web. ZIP berisi hanya 72 MP3 baru bernama ID-1.mp3 sampai ID-12.mp3, tanpa API key atau gambar. Skrip pengemas menolak hasil jika ada berkas yang belum lengkap.

## Pemeriksaan tanpa API

```bash
for id in bento neko toshokan kikimimi nezumi hanasaka; do
  bash scripts/generate-cerita-audio.sh --dry-run "$id"
done
node tests/cerita.test.cjs
```

Skrip membaca `cerita-data.js`, `cerita-dongeng.js` dan `cerita-tambahan.js`. Nomor audio berurutan lintas bab untuk setiap buku. Audio baru belum dibuat di server; sebelum unggahan MP3, pembaca memakai fallback perangkat jika file tidak ditemukan. Paket adalah modul Cerita, bukan salinan seluruh web; integrasi navigasi dan Riwayat sudah tersedia di web utama.
