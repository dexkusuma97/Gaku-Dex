# Audio simulasi bergantian

222 soal menyimak / 487 giliran suara, 129 dialog, pada 12 paket JLPT N5 & JFT latihan A1. Manifest diturunkan dari teks bank soal. Label 女/男/先生/店員/客/母/子/受付/学生 dipisahkan menjadi metadata dan tidak dikirim ke TTS; teks ucapan serta kunci soal dipertahankan.

Pemutar dist/prototipe-simulasi/audio-engine.js dipakai oleh app.js dan modul native yang dihasilkan build-embedded-simulation.py. MP3: assets/simulasi/{id-soal}.mp3. Jika 404/410, perangkat mengucapkan setiap giliran tanpa label; memilih suara pria/wanita bila tersedia. Jika hanya satu suara Jepang tersedia, perbedaan gender suara asli tidak dapat dijamin; pitch dibedakan sebagai cadangan. Error jaringan atau MP3 yang ada tetapi rusak tidak diam-diam diganti TTS. Pembatalan menghentikan audio dan mengabaikan callback lama. Satu dialog dihitung sekali, batas dua pemutaran JFT tetap.

Generator scripts/simulasi-audio/generate.cjs membuat tiap giliran lalu menggabungkannya dengan jeda 0,3 detik ke satu MP3 per soal. Cache mengikuti hash teks, voice, speed, dan model; perubahan voice membuat ulang bagian terkait. Tidak ada panggilan ElevenLabs berbayar saat implementasi. Seluruh 222 MP3 telah dipasang dari simulasi-audio-baru.zip pada 30 Oktober 2026 (144 JLPT N5, 78 JFT latihan A1). Semua nama cocok dengan ID soal. Catatan impor/hash/durasi: import-20261030.json.

Voice pengganti per 30 Oktober 2026: pria xya0RvcJtofTcFTOdX4E, wanita 0ptCJp0xgdabdcpVtCB5, narator GxxMAMfQkDlnqjpzjLHH. ID ini untuk pembuatan ulang; MP3 impor sebelumnya belum diganti sampai pengguna mengirim hasil baru. Guru/siswa/anak/pelanggan tanpa gender eksplisit ditetapkan pemeran pria; toko/受付/ibu wanita. Ini pilihan editorial pemeran saja.

Deliverable simulasi-audio-termux.zip berisi generate.cjs, manifest.json, dua skrip bash dan BACA-DULU.txt. Tanpa API key, framework, atau ketergantungan pada checkout web. Termux membutuhkan nodejs curl ffmpeg unzip zip. Setelah menghasilkan 222 audio, pack-audio.sh membuat simulasi-audio-baru.zip untuk dikirim kembali.

Validasi: semua 222 teks diparsing tanpa hilang ucapan, 487 giliran; tests/simulation-audio.test.cjs menguji MP3-first, fallback missing-only, pemilihan suara, count satu kali, cancellation dan error. Tes prototype menguji integrasi count/JFT-limit/stop saat next. Tes mock generator memeriksa payload tanpa label, ketiga voice, penggabungan FFmpeg (dialog dan monolog), resume, regenerasi saat voice berubah serta ZIP tepat. Regresi navigasi/import/bank/embedded/scenes dan audio Cerita lulus. Tidak mengklaim kualitas suara berbayar atau Android fisik sebelum rekaman pengguna tersedia.


Pemeriksaan impor: CRC ZIP, codec MP3, durasi positif, dan dekode penuh FFmpeg seluruh 222 rekaman lulus; durasi total sekitar 33,5 menit. Hash 954 aset lain tetap sama, termasuk audio Kaiwa/Cerita dan ilustrasi. Tes simulation-recordings, simulation-audio, prototype/embedded/navigation serta regresi audio Cerita/Kaiwa lulus. Tidak mengklaim pemeriksaan dengar setiap kalimat atau verifikasi identitas voice dari metadata MP3.


Paket gabungan scripts/voice-v3 / dex-audio-voice-baru.zip: Kaiwa 136 dan Simulasi 222 MP3 dengan kelima ID baru terkunci. Variabel voice lama diabaikan. Rekaman Cerita dipertahankan. Generator diuji dengan mock HTTP dan FFmpeg; tidak ada API berbayar.


Tes suara: tombol aturan kini memutar assets/simulasi/tes-suara.mp3 lewat player bersama. Manifest v3 menambahkan satu rekaman tes dengan suara narator GxxMAMfQkDlnqjpzjLHH; 222 soal tetap. MP3 tes belum diimpor. Tidak memakai jatah replay ujian dan berhenti saat navigasi.


## Pengganti voice dan tes narator sudah diimpor (30 Oktober 2026)
Seluruh 222 MP3 soal ditimpa dan tes-suara.mp3 ditambahkan: 223/223 byte berbeda/baru. Generator v3 memakai kelima ID terbaru sesuai pengguna; identitas voice tidak diverifikasi dari metadata. Pemeriksaan CRC, kecocokan nama, codec/durasi dan dekode penuh lulus; sekitar 29,3 menit untuk Simulasi dan 7,3 menit untuk Kaiwa. Status menunggu rekaman pada entri sebelumnya adalah riwayat; kedua menu sekarang memakai rekaman pengganti.
