# Memelihara Kaiwa N4

Sumber penyuntingan: scripts/build-kaiwa-n4.py (dialog, dua pengecoh dengan alasan, tujuan balasan, catatan dan metadata sumber). Peta PDF: data/kaiwa-sources/index.json.

Bangun ulang dengan `PYTHONDONTWRITEBYTECODE=1 python3 scripts/build-kaiwa-n4.py`, lalu jalankan `node tests/kaiwa-n4.test.cjs`. Compiler hanya menggunakan pustaka bawaan Python. Ia menghasilkan data/kaiwa-n4.json, dist/kaiwa-n4-data.js dan scripts/voice-v3/kaiwa-n4-manifest.json. Jangan mengubah JSON/browser saja karena akan tertimpa saat build.

Rencana rekaman tanpa biaya/API: `node scripts/voice-v3/generate.cjs kaiwa-n4 --dry-run`. Perintah itu tidak menghasilkan MP3. Aplikasi memakai TTS perangkat sampai rekaman selesai diimpor melalui pembaruan tersendiri; jangan mengubah audioMode ke rekaman sebelum MP3 tersedia dan tervalidasi.

Jaga N5 terpisah. Jangan mengubah naskah/manifest/rekaman N5 untuk menambah N4. Label, route, menu dan sumber data harus mengikuti level aktif. Jika mengubah kalimat Jepang N4 kelak, sesuaikan manifest dan buat ulang rekaman terkait.
