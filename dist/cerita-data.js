/* Cerita bacaan DeX Gaku. rak: 'n5' atau 'dongeng'. cover: gambar sampul 2:3 tanpa teks (judul ditampilkan sebagai teks HTML).  Token: [teks, furigana atau '', level 5-1 atau 0 untuk partikel/tanpa warna].
   Level ditandai manual, jangan diisi otomatis. Audio kalimat: assets/cerita/<id>-<nomor>.mp3 (nomor mulai 1, urut seluruh bab). */
window.GAKU_CERITA_DATA = [
  {
    id: 'kasa', rak: 'n5', cover: 'assets/cerita/cover-kasa.webp', ic: '☂', judul: 'Payung Biru', jp: 'あおい かさ', level: 'N5',
    deskripsi: 'Hari ini hujan sejak pagi. Haru bertemu temannya di depan stasiun, dan temannya tidak membawa payung.',
    bab: [
      {
        no: 1, judul: 'Hari Hujan',
        kalimat: [
          { t: [['今日','きょう',5],['は','',0],['朝','あさ',5],['から','',0],['雨','あめ',5],['です','',0],['。','',0]],
            id: 'Hari ini hujan sejak pagi.',
            jelas: [
              { pola: '〜から', arti: 'sejak / dari 〜', catatan: '「朝から」 berarti sejak pagi. から menandai titik awal waktu.' },
              { pola: '雨です', arti: 'hujan', catatan: 'Untuk menyebut cuaca, pakai kata benda + です.' }
            ] },
          { t: [['はる','',0],['は','',0],['青い','あおい',5],['傘','かさ',2],['を','',0],['持って','もって',4],['います','',0],['。','',0]],
            id: 'Haru membawa payung biru.',
            jelas: [
              { pola: '〜を 持っています', arti: 'sedang membawa / memegang 〜', catatan: 'Bentuk 〜ています menyatakan keadaan yang sedang berlangsung. 持つ = membawa atau memegang.' },
              { pola: '青い + kata benda', arti: 'benda yang berwarna biru', catatan: 'Kata sifat い langsung dipasang sebelum kata benda, tanpa perubahan bentuk: 青い傘.' }
            ] },
          { t: [['駅','えき',4],['の','',0],['前','まえ',5],['で','',0],['、','',0],['みきさん','',0],['に','',0],['会いました','あいました',4],['。','',0]],
            id: 'Di depan stasiun, ia bertemu Miki.',
            jelas: [
              { pola: '〜の 前で', arti: 'di depan 〜', catatan: 'Partikel で menunjukkan tempat terjadinya kegiatan: 駅の前で = di depan stasiun.' },
              { pola: '〜に 会います', arti: 'bertemu dengan 〜', catatan: '会う memakai partikel に untuk orang yang ditemui. 会いました adalah bentuk lampau sopan.' }
            ] },
          { t: [['みきさん','',0],['は','',0],['傘','かさ',2],['が','',0],['ありません','',0],['。','',0]],
            id: 'Miki tidak punya payung.',
            jelas: [
              { pola: 'AはBが ありません', arti: 'A tidak punya B', catatan: 'ありません adalah bentuk negatif sopan dari あります. Barang yang tidak dimiliki ditandai が.' }
            ] },
          { t: [['「','',0],['いっしょ','',5],['に','',0],['行きましょう','いきましょう',5],['。','',0],['」','',0],['と','',0],['、','',0],['はる','',0],['は','',0],['言いました','いいました',5],['。','',0]],
            id: '“Ayo pergi bersama,” kata Haru.',
            jelas: [
              { pola: '〜ましょう', arti: 'ayo 〜', catatan: 'Dipakai untuk mengajak lawan bicara melakukan sesuatu bersama: 行きましょう = ayo pergi.' },
              { pola: '「…」と 言いました', arti: 'berkata “…”', catatan: 'Partikel と menandai isi kutipan langsung yang dikatakan.' }
            ] },
          { t: [['ふたり','',5],['は','',0],['一つ','ひとつ',5],['の','',0],['傘','かさ',2],['で','',0],['歩きました','あるきました',4],['。','',0]],
            id: 'Mereka berdua berjalan dengan satu payung.',
            jelas: [
              { pola: '〜で 歩きます', arti: 'berjalan dengan 〜', catatan: 'Partikel で juga menunjukkan alat atau cara. 一つの傘で = dengan satu payung.' }
            ] },
          { t: [['雨','あめ',5],['は','',0],['強い','つよい',4],['です','',0],['が','',0],['、','',0],['はる','',0],['は','',0],['楽しい','たのしい',5],['です','',0],['。','',0]],
            id: 'Hujannya deras, tetapi Haru merasa senang.',
            jelas: [
              { pola: '〜ですが、〜', arti: '〜, tetapi 〜', catatan: 'Di tengah kalimat, が bermakna “tetapi” dan menghubungkan dua hal yang berlawanan.' },
              { pola: '強い / 楽しい', arti: 'deras (kuat) / menyenangkan', catatan: 'Keduanya kata sifat い. Ditutup dengan です agar sopan.' }
            ] },
          { t: [['学校','がっこう',5],['の','',0],['前','まえ',5],['で','',0],['、','',0],['みきさん','',0],['は','',0],['「','',0],['ありがとう','',5],['」','',0],['と','',0],['言いました','いいました',5],['。','',0]],
            id: 'Di depan sekolah, Miki berkata, “Terima kasih.”',
            jelas: [
              { pola: '「…」と 言いました', arti: 'berkata “…”', catatan: 'Pola yang sama dengan kalimat sebelumnya: と mengutip ucapan seseorang.' }
            ] },
          { t: [['明日','あした',5],['も','',0],['雨','あめ',5],['です','',0],['から','',0],['、','',0],['はる','',0],['は','',0],['また','',5],['傘','かさ',2],['を','',0],['持って','もって',4],['行きます','いきます',5],['。','',0]],
            id: 'Besok juga hujan, jadi Haru akan membawa payung lagi.',
            jelas: [
              { pola: '〜ですから、〜', arti: 'karena 〜, jadi 〜', catatan: 'Setelah bentuk sopan, から menyatakan alasan. Ini berbeda dengan 朝から (sejak pagi) di kalimat pertama.' },
              { pola: '持って 行きます', arti: 'membawa pergi', catatan: 'Bentuk て + 行きます berarti pergi sambil membawa sesuatu.' }
            ] }
        ],
        kuis: [
          { q: '今日の てんきは どうですか。', opsi: ['あめ','はれ','ゆき','くもり'], benar: 0 },
          { q: 'みきさんは なにが ありませんか。', opsi: ['かさ','えき','がっこう','ともだち'], benar: 0 },
          { q: 'ふたりは なにで あるきましたか。', opsi: ['ひとつの かさ','くるま','でんしゃ','じてんしゃ'], benar: 0 }
        ]
      }
    ]
  }
];
