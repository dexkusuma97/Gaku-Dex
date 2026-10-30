# Nee Nee, Nene-san — Kisah Bersambung

Sumber isi: naskah Indonesia lengkap yang ditempel pengguna pada 29 Oktober 2026. Bahasa Jepang disusun ulang khusus sebagai adaptasi pembelajaran, bukan ditranskripsi atau direkonstruksi dari manga. Terjemahan Indonesia mengikuti alur naskah pengguna. Atribusi: manga one-shot *Nee Nee, Nene-san* karya Amairo Chu; judul/penulis dicocokkan dengan metadata https://anilist.co/manga/139612/Nee-Nee-Nene-san . Tidak mengambil panel atau terjemahan Sherlock Holmes dari screenshot; gambar tersebut hanya contoh antarmuka pembaca dan rak per bagian.

## Enam bagian

| Bagian | Judul | Blok bacaan | Jeda naratif |
| --- | --- | --- | --- |
| 1 | Makan Malam yang Hangat | 14 | Pertemuan, makanan rumahan, niat awal Rintaro memasak |
| 2 | Pintu yang Tertutup | 16 | Kedekatan, Sabtu, penolakan Natal, pintu terlarang, gadis tersayang |
| 3 | Kamar di Balik Pintu | 13 | Apartemen kosong, pukul dua siang, kamar Nana dan foto |
| 4 | Janji di Meja Makan | 12 | Kilas balik jatuh cinta, lamaran, keluarga, kecelakaan |
| 5 | Sekali Lagi, di Ambang Pintu | 13 | Perspektif Rintaro, kemunculan Nene, membantu ingatan kembali |
| 6 | Makan Bersama, Selamanya | 22 | Pengakuan, alasan Natal, perpisahan, merelakan dan janji keluarga |

90 blok pendek (sebagian berisi lebih dari satu kalimat), 18 pertanyaan opsional. Bagian terakhir lebih panjang karena perpisahan dan penutup dijaga utuh. Sinopsis serta sampul tidak mengungkap akhir cerita. Rak terbaru mengikuti Cerpen → Dongeng → Nee Nee, Nene-san → Nitamono; nama rak `n5` diganti tampilan “Cerpen”, ID internal dan data lama tetap.

Enam kartu menampilkan satu sampul yang sama dengan label/judul masing-masing bagian. Kartu membuka detail buku dengan tombol mulai sesuai bagian pilihan. Pembaca berupa prosa vertikal, furigana, garis warna tingkat, terjemahan/bantuan per blok, ukuran huruf dan menu bagian. Lanjut/sebelumnya mengganti rute pembaca, bukan menumpuk setiap bagian pada riwayat. Latihan opsional berada setelah bacaan agar tidak memutus suasana; sesudah latihan ada lanjut bagian juga. Kredit terlihat pada detail dan setelah TAMAT. Render seluler mengikuti CSS pembaca yang sudah ada, tanpa blink.

## Bahasa

N4–N3 terbimbing, dengan beberapa kosakata sastra di luar rentang itu (misalnya 幻 dan 幽霊). Bukan klaim bacaan seluruhnya setara N5 atau daftar JLPT resmi. Seluruh kanji diberi furigana manual. Label warna hanya panduan belajar. Setiap blok memiliki satu penjelasan ungkapan/pola yang relevan dan arti Indonesia; kuis hanya bertanya kejadian yang sudah dibaca, tanpa spoiler bagian selanjutnya.

Rak Nene kini memakai ID `nene`. Label umum Kisah Bersambung sudah dihapus dari UI pada pembaruan berikutnya; pemulihan rute lama tetap didukung.

## Audio

MP3 Nene belum dibuat. `nene-1.mp3` sampai `nene-90.mp3` memakai nomor global berlanjut antarbagian. Manifest: `data/nene-audio-manifest.json`. Generator Cerita memuat `cerita-bersambung.js`; `bash scripts/generate-cerita-audio.sh --dry-run nene` menghasilkan tepat 90 RENCANA. Voice narator mengikuti konfigurasi Cerita pengguna. Tidak memanggil API berbayar. Pemutar mencoba MP3, lalu fallback suara perangkat hanya ketika file tidak ditemukan (404/410), mempertahankan perilaku Cerita sebelumnya.

## Sampul dan validasi

`dist/assets/cerita/cover-nene.webp`: 600×900, 70.766 byte, sampul original via built-in ImageGen; prompt di `data/NENE_IMAGE_PROMPT.json`. Ilustrasi tidak meniru panel manga dan tidak memperlihatkan twist.

Tes: validasi sembilan buku, semua token/furigana, enam bagian/90 blok, 18 kuis dengan empat opsi unik, enam kartu dan urutan rak, pilihan bagian, hasil tiap bagian, nomor audio lintas bagian; navigasi bagian/rak/Back; regresi Cerita, Kaiwa, audio Kaiwa dan navigasi utama. Tidak mengubah delapan buku lama, 93 MP3 Cerita, atau 144 MP3 Kaiwa. Pemeriksaan visual browser belum berhasil: daemon pratinjau semula tidak aktif, lalu browser menolak pengamatan tab karena kebijakan URL lingkungan. Tidak mencoba melewati batasan tersebut. Android fisik belum diuji.
