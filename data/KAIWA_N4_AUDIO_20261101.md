# Rekaman Kaiwa N4 — Paket 27, 1 November 2026

144 MP3 dari kaiwa-n4-audio.zip pengguna dipasang tanpa pengubahan byte ke dist/assets/kaiwa-n4/. Mencakup 18 skenario × delapan baris; total durasi 618.11 detik (sekitar 10 menit 18 detik). Setiap file berdurasi sekitar 1,99–9,01 detik.

Nama berkas tepat sama dengan manifest generasi, tidak ada duplikat, file hilang atau file tambahan. Semua berkas didekode penuh melalui ffmpeg dengan -xerror, teridentifikasi MP3 melalui ffprobe, berdurasi positif dan memiliki mean_volume di atas -60 dB (tidak senyap/nyaris senyap menurut pemeriksaan ini). Ukuran, SHA-256, durasi, sample rate, kanal dan volume setiap file dicatat dalam kaiwa-n4-audio-import-20261101.json.

Kalimat Jepang dan peran suara yang diharapkan ditautkan dari manifest generasi. Pengguna menetapkan Hori: 3321Alera3fXjEWjjbAX; Adi/Ryota: Bj4Malc5SZLoXfPtxRxH. Ini pencocokan naskah/metadata, bukan transkripsi akustik atau bukti identitas suara dari MP3. Belum mendengarkan 144 rekaman satu per satu atau memeriksa pelafalan/intonasi melalui pengajar.

Aplikasi N4 memutar MP3 terlebih dahulu dari folder tersendiri. Jika pemutaran gagal, fallback TTS memakai kalimat Jepang yang sama. Antrean Putar semua, stop, pindah halaman dan pembatalan tetap berlaku. Keterangan suara perangkat di halaman tidak ditampilkan untuk skenario yang rekamannya sudah aktif. N5 tetap memakai folder/rekaman sebelumnya dan tidak muncul pada menu N4.

Compiler mempertahankan mode recorded selama naskah/peran cocok dengan catatan impor dan hash file benar. Jika naskah suatu skenario diubah, skenario itu kembali ke TTS perangkat agar rekaman lama tidak membacakan teks berbeda. Perubahan skrip di masa depan membutuhkan rekaman baru agar MP3 skenario terkait aktif kembali.

50 berkas tes lulus: semua hash/ukuran/signature, pemetaan 144 naskah, kunci dan latihan, prioritas MP3, fallback, antrean, stop, isolasi N5/N4, rebuild stabil dan penjagaan terhadap naskah yang berubah, serta regresi seluruh modul sebelumnya. Belum uji browser/Android fisik baru. Pemeriksaan decode/volume bukan jaminan pelafalan atau keutuhan linguistik setiap rekaman.

Paket kumulatif mencakup 1–26. Tidak membuat rekaman baru atau memakai API/kuota ElevenLabs. Pemasang memeriksa konflik, backup dan rollback; tidak melakukan commit/push/deploy otomatis.
