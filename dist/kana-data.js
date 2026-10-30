/* Modern basic kana. Empty cells preserve the vowel columns in the gojūon table. */
const KANA_GROUPS = {
  Seion: {
    name: 'Seion', subtitle: 'Huruf dasar', count: 46, symbol: 'あ',
    description: 'Kenali huruf dasar dan bunyi pertamamu, dari a sampai n.',
    explanation: 'Mulai dari vokal a, i, u, e, o. Baca satu baris perlahan, lalu ketuk huruf untuk mendengar bunyinya.',
    columns: ['a','i','u','e','o'],
    rows: [
      [['あ','a'],['い','i'],['う','u'],['え','e'],['お','o']],
      [['か','ka'],['き','ki'],['く','ku'],['け','ke'],['こ','ko']],
      [['さ','sa'],['し','shi'],['す','su'],['せ','se'],['そ','so']],
      [['た','ta'],['ち','chi'],['つ','tsu'],['て','te'],['と','to']],
      [['な','na'],['に','ni'],['ぬ','nu'],['ね','ne'],['の','no']],
      [['は','ha'],['ひ','hi'],['ふ','fu'],['へ','he'],['ほ','ho']],
      [['ま','ma'],['み','mi'],['む','mu'],['め','me'],['も','mo']],
      [['や','ya'],null,['ゆ','yu'],null,['よ','yo']],
      [['ら','ra'],['り','ri'],['る','ru'],['れ','re'],['ろ','ro']],
      [['わ','wa'],null,null,null,['を','wo']],
      [['ん','n'],null,null,null,null]
    ],
    tip: 'し = shi, ち = chi, つ = tsu, dan ふ = fu. を umumnya diucapkan “o” saat menjadi partikel. ん adalah satu mora, bukan “nu”.'
  },
  Yoon: {
    name: 'Yōon', subtitle: 'Bunyi gabungan', count: 33, symbol: 'きゃ',
    description: 'Gabungkan huruf dengan ya, yu, atau yo kecil.',
    explanation: 'Huruf berakhiran i dipadukan dengan ゃ, ゅ, atau ょ kecil. Baca sebagai satu mora: きゃ = kya, berbeda dengan きや = ki-ya.',
    columns: ['ya','yu','yo'],
    rows: [
      [['きゃ','kya'],['きゅ','kyu'],['きょ','kyo']],
      [['しゃ','sha'],['しゅ','shu'],['しょ','sho']],
      [['ちゃ','cha'],['ちゅ','chu'],['ちょ','cho']],
      [['にゃ','nya'],['にゅ','nyu'],['にょ','nyo']],
      [['ひゃ','hya'],['ひゅ','hyu'],['ひょ','hyo']],
      [['みゃ','mya'],['みゅ','myu'],['みょ','myo']],
      [['りゃ','rya'],['りゅ','ryu'],['りょ','ryo']],
      [['ぎゃ','gya'],['ぎゅ','gyu'],['ぎょ','gyo']],
      [['じゃ','ja'],['じゅ','ju'],['じょ','jo']],
      [['びゃ','bya'],['びゅ','byu'],['びょ','byo']],
      [['ぴゃ','pya'],['ぴゅ','pyu'],['ぴょ','pyo']]
    ],
    tip: 'Perhatikan ukuran huruf kedua. ゃ・ゅ・ょ kecil membentuk satu bunyi gabungan. Setiap gabungan ditampilkan dalam satu kotak.'
  },
  Dakuon: {
    name: 'Dakuten', subtitle: 'Tambahan tanda ゛', count: 20, symbol: 'が',
    description: 'Dua goresan kecil mengubah bunyi huruf dasar.',
    explanation: 'Tanda ゛ mengubah kelompok k → g, s → z, t → d, dan h → b. Perhatikan bacaan khusus ji dan zu.',
    columns: ['a','i','u','e','o'],
    rows: [
      [['が','ga'],['ぎ','gi'],['ぐ','gu'],['げ','ge'],['ご','go']],
      [['ざ','za'],['じ','ji'],['ず','zu'],['ぜ','ze'],['ぞ','zo']],
      [['だ','da'],['ぢ','ji'],['づ','zu'],['で','de'],['ど','do']],
      [['ば','ba'],['び','bi'],['ぶ','bu'],['べ','be'],['ぼ','bo']]
    ],
    tip: 'じ dan ぢ umumnya sama-sama dibaca “ji”; ず dan づ dibaca “zu” dalam bahasa Jepang standar. Ejaannya mengikuti kata, jadi tidak bisa saling ditukar.'
  },
  Handakuon: {
    name: 'Handakuten', subtitle: 'Tambahan tanda ゜', count: 5, symbol: 'ぱ',
    description: 'Lingkaran kecil mengubah kelompok h menjadi p.',
    explanation: 'Tambahkan tanda ゜ pada kelompok ha, hi, fu, he, ho. Hasilnya adalah pa, pi, pu, pe, po.',
    columns: ['a','i','u','e','o'],
    rows: [[['ぱ','pa'],['ぴ','pi'],['ぷ','pu'],['ぺ','pe'],['ぽ','po']]],
    tip: 'Bedakan tanda ゛ pada ば (ba) dan tanda ゜ pada ぱ (pa). Letaknya sama, tetapi bentuk dan bunyinya berbeda.'
  }
};
