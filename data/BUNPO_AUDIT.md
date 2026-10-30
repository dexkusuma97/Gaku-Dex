# Audit Bunpo N5 - 27 Oktober 2026

## Sumber dan cakupan

Sumber: ALL_-_BUNPO_N5.pdf, 38 halaman, metadata penulis Nassu Kun.
Kredit pada sumber: nassusensei / muzukashii nihongo.
Halaman 1 dan 38 adalah pembuka/penutup; semua halaman materi 2-37 dipetakan.
SHA-256 sumber disimpan dalam data/bunpo-n5.json.

Hasil: 83 unit belajar, 11 kategori, 166 contoh, 25 catatan kesalahan umum,
16 latihan pemahaman tanpa skor. Unit belajar merupakan pengelompokan editorial,
bukan klaim bahwa PDF memiliki 83 judul atau bahwa ini daftar resmi ujian.

Penjelasan ditulis ulang dalam bahasa Indonesia. Contoh, bacaan kana, arti,
kategori, romaji pencarian dan latihan dilengkapi secara editorial.
PDF asli tidak disertakan dalam aset web yang diterbitkan.

## Keputusan penyuntingan

- Tanda silang pada halaman sifat tidak dipindahkan sebagai contoh benar.
- Halaman 6: は sebagai topik/kontras dan が sebagai subjek dijelaskan terpisah;
  tidak mengajarkan bahwa semua susunan の dalam deskripsi ciri pasti salah.
- Halaman 12: こちらは私の母です adalah kalimat perkenalan yang dapat dipakai.
  Catatan kesopanan keluarga sendiri/orang lain dijelaskan; kalimat tidak
  dilarang semata-mata karena ada tanda silang dalam sumber.
- Halaman 20: ～ましょうか dijelaskan sebagai tawaran/ajakan, bukan pola utama
  menanyakan kemampuan “bisakah”.
- Halaman 32-33: contoh yang membicarakan dinginnya kemarin memakai 寒かったです.
- Halaman 35: batas pertukaran こと/の dijelaskan untuk konstruksi hobi secara
  khusus, bukan larangan universal.
- Halaman 36: fungsi kontras は dijelaskan dalam konteks; tidak menetapkan
  terjemahan “kalau” untuk setiap は.
- Halaman 37: bentuk potensial tetap ada dan diberi label pengayaan dari sumber.
- Latihan ごろ membedakan waktu 七時ごろ dengan durasi 七時間ぐらい;
  tidak menyatakan 七時ぐらい selalu tidak sah dalam bahasa Jepang.

## Pemetaan halaman

| Halaman PDF | Unit di web |
| --- | --- |
| 2 | Kata sifat-i; いい → よい |
| 3 | Kata sifat-na; Bentuk sopan & biasa |
| 4 | Sifat + kata benda; N の N; の sebagai pengganti benda |
| 5 | います・あります; Tempat に ～がいます／あります |
| 6 | は; A は B が ～; Kata tanya + が |
| 7 | を; と |
| 8 | に; で |
| 9 | も; A か B; や ～など; から・まで |
| 10 | ごろ; ぐらい／くらい; だけ; には・では・へは・までは |
| 11 | だれ・何・どこ・どれ; どうやって・どんな・いくつ |
| 12 | どうやって・どんな・いくつ; こちら・そちら |
| 13 | Kata tanya + か; Kata tanya + も + negatif |
| 14 | Kata tanya + でも; どうですか・いかがですか |
| 15 | ～くて・～で; ～くなくて・～じゃなくて |
| 16 | Vて、Vます; Vてから; それから・そして |
| 17 | N がほしいです; Vたいです |
| 18 | Vています; Vてください; Vないでください; ～ね・～よ |
| 19 | ～に／から もらいます; ～が くれます; ～に あげます |
| 20 | Vましょう; Vましょうか; Vませんか |
| 21 | Keterangan sebelum kata benda |
| 22 | どうしますか; Keterangan sebelum kata benda |
| 23 | ～から・～からです; だから; でも・しかし・けれども |
| 24 | ～けど・～けれど・～が; それでは・では・じゃ |
| 25 | とても・たいへん・すごく・本当に; ～は大変です; あまり ～ない; ぜんぜん ～ない |
| 26 | いつも・たいてい・よく・ときどき; まあまあ・ほとんど・だいたい; よく |
| 27 | さっき・すぐ・もうすぐ; もっと; もう・まだ ～ていません |
| 28 | Sifat-i ～く・sifat-na ～に; ～くなります・～になります |
| 29 | ～くします・～にします; N にします; ～と言います |
| 30 | ～とき |
| 31 | ～前に; ～た後で・～の後で |
| 32 | ～に行きます／来ます／帰ります; A は B より ～ |
| 33 | A より B のほうが ～; A と B とどちらが ～ |
| 34 | ～が一番 ～; ～たり ～たりします |
| 35 | Vこと; Vのは ～ |
| 36 | N ができます・Vことができます |
| 37 | Kata kerja potensial |

## Regenerasi dan pemeriksaan

- Edit data/bunpo-n5.json, lalu python scripts/build-bunpo-data.py.
- node tests/bunpo.test.cjs memeriksa cakupan sumber, struktur, bacaan kana,
  pencarian, pagination, simpanan dan isolasi N4.
- node tests/bunpo-navigation.test.cjs memeriksa alur riwayat aktual modul.
- Pengujian struktur bukan sertifikasi pengajar atas seluruh penjelasan bahasa.
