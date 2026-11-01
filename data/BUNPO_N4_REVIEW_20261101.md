# Bunpo N4 — audit editorial 1 November 2026

**115/115 materi dan 233 contoh sudah ditinjau secara internal.** Batch 14 menangani urutan 1–23 (46 contoh); batch 15 menyelesaikan urutan 24–115 (187 contoh). Antrean audit tahap ini nol. Ini bukan sertifikasi pengajar eksternal, silabus resmi JLPT, atau penyetaraan resmi N4 dengan CEFR A2.

## Standar penjelasan

Ditujukan bagi pelajar yang baru selesai N5. Penjelasan utama satu paragraf singkat, fungsi disebutkan lebih dulu, pembentukan berada di bagian rumus dengan perubahan kata konkret, dan catatan berfokus pada pembeda yang perlu. Bantuan lipat istilah N5 pada detail dipertahankan. Penjelasan bukan pembahasan lengkap seluruh penggunaan lanjutan setiap pola.

## Batch 14

23 materi awal: bentuk kata kerja, keadaan, syarat, izin dan kewajiban. Seluruh penjelasan/pola/catatan diperjelas; 46 contoh ditinjau. Satu contoh kausatif diganti untuk menunjukkan membiarkan, satu terjemahan てある diperjelas, dan tabel ている／てある ditambahkan. Seluruh hasil ini identik dalam batch 15.

## Batch 15

92 materi berikutnya meliputi rencana/tujuan, waktu, cara tindakan, bantuan, saran, jumlah, penghubung, pertanyaan di dalam kalimat, pelaporan/dugaan, bentukan kata, bahasa hormat, dan percakapan.

- Tulis ulang 92 penjelasan, beserta rumus dan catatan yang relevan. Bedakan keputusan/upaya/perubahan, tujuan ために／ように, 間／間に, まで／までに, たところ／たばかり, dan pengalaman versus kejadian sesekali.
- Perjelas pemberi/penerima bantuan; に tidak dipaksakan pada semua konstruksi てあげる. てもらう tidak otomatis berarti bantuan itu diminta secara eksplisit.
- Perjelas bentuk positif kini N/sifat-na dibanding negatif/lampau, termasuk んです／ので／のに, pertanyaan sisipan, dugaan, serta akhiran percakapan.
- Tambahkan contoh rumus しかない yang berarti tidak ada pilihan selain, dan 勉強する→勉強の仕方 agar rumus 方 tidak menghasilkan bentuk keliru.
- Batasi rumus お～になる dan お～ください pada gabungan yang lazim. Bedakan tindakan orang dihormati dari tindakan diri/pihak sendiri.
- Tinjau seluruh 187 contoh berikut kana dan terjemahannya. Dua contoh Jepang diganti: ばかり kini menunjukkan Vてばかりいる; はずがない memakai dasar jadwal tutup toko, mengganti asumsi kemampuan berdasarkan usia. Tiga arti diperhalus pada てもらう, てほしい, dan やっと. Bacaan contoh pengganti tetap berspasi. Contoh lain yang sudah sesuai dipertahankan.

## Rujukan titik tata bahasa

Rujukan diakses 1 November 2026. Scope per sumber dicatat pada `bunpo-n4-editorial-review.json`; sumber tidak dianggap mengesahkan seluruh materi. Penjelasan Indonesia ditulis orisinal dan provenans PDF awal tetap.

- Pembentukan pasif: https://www.kyozai.jpf.go.jp/kyozai/material/BTS00061/ja/render.do
- Kausatif menjadi pasif; singkatan golongan I kecuali akhiran す: https://www.kyozai.jpf.go.jp/kyozai/material/BMA00076/ja/render.do
- Perbedaan fungsi, pembentukan, dan urutan と／ば／たら／なら: https://www.coelang.tufs.ac.jp/mt/ja/gmod/courses/c02/lesson42/step1/explanation/083.html
- Transitivitas; hasil tindakan sengaja; persiapan dengan を: https://www.coelang.tufs.ac.jp/mt/ja/gmod/contents/explanation/046.html
- Tujuan ために／ように; hasil versus maksud tindakan: https://www.jpf.go.jp/j/project/japanese/teach/tsushin/grammar/201310.html
- Perbedaan kesan, dugaan dan kabar そう／よう／らしい: https://www.jpf.go.jp/j/project/japanese/teach/tsushin/grammar/201012.html
- Sudut pandang pemberi dan penerima bantuan: https://www.coelang.tufs.ac.jp/mt/ja/gmod/contents/card/086.html
- Bentuk hormat dan rendah hati; batas rumus お～になる: https://www.coelang.tufs.ac.jp/mt/ja/gmod/contents/explanation/092.html
- Pertanyaan akrab, かしら, なあ, dan penyambungan だ: https://www.coelang.tufs.ac.jp/mt/ja/gmod/contents/explanation/096.html
- Pembatasan しか dengan akhir negatif: https://www.kyozai.jpf.go.jp/kyozai/material/BTS00122/ja/render.do

## Validasi dan batas pemeriksaan

Tetap 115 materi, 14 kategori, 233 contoh, dan 16 cek. ID, concept, level, kategori, urutan, serta sumber asal dipertahankan. Bunpo N5 serta seluruh data Kotoba/Kanji identik dengan paket 14. Bundle dibangun ulang dari JSON dan hasil rebuild stabil. Semua 42 berkas tes lulus, termasuk pencocokan seluruh 115 materi sumber dengan bundle browser dan teks detail, pencarian, favorit, navigasi, dan pemisahan level.

Audit editorial internal selesai untuk cakupan data yang ada; ini tidak menjamin semua kemungkinan nuansa bahasa, atau berarti jumlah materi sama dengan daftar resmi JLPT. Render diperiksa melalui VM; belum diuji visual pada browser atau Android fisik.

Paket 15 kumulatif mencakup pembaruan 1–14. Pemasang memeriksa hash, membuat cadangan, menolak konflik, dan memulihkan target jika tes gagal. Tes pemasang dijalankan dengan PYTHONDONTWRITEBYTECODE=1 untuk mencegah perubahan cache Python baru. Pemasang tidak melakukan commit, push, atau deploy.
