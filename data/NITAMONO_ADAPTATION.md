# Nitamono Doushi — rak per judul

## Materi

Sumber: dua ZIP pengguna, `Nitamono_Doushi_Bab1-3-1.zip` dan `Nitamono_Doushi_Bab4-6.zip`. Keenam teks Indonesia serta README disimpan utuh di `data/nitamono-source/` sebagai acuan. Kredit Efu mengikuti README pengguna; tidak mengklaim verifikasi edisi penerbit. Tidak mengambil panel manga.

Bahasa Jepang disusun sebagai adaptasi pembelajaran dari naskah pengguna. Terjemahan Indonesia mempertahankan kejadian, dialog utama, ejekan masa kecil, pertemuan game center, rahasia Rei, tekanan untuk tampil sempurna, konflik pertemanan, pertolongan Teru dan akhir cerita. Satu koreksi kronologi: sumber menyebut “sepuluh tahun” dari SD ke SMA; di bacaan menjadi “beberapa tahun kemudian”. Adegan perkelahian tetap singkat tanpa penambahan teknik atau detail luka.

| Bab | Judul | Blok bacaan |
| --- | --- | --- |
| 1 | Habitat Masing-Masing | 13 |
| 2 | Dompet yang Tertinggal | 12 |
| 3 | Rahasia Sang Idola | 13 |
| 4 | Rokok dan Topeng Sempurna | 13 |
| 5 | Beda Dunia | 13 |
| 6 | Menjadi Diri Sendiri | 14 |

Total 78 blok pendek, masing-masing memiliki terjemahan Indonesia, furigana seluruh kanji, satu bantuan bahasa. Setiap bab memiliki tiga kuis opsional (18 soal total, empat opsi unik). Label N4–N3 terbimbing, dengan beberapa kata naratif di luar tingkat itu; bukan klaim daftar kosakata JLPT resmi.

## Rak

Urutan: **Cerpen → Dongeng → Nee Nee, Nene-san → Nitamono**. Tidak ada kategori umum Kisah Bersambung pada UI. Tiap judul memiliki enam kartu bagian dengan sampul yang sama, tombol “Lihat semua” sendiri, detail dan pilihan mulai sesuai bagian. Filter per rak tidak mencampur bagian dari judul lain. ID lama `bersambung` hanya dipetakan ke `nene` saat memulihkan rute browser lama; bukan rak tambahan.

Data Nene tetap 90 blok/enam bagian. Raknya kini `nene`. Isi Nene, delapan buku sebelumnya dan seluruh rekaman lama tidak diubah.

## Sampul dan audio

Sampul asli baru dibuat memakai built-in ImageGen, bukan panel manga. `dist/assets/cerita/cover-nitamono.webp`: 600×900, 94.860 byte. Prompt: `data/NITAMONO_IMAGE_PROMPT.json`.

Belum ada MP3 Nitamono. Manifest 78 audio: `data/nitamono-audio-manifest.json`; penomoran `nitamono-1.mp3`–`nitamono-78.mp3` berlanjut antarbagian. Generator memuat `cerita-nitamono.js`; dry-run `nitamono` menghasilkan 78 RENCANA tanpa API berbayar. Pemutar mendahulukan MP3, fallback perangkat hanya jika file tidak ada (404/410), mengikuti perilaku Cerita yang sudah ada.

## Validasi

Tes mencakup sepuluh buku, semua kanji/furigana, format kuis, dua belas kartu bagian, urutan/pemisahan rak, keenam bagian serta hasil kuis untuk kedua judul, migrasi rute lama dan Back. Nomor audio Bab 2 Nitamono dimulai di `nitamono-14.mp3`. Regresi Kaiwa, cakupan 136 MP3 aktif Kaiwa, dan navigasi utama lulus; syntax, dry-run dan diff check lulus.

Browser Chromium pada pratinjau berhasil menunjukkan empat rak sesuai urutan, enam kartu masing-masing judul, detail Nitamono, pembaca Bab 1 dengan furigana dan terjemahan terbuka. Screenshot `dex-gaku-nitamono-bab1.jpg` disimpan. Pemeriksaan langsung di perangkat Android/tablet belum dilakukan.
