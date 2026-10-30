# Kaiwa N5 — DeX Gaku

Catatan awal (digantikan pembaruan referensi 29 Oktober di bawah): sepuluh skenario, masing-masing delapan kalimat (empat giliran pemain): `jiko` (Perkenalan/Ryota), `kai` (Belanja/Hori), `resu` (Restoran/Hori), `michi` (Tanya Jalan/Ryota), `densha` (Kereta & Waktu/Hori), `nichi` (Rutinitas Harian/Ryota), `yaku` (Mengajak Teman/Hori), `kyoka` (Izin & Minta Tolong/Ryota), `denwa` (Telepon/Hori), `kansou` (Cerita Liburan/Ryota). Pemain berperan sebagai Adi; baris pemain memakai suara pria. Tidak ada permintaan mikrofon atau backend.

## Berkas lengkap

- `dist/kaiwa-data.js`: semua skenario, kana, romaji, terjemahan dan dua pengecoh per balasan.
- `dist/kaiwa-render.js`: dua mode, bubble dengan arti tersembunyi, latihan berurutan, pengacakan, coba lagi, selesai/ulangi/menu, pemutar tunggal dan fallback TTS.
- `dist/kaiwa.css`: gaya pixel scoped, DotGothic16 untuk UI, Noto Sans JP untuk Jepang, tema gelap, fokus keyboard dan reduced motion.
- `scripts/generate-kaiwa-audio.sh`: membuat MP3; key hanya dari lingkungan terminal.

Integrasi terbatas di index.html (CSS/script, renderer, lifecycle audio) dan navigation.js (snapshot Kaiwa untuk Back). Tidak mengubah isi modul Kana/Kanji/Kotoba/Bunpo/Quiz/Simulasi. Skenario disimpan di browser history; Back dari obrolan menuju daftar skenario, lalu kembali ke halaman induk. Reload membuka ulang awal skenario, bukan menyimpan jawaban latihan. Latihan yang selesai tercatat di Riwayat lokal.

## Menambah skenario

Tambahkan objek baru ke `window.GAKU_KAIWA_DATA` di `dist/kaiwa-data.js`:

```js
{
  id: 'eki', ic: '▣', judul: 'Di stasiun', sub: 'Tanyakan tujuan kereta.',
  npc: 'Hori', gender: 'female',
  lines: [
    { who: 'npc', jp: 'どこへ いきますか。', rom: 'Doko e ikimasu ka.', id: 'Mau pergi ke mana?' },
    { who: 'me', jp: 'とうきょうへ いきます。', rom: 'Tōkyō e ikimasu.', id: 'Saya pergi ke Tokyo.',
      salah: [
        { jp: 'さんびゃくえんです。', why: 'Ini menyebut harga. Pertanyaannya tentang tujuan perjalanan.' },
        { jp: 'パンを たべます。', why: 'Ini menyebut kegiatan makan. Sebutkan tempat tujuanmu.' }
      ] }
  ]
}
```

ID wajib unik, hanya huruf kecil/angka/tanda `-`. `ic` adalah ikon teks. `gender` menentukan suara NPC pada skrip audio (`male` atau `female`). Setiap baris memiliki `jp`, `rom`, `id` (arti Indonesia); setiap `who: 'me'` memiliki tepat dua `salah`, dengan `jp` dan `why`. Gunakan jawaban salah yang tidak ambigu. Urutan audio selalu mengikuti indeks baris, termasuk NPC dan pemain, mulai dari 1. Kalau urutan/teks berubah, hapus MP3 terkait sebelum membuat ulang; skrip melewati file yang sudah ada.

## Membuat MP3

Perlu Bash, Node.js dan curl (bisa melalui Termux). Jalankan dari folder proyek:

```bash
# Periksa daftar tanpa key dan tanpa membuat permintaan API
bash scripts/generate-kaiwa-audio.sh --dry-run eki

# Masukkan key tanpa menampilkannya atau menyimpannya ke source
read -r -s -p 'ElevenLabs API key: ' ELEVENLABS_API_KEY
printf '\n'
export ELEVENLABS_API_KEY

# Satu skenario baru
bash scripts/generate-kaiwa-audio.sh eki

# Atau seluruh skenario
bash scripts/generate-kaiwa-audio.sh all
unset ELEVENLABS_API_KEY
```

Hasil: `dist/assets/kaiwa/eki-1.mp3`, `eki-2.mp3`, dst. Endpoint resmi: `POST https://api.elevenlabs.io/v1/text-to-speech/{voice_id}?output_format=mp3_44100_128`, header `xi-api-key`, model `eleven_multilingual_v2`. Hori: `3321Alera3fXjEWjjbAX`; Ryota dan pemain: `Bj4Malc5SZLoXfPtxRxH`. Akses voice ID bergantung pada akun ElevenLabs; skrip melaporkan GAGAL dengan HTTP code dan tidak menyimpan respons error sebagai MP3. Permintaan API memakai kuota ElevenLabs milik pemilik key.

Dokumentasi API: https://elevenlabs.io/docs/api-reference/text-to-speech/convert

Seluruh 80 MP3 telah terpasang dari unggahan terbaru. Dua puluh klip NPC Ryota berbeda dari unggahan sebelumnya dan telah diganti sesuai berkas pengguna. Voice ID asal audio unggahan tidak tercantum dalam ZIP; skrip generator tetap memakai konfigurasi ID yang diberikan sebelumnya. Pemutar menggunakan MP3 lebih dahulu; `speechSynthesis` ja-JP tetap menjadi cadangan bila audio gagal dimuat. Nama/gender suara cadangan mengikuti perangkat. Kegagalan atau pembatalan menghentikan antrean Putar semua; pindah mode/skenario/menu menghentikan audio aktif.

## Pemeriksaan

`node tests/kaiwa.test.cjs` memeriksa data, urutan latihan, percobaan salah tanpa redraw, guard ketukan ganda, selesai satu kali, fallback preferensi suara, urutan playlist, pembatalan/pembersihan. Skrip diuji dry-run serta shell syntax; tidak memanggil API berbayar tanpa key.

## Menjalankan modul secara terpisah

Di dalam folder `dist`, buat HTML ini lalu buka melalui server statis:

```html
<!doctype html>
<html lang="id">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Kaiwa DeX Gaku</title>
<style>:root{--ink:#263d32;--paper:#fff;--line:#e7ebe2}body{margin:0;padding:20px;background:#f8f9f4}button{cursor:pointer}</style>
<link rel="stylesheet" href="kaiwa.css">
<main id="app"></main>
<script src="kaiwa-data.js"></script>
<script src="kaiwa-render.js"></script>
<script>document.getElementById('app').innerHTML=GakuKaiwa.screen();GakuKaiwa.sync(true);</script>
</html>
```

Untuk web DeX Gaku utama, wiring sudah terpasang; tidak perlu menambahkan HTML ini.

## Alur Termux → ElevenLabs → Codex

```bash
bash scripts/generate-kaiwa-audio.sh --dry-run all   # harus menampilkan 80 RENCANA
read -r -s -p 'ElevenLabs API key: ' ELEVENLABS_API_KEY; printf '\n'; export ELEVENLABS_API_KEY
bash scripts/generate-kaiwa-audio.sh all             # 80 MP3, memakai kuota akunmu
unset ELEVENLABS_API_KEY
bash scripts/package-kaiwa-audio.sh                  # hasil: kaiwa-audio.zip
```

Serahkan `kaiwa-audio.zip` ke Codex agar diekstrak ke `dist/assets/kaiwa/`. Skenario denwa baris 4 diubah (tanpa しつれいします) agar percakapan lanjut; hapus MP3 `denwa-*` lama bila ada.

## Cara tercepat di Termux

```bash
termux-setup-storage            # sekali saja, izinkan akses penyimpanan
cd ~ && unzip -o ~/storage/downloads/dex-gaku-kaiwa-v2.zip -d dex-gaku && cd dex-gaku
bash scripts/termux-run.sh
```


## Pembaruan 29 Oktober 2026

Kode v2 terpasang: 10 skenario × 8 kalimat, 40 balasan pemain. Seluruh 80 nama audio sesuai ID/urutan data, byte sama dengan ZIP terbaru dan terbaca oleh ffprobe sebagai MP3 berdurasi positif. Tes kaiwa.test.cjs, kaiwa-navigation.test.cjs, dan kaiwa-audio.test.cjs lulus.


## Persona suara — pembaruan jiko-4

Label dan avatar menggunakan satu pemetaan berdasarkan gender rekaman: wanita = Hori (H), pria = Ryota (R). Konfigurasi saat ini: NPC Hori/wanita pada seluruh skenario, pemain Ryota/pria. Bubble pemain berlabel “Ryota · Kamu”; nama yang diucapkan dalam naskah dialog tetap merupakan tokoh cerita. `line.gender` opsional mengesampingkan gender bawaan per kalimat. Renderer, preferensi TTS, dan skrip generator memakai aturan gender yang sama. File `jiko-4.mp3` diganti persis dari ZIP terbaru; 79 MP3 lain sama. Tes memastikan nama/inisial tetap mengikuti gender meskipun posisi bubble atau nama NPC di data berbeda.


## 29 Oktober 2026 — Perluasan dari referensi percakapan

Versi aktif: **16 skenario, 136 kalimat, 68 balasan latihan**. Perkenalan (`jiko`) diganti dialog adaptasi 16 kalimat: salam, nama, status pelajar, umur 21 tahun, kesukaan, tempat tinggal dan perpisahan. Enam skenario baru masing-masing delapan kalimat:

| ID | Judul | Referensi tema |
| --- | --- | --- |
| shusshin | Asal & Tempat Tinggal | Schoters |
| teinei | Berkenalan dengan Senior | Schoters |
| tomodachi | Teman Lama | LBI FIB UI |
| aisatsu | Sapaan Sehari-hari | Schoters |
| uchi | Berangkat & Pulang | Schoters |
| shokuji | Salam saat Makan | Schoters |

Referensi dibaca 29 Oktober 2026:
- https://blog.schoters.com/percakapan-bahasa-jepang
- https://lbifib.ui.ac.id/id/blog/artikel/percakapan-bahasa-jepang-tentang-teman

Dialog ditulis ulang untuk pembelajaran, bukan salinan artikel. Tokoh baru diselaraskan dengan persona Hori/H (wanita) dan Ryota/R (pria). Tema perkenalan teman baru dari LBI menjadi pengganti, bukan duplikat kartu Perkenalan. Susunan, lokasi, umur, hobi dan ungkapan disesuaikan; Jepang, romaji dan arti dicek agar selaras. Ungkapan lebih lanjut seperti `〜と もうします` diperkenalkan lewat arti, bukan klaim seluruh kata hanya N5. Tanya umur dibuka dengan `しつれいですが`; umur adalah informasi pribadi dan pertanyaannya opsional dalam percakapan nyata.

### Audio menyusul

72 MP3 tetap aktif untuk sembilan skenario lama yang tidak berubah. Semua 80 file lama dipertahankan byte aslinya, tetapi delapan `jiko-N.mp3` tidak lagi dirujuk oleh dialog baru. Perkenalan menggunakan `audioId: 'kenalan'` sehingga menunggu `kenalan-1.mp3`–`kenalan-16.mp3`; kartu dan riwayat tetap memakai ID `jiko`. Renderer dan generator sama-sama menghormati `audioId || id`.

64 kalimat baru ditandai `audioPending: true`. Selagi MP3 belum tersedia, pemutar memakai fallback Jepang perangkat, dengan preferensi gender mengikuti suara yang dipasang di perangkat. Tidak menjalankan API berbayar. Ketika MP3 dengan nama yang tepat dipasang nanti, pemutar otomatis mendahulukannya tanpa perlu mengganti kode. Metadata pending dan tes cakupan diperbarui pada saat pemasangan.

`data/kaiwa-audio-pending.json` berisi 64 nama file, teks Jepang dan gender yang harus direkam. Generator menerima ID menu: `bash scripts/generate-kaiwa-audio.sh --dry-run jiko` menghasilkan nama `kenalan-N.mp3`, bukan `jiko-N.mp3`. Enam ID baru sama dengan prefix audio masing-masing. Sembilan skenario lama tidak diubah. Modul lain dan CSS tidak diubah.


## 29 Oktober 2026 — 64 MP3 tambahan terpasang

Unggahan `kaiwa-audio-baru.zip` tepat berisi 64 nama sesuai `data/kaiwa-audio-pending.json` (manifest rekaman dipertahankan sebagai acuan walaupun sudah tidak pending). Semua MP3 sudah dipasang, lolos ffprobe dan decode penuh ffmpeg; total durasi 156,45 detik. Tidak mengklaim audit pelafalan atau gender dari mendengarkan seluruh rekaman.

Seluruh 136 kalimat aktif dari 16 skenario kini memiliki MP3. Tujuh penanda `audioPending` dibersihkan. Delapan `jiko-N.mp3` lama tetap disimpan tetapi tidak dirujuk; Perkenalan memakai `kenalan-N.mp3`. Semua aset yang sudah ada terbukti tidak berubah lewat SHA256. Renderer tetap mendahulukan MP3; fallback perangkat berlaku jika pemutaran gagal sesuai perilaku sebelumnya. Tes cakupan audio kini mewajibkan lengkap 136 file aktif dan memeriksa 144 file fisik termasuk delapan arsip.


## Voice pengganti 30 Oktober 2026
Kaiwa hanya memakai pria Bj4Malc5SZLoXfPtxRxH dan wanita 3321Alera3fXjEWjjbAX. Paket scripts/voice-v3 menyiapkan ulang 136 baris aktif dengan gender/audioId yang sama. MP3 yang sudah terpasang masih rekaman sebelumnya sampai hasil baru diimpor. Tidak memakai kuota ElevenLabs saat menyiapkan skrip. Gunakan paket dex-audio-voice-baru.zip dengan folder baru, bukan generator lama yang melewati MP3 yang sudah ada.


## Pengganti voice sudah diimpor (30 Oktober 2026)
Seluruh 136 MP3 aktif ditimpa dengan hasil ZIP baru pengguna; 136/136 byte berbeda dari rekaman sebelumnya. Delapan rekaman jiko lama yang tidak aktif dipertahankan. Catatan validasi SHA/durasi di data/voice-v3-import-20261030.json. Tidak ada perubahan naskah/gender/label karakter atau audio Cerita. Identitas voice mengikuti konfigurasi pengguna, bukan inferensi metadata MP3.
