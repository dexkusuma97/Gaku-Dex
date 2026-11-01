# Kaiwa N5 — Audit 25, 1 November 2026

## Cakupan dan hasil

Semua 16 skenario, 136 baris utama dan 136 pilihan salah ditinjau internal pada naskah, romaji, arti, alur dan umpan balik. Metadata identitas pemain ditambahkan untuk seluruh skenario. 45 baris mendapat perubahan arti/romaji/penjelasan pilihan/catatan, tanpa perubahan kalimat Jepang utama.

- Rutinitas Harian, Mengajak Teman, Izin & Minta Tolong, Telepon: naskah menyebut Adi; label pemain “Kamu”, avatar K. Nama Ryota tidak ditempelkan pada balasannya.
- Dua belas skenario lain: naskah menyebut Ryota atau tidak menyebut nama; label “Ryota”, avatar R. Tidak ada akhiran “· Kamu/· Aku”. Label tidak disimpulkan dari nama pada pilihan salah.
- 18 penjelasan pilihan pada 17 baris yang salah menyebut lawan bicara Ryota diperbaiki menjadi Hori sesuai tokoh/suara perempuan yang dipakai.
- Nama Adi pada pengecoh di skenario beridentitas Ryota disesuaikan menjadi Ryota; pengecoh itu tidak memiliki rekaman.
- 14 arti diperjelas, termasuk いただきます sebagai ucapan sebelum makan, おまたせしました, penyerahan uang/barang, tidur awal, waktu 午後 sesuai janji pukul 14.00, dan かえります pada telepon sebagai kembali ke sekolah (bukan meninggalkan sekolah).
- Empat romaji dirapikan pemisahan katanya. 19 catatan singkat ditampilkan hanya di bagian arti yang dibuka, tanpa menambah panel belajar baru. Ungkapan sopan/〜たら/〜おわる dipahami sebagai ungkapan utuh; pembahasan bentuknya dapat diperdalam di N4.

## Rujukan pemeriksaan

Dialog aplikasi tetap adaptasi yang sudah ada, bukan salinan dialog baru dari sumber berikut.

- Japan Foundation, Marugoto indeks kosakata Indonesia: https://marugoto.jpf.go.jp/assets/docs/download/elementary2_a/MarugotoElementary2ActivitiesVocabularyIndex_ID.pdf — いただきます diucapkan sebelum makan.
- Agency for Cultural Affairs (Bunka-cho), contoh kegiatan kurikulum: https://www.bunka.go.jp/seisaku/kokugo_nihongo/kyoiku/nihongo_curriculum/pdf/curriculum_kyouzai.pdf — contoh telepon memakai 帰ります dengan janji menelepon kembali pada waktu kepulangan/kembali. Dalam skenario sekolah ini, arti diperjelas sesuai tempat pembicaraan.
- Penggunaan salam sebelum/sesudah makan: https://www.bunka.go.jp/seisaku/kokugo_nihongo/kyoiku/china_kikokusha/pdf/seikatsu_02/seikatsu_02_all.pdf

## Validasi dan batas

48 berkas tes lulus, termasuk seluruh latihan Kaiwa, dua mode, label/identitas, catatan tersembunyi, jawaban salah/coba lagi, penyelesaian sekali, urutan audio, penghentian, fallback TTS, navigasi, riwayat, dan regresi seluruh modul sebelumnya. Seluruh 136 kalimat Jepang utama serta gender/audioId cocok dengan manifest generasi rekaman; ukuran/hash/durasi 136 MP3 cocok dengan catatan impor terdahulu. Tidak mengganti suara atau teks yang dibacakan.

Pemeriksaan rekaman di batch ini berupa pemetaan naskah dan integritas berkas, bukan mendengarkan atau transkripsi akustik 136 rekaman. Belum telaah pengajar eksternal/Android fisik. Percobaan pratinjau browser lokal terhalang ERR_BLOCKED_BY_CLIENT; tampilan diverifikasi melalui tes renderer, bukan screenshot browser baru.

Paket 25 kumulatif mencakup 1–24. Pemasang memeriksa konflik, mencadangkan dan memulihkan jika tes gagal; tidak melakukan commit/push/deploy. Bank Bunpo N4 paket 24 dipertahankan.
