# Suara simulasi N4 dan JFT A2 — Paket 1–6

Skrip ini memproses naskah Jepang kanonis. Paket 5–6 berisi 82 MP3 (202 giliran suara; 4.586 karakter sebelum pemanfaatan cache). Seluruh Paket 1–6 berisi 246 MP3. Audio asli belum dibuat dalam paket pembaruan ini. Pemanggilan API memakai kuota akun ElevenLabs saat Anda menjalankan generator.

Pengaturan suara mengikuti skrip simulasi lama:

| Peran | Voice ID |
| --- | --- |
| Wanita | `0ptCJp0xgdabdcpVtCB5` |
| Pria | `xya0RvcJtofTcFTOdX4E` |
| Narator | `GxxMAMfQkDlnqjpzjLHH` |

Model: `eleven_multilingual_v2`, MP3 44,1 kHz/128 kbps, kecepatan 0,85. Ini adalah pengaturan simulasi, terpisah dari pengaturan Kaiwa. Dialog baru tidak membutuhkan tokoh ketiga. Label `女:`, `男:`, dan `Narrator:` dipisahkan sebelum teks dikirim, sehingga tidak dibacakan. API key tidak ditulis ke file, log, maupun argumen proses curl. Jangan kirim API key ke chat.

## Persiapan

Pasang Paket 38 terlebih dahulu, lalu:

```bash
pkg install nodejs python curl ffmpeg zip unzip -y
cd ~/dex-gaku-publish
bash scripts/voice-v3/buat-simulasi-n4-a2.sh new --dry-run
```

Dry-run tidak memakai API key dan tidak menghubungi ElevenLabs. Rencana lengkap juga tersedia di `data/SIMULATION_N4_A2_AUDIO_20261103.txt`.

## Rekam Paket 5–6

```bash
cd ~/dex-gaku-publish
read -s -p "API key ElevenLabs: " ELEVENLABS_API_KEY
printf '\n'
export ELEVENLABS_API_KEY
bash scripts/voice-v3/buat-simulasi-n4-a2.sh new
unset ELEVENLABS_API_KEY
```

Gunakan key yang memiliki izin text-to-speech dan akses ke ketiga voice tersebut. Jika proses berhenti karena koneksi, izin, atau kuota, perbaiki penyebabnya lalu jalankan lagi dengan pengaturan yang sama. Giliran yang telah selesai tersimpan di cache. MP3 gabungan yang hash dan pengaturannya cocok dilewati.

Selesai merekam, pasang audio ke web:

```bash
cd ~/dex-gaku-publish
bash scripts/voice-v3/buat-simulasi-n4-a2.sh new --install
```

Pemasang audio memeriksa naskah, hash dan kemampuan decode MP3; menyalin berkas ke `dist/assets/simulasi/`; lalu mendaftarkan ID pada `dist/prototipe-simulasi/recorded-n4-a2.js`. Pertanyaan yang belum didaftarkan tetap memakai TTS perangkat. File script/cache suara tidak perlu di-commit.

Setelah tampil `TERPASANG`, terbitkan rekamannya:

```bash
cd ~/dex-gaku-publish
git add dist/assets/simulasi dist/prototipe-simulasi/recorded-n4-a2.js
git commit -m "Pasang audio simulasi N4 dan JFT A2 paket 5-6"
git -c http.version=HTTP/1.1 push origin main
```

## Pilihan lain

- `new`: empat paket baru 05–06, total 82 MP3 (pilihan bawaan).
- `all`: dua belas paket 01–06, total 246 MP3.
- `jlpt-n4-05`, `jlpt-n4-06`: masing-masing 28 MP3.
- `jft-a2-05`, `jft-a2-06`: masing-masing 13 MP3.

Contoh seluruh Paket 1–6: ganti `new` dengan `all` pada perintah rekam dan `--install`. Gunakan `--pack` untuk mengemas audio yang telah selesai dan cocok dengan pilihan:

```bash
bash scripts/voice-v3/buat-simulasi-n4-a2.sh new --pack
```

ZIP berada di `scripts/voice-v3/simulasi-n4-a2/simulasi-n4-a2-audio-baru.zip`. Berkas sumber MP3 berada pada subfolder `audio/`; cache pada `cache/`. Jangan hapus cache jika ingin melanjutkan tanpa merekam ulang giliran yang berhasil. Mengubah `ELEVENLABS_SPEED` mengubah sidik pengaturan dan dapat memicu pembuatan ulang.

Referensi API: https://elevenlabs.io/docs/api-reference/text-to-speech/convert . Model multilingual_v2 tidak memerlukan parameter `language_code`; teks Jepang dikirim langsung, dengan normalisasi bawaan model.
