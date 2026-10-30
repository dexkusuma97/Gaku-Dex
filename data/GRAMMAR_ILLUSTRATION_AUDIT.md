# Audit ilustrasi rangkuman — 28 Oktober 2026

Semua 12 SVG diperbarui berdasarkan daftar pengguna. Tetap berupa diagram vektor
agar label Jepang, panah dan hubungan ruang tepat serta bisa diperbesar.

| Aset | Perbaikan utama | Penempatan |
| --- | --- | --- |
| bab02-kore-sore-are.svg | Dua orang menghadap, tiga buku berbeda jarak, この／その／あの + ほん | Bab 2 kartu 1 |
| bab03-koko-soko-asoko.svg | Denah tiga titik dan こちら／そちら／あちら | Bab 3 kartu 1 |
| bab10-posisi.svg | Satu kotak, 11 posisi, あいだ dengan dua pembatas, contoh meja/buku | Bab 10 kartu 3 |
| bab11-satuan-hitung.svg | 10 hitungan umum, empat kelompok ikon, pengecualian ひとり／ふたり | Bab 11 kartu 2 |
| bab17-made-madeni.svg | まで di atas, までに di bawah, batas jam 5 dan dua contoh | Bab 17 kartu 6 |
| bab18-34-mae-ato.svg | Satu garis waktu, titik kejadian, dua contoh sebelum/sesudah | Bab 18 kartu 4; Bab 34 kartu 2 |
| bab24-memberi-menerima.svg | Tiga panel, tiga orang, panah berbeda warna, fokus penerima | Bab 7 kartu 3; Bab 24 kartu 1 |
| bab29-30-teiru-vs-tearu.svg | Jendela sama di dua panel berdampingan; pasangan verba diperbaiki | Hanya Bab 30 kartu Bedakan |
| bab37-pasif.svg | Dua kalimat lengkap, panah sama, penerima disorot pada pasif | Bab 37 kartu 2 |
| bab46-tokoro.svg | Satu garis tiga titik, tiga contoh makan, たばかり terpisah | Bab 46 kartu 1 |
| bab48-kausatif.svg | Atasan menunjuk, bawahan pergi, contoh Osaka, permintaan izin dari pelaku | Bab 48 kartu 4 |
| bab49-50-hormat-merendah.svg | Dua tangga, dua kata khusus, dua rumus umum di bawahnya | Bab 49 kartu 1; Bab 50 kartu 1 |

## Ketepatan materi
- あく berarti terbuka; あける berarti membuka. われる berarti pecah; わる berarti
  memecahkan. Bentuk intransitif tidak mengharuskan kejadian berlangsung spontan.
- Teks panel kiri mengikuti situasi contoh pengguna: pembicara tidak tahu siapa
  yang membuka. Catatan kartu menjelaskan bahwa ています sendiri tidak menyatakan
  apakah pembicara tahu atau tidak. Fokusnya keadaan, penyebab tidak disebut.
- までに mencakup tepat pada batas; titik selesai dalam gambar hanyalah contoh
  yang lebih awal. まで menunjukkan kegiatan berlanjut sampai batas.
- たばかり bersifat relatif terhadap perasaan pembicara, berbeda dari titik tepat
  setelah selesai pada たところ.
- いらっしゃいます／まいります adalah kata khusus, bukan hasil rumus umum yang
  ditampilkan di bawah tangga. Tangga adalah sikap berbahasa, bukan nilai manusia.
- Rujukan nuansa keadaan dan pelaku: National Institute for Japanese Language,
  https://repository.ninjal.ac.jp/record/1848/files/kk_nkss_007.pdf
  (cuplikan pencarian terindeks tersedia; pengambilan PDF lengkap timeout).

## Validasi
- 12 XML SVG valid, ID judul/deskripsi/panah unik per aset.
- 15 penempatan pada kartu yang ada; perbandingan jendela hanya satu penempatan.
- Browser: seluruh 12 diagram ditinjau visual. Teks tetap di dalam viewBox;
  dua tabrakan label yang terdeteksi telah diperbaiki dan dicek ulang.
- Browser 390 px: Bab 30 dibuka melalui menu, kartu Bedakan dibuka, gambar
  selesai dimuat dan tidak melebar; tersedia tautan Perbesar gambar.
- Seluruh 14 suite Node lulus, termasuk paritas data sumber dan lima grup lazy,
  akses semua 50 bab serta regresi navigasi dan kuis.
