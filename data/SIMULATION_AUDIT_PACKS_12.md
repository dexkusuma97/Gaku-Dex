# Audit isi paket simulasi 1–2

Tanggal: 28 Oktober 2026. Audit semantik oleh agen peninjau terpisah dari penulis
paket. File yang dibaca: `dist/prototipe-simulasi/bank-packs-12.js`.

## Lingkup dan hasil

Seluruh 242 soal dibaca, mencakup stem, pilihan/kunci, bacaan, skrip menyimak,
dan delapan soal posisi bintang. Paket yang ditinjau: JLPT N5 01/02 (71 soal
per paket), latihan JFT A1 01/02 (50 soal per paket). Tidak ada perubahan pada
bank JS; keputusan dan penerapan perubahan dilakukan agen pemilik situs.

Ditemukan dua masalah penting yang sebaiknya diperbaiki sebelum dipakai untuk
penilaian. Dua perbaikan redaksi direkomendasikan. Satu distraktor tambahan
berisiko menerima penafsiran lain dan sebaiknya diganti.

## 1. Dua nama dapat menjadi jawaban benar

**ID:** `jft-a1-p02-015` — prioritas tinggi.

Stem: `A：おなまえを おねがいします。 B：（　）。`
Pilihan: `しごとです` / `はるです` / `あそこです` / `グエンです`.

Kunci sekarang adalah グエンです (indeks 3), tetapi はる juga nama orang Jepang
yang lazim dan merupakan jawaban sah terhadap pertanyaan nama. Ini bukan
sekadar terjemahan alternatif atau respons yang tidak kooperatif: dua opsi
secara langsung menjawab pertanyaannya.

Patch tepat, mempertahankan urutan dan indeks kunci:

```json
{
  "id": "jft-a1-p02-015",
  "options": ["しごとです", "はるが すきです", "あそこです", "グエンです"],
  "answer": 3
}
```

## 2. Kata “selalu” bertentangan dengan pengecualian pada audio

**ID:** `n5-p01-056` — prioritas tinggi.

Audio mengatakan laki-laki berjalan kaki karena rumahnya dekat, tetapi naik
bus **hanya pada hari hujan**. Opsi berkunci `いつも あるいて いきます。`
berarti selalu berjalan kaki. Semua opsi menggunakan いつも, sehingga tidak
ada opsi yang sepenuhnya cocok dengan informasi audio.

Patch paling kecil: tetapkan kondisi bukan hari hujan dalam pertanyaan.
Pilihan/kunci/audio/transkrip tidak perlu berubah.

```json
{
  "id": "n5-p01-056",
  "jp": "あめが ふっていない ひは、どうやって かいしゃへ いきますか。"
}
```

Kunci tetap `いつも あるいて いきます。` (indeks 0). Alternatif yang juga sah
adalah mempertahankan stem lama dan mengganti opsi berkunci menjadi
`ふだんは あるいて いきます。`; patch kondisi eksplisit di atas lebih tegas.

## 3. Susunan redaksi sepatu kurang nyaman untuk pemula

**ID:** `n5-p01-017` — perbaikan redaksi.

Stem sekarang: `この くつは あしが いたいです。もっと（　）くつが ほしいです。`
Topik “sepatu” disusul komentar “kaki sakit” dapat dimengerti secara percakapan,
tetapi hubungan ukuran dan kebutuhan sepatu lebih besar belum dinyatakan
langsung. Ini bukan kunci salah; perbaikannya untuk bahasa contoh yang rapi.

```json
{
  "id": "n5-p01-017",
  "jp": "この くつは ちいさいです。もっと（　）くつが ほしいです。"
}
```

Kunci tetap `おおきい` (indeks 0); opsi lain tidak berubah.

## 4. Frasa “barang yang melakukan belanja” pada jawaban bacaan

**ID:** `n5-p02-046` — perbaikan redaksi.

Jawaban benar sekarang berbunyi
`かいものを する ものの なまえを かいた かみ`.
Yang dimaksud adalah daftar nama barang **yang akan dibeli**, bukan frasa
かいものをする yang melekat pada もの. Bacaan sendiri jelas; cukup rapikan
opsi berkunci.

```json
{
  "id": "n5-p02-046",
  "options": [
    "りょうりの ほんだけ",
    "かう ものの なまえを かいた かみ",
    "かいたい ものの しゃしんだけ",
    "ともだちの さいふ"
  ],
  "answer": 1
}
```

## 5. Hindari “kaki” sebagai distraktor sarana perjalanan

**ID:** `jft-a1-p02-022` — risiko penafsiran, prioritas sedang.

Stem: `A：でんしゃで いきますか。 B：いいえ、（　）で いきます。`
Pilihan: `みち` / `えき` / `バス` / `あし`.

バス adalah jawaban yang diharapkan. Namun, 足で行く dapat dipahami secara
percakapan sebagai pergi dengan kaki sendiri, meski ungkapan dasar yang lebih
lazim adalah あるいて行く. Jangan menjadikan perbedaan gaya ini dasar penilaian
benar/salah untuk pemula. Hilangkan distraktor あし agar kunci tegas.

```json
{
  "id": "jft-a1-p02-022",
  "options": ["みち", "えき", "バス", "りんご"],
  "answer": 2
}
```

## Pemeriksaan soal bintang

Semua delapan soal menghasilkan bagian ketiga yang tetap pada susunan alami.
Perubahan posisi keterangan waktu/tempat pada klausa relatif tidak mengubah
kunci posisi bintangnya.

| ID | Susunan yang benar | Bagian di ★ |
|---|---|---|
| n5-p01-034 | ともだちが／にほんで／とった／しゃしん | とった |
| n5-p01-035 | うえに／ある／ほんは／わたしのです | ほんは |
| n5-p01-036 | ははが／つくった／ケーキを／たべます | ケーキを |
| n5-p01-037 | ちちが／せんげつ／つくった／いす | つくった |
| n5-p02-034 | よるに／なると／とても／くらいです | とても |
| n5-p02-035 | えきの／ちかくに／すんで／います | すんで |
| n5-p02-036 | パンと／たまごを／たべてから／でかけます | たべてから |
| n5-p02-037 | にほんの／ふるい／うたが／すき | うたが |

## Batas pemeriksaan

- Tidak ditemukan kesalahan hitungan harga/waktu, salah baca kanji, atau kunci
  bintang lain dari pembacaan ini. Itu bukan jaminan tidak ada salah yang luput.
- Beberapa bacaan N5 memakai bentuk relatif lebih padat (contoh つもり、〜ながら、
  〜てしまう、〜なくなった). Ini dicatat sebagai beban membaca bagi pemula,
  bukan klaim bahwa bentuk tersebut dilarang oleh daftar resmi N5. Paket tetap
  draf sampai pemeriksaan penutur Jepang/pengajar dan uji kesulitan.
- Audit teks tidak memverifikasi pelafalan TTS, suara tokoh, jeda dialog,
  ilustrasi yang dirender, atau kesesuaian kecepatan rekaman audio.
- Semua usulan di atas mempertahankan ID, jumlah soal, pembagian bagian, dan
  struktur data tanpa menambah pembahasan kepada pengguna.

## Penerapan oleh pemilik situs

Kelima usulan diterapkan pada28Oktober2026. Pertanyaan n5-p01-056 sekarang
secara eksplisit menanyakan hari tanpa hujan. Indeks kunci paket1–2 dipertahankan.
Bank dijadikan data JSON tepercaya dalam wrapper JS; isi koreksi ikut diekspor
ke JSON referensi. Pemeriksaan struktur dan alur lulus setelah perubahan.
