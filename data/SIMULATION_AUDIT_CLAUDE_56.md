# Audit paket Claude 5–6 — 28 Oktober 2026

Keempat JSON diperiksa: 2 × 71 soal JLPT N5 dan 2 × 50 soal JFT latihan A1, total 242 soal. Struktur lulus sebelum koreksi. Peninjauan editorial mencakup teks soal, semua opsi, kunci, bacaan, naskah audio, dan susunan bintang. Sebanyak 20 soal direvisi (21 catatan, karena satu soal diselaraskan dalam dua langkah).

| ID | Perbaikan |
|---|---|
| n5-p05-011 | Kolokasi alami: hujan deras memakai つよい, bukan おおきい. |
| n5-p05-018 | Hilangkan pilihan aktivitas lain yang juga dapat dilakukan di laut. |
| n5-p05-034 | Rantai kepemilikan bisa dibalik dan membuat posisi bintang ambigu. |
| n5-p05-036 | Urutan makan dan mencuci muka dapat dibalik; ganti dengan rangkaian yang tunggal. |
| n5-p05-058 | Pertanyaan saudara bisa mencakup pembicara; sebutkan eksplisit tidak menghitung dirinya. |
| n5-p06-035 | Susunan asli kehilangan penghubung dan posisi bintang ambigu. |
| n5-p06-036 | Dua pesanan bisa ditukar urutannya sehingga bintang tidak tunggal. |
| n5-p06-042 | Nama pengirim りさ, bukan り. |
| n5-p06-045 | さきしゅうまつ salah tulis; gunakan せんしゅうの しゅうまつ. |
| n5-p06-059 | Tidak menyimpulkan kegiatan terakhir sebelum tidur yang tidak dinyatakan. |
| n5-p06-059 | Selaraskan pertanyaan audio dengan fokus kegiatan setelah telepon. |
| jft-a1-p05-019 | Pilihan bentuk lampau juga bisa menjadi jawaban alami; ganti dengan lokasi yang salah. |
| jft-a1-p05-025 | いきたいです juga cocok sebagai penolakan tidak langsung; hilangkan jawaban alternatif. |
| jft-a1-p05-031 | Pertanyaan status pekerjaan, bukan aksi saat ini. |
| jft-a1-p05-037 | Membuka halaman buku menggunakan ひらく; sebutkan buku, bukan halaman kosong di notebook. |
| jft-a1-p05-038 | Kotak juga diminta pelanggan; tanyakan tambahan sesudah permintaan kotak. |
| jft-a1-p05-039 | Surat baru menyatakan keinginan Yuta, belum kesepakatan dua orang. |
| jft-a1-p06-005 | Anak dan guru juga dapat perempuan; opsi tidak saling tumpang tindih. |
| jft-a1-p06-033 | Perjelas yang berubah adalah peron keberangkatan, bukan kereta itu sendiri. |
| jft-a1-p06-034 | Porsi nasi lebih alami memakai おおい／すくない. |
| jft-a1-p06-041 | Jawaban asli dapat berarti tidak ada bus sama sekali pada Minggu. |

Perubahan rinci sebelum/sesudah: `SIMULATION_CLAUDE_56_REVISIONS.json`. JSON hasil koreksi berada di `dist/prototipe-simulasi/authoring/paket-5-6/`; wrapper runtime: `bank-packs-56.js`. Soal lama tidak diganti. Tidak ditemukan soal identik lengkap dari fingerprint teks, bacaan/audio dan opsi di 726 soal; kemiripan tema/kompetensi antar paket masih wajar dan tidak dianggap bukti variasi kesulitan yang setara.

Bank ini dapat dicoba sebagai latihan draf. Audit ini bukan sertifikasi guru/penutur asli, kalibrasi CEFR, atau jaminan setara ujian resmi. Audio masih TTS perangkat; kualitas rekaman dan pelafalan belum diaudit oleh manusia.
