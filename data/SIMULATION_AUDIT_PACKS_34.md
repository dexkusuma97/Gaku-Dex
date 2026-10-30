# Audit isi paket 3–4 — JLPT N5 dan latihan JFT A1

Tanggal: 28 Oktober 2026. Audit silang oleh agen yang menulis paket 1–2.
Sumber yang diperiksa: `dist/prototipe-simulasi/bank-packs-34.js`.

Seluruh 242 butir dibaca: dua paket N5, masing-masing 71 soal, dan dua paket
JFT A1, masing-masing 50 soal. Pemeriksaan meliputi stem, semua opsi/kunci,
seluruh bacaan, seluruh naskah audio, posisi bintang, dan kelugasan bahasa.
Tidak ada berkas bank soal yang diubah dalam tugas audit ini.

## Temuan yang perlu diperbaiki sebelum rilis

### 1. n5-p03-037 — dua susunan benar menghasilkan posisi bintang berbeda

Stem saat audit: `この ＿＿ ＿＿ ★ ＿＿ ください。`
Potongan: `かいて`, `あなたの`, `かみに`, `なまえを`.

Dua kalimat alami:

- この **かみに／あなたの／なまえを／かいて** ください。
  “Tuliskan namamu pada kertas ini.” Posisi ★ adalah なまえを.
- この **なまえを／あなたの／かみに／かいて** ください。
  “Tuliskan nama ini pada kertasmu.” Posisi ★ adalah かみに.

Kunci tunggal tidak sah selama kedua makna itu masih diizinkan stem.
Usulan pengganti mempertahankan materi dan mematok nama lebih dahulu:

```json
{
  "id": "n5-p03-037",
  "jp": "あなたの なまえを ＿＿ ＿＿ ★ ＿＿。",
  "options": ["かみに", "ください", "この", "かいて"],
  "answer": 3
}
```

Susunan: あなたの なまえを **この／かみに／かいて／ください**。
Posisi ★ = かいて.

### 2. jft-a1-p04-033 — stem tidak membatasi jawaban pada hari ini

Audio menyebut `いつも ... 十一時` dan `今日は十時に寝ます`.
Stem hanya bertanya `おとこの ひとは なんじに ねますか。`.
Karena cakupan waktunya tidak ditentukan, jawaban 11じ (kebiasaan) juga dapat
sah. Kunci bank saat audit adalah 10じ (rencana hari ini).

```json
{
  "id": "jft-a1-p04-033",
  "jp": "おとこの ひとは きょう なんじに ねますか。"
}
```

Kunci, opsi, audio, dan transkrip tetap. Kunci = 10じ.

### 3. jft-a1-p03-040 — letak つぎの salah menerangkan nomina

Stem `つぎの えきへ いく バス` berarti “bus yang pergi ke stasiun berikutnya”,
bukan “bus berikutnya yang pergi ke stasiun”. Tabel tidak memiliki “stasiun
berikutnya”; tabel hanya membedakan tujuan えき dan しやくしょ.

```json
{
  "id": "jft-a1-p03-040",
  "jp": "いま 8:20です。えきへ いく つぎの バスは なんじに でますか。"
}
```

Kunci tetap 8:30. Tidak perlu mengubah tabel atau opsi.

### 4. jft-a1-p04-029 — posisi relatif piring perlu sama persis dengan audio

Audio: piring berada di lemari, **di bawah gelas**. Opsi kunci saat audit
`しょっきだなの なかの した` janggal dan dapat dibaca “bagian bawah lemari”,
padahal audio tidak mengatakan rak/bagian lemari paling bawah.

```json
{
  "id": "jft-a1-p04-029",
  "options": [
    "しょっきだなの なかで、コップの した",
    "しょっきだなの うえ",
    "つくえの うえ",
    "れいぞうこの なか"
  ],
  "answer": 0
}
```

Audio/transkrip dapat dipertahankan. Kunci tetap opsi pertama.

## Perapian bahasa yang disarankan

Ini bukan kesalahan kunci, tetapi membuat bahasa sumber lebih alami.

### 5. jft-a1-p04-002 — “ケーキは半分です” tanpa pembanding kurang alami

Ubah kalimat menjadi aksi yang jelas, tetap menguji bacaan 半分:

```json
{
  "id": "jft-a1-p04-002",
  "jp": "ケーキを <u>半分</u> たべました。"
}
```

Kunci はんぶん dan opsi tetap.

### 6. jft-a1-p04-026 — tawaran membawa sesuatu memakai ましょうか

Ucapan `何か持っていきますか` dari tamu kepada tuan rumah tidak jelas apakah
bertanya tentang tindakan lawan bicara atau menawarkan tindakan sendiri.
Jawaban meminta buah menunjukkan maksud menawarkan bantuan.

```json
{
  "id": "jft-a1-p04-026",
  "audio": "女：明日はうちで昼ご飯を食べましょう。男：何か持っていきましょうか。女：果物をお願いします。男：分かりました。",
  "transcript": "女：明日はうちで昼ご飯を食べましょう。男：何か持っていきましょうか。女：果物をお願いします。男：分かりました。"
}
```

Kunci くだもの tetap.

### 7. n5-p04-046 — lokasi berlari sebaiknya di samping sungai

Dalam bacaan, `かわで はしります` secara harfiah menyiratkan berlari di sungai.
Maksud narasi latihan sore lebih wajar `かわの そばを はしります`.

Ganti hanya rentang bacaan berikut:

- Lama: `ばんごはんの まえに うちの ちかくの かわで はしります。`
- Baru: `ばんごはんの まえに うちの ちかくの かわの そばを はしります。`

Pertanyaan, opsi, dan kunci tidak berubah.

### 8. n5-p04-047 — “ぜんぶエプロンを持ってきて” tidak tepat untuk peserta

Instruksi harus menyebut semua peserta/semua kelas, bukan kata benda ぜんぶ.

Ganti hanya rentang bacaan:

- Lama: `ぜんぶ エプロンを もって きて ください。`
- Baru: `どの クラスでも エプロンを もって きて ください。`

Kunci D tetap.

### 9. n5-p03-047 — “sepatu yang dipakai di rumah” tidak sama dengan sepatu olahraga dalam ruangan

Bacaan gym memakai `うちで はく くつ`. Itu dapat berarti sandal/alas kaki rumah,
bukan sepatu olahraga bersih yang dimaksud. Usulan lebih jelas:

- Lama: `ジムでは うちで はく くつを つかって ください。`
- Baru: `ジムでは そとで つかっていない くつを はいて ください。`

Pilihan sarana yang tersedia pada Senin pukul 19:00 tetap ジムだけ.

### 10. jft-a1-p04-050 — bunga “kering” kurang tepat sebagai alasan menyiram

`はなが かわいています` lazimnya berarti bunganya kering; yang biasanya kering
sebelum penyiraman adalah tanah. Bisa cukup menghapus kalimat alasan tersebut.

```json
{
  "id": "jft-a1-p04-050",
  "passage": "レンさんへ\nベランダの はなに みずを あげて ください。にわの はなには もう あげました。\nはは"
}
```

Kunci ベランダの はな tetap.

## Catatan kualitas paket, bukan kesalahan kunci

- Bagian awal paket 3–4 sangat sering memakai pola posisi kunci 0,1,2,3 secara
  berulang. Sejumlah variasi muncul kemudian, tetapi pola awal mudah ditebak.
  Sebaiknya permutasikan urutan opsi sekali saat penyuntingan bank, dengan
  menyimpan ulang `answer` sesuai target yang sama. Jika diacak saat sesi,
  pemetaan harus disimpan dan tetap stabil saat reload; jangan mengacak tiap render.
- Ada pengulangan dekat antar paket N5: n5-p03-032 sama persis stem/kunci dengan
  n5-p02-023 (perbandingan dengan あに menggunakan より), meskipun distraktor berbeda.
  Beberapa situasi ungkapan lisan dasar juga berulang (salam guru pagi hari,
  ucapan setelah makan). Ini bukan duplikat byte, tetapi jumlah latihan baru
  berkurang. Pertimbangkan variasi situasi bila seluruh paket wajib unik secara pedagogis.
- Audio N5/JFT memakai kanji dalam naskah internal, sedangkan stem/opsi umumnya
  kana. Ini tidak merugikan peserta jika hanya suara yang diputar. Transkrip
  yang disediakan untuk pengujian UI tidak boleh dianggap sama dengan ujian
  menyimak penuh yang menutup transkrip.
- Sebagian audio berisi bentuk lebih padat seperti しか〜ありません,
  〜そうですね, 〜ていたんです. Tidak diperlakukan sebagai “bukan N5” secara pasti
  karena tidak ada daftar tata bahasa resmi mutakhir yang menjadi jaminan
  level per butir. Untuk pemula, pengajar Jepang tetap perlu menilai tingkat
  kesulitan keseluruhan dan kecepatan rekamannya.

## Kesimpulan audit

Ditemukan satu soal bintang dengan dua jawaban sah dan satu soal menyimak yang
ambigu cakupan waktunya. Dua perbaikan berikutnya memperjelas hubungan kata dan
lokasi, serta enam perapian bahasa disarankan. Kunci hitungan, waktu, bacaan
kanji dan informasi lainnya dalam 242 butir tidak menunjukkan kesalahan konkret
lain pada audit ini. Ini pemeriksaan model, bukan sertifikasi penutur asli;
status `draft` tetap tepat sampai peninjauan pengajar/penutur Jepang dan audio.

## Penerapan oleh pemilik situs

Keempat perbaikan prioritas dan keenam perapian bahasa diterapkan28Oktober2026.
Stem n5-p03-032 juga dibedakan menjadi perbandingan dua pena dengan ほう agar
pengulangan dekat dengan paket2 berkurang. Total16soal direvisi di kedua laporan.
Pilihan paket3–4 dipermutasi sekali saat penyuntingan, target jawaban benar
ikut dipertahankan; tidak diacak saat render/reload. BANK_REVISION diperbarui
agar sesi lama dengan posisi opsi berbeda tidak dipulihkan untuk dinilai ulang.
