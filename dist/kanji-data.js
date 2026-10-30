/* Reviewed learning dataset from the two user-provided PDFs. Supplementary explanations are editorial. */
const KANJI_CATEGORIES = [
  {
    "id": "numbers",
    "name": "Angka & hitungan"
  },
  {
    "id": "nature",
    "name": "Alam & cuaca"
  },
  {
    "id": "people",
    "name": "Orang & keluarga"
  },
  {
    "id": "body",
    "name": "Tubuh & tenaga"
  },
  {
    "id": "position",
    "name": "Letak & arah"
  },
  {
    "id": "time",
    "name": "Waktu"
  },
  {
    "id": "learning",
    "name": "Belajar & bahasa"
  },
  {
    "id": "places",
    "name": "Tempat & kendaraan"
  },
  {
    "id": "qualities",
    "name": "Ukuran & sifat"
  },
  {
    "id": "actions",
    "name": "Kegiatan sehari-hari"
  },
  {
    "id": "animals",
    "name": "Hewan"
  }
];
const KANJI_DATA = [
  {
    "id": "kanji-4e00",
    "char": "一",
    "category": "numbers",
    "meaning": "satu",
    "english": "one",
    "on": [
      "イチ",
      "イツ"
    ],
    "kun": [
      "ひと.つ"
    ],
    "strokes": 1,
    "radical": "一",
    "mnemonic": "Satu garis mendatar untuk angka satu.",
    "examples": [
      {
        "word": "一つ",
        "kana": "ひとつ",
        "meaning": "satu buah"
      },
      {
        "word": "一月",
        "kana": "いちがつ",
        "meaning": "Januari"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 1
    },
    "order": 1
  },
  {
    "id": "kanji-4e8c",
    "char": "二",
    "category": "numbers",
    "meaning": "dua",
    "english": "two",
    "on": [
      "ニ"
    ],
    "kun": [
      "ふた.つ"
    ],
    "strokes": 2,
    "radical": "二",
    "mnemonic": "Dua garis mendatar, dua hitungan.",
    "examples": [
      {
        "word": "二つ",
        "kana": "ふたつ",
        "meaning": "dua buah"
      },
      {
        "word": "二月",
        "kana": "にがつ",
        "meaning": "Februari"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 2
    },
    "order": 2
  },
  {
    "id": "kanji-4e09",
    "char": "三",
    "category": "numbers",
    "meaning": "tiga",
    "english": "three",
    "on": [
      "サン"
    ],
    "kun": [
      "み.つ",
      "みっ.つ"
    ],
    "strokes": 3,
    "radical": "一",
    "mnemonic": "Hitung tiga garis yang bertumpuk.",
    "examples": [
      {
        "word": "三つ",
        "kana": "みっつ",
        "meaning": "tiga buah"
      },
      {
        "word": "三月",
        "kana": "さんがつ",
        "meaning": "Maret"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 3
    },
    "order": 3
  },
  {
    "id": "kanji-56db",
    "char": "四",
    "category": "numbers",
    "meaning": "empat",
    "english": "four",
    "on": [
      "シ"
    ],
    "kun": [
      "よ",
      "よ.つ",
      "よっ.つ",
      "よん"
    ],
    "strokes": 5,
    "radical": "囗",
    "mnemonic": "Bayangkan empat sisi sebuah kotak.",
    "examples": [
      {
        "word": "四つ",
        "kana": "よっつ",
        "meaning": "empat buah"
      },
      {
        "word": "四月",
        "kana": "しがつ",
        "meaning": "April"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 4
    },
    "order": 4
  },
  {
    "id": "kanji-4e94",
    "char": "五",
    "category": "numbers",
    "meaning": "lima",
    "english": "five",
    "on": [
      "ゴ"
    ],
    "kun": [
      "いつ.つ"
    ],
    "strokes": 4,
    "radical": "二",
    "mnemonic": "Bayangkan lima jari yang dirapatkan dalam bentuk bersilang.",
    "examples": [
      {
        "word": "五つ",
        "kana": "いつつ",
        "meaning": "lima buah"
      },
      {
        "word": "五月",
        "kana": "ごがつ",
        "meaning": "Mei"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 5
    },
    "order": 5
  },
  {
    "id": "kanji-516d",
    "char": "六",
    "category": "numbers",
    "meaning": "enam",
    "english": "six",
    "on": [
      "ロク"
    ],
    "kun": [
      "む.つ",
      "むっ.つ",
      "むい"
    ],
    "strokes": 4,
    "radical": "八",
    "mnemonic": "Bayangkan atap dan dua kaki sebagai bentuk khas angka enam.",
    "examples": [
      {
        "word": "六つ",
        "kana": "むっつ",
        "meaning": "enam buah"
      },
      {
        "word": "六月",
        "kana": "ろくがつ",
        "meaning": "Juni"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 6
    },
    "order": 6
  },
  {
    "id": "kanji-4e03",
    "char": "七",
    "category": "numbers",
    "meaning": "tujuh",
    "english": "seven",
    "on": [
      "シチ"
    ],
    "kun": [
      "なな",
      "なな.つ",
      "なの"
    ],
    "strokes": 2,
    "radical": "一",
    "mnemonic": "Garis panjang bertemu garis yang melengkung: tanda tujuh.",
    "examples": [
      {
        "word": "七つ",
        "kana": "ななつ",
        "meaning": "tujuh buah"
      },
      {
        "word": "七月",
        "kana": "しちがつ",
        "meaning": "Juli"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 7
    },
    "order": 7
  },
  {
    "id": "kanji-516b",
    "char": "八",
    "category": "numbers",
    "meaning": "delapan",
    "english": "eight",
    "on": [
      "ハチ"
    ],
    "kun": [
      "や",
      "や.つ",
      "やっ.つ",
      "よう"
    ],
    "strokes": 2,
    "radical": "八",
    "mnemonic": "Dua garis membuka lebar, seperti tangan menyambut delapan.",
    "examples": [
      {
        "word": "八つ",
        "kana": "やっつ",
        "meaning": "delapan buah"
      },
      {
        "word": "八月",
        "kana": "はちがつ",
        "meaning": "Agustus"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 8
    },
    "order": 8
  },
  {
    "id": "kanji-4e5d",
    "char": "九",
    "category": "numbers",
    "meaning": "sembilan",
    "english": "nine",
    "on": [
      "キュウ",
      "ク"
    ],
    "kun": [
      "ここの.つ"
    ],
    "strokes": 2,
    "radical": "乙",
    "mnemonic": "Perhatikan satu garis yang berbelok dan mengait sebagai ciri sembilan.",
    "examples": [
      {
        "word": "九つ",
        "kana": "ここのつ",
        "meaning": "sembilan buah"
      },
      {
        "word": "九月",
        "kana": "くがつ",
        "meaning": "September"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 9
    },
    "order": 9
  },
  {
    "id": "kanji-5341",
    "char": "十",
    "category": "numbers",
    "meaning": "sepuluh",
    "english": "ten",
    "on": [
      "ジュウ",
      "ジッ"
    ],
    "kun": [
      "とお",
      "と"
    ],
    "strokes": 2,
    "radical": "十",
    "mnemonic": "Dua garis bersilang, seperti dua tangan dengan sepuluh jari.",
    "examples": [
      {
        "word": "十",
        "kana": "じゅう",
        "meaning": "sepuluh"
      },
      {
        "word": "十月",
        "kana": "じゅうがつ",
        "meaning": "Oktober"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 10
    },
    "order": 10
  },
  {
    "id": "kanji-767e",
    "char": "百",
    "category": "numbers",
    "meaning": "seratus",
    "english": "hundred",
    "on": [
      "ヒャク"
    ],
    "kun": [],
    "strokes": 6,
    "radical": "白",
    "mnemonic": "Bayangkan satu garis tambahan di atas 白 untuk mengingat seratus.",
    "examples": [
      {
        "word": "百",
        "kana": "ひゃく",
        "meaning": "seratus"
      },
      {
        "word": "三百",
        "kana": "さんびゃく",
        "meaning": "tiga ratus"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 11
    },
    "order": 11
  },
  {
    "id": "kanji-5343",
    "char": "千",
    "category": "numbers",
    "meaning": "seribu",
    "english": "thousand",
    "on": [
      "セン"
    ],
    "kun": [
      "ち"
    ],
    "strokes": 3,
    "radical": "十",
    "mnemonic": "Bentuk 十 diberi satu goresan miring: tingkatkan hitungan menjadi seribu.",
    "examples": [
      {
        "word": "千",
        "kana": "せん",
        "meaning": "seribu"
      },
      {
        "word": "三千",
        "kana": "さんぜん",
        "meaning": "tiga ribu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 12
    },
    "order": 12
  },
  {
    "id": "kanji-4e07",
    "char": "万",
    "category": "numbers",
    "meaning": "sepuluh ribu",
    "english": "ten thousand",
    "on": [
      "マン",
      "バン"
    ],
    "kun": [],
    "strokes": 3,
    "radical": "一",
    "mnemonic": "Bayangkan angka besar diikat dengan satu kait di bawah garis atas.",
    "examples": [
      {
        "word": "一万",
        "kana": "いちまん",
        "meaning": "sepuluh ribu"
      },
      {
        "word": "万年筆",
        "kana": "まんねんひつ",
        "meaning": "pena tinta"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 13
    },
    "order": 13
  },
  {
    "id": "kanji-5186",
    "char": "円",
    "category": "numbers",
    "meaning": "yen; lingkaran",
    "english": "yen; circle",
    "on": [
      "エン"
    ],
    "kun": [
      "まる.い"
    ],
    "strokes": 4,
    "radical": "冂",
    "mnemonic": "Bayangkan sebuah koin yen di dalam bingkai kecil.",
    "examples": [
      {
        "word": "百円",
        "kana": "ひゃくえん",
        "meaning": "seratus yen"
      },
      {
        "word": "円い",
        "kana": "まるい",
        "meaning": "bulat"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 14
    },
    "order": 14
  },
  {
    "id": "kanji-5e74",
    "char": "年",
    "category": "time",
    "meaning": "tahun; umur",
    "english": "year; age",
    "on": [
      "ネン"
    ],
    "kun": [
      "とし"
    ],
    "strokes": 6,
    "radical": "干",
    "mnemonic": "Ingat garis bertingkat sebagai penanda tahun yang terus bertambah.",
    "examples": [
      {
        "word": "今年",
        "kana": "ことし",
        "meaning": "tahun ini"
      },
      {
        "word": "一年",
        "kana": "いちねん",
        "meaning": "satu tahun"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 15
    },
    "order": 15
  },
  {
    "id": "kanji-5c71",
    "char": "山",
    "category": "nature",
    "meaning": "gunung",
    "english": "mountain",
    "on": [
      "サン"
    ],
    "kun": [
      "やま"
    ],
    "strokes": 3,
    "radical": "山",
    "mnemonic": "Tiga puncak gunung, dengan puncak tengah paling tinggi.",
    "examples": [
      {
        "word": "山",
        "kana": "やま",
        "meaning": "gunung"
      },
      {
        "word": "富士山",
        "kana": "ふじさん",
        "meaning": "Gunung Fuji"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 16
    },
    "order": 16
  },
  {
    "id": "kanji-5ddd",
    "char": "川",
    "category": "nature",
    "meaning": "sungai",
    "english": "river",
    "on": [
      "セン"
    ],
    "kun": [
      "かわ"
    ],
    "strokes": 3,
    "radical": "巛",
    "mnemonic": "Tiga aliran air memanjang berdampingan.",
    "examples": [
      {
        "word": "川",
        "kana": "かわ",
        "meaning": "sungai"
      },
      {
        "word": "小川",
        "kana": "おがわ",
        "meaning": "sungai kecil"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 17
    },
    "order": 17
  },
  {
    "id": "kanji-7530",
    "char": "田",
    "category": "nature",
    "meaning": "sawah; ladang",
    "english": "rice field",
    "on": [
      "デン"
    ],
    "kun": [
      "た"
    ],
    "strokes": 5,
    "radical": "田",
    "mnemonic": "Kotak dibagi empat seperti petak sawah.",
    "examples": [
      {
        "word": "田んぼ",
        "kana": "たんぼ",
        "meaning": "sawah"
      },
      {
        "word": "水田",
        "kana": "すいでん",
        "meaning": "sawah"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 18
    },
    "order": 18
  },
  {
    "id": "kanji-65e5",
    "char": "日",
    "category": "nature",
    "meaning": "hari; matahari",
    "english": "day; sun",
    "on": [
      "ニチ",
      "ジツ"
    ],
    "kun": [
      "ひ",
      "か"
    ],
    "strokes": 4,
    "radical": "日",
    "mnemonic": "Bayangkan matahari yang dipadatkan menjadi sebuah kotak.",
    "examples": [
      {
        "word": "日曜日",
        "kana": "にちようび",
        "meaning": "Minggu"
      },
      {
        "word": "日本",
        "kana": "にほん",
        "meaning": "Jepang"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 19
    },
    "order": 19
  },
  {
    "id": "kanji-6708",
    "char": "月",
    "category": "nature",
    "meaning": "bulan",
    "english": "moon; month",
    "on": [
      "ゲツ",
      "ガツ"
    ],
    "kun": [
      "つき"
    ],
    "strokes": 4,
    "radical": "月",
    "mnemonic": "Bingkai melengkung dengan dua garis di dalamnya mengingatkan bulan.",
    "examples": [
      {
        "word": "月",
        "kana": "つき",
        "meaning": "bulan"
      },
      {
        "word": "月曜日",
        "kana": "げつようび",
        "meaning": "Senin"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        2
      ],
      "number": 20
    },
    "order": 20
  },
  {
    "id": "kanji-706b",
    "char": "火",
    "category": "nature",
    "meaning": "api",
    "english": "fire",
    "on": [
      "カ"
    ],
    "kun": [
      "ひ",
      "ほ"
    ],
    "strokes": 4,
    "radical": "火",
    "mnemonic": "Lidah api naik di tengah dan percikannya menyebar ke samping.",
    "examples": [
      {
        "word": "火",
        "kana": "ひ",
        "meaning": "api"
      },
      {
        "word": "火曜日",
        "kana": "かようび",
        "meaning": "Selasa"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 21
    },
    "order": 21
  },
  {
    "id": "kanji-6c34",
    "char": "水",
    "category": "nature",
    "meaning": "air",
    "english": "water",
    "on": [
      "スイ"
    ],
    "kun": [
      "みず"
    ],
    "strokes": 4,
    "radical": "水",
    "mnemonic": "Aliran utama di tengah dengan percikan air di kedua sisi.",
    "examples": [
      {
        "word": "水",
        "kana": "みず",
        "meaning": "air"
      },
      {
        "word": "水曜日",
        "kana": "すいようび",
        "meaning": "Rabu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 22
    },
    "order": 22
  },
  {
    "id": "kanji-6728",
    "char": "木",
    "category": "nature",
    "meaning": "pohon; kayu",
    "english": "tree; wood",
    "on": [
      "モク",
      "ボク"
    ],
    "kun": [
      "き",
      "こ"
    ],
    "strokes": 4,
    "radical": "木",
    "mnemonic": "Batang, cabang, dan akar membentuk sebuah pohon.",
    "examples": [
      {
        "word": "木",
        "kana": "き",
        "meaning": "pohon"
      },
      {
        "word": "木曜日",
        "kana": "もくようび",
        "meaning": "Kamis"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 23
    },
    "order": 23
  },
  {
    "id": "kanji-91d1",
    "char": "金",
    "category": "nature",
    "meaning": "emas; uang; logam",
    "english": "gold; money; metal",
    "on": [
      "キン",
      "コン"
    ],
    "kun": [
      "かね",
      "かな"
    ],
    "strokes": 8,
    "radical": "金",
    "mnemonic": "Bayangkan butiran emas tersimpan di bawah sebuah atap.",
    "examples": [
      {
        "word": "お金",
        "kana": "おかね",
        "meaning": "uang"
      },
      {
        "word": "金曜日",
        "kana": "きんようび",
        "meaning": "Jumat"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 24
    },
    "order": 24
  },
  {
    "id": "kanji-571f",
    "char": "土",
    "category": "nature",
    "meaning": "tanah",
    "english": "earth; soil",
    "on": [
      "ド",
      "ト"
    ],
    "kun": [
      "つち"
    ],
    "strokes": 3,
    "radical": "土",
    "mnemonic": "Tanaman kecil berdiri di atas permukaan tanah yang lebar.",
    "examples": [
      {
        "word": "土",
        "kana": "つち",
        "meaning": "tanah"
      },
      {
        "word": "土曜日",
        "kana": "どようび",
        "meaning": "Sabtu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 25
    },
    "order": 25
  },
  {
    "id": "kanji-4e0a",
    "char": "上",
    "category": "position",
    "meaning": "atas; naik",
    "english": "above; up",
    "on": [
      "ジョウ"
    ],
    "kun": [
      "うえ",
      "あ.がる",
      "あ.げる",
      "のぼ.る"
    ],
    "strokes": 3,
    "radical": "一",
    "mnemonic": "Garis kecil berada di atas garis dasar.",
    "examples": [
      {
        "word": "上",
        "kana": "うえ",
        "meaning": "atas"
      },
      {
        "word": "上手",
        "kana": "じょうず",
        "meaning": "terampil"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 26
    },
    "order": 26
  },
  {
    "id": "kanji-4e0b",
    "char": "下",
    "category": "position",
    "meaning": "bawah; turun",
    "english": "below; down",
    "on": [
      "カ",
      "ゲ"
    ],
    "kun": [
      "した",
      "さ.がる",
      "さ.げる",
      "くだ.る"
    ],
    "strokes": 3,
    "radical": "一",
    "mnemonic": "Garis kecil menjulur ke bawah garis atas.",
    "examples": [
      {
        "word": "下",
        "kana": "した",
        "meaning": "bawah"
      },
      {
        "word": "下手",
        "kana": "へた",
        "meaning": "kurang terampil"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 27
    },
    "order": 27
  },
  {
    "id": "kanji-4e2d",
    "char": "中",
    "category": "position",
    "meaning": "tengah; dalam",
    "english": "middle; inside",
    "on": [
      "チュウ",
      "ジュウ"
    ],
    "kun": [
      "なか"
    ],
    "strokes": 4,
    "radical": "丨",
    "mnemonic": "Satu garis melewati tepat di tengah sebuah kotak.",
    "examples": [
      {
        "word": "中",
        "kana": "なか",
        "meaning": "dalam"
      },
      {
        "word": "中国",
        "kana": "ちゅうごく",
        "meaning": "Tiongkok"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 28
    },
    "order": 28
  },
  {
    "id": "kanji-534a",
    "char": "半",
    "category": "numbers",
    "meaning": "setengah",
    "english": "half",
    "on": [
      "ハン"
    ],
    "kun": [
      "なか.ば"
    ],
    "strokes": 5,
    "radical": "十",
    "mnemonic": "Bayangkan sebuah benda dibagi menjadi dua bagian.",
    "examples": [
      {
        "word": "半分",
        "kana": "はんぶん",
        "meaning": "setengah"
      },
      {
        "word": "一時半",
        "kana": "いちじはん",
        "meaning": "pukul setengah dua"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 29
    },
    "order": 29
  },
  {
    "id": "kanji-5206",
    "char": "分",
    "category": "numbers",
    "meaning": "menit; bagian; mengerti",
    "english": "minute; part; understand",
    "on": [
      "フン",
      "ブン",
      "ブ"
    ],
    "kun": [
      "わ.かる",
      "わ.ける"
    ],
    "strokes": 4,
    "radical": "刀",
    "mnemonic": "Bayangkan pisau membagi sesuatu menjadi beberapa bagian.",
    "examples": [
      {
        "word": "五分",
        "kana": "ごふん",
        "meaning": "lima menit"
      },
      {
        "word": "分かる",
        "kana": "わかる",
        "meaning": "mengerti"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 30
    },
    "order": 30
  },
  {
    "id": "kanji-4eba",
    "char": "人",
    "category": "people",
    "meaning": "orang; manusia",
    "english": "person; human",
    "on": [
      "ジン",
      "ニン"
    ],
    "kun": [
      "ひと"
    ],
    "strokes": 2,
    "radical": "人",
    "mnemonic": "Dua kaki membentuk siluet orang yang berdiri.",
    "examples": [
      {
        "word": "人",
        "kana": "ひと",
        "meaning": "orang"
      },
      {
        "word": "日本人",
        "kana": "にほんじん",
        "meaning": "orang Jepang"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 31
    },
    "order": 31
  },
  {
    "id": "kanji-5b50",
    "char": "子",
    "category": "people",
    "meaning": "anak",
    "english": "child",
    "on": [
      "シ",
      "ス"
    ],
    "kun": [
      "こ"
    ],
    "strokes": 3,
    "radical": "子",
    "mnemonic": "Bayangkan kepala besar dan kedua tangan seorang anak.",
    "examples": [
      {
        "word": "子ども",
        "kana": "こども",
        "meaning": "anak"
      },
      {
        "word": "男の子",
        "kana": "おとこのこ",
        "meaning": "anak laki-laki"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 32
    },
    "order": 32
  },
  {
    "id": "kanji-5973",
    "char": "女",
    "category": "people",
    "meaning": "perempuan",
    "english": "woman; female",
    "on": [
      "ジョ"
    ],
    "kun": [
      "おんな",
      "め"
    ],
    "strokes": 3,
    "radical": "女",
    "mnemonic": "Bayangkan sosok dengan tangan bersilang untuk mengingat bentuknya.",
    "examples": [
      {
        "word": "女の人",
        "kana": "おんなのひと",
        "meaning": "perempuan"
      },
      {
        "word": "女の子",
        "kana": "おんなのこ",
        "meaning": "anak perempuan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 33
    },
    "order": 33
  },
  {
    "id": "kanji-7537",
    "char": "男",
    "category": "people",
    "meaning": "laki-laki",
    "english": "man; male",
    "on": [
      "ダン",
      "ナン"
    ],
    "kun": [
      "おとこ"
    ],
    "strokes": 7,
    "radical": "田",
    "mnemonic": "Gabungkan sawah 田 dan tenaga 力 sebagai bantuan ingatan visual.",
    "examples": [
      {
        "word": "男の人",
        "kana": "おとこのひと",
        "meaning": "laki-laki"
      },
      {
        "word": "男の子",
        "kana": "おとこのこ",
        "meaning": "anak laki-laki"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 34
    },
    "order": 34
  },
  {
    "id": "kanji-76ee",
    "char": "目",
    "category": "body",
    "meaning": "mata",
    "english": "eye",
    "on": [
      "モク",
      "ボク"
    ],
    "kun": [
      "め",
      "ま"
    ],
    "strokes": 5,
    "radical": "目",
    "mnemonic": "Kotak tegak dengan garis di dalamnya menyerupai mata yang diputar.",
    "examples": [
      {
        "word": "目",
        "kana": "め",
        "meaning": "mata"
      },
      {
        "word": "一日目",
        "kana": "いちにちめ",
        "meaning": "hari pertama"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 35
    },
    "order": 35
  },
  {
    "id": "kanji-53e3",
    "char": "口",
    "category": "body",
    "meaning": "mulut",
    "english": "mouth",
    "on": [
      "コウ",
      "ク"
    ],
    "kun": [
      "くち"
    ],
    "strokes": 3,
    "radical": "口",
    "mnemonic": "Bentuk kotak seperti mulut yang terbuka.",
    "examples": [
      {
        "word": "口",
        "kana": "くち",
        "meaning": "mulut"
      },
      {
        "word": "入口",
        "kana": "いりぐち",
        "meaning": "pintu masuk"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 36
    },
    "order": 36
  },
  {
    "id": "kanji-8033",
    "char": "耳",
    "category": "body",
    "meaning": "telinga",
    "english": "ear",
    "on": [
      "ジ"
    ],
    "kun": [
      "みみ"
    ],
    "strokes": 6,
    "radical": "耳",
    "mnemonic": "Perhatikan bentuk panjang dan garis dalamnya seperti bagian telinga.",
    "examples": [
      {
        "word": "耳",
        "kana": "みみ",
        "meaning": "telinga"
      },
      {
        "word": "耳鼻科",
        "kana": "じびか",
        "meaning": "poli THT"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 37
    },
    "order": 37
  },
  {
    "id": "kanji-624b",
    "char": "手",
    "category": "body",
    "meaning": "tangan",
    "english": "hand",
    "on": [
      "シュ"
    ],
    "kun": [
      "て",
      "た"
    ],
    "strokes": 4,
    "radical": "手",
    "mnemonic": "Beberapa garis kecil bertemu seperti jari pada telapak tangan.",
    "examples": [
      {
        "word": "手",
        "kana": "て",
        "meaning": "tangan"
      },
      {
        "word": "上手",
        "kana": "じょうず",
        "meaning": "terampil"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 38
    },
    "order": 38
  },
  {
    "id": "kanji-8db3",
    "char": "足",
    "category": "body",
    "meaning": "kaki; cukup",
    "english": "foot; leg; enough",
    "on": [
      "ソク"
    ],
    "kun": [
      "あし",
      "た.りる",
      "た.す"
    ],
    "strokes": 7,
    "radical": "足",
    "mnemonic": "Bayangkan lutut di bagian atas dan telapak yang melangkah di bawah.",
    "examples": [
      {
        "word": "足",
        "kana": "あし",
        "meaning": "kaki"
      },
      {
        "word": "足りる",
        "kana": "たりる",
        "meaning": "cukup"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 39
    },
    "order": 39
  },
  {
    "id": "kanji-529b",
    "char": "力",
    "category": "body",
    "meaning": "tenaga; kekuatan",
    "english": "power; strength",
    "on": [
      "リョク",
      "リキ"
    ],
    "kun": [
      "ちから"
    ],
    "strokes": 2,
    "radical": "力",
    "mnemonic": "Goresan yang menekuk menyerupai lengan yang sedang mengerahkan tenaga.",
    "examples": [
      {
        "word": "力",
        "kana": "ちから",
        "meaning": "tenaga"
      },
      {
        "word": "体力",
        "kana": "たいりょく",
        "meaning": "stamina"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        3
      ],
      "number": 40
    },
    "order": 40
  },
  {
    "id": "kanji-7236",
    "char": "父",
    "category": "people",
    "meaning": "ayah",
    "english": "father",
    "on": [
      "フ"
    ],
    "kun": [
      "ちち"
    ],
    "strokes": 4,
    "radical": "父",
    "mnemonic": "Bayangkan dua tangan bersilang yang bekerja untuk keluarga.",
    "examples": [
      {
        "word": "父",
        "kana": "ちち",
        "meaning": "ayah sendiri"
      },
      {
        "word": "お父さん",
        "kana": "おとうさん",
        "meaning": "ayah"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 41
    },
    "order": 41
  },
  {
    "id": "kanji-6bcd",
    "char": "母",
    "category": "people",
    "meaning": "ibu",
    "english": "mother",
    "on": [
      "ボ"
    ],
    "kun": [
      "はは"
    ],
    "strokes": 5,
    "radical": "母",
    "mnemonic": "Dua titik di dalam bingkai menjadi ciri khas untuk mengingat ibu.",
    "examples": [
      {
        "word": "母",
        "kana": "はは",
        "meaning": "ibu sendiri"
      },
      {
        "word": "お母さん",
        "kana": "おかあさん",
        "meaning": "ibu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 42
    },
    "order": 42
  },
  {
    "id": "kanji-5e97",
    "char": "店",
    "category": "places",
    "meaning": "toko; warung",
    "english": "shop; store",
    "on": [
      "テン"
    ],
    "kun": [
      "みせ"
    ],
    "strokes": 8,
    "radical": "广",
    "mnemonic": "Bayangkan sebuah tempat berdagang di bawah atap yang lebar.",
    "examples": [
      {
        "word": "店",
        "kana": "みせ",
        "meaning": "toko"
      },
      {
        "word": "店員",
        "kana": "てんいん",
        "meaning": "pegawai toko"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 43
    },
    "order": 43
  },
  {
    "id": "kanji-99c5",
    "char": "駅",
    "category": "places",
    "meaning": "stasiun",
    "english": "station",
    "on": [
      "エキ"
    ],
    "kun": [],
    "strokes": 14,
    "radical": "馬",
    "mnemonic": "Bagian kiri 馬 mengingatkan perjalanan sebelum adanya kereta.",
    "examples": [
      {
        "word": "駅",
        "kana": "えき",
        "meaning": "stasiun"
      },
      {
        "word": "駅前",
        "kana": "えきまえ",
        "meaning": "depan stasiun"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 44
    },
    "order": 44
  },
  {
    "id": "kanji-5148",
    "char": "先",
    "category": "time",
    "meaning": "sebelum; lebih dahulu; ujung",
    "english": "ahead; previous; tip",
    "on": [
      "セン"
    ],
    "kun": [
      "さき"
    ],
    "strokes": 6,
    "radical": "儿",
    "mnemonic": "Bayangkan seseorang dengan kaki yang sudah melangkah lebih dahulu.",
    "examples": [
      {
        "word": "先生",
        "kana": "せんせい",
        "meaning": "guru"
      },
      {
        "word": "先週",
        "kana": "せんしゅう",
        "meaning": "minggu lalu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 45
    },
    "order": 45
  },
  {
    "id": "kanji-751f",
    "char": "生",
    "category": "people",
    "meaning": "hidup; lahir; mentah",
    "english": "life; birth; raw",
    "on": [
      "セイ",
      "ショウ"
    ],
    "kun": [
      "い.きる",
      "う.まれる",
      "なま"
    ],
    "strokes": 5,
    "radical": "生",
    "mnemonic": "Bayangkan tunas yang muncul dan tumbuh dari tanah.",
    "examples": [
      {
        "word": "学生",
        "kana": "がくせい",
        "meaning": "pelajar"
      },
      {
        "word": "生まれる",
        "kana": "うまれる",
        "meaning": "lahir"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 46
    },
    "order": 46
  },
  {
    "id": "kanji-5b66",
    "char": "学",
    "category": "learning",
    "meaning": "belajar",
    "english": "study; learning",
    "on": [
      "ガク"
    ],
    "kun": [
      "まな.ぶ"
    ],
    "strokes": 8,
    "radical": "子",
    "mnemonic": "Seorang anak 子 berada di bawah atap tempat belajar.",
    "examples": [
      {
        "word": "学生",
        "kana": "がくせい",
        "meaning": "pelajar"
      },
      {
        "word": "学校",
        "kana": "がっこう",
        "meaning": "sekolah"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 47
    },
    "order": 47
  },
  {
    "id": "kanji-6821",
    "char": "校",
    "category": "learning",
    "meaning": "sekolah",
    "english": "school",
    "on": [
      "コウ"
    ],
    "kun": [],
    "strokes": 10,
    "radical": "木",
    "mnemonic": "Ingat 木 di kiri dan kaitkan bentuk lengkapnya dengan gedung sekolah.",
    "examples": [
      {
        "word": "学校",
        "kana": "がっこう",
        "meaning": "sekolah"
      },
      {
        "word": "校長",
        "kana": "こうちょう",
        "meaning": "kepala sekolah"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 48
    },
    "order": 48
  },
  {
    "id": "kanji-53cb",
    "char": "友",
    "category": "people",
    "meaning": "teman",
    "english": "friend",
    "on": [
      "ユウ"
    ],
    "kun": [
      "とも"
    ],
    "strokes": 4,
    "radical": "又",
    "mnemonic": "Dua bentuk tangan saling bertemu seperti teman yang membantu.",
    "examples": [
      {
        "word": "友だち",
        "kana": "ともだち",
        "meaning": "teman"
      },
      {
        "word": "友人",
        "kana": "ゆうじん",
        "meaning": "teman"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 49
    },
    "order": 49
  },
  {
    "id": "kanji-672c",
    "char": "本",
    "category": "learning",
    "meaning": "buku; asal",
    "english": "book; origin",
    "on": [
      "ホン"
    ],
    "kun": [
      "もと"
    ],
    "strokes": 5,
    "radical": "木",
    "mnemonic": "Pohon 木 diberi tanda pada pangkalnya untuk mengingat asal.",
    "examples": [
      {
        "word": "本",
        "kana": "ほん",
        "meaning": "buku"
      },
      {
        "word": "日本",
        "kana": "にほん",
        "meaning": "Jepang"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 50
    },
    "order": 50
  },
  {
    "id": "kanji-6bce",
    "char": "毎",
    "category": "time",
    "meaning": "setiap",
    "english": "every; each",
    "on": [
      "マイ"
    ],
    "kun": [],
    "strokes": 6,
    "radical": "毋",
    "mnemonic": "Bayangkan tanda yang terus diulang untuk mengingat kata setiap.",
    "examples": [
      {
        "word": "毎日",
        "kana": "まいにち",
        "meaning": "setiap hari"
      },
      {
        "word": "毎週",
        "kana": "まいしゅう",
        "meaning": "setiap minggu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 51
    },
    "order": 51
  },
  {
    "id": "kanji-524d",
    "char": "前",
    "category": "position",
    "meaning": "depan; sebelum",
    "english": "front; before",
    "on": [
      "ゼン"
    ],
    "kun": [
      "まえ"
    ],
    "strokes": 9,
    "radical": "刀",
    "mnemonic": "Ingat bagian kanan yang seperti pisau sebagai penanda sisi depan.",
    "examples": [
      {
        "word": "前",
        "kana": "まえ",
        "meaning": "depan"
      },
      {
        "word": "午前",
        "kana": "ごぜん",
        "meaning": "sebelum tengah hari"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 52
    },
    "order": 52
  },
  {
    "id": "kanji-5f8c",
    "char": "後",
    "category": "position",
    "meaning": "belakang; sesudah",
    "english": "back; after",
    "on": [
      "ゴ",
      "コウ"
    ],
    "kun": [
      "あと",
      "うし.ろ",
      "のち"
    ],
    "strokes": 9,
    "radical": "彳",
    "mnemonic": "Bayangkan langkah kecil di kiri mengikuti orang dari belakang.",
    "examples": [
      {
        "word": "後ろ",
        "kana": "うしろ",
        "meaning": "belakang"
      },
      {
        "word": "午後",
        "kana": "ごご",
        "meaning": "sesudah tengah hari"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 53
    },
    "order": 53
  },
  {
    "id": "kanji-5de6",
    "char": "左",
    "category": "position",
    "meaning": "kiri",
    "english": "left",
    "on": [
      "サ"
    ],
    "kun": [
      "ひだり"
    ],
    "strokes": 5,
    "radical": "工",
    "mnemonic": "Di bawah bentuk tangan ada 工 untuk membedakannya dari 右.",
    "examples": [
      {
        "word": "左",
        "kana": "ひだり",
        "meaning": "kiri"
      },
      {
        "word": "左手",
        "kana": "ひだりて",
        "meaning": "tangan kiri"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 54
    },
    "order": 54
  },
  {
    "id": "kanji-53f3",
    "char": "右",
    "category": "position",
    "meaning": "kanan",
    "english": "right",
    "on": [
      "ウ",
      "ユウ"
    ],
    "kun": [
      "みぎ"
    ],
    "strokes": 5,
    "radical": "口",
    "mnemonic": "Di bawah bentuk tangan ada mulut 口; berbeda dengan 左 yang memakai 工.",
    "examples": [
      {
        "word": "右",
        "kana": "みぎ",
        "meaning": "kanan"
      },
      {
        "word": "右手",
        "kana": "みぎて",
        "meaning": "tangan kanan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 55
    },
    "order": 55
  },
  {
    "id": "kanji-6771",
    "char": "東",
    "category": "position",
    "meaning": "timur",
    "english": "east",
    "on": [
      "トウ"
    ],
    "kun": [
      "ひがし"
    ],
    "strokes": 8,
    "radical": "木",
    "mnemonic": "Bayangkan matahari 日 tampak di antara cabang pohon saat terbit di timur.",
    "examples": [
      {
        "word": "東",
        "kana": "ひがし",
        "meaning": "timur"
      },
      {
        "word": "東京",
        "kana": "とうきょう",
        "meaning": "Tokyo"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 56
    },
    "order": 56
  },
  {
    "id": "kanji-897f",
    "char": "西",
    "category": "position",
    "meaning": "barat",
    "english": "west",
    "on": [
      "セイ",
      "サイ"
    ],
    "kun": [
      "にし"
    ],
    "strokes": 6,
    "radical": "襾",
    "mnemonic": "Ingat dua goresan di dalam bingkai sebagai bentuk khas barat.",
    "examples": [
      {
        "word": "西",
        "kana": "にし",
        "meaning": "barat"
      },
      {
        "word": "西口",
        "kana": "にしぐち",
        "meaning": "pintu keluar barat"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 57
    },
    "order": 57
  },
  {
    "id": "kanji-5357",
    "char": "南",
    "category": "position",
    "meaning": "selatan",
    "english": "south",
    "on": [
      "ナン"
    ],
    "kun": [
      "みなみ"
    ],
    "strokes": 9,
    "radical": "十",
    "mnemonic": "Bayangkan penunjuk arah menggantung ke bawah menuju selatan.",
    "examples": [
      {
        "word": "南",
        "kana": "みなみ",
        "meaning": "selatan"
      },
      {
        "word": "南口",
        "kana": "みなみぐち",
        "meaning": "pintu keluar selatan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 58
    },
    "order": 58
  },
  {
    "id": "kanji-5317",
    "char": "北",
    "category": "position",
    "meaning": "utara",
    "english": "north",
    "on": [
      "ホク"
    ],
    "kun": [
      "きた"
    ],
    "strokes": 5,
    "radical": "匕",
    "mnemonic": "Dua bentuk saling membelakangi menjadi pengingat arah utara.",
    "examples": [
      {
        "word": "北",
        "kana": "きた",
        "meaning": "utara"
      },
      {
        "word": "北口",
        "kana": "きたぐち",
        "meaning": "pintu keluar utara"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 59
    },
    "order": 59
  },
  {
    "id": "kanji-540d",
    "char": "名",
    "category": "people",
    "meaning": "nama",
    "english": "name",
    "on": [
      "メイ",
      "ミョウ"
    ],
    "kun": [
      "な"
    ],
    "strokes": 6,
    "radical": "口",
    "mnemonic": "Gabungkan bentuk malam 夕 dan mulut 口 yang menyebut sebuah nama.",
    "examples": [
      {
        "word": "名前",
        "kana": "なまえ",
        "meaning": "nama"
      },
      {
        "word": "有名",
        "kana": "ゆうめい",
        "meaning": "terkenal"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        4
      ],
      "number": 60
    },
    "order": 60
  },
  {
    "id": "kanji-725b",
    "char": "牛",
    "category": "animals",
    "meaning": "sapi",
    "english": "cow; cattle",
    "on": [
      "ギュウ"
    ],
    "kun": [
      "うし"
    ],
    "strokes": 4,
    "radical": "牛",
    "mnemonic": "Garis tegak dan dua cabang mengingatkan kepala sapi bertanduk.",
    "examples": [
      {
        "word": "牛",
        "kana": "うし",
        "meaning": "sapi"
      },
      {
        "word": "牛肉",
        "kana": "ぎゅうにく",
        "meaning": "daging sapi"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 61
    },
    "order": 61
  },
  {
    "id": "kanji-99ac",
    "char": "馬",
    "category": "animals",
    "meaning": "kuda",
    "english": "horse",
    "on": [
      "バ"
    ],
    "kun": [
      "うま"
    ],
    "strokes": 10,
    "radical": "馬",
    "mnemonic": "Bayangkan badan kuda dan empat titik kecil sebagai kakinya.",
    "examples": [
      {
        "word": "馬",
        "kana": "うま",
        "meaning": "kuda"
      },
      {
        "word": "馬車",
        "kana": "ばしゃ",
        "meaning": "kereta kuda"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 62
    },
    "order": 62
  },
  {
    "id": "kanji-9b5a",
    "char": "魚",
    "category": "animals",
    "meaning": "ikan",
    "english": "fish",
    "on": [
      "ギョ"
    ],
    "kun": [
      "さかな",
      "うお"
    ],
    "strokes": 11,
    "radical": "魚",
    "mnemonic": "Bayangkan kepala, badan bersisik, lalu ekor di bagian bawah.",
    "examples": [
      {
        "word": "魚",
        "kana": "さかな",
        "meaning": "ikan"
      },
      {
        "word": "金魚",
        "kana": "きんぎょ",
        "meaning": "ikan mas hias"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 63
    },
    "order": 63
  },
  {
    "id": "kanji-8c9d",
    "char": "貝",
    "category": "animals",
    "meaning": "kerang",
    "english": "shellfish; shell",
    "on": [
      "バイ"
    ],
    "kun": [
      "かい"
    ],
    "strokes": 7,
    "radical": "貝",
    "mnemonic": "Kotak atas menjadi cangkang, dua goresan bawah menjadi kaki kecil.",
    "examples": [
      {
        "word": "貝",
        "kana": "かい",
        "meaning": "kerang"
      },
      {
        "word": "貝殻",
        "kana": "かいがら",
        "meaning": "cangkang kerang"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 64
    },
    "order": 64
  },
  {
    "id": "kanji-96e8",
    "char": "雨",
    "category": "nature",
    "meaning": "hujan",
    "english": "rain",
    "on": [
      "ウ"
    ],
    "kun": [
      "あめ",
      "あま"
    ],
    "strokes": 8,
    "radical": "雨",
    "mnemonic": "Titik-titik di bawah garis atas seperti tetesan hujan dari awan.",
    "examples": [
      {
        "word": "雨",
        "kana": "あめ",
        "meaning": "hujan"
      },
      {
        "word": "雨の日",
        "kana": "あめのひ",
        "meaning": "hari hujan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 65
    },
    "order": 65
  },
  {
    "id": "kanji-5929",
    "char": "天",
    "category": "nature",
    "meaning": "langit; surga",
    "english": "sky; heaven",
    "on": [
      "テン"
    ],
    "kun": [
      "あめ",
      "あま"
    ],
    "strokes": 4,
    "radical": "大",
    "mnemonic": "Satu garis di atas 大 mengingatkan sesuatu di atas kepala: langit.",
    "examples": [
      {
        "word": "天気",
        "kana": "てんき",
        "meaning": "cuaca"
      },
      {
        "word": "天国",
        "kana": "てんごく",
        "meaning": "surga"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 66
    },
    "order": 66
  },
  {
    "id": "kanji-6c17",
    "char": "気",
    "category": "nature",
    "meaning": "semangat; perasaan; udara",
    "english": "spirit; feeling; air",
    "on": [
      "キ",
      "ケ"
    ],
    "kun": [],
    "strokes": 6,
    "radical": "气",
    "mnemonic": "Bayangkan udara atau semangat bergerak di bawah atap melengkung.",
    "examples": [
      {
        "word": "元気",
        "kana": "げんき",
        "meaning": "sehat"
      },
      {
        "word": "天気",
        "kana": "てんき",
        "meaning": "cuaca"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 67
    },
    "order": 67
  },
  {
    "id": "kanji-8eca",
    "char": "車",
    "category": "places",
    "meaning": "mobil; kendaraan",
    "english": "car; vehicle",
    "on": [
      "シャ"
    ],
    "kun": [
      "くるま"
    ],
    "strokes": 7,
    "radical": "車",
    "mnemonic": "Bayangkan roda dan poros kendaraan dilihat dari atas.",
    "examples": [
      {
        "word": "車",
        "kana": "くるま",
        "meaning": "mobil"
      },
      {
        "word": "電車",
        "kana": "でんしゃ",
        "meaning": "kereta listrik"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 68
    },
    "order": 68
  },
  {
    "id": "kanji-9580",
    "char": "門",
    "category": "places",
    "meaning": "gerbang",
    "english": "gate",
    "on": [
      "モン"
    ],
    "kun": [
      "かど"
    ],
    "strokes": 8,
    "radical": "門",
    "mnemonic": "Dua daun pintu berdiri berdampingan membentuk gerbang.",
    "examples": [
      {
        "word": "門",
        "kana": "もん",
        "meaning": "gerbang"
      },
      {
        "word": "正門",
        "kana": "せいもん",
        "meaning": "gerbang utama"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 69
    },
    "order": 69
  },
  {
    "id": "kanji-5348",
    "char": "午",
    "category": "time",
    "meaning": "tengah hari",
    "english": "noon",
    "on": [
      "ゴ"
    ],
    "kun": [],
    "strokes": 4,
    "radical": "十",
    "mnemonic": "Gunakan 午 sebagai patokan tengah hari di antara 前 dan 後.",
    "examples": [
      {
        "word": "午前",
        "kana": "ごぜん",
        "meaning": "sebelum tengah hari"
      },
      {
        "word": "午後",
        "kana": "ごご",
        "meaning": "sesudah tengah hari"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 70
    },
    "order": 70
  },
  {
    "id": "kanji-5927",
    "char": "大",
    "category": "qualities",
    "meaning": "besar",
    "english": "big; large",
    "on": [
      "ダイ",
      "タイ"
    ],
    "kun": [
      "おお.きい",
      "おお"
    ],
    "strokes": 3,
    "radical": "大",
    "mnemonic": "Seseorang merentangkan tangan untuk menunjukkan ukuran besar.",
    "examples": [
      {
        "word": "大きい",
        "kana": "おおきい",
        "meaning": "besar"
      },
      {
        "word": "大学",
        "kana": "だいがく",
        "meaning": "universitas"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 71
    },
    "order": 71
  },
  {
    "id": "kanji-5c0f",
    "char": "小",
    "category": "qualities",
    "meaning": "kecil",
    "english": "small; little",
    "on": [
      "ショウ"
    ],
    "kun": [
      "ちい.さい",
      "こ",
      "お"
    ],
    "strokes": 3,
    "radical": "小",
    "mnemonic": "Tiga goresan pendek mengingatkan benda kecil yang tersebar.",
    "examples": [
      {
        "word": "小さい",
        "kana": "ちいさい",
        "meaning": "kecil"
      },
      {
        "word": "小学校",
        "kana": "しょうがっこう",
        "meaning": "sekolah dasar"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 72
    },
    "order": 72
  },
  {
    "id": "kanji-9ad8",
    "char": "高",
    "category": "qualities",
    "meaning": "tinggi; mahal",
    "english": "high; tall; expensive",
    "on": [
      "コウ"
    ],
    "kun": [
      "たか.い"
    ],
    "strokes": 10,
    "radical": "高",
    "mnemonic": "Bayangkan gedung bertingkat yang menjulang tinggi.",
    "examples": [
      {
        "word": "高い",
        "kana": "たかい",
        "meaning": "tinggi atau mahal"
      },
      {
        "word": "高校",
        "kana": "こうこう",
        "meaning": "SMA"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 73
    },
    "order": 73
  },
  {
    "id": "kanji-5b89",
    "char": "安",
    "category": "qualities",
    "meaning": "murah; tenang",
    "english": "cheap; peaceful",
    "on": [
      "アン"
    ],
    "kun": [
      "やす.い"
    ],
    "strokes": 6,
    "radical": "宀",
    "mnemonic": "Bayangkan seseorang berlindung nyaman di bawah sebuah atap.",
    "examples": [
      {
        "word": "安い",
        "kana": "やすい",
        "meaning": "murah"
      },
      {
        "word": "安心",
        "kana": "あんしん",
        "meaning": "rasa tenang"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 74
    },
    "order": 74
  },
  {
    "id": "kanji-65b0",
    "char": "新",
    "category": "qualities",
    "meaning": "baru",
    "english": "new",
    "on": [
      "シン"
    ],
    "kun": [
      "あたら.しい",
      "あら.た",
      "にい"
    ],
    "strokes": 13,
    "radical": "斤",
    "mnemonic": "Bayangkan alat di kanan dipakai untuk membuat sesuatu yang baru.",
    "examples": [
      {
        "word": "新しい",
        "kana": "あたらしい",
        "meaning": "baru"
      },
      {
        "word": "新聞",
        "kana": "しんぶん",
        "meaning": "koran"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 75
    },
    "order": 75
  },
  {
    "id": "kanji-53e4",
    "char": "古",
    "category": "qualities",
    "meaning": "lama; tua",
    "english": "old",
    "on": [
      "コ"
    ],
    "kun": [
      "ふる.い"
    ],
    "strokes": 5,
    "radical": "口",
    "mnemonic": "Bayangkan cerita dari sepuluh 十 mulut 口 yang sudah sangat lama.",
    "examples": [
      {
        "word": "古い",
        "kana": "ふるい",
        "meaning": "lama"
      },
      {
        "word": "中古",
        "kana": "ちゅうこ",
        "meaning": "barang bekas"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 76
    },
    "order": 76
  },
  {
    "id": "kanji-9577",
    "char": "長",
    "category": "qualities",
    "meaning": "panjang; pemimpin",
    "english": "long; leader",
    "on": [
      "チョウ"
    ],
    "kun": [
      "なが.い"
    ],
    "strokes": 8,
    "radical": "長",
    "mnemonic": "Garis di bawahnya memanjang seperti rambut atau kain yang panjang.",
    "examples": [
      {
        "word": "長い",
        "kana": "ながい",
        "meaning": "panjang"
      },
      {
        "word": "校長",
        "kana": "こうちょう",
        "meaning": "kepala sekolah"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 77
    },
    "order": 77
  },
  {
    "id": "kanji-591a",
    "char": "多",
    "category": "qualities",
    "meaning": "banyak",
    "english": "many; much",
    "on": [
      "タ"
    ],
    "kun": [
      "おお.い"
    ],
    "strokes": 6,
    "radical": "夕",
    "mnemonic": "Bentuk 夕 muncul dua kali: bayangkan jumlah yang bertambah banyak.",
    "examples": [
      {
        "word": "多い",
        "kana": "おおい",
        "meaning": "banyak"
      },
      {
        "word": "多分",
        "kana": "たぶん",
        "meaning": "mungkin"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 78
    },
    "order": 78
  },
  {
    "id": "kanji-5c11",
    "char": "少",
    "category": "qualities",
    "meaning": "sedikit",
    "english": "few; little",
    "on": [
      "ショウ"
    ],
    "kun": [
      "すく.ない",
      "すこ.し"
    ],
    "strokes": 4,
    "radical": "小",
    "mnemonic": "Bentuk 小 diberi satu sapuan kecil: jumlahnya hanya sedikit.",
    "examples": [
      {
        "word": "少ない",
        "kana": "すくない",
        "meaning": "sedikit"
      },
      {
        "word": "少し",
        "kana": "すこし",
        "meaning": "sedikit"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 79
    },
    "order": 79
  },
  {
    "id": "kanji-65e9",
    "char": "早",
    "category": "time",
    "meaning": "awal; cepat",
    "english": "early",
    "on": [
      "ソウ"
    ],
    "kun": [
      "はや.い"
    ],
    "strokes": 6,
    "radical": "日",
    "mnemonic": "Matahari 日 muncul lebih awal di atas penanda 十.",
    "examples": [
      {
        "word": "早い",
        "kana": "はやい",
        "meaning": "awal atau cepat"
      },
      {
        "word": "早口",
        "kana": "はやくち",
        "meaning": "bicara cepat"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        5
      ],
      "number": 80
    },
    "order": 80
  },
  {
    "id": "kanji-884c",
    "char": "行",
    "category": "actions",
    "meaning": "pergi; menjalankan",
    "english": "go; carry out",
    "on": [
      "コウ",
      "ギョウ"
    ],
    "kun": [
      "い.く",
      "ゆ.く",
      "おこな.う"
    ],
    "strokes": 6,
    "radical": "行",
    "mnemonic": "Bayangkan persimpangan jalan yang dapat dilalui untuk pergi.",
    "examples": [
      {
        "word": "行く",
        "kana": "いく",
        "meaning": "pergi"
      },
      {
        "word": "銀行",
        "kana": "ぎんこう",
        "meaning": "bank"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 81
    },
    "order": 81
  },
  {
    "id": "kanji-6765",
    "char": "来",
    "category": "actions",
    "meaning": "datang",
    "english": "come",
    "on": [
      "ライ"
    ],
    "kun": [
      "く.る",
      "き.たる",
      "き.たす"
    ],
    "strokes": 7,
    "radical": "木",
    "mnemonic": "Bayangkan seseorang datang melalui cabang-cabang di tengah jalan.",
    "examples": [
      {
        "word": "来る",
        "kana": "くる",
        "meaning": "datang"
      },
      {
        "word": "来年",
        "kana": "らいねん",
        "meaning": "tahun depan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 82
    },
    "order": 82
  },
  {
    "id": "kanji-98df",
    "char": "食",
    "category": "actions",
    "meaning": "makan; makanan",
    "english": "eat; food",
    "on": [
      "ショク",
      "ジキ"
    ],
    "kun": [
      "た.べる",
      "く.う"
    ],
    "strokes": 9,
    "radical": "食",
    "mnemonic": "Bayangkan wadah makanan tertutup yang siap dibuka.",
    "examples": [
      {
        "word": "食べる",
        "kana": "たべる",
        "meaning": "makan"
      },
      {
        "word": "食堂",
        "kana": "しょくどう",
        "meaning": "kantin"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 83
    },
    "order": 83
  },
  {
    "id": "kanji-898b",
    "char": "見",
    "category": "actions",
    "meaning": "melihat",
    "english": "see; look",
    "on": [
      "ケン"
    ],
    "kun": [
      "み.る",
      "み.える",
      "み.せる"
    ],
    "strokes": 7,
    "radical": "見",
    "mnemonic": "Sebuah mata 目 di atas kaki: pergi untuk melihat.",
    "examples": [
      {
        "word": "見る",
        "kana": "みる",
        "meaning": "melihat"
      },
      {
        "word": "見せる",
        "kana": "みせる",
        "meaning": "memperlihatkan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 84
    },
    "order": 84
  },
  {
    "id": "kanji-5165",
    "char": "入",
    "category": "actions",
    "meaning": "masuk; memasukkan",
    "english": "enter; put in",
    "on": [
      "ニュウ"
    ],
    "kun": [
      "はい.る",
      "い.れる",
      "い.る"
    ],
    "strokes": 2,
    "radical": "入",
    "mnemonic": "Dua garis seperti jalan menyempit menuju pintu masuk.",
    "examples": [
      {
        "word": "入る",
        "kana": "はいる",
        "meaning": "masuk"
      },
      {
        "word": "入口",
        "kana": "いりぐち",
        "meaning": "pintu masuk"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 85
    },
    "order": 85
  },
  {
    "id": "kanji-51fa",
    "char": "出",
    "category": "actions",
    "meaning": "keluar; mengeluarkan",
    "english": "exit; go out",
    "on": [
      "シュツ"
    ],
    "kun": [
      "で.る",
      "だ.す"
    ],
    "strokes": 5,
    "radical": "凵",
    "mnemonic": "Bayangkan tunas yang menembus keluar dari dua lapisan tanah.",
    "examples": [
      {
        "word": "出る",
        "kana": "でる",
        "meaning": "keluar"
      },
      {
        "word": "出口",
        "kana": "でぐち",
        "meaning": "pintu keluar"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 86
    },
    "order": 86
  },
  {
    "id": "kanji-7acb",
    "char": "立",
    "category": "actions",
    "meaning": "berdiri",
    "english": "stand",
    "on": [
      "リツ",
      "リュウ"
    ],
    "kun": [
      "た.つ",
      "た.てる"
    ],
    "strokes": 5,
    "radical": "立",
    "mnemonic": "Sosok berdiri tegak dengan kedua kaki di atas lantai.",
    "examples": [
      {
        "word": "立つ",
        "kana": "たつ",
        "meaning": "berdiri"
      },
      {
        "word": "立てる",
        "kana": "たてる",
        "meaning": "mendirikan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 87
    },
    "order": 87
  },
  {
    "id": "kanji-66f8",
    "char": "書",
    "category": "learning",
    "meaning": "menulis",
    "english": "write",
    "on": [
      "ショ"
    ],
    "kun": [
      "か.く"
    ],
    "strokes": 10,
    "radical": "曰",
    "mnemonic": "Bayangkan tangan memegang kuas di atas kertas bergaris.",
    "examples": [
      {
        "word": "書く",
        "kana": "かく",
        "meaning": "menulis"
      },
      {
        "word": "図書館",
        "kana": "としょかん",
        "meaning": "perpustakaan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 88
    },
    "order": 88
  },
  {
    "id": "kanji-8a00",
    "char": "言",
    "category": "learning",
    "meaning": "berkata; ucapan",
    "english": "say; word",
    "on": [
      "ゲン",
      "ゴン"
    ],
    "kun": [
      "い.う",
      "こと"
    ],
    "strokes": 7,
    "radical": "言",
    "mnemonic": "Beberapa garis berada di atas mulut 口 yang mengucapkan kata.",
    "examples": [
      {
        "word": "言う",
        "kana": "いう",
        "meaning": "berkata"
      },
      {
        "word": "言葉",
        "kana": "ことば",
        "meaning": "kata atau bahasa"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 89
    },
    "order": 89
  },
  {
    "id": "kanji-98f2",
    "char": "飲",
    "category": "actions",
    "meaning": "minum",
    "english": "drink",
    "on": [
      "イン"
    ],
    "kun": [
      "の.む"
    ],
    "strokes": 12,
    "radical": "食",
    "mnemonic": "Bayangkan seseorang di kanan menikmati minuman dari wadah di kiri.",
    "examples": [
      {
        "word": "飲む",
        "kana": "のむ",
        "meaning": "minum"
      },
      {
        "word": "飲み物",
        "kana": "のみもの",
        "meaning": "minuman"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 90
    },
    "order": 90
  },
  {
    "id": "kanji-8a71",
    "char": "話",
    "category": "learning",
    "meaning": "berbicara; cerita",
    "english": "speak; talk; story",
    "on": [
      "ワ"
    ],
    "kun": [
      "はな.す",
      "はなし"
    ],
    "strokes": 13,
    "radical": "言",
    "mnemonic": "Gabungkan ucapan 言 dan lidah 舌 untuk mengingat berbicara.",
    "examples": [
      {
        "word": "話す",
        "kana": "はなす",
        "meaning": "berbicara"
      },
      {
        "word": "電話",
        "kana": "でんわ",
        "meaning": "telepon"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 91
    },
    "order": 91
  },
  {
    "id": "kanji-8aad",
    "char": "読",
    "category": "learning",
    "meaning": "membaca",
    "english": "read",
    "on": [
      "ドク",
      "トク",
      "トウ"
    ],
    "kun": [
      "よ.む"
    ],
    "strokes": 14,
    "radical": "言",
    "mnemonic": "Ucapan 言 di kiri mengingatkan kata-kata yang dibaca.",
    "examples": [
      {
        "word": "読む",
        "kana": "よむ",
        "meaning": "membaca"
      },
      {
        "word": "読書",
        "kana": "どくしょ",
        "meaning": "membaca buku"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 92
    },
    "order": 92
  },
  {
    "id": "kanji-8a9e",
    "char": "語",
    "category": "learning",
    "meaning": "bahasa; bercerita",
    "english": "language; tell",
    "on": [
      "ゴ"
    ],
    "kun": [
      "かた.る"
    ],
    "strokes": 14,
    "radical": "言",
    "mnemonic": "Bayangkan banyak ucapan 言 tersusun menjadi sebuah bahasa.",
    "examples": [
      {
        "word": "日本語",
        "kana": "にほんご",
        "meaning": "bahasa Jepang"
      },
      {
        "word": "英語",
        "kana": "えいご",
        "meaning": "bahasa Inggris"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 93
    },
    "order": 93
  },
  {
    "id": "kanji-9593",
    "char": "間",
    "category": "position",
    "meaning": "antara; sela; waktu",
    "english": "between; interval",
    "on": [
      "カン",
      "ケン"
    ],
    "kun": [
      "あいだ",
      "ま"
    ],
    "strokes": 12,
    "radical": "門",
    "mnemonic": "Matahari 日 terlihat di antara dua daun gerbang 門.",
    "examples": [
      {
        "word": "間",
        "kana": "あいだ",
        "meaning": "antara"
      },
      {
        "word": "時間",
        "kana": "じかん",
        "meaning": "waktu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 94
    },
    "order": 94
  },
  {
    "id": "kanji-805e",
    "char": "聞",
    "category": "learning",
    "meaning": "mendengar; bertanya",
    "english": "hear; listen; ask",
    "on": [
      "ブン",
      "モン"
    ],
    "kun": [
      "き.く",
      "き.こえる"
    ],
    "strokes": 14,
    "radical": "耳",
    "mnemonic": "Telinga 耳 berada di dalam gerbang 門 untuk mendengar.",
    "examples": [
      {
        "word": "聞く",
        "kana": "きく",
        "meaning": "mendengar atau bertanya"
      },
      {
        "word": "新聞",
        "kana": "しんぶん",
        "meaning": "koran"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 95
    },
    "order": 95
  },
  {
    "id": "kanji-8cb7",
    "char": "買",
    "category": "actions",
    "meaning": "membeli",
    "english": "buy",
    "on": [
      "バイ"
    ],
    "kun": [
      "か.う"
    ],
    "strokes": 12,
    "radical": "貝",
    "mnemonic": "Bayangkan keranjang di atas kerang 貝 sebagai alat pembayaran.",
    "examples": [
      {
        "word": "買う",
        "kana": "かう",
        "meaning": "membeli"
      },
      {
        "word": "買い物",
        "kana": "かいもの",
        "meaning": "belanja"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 96
    },
    "order": 96
  },
  {
    "id": "kanji-4f11",
    "char": "休",
    "category": "actions",
    "meaning": "beristirahat; libur",
    "english": "rest; holiday",
    "on": [
      "キュウ"
    ],
    "kun": [
      "やす.む",
      "やす.み"
    ],
    "strokes": 6,
    "radical": "人",
    "mnemonic": "Seseorang 亻 bersandar pada pohon 木 untuk beristirahat.",
    "examples": [
      {
        "word": "休む",
        "kana": "やすむ",
        "meaning": "beristirahat"
      },
      {
        "word": "休み",
        "kana": "やすみ",
        "meaning": "libur"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 97
    },
    "order": 97
  },
  {
    "id": "kanji-6642",
    "char": "時",
    "category": "time",
    "meaning": "waktu; jam",
    "english": "time; hour",
    "on": [
      "ジ"
    ],
    "kun": [
      "とき"
    ],
    "strokes": 10,
    "radical": "日",
    "mnemonic": "Matahari 日 di kiri menjadi pengingat pengukuran waktu.",
    "examples": [
      {
        "word": "時間",
        "kana": "じかん",
        "meaning": "waktu"
      },
      {
        "word": "一時",
        "kana": "いちじ",
        "meaning": "pukul satu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 98
    },
    "order": 98
  },
  {
    "id": "kanji-9031",
    "char": "週",
    "category": "time",
    "meaning": "pekan; minggu",
    "english": "week",
    "on": [
      "シュウ"
    ],
    "kun": [],
    "strokes": 11,
    "radical": "辵",
    "mnemonic": "Bayangkan perjalanan 辶 yang berulang setiap pekan.",
    "examples": [
      {
        "word": "今週",
        "kana": "こんしゅう",
        "meaning": "minggu ini"
      },
      {
        "word": "毎週",
        "kana": "まいしゅう",
        "meaning": "setiap minggu"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 99
    },
    "order": 99
  },
  {
    "id": "kanji-9053",
    "char": "道",
    "category": "places",
    "meaning": "jalan; cara",
    "english": "road; way",
    "on": [
      "ドウ",
      "トウ"
    ],
    "kun": [
      "みち"
    ],
    "strokes": 12,
    "radical": "辵",
    "mnemonic": "Bagian jalan 辶 membawa kepala 首 menuju tujuan.",
    "examples": [
      {
        "word": "道",
        "kana": "みち",
        "meaning": "jalan"
      },
      {
        "word": "歩道",
        "kana": "ほどう",
        "meaning": "trotoar"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        6
      ],
      "number": 100
    },
    "order": 100
  },
  {
    "id": "kanji-4eca",
    "char": "今",
    "category": "time",
    "meaning": "sekarang",
    "english": "now",
    "on": [
      "コン",
      "キン"
    ],
    "kun": [
      "いま"
    ],
    "strokes": 4,
    "radical": "人",
    "mnemonic": "Bayangkan atap kecil menandai saat yang sedang berlangsung sekarang.",
    "examples": [
      {
        "word": "今",
        "kana": "いま",
        "meaning": "sekarang"
      },
      {
        "word": "今日",
        "kana": "きょう",
        "meaning": "hari ini"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        7
      ],
      "number": 101
    },
    "order": 101
  },
  {
    "id": "kanji-4f1a",
    "char": "会",
    "category": "people",
    "meaning": "bertemu; pertemuan",
    "english": "meet; meeting",
    "on": [
      "カイ",
      "エ"
    ],
    "kun": [
      "あ.う"
    ],
    "strokes": 6,
    "radical": "人",
    "mnemonic": "Dua orang berkumpul di bawah satu atap untuk bertemu.",
    "examples": [
      {
        "word": "会う",
        "kana": "あう",
        "meaning": "bertemu"
      },
      {
        "word": "会社",
        "kana": "かいしゃ",
        "meaning": "perusahaan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        7
      ],
      "number": 102
    },
    "order": 102
  },
  {
    "id": "kanji-793e",
    "char": "社",
    "category": "places",
    "meaning": "perusahaan; kuil Shinto",
    "english": "company; Shinto shrine",
    "on": [
      "シャ"
    ],
    "kun": [
      "やしろ"
    ],
    "strokes": 7,
    "radical": "示",
    "mnemonic": "Ingat bentuk 礻 di kiri dan 土 di kanan sebagai ciri 社.",
    "examples": [
      {
        "word": "会社",
        "kana": "かいしゃ",
        "meaning": "perusahaan"
      },
      {
        "word": "社員",
        "kana": "しゃいん",
        "meaning": "karyawan perusahaan"
      }
    ],
    "source": {
      "id": "n5-pdf",
      "label": "PDF utama",
      "pages": [
        7
      ],
      "number": 103
    },
    "order": 103
  },
  {
    "id": "kanji-767d",
    "char": "白",
    "category": "qualities",
    "meaning": "putih",
    "english": "white",
    "on": [
      "ハク",
      "ビャク"
    ],
    "kun": [
      "しろ",
      "しろ.い"
    ],
    "strokes": 5,
    "radical": "白",
    "mnemonic": "Bayangkan sinar kecil di atas 日 menerangi semuanya menjadi putih.",
    "examples": [
      {
        "word": "白い",
        "kana": "しろい",
        "meaning": "putih"
      },
      {
        "word": "白",
        "kana": "しろ",
        "meaning": "warna putih"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        21
      ],
      "number": 360
    },
    "order": 104
  },
  {
    "id": "kanji-56fd",
    "char": "国",
    "category": "places",
    "meaning": "negara",
    "english": "country",
    "on": [
      "コク"
    ],
    "kun": [
      "くに"
    ],
    "strokes": 8,
    "radical": "囗",
    "mnemonic": "Bingkai besar mengelilingi wilayah yang dianggap satu negara.",
    "examples": [
      {
        "word": "国",
        "kana": "くに",
        "meaning": "negara"
      },
      {
        "word": "外国",
        "kana": "がいこく",
        "meaning": "luar negeri"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        1
      ],
      "number": 3
    },
    "order": 105
  },
  {
    "id": "kanji-79c1",
    "char": "私",
    "category": "people",
    "meaning": "saya; pribadi",
    "english": "I; me; private",
    "on": [
      "シ"
    ],
    "kun": [
      "わたし",
      "わたくし"
    ],
    "strokes": 7,
    "radical": "禾",
    "mnemonic": "Bayangkan seseorang memegang hasil panennya sendiri untuk mengingat pribadi.",
    "examples": [
      {
        "word": "私",
        "kana": "わたし",
        "meaning": "saya"
      },
      {
        "word": "私たち",
        "kana": "わたしたち",
        "meaning": "kami atau kita"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        1
      ],
      "number": 4
    },
    "order": 106
  },
  {
    "id": "kanji-5916",
    "char": "外",
    "category": "position",
    "meaning": "luar",
    "english": "outside",
    "on": [
      "ガイ",
      "ゲ"
    ],
    "kun": [
      "そと",
      "ほか",
      "はず.す",
      "はず.れる"
    ],
    "strokes": 5,
    "radical": "夕",
    "mnemonic": "Bayangkan penunjuk di kanan mengarah ke luar saat senja 夕.",
    "examples": [
      {
        "word": "外",
        "kana": "そと",
        "meaning": "luar"
      },
      {
        "word": "外国",
        "kana": "がいこく",
        "meaning": "luar negeri"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        22
      ],
      "number": 386
    },
    "order": 107
  },
  {
    "id": "kanji-7a7a",
    "char": "空",
    "category": "nature",
    "meaning": "langit; kosong",
    "english": "sky; empty",
    "on": [
      "クウ"
    ],
    "kun": [
      "そら",
      "から",
      "あ.く"
    ],
    "strokes": 8,
    "radical": "穴",
    "mnemonic": "Atap dengan ruang 穴 di bawahnya mengingatkan ruang kosong di langit.",
    "examples": [
      {
        "word": "空",
        "kana": "そら",
        "meaning": "langit"
      },
      {
        "word": "空気",
        "kana": "くうき",
        "meaning": "udara"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        20
      ],
      "number": 325
    },
    "order": 108
  },
  {
    "id": "kanji-96fb",
    "char": "電",
    "category": "places",
    "meaning": "listrik",
    "english": "electricity",
    "on": [
      "デン"
    ],
    "kun": [],
    "strokes": 13,
    "radical": "雨",
    "mnemonic": "Awan 雨 di atas dan kilatan di bawah menjadi pengingat listrik.",
    "examples": [
      {
        "word": "電車",
        "kana": "でんしゃ",
        "meaning": "kereta listrik"
      },
      {
        "word": "電話",
        "kana": "でんわ",
        "meaning": "telepon"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        11
      ],
      "number": 163
    },
    "order": 109
  },
  {
    "id": "kanji-4f55",
    "char": "何",
    "category": "people",
    "meaning": "apa; berapa",
    "english": "what; how many",
    "on": [
      "カ"
    ],
    "kun": [
      "なに",
      "なん"
    ],
    "strokes": 7,
    "radical": "人",
    "mnemonic": "Bayangkan seseorang 亻 di kiri sedang mengajukan pertanyaan.",
    "examples": [
      {
        "word": "何",
        "kana": "なに",
        "meaning": "apa"
      },
      {
        "word": "何時",
        "kana": "なんじ",
        "meaning": "pukul berapa"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        3
      ],
      "number": 40
    },
    "order": 110
  },
  {
    "id": "kanji-82b1",
    "char": "花",
    "category": "nature",
    "meaning": "bunga",
    "english": "flower",
    "on": [
      "カ"
    ],
    "kun": [
      "はな"
    ],
    "strokes": 7,
    "radical": "艸",
    "mnemonic": "Rumput 艹 di atas menjadi pengingat bunga yang sedang tumbuh.",
    "examples": [
      {
        "word": "花",
        "kana": "はな",
        "meaning": "bunga"
      },
      {
        "word": "花火",
        "kana": "はなび",
        "meaning": "kembang api"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        9
      ],
      "number": 122
    },
    "order": 111
  },
  {
    "id": "kanji-72ac",
    "char": "犬",
    "category": "animals",
    "meaning": "anjing",
    "english": "dog",
    "on": [
      "ケン"
    ],
    "kun": [
      "いぬ"
    ],
    "strokes": 4,
    "radical": "犬",
    "mnemonic": "Bentuk 大 diberi satu titik seperti tanda pada kepala seekor anjing.",
    "examples": [
      {
        "word": "犬",
        "kana": "いぬ",
        "meaning": "anjing"
      },
      {
        "word": "子犬",
        "kana": "こいぬ",
        "meaning": "anak anjing"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        8
      ],
      "number": 107
    },
    "order": 112
  },
  {
    "id": "kanji-5bb6",
    "char": "家",
    "category": "places",
    "meaning": "rumah; keluarga",
    "english": "house; home; family",
    "on": [
      "カ",
      "ケ"
    ],
    "kun": [
      "いえ",
      "や"
    ],
    "strokes": 10,
    "radical": "宀",
    "mnemonic": "Sebuah atap 宀 menaungi isi rumah dan keluarga.",
    "examples": [
      {
        "word": "家",
        "kana": "いえ",
        "meaning": "rumah"
      },
      {
        "word": "家族",
        "kana": "かぞく",
        "meaning": "keluarga"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        2
      ],
      "number": 16
    },
    "order": 113
  },
  {
    "id": "kanji-597d",
    "char": "好",
    "category": "qualities",
    "meaning": "suka",
    "english": "like; fond",
    "on": [
      "コウ"
    ],
    "kun": [
      "す.き",
      "この.む"
    ],
    "strokes": 6,
    "radical": "女",
    "mnemonic": "Bayangkan perempuan 女 dan anak 子 bersama orang yang mereka sukai.",
    "examples": [
      {
        "word": "好き",
        "kana": "すき",
        "meaning": "suka"
      },
      {
        "word": "大好き",
        "kana": "だいすき",
        "meaning": "sangat suka"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        2
      ],
      "number": 15
    },
    "order": 114
  },
  {
    "id": "kanji-82f1",
    "char": "英",
    "category": "learning",
    "meaning": "Inggris",
    "english": "England; English",
    "on": [
      "エイ"
    ],
    "kun": [],
    "strokes": 8,
    "radical": "艸",
    "mnemonic": "Kaitkan bentuk 英 dengan kata yang sering dijumpai: 英語, bahasa Inggris.",
    "examples": [
      {
        "word": "英語",
        "kana": "えいご",
        "meaning": "bahasa Inggris"
      },
      {
        "word": "英国",
        "kana": "えいこく",
        "meaning": "Britania Raya"
      }
    ],
    "source": {
      "id": "jft-pdf",
      "label": "Tambahan dasar",
      "pages": [
        9
      ],
      "number": 111
    },
    "order": 115
  }
];

const KANJI_N4_DATA = [
  {
    "id": "kanji-4e21",
    "char": "両",
    "category": "numbers",
    "meaning": "kedua; dua belah",
    "on": [
      "リョウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 1,
    "examples": [
      {
        "word": "両親",
        "kana": "りょうしん",
        "meaning": "kedua orang tua",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 388
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 388,
        "word": "両親",
        "kana": "りょうしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 388,
        "word": "両親",
        "kana": "りょうしん"
      }
    ]
  },
  {
    "id": "kanji-56de",
    "char": "回",
    "category": "numbers",
    "meaning": "kali; berputar",
    "on": [
      "カイ"
    ],
    "kun": [
      "まわ.る",
      "まわ.す"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 2,
    "examples": [
      {
        "word": "〜回",
        "kana": "かい",
        "meaning": "kali",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 154
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 154,
        "word": "〜回（2回）",
        "kana": "かい（にかい）"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 154,
        "word": "〜回（2回）",
        "kana": "かい（にかい）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 154,
        "word": "〜回（2回）",
        "kana": "かい（にかい）"
      }
    ]
  },
  {
    "id": "kanji-5ea6",
    "char": "度",
    "category": "numbers",
    "meaning": "derajat; kali",
    "on": [
      "ド",
      "ト",
      "タク"
    ],
    "kun": [
      "たび"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 3,
    "examples": [
      {
        "word": "温度",
        "kana": "おんど",
        "meaning": "suhu",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 357
      },
      {
        "word": "もう一度",
        "kana": "もういちど",
        "meaning": "sekali lagi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 492
      },
      {
        "word": "〜度",
        "kana": "ど",
        "meaning": "derajat",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 362
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 357,
        "word": "温度",
        "kana": "おんど"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 362,
        "word": "〜度（28度）",
        "kana": "〜ど（にじゅうはちど）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 357,
        "word": "温度",
        "kana": "おんど"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 362,
        "word": "〜度（28度）",
        "kana": "〜ど（にじゅうはちど）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 492,
        "word": "もう一度",
        "kana": "もういちど"
      }
    ]
  },
  {
    "id": "kanji-756a",
    "char": "番",
    "category": "numbers",
    "meaning": "nomor; giliran",
    "on": [
      "バン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 4,
    "examples": [
      {
        "word": "〜番目",
        "kana": "ばんめ",
        "meaning": "urutan ke-",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 229
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 229,
        "word": "〜番目（1番目）",
        "kana": "〜ばんめ（いちばんめ）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 229,
        "word": "〜番目（1番目）",
        "kana": "〜ばんめ（いちばんめ）"
      }
    ]
  },
  {
    "id": "kanji-91cf",
    "char": "量",
    "category": "numbers",
    "meaning": "jumlah; ukuran",
    "on": [
      "リョウ"
    ],
    "kun": [
      "はか.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 5,
    "examples": [
      {
        "word": "量",
        "kana": "りょう",
        "meaning": "jumlah; porsi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 416
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 416,
        "word": "量",
        "kana": "りょう"
      }
    ]
  },
  {
    "id": "kanji-4ee5",
    "char": "以",
    "category": "numbers",
    "meaning": "berdasarkan; mulai dari",
    "on": [
      "イ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 6,
    "examples": [
      {
        "word": "～以上",
        "kana": "いじょう",
        "meaning": "lebih dari atau sama dengan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 409
      },
      {
        "word": "～以下",
        "kana": "いか",
        "meaning": "kurang dari atau sama dengan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 410
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 409,
        "word": "～以上（2時間以上）",
        "kana": "～いじょう（にじかんいじょう）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 410,
        "word": "～以下（6万円以下）",
        "kana": "～いか（ろくまんえんいか）"
      }
    ]
  },
  {
    "id": "kanji-6700",
    "char": "最",
    "category": "numbers",
    "meaning": "paling",
    "on": [
      "サイ"
    ],
    "kun": [
      "もっと.も"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 7,
    "examples": [
      {
        "word": "最近",
        "kana": "さいきん",
        "meaning": "akhir-akhir ini",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 448
      },
      {
        "word": "最高",
        "kana": "さいこう",
        "meaning": "luar biasa; sangat bagus",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 449
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 448,
        "word": "最近",
        "kana": "さいきん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 449,
        "word": "最高",
        "kana": "さいこう"
      }
    ]
  },
  {
    "id": "kanji-70b9",
    "char": "点",
    "category": "numbers",
    "meaning": "titik; nilai",
    "on": [
      "テン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 8,
    "examples": [
      {
        "word": "〜点",
        "kana": "てん",
        "meaning": "poin; nilai",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 363
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 363,
        "word": "〜点（100点）",
        "kana": "〜てん（ひゃくてん）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 363,
        "word": "〜点（100点）",
        "kana": "〜てん（ひゃくてん）"
      }
    ]
  },
  {
    "id": "kanji-7d04",
    "char": "約",
    "category": "numbers",
    "meaning": "janji; kira-kira",
    "on": [
      "ヤク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 9,
    "examples": [
      {
        "word": "約～",
        "kana": "やく",
        "meaning": "kira-kira",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 431
      },
      {
        "word": "予約します",
        "kana": "よやくします",
        "meaning": "memesan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 267
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 267,
        "word": "予約します",
        "kana": "よやくします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 267,
        "word": "予約します",
        "kana": "よやくします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 431,
        "word": "約～（約６年間）",
        "kana": "やく～（やくろくねんかん）"
      }
    ]
  },
  {
    "id": "kanji-5149",
    "char": "光",
    "category": "nature",
    "meaning": "cahaya",
    "on": [
      "コウ"
    ],
    "kun": [
      "ひかり",
      "ひか.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 10,
    "examples": [
      {
        "word": "観光地",
        "kana": "かんこうち",
        "meaning": "tempat wisata",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 271
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 271,
        "word": "観光地",
        "kana": "かんこうち"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 271,
        "word": "観光地",
        "kana": "かんこうち"
      }
    ]
  },
  {
    "id": "kanji-51ac",
    "char": "冬",
    "category": "nature",
    "meaning": "musim dingin",
    "on": [
      "トウ"
    ],
    "kun": [
      "ふゆ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 11,
    "examples": [
      {
        "word": "冬",
        "kana": "ふゆ",
        "meaning": "musim dingin",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 91
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1,
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 91,
        "word": "冬",
        "kana": "ふゆ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 91,
        "word": "冬",
        "kana": "ふゆ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 91,
        "word": "冬",
        "kana": "ふゆ"
      }
    ]
  },
  {
    "id": "kanji-590f",
    "char": "夏",
    "category": "nature",
    "meaning": "musim panas",
    "on": [
      "カ",
      "ゲ"
    ],
    "kun": [
      "なつ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 12,
    "examples": [
      {
        "word": "夏",
        "kana": "なつ",
        "meaning": "musim panas",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 89
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1,
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 89,
        "word": "夏",
        "kana": "なつ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 89,
        "word": "夏",
        "kana": "なつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 89,
        "word": "夏",
        "kana": "なつ"
      }
    ]
  },
  {
    "id": "kanji-5cf6",
    "char": "島",
    "category": "nature",
    "meaning": "pulau",
    "on": [
      "トウ"
    ],
    "kun": [
      "しま"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 13,
    "examples": [
      {
        "word": "島",
        "kana": "しま",
        "meaning": "pulau",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 262
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 262,
        "word": "島",
        "kana": "しま"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 262,
        "word": "島",
        "kana": "しま"
      }
    ]
  },
  {
    "id": "kanji-68ee",
    "char": "森",
    "category": "nature",
    "meaning": "hutan",
    "on": [
      "シン"
    ],
    "kun": [
      "もり"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 14,
    "examples": [
      {
        "word": "森",
        "kana": "もり",
        "meaning": "hutan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 261
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 261,
        "word": "森",
        "kana": "もり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 261,
        "word": "森",
        "kana": "もり"
      }
    ]
  },
  {
    "id": "kanji-6625",
    "char": "春",
    "category": "nature",
    "meaning": "musim semi",
    "on": [
      "シュン"
    ],
    "kun": [
      "はる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 15,
    "examples": [
      {
        "word": "春",
        "kana": "はる",
        "meaning": "musim semi",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 88
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1,
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 88,
        "word": "春",
        "kana": "はる"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 88,
        "word": "春",
        "kana": "はる"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 88,
        "word": "春",
        "kana": "はる"
      }
    ]
  },
  {
    "id": "kanji-6674",
    "char": "晴",
    "category": "nature",
    "meaning": "cerah",
    "on": [
      "セイ"
    ],
    "kun": [
      "は.れる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 16,
    "examples": [
      {
        "word": "晴れ",
        "kana": "はれ",
        "meaning": "cerah (cuaca)",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 99
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 99,
        "word": "晴れ",
        "kana": "はれ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 99,
        "word": "晴れ",
        "kana": "はれ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 99,
        "word": "晴れ",
        "kana": "はれ"
      }
    ]
  },
  {
    "id": "kanji-6691",
    "char": "暑",
    "category": "nature",
    "meaning": "panas (cuaca)",
    "on": [
      "ショ"
    ],
    "kun": [
      "あつ.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 17,
    "examples": [
      {
        "word": "暑い",
        "kana": "あつい",
        "meaning": "panas (cuaca)",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 265
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 265,
        "word": "暑い",
        "kana": "あつい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 265,
        "word": "暑い",
        "kana": "あつい"
      }
    ]
  },
  {
    "id": "kanji-6cb9",
    "char": "油",
    "category": "nature",
    "meaning": "minyak",
    "on": [
      "ユ"
    ],
    "kun": [
      "あぶら"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 18,
    "examples": [
      {
        "word": "油",
        "kana": "あぶら",
        "meaning": "minyak",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 355
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 355,
        "word": "油",
        "kana": "あぶら"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 355,
        "word": "油",
        "kana": "あぶら"
      }
    ]
  },
  {
    "id": "kanji-6d0b",
    "char": "洋",
    "category": "nature",
    "meaning": "samudra; gaya Barat",
    "on": [
      "ヨウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 19,
    "examples": [
      {
        "word": "洋食",
        "kana": "ようしょく",
        "meaning": "makanan ala barat",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 245
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 245,
        "word": "洋食",
        "kana": "ようしょく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 245,
        "word": "洋食",
        "kana": "ようしょく"
      }
    ]
  },
  {
    "id": "kanji-6d77",
    "char": "海",
    "category": "nature",
    "meaning": "laut",
    "on": [
      "カイ"
    ],
    "kun": [
      "うみ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 20,
    "examples": [
      {
        "word": "海",
        "kana": "うみ",
        "meaning": "laut",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 94
      },
      {
        "word": "海外",
        "kana": "かいがい",
        "meaning": "luar negeri",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 411
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 94,
        "word": "海",
        "kana": "うみ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 94,
        "word": "海",
        "kana": "うみ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 94,
        "word": "海",
        "kana": "うみ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 411,
        "word": "海外",
        "kana": "かいがい"
      }
    ]
  },
  {
    "id": "kanji-6e29",
    "char": "温",
    "category": "nature",
    "meaning": "hangat",
    "on": [
      "オン"
    ],
    "kun": [
      "あたた.かい",
      "あたた.める"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 21,
    "examples": [
      {
        "word": "温度",
        "kana": "おんど",
        "meaning": "suhu",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 357
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 357,
        "word": "温度",
        "kana": "おんど"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 357,
        "word": "温度",
        "kana": "おんど"
      }
    ]
  },
  {
    "id": "kanji-6e2f",
    "char": "港",
    "category": "nature",
    "meaning": "pelabuhan",
    "on": [
      "コウ"
    ],
    "kun": [
      "みなと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 22,
    "examples": [
      {
        "word": "空港",
        "kana": "くうこう",
        "meaning": "bandara",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 173
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 173,
        "word": "空港",
        "kana": "くうこう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 173,
        "word": "空港",
        "kana": "くうこう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 173,
        "word": "空港",
        "kana": "くうこう"
      }
    ]
  },
  {
    "id": "kanji-7136",
    "char": "然",
    "category": "nature",
    "meaning": "demikian; alami",
    "on": [
      "ゼン",
      "ネン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 23,
    "examples": [
      {
        "word": "自然",
        "kana": "しぜん",
        "meaning": "alam",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 263
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 263,
        "word": "自然",
        "kana": "しぜん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 263,
        "word": "自然",
        "kana": "しぜん"
      }
    ]
  },
  {
    "id": "kanji-79cb",
    "char": "秋",
    "category": "nature",
    "meaning": "musim gugur",
    "on": [
      "シュウ"
    ],
    "kun": [
      "あき"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 24,
    "examples": [
      {
        "word": "秋",
        "kana": "あき",
        "meaning": "musim gugur",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 90
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1,
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 90,
        "word": "秋",
        "kana": "あき"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 90,
        "word": "秋",
        "kana": "あき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 90,
        "word": "秋",
        "kana": "あき"
      }
    ]
  },
  {
    "id": "kanji-96ea",
    "char": "雪",
    "category": "nature",
    "meaning": "salju",
    "on": [
      "セツ"
    ],
    "kun": [
      "ゆき"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 25,
    "examples": [
      {
        "word": "雪",
        "kana": "ゆき",
        "meaning": "salju",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 101
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 101,
        "word": "雪",
        "kana": "ゆき"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 101,
        "word": "雪",
        "kana": "ゆき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 101,
        "word": "雪",
        "kana": "ゆき"
      }
    ]
  },
  {
    "id": "kanji-96f2",
    "char": "雲",
    "category": "nature",
    "meaning": "awan",
    "on": [
      "ウン"
    ],
    "kun": [
      "くも"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 26,
    "examples": [
      {
        "word": "雲",
        "kana": "くも",
        "meaning": "awan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 102
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 102,
        "word": "雲",
        "kana": "くも"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 102,
        "word": "雲",
        "kana": "くも"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 102,
        "word": "雲",
        "kana": "くも"
      }
    ]
  },
  {
    "id": "kanji-98a8",
    "char": "風",
    "category": "nature",
    "meaning": "angin; gaya",
    "on": [
      "フウ",
      "フ"
    ],
    "kun": [
      "かぜ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 27,
    "examples": [
      {
        "word": "風",
        "kana": "かぜ",
        "meaning": "angin",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 103
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 103,
        "word": "風",
        "kana": "かぜ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 103,
        "word": "風",
        "kana": "かぜ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 103,
        "word": "風",
        "kana": "かぜ"
      }
    ]
  },
  {
    "id": "kanji-5bd2",
    "char": "寒",
    "category": "nature",
    "meaning": "dingin (cuaca)",
    "on": [
      "カン"
    ],
    "kun": [
      "さむ.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 28,
    "examples": [
      {
        "word": "寒い",
        "kana": "さむい",
        "meaning": "dingin",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 360
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 360,
        "word": "寒い",
        "kana": "さむい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 360,
        "word": "寒い",
        "kana": "さむい"
      }
    ]
  },
  {
    "id": "kanji-91ce",
    "char": "野",
    "category": "nature",
    "meaning": "padang; lapangan",
    "on": [
      "ヤ"
    ],
    "kun": [
      "の"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 29,
    "examples": [
      {
        "word": "野菜",
        "kana": "やさい",
        "meaning": "sayur-mayur",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 165
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 165,
        "word": "野菜",
        "kana": "やさい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 165,
        "word": "野菜",
        "kana": "やさい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 165,
        "word": "野菜",
        "kana": "やさい"
      }
    ]
  },
  {
    "id": "kanji-4ea4",
    "char": "交",
    "category": "people",
    "meaning": "bergaul; bertukar",
    "on": [
      "コウ"
    ],
    "kun": [
      "まじ.わる",
      "か.わす"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 30,
    "examples": [
      {
        "word": "交通",
        "kana": "こうつう",
        "meaning": "lalu lintas; transportasi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 403
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 403,
        "word": "交通",
        "kana": "こうつう"
      }
    ]
  },
  {
    "id": "kanji-4ecb",
    "char": "介",
    "category": "people",
    "meaning": "perantara",
    "on": [
      "カイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 31,
    "examples": [
      {
        "word": "自己紹介",
        "kana": "じこしょうかい",
        "meaning": "perkenalan diri",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      }
    ]
  },
  {
    "id": "kanji-5144",
    "char": "兄",
    "category": "people",
    "meaning": "kakak laki-laki",
    "on": [
      "ケイ",
      "キョウ"
    ],
    "kun": [
      "あに"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 32,
    "examples": [
      {
        "word": "兄",
        "kana": "あに",
        "meaning": "kakak (laki-laki)",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 230
      },
      {
        "word": "お兄さん",
        "kana": "おにいさん",
        "meaning": "kakak (laki-laki)",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 231
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 230,
        "word": "兄",
        "kana": "あに"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 231,
        "word": "お兄さん",
        "kana": "おにいさん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 230,
        "word": "兄",
        "kana": "あに"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 231,
        "word": "お兄さん",
        "kana": "おにいさん"
      }
    ]
  },
  {
    "id": "kanji-5408",
    "char": "合",
    "category": "people",
    "meaning": "cocok; bergabung",
    "on": [
      "ゴウ",
      "ガッ",
      "カッ"
    ],
    "kun": [
      "あ.う",
      "あ.わせる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 33,
    "examples": [
      {
        "word": "合格",
        "kana": "ごうかく",
        "meaning": "lulus",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 311
      },
      {
        "word": "試合",
        "kana": "しあい",
        "meaning": "pertandingan",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 393
      },
      {
        "word": "～合う",
        "kana": "あう",
        "meaning": "saling melakukan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 452
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 311,
        "word": "合格",
        "kana": "ごうかく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 311,
        "word": "合格",
        "kana": "ごうかく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 393,
        "word": "試合",
        "kana": "しあい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 452,
        "word": "～合う（知り合う）",
        "kana": "～あう（しりあう）"
      }
    ]
  },
  {
    "id": "kanji-54e1",
    "char": "員",
    "category": "people",
    "meaning": "anggota; pegawai",
    "on": [
      "イン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 34,
    "examples": [
      {
        "word": "店員",
        "kana": "てんいん",
        "meaning": "pegawai toko; staf toko",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 320
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 320,
        "word": "店員",
        "kana": "てんいん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 320,
        "word": "店員",
        "kana": "てんいん"
      }
    ]
  },
  {
    "id": "kanji-592b",
    "char": "夫",
    "category": "people",
    "meaning": "suami",
    "on": [
      "フ",
      "フウ"
    ],
    "kun": [
      "おっと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 35,
    "examples": [
      {
        "word": "夫",
        "kana": "おっと",
        "meaning": "suami (saya)",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 386
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 386,
        "word": "夫",
        "kana": "おっと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 386,
        "word": "夫",
        "kana": "おっと"
      }
    ]
  },
  {
    "id": "kanji-59b9",
    "char": "妹",
    "category": "people",
    "meaning": "adik perempuan",
    "on": [
      "マイ"
    ],
    "kun": [
      "いもうと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 36,
    "examples": [
      {
        "word": "妹",
        "kana": "いもうと",
        "meaning": "adik (perempuan)",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 235
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 235,
        "word": "妹",
        "kana": "いもうと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 235,
        "word": "妹",
        "kana": "いもうと"
      }
    ]
  },
  {
    "id": "kanji-59bb",
    "char": "妻",
    "category": "people",
    "meaning": "istri",
    "on": [
      "サイ"
    ],
    "kun": [
      "つま"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 37,
    "examples": [
      {
        "word": "妻",
        "kana": "つま",
        "meaning": "istri (saya)",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 387
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 387,
        "word": "妻",
        "kana": "つま"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 387,
        "word": "妻",
        "kana": "つま"
      }
    ]
  },
  {
    "id": "kanji-59c9",
    "char": "姉",
    "category": "people",
    "meaning": "kakak perempuan",
    "on": [
      "シ"
    ],
    "kun": [
      "あね"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 38,
    "examples": [
      {
        "word": "姉",
        "kana": "あね",
        "meaning": "kakak (perempuan)",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 232
      },
      {
        "word": "お姉さん",
        "kana": "おねえさん",
        "meaning": "kakak (perempuan)",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 233
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 232,
        "word": "姉",
        "kana": "あね"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 233,
        "word": "お姉さん",
        "kana": "おねえさん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 232,
        "word": "姉",
        "kana": "あね"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 233,
        "word": "お姉さん",
        "kana": "おねえさん"
      }
    ]
  },
  {
    "id": "kanji-5a5a",
    "char": "婚",
    "category": "people",
    "meaning": "pernikahan",
    "on": [
      "コン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 39,
    "examples": [
      {
        "word": "結婚",
        "kana": "けっこん",
        "meaning": "pernikahan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 207
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 207,
        "word": "結婚",
        "kana": "けっこん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 207,
        "word": "結婚",
        "kana": "けっこん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 207,
        "word": "結婚",
        "kana": "けっこん"
      }
    ]
  },
  {
    "id": "kanji-5df1",
    "char": "己",
    "category": "people",
    "meaning": "diri sendiri",
    "on": [
      "コ",
      "キ"
    ],
    "kun": [
      "おのれ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 40,
    "examples": [
      {
        "word": "自己紹介",
        "kana": "じこしょうかい",
        "meaning": "perkenalan diri",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      }
    ]
  },
  {
    "id": "kanji-5f1f",
    "char": "弟",
    "category": "people",
    "meaning": "adik laki-laki",
    "on": [
      "テイ",
      "ダイ",
      "デ"
    ],
    "kun": [
      "おとうと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 41,
    "examples": [
      {
        "word": "弟",
        "kana": "おとうと",
        "meaning": "adik (laki-laki)",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 234
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 234,
        "word": "弟",
        "kana": "おとうと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 234,
        "word": "弟",
        "kana": "おとうと"
      }
    ]
  },
  {
    "id": "kanji-604b",
    "char": "恋",
    "category": "people",
    "meaning": "cinta romantis; rindu",
    "on": [
      "レン"
    ],
    "kun": [
      "こい",
      "こい.しい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 42,
    "examples": [
      {
        "word": "恋人",
        "kana": "こいびと",
        "meaning": "pacar; kekasih",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 446
      },
      {
        "word": "恋愛",
        "kana": "れんあい",
        "meaning": "cinta romantis",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 458
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 446,
        "word": "恋人",
        "kana": "こいびと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 458,
        "word": "恋愛",
        "kana": "れんあい"
      }
    ]
  },
  {
    "id": "kanji-611b",
    "char": "愛",
    "category": "people",
    "meaning": "cinta; kasih sayang",
    "on": [
      "アイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 43,
    "examples": [
      {
        "word": "恋愛",
        "kana": "れんあい",
        "meaning": "cinta romantis",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 458
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 458,
        "word": "恋愛",
        "kana": "れんあい"
      }
    ]
  },
  {
    "id": "kanji-65cf",
    "char": "族",
    "category": "people",
    "meaning": "keluarga; kelompok",
    "on": [
      "ゾク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 44,
    "examples": [
      {
        "word": "家族",
        "kana": "かぞく",
        "meaning": "keluarga",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 236
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 236,
        "word": "家族",
        "kana": "かぞく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 236,
        "word": "家族",
        "kana": "かぞく"
      }
    ]
  },
  {
    "id": "kanji-89aa",
    "char": "親",
    "category": "people",
    "meaning": "orang tua; akrab",
    "on": [
      "シン"
    ],
    "kun": [
      "おや",
      "した.しい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 45,
    "examples": [
      {
        "word": "親",
        "kana": "おや",
        "meaning": "orang tua",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 302
      },
      {
        "word": "両親",
        "kana": "りょうしん",
        "meaning": "kedua orang tua",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 388
      },
      {
        "word": "親切",
        "kana": "しんせつ",
        "meaning": "baik hati; ramah",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 427
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 302,
        "word": "親",
        "kana": "おや"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 388,
        "word": "両親",
        "kana": "りょうしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 302,
        "word": "親",
        "kana": "おや"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 388,
        "word": "両親",
        "kana": "りょうしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 427,
        "word": "親切",
        "kana": "しんせつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 457,
        "word": "親友",
        "kana": "しんゆう"
      }
    ]
  },
  {
    "id": "kanji-8005",
    "char": "者",
    "category": "people",
    "meaning": "orang; pelaku",
    "on": [
      "シャ"
    ],
    "kun": [
      "もの"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 46,
    "examples": [
      {
        "word": "参加者",
        "kana": "さんかしゃ",
        "meaning": "peserta",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 295
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 295,
        "word": "参加者",
        "kana": "さんかしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 295,
        "word": "参加者",
        "kana": "さんかしゃ"
      }
    ]
  },
  {
    "id": "kanji-69d8",
    "char": "様",
    "category": "people",
    "meaning": "keadaan; sapaan hormat",
    "on": [
      "ヨウ"
    ],
    "kun": [
      "さま"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 47,
    "examples": [
      {
        "word": "お客様",
        "kana": "おきゃくさま",
        "meaning": "pelanggan (ragam hormat)",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 463
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 463,
        "word": "お客様",
        "kana": "おきゃくさま"
      }
    ]
  },
  {
    "id": "kanji-76f8",
    "char": "相",
    "category": "people",
    "meaning": "saling; keadaan",
    "on": [
      "ソウ",
      "ショウ"
    ],
    "kun": [
      "あい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 48,
    "examples": [
      {
        "word": "相手",
        "kana": "あいて",
        "meaning": "lawan; pasangan berinteraksi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 444
      },
      {
        "word": "相談",
        "kana": "そうだん",
        "meaning": "konsultasi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 459
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 444,
        "word": "相手",
        "kana": "あいて"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 459,
        "word": "相談",
        "kana": "そうだん"
      }
    ]
  },
  {
    "id": "kanji-53c2",
    "char": "参",
    "category": "people",
    "meaning": "ikut serta; datang dengan rendah hati",
    "on": [
      "サン"
    ],
    "kun": [
      "まい.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 49,
    "examples": [
      {
        "word": "参加者",
        "kana": "さんかしゃ",
        "meaning": "peserta",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 295
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 295,
        "word": "参加者",
        "kana": "さんかしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 295,
        "word": "参加者",
        "kana": "さんかしゃ"
      }
    ]
  },
  {
    "id": "kanji-81ea",
    "char": "自",
    "category": "people",
    "meaning": "diri sendiri",
    "on": [
      "ジ",
      "シ"
    ],
    "kun": [
      "みずか.ら"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 50,
    "examples": [
      {
        "word": "自分",
        "kana": "じぶん",
        "meaning": "diri sendiri",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 178
      },
      {
        "word": "自然",
        "kana": "しぜん",
        "meaning": "alam",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 263
      },
      {
        "word": "自信",
        "kana": "じしん",
        "meaning": "percaya diri",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 433
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 178,
        "word": "自分",
        "kana": "じぶん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 178,
        "word": "自分",
        "kana": "じぶん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 263,
        "word": "自然",
        "kana": "しぜん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 365,
        "word": "自転車",
        "kana": "じてんしゃ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 366,
        "word": "自動車",
        "kana": "じどうしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 178,
        "word": "自分",
        "kana": "じぶん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 263,
        "word": "自然",
        "kana": "しぜん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 365,
        "word": "自転車",
        "kana": "じてんしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 366,
        "word": "自動車",
        "kana": "じどうしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 433,
        "word": "自信",
        "kana": "じしん"
      }
    ]
  },
  {
    "id": "kanji-7d61",
    "char": "絡",
    "category": "people",
    "meaning": "menghubungkan; melilit",
    "on": [
      "ラク"
    ],
    "kun": [
      "から.む",
      "から.まる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 51,
    "examples": [
      {
        "word": "連絡",
        "kana": "れんらく",
        "meaning": "menghubungi; kabar",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 477
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 477,
        "word": "連絡",
        "kana": "れんらく"
      }
    ]
  },
  {
    "id": "kanji-8a2a",
    "char": "訪",
    "category": "people",
    "meaning": "mengunjungi",
    "on": [
      "ホウ"
    ],
    "kun": [
      "たず.ねる",
      "おとず.れる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 52,
    "examples": [
      {
        "word": "訪問",
        "kana": "ほうもん",
        "meaning": "kunjungan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 425
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 425,
        "word": "訪問",
        "kana": "ほうもん"
      }
    ]
  },
  {
    "id": "kanji-4f53",
    "char": "体",
    "category": "body",
    "meaning": "tubuh",
    "on": [
      "タイ"
    ],
    "kun": [
      "からだ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 53,
    "examples": [
      {
        "word": "体",
        "kana": "からだ",
        "meaning": "tubuh",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 186
      },
      {
        "word": "体力",
        "kana": "たいりょく",
        "meaning": "kekuatan fisik",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 473
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 186,
        "word": "体",
        "kana": "からだ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 186,
        "word": "体",
        "kana": "からだ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 186,
        "word": "体",
        "kana": "からだ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 473,
        "word": "体力",
        "kana": "たいりょく"
      }
    ]
  },
  {
    "id": "kanji-5065",
    "char": "健",
    "category": "body",
    "meaning": "sehat",
    "on": [
      "ケン"
    ],
    "kun": [
      "すこ.やか"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 54,
    "examples": [
      {
        "word": "健康",
        "kana": "けんこう",
        "meaning": "kesehatan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 413
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 413,
        "word": "健康",
        "kana": "けんこう"
      }
    ]
  },
  {
    "id": "kanji-5eb7",
    "char": "康",
    "category": "body",
    "meaning": "sehat; tenteram",
    "on": [
      "コウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 55,
    "examples": [
      {
        "word": "健康",
        "kana": "けんこう",
        "meaning": "kesehatan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 413
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 413,
        "word": "健康",
        "kana": "けんこう"
      }
    ]
  },
  {
    "id": "kanji-75c5",
    "char": "病",
    "category": "body",
    "meaning": "sakit; penyakit",
    "on": [
      "ビョウ"
    ],
    "kun": [
      "やまい",
      "や.む"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 56,
    "examples": [
      {
        "word": "病気",
        "kana": "びょうき",
        "meaning": "penyakit",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 380
      },
      {
        "word": "病院",
        "kana": "びょういん",
        "meaning": "rumah sakit",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 402
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 380,
        "word": "病気",
        "kana": "びょうき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 380,
        "word": "病気",
        "kana": "びょうき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 402,
        "word": "病院",
        "kana": "びょういん"
      }
    ]
  },
  {
    "id": "kanji-982d",
    "char": "頭",
    "category": "body",
    "meaning": "kepala",
    "on": [
      "トウ",
      "ズ"
    ],
    "kun": [
      "あたま",
      "かしら"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 57,
    "examples": [
      {
        "word": "頭",
        "kana": "あたま",
        "meaning": "kepala",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 187
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 187,
        "word": "頭",
        "kana": "あたま"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 187,
        "word": "頭",
        "kana": "あたま"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 187,
        "word": "頭",
        "kana": "あたま"
      }
    ]
  },
  {
    "id": "kanji-71b1",
    "char": "熱",
    "category": "body",
    "meaning": "panas; demam",
    "on": [
      "ネツ"
    ],
    "kun": [
      "あつ.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 58,
    "examples": [
      {
        "word": "熱い",
        "kana": "あつい",
        "meaning": "panas (benda)",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 257
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 257,
        "word": "熱い",
        "kana": "あつい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 257,
        "word": "熱い",
        "kana": "あつい"
      }
    ]
  },
  {
    "id": "kanji-6240",
    "char": "所",
    "category": "position",
    "meaning": "tempat",
    "on": [
      "ショ"
    ],
    "kun": [
      "ところ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 59,
    "examples": [
      {
        "word": "場所",
        "kana": "ばしょ",
        "meaning": "tempat; lokasi",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 124
      },
      {
        "word": "住所",
        "kana": "じゅうしょ",
        "meaning": "alamat",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 424
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 124,
        "word": "場所",
        "kana": "ばしょ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 124,
        "word": "場所",
        "kana": "ばしょ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 124,
        "word": "場所",
        "kana": "ばしょ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 424,
        "word": "住所",
        "kana": "じゅうしょ"
      }
    ]
  },
  {
    "id": "kanji-65b9",
    "char": "方",
    "category": "position",
    "meaning": "arah; cara; orang (sopan)",
    "on": [
      "ホウ"
    ],
    "kun": [
      "かた"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 60,
    "examples": [
      {
        "word": "方",
        "kana": "ほう",
        "meaning": "cara",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 334
      },
      {
        "word": "地方",
        "kana": "ちほう",
        "meaning": "daerah",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 248
      },
      {
        "word": "方法",
        "kana": "ほうほう",
        "meaning": "cara; metode",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 434
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 248,
        "word": "地方",
        "kana": "ちほう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 255,
        "word": "〜方",
        "kana": "〜かた"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 256,
        "word": "食べ方",
        "kana": "たべかた"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 334,
        "word": "方（こっちの方）",
        "kana": "ほう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 248,
        "word": "地方",
        "kana": "ちほう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 255,
        "word": "〜方",
        "kana": "〜かた"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 256,
        "word": "食べ方",
        "kana": "たべかた"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 334,
        "word": "方（こっちの方）",
        "kana": "ほう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 434,
        "word": "方法",
        "kana": "ほうほう"
      }
    ]
  },
  {
    "id": "kanji-8fd1",
    "char": "近",
    "category": "position",
    "meaning": "dekat",
    "on": [
      "キン"
    ],
    "kun": [
      "ちか.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 61,
    "examples": [
      {
        "word": "近く",
        "kana": "ちかく",
        "meaning": "dekat",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 226
      },
      {
        "word": "最近",
        "kana": "さいきん",
        "meaning": "akhir-akhir ini",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 448
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 226,
        "word": "近く",
        "kana": "ちかく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 226,
        "word": "近く",
        "kana": "ちかく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 448,
        "word": "最近",
        "kana": "さいきん"
      }
    ]
  },
  {
    "id": "kanji-9060",
    "char": "遠",
    "category": "position",
    "meaning": "jauh",
    "on": [
      "エン",
      "オン"
    ],
    "kun": [
      "とお.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 62,
    "examples": [
      {
        "word": "遠い",
        "kana": "とおい",
        "meaning": "jauh",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 407
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 407,
        "word": "遠い",
        "kana": "とおい"
      }
    ]
  },
  {
    "id": "kanji-5bfe",
    "char": "対",
    "category": "position",
    "meaning": "berhadapan; terhadap",
    "on": [
      "タイ",
      "ツイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 63,
    "examples": [
      {
        "word": "〜対〜",
        "kana": "たい",
        "meaning": "lawan; berbanding",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 399
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 399,
        "word": "〜対〜（２対１）",
        "kana": "〜たい〜（にたいいち）"
      }
    ]
  },
  {
    "id": "kanji-4e88",
    "char": "予",
    "category": "time",
    "meaning": "sebelumnya",
    "on": [
      "ヨ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 64,
    "examples": [
      {
        "word": "予定",
        "kana": "よてい",
        "meaning": "rencana",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 467
      },
      {
        "word": "予約します",
        "kana": "よやくします",
        "meaning": "memesan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 267
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 267,
        "word": "予約します",
        "kana": "よやくします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 267,
        "word": "予約します",
        "kana": "よやくします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 467,
        "word": "予定",
        "kana": "よてい"
      }
    ]
  },
  {
    "id": "kanji-5143",
    "char": "元",
    "category": "time",
    "meaning": "asal; semula",
    "on": [
      "ゲン",
      "ガン"
    ],
    "kun": [
      "もと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 65,
    "examples": [
      {
        "word": "元気",
        "kana": "げんき",
        "meaning": "sehat",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 199
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 199,
        "word": "元気",
        "kana": "げんき"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 199,
        "word": "元気",
        "kana": "げんき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 199,
        "word": "元気",
        "kana": "げんき"
      }
    ]
  },
  {
    "id": "kanji-521d",
    "char": "初",
    "category": "time",
    "meaning": "awal; pertama",
    "on": [
      "ショ"
    ],
    "kun": [
      "はじ.め",
      "はつ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 66,
    "examples": [
      {
        "word": "初級",
        "kana": "しょきゅう",
        "meaning": "tingkat dasar",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 441
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 441,
        "word": "初級",
        "kana": "しょきゅう"
      }
    ]
  },
  {
    "id": "kanji-5915",
    "char": "夕",
    "category": "time",
    "meaning": "sore",
    "on": [
      "セキ"
    ],
    "kun": [
      "ゆう"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 67,
    "examples": [
      {
        "word": "夕食",
        "kana": "ゆうしょく",
        "meaning": "makan malam",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 421
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 421,
        "word": "夕食",
        "kana": "ゆうしょく"
      }
    ]
  },
  {
    "id": "kanji-591c",
    "char": "夜",
    "category": "time",
    "meaning": "malam",
    "on": [
      "ヤ"
    ],
    "kun": [
      "よる",
      "よ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 68,
    "examples": [
      {
        "word": "夜",
        "kana": "よる",
        "meaning": "malam",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 136
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 136,
        "word": "夜",
        "kana": "よる"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 136,
        "word": "夜",
        "kana": "よる"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 136,
        "word": "夜",
        "kana": "よる"
      }
    ]
  },
  {
    "id": "kanji-59cb",
    "char": "始",
    "category": "time",
    "meaning": "mulai",
    "on": [
      "シ"
    ],
    "kun": [
      "はじ.まる",
      "はじ.める"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 69,
    "examples": [
      {
        "word": "年始",
        "kana": "ねんし",
        "meaning": "awal tahun",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 301
      },
      {
        "word": "始まります",
        "kana": "はじまります",
        "meaning": "mulai (suatu kegiatan)",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 287
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 287,
        "word": "始まります",
        "kana": "はじまります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 301,
        "word": "年始",
        "kana": "ねんし"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 287,
        "word": "始まります",
        "kana": "はじまります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 301,
        "word": "年始",
        "kana": "ねんし"
      }
    ]
  },
  {
    "id": "kanji-5e30",
    "char": "帰",
    "category": "time",
    "meaning": "pulang",
    "on": [
      "キ"
    ],
    "kun": [
      "かえ.る",
      "かえ.す"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 70,
    "examples": [
      {
        "word": "帰国",
        "kana": "きこく",
        "meaning": "pulang ke negara asal",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 305
      },
      {
        "word": "帰ります",
        "kana": "かえります",
        "meaning": "pulang",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 266
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 266,
        "word": "帰ります",
        "kana": "かえります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 305,
        "word": "帰国",
        "kana": "きこく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 266,
        "word": "帰ります",
        "kana": "かえります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 305,
        "word": "帰国",
        "kana": "きこく"
      }
    ]
  },
  {
    "id": "kanji-663c",
    "char": "昼",
    "category": "time",
    "meaning": "siang",
    "on": [
      "チュウ"
    ],
    "kun": [
      "ひる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 71,
    "examples": [
      {
        "word": "昼",
        "kana": "ひる",
        "meaning": "siang; siang hari",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 135
      },
      {
        "word": "昼食",
        "kana": "ちゅうしょく",
        "meaning": "makan siang",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 420
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 135,
        "word": "昼",
        "kana": "ひる"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 135,
        "word": "昼",
        "kana": "ひる"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 135,
        "word": "昼",
        "kana": "ひる"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 420,
        "word": "昼食",
        "kana": "ちゅうしょく"
      }
    ]
  },
  {
    "id": "kanji-66dc",
    "char": "曜",
    "category": "time",
    "meaning": "hari dalam pekan",
    "on": [
      "ヨウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 72,
    "examples": [
      {
        "word": "日曜日",
        "kana": "にちようび",
        "meaning": "hari Minggu",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 394
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 394,
        "word": "日曜日",
        "kana": "にちようび"
      }
    ]
  },
  {
    "id": "kanji-671d",
    "char": "朝",
    "category": "time",
    "meaning": "pagi",
    "on": [
      "チョウ"
    ],
    "kun": [
      "あさ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 73,
    "examples": [
      {
        "word": "朝",
        "kana": "あさ",
        "meaning": "pagi",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 134
      },
      {
        "word": "毎朝",
        "kana": "まいあさ",
        "meaning": "setiap pagi",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 196
      },
      {
        "word": "朝食",
        "kana": "ちょうしょく",
        "meaning": "sarapan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 419
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 134,
        "word": "朝",
        "kana": "あさ"
      },
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 196,
        "word": "毎朝",
        "kana": "まいあさ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 134,
        "word": "朝",
        "kana": "あさ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 196,
        "word": "毎朝",
        "kana": "まいあさ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 134,
        "word": "朝",
        "kana": "あさ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 196,
        "word": "毎朝",
        "kana": "まいあさ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 419,
        "word": "朝食",
        "kana": "ちょうしょく"
      }
    ]
  },
  {
    "id": "kanji-672b",
    "char": "末",
    "category": "time",
    "meaning": "akhir; ujung",
    "on": [
      "マツ",
      "バツ"
    ],
    "kun": [
      "すえ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 74,
    "examples": [
      {
        "word": "週末",
        "kana": "しゅうまつ",
        "meaning": "akhir pekan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 198
      },
      {
        "word": "年末",
        "kana": "ねんまつ",
        "meaning": "akhir tahun",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 300
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 198,
        "word": "週末",
        "kana": "しゅうまつ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 198,
        "word": "週末",
        "kana": "しゅうまつ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 300,
        "word": "年末",
        "kana": "ねんまつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 198,
        "word": "週末",
        "kana": "しゅうまつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 300,
        "word": "年末",
        "kana": "ねんまつ"
      }
    ]
  },
  {
    "id": "kanji-6b62",
    "char": "止",
    "category": "time",
    "meaning": "berhenti",
    "on": [
      "シ"
    ],
    "kun": [
      "と.まる",
      "と.める"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 75,
    "examples": [
      {
        "word": "禁止",
        "kana": "きんし",
        "meaning": "dilarang",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 349
      },
      {
        "word": "止まります",
        "kana": "とまります",
        "meaning": "berhenti",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 129
      },
      {
        "word": "中止します",
        "kana": "ちゅうしします",
        "meaning": "menghentikan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 289
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 129,
        "word": "止まります",
        "kana": "とまります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 129,
        "word": "止まります",
        "kana": "とまります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 289,
        "word": "中止します",
        "kana": "ちゅうしします"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 349,
        "word": "禁止",
        "kana": "きんし"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 129,
        "word": "止まります",
        "kana": "とまります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 289,
        "word": "中止します",
        "kana": "ちゅうしします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 349,
        "word": "禁止",
        "kana": "きんし"
      }
    ]
  },
  {
    "id": "kanji-7d42",
    "char": "終",
    "category": "time",
    "meaning": "selesai",
    "on": [
      "シュウ"
    ],
    "kun": [
      "お.わる",
      "お.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 76,
    "examples": [
      {
        "word": "終わります",
        "kana": "おわります",
        "meaning": "selesai",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 288
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 288,
        "word": "終わります",
        "kana": "おわります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 288,
        "word": "終わります",
        "kana": "おわります"
      }
    ]
  },
  {
    "id": "kanji-53bb",
    "char": "去",
    "category": "time",
    "meaning": "pergi; berlalu",
    "on": [
      "キョ",
      "コ"
    ],
    "kun": [
      "さ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 77,
    "examples": [
      {
        "word": "去年",
        "kana": "きょねん",
        "meaning": "tahun lalu",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 219
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 219,
        "word": "去年",
        "kana": "きょねん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 219,
        "word": "去年",
        "kana": "きょねん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 219,
        "word": "去年",
        "kana": "きょねん"
      }
    ]
  },
  {
    "id": "kanji-7d9a",
    "char": "続",
    "category": "time",
    "meaning": "berlanjut",
    "on": [
      "ゾク"
    ],
    "kun": [
      "つづ.く",
      "つづ.ける"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 78,
    "examples": [
      {
        "word": "手続き",
        "kana": "てつづき",
        "meaning": "prosedur",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 464
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 464,
        "word": "手続き",
        "kana": "てつづき"
      }
    ]
  },
  {
    "id": "kanji-4f8b",
    "char": "例",
    "category": "learning",
    "meaning": "contoh",
    "on": [
      "レイ"
    ],
    "kun": [
      "たと.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 79,
    "examples": [
      {
        "word": "例",
        "kana": "れい",
        "meaning": "contoh",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 493
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 493,
        "word": "例",
        "kana": "れい"
      }
    ]
  },
  {
    "id": "kanji-52c9",
    "char": "勉",
    "category": "learning",
    "meaning": "berusaha",
    "on": [
      "ベン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 80,
    "examples": [
      {
        "word": "勉強",
        "kana": "べんきょう",
        "meaning": "belajar",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 146
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 146,
        "word": "勉強",
        "kana": "べんきょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 146,
        "word": "勉強",
        "kana": "べんきょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 146,
        "word": "勉強",
        "kana": "べんきょう"
      }
    ]
  },
  {
    "id": "kanji-5316",
    "char": "化",
    "category": "learning",
    "meaning": "berubah",
    "on": [
      "カ",
      "ケ"
    ],
    "kun": [
      "ば.ける"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 81,
    "examples": [
      {
        "word": "文化",
        "kana": "ぶんか",
        "meaning": "budaya",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 147
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 147,
        "word": "文化",
        "kana": "ぶんか"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 147,
        "word": "文化",
        "kana": "ぶんか"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 147,
        "word": "文化",
        "kana": "ぶんか"
      }
    ]
  },
  {
    "id": "kanji-5352",
    "char": "卒",
    "category": "learning",
    "meaning": "lulus; selesai",
    "on": [
      "ソツ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 82,
    "examples": [
      {
        "word": "卒業",
        "kana": "そつぎょう",
        "meaning": "kelulusan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 379
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 379,
        "word": "卒業",
        "kana": "そつぎょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 379,
        "word": "卒業",
        "kana": "そつぎょう"
      }
    ]
  },
  {
    "id": "kanji-535a",
    "char": "博",
    "category": "learning",
    "meaning": "luas pengetahuan",
    "on": [
      "ハク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 83,
    "examples": [
      {
        "word": "博物館",
        "kana": "はくぶつかん",
        "meaning": "museum",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 352
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 352,
        "word": "博物館",
        "kana": "はくぶつかん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 352,
        "word": "博物館",
        "kana": "はくぶつかん"
      }
    ]
  },
  {
    "id": "kanji-53f2",
    "char": "史",
    "category": "learning",
    "meaning": "sejarah",
    "on": [
      "シ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 84,
    "examples": [
      {
        "word": "歴史",
        "kana": "れきし",
        "meaning": "sejarah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 341
      },
      {
        "word": "歴史的",
        "kana": "れきしてき",
        "meaning": "bersejarah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 347
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 341,
        "word": "歴史",
        "kana": "れきし"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 347,
        "word": "歴史的",
        "kana": "れきしてき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 341,
        "word": "歴史",
        "kana": "れきし"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 347,
        "word": "歴史的",
        "kana": "れきしてき"
      }
    ]
  },
  {
    "id": "kanji-554f",
    "char": "問",
    "category": "learning",
    "meaning": "bertanya; persoalan",
    "on": [
      "モン"
    ],
    "kun": [
      "と.う",
      "と.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 85,
    "examples": [
      {
        "word": "問題",
        "kana": "もんだい",
        "meaning": "soal; persoalan; masalah",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 284
      },
      {
        "word": "訪問",
        "kana": "ほうもん",
        "meaning": "kunjungan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 425
      },
      {
        "word": "質問",
        "kana": "しつもん",
        "meaning": "pertanyaan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 485
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 284,
        "word": "問題",
        "kana": "もんだい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 284,
        "word": "問題",
        "kana": "もんだい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 425,
        "word": "訪問",
        "kana": "ほうもん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 485,
        "word": "質問",
        "kana": "しつもん"
      }
    ]
  },
  {
    "id": "kanji-5b57",
    "char": "字",
    "category": "learning",
    "meaning": "huruf",
    "on": [
      "ジ"
    ],
    "kun": [
      "あざ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 86,
    "examples": [
      {
        "word": "漢字",
        "kana": "かんじ",
        "meaning": "aksara kanji",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 483
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 483,
        "word": "漢字",
        "kana": "かんじ"
      }
    ]
  },
  {
    "id": "kanji-5f0f",
    "char": "式",
    "category": "learning",
    "meaning": "upacara; bentuk; rumus",
    "on": [
      "シキ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 87,
    "examples": [
      {
        "word": "〜式",
        "kana": "しき",
        "meaning": "upacara",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 314
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 314,
        "word": "〜式（成人式）",
        "kana": "〜しき（せいじんしき）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 314,
        "word": "〜式（成人式）",
        "kana": "〜しき（せいじんしき）"
      }
    ]
  },
  {
    "id": "kanji-5f62",
    "char": "形",
    "category": "learning",
    "meaning": "bentuk",
    "on": [
      "ケイ",
      "ギョウ"
    ],
    "kun": [
      "かたち",
      "かた"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 88,
    "examples": [
      {
        "word": "形",
        "kana": "かたち",
        "meaning": "bentuk",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 482
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 482,
        "word": "形",
        "kana": "かたち"
      }
    ]
  },
  {
    "id": "kanji-6559",
    "char": "教",
    "category": "learning",
    "meaning": "mengajar",
    "on": [
      "キョウ"
    ],
    "kun": [
      "おし.える",
      "おそ.わる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 89,
    "examples": [
      {
        "word": "仏教",
        "kana": "ぶっきょう",
        "meaning": "agama Buddha",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 340
      },
      {
        "word": "教えます",
        "kana": "おしえます",
        "meaning": "mengajar; memberi tahu",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 290
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 290,
        "word": "教えます",
        "kana": "おしえます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 340,
        "word": "仏教",
        "kana": "ぶっきょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 290,
        "word": "教えます",
        "kana": "おしえます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 340,
        "word": "仏教",
        "kana": "ぶっきょう"
      }
    ]
  },
  {
    "id": "kanji-6587",
    "char": "文",
    "category": "learning",
    "meaning": "kalimat; tulisan",
    "on": [
      "ブン",
      "モン"
    ],
    "kun": [
      "ふみ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 90,
    "examples": [
      {
        "word": "文",
        "kana": "ぶん",
        "meaning": "kalimat",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 489
      },
      {
        "word": "文化",
        "kana": "ぶんか",
        "meaning": "budaya",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 147
      },
      {
        "word": "注文",
        "kana": "ちゅうもん",
        "meaning": "pesanan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 244
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 147,
        "word": "文化",
        "kana": "ぶんか"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 147,
        "word": "文化",
        "kana": "ぶんか"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 244,
        "word": "注文",
        "kana": "ちゅうもん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 147,
        "word": "文化",
        "kana": "ぶんか"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 244,
        "word": "注文",
        "kana": "ちゅうもん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 489,
        "word": "文",
        "kana": "ぶん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 490,
        "word": "文型",
        "kana": "ぶんけい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 491,
        "word": "文法",
        "kana": "ぶんぽう"
      }
    ]
  },
  {
    "id": "kanji-6f22",
    "char": "漢",
    "category": "learning",
    "meaning": "Tiongkok; aksara Han",
    "on": [
      "カン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 91,
    "examples": [
      {
        "word": "漢字",
        "kana": "かんじ",
        "meaning": "aksara kanji",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 483
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 483,
        "word": "漢字",
        "kana": "かんじ"
      }
    ]
  },
  {
    "id": "kanji-77e5",
    "char": "知",
    "category": "learning",
    "meaning": "mengetahui",
    "on": [
      "チ"
    ],
    "kun": [
      "し.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 92,
    "examples": [
      {
        "word": "知ります",
        "kana": "しります",
        "meaning": "mengetahui",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 298
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 298,
        "word": "知ります",
        "kana": "しります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 298,
        "word": "知ります",
        "kana": "しります"
      }
    ]
  },
  {
    "id": "kanji-7b54",
    "char": "答",
    "category": "learning",
    "meaning": "jawaban; menjawab",
    "on": [
      "トウ"
    ],
    "kun": [
      "こた.える",
      "こた.え"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 93,
    "examples": [
      {
        "word": "答え",
        "kana": "こたえ",
        "meaning": "jawaban",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 484
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 484,
        "word": "答え",
        "kana": "こたえ"
      }
    ]
  },
  {
    "id": "kanji-7d19",
    "char": "紙",
    "category": "learning",
    "meaning": "kertas",
    "on": [
      "シ"
    ],
    "kun": [
      "かみ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 94,
    "examples": [
      {
        "word": "紙",
        "kana": "かみ",
        "meaning": "kertas",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 356
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 356,
        "word": "紙",
        "kana": "かみ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 356,
        "word": "紙",
        "kana": "かみ"
      }
    ]
  },
  {
    "id": "kanji-7d1a",
    "char": "級",
    "category": "learning",
    "meaning": "tingkat; kelas",
    "on": [
      "キュウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 95,
    "examples": [
      {
        "word": "初級",
        "kana": "しょきゅう",
        "meaning": "tingkat dasar",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 441
      },
      {
        "word": "中級",
        "kana": "ちゅうきゅう",
        "meaning": "tingkat menengah",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 442
      },
      {
        "word": "上級",
        "kana": "じょうきゅう",
        "meaning": "tingkat mahir",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 443
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 440,
        "word": "～級",
        "kana": "～きゅう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 441,
        "word": "初級",
        "kana": "しょきゅう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 442,
        "word": "中級",
        "kana": "ちゅうきゅう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 443,
        "word": "上級",
        "kana": "じょうきゅう"
      }
    ]
  },
  {
    "id": "kanji-7d39",
    "char": "紹",
    "category": "learning",
    "meaning": "memperkenalkan; menyambung",
    "on": [
      "ショウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 96,
    "examples": [
      {
        "word": "自己紹介",
        "kana": "じこしょうかい",
        "meaning": "perkenalan diri",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 222,
        "word": "自己紹介",
        "kana": "じこしょうかい"
      }
    ]
  },
  {
    "id": "kanji-7df4",
    "char": "練",
    "category": "learning",
    "meaning": "berlatih; mengolah",
    "on": [
      "レン"
    ],
    "kun": [
      "ね.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 97,
    "examples": [
      {
        "word": "練習",
        "kana": "れんしゅう",
        "meaning": "latihan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 494
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 494,
        "word": "練習",
        "kana": "れんしゅう"
      }
    ]
  },
  {
    "id": "kanji-7fd2",
    "char": "習",
    "category": "learning",
    "meaning": "belajar; berlatih",
    "on": [
      "シュウ"
    ],
    "kun": [
      "なら.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 98,
    "examples": [
      {
        "word": "習う",
        "kana": "ならう",
        "meaning": "mempelajari",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 438
      },
      {
        "word": "練習",
        "kana": "れんしゅう",
        "meaning": "latihan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 494
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 438,
        "word": "習う",
        "kana": "ならう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 494,
        "word": "練習",
        "kana": "れんしゅう"
      }
    ]
  },
  {
    "id": "kanji-8003",
    "char": "考",
    "category": "learning",
    "meaning": "memikirkan",
    "on": [
      "コウ"
    ],
    "kun": [
      "かんが.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 99,
    "examples": [
      {
        "word": "考えます",
        "kana": "かんがえます",
        "meaning": "memikirkan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 324
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 324,
        "word": "考えます",
        "kana": "かんがえます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 324,
        "word": "考えます",
        "kana": "かんがえます"
      }
    ]
  },
  {
    "id": "kanji-89b3",
    "char": "観",
    "category": "learning",
    "meaning": "melihat; pandangan",
    "on": [
      "カン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 100,
    "examples": [
      {
        "word": "観光地",
        "kana": "かんこうち",
        "meaning": "tempat wisata",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 271
      },
      {
        "word": "～観",
        "kana": "かん",
        "meaning": "pandangan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 430
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 271,
        "word": "観光地",
        "kana": "かんこうち"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 271,
        "word": "観光地",
        "kana": "かんこうち"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 430,
        "word": "～観（人生観）",
        "kana": "～かん（じんせいかん）"
      }
    ]
  },
  {
    "id": "kanji-89e3",
    "char": "解",
    "category": "learning",
    "meaning": "memecahkan; memahami",
    "on": [
      "カイ",
      "ゲ"
    ],
    "kun": [
      "と.く",
      "と.ける"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 101,
    "examples": [
      {
        "word": "読解",
        "kana": "どっかい",
        "meaning": "pemahaman bacaan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 487
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 487,
        "word": "読解",
        "kana": "どっかい"
      }
    ]
  },
  {
    "id": "kanji-8a08",
    "char": "計",
    "category": "learning",
    "meaning": "menghitung; rencana",
    "on": [
      "ケイ"
    ],
    "kun": [
      "はか.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 102,
    "examples": [
      {
        "word": "時計",
        "kana": "とけい",
        "meaning": "jam",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 210
      },
      {
        "word": "計画",
        "kana": "けいかく",
        "meaning": "rencana",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 432
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 210,
        "word": "時計",
        "kana": "とけい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 210,
        "word": "時計",
        "kana": "とけい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 210,
        "word": "時計",
        "kana": "とけい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 432,
        "word": "計画",
        "kana": "けいかく"
      }
    ]
  },
  {
    "id": "kanji-8a66",
    "char": "試",
    "category": "learning",
    "meaning": "mencoba; ujian",
    "on": [
      "シ"
    ],
    "kun": [
      "ため.す",
      "こころ.みる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 103,
    "examples": [
      {
        "word": "試験",
        "kana": "しけん",
        "meaning": "ujian",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 312
      },
      {
        "word": "試合",
        "kana": "しあい",
        "meaning": "pertandingan",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 393
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 312,
        "word": "試験",
        "kana": "しけん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 312,
        "word": "試験",
        "kana": "しけん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 393,
        "word": "試合",
        "kana": "しあい"
      }
    ]
  },
  {
    "id": "kanji-8aac",
    "char": "説",
    "category": "learning",
    "meaning": "menjelaskan; teori",
    "on": [
      "セツ",
      "ゼイ"
    ],
    "kun": [
      "と.く"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 104,
    "examples": [
      {
        "word": "説明",
        "kana": "せつめい",
        "meaning": "penjelasan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 350
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 350,
        "word": "説明",
        "kana": "せつめい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 350,
        "word": "説明",
        "kana": "せつめい"
      }
    ]
  },
  {
    "id": "kanji-8abf",
    "char": "調",
    "category": "learning",
    "meaning": "memeriksa; nada",
    "on": [
      "チョウ"
    ],
    "kun": [
      "しら.べる",
      "ととの.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 105,
    "examples": [
      {
        "word": "調子",
        "kana": "ちょうし",
        "meaning": "kondisi",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 321
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 321,
        "word": "調子",
        "kana": "ちょうし"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 321,
        "word": "調子",
        "kana": "ちょうし"
      }
    ]
  },
  {
    "id": "kanji-8ac7",
    "char": "談",
    "category": "learning",
    "meaning": "berbicara; berdiskusi",
    "on": [
      "ダン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 106,
    "examples": [
      {
        "word": "相談",
        "kana": "そうだん",
        "meaning": "konsultasi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 459
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 459,
        "word": "相談",
        "kana": "そうだん"
      }
    ]
  },
  {
    "id": "kanji-8b70",
    "char": "議",
    "category": "learning",
    "meaning": "musyawarah; pembahasan",
    "on": [
      "ギ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 107,
    "examples": [
      {
        "word": "会議室",
        "kana": "かいぎしつ",
        "meaning": "ruang rapat",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 359
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 359,
        "word": "会議室",
        "kana": "かいぎしつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 359,
        "word": "会議室",
        "kana": "かいぎしつ"
      }
    ]
  },
  {
    "id": "kanji-8cea",
    "char": "質",
    "category": "learning",
    "meaning": "kualitas; sifat",
    "on": [
      "シツ",
      "シチ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 108,
    "examples": [
      {
        "word": "質問",
        "kana": "しつもん",
        "meaning": "pertanyaan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 485
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 485,
        "word": "質問",
        "kana": "しつもん"
      }
    ]
  },
  {
    "id": "kanji-984c",
    "char": "題",
    "category": "learning",
    "meaning": "judul; soal; tema",
    "on": [
      "ダイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 109,
    "examples": [
      {
        "word": "問題",
        "kana": "もんだい",
        "meaning": "soal; persoalan; masalah",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 284
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 284,
        "word": "問題",
        "kana": "もんだい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 284,
        "word": "問題",
        "kana": "もんだい"
      }
    ]
  },
  {
    "id": "kanji-9a13",
    "char": "験",
    "category": "learning",
    "meaning": "ujian; pengalaman",
    "on": [
      "ケン",
      "ゲン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 110,
    "examples": [
      {
        "word": "試験",
        "kana": "しけん",
        "meaning": "ujian",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 312
      },
      {
        "word": "経験",
        "kana": "けいけん",
        "meaning": "pengalaman",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 426
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 312,
        "word": "試験",
        "kana": "しけん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 312,
        "word": "試験",
        "kana": "しけん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 426,
        "word": "経験",
        "kana": "けいけん"
      }
    ]
  },
  {
    "id": "kanji-4e57",
    "char": "乗",
    "category": "places",
    "meaning": "naik kendaraan",
    "on": [
      "ジョウ"
    ],
    "kun": [
      "の.る",
      "の.せる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 111,
    "examples": [
      {
        "word": "乗ります",
        "kana": "のります",
        "meaning": "naik; menaiki",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 137
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 137,
        "word": "乗ります",
        "kana": "のります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 137,
        "word": "乗ります",
        "kana": "のります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 137,
        "word": "乗ります",
        "kana": "のります"
      }
    ]
  },
  {
    "id": "kanji-4eac",
    "char": "京",
    "category": "places",
    "meaning": "ibu kota",
    "on": [
      "キョウ",
      "ケイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 112,
    "examples": [
      {
        "word": "東京",
        "kana": "とうきょう",
        "meaning": "Tokyo",
        "source": "marugoto-a2-1",
        "page": 1,
        "number": 65
      },
      {
        "word": "京都",
        "kana": "きょうと",
        "meaning": "Kyoto",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 337
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 1,
        "number": 65,
        "word": "東京",
        "kana": "とうきょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 1,
        "number": 65,
        "word": "東京",
        "kana": "とうきょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 337,
        "word": "京都",
        "kana": "きょうと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 65,
        "word": "東京",
        "kana": "とうきょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 337,
        "word": "京都",
        "kana": "きょうと"
      }
    ]
  },
  {
    "id": "kanji-4f4f",
    "char": "住",
    "category": "places",
    "meaning": "tinggal",
    "on": [
      "ジュウ"
    ],
    "kun": [
      "す.む"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 113,
    "examples": [
      {
        "word": "住所",
        "kana": "じゅうしょ",
        "meaning": "alamat",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 424
      },
      {
        "word": "住みます",
        "kana": "すみます",
        "meaning": "tinggal di",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 227
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 227,
        "word": "住みます",
        "kana": "すみます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 227,
        "word": "住みます",
        "kana": "すみます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 424,
        "word": "住所",
        "kana": "じゅうしょ"
      }
    ]
  },
  {
    "id": "kanji-516c",
    "char": "公",
    "category": "places",
    "meaning": "umum; publik",
    "on": [
      "コウ"
    ],
    "kun": [
      "おおやけ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 114,
    "examples": [
      {
        "word": "公園",
        "kana": "こうえん",
        "meaning": "taman",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 401
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 401,
        "word": "公園",
        "kana": "こうえん"
      }
    ]
  },
  {
    "id": "kanji-5712",
    "char": "園",
    "category": "places",
    "meaning": "taman",
    "on": [
      "エン"
    ],
    "kun": [
      "その"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 115,
    "examples": [
      {
        "word": "公園",
        "kana": "こうえん",
        "meaning": "taman",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 401
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 401,
        "word": "公園",
        "kana": "こうえん"
      }
    ]
  },
  {
    "id": "kanji-5730",
    "char": "地",
    "category": "places",
    "meaning": "tanah; wilayah",
    "on": [
      "チ",
      "ジ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 116,
    "examples": [
      {
        "word": "地方",
        "kana": "ちほう",
        "meaning": "daerah",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 248
      },
      {
        "word": "観光地",
        "kana": "かんこうち",
        "meaning": "tempat wisata",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 271
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 248,
        "word": "地方",
        "kana": "ちほう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 271,
        "word": "観光地",
        "kana": "かんこうち"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 248,
        "word": "地方",
        "kana": "ちほう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 271,
        "word": "観光地",
        "kana": "かんこうち"
      }
    ]
  },
  {
    "id": "kanji-5834",
    "char": "場",
    "category": "places",
    "meaning": "tempat",
    "on": [
      "ジョウ"
    ],
    "kun": [
      "ば"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 117,
    "examples": [
      {
        "word": "場所",
        "kana": "ばしょ",
        "meaning": "tempat; lokasi",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 124
      },
      {
        "word": "広場",
        "kana": "ひろば",
        "meaning": "lapangan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 283
      },
      {
        "word": "会場",
        "kana": "かいじょう",
        "meaning": "tempat acara",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 293
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 124,
        "word": "場所",
        "kana": "ばしょ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 124,
        "word": "場所",
        "kana": "ばしょ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 283,
        "word": "広場",
        "kana": "ひろば"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 293,
        "word": "会場",
        "kana": "かいじょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 294,
        "word": "入場料",
        "kana": "にゅうじょうりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 124,
        "word": "場所",
        "kana": "ばしょ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 283,
        "word": "広場",
        "kana": "ひろば"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 293,
        "word": "会場",
        "kana": "かいじょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 294,
        "word": "入場料",
        "kana": "にゅうじょうりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 392,
        "word": "サッカー場",
        "kana": "サッカーじょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 454,
        "word": "職場",
        "kana": "しょくば"
      }
    ]
  },
  {
    "id": "kanji-5ba2",
    "char": "客",
    "category": "places",
    "meaning": "tamu; pelanggan",
    "on": [
      "キャク",
      "カク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 118,
    "examples": [
      {
        "word": "客",
        "kana": "きゃく",
        "meaning": "tamu; pelanggan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 243
      },
      {
        "word": "お客様",
        "kana": "おきゃくさま",
        "meaning": "pelanggan (ragam hormat)",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 463
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 243,
        "word": "客",
        "kana": "きゃく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 243,
        "word": "客",
        "kana": "きゃく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 463,
        "word": "お客様",
        "kana": "おきゃくさま"
      }
    ]
  },
  {
    "id": "kanji-5ba4",
    "char": "室",
    "category": "places",
    "meaning": "ruangan",
    "on": [
      "シツ"
    ],
    "kun": [
      "むろ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 119,
    "examples": [
      {
        "word": "会議室",
        "kana": "かいぎしつ",
        "meaning": "ruang rapat",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 359
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 359,
        "word": "会議室",
        "kana": "かいぎしつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 359,
        "word": "会議室",
        "kana": "かいぎしつ"
      }
    ]
  },
  {
    "id": "kanji-5bfa",
    "char": "寺",
    "category": "places",
    "meaning": "kuil Buddha",
    "on": [
      "ジ"
    ],
    "kun": [
      "てら"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 120,
    "examples": [
      {
        "word": "お寺",
        "kana": "おてら",
        "meaning": "kuil Buddha",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 339
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 339,
        "word": "お寺",
        "kana": "おてら"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 339,
        "word": "お寺",
        "kana": "おてら"
      }
    ]
  },
  {
    "id": "kanji-5c4b",
    "char": "屋",
    "category": "places",
    "meaning": "rumah; toko; atap",
    "on": [
      "オク"
    ],
    "kun": [
      "や"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 121,
    "examples": [
      {
        "word": "本屋",
        "kana": "ほんや",
        "meaning": "toko buku",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 225
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 225,
        "word": "本屋",
        "kana": "ほんや"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 225,
        "word": "本屋",
        "kana": "ほんや"
      }
    ]
  },
  {
    "id": "kanji-5e02",
    "char": "市",
    "category": "places",
    "meaning": "kota; pasar",
    "on": [
      "シ"
    ],
    "kun": [
      "いち"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 122,
    "examples": [
      {
        "word": "〜市",
        "kana": "し",
        "meaning": "kota",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 315
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 315,
        "word": "〜市（さいたま市）",
        "kana": "〜し"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 315,
        "word": "〜市（さいたま市）",
        "kana": "〜し"
      }
    ]
  },
  {
    "id": "kanji-5e2d",
    "char": "席",
    "category": "places",
    "meaning": "tempat duduk",
    "on": [
      "セキ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 123,
    "examples": [
      {
        "word": "出席",
        "kana": "しゅっせき",
        "meaning": "kehadiran",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 450
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 450,
        "word": "出席",
        "kana": "しゅっせき"
      }
    ]
  },
  {
    "id": "kanji-5ea7",
    "char": "座",
    "category": "places",
    "meaning": "duduk; tempat duduk",
    "on": [
      "ザ"
    ],
    "kun": [
      "すわ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 124,
    "examples": [
      {
        "word": "座る",
        "kana": "すわる",
        "meaning": "duduk",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 428
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 428,
        "word": "座る",
        "kana": "すわる"
      }
    ]
  },
  {
    "id": "kanji-5ead",
    "char": "庭",
    "category": "places",
    "meaning": "halaman; taman rumah",
    "on": [
      "テイ"
    ],
    "kun": [
      "にわ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 125,
    "examples": [
      {
        "word": "庭",
        "kana": "にわ",
        "meaning": "taman",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 400
      },
      {
        "word": "家庭料理",
        "kana": "かていりょうり",
        "meaning": "masakan rumahan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 414
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 400,
        "word": "庭",
        "kana": "にわ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 414,
        "word": "家庭料理",
        "kana": "かていりょうり"
      }
    ]
  },
  {
    "id": "kanji-65c5",
    "char": "旅",
    "category": "places",
    "meaning": "perjalanan",
    "on": [
      "リョ"
    ],
    "kun": [
      "たび"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 126,
    "examples": [
      {
        "word": "旅行",
        "kana": "りょこう",
        "meaning": "perjalanan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 149
      },
      {
        "word": "旅行中",
        "kana": "りょこうちゅう",
        "meaning": "selama perjalanan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 270
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 149,
        "word": "旅行",
        "kana": "りょこう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 149,
        "word": "旅行",
        "kana": "りょこう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 270,
        "word": "旅行中",
        "kana": "りょこうちゅう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 149,
        "word": "旅行",
        "kana": "りょこう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 270,
        "word": "旅行中",
        "kana": "りょこうちゅう"
      }
    ]
  },
  {
    "id": "kanji-6a5f",
    "char": "機",
    "category": "places",
    "meaning": "mesin; kesempatan",
    "on": [
      "キ"
    ],
    "kun": [
      "はた"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 127,
    "examples": [
      {
        "word": "機能",
        "kana": "きのう",
        "meaning": "fungsi; fitur",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 327
      },
      {
        "word": "飛行機",
        "kana": "ひこうき",
        "meaning": "pesawat terbang",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 465
      },
      {
        "word": "〜機",
        "kana": "き",
        "meaning": "satuan untuk pesawat atau mesin",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 319
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 319,
        "word": "〜機（そうじ機）",
        "kana": "〜き"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 327,
        "word": "機能",
        "kana": "きのう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 319,
        "word": "〜機（そうじ機）",
        "kana": "〜き"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 327,
        "word": "機能",
        "kana": "きのう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 465,
        "word": "飛行機",
        "kana": "ひこうき"
      }
    ]
  },
  {
    "id": "kanji-6b69",
    "char": "歩",
    "category": "places",
    "meaning": "berjalan",
    "on": [
      "ホ",
      "ブ",
      "フ"
    ],
    "kun": [
      "ある.く",
      "あゆ.む"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 128,
    "examples": [
      {
        "word": "歩きます",
        "kana": "あるきます",
        "meaning": "berjalan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 202
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 202,
        "word": "歩きます",
        "kana": "あるきます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 202,
        "word": "歩きます",
        "kana": "あるきます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 202,
        "word": "歩きます",
        "kana": "あるきます"
      }
    ]
  },
  {
    "id": "kanji-753a",
    "char": "町",
    "category": "places",
    "meaning": "kota kecil; lingkungan",
    "on": [
      "チョウ"
    ],
    "kun": [
      "まち"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 129,
    "examples": [
      {
        "word": "町",
        "kana": "まち",
        "meaning": "kota kecil; lingkungan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 105
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 105,
        "word": "町",
        "kana": "まち"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 105,
        "word": "町",
        "kana": "まち"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 105,
        "word": "町",
        "kana": "まち"
      }
    ]
  },
  {
    "id": "kanji-754c",
    "char": "界",
    "category": "places",
    "meaning": "dunia; batas",
    "on": [
      "カイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 130,
    "examples": [
      {
        "word": "世界",
        "kana": "せかい",
        "meaning": "dunia",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 342
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 342,
        "word": "世界",
        "kana": "せかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 342,
        "word": "世界",
        "kana": "せかい"
      }
    ]
  },
  {
    "id": "kanji-7559",
    "char": "留",
    "category": "places",
    "meaning": "tinggal; menahan",
    "on": [
      "リュウ",
      "ル"
    ],
    "kun": [
      "と.める",
      "と.まる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 131,
    "examples": [
      {
        "word": "留学",
        "kana": "りゅうがく",
        "meaning": "belajar di luar negeri",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 150
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 150,
        "word": "留学",
        "kana": "りゅうがく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 150,
        "word": "留学",
        "kana": "りゅうがく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 150,
        "word": "留学",
        "kana": "りゅうがく"
      }
    ]
  },
  {
    "id": "kanji-767a",
    "char": "発",
    "category": "places",
    "meaning": "berangkat; mengeluarkan",
    "on": [
      "ハツ",
      "ホツ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 132,
    "examples": [
      {
        "word": "出発",
        "kana": "しゅっぱつ",
        "meaning": "keberangkatan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 174
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 174,
        "word": "出発",
        "kana": "しゅっぱつ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 174,
        "word": "出発",
        "kana": "しゅっぱつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 174,
        "word": "出発",
        "kana": "しゅっぱつ"
      }
    ]
  },
  {
    "id": "kanji-822a",
    "char": "航",
    "category": "places",
    "meaning": "berlayar; penerbangan",
    "on": [
      "コウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 133,
    "examples": [
      {
        "word": "～航空",
        "kana": "こうくう",
        "meaning": "penerbangan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 471
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 471,
        "word": "～航空（JF航空）",
        "kana": "～こうくう（JFこうくう）"
      }
    ]
  },
  {
    "id": "kanji-8239",
    "char": "船",
    "category": "places",
    "meaning": "kapal",
    "on": [
      "セン"
    ],
    "kun": [
      "ふね",
      "ふな"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 134,
    "examples": [
      {
        "word": "船",
        "kana": "ふね",
        "meaning": "kapal",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 264
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 264,
        "word": "船",
        "kana": "ふね"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 264,
        "word": "船",
        "kana": "ふね"
      }
    ]
  },
  {
    "id": "kanji-8ee2",
    "char": "転",
    "category": "places",
    "meaning": "berputar; berganti",
    "on": [
      "テン"
    ],
    "kun": [
      "ころ.ぶ",
      "ころ.がる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 135,
    "examples": [
      {
        "word": "自転車",
        "kana": "じてんしゃ",
        "meaning": "sepeda",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 365
      },
      {
        "word": "運転します",
        "kana": "うんてんします",
        "meaning": "mengemudikan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 268
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 268,
        "word": "運転します",
        "kana": "うんてんします"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 365,
        "word": "自転車",
        "kana": "じてんしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 268,
        "word": "運転します",
        "kana": "うんてんします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 365,
        "word": "自転車",
        "kana": "じてんしゃ"
      }
    ]
  },
  {
    "id": "kanji-8f38",
    "char": "輸",
    "category": "places",
    "meaning": "mengangkut; ekspor-impor",
    "on": [
      "ユ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 136,
    "examples": [
      {
        "word": "輸出",
        "kana": "ゆしゅつ",
        "meaning": "ekspor",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 479
      },
      {
        "word": "輸入",
        "kana": "ゆにゅう",
        "meaning": "impor",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 480
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 479,
        "word": "輸出",
        "kana": "ゆしゅつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 480,
        "word": "輸入",
        "kana": "ゆにゅう"
      }
    ]
  },
  {
    "id": "kanji-8fd4",
    "char": "返",
    "category": "places",
    "meaning": "mengembalikan",
    "on": [
      "ヘン"
    ],
    "kun": [
      "かえ.す",
      "かえ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 137,
    "examples": [
      {
        "word": "返します",
        "kana": "かえします",
        "meaning": "mengembalikan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 369
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 369,
        "word": "返します",
        "kana": "かえします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 369,
        "word": "返します",
        "kana": "かえします"
      }
    ]
  },
  {
    "id": "kanji-9001",
    "char": "送",
    "category": "places",
    "meaning": "mengirim; mengantar",
    "on": [
      "ソウ"
    ],
    "kun": [
      "おく.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 138,
    "examples": [
      {
        "word": "送ります",
        "kana": "おくります",
        "meaning": "mengirim; mengantar",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 183
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 183,
        "word": "送ります",
        "kana": "おくります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 183,
        "word": "送ります",
        "kana": "おくります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 183,
        "word": "送ります",
        "kana": "おくります"
      }
    ]
  },
  {
    "id": "kanji-901a",
    "char": "通",
    "category": "places",
    "meaning": "melewati; berkomunikasi",
    "on": [
      "ツウ",
      "ツ"
    ],
    "kun": [
      "とお.る",
      "かよ.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 139,
    "examples": [
      {
        "word": "通り",
        "kana": "とおり",
        "meaning": "jalan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 114
      },
      {
        "word": "交通",
        "kana": "こうつう",
        "meaning": "lalu lintas; transportasi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 403
      },
      {
        "word": "通勤",
        "kana": "つうきん",
        "meaning": "perjalanan ke tempat kerja",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 404
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 114,
        "word": "通り",
        "kana": "とおり"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 114,
        "word": "通り",
        "kana": "とおり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 114,
        "word": "通り",
        "kana": "とおり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 403,
        "word": "交通",
        "kana": "こうつう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 404,
        "word": "通勤",
        "kana": "つうきん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 437,
        "word": "通じる",
        "kana": "つうじる"
      }
    ]
  },
  {
    "id": "kanji-9023",
    "char": "連",
    "category": "places",
    "meaning": "menghubungkan; membawa serta",
    "on": [
      "レン"
    ],
    "kun": [
      "つ.れる",
      "つら.なる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 140,
    "examples": [
      {
        "word": "連絡",
        "kana": "れんらく",
        "meaning": "menghubungi; kabar",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 477
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 477,
        "word": "連絡",
        "kana": "れんらく"
      }
    ]
  },
  {
    "id": "kanji-904b",
    "char": "運",
    "category": "places",
    "meaning": "membawa; keberuntungan",
    "on": [
      "ウン"
    ],
    "kun": [
      "はこ.ぶ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 141,
    "examples": [
      {
        "word": "運転します",
        "kana": "うんてんします",
        "meaning": "mengemudikan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 268
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 268,
        "word": "運転します",
        "kana": "うんてんします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 268,
        "word": "運転します",
        "kana": "うんてんします"
      }
    ]
  },
  {
    "id": "kanji-90e8",
    "char": "部",
    "category": "places",
    "meaning": "bagian; departemen",
    "on": [
      "ブ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 142,
    "examples": [
      {
        "word": "全部",
        "kana": "ぜんぶ",
        "meaning": "semuanya",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 254
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 254,
        "word": "全部",
        "kana": "ぜんぶ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 254,
        "word": "全部",
        "kana": "ぜんぶ"
      }
    ]
  },
  {
    "id": "kanji-90fd",
    "char": "都",
    "category": "places",
    "meaning": "ibu kota; metropolitan",
    "on": [
      "ト",
      "ツ"
    ],
    "kun": [
      "みやこ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 143,
    "examples": [
      {
        "word": "京都",
        "kana": "きょうと",
        "meaning": "Kyoto",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 337
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 337,
        "word": "京都",
        "kana": "きょうと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 337,
        "word": "京都",
        "kana": "きょうと"
      }
    ]
  },
  {
    "id": "kanji-9662",
    "char": "院",
    "category": "places",
    "meaning": "lembaga; gedung",
    "on": [
      "イン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 144,
    "examples": [
      {
        "word": "病院",
        "kana": "びょういん",
        "meaning": "rumah sakit",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 402
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 402,
        "word": "病院",
        "kana": "びょういん"
      }
    ]
  },
  {
    "id": "kanji-968e",
    "char": "階",
    "category": "places",
    "meaning": "lantai; jenjang",
    "on": [
      "カイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 145,
    "examples": [
      {
        "word": "〜階",
        "kana": "かい",
        "meaning": "lantai; tingkat",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 354
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 354,
        "word": "〜階（２階）",
        "kana": "〜かい（にかい）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 354,
        "word": "〜階（2階）",
        "kana": "〜かい（にかい）"
      }
    ]
  },
  {
    "id": "kanji-98db",
    "char": "飛",
    "category": "places",
    "meaning": "terbang",
    "on": [
      "ヒ"
    ],
    "kun": [
      "と.ぶ",
      "と.ばす"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 146,
    "examples": [
      {
        "word": "飛行機",
        "kana": "ひこうき",
        "meaning": "pesawat terbang",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 465
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 465,
        "word": "飛行機",
        "kana": "ひこうき"
      }
    ]
  },
  {
    "id": "kanji-9928",
    "char": "館",
    "category": "places",
    "meaning": "gedung; tempat umum",
    "on": [
      "カン"
    ],
    "kun": [
      "やかた"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 147,
    "examples": [
      {
        "word": "博物館",
        "kana": "はくぶつかん",
        "meaning": "museum",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 352
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 352,
        "word": "博物館",
        "kana": "はくぶつかん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 352,
        "word": "博物館",
        "kana": "はくぶつかん"
      }
    ]
  },
  {
    "id": "kanji-4e0d",
    "char": "不",
    "category": "qualities",
    "meaning": "tidak; bukan",
    "on": [
      "フ",
      "ブ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 148,
    "examples": [
      {
        "word": "不便",
        "kana": "ふべん",
        "meaning": "tidak praktis",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 389
      },
      {
        "word": "不安",
        "kana": "ふあん",
        "meaning": "cemas",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 462
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 389,
        "word": "不便",
        "kana": "ふべん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 389,
        "word": "不便",
        "kana": "ふべん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 462,
        "word": "不安",
        "kana": "ふあん"
      }
    ]
  },
  {
    "id": "kanji-4f4e",
    "char": "低",
    "category": "qualities",
    "meaning": "rendah",
    "on": [
      "テイ"
    ],
    "kun": [
      "ひく.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 149,
    "examples": [
      {
        "word": "低い",
        "kana": "ひくい",
        "meaning": "pendek; rendah",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 239
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 239,
        "word": "低い",
        "kana": "ひくい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 239,
        "word": "低い",
        "kana": "ひくい"
      }
    ]
  },
  {
    "id": "kanji-5168",
    "char": "全",
    "category": "qualities",
    "meaning": "seluruh",
    "on": [
      "ゼン"
    ],
    "kun": [
      "すべ.て",
      "まった.く"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 150,
    "examples": [
      {
        "word": "全部",
        "kana": "ぜんぶ",
        "meaning": "semuanya",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 254
      },
      {
        "word": "安全",
        "kana": "あんぜん",
        "meaning": "aman",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 405
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 254,
        "word": "全部",
        "kana": "ぜんぶ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 254,
        "word": "全部",
        "kana": "ぜんぶ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 405,
        "word": "安全",
        "kana": "あんぜん"
      }
    ]
  },
  {
    "id": "kanji-51b7",
    "char": "冷",
    "category": "qualities",
    "meaning": "dingin; mendinginkan",
    "on": [
      "レイ"
    ],
    "kun": [
      "つめ.たい",
      "ひ.える",
      "さ.める"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 151,
    "examples": [
      {
        "word": "冷たい",
        "kana": "つめたい",
        "meaning": "dingin",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 251
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 251,
        "word": "冷たい",
        "kana": "つめたい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 251,
        "word": "冷たい",
        "kana": "つめたい"
      }
    ]
  },
  {
    "id": "kanji-5225",
    "char": "別",
    "category": "qualities",
    "meaning": "berbeda; berpisah",
    "on": [
      "ベツ"
    ],
    "kun": [
      "わか.れる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 152,
    "examples": [
      {
        "word": "特別",
        "kana": "とくべつ",
        "meaning": "khusus; spesial",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 304
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 304,
        "word": "特別",
        "kana": "とくべつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 304,
        "word": "特別",
        "kana": "とくべつ"
      }
    ]
  },
  {
    "id": "kanji-5371",
    "char": "危",
    "category": "qualities",
    "meaning": "berbahaya",
    "on": [
      "キ"
    ],
    "kun": [
      "あぶ.ない",
      "あや.うい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 153,
    "examples": [
      {
        "word": "危ない",
        "kana": "あぶない",
        "meaning": "berbahaya",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 406
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 406,
        "word": "危ない",
        "kana": "あぶない"
      }
    ]
  },
  {
    "id": "kanji-540c",
    "char": "同",
    "category": "qualities",
    "meaning": "sama",
    "on": [
      "ドウ"
    ],
    "kun": [
      "おな.じ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 154,
    "examples": [
      {
        "word": "同じ",
        "kana": "おなじ",
        "meaning": "sama",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 285
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 285,
        "word": "同じ",
        "kana": "おなじ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 285,
        "word": "同じ",
        "kana": "おなじ"
      }
    ]
  },
  {
    "id": "kanji-5909",
    "char": "変",
    "category": "qualities",
    "meaning": "berubah; aneh",
    "on": [
      "ヘン"
    ],
    "kun": [
      "か.わる",
      "か.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 155,
    "examples": [
      {
        "word": "変更",
        "kana": "へんこう",
        "meaning": "perubahan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 466
      },
      {
        "word": "変わります",
        "kana": "かわります",
        "meaning": "berubah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 370
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 370,
        "word": "変わります",
        "kana": "かわります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 370,
        "word": "変わります",
        "kana": "かわります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 466,
        "word": "変更",
        "kana": "へんこう"
      }
    ]
  },
  {
    "id": "kanji-5e78",
    "char": "幸",
    "category": "qualities",
    "meaning": "bahagia; keberuntungan",
    "on": [
      "コウ"
    ],
    "kun": [
      "しあわ.せ",
      "さいわ.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 156,
    "examples": [
      {
        "word": "幸せ",
        "kana": "しあわせ",
        "meaning": "bahagia",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 307
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 307,
        "word": "幸せ",
        "kana": "しあわせ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 307,
        "word": "幸せ",
        "kana": "しあわせ"
      }
    ]
  },
  {
    "id": "kanji-5e83",
    "char": "広",
    "category": "qualities",
    "meaning": "luas",
    "on": [
      "コウ"
    ],
    "kun": [
      "ひろ.い",
      "ひろ.がる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 157,
    "examples": [
      {
        "word": "広い",
        "kana": "ひろい",
        "meaning": "luas; lebar",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 112
      },
      {
        "word": "広場",
        "kana": "ひろば",
        "meaning": "lapangan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 283
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 112,
        "word": "広い",
        "kana": "ひろい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 112,
        "word": "広い",
        "kana": "ひろい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 283,
        "word": "広場",
        "kana": "ひろば"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 112,
        "word": "広い",
        "kana": "ひろい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 283,
        "word": "広場",
        "kana": "ひろば"
      }
    ]
  },
  {
    "id": "kanji-5f31",
    "char": "弱",
    "category": "qualities",
    "meaning": "lemah",
    "on": [
      "ジャク"
    ],
    "kun": [
      "よわ.い",
      "よわ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 158,
    "examples": [
      {
        "word": "弱い",
        "kana": "よわい",
        "meaning": "lemah",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 396
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 396,
        "word": "弱い",
        "kana": "よわい"
      }
    ]
  },
  {
    "id": "kanji-5f37",
    "char": "強",
    "category": "qualities",
    "meaning": "kuat",
    "on": [
      "キョウ",
      "ゴウ"
    ],
    "kun": [
      "つよ.い",
      "つよ.める"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 159,
    "examples": [
      {
        "word": "勉強",
        "kana": "べんきょう",
        "meaning": "belajar",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 146
      },
      {
        "word": "強い",
        "kana": "つよい",
        "meaning": "kuat",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 395
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 146,
        "word": "勉強",
        "kana": "べんきょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 146,
        "word": "勉強",
        "kana": "べんきょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 146,
        "word": "勉強",
        "kana": "べんきょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 395,
        "word": "強い",
        "kana": "つよい"
      }
    ]
  },
  {
    "id": "kanji-5fc5",
    "char": "必",
    "category": "qualities",
    "meaning": "pasti; harus",
    "on": [
      "ヒツ"
    ],
    "kun": [
      "かなら.ず"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 160,
    "examples": [
      {
        "word": "必要",
        "kana": "ひつよう",
        "meaning": "perlu",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 353
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 353,
        "word": "必要",
        "kana": "ひつよう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 353,
        "word": "必要",
        "kana": "ひつよう"
      }
    ]
  },
  {
    "id": "kanji-5fd9",
    "char": "忙",
    "category": "qualities",
    "meaning": "sibuk",
    "on": [
      "ボウ"
    ],
    "kun": [
      "いそが.しい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 161,
    "examples": [
      {
        "word": "忙しい",
        "kana": "いそがしい",
        "meaning": "sibuk",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 303
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 303,
        "word": "忙しい",
        "kana": "いそがしい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 303,
        "word": "忙しい",
        "kana": "いそがしい"
      }
    ]
  },
  {
    "id": "kanji-6025",
    "char": "急",
    "category": "qualities",
    "meaning": "mendesak; bergegas",
    "on": [
      "キュウ"
    ],
    "kun": [
      "いそ.ぐ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 162,
    "examples": [
      {
        "word": "急ぎます",
        "kana": "いそぎます",
        "meaning": "terburu-buru; tergesa-gesa",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 296
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 296,
        "word": "急ぎます",
        "kana": "いそぎます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 296,
        "word": "急ぎます",
        "kana": "いそぎます"
      }
    ]
  },
  {
    "id": "kanji-6027",
    "char": "性",
    "category": "qualities",
    "meaning": "sifat; jenis kelamin",
    "on": [
      "セイ",
      "ショウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 163,
    "examples": [
      {
        "word": "女性",
        "kana": "じょせい",
        "meaning": "perempuan; wanita",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 272
      },
      {
        "word": "男性",
        "kana": "だんせい",
        "meaning": "pria",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 273
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 272,
        "word": "女性",
        "kana": "じょせい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 273,
        "word": "男性",
        "kana": "だんせい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 272,
        "word": "女性",
        "kana": "じょせい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 273,
        "word": "男性",
        "kana": "だんせい"
      }
    ]
  },
  {
    "id": "kanji-60aa",
    "char": "悪",
    "category": "qualities",
    "meaning": "buruk; jahat",
    "on": [
      "アク",
      "オ"
    ],
    "kun": [
      "わる.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 164,
    "examples": [
      {
        "word": "悪い",
        "kana": "わるい",
        "meaning": "buruk",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 322
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 322,
        "word": "悪い",
        "kana": "わるい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 322,
        "word": "悪い",
        "kana": "わるい"
      }
    ]
  },
  {
    "id": "kanji-610f",
    "char": "意",
    "category": "qualities",
    "meaning": "maksud; pikiran",
    "on": [
      "イ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 165,
    "examples": [
      {
        "word": "意味",
        "kana": "いみ",
        "meaning": "arti",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 224
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 224,
        "word": "意味",
        "kana": "いみ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 224,
        "word": "意味",
        "kana": "いみ"
      }
    ]
  },
  {
    "id": "kanji-6210",
    "char": "成",
    "category": "qualities",
    "meaning": "menjadi; tercapai",
    "on": [
      "セイ",
      "ジョウ"
    ],
    "kun": [
      "な.る",
      "な.す"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 166,
    "examples": [
      {
        "word": "成長",
        "kana": "せいちょう",
        "meaning": "pertumbuhan; perkembangan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 308
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 308,
        "word": "成長",
        "kana": "せいちょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 308,
        "word": "成長",
        "kana": "せいちょう"
      }
    ]
  },
  {
    "id": "kanji-660e",
    "char": "明",
    "category": "qualities",
    "meaning": "terang; jelas",
    "on": [
      "メイ",
      "ミョウ"
    ],
    "kun": [
      "あか.るい",
      "あ.ける"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 167,
    "examples": [
      {
        "word": "説明",
        "kana": "せつめい",
        "meaning": "penjelasan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 350
      },
      {
        "word": "明るい",
        "kana": "あかるい",
        "meaning": "terang; ceria",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 278
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 278,
        "word": "明るい",
        "kana": "あかるい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 350,
        "word": "説明",
        "kana": "せつめい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 278,
        "word": "明るい",
        "kana": "あかるい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 350,
        "word": "説明",
        "kana": "せつめい"
      }
    ]
  },
  {
    "id": "kanji-66f4",
    "char": "更",
    "category": "qualities",
    "meaning": "memperbarui; makin",
    "on": [
      "コウ"
    ],
    "kun": [
      "さら",
      "ふ.ける"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 168,
    "examples": [
      {
        "word": "変更",
        "kana": "へんこう",
        "meaning": "perubahan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 466
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 466,
        "word": "変更",
        "kana": "へんこう"
      }
    ]
  },
  {
    "id": "kanji-6709",
    "char": "有",
    "category": "qualities",
    "meaning": "ada; memiliki",
    "on": [
      "ユウ",
      "ウ"
    ],
    "kun": [
      "あ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 169,
    "examples": [
      {
        "word": "有名",
        "kana": "ゆうめい",
        "meaning": "terkenal",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 249
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 249,
        "word": "有名",
        "kana": "ゆうめい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 249,
        "word": "有名",
        "kana": "ゆうめい"
      }
    ]
  },
  {
    "id": "kanji-683c",
    "char": "格",
    "category": "qualities",
    "meaning": "standar; kualifikasi",
    "on": [
      "カク",
      "コウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 170,
    "examples": [
      {
        "word": "合格",
        "kana": "ごうかく",
        "meaning": "lulus",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 311
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 311,
        "word": "合格",
        "kana": "ごうかく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 311,
        "word": "合格",
        "kana": "ごうかく"
      }
    ]
  },
  {
    "id": "kanji-697d",
    "char": "楽",
    "category": "qualities",
    "meaning": "menyenangkan; nyaman; musik",
    "on": [
      "ガク",
      "ラク"
    ],
    "kun": [
      "たの.しい",
      "たの.しむ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 171,
    "examples": [
      {
        "word": "音楽",
        "kana": "おんがく",
        "meaning": "musik",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 148
      },
      {
        "word": "楽しい",
        "kana": "たのしい",
        "meaning": "menyenangkan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 152
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 148,
        "word": "音楽",
        "kana": "おんがく"
      },
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 152,
        "word": "楽しい",
        "kana": "たのしい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 148,
        "word": "音楽",
        "kana": "おんがく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 152,
        "word": "楽しい",
        "kana": "たのしい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 148,
        "word": "音楽",
        "kana": "おんがく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 152,
        "word": "楽しい",
        "kana": "たのしい"
      }
    ]
  },
  {
    "id": "kanji-6b63",
    "char": "正",
    "category": "qualities",
    "meaning": "benar",
    "on": [
      "セイ",
      "ショウ"
    ],
    "kun": [
      "ただ.しい",
      "まさ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 172,
    "examples": [
      {
        "word": "正月",
        "kana": "しょうがつ",
        "meaning": "Tahun Baru",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 299
      },
      {
        "word": "正しい",
        "kana": "ただしい",
        "meaning": "benar",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 486
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 299,
        "word": "正月",
        "kana": "しょうがつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 299,
        "word": "正月",
        "kana": "しょうがつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 486,
        "word": "正しい",
        "kana": "ただしい"
      }
    ]
  },
  {
    "id": "kanji-6e80",
    "char": "満",
    "category": "qualities",
    "meaning": "penuh; puas",
    "on": [
      "マン"
    ],
    "kun": [
      "み.ちる",
      "み.たす"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 173,
    "examples": [
      {
        "word": "満足します",
        "kana": "まんぞくします",
        "meaning": "puas",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 336
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 336,
        "word": "満足します",
        "kana": "まんぞくします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 336,
        "word": "満足します",
        "kana": "まんぞくします"
      }
    ]
  },
  {
    "id": "kanji-7121",
    "char": "無",
    "category": "qualities",
    "meaning": "tidak ada",
    "on": [
      "ム",
      "ブ"
    ],
    "kun": [
      "な.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 174,
    "examples": [
      {
        "word": "無料",
        "kana": "むりょう",
        "meaning": "gratis; bebas biaya",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 277
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 277,
        "word": "無料",
        "kana": "むりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 277,
        "word": "無料",
        "kana": "むりょう"
      }
    ]
  },
  {
    "id": "kanji-7279",
    "char": "特",
    "category": "qualities",
    "meaning": "khusus",
    "on": [
      "トク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 175,
    "examples": [
      {
        "word": "特別",
        "kana": "とくべつ",
        "meaning": "khusus; spesial",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 304
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 304,
        "word": "特別",
        "kana": "とくべつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 304,
        "word": "特別",
        "kana": "とくべつ"
      }
    ]
  },
  {
    "id": "kanji-73fe",
    "char": "現",
    "category": "qualities",
    "meaning": "muncul; nyata",
    "on": [
      "ゲン"
    ],
    "kun": [
      "あらわ.れる",
      "あらわ.す"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 176,
    "examples": [
      {
        "word": "表現",
        "kana": "ひょうげん",
        "meaning": "ungkapan; ekspresi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 488
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 488,
        "word": "表現",
        "kana": "ひょうげん"
      }
    ]
  },
  {
    "id": "kanji-7406",
    "char": "理",
    "category": "qualities",
    "meaning": "alasan; prinsip",
    "on": [
      "リ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 177,
    "examples": [
      {
        "word": "料理",
        "kana": "りょうり",
        "meaning": "masakan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 162
      },
      {
        "word": "家庭料理",
        "kana": "かていりょうり",
        "meaning": "masakan rumahan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 414
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 162,
        "word": "料理",
        "kana": "りょうり"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 162,
        "word": "料理",
        "kana": "りょうり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 162,
        "word": "料理",
        "kana": "りょうり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 414,
        "word": "家庭料理",
        "kana": "かていりょうり"
      }
    ]
  },
  {
    "id": "kanji-7684",
    "char": "的",
    "category": "qualities",
    "meaning": "sasaran; bersifat",
    "on": [
      "テキ"
    ],
    "kun": [
      "まと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 178,
    "examples": [
      {
        "word": "目的",
        "kana": "もくてき",
        "meaning": "tujuan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 435
      },
      {
        "word": "日本的",
        "kana": "にほんてき",
        "meaning": "bergaya Jepang",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 346
      },
      {
        "word": "歴史的",
        "kana": "れきしてき",
        "meaning": "bersejarah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 347
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 345,
        "word": "〜的",
        "kana": "〜てき"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 346,
        "word": "日本的",
        "kana": "にほんてき"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 347,
        "word": "歴史的",
        "kana": "れきしてき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 345,
        "word": "〜的",
        "kana": "〜てき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 346,
        "word": "日本的",
        "kana": "にほんてき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 347,
        "word": "歴史的",
        "kana": "れきしてき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 435,
        "word": "目的",
        "kana": "もくてき"
      }
    ]
  },
  {
    "id": "kanji-7701",
    "char": "省",
    "category": "qualities",
    "meaning": "menghemat; meninjau",
    "on": [
      "ショウ",
      "セイ"
    ],
    "kun": [
      "はぶ.く",
      "かえり.みる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 179,
    "examples": [
      {
        "word": "省エネ",
        "kana": "しょうエネ",
        "meaning": "hemat energi",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 328
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 328,
        "word": "省エネ",
        "kana": "しょうエネ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 328,
        "word": "省エネ",
        "kana": "しょうエネ"
      }
    ]
  },
  {
    "id": "kanji-771f",
    "char": "真",
    "category": "qualities",
    "meaning": "benar; asli",
    "on": [
      "シン"
    ],
    "kun": [
      "ま"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 180,
    "examples": [
      {
        "word": "写真",
        "kana": "しゃしん",
        "meaning": "foto",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 209
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 209,
        "word": "写真",
        "kana": "しゃしん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 209,
        "word": "写真",
        "kana": "しゃしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 209,
        "word": "写真",
        "kana": "しゃしん"
      }
    ]
  },
  {
    "id": "kanji-77ed",
    "char": "短",
    "category": "qualities",
    "meaning": "pendek",
    "on": [
      "タン"
    ],
    "kun": [
      "みじか.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 181,
    "examples": [
      {
        "word": "短い",
        "kana": "みじかい",
        "meaning": "pendek",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 238
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 238,
        "word": "短い",
        "kana": "みじかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 238,
        "word": "短い",
        "kana": "みじかい"
      }
    ]
  },
  {
    "id": "kanji-80fd",
    "char": "能",
    "category": "qualities",
    "meaning": "kemampuan",
    "on": [
      "ノウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 182,
    "examples": [
      {
        "word": "機能",
        "kana": "きのう",
        "meaning": "fungsi; fitur",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 327
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 327,
        "word": "機能",
        "kana": "きのう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 327,
        "word": "機能",
        "kana": "きのう"
      }
    ]
  },
  {
    "id": "kanji-8272",
    "char": "色",
    "category": "qualities",
    "meaning": "warna",
    "on": [
      "ショク",
      "シキ"
    ],
    "kun": [
      "いろ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 183,
    "examples": [
      {
        "word": "色",
        "kana": "いろ",
        "meaning": "warna",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 164
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 164,
        "word": "色",
        "kana": "いろ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 164,
        "word": "色",
        "kana": "いろ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 164,
        "word": "色",
        "kana": "いろ"
      }
    ]
  },
  {
    "id": "kanji-82e5",
    "char": "若",
    "category": "qualities",
    "meaning": "muda",
    "on": [
      "ジャク"
    ],
    "kun": [
      "わか.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 184,
    "examples": [
      {
        "word": "若い",
        "kana": "わかい",
        "meaning": "muda",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 381
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 381,
        "word": "若い",
        "kana": "わかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 381,
        "word": "若い",
        "kana": "わかい"
      }
    ]
  },
  {
    "id": "kanji-82e6",
    "char": "苦",
    "category": "qualities",
    "meaning": "pahit; menderita",
    "on": [
      "ク"
    ],
    "kun": [
      "にが.い",
      "くる.しい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 185,
    "examples": [
      {
        "word": "苦手",
        "kana": "にがて",
        "meaning": "tidak begitu suka; tidak pandai; lemah",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 258
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 258,
        "word": "苦手",
        "kana": "にがて"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 258,
        "word": "苦手",
        "kana": "にがて"
      }
    ]
  },
  {
    "id": "kanji-8981",
    "char": "要",
    "category": "qualities",
    "meaning": "perlu; inti",
    "on": [
      "ヨウ"
    ],
    "kun": [
      "い.る",
      "かなめ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 186,
    "examples": [
      {
        "word": "必要",
        "kana": "ひつよう",
        "meaning": "perlu",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 353
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 353,
        "word": "必要",
        "kana": "ひつよう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 353,
        "word": "必要",
        "kana": "ひつよう"
      }
    ]
  },
  {
    "id": "kanji-91cd",
    "char": "重",
    "category": "qualities",
    "meaning": "berat; bertumpuk",
    "on": [
      "ジュウ",
      "チョウ"
    ],
    "kun": [
      "おも.い",
      "かさ.なる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 187,
    "examples": [
      {
        "word": "重い",
        "kana": "おもい",
        "meaning": "berat",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 330
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 330,
        "word": "重い",
        "kana": "おもい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 330,
        "word": "重い",
        "kana": "おもい"
      }
    ]
  },
  {
    "id": "kanji-8efd",
    "char": "軽",
    "category": "qualities",
    "meaning": "ringan",
    "on": [
      "ケイ"
    ],
    "kun": [
      "かる.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 188,
    "examples": [
      {
        "word": "軽い",
        "kana": "かるい",
        "meaning": "ringan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 331
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 331,
        "word": "軽い",
        "kana": "かるい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 331,
        "word": "軽い",
        "kana": "かるい"
      }
    ]
  },
  {
    "id": "kanji-96e3",
    "char": "難",
    "category": "qualities",
    "meaning": "sulit",
    "on": [
      "ナン"
    ],
    "kun": [
      "むずか.しい"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 189,
    "examples": [
      {
        "word": "難しい",
        "kana": "むずかしい",
        "meaning": "sulit; susah",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 436
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 436,
        "word": "難しい",
        "kana": "むずかしい"
      }
    ]
  },
  {
    "id": "kanji-9752",
    "char": "青",
    "category": "qualities",
    "meaning": "biru; hijau (pemakaian tertentu)",
    "on": [
      "セイ",
      "ショウ"
    ],
    "kun": [
      "あお",
      "あお.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 190,
    "examples": [
      {
        "word": "青い",
        "kana": "あおい",
        "meaning": "biru",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 120
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 120,
        "word": "青い",
        "kana": "あおい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 120,
        "word": "青い",
        "kana": "あおい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 120,
        "word": "青い",
        "kana": "あおい"
      }
    ]
  },
  {
    "id": "kanji-9759",
    "char": "静",
    "category": "qualities",
    "meaning": "tenang",
    "on": [
      "セイ",
      "ジョウ"
    ],
    "kun": [
      "しず.か",
      "しず.まる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 191,
    "examples": [
      {
        "word": "静か",
        "kana": "しずか",
        "meaning": "tenang",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 332
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 332,
        "word": "静か",
        "kana": "しずか"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 332,
        "word": "静か",
        "kana": "しずか"
      }
    ]
  },
  {
    "id": "kanji-8d64",
    "char": "赤",
    "category": "qualities",
    "meaning": "merah",
    "on": [
      "セキ",
      "シャク"
    ],
    "kun": [
      "あか",
      "あか.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 192,
    "examples": [
      {
        "word": "赤い",
        "kana": "あかい",
        "meaning": "merah",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 119
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 119,
        "word": "赤い",
        "kana": "あかい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 119,
        "word": "赤い",
        "kana": "あかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 119,
        "word": "赤い",
        "kana": "あかい"
      }
    ]
  },
  {
    "id": "kanji-9ed2",
    "char": "黒",
    "category": "qualities",
    "meaning": "hitam",
    "on": [
      "コク"
    ],
    "kun": [
      "くろ",
      "くろ.い"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 193,
    "examples": [
      {
        "word": "黒い",
        "kana": "くろい",
        "meaning": "hitam",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 121
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 121,
        "word": "黒い",
        "kana": "くろい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 121,
        "word": "黒い",
        "kana": "くろい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 121,
        "word": "黒い",
        "kana": "くろい"
      }
    ]
  },
  {
    "id": "kanji-4f5c",
    "char": "作",
    "category": "actions",
    "meaning": "membuat",
    "on": [
      "サク",
      "サ"
    ],
    "kun": [
      "つく.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 194,
    "examples": [
      {
        "word": "作家",
        "kana": "さっか",
        "meaning": "penulis",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 377
      },
      {
        "word": "作ります",
        "kana": "つくります",
        "meaning": "membuat",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 159
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 159,
        "word": "作ります",
        "kana": "つくります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 159,
        "word": "作ります",
        "kana": "つくります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 377,
        "word": "作家",
        "kana": "さっか"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 159,
        "word": "作ります",
        "kana": "つくります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 377,
        "word": "作家",
        "kana": "さっか"
      }
    ]
  },
  {
    "id": "kanji-4f7f",
    "char": "使",
    "category": "actions",
    "meaning": "menggunakan",
    "on": [
      "シ"
    ],
    "kun": [
      "つか.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 195,
    "examples": [
      {
        "word": "使います",
        "kana": "つかいます",
        "meaning": "menggunakan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 184
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 184,
        "word": "使います",
        "kana": "つかいます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 184,
        "word": "使います",
        "kana": "つかいます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 184,
        "word": "使います",
        "kana": "つかいます"
      }
    ]
  },
  {
    "id": "kanji-4ed8",
    "char": "付",
    "category": "actions",
    "meaning": "menempel; melekat",
    "on": [
      "フ"
    ],
    "kun": [
      "つ.く",
      "つ.ける"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 196,
    "examples": [
      {
        "word": "受付",
        "kana": "うけつけ",
        "meaning": "resepsionis; meja informasi",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 282
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 282,
        "word": "受付",
        "kana": "うけつけ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 282,
        "word": "受付",
        "kana": "うけつけ"
      }
    ]
  },
  {
    "id": "kanji-5207",
    "char": "切",
    "category": "actions",
    "meaning": "memotong",
    "on": [
      "セツ"
    ],
    "kun": [
      "き.る",
      "き.れる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 197,
    "examples": [
      {
        "word": "親切",
        "kana": "しんせつ",
        "meaning": "baik hati; ramah",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 427
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 427,
        "word": "親切",
        "kana": "しんせつ"
      }
    ]
  },
  {
    "id": "kanji-5230",
    "char": "到",
    "category": "actions",
    "meaning": "tiba; mencapai",
    "on": [
      "トウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 198,
    "examples": [
      {
        "word": "到着",
        "kana": "とうちゃく",
        "meaning": "kedatangan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 175
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 175,
        "word": "到着",
        "kana": "とうちゃく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 175,
        "word": "到着",
        "kana": "とうちゃく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 175,
        "word": "到着",
        "kana": "とうちゃく"
      }
    ]
  },
  {
    "id": "kanji-52a0",
    "char": "加",
    "category": "actions",
    "meaning": "menambah",
    "on": [
      "カ"
    ],
    "kun": [
      "くわ.える",
      "くわ.わる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 199,
    "examples": [
      {
        "word": "参加者",
        "kana": "さんかしゃ",
        "meaning": "peserta",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 295
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 295,
        "word": "参加者",
        "kana": "さんかしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 295,
        "word": "参加者",
        "kana": "さんかしゃ"
      }
    ]
  },
  {
    "id": "kanji-52a9",
    "char": "助",
    "category": "actions",
    "meaning": "menolong",
    "on": [
      "ジョ"
    ],
    "kun": [
      "たす.ける",
      "たす.かる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 200,
    "examples": [
      {
        "word": "助ける",
        "kana": "たすける",
        "meaning": "menolong; membantu",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 470
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 470,
        "word": "助ける",
        "kana": "たすける"
      }
    ]
  },
  {
    "id": "kanji-52d5",
    "char": "動",
    "category": "actions",
    "meaning": "bergerak",
    "on": [
      "ドウ"
    ],
    "kun": [
      "うご.く",
      "うご.かす"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 201,
    "examples": [
      {
        "word": "動物",
        "kana": "どうぶつ",
        "meaning": "hewan; binatang",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 274
      },
      {
        "word": "活動",
        "kana": "かつどう",
        "meaning": "aktivitas",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 358
      },
      {
        "word": "自動車",
        "kana": "じどうしゃ",
        "meaning": "mobil",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 366
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 274,
        "word": "動物",
        "kana": "どうぶつ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 323,
        "word": "動きます",
        "kana": "うごきます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 358,
        "word": "活動",
        "kana": "かつどう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 366,
        "word": "自動車",
        "kana": "じどうしゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 274,
        "word": "動物",
        "kana": "どうぶつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 323,
        "word": "動きます",
        "kana": "うごきます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 358,
        "word": "活動",
        "kana": "かつどう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 366,
        "word": "自動車",
        "kana": "じどうしゃ"
      }
    ]
  },
  {
    "id": "kanji-53d7",
    "char": "受",
    "category": "actions",
    "meaning": "menerima",
    "on": [
      "ジュ"
    ],
    "kun": [
      "う.ける",
      "う.かる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 202,
    "examples": [
      {
        "word": "受付",
        "kana": "うけつけ",
        "meaning": "resepsionis; meja informasi",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 282
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 282,
        "word": "受付",
        "kana": "うけつけ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 282,
        "word": "受付",
        "kana": "うけつけ"
      }
    ]
  },
  {
    "id": "kanji-544a",
    "char": "告",
    "category": "actions",
    "meaning": "memberi tahu",
    "on": [
      "コク"
    ],
    "kun": [
      "つ.げる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 203,
    "examples": [
      {
        "word": "報告",
        "kana": "ほうこく",
        "meaning": "laporan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 476
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 476,
        "word": "報告",
        "kana": "ほうこく"
      }
    ]
  },
  {
    "id": "kanji-5bdd",
    "char": "寝",
    "category": "actions",
    "meaning": "tidur",
    "on": [
      "シン"
    ],
    "kun": [
      "ね.る",
      "ね.かす"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 204,
    "examples": [
      {
        "word": "寝ます",
        "kana": "ねます",
        "meaning": "tidur",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 391
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 391,
        "word": "寝ます",
        "kana": "ねます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 391,
        "word": "寝ます",
        "kana": "ねます"
      }
    ]
  },
  {
    "id": "kanji-5f85",
    "char": "待",
    "category": "actions",
    "meaning": "menunggu",
    "on": [
      "タイ"
    ],
    "kun": [
      "ま.つ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 205,
    "examples": [
      {
        "word": "招待",
        "kana": "しょうたい",
        "meaning": "undangan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 451
      },
      {
        "word": "待ちます",
        "kana": "まちます",
        "meaning": "menunggu",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 128
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 128,
        "word": "待ちます",
        "kana": "まちます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 128,
        "word": "待ちます",
        "kana": "まちます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 128,
        "word": "待ちます",
        "kana": "まちます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 451,
        "word": "招待",
        "kana": "しょうたい"
      }
    ]
  },
  {
    "id": "kanji-5fc3",
    "char": "心",
    "category": "actions",
    "meaning": "hati; pikiran",
    "on": [
      "シン"
    ],
    "kun": [
      "こころ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 206,
    "examples": [
      {
        "word": "心",
        "kana": "こころ",
        "meaning": "hati; pikiran",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 460
      },
      {
        "word": "中心",
        "kana": "ちゅうしん",
        "meaning": "tengah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 343
      },
      {
        "word": "心配",
        "kana": "しんぱい",
        "meaning": "khawatir",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 461
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 343,
        "word": "中心",
        "kana": "ちゅうしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 343,
        "word": "中心",
        "kana": "ちゅうしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 460,
        "word": "心",
        "kana": "こころ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 461,
        "word": "心配",
        "kana": "しんぱい"
      }
    ]
  },
  {
    "id": "kanji-5fd8",
    "char": "忘",
    "category": "actions",
    "meaning": "lupa",
    "on": [
      "ボウ"
    ],
    "kun": [
      "わす.れる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 207,
    "examples": [
      {
        "word": "忘れ物",
        "kana": "わすれもの",
        "meaning": "barang yang tertinggal",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 469
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 469,
        "word": "忘れ物",
        "kana": "わすれもの"
      }
    ]
  },
  {
    "id": "kanji-601d",
    "char": "思",
    "category": "actions",
    "meaning": "berpikir; merasa",
    "on": [
      "シ"
    ],
    "kun": [
      "おも.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 208,
    "examples": [
      {
        "word": "思い出",
        "kana": "おもいで",
        "meaning": "memori; kenangan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 383
      },
      {
        "word": "思います",
        "kana": "おもいます",
        "meaning": "mengira; merasa",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 221
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 221,
        "word": "思います",
        "kana": "おもいます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 221,
        "word": "思います",
        "kana": "おもいます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 383,
        "word": "思い出",
        "kana": "おもいで"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 221,
        "word": "思います",
        "kana": "おもいます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 383,
        "word": "思い出",
        "kana": "おもいで"
      }
    ]
  },
  {
    "id": "kanji-62db",
    "char": "招",
    "category": "actions",
    "meaning": "mengundang",
    "on": [
      "ショウ"
    ],
    "kun": [
      "まね.く"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 209,
    "examples": [
      {
        "word": "招待",
        "kana": "しょうたい",
        "meaning": "undangan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 451
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 451,
        "word": "招待",
        "kana": "しょうたい"
      }
    ]
  },
  {
    "id": "kanji-6301",
    "char": "持",
    "category": "actions",
    "meaning": "memegang; membawa",
    "on": [
      "ジ"
    ],
    "kun": [
      "も.つ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 210,
    "examples": [
      {
        "word": "気持ち",
        "kana": "きもち",
        "meaning": "perasaan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 445
      },
      {
        "word": "持っていきます",
        "kana": "もっていきます",
        "meaning": "pergi membawa",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 160
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 160,
        "word": "持っていきます",
        "kana": "もっていきます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 160,
        "word": "持っていきます",
        "kana": "もっていきます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 160,
        "word": "持っていきます",
        "kana": "もっていきます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 445,
        "word": "気持ち",
        "kana": "きもち"
      }
    ]
  },
  {
    "id": "kanji-6c7a",
    "char": "決",
    "category": "actions",
    "meaning": "memutuskan",
    "on": [
      "ケツ"
    ],
    "kun": [
      "き.める",
      "き.まる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 211,
    "examples": [
      {
        "word": "決めます",
        "kana": "きめます",
        "meaning": "memutuskan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 297
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 297,
        "word": "決めます",
        "kana": "きめます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 297,
        "word": "決めます",
        "kana": "きめます"
      }
    ]
  },
  {
    "id": "kanji-6cf3",
    "char": "泳",
    "category": "actions",
    "meaning": "berenang",
    "on": [
      "エイ"
    ],
    "kun": [
      "およ.ぐ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 212,
    "examples": [
      {
        "word": "泳ぎます",
        "kana": "およぎます",
        "meaning": "berenang",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 204
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 204,
        "word": "泳ぎます",
        "kana": "およぎます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 204,
        "word": "泳ぎます",
        "kana": "およぎます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 204,
        "word": "泳ぎます",
        "kana": "およぎます"
      }
    ]
  },
  {
    "id": "kanji-6d17",
    "char": "洗",
    "category": "actions",
    "meaning": "mencuci",
    "on": [
      "セン"
    ],
    "kun": [
      "あら.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 213,
    "examples": [
      {
        "word": "洗います",
        "kana": "あらいます",
        "meaning": "mencuci",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 335
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 335,
        "word": "洗います",
        "kana": "あらいます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 335,
        "word": "洗います",
        "kana": "あらいます"
      }
    ]
  },
  {
    "id": "kanji-6d3b",
    "char": "活",
    "category": "actions",
    "meaning": "hidup; aktif",
    "on": [
      "カツ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 214,
    "examples": [
      {
        "word": "活動",
        "kana": "かつどう",
        "meaning": "aktivitas",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 358
      },
      {
        "word": "生活",
        "kana": "せいかつ",
        "meaning": "kehidupan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 384
      },
      {
        "word": "食生活",
        "kana": "しょくせいかつ",
        "meaning": "pola makan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 412
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 358,
        "word": "活動",
        "kana": "かつどう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 384,
        "word": "生活",
        "kana": "せいかつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 358,
        "word": "活動",
        "kana": "かつどう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 384,
        "word": "生活",
        "kana": "せいかつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 412,
        "word": "食生活",
        "kana": "しょくせいかつ"
      }
    ]
  },
  {
    "id": "kanji-7528",
    "char": "用",
    "category": "actions",
    "meaning": "menggunakan; keperluan",
    "on": [
      "ヨウ"
    ],
    "kun": [
      "もち.いる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 215,
    "examples": [
      {
        "word": "利用",
        "kana": "りよう",
        "meaning": "penggunaan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 468
      },
      {
        "word": "子ども用",
        "kana": "こどもよう",
        "meaning": "untuk anak-anak",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 372
      },
      {
        "word": "〜用",
        "kana": "よう",
        "meaning": "untuk; keperluan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 371
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 371,
        "word": "〜用",
        "kana": "〜よう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 372,
        "word": "子ども用",
        "kana": "こどもよう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 371,
        "word": "〜用",
        "kana": "〜よう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 372,
        "word": "子ども用",
        "kana": "こどもよう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 468,
        "word": "利用",
        "kana": "りよう"
      }
    ]
  },
  {
    "id": "kanji-7740",
    "char": "着",
    "category": "actions",
    "meaning": "memakai; tiba",
    "on": [
      "チャク",
      "ジャク"
    ],
    "kun": [
      "き.る",
      "つ.く"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 216,
    "examples": [
      {
        "word": "到着",
        "kana": "とうちゃく",
        "meaning": "kedatangan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 175
      },
      {
        "word": "着ます",
        "kana": "きます",
        "meaning": "mengenakan (pakaian)",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 211
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 175,
        "word": "到着",
        "kana": "とうちゃく"
      },
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 211,
        "word": "着ます",
        "kana": "きます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 175,
        "word": "到着",
        "kana": "とうちゃく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 211,
        "word": "着ます",
        "kana": "きます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 175,
        "word": "到着",
        "kana": "とうちゃく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 211,
        "word": "着ます",
        "kana": "きます"
      }
    ]
  },
  {
    "id": "kanji-8d70",
    "char": "走",
    "category": "actions",
    "meaning": "berlari",
    "on": [
      "ソウ"
    ],
    "kun": [
      "はし.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 217,
    "examples": [
      {
        "word": "走ります",
        "kana": "はしります",
        "meaning": "berlari",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 203
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 203,
        "word": "走ります",
        "kana": "はしります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 203,
        "word": "走ります",
        "kana": "はしります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 203,
        "word": "走ります",
        "kana": "はしります"
      }
    ]
  },
  {
    "id": "kanji-8d77",
    "char": "起",
    "category": "actions",
    "meaning": "bangun; terjadi",
    "on": [
      "キ"
    ],
    "kun": [
      "お.きる",
      "お.こる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 218,
    "examples": [
      {
        "word": "起きます",
        "kana": "おきます",
        "meaning": "bangun",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 201
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 201,
        "word": "起きます",
        "kana": "おきます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 201,
        "word": "起きます",
        "kana": "おきます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 201,
        "word": "起きます",
        "kana": "おきます"
      }
    ]
  },
  {
    "id": "kanji-9078",
    "char": "選",
    "category": "actions",
    "meaning": "memilih",
    "on": [
      "セン"
    ],
    "kun": [
      "えら.ぶ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 219,
    "examples": [
      {
        "word": "選手",
        "kana": "せんしゅ",
        "meaning": "atlet",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 375
      },
      {
        "word": "選びます",
        "kana": "えらびます",
        "meaning": "memilih",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 390
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 375,
        "word": "選手",
        "kana": "せんしゅ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 390,
        "word": "選びます",
        "kana": "えらびます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 375,
        "word": "選手",
        "kana": "せんしゅ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 390,
        "word": "選びます",
        "kana": "えらびます"
      }
    ]
  },
  {
    "id": "kanji-914d",
    "char": "配",
    "category": "actions",
    "meaning": "membagikan; mengatur",
    "on": [
      "ハイ"
    ],
    "kun": [
      "くば.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 220,
    "examples": [
      {
        "word": "心配",
        "kana": "しんぱい",
        "meaning": "khawatir",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 461
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 461,
        "word": "心配",
        "kana": "しんぱい"
      }
    ]
  },
  {
    "id": "kanji-96c6",
    "char": "集",
    "category": "actions",
    "meaning": "berkumpul",
    "on": [
      "シュウ"
    ],
    "kun": [
      "あつ.まる",
      "あつ.める"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 221,
    "examples": [
      {
        "word": "募集",
        "kana": "ぼしゅう",
        "meaning": "perekrutan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 478
      },
      {
        "word": "集まります",
        "kana": "あつまります",
        "meaning": "berkumpul",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 286
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 286,
        "word": "集まります",
        "kana": "あつまります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 286,
        "word": "集まります",
        "kana": "あつまります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 478,
        "word": "募集",
        "kana": "ぼしゅう"
      }
    ]
  },
  {
    "id": "kanji-5375",
    "char": "卵",
    "category": "food",
    "meaning": "telur",
    "on": [
      "ラン"
    ],
    "kun": [
      "たまご"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 222,
    "examples": [
      {
        "word": "卵",
        "kana": "たまご",
        "meaning": "telur",
        "source": "marugoto-a2-1",
        "page": 1,
        "number": 3
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 1,
        "number": 3,
        "word": "卵",
        "kana": "たまご"
      },
      {
        "source": "marugoto-a2-2",
        "page": 1,
        "number": 3,
        "word": "卵",
        "kana": "たまご"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 3,
        "word": "卵",
        "kana": "たまご"
      }
    ]
  },
  {
    "id": "kanji-5473",
    "char": "味",
    "category": "food",
    "meaning": "rasa",
    "on": [
      "ミ"
    ],
    "kun": [
      "あじ",
      "あじ.わう"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 223,
    "examples": [
      {
        "word": "味",
        "kana": "あじ",
        "meaning": "rasa",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 163
      },
      {
        "word": "意味",
        "kana": "いみ",
        "meaning": "arti",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 224
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 163,
        "word": "味",
        "kana": "あじ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 163,
        "word": "味",
        "kana": "あじ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 224,
        "word": "意味",
        "kana": "いみ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 163,
        "word": "味",
        "kana": "あじ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 224,
        "word": "意味",
        "kana": "いみ"
      }
    ]
  },
  {
    "id": "kanji-5869",
    "char": "塩",
    "category": "food",
    "meaning": "garam",
    "on": [
      "エン"
    ],
    "kun": [
      "しお"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 224,
    "examples": [
      {
        "word": "塩",
        "kana": "しお",
        "meaning": "garam",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 253
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 253,
        "word": "塩",
        "kana": "しお"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 253,
        "word": "塩",
        "kana": "しお"
      }
    ]
  },
  {
    "id": "kanji-6599",
    "char": "料",
    "category": "food",
    "meaning": "bahan; biaya",
    "on": [
      "リョウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 225,
    "examples": [
      {
        "word": "料理",
        "kana": "りょうり",
        "meaning": "masakan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 162
      },
      {
        "word": "料金",
        "kana": "りょうきん",
        "meaning": "tarif",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 276
      },
      {
        "word": "無料",
        "kana": "むりょう",
        "meaning": "gratis; bebas biaya",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 277
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 162,
        "word": "料理",
        "kana": "りょうり"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 162,
        "word": "料理",
        "kana": "りょうり"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 276,
        "word": "料金",
        "kana": "りょうきん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 277,
        "word": "無料",
        "kana": "むりょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 294,
        "word": "入場料",
        "kana": "にゅうじょうりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 162,
        "word": "料理",
        "kana": "りょうり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 276,
        "word": "料金",
        "kana": "りょうきん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 277,
        "word": "無料",
        "kana": "むりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 294,
        "word": "入場料",
        "kana": "にゅうじょうりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 414,
        "word": "家庭料理",
        "kana": "かていりょうり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 415,
        "word": "材料",
        "kana": "ざいりょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 455,
        "word": "給料",
        "kana": "きゅうりょう"
      }
    ]
  },
  {
    "id": "kanji-6750",
    "char": "材",
    "category": "food",
    "meaning": "bahan",
    "on": [
      "ザイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 226,
    "examples": [
      {
        "word": "材料",
        "kana": "ざいりょう",
        "meaning": "bahan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 415
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 415,
        "word": "材料",
        "kana": "ざいりょう"
      }
    ]
  },
  {
    "id": "kanji-7269",
    "char": "物",
    "category": "food",
    "meaning": "benda",
    "on": [
      "ブツ",
      "モツ"
    ],
    "kun": [
      "もの"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 227,
    "examples": [
      {
        "word": "動物",
        "kana": "どうぶつ",
        "meaning": "hewan; binatang",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 274
      },
      {
        "word": "食べ物",
        "kana": "たべもの",
        "meaning": "makanan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 155
      },
      {
        "word": "飲み物",
        "kana": "のみもの",
        "meaning": "minuman",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 156
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 155,
        "word": "食べ物",
        "kana": "たべもの"
      },
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 156,
        "word": "飲み物",
        "kana": "のみもの"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 155,
        "word": "食べ物",
        "kana": "たべもの"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 156,
        "word": "飲み物",
        "kana": "のみもの"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 274,
        "word": "動物",
        "kana": "どうぶつ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 352,
        "word": "博物館",
        "kana": "はくぶつかん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 155,
        "word": "食べ物",
        "kana": "たべもの"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 156,
        "word": "飲み物",
        "kana": "のみもの"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 274,
        "word": "動物",
        "kana": "どうぶつ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 352,
        "word": "博物館",
        "kana": "はくぶつかん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 469,
        "word": "忘れ物",
        "kana": "わすれもの"
      }
    ]
  },
  {
    "id": "kanji-7c73",
    "char": "米",
    "category": "food",
    "meaning": "beras",
    "on": [
      "ベイ",
      "マイ"
    ],
    "kun": [
      "こめ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 228,
    "examples": [
      {
        "word": "米",
        "kana": "こめ",
        "meaning": "beras",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 417
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 417,
        "word": "米",
        "kana": "こめ"
      }
    ]
  },
  {
    "id": "kanji-8089",
    "char": "肉",
    "category": "food",
    "meaning": "daging",
    "on": [
      "ニク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 229,
    "examples": [
      {
        "word": "肉",
        "kana": "にく",
        "meaning": "daging",
        "source": "marugoto-a2-1",
        "page": 1,
        "number": 2
      },
      {
        "word": "牛肉",
        "kana": "ぎゅうにく",
        "meaning": "daging sapi",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 247
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        1,
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 1,
        "number": 2,
        "word": "肉",
        "kana": "にく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 1,
        "number": 2,
        "word": "肉",
        "kana": "にく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 247,
        "word": "牛肉",
        "kana": "ぎゅうにく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 1,
        "number": 2,
        "word": "肉",
        "kana": "にく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 247,
        "word": "牛肉",
        "kana": "ぎゅうにく"
      }
    ]
  },
  {
    "id": "kanji-8336",
    "char": "茶",
    "category": "food",
    "meaning": "teh",
    "on": [
      "チャ",
      "サ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 230,
    "examples": [
      {
        "word": "お茶",
        "kana": "おちゃ",
        "meaning": "teh",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 157
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 157,
        "word": "お茶",
        "kana": "おちゃ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 157,
        "word": "お茶",
        "kana": "おちゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 157,
        "word": "お茶",
        "kana": "おちゃ"
      }
    ]
  },
  {
    "id": "kanji-83dc",
    "char": "菜",
    "category": "food",
    "meaning": "sayuran",
    "on": [
      "サイ"
    ],
    "kun": [
      "な"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 231,
    "examples": [
      {
        "word": "野菜",
        "kana": "やさい",
        "meaning": "sayur-mayur",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 165
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 165,
        "word": "野菜",
        "kana": "やさい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 165,
        "word": "野菜",
        "kana": "やさい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 165,
        "word": "野菜",
        "kana": "やさい"
      }
    ]
  },
  {
    "id": "kanji-9152",
    "char": "酒",
    "category": "food",
    "meaning": "minuman beralkohol",
    "on": [
      "シュ"
    ],
    "kun": [
      "さけ",
      "さか"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 232,
    "examples": [
      {
        "word": "お酒",
        "kana": "おさけ",
        "meaning": "sake; minuman keras",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 158
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 158,
        "word": "お酒",
        "kana": "おさけ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 158,
        "word": "お酒",
        "kana": "おさけ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 158,
        "word": "お酒",
        "kana": "おさけ"
      }
    ]
  },
  {
    "id": "kanji-98ef",
    "char": "飯",
    "category": "food",
    "meaning": "nasi; makanan",
    "on": [
      "ハン"
    ],
    "kun": [
      "めし"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 233,
    "examples": [
      {
        "word": "ご飯",
        "kana": "ごはん",
        "meaning": "nasi",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 252
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 252,
        "word": "ご飯",
        "kana": "ごはん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 252,
        "word": "ご飯",
        "kana": "ごはん"
      }
    ]
  },
  {
    "id": "kanji-54c1",
    "char": "品",
    "category": "food",
    "meaning": "barang; mutu",
    "on": [
      "ヒン"
    ],
    "kun": [
      "しな"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 234,
    "examples": [
      {
        "word": "商品",
        "kana": "しょうひん",
        "meaning": "produk",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 316
      },
      {
        "word": "電気製品",
        "kana": "でんきせいひん",
        "meaning": "peralatan elektronik",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 317
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 316,
        "word": "商品",
        "kana": "しょうひん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 317,
        "word": "電気製品",
        "kana": "でんきせいひん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 316,
        "word": "商品",
        "kana": "しょうひん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 317,
        "word": "電気製品",
        "kana": "でんきせいひん"
      }
    ]
  },
  {
    "id": "kanji-4e8b",
    "char": "事",
    "category": "work",
    "meaning": "hal; urusan",
    "on": [
      "ジ"
    ],
    "kun": [
      "こと"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 235,
    "examples": [
      {
        "word": "食事",
        "kana": "しょくじ",
        "meaning": "makan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 130
      },
      {
        "word": "仕事",
        "kana": "しごと",
        "meaning": "pekerjaan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 131
      },
      {
        "word": "願い事",
        "kana": "ねがいごと",
        "meaning": "harapan; keinginan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 310
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 130,
        "word": "食事",
        "kana": "しょくじ"
      },
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 131,
        "word": "仕事",
        "kana": "しごと"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 130,
        "word": "食事",
        "kana": "しょくじ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 131,
        "word": "仕事",
        "kana": "しごと"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 310,
        "word": "願い事",
        "kana": "ねがいごと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 130,
        "word": "食事",
        "kana": "しょくじ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 131,
        "word": "仕事",
        "kana": "しごと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 310,
        "word": "願い事",
        "kana": "ねがいごと"
      }
    ]
  },
  {
    "id": "kanji-4ed5",
    "char": "仕",
    "category": "work",
    "meaning": "melayani; bekerja",
    "on": [
      "シ"
    ],
    "kun": [
      "つか.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 236,
    "examples": [
      {
        "word": "仕事",
        "kana": "しごと",
        "meaning": "pekerjaan",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 131
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 131,
        "word": "仕事",
        "kana": "しごと"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 131,
        "word": "仕事",
        "kana": "しごと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 131,
        "word": "仕事",
        "kana": "しごと"
      }
    ]
  },
  {
    "id": "kanji-4fbf",
    "char": "便",
    "category": "work",
    "meaning": "kemudahan; kiriman",
    "on": [
      "ベン",
      "ビン"
    ],
    "kun": [
      "たよ.り"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 237,
    "examples": [
      {
        "word": "便利",
        "kana": "べんり",
        "meaning": "berguna; nyaman",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 279
      },
      {
        "word": "不便",
        "kana": "ふべん",
        "meaning": "tidak praktis",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 389
      },
      {
        "word": "～便",
        "kana": "びん",
        "meaning": "nomor penerbangan; layanan pengiriman",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 472
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 279,
        "word": "便利",
        "kana": "べんり"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 389,
        "word": "不便",
        "kana": "ふべん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 279,
        "word": "便利",
        "kana": "べんり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 389,
        "word": "不便",
        "kana": "ふべん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 472,
        "word": "～便（115便）",
        "kana": "～びん（いちいちごびん）"
      }
    ]
  },
  {
    "id": "kanji-4fc2",
    "char": "係",
    "category": "work",
    "meaning": "hubungan; penanggung jawab",
    "on": [
      "ケイ"
    ],
    "kun": [
      "かかり",
      "かか.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 238,
    "examples": [
      {
        "word": "人間関係",
        "kana": "にんげんかんけい",
        "meaning": "hubungan antarmanusia",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 456
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 456,
        "word": "人間関係",
        "kana": "にんげんかんけい"
      }
    ]
  },
  {
    "id": "kanji-4fe1",
    "char": "信",
    "category": "work",
    "meaning": "percaya; kabar",
    "on": [
      "シン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 239,
    "examples": [
      {
        "word": "自信",
        "kana": "じしん",
        "meaning": "percaya diri",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 433
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 433,
        "word": "自信",
        "kana": "じしん"
      }
    ]
  },
  {
    "id": "kanji-501f",
    "char": "借",
    "category": "work",
    "meaning": "meminjam",
    "on": [
      "シャク"
    ],
    "kun": [
      "か.りる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 240,
    "examples": [
      {
        "word": "借ります",
        "kana": "かります",
        "meaning": "meminjam",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 185
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 185,
        "word": "借ります",
        "kana": "かります"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 185,
        "word": "借ります",
        "kana": "かります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 185,
        "word": "借ります",
        "kana": "かります"
      }
    ]
  },
  {
    "id": "kanji-50cd",
    "char": "働",
    "category": "work",
    "meaning": "bekerja",
    "on": [
      "ドウ"
    ],
    "kun": [
      "はたら.く"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 241,
    "examples": [
      {
        "word": "働きます",
        "kana": "はたらきます",
        "meaning": "bekerja",
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 228
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 228,
        "word": "働きます",
        "kana": "はたらきます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 228,
        "word": "働きます",
        "kana": "はたらきます"
      }
    ]
  },
  {
    "id": "kanji-5177",
    "char": "具",
    "category": "work",
    "meaning": "alat; perlengkapan",
    "on": [
      "グ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 242,
    "examples": [
      {
        "word": "道具",
        "kana": "どうぐ",
        "meaning": "alat; perlengkapan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 351
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 351,
        "word": "道具",
        "kana": "どうぐ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 351,
        "word": "道具",
        "kana": "どうぐ"
      }
    ]
  },
  {
    "id": "kanji-5229",
    "char": "利",
    "category": "work",
    "meaning": "manfaat; keuntungan",
    "on": [
      "リ"
    ],
    "kun": [
      "き.く"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 243,
    "examples": [
      {
        "word": "便利",
        "kana": "べんり",
        "meaning": "berguna; nyaman",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 279
      },
      {
        "word": "利用",
        "kana": "りよう",
        "meaning": "penggunaan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 468
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 279,
        "word": "便利",
        "kana": "べんり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 279,
        "word": "便利",
        "kana": "べんり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 468,
        "word": "利用",
        "kana": "りよう"
      }
    ]
  },
  {
    "id": "kanji-52df",
    "char": "募",
    "category": "work",
    "meaning": "merekrut; mengumpulkan",
    "on": [
      "ボ"
    ],
    "kun": [
      "つの.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 244,
    "examples": [
      {
        "word": "募集",
        "kana": "ぼしゅう",
        "meaning": "perekrutan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 478
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 478,
        "word": "募集",
        "kana": "ぼしゅう"
      }
    ]
  },
  {
    "id": "kanji-52e4",
    "char": "勤",
    "category": "work",
    "meaning": "bekerja; bertugas",
    "on": [
      "キン"
    ],
    "kun": [
      "つと.める",
      "つと.まる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 245,
    "examples": [
      {
        "word": "通勤",
        "kana": "つうきん",
        "meaning": "perjalanan ke tempat kerja",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 404
      },
      {
        "word": "勤める",
        "kana": "つとめる",
        "meaning": "bekerja",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 408
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 404,
        "word": "通勤",
        "kana": "つうきん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 408,
        "word": "勤める",
        "kana": "つとめる"
      }
    ]
  },
  {
    "id": "kanji-5354",
    "char": "協",
    "category": "work",
    "meaning": "bekerja sama",
    "on": [
      "キョウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 246,
    "examples": [
      {
        "word": "協力",
        "kana": "きょうりょく",
        "meaning": "kerja sama",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 474
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 474,
        "word": "協力",
        "kana": "きょうりょく"
      }
    ]
  },
  {
    "id": "kanji-5546",
    "char": "商",
    "category": "work",
    "meaning": "perdagangan",
    "on": [
      "ショウ"
    ],
    "kun": [
      "あきな.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 247,
    "examples": [
      {
        "word": "商品",
        "kana": "しょうひん",
        "meaning": "produk",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 316
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 316,
        "word": "商品",
        "kana": "しょうひん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 316,
        "word": "商品",
        "kana": "しょうひん"
      }
    ]
  },
  {
    "id": "kanji-5831",
    "char": "報",
    "category": "work",
    "meaning": "laporan; kabar",
    "on": [
      "ホウ"
    ],
    "kun": [
      "むく.いる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 248,
    "examples": [
      {
        "word": "報告",
        "kana": "ほうこく",
        "meaning": "laporan",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 476
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 476,
        "word": "報告",
        "kana": "ほうこく"
      }
    ]
  },
  {
    "id": "kanji-58f2",
    "char": "売",
    "category": "work",
    "meaning": "menjual",
    "on": [
      "バイ"
    ],
    "kun": [
      "う.る",
      "う.れる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 249,
    "examples": [
      {
        "word": "売ります",
        "kana": "うります",
        "meaning": "menjual",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 367
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 367,
        "word": "売ります",
        "kana": "うります"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 367,
        "word": "売ります",
        "kana": "うります"
      }
    ]
  },
  {
    "id": "kanji-5b9a",
    "char": "定",
    "category": "work",
    "meaning": "menetapkan; tetap",
    "on": [
      "テイ",
      "ジョウ"
    ],
    "kun": [
      "さだ.める",
      "さだ.まる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 250,
    "examples": [
      {
        "word": "定食",
        "kana": "ていしょく",
        "meaning": "menu paket",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 423
      },
      {
        "word": "予定",
        "kana": "よてい",
        "meaning": "rencana",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 467
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 423,
        "word": "定食",
        "kana": "ていしょく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 467,
        "word": "予定",
        "kana": "よてい"
      }
    ]
  },
  {
    "id": "kanji-5f35",
    "char": "張",
    "category": "work",
    "meaning": "membentangkan; menegang",
    "on": [
      "チョウ"
    ],
    "kun": [
      "は.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 251,
    "examples": [
      {
        "word": "出張",
        "kana": "しゅっちょう",
        "meaning": "perjalanan dinas",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 172
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 172,
        "word": "出張",
        "kana": "しゅっちょう"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 172,
        "word": "出張",
        "kana": "しゅっちょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 172,
        "word": "出張",
        "kana": "しゅっちょう"
      }
    ]
  },
  {
    "id": "kanji-5f53",
    "char": "当",
    "category": "work",
    "meaning": "kena; sesuai; bertugas",
    "on": [
      "トウ"
    ],
    "kun": [
      "あ.たる",
      "あ.てる"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 252,
    "examples": [
      {
        "word": "担当",
        "kana": "たんとう",
        "meaning": "penanggung jawab",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 475
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 475,
        "word": "担当",
        "kana": "たんとう"
      }
    ]
  },
  {
    "id": "kanji-62c5",
    "char": "担",
    "category": "work",
    "meaning": "memikul; menangani",
    "on": [
      "タン"
    ],
    "kun": [
      "かつ.ぐ",
      "にな.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 253,
    "examples": [
      {
        "word": "担当",
        "kana": "たんとう",
        "meaning": "penanggung jawab",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 475
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 475,
        "word": "担当",
        "kana": "たんとう"
      }
    ]
  },
  {
    "id": "kanji-652f",
    "char": "支",
    "category": "work",
    "meaning": "menopang; cabang",
    "on": [
      "シ"
    ],
    "kun": [
      "ささ.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 254,
    "examples": [
      {
        "word": "支社",
        "kana": "ししゃ",
        "meaning": "kantor cabang",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 171
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 171,
        "word": "支社",
        "kana": "ししゃ"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 171,
        "word": "支社",
        "kana": "ししゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 171,
        "word": "支社",
        "kana": "ししゃ"
      }
    ]
  },
  {
    "id": "kanji-696d",
    "char": "業",
    "category": "work",
    "meaning": "pekerjaan; usaha",
    "on": [
      "ギョウ",
      "ゴウ"
    ],
    "kun": [
      "わざ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 255,
    "examples": [
      {
        "word": "卒業",
        "kana": "そつぎょう",
        "meaning": "kelulusan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 379
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 379,
        "word": "卒業",
        "kana": "そつぎょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 379,
        "word": "卒業",
        "kana": "そつぎょう"
      }
    ]
  },
  {
    "id": "kanji-7d66",
    "char": "給",
    "category": "work",
    "meaning": "memberikan; gaji",
    "on": [
      "キュウ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 256,
    "examples": [
      {
        "word": "給料",
        "kana": "きゅうりょう",
        "meaning": "gaji",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 455
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 455,
        "word": "給料",
        "kana": "きゅうりょう"
      }
    ]
  },
  {
    "id": "kanji-7d4c",
    "char": "経",
    "category": "work",
    "meaning": "melewati; mengelola",
    "on": [
      "ケイ",
      "キョウ"
    ],
    "kun": [
      "へ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 257,
    "examples": [
      {
        "word": "経験",
        "kana": "けいけん",
        "meaning": "pengalaman",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 426
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 426,
        "word": "経験",
        "kana": "けいけん"
      }
    ]
  },
  {
    "id": "kanji-8077",
    "char": "職",
    "category": "work",
    "meaning": "pekerjaan; jabatan",
    "on": [
      "ショク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 258,
    "examples": [
      {
        "word": "職場",
        "kana": "しょくば",
        "meaning": "tempat kerja",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 454
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 454,
        "word": "職場",
        "kana": "しょくば"
      }
    ]
  },
  {
    "id": "kanji-88fd",
    "char": "製",
    "category": "work",
    "meaning": "buatan; produksi",
    "on": [
      "セイ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 259,
    "examples": [
      {
        "word": "日本製",
        "kana": "にほんせい",
        "meaning": "buatan Jepang",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 329
      },
      {
        "word": "電気製品",
        "kana": "でんきせいひん",
        "meaning": "peralatan elektronik",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 317
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 317,
        "word": "電気製品",
        "kana": "でんきせいひん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 329,
        "word": "日本製",
        "kana": "にほんせい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 317,
        "word": "電気製品",
        "kana": "でんきせいひん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 329,
        "word": "日本製",
        "kana": "にほんせい"
      }
    ]
  },
  {
    "id": "kanji-8cb8",
    "char": "貸",
    "category": "work",
    "meaning": "meminjamkan",
    "on": [
      "タイ"
    ],
    "kun": [
      "か.す"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 260,
    "examples": [
      {
        "word": "貸します",
        "kana": "かします",
        "meaning": "meminjamkan",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 368
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 368,
        "word": "貸します",
        "kana": "かします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 368,
        "word": "貸します",
        "kana": "かします"
      }
    ]
  },
  {
    "id": "kanji-95a2",
    "char": "関",
    "category": "work",
    "meaning": "hubungan; berkaitan",
    "on": [
      "カン"
    ],
    "kun": [
      "かか.わる",
      "せき"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 261,
    "examples": [
      {
        "word": "人間関係",
        "kana": "にんげんかんけい",
        "meaning": "hubungan antarmanusia",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 456
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 456,
        "word": "人間関係",
        "kana": "にんげんかんけい"
      }
    ]
  },
  {
    "id": "kanji-4e16",
    "char": "世",
    "category": "culture",
    "meaning": "dunia; generasi",
    "on": [
      "セイ",
      "セ"
    ],
    "kun": [
      "よ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 262,
    "examples": [
      {
        "word": "世界",
        "kana": "せかい",
        "meaning": "dunia",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 342
      },
      {
        "word": "〜世紀",
        "kana": "せいき",
        "meaning": "abad",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 344
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 342,
        "word": "世界",
        "kana": "せかい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 344,
        "word": "〜世紀（８世紀）",
        "kana": "〜せいき（はっせいき）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 342,
        "word": "世界",
        "kana": "せかい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 344,
        "word": "〜世紀（8世紀）",
        "kana": "〜せいき（はっせいき）"
      }
    ]
  },
  {
    "id": "kanji-4ecf",
    "char": "仏",
    "category": "culture",
    "meaning": "Buddha",
    "on": [
      "ブツ"
    ],
    "kun": [
      "ほとけ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 263,
    "examples": [
      {
        "word": "仏教",
        "kana": "ぶっきょう",
        "meaning": "agama Buddha",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 340
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 340,
        "word": "仏教",
        "kana": "ぶっきょう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 340,
        "word": "仏教",
        "kana": "ぶっきょう"
      }
    ]
  },
  {
    "id": "kanji-548c",
    "char": "和",
    "category": "culture",
    "meaning": "harmoni; Jepang",
    "on": [
      "ワ"
    ],
    "kun": [
      "やわ.らぐ",
      "なご.む"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 264,
    "examples": [
      {
        "word": "和食",
        "kana": "わしょく",
        "meaning": "makanan Jepang",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 246
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 246,
        "word": "和食",
        "kana": "わしょく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 246,
        "word": "和食",
        "kana": "わしょく"
      }
    ]
  },
  {
    "id": "kanji-5199",
    "char": "写",
    "category": "culture",
    "meaning": "menyalin; memotret",
    "on": [
      "シャ"
    ],
    "kun": [
      "うつ.す",
      "うつ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 265,
    "examples": [
      {
        "word": "写真",
        "kana": "しゃしん",
        "meaning": "foto",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 209
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 209,
        "word": "写真",
        "kana": "しゃしん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 209,
        "word": "写真",
        "kana": "しゃしん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 209,
        "word": "写真",
        "kana": "しゃしん"
      }
    ]
  },
  {
    "id": "kanji-795e",
    "char": "神",
    "category": "culture",
    "meaning": "dewa; Tuhan",
    "on": [
      "シン",
      "ジン"
    ],
    "kun": [
      "かみ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 266,
    "examples": [
      {
        "word": "神社",
        "kana": "じんじゃ",
        "meaning": "kuil Shinto",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 338
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 338,
        "word": "神社",
        "kana": "じんじゃ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 338,
        "word": "神社",
        "kana": "じんじゃ"
      }
    ]
  },
  {
    "id": "kanji-796d",
    "char": "祭",
    "category": "culture",
    "meaning": "festival; upacara",
    "on": [
      "サイ"
    ],
    "kun": [
      "まつ.り",
      "まつ.る"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 267,
    "examples": [
      {
        "word": "祭り",
        "kana": "まつり",
        "meaning": "festival",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 291
      },
      {
        "word": "日本祭",
        "kana": "にほんまつり",
        "meaning": "Festival Jepang",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 292
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 291,
        "word": "祭り",
        "kana": "まつり"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 292,
        "word": "日本祭",
        "kana": "にほんまつり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 291,
        "word": "祭り",
        "kana": "まつり"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 292,
        "word": "日本祭",
        "kana": "にほんまつり"
      }
    ]
  },
  {
    "id": "kanji-795d",
    "char": "祝",
    "category": "culture",
    "meaning": "merayakan",
    "on": [
      "シュク",
      "シュウ"
    ],
    "kun": [
      "いわ.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 268,
    "examples": [
      {
        "word": "お祝い",
        "kana": "おいわい",
        "meaning": "perayaan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 205
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 205,
        "word": "お祝い",
        "kana": "おいわい"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 205,
        "word": "お祝い",
        "kana": "おいわい"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 205,
        "word": "お祝い",
        "kana": "おいわい"
      }
    ]
  },
  {
    "id": "kanji-6b4c",
    "char": "歌",
    "category": "culture",
    "meaning": "lagu; menyanyi",
    "on": [
      "カ"
    ],
    "kun": [
      "うた",
      "うた.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 269,
    "examples": [
      {
        "word": "歌",
        "kana": "うた",
        "meaning": "lagu",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 241
      },
      {
        "word": "歌手",
        "kana": "かしゅ",
        "meaning": "penyanyi",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 374
      },
      {
        "word": "歌います",
        "kana": "うたいます",
        "meaning": "menyanyikan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 242
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 241,
        "word": "歌",
        "kana": "うた"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 242,
        "word": "歌います",
        "kana": "うたいます"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 374,
        "word": "歌手",
        "kana": "かしゅ"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 241,
        "word": "歌",
        "kana": "うた"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 242,
        "word": "歌います",
        "kana": "うたいます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 374,
        "word": "歌手",
        "kana": "かしゅ"
      }
    ]
  },
  {
    "id": "kanji-6620",
    "char": "映",
    "category": "culture",
    "meaning": "terpantul; diproyeksikan",
    "on": [
      "エイ"
    ],
    "kun": [
      "うつ.る",
      "うつ.す",
      "は.える"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 270,
    "examples": [
      {
        "word": "映画",
        "kana": "えいが",
        "meaning": "film",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 385
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 385,
        "word": "映画",
        "kana": "えいが"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 385,
        "word": "映画",
        "kana": "えいが"
      }
    ]
  },
  {
    "id": "kanji-753b",
    "char": "画",
    "category": "culture",
    "meaning": "gambar; rencana",
    "on": [
      "ガ",
      "カク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 271,
    "examples": [
      {
        "word": "画家",
        "kana": "がか",
        "meaning": "pelukis",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 376
      },
      {
        "word": "映画",
        "kana": "えいが",
        "meaning": "film",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 385
      },
      {
        "word": "計画",
        "kana": "けいかく",
        "meaning": "rencana",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 432
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 376,
        "word": "画家",
        "kana": "がか"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 385,
        "word": "映画",
        "kana": "えいが"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 376,
        "word": "画家",
        "kana": "がか"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 385,
        "word": "映画",
        "kana": "えいが"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 432,
        "word": "計画",
        "kana": "けいかく"
      }
    ]
  },
  {
    "id": "kanji-6b74",
    "char": "歴",
    "category": "culture",
    "meaning": "riwayat; perjalanan waktu",
    "on": [
      "レキ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 272,
    "examples": [
      {
        "word": "歴史",
        "kana": "れきし",
        "meaning": "sejarah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 341
      },
      {
        "word": "歴史的",
        "kana": "れきしてき",
        "meaning": "bersejarah",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 347
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 341,
        "word": "歴史",
        "kana": "れきし"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 347,
        "word": "歴史的",
        "kana": "れきしてき"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 341,
        "word": "歴史",
        "kana": "れきし"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 347,
        "word": "歴史的",
        "kana": "れきしてき"
      }
    ]
  },
  {
    "id": "kanji-7d00",
    "char": "紀",
    "category": "culture",
    "meaning": "catatan; zaman",
    "on": [
      "キ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 273,
    "examples": [
      {
        "word": "〜世紀",
        "kana": "せいき",
        "meaning": "abad",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 344
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 344,
        "word": "〜世紀（８世紀）",
        "kana": "〜せいき（はっせいき）"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 344,
        "word": "〜世紀（8世紀）",
        "kana": "〜せいき（はっせいき）"
      }
    ]
  },
  {
    "id": "kanji-7d50",
    "char": "結",
    "category": "culture",
    "meaning": "mengikat; menyimpulkan",
    "on": [
      "ケツ"
    ],
    "kun": [
      "むす.ぶ",
      "ゆ.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 274,
    "examples": [
      {
        "word": "結婚",
        "kana": "けっこん",
        "meaning": "pernikahan",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 207
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 207,
        "word": "結婚",
        "kana": "けっこん"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 207,
        "word": "結婚",
        "kana": "けっこん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 207,
        "word": "結婚",
        "kana": "けっこん"
      }
    ]
  },
  {
    "id": "kanji-7d75",
    "char": "絵",
    "category": "culture",
    "meaning": "gambar; lukisan",
    "on": [
      "カイ",
      "エ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 275,
    "examples": [
      {
        "word": "絵",
        "kana": "え",
        "meaning": "gambar",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 208
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 208,
        "word": "絵",
        "kana": "え"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 208,
        "word": "絵",
        "kana": "え"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 208,
        "word": "絵",
        "kana": "え"
      }
    ]
  },
  {
    "id": "kanji-8868",
    "char": "表",
    "category": "culture",
    "meaning": "permukaan; menyatakan",
    "on": [
      "ヒョウ"
    ],
    "kun": [
      "おもて",
      "あらわ.す"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 276,
    "examples": [
      {
        "word": "表現",
        "kana": "ひょうげん",
        "meaning": "ungkapan; ekspresi",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 488
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 488,
        "word": "表現",
        "kana": "ひょうげん"
      }
    ]
  },
  {
    "id": "kanji-97f3",
    "char": "音",
    "category": "culture",
    "meaning": "bunyi; suara",
    "on": [
      "オン",
      "イン"
    ],
    "kun": [
      "おと",
      "ね"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 277,
    "examples": [
      {
        "word": "音",
        "kana": "おと",
        "meaning": "bunyi",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 325
      },
      {
        "word": "音楽",
        "kana": "おんがく",
        "meaning": "musik",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 148
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 148,
        "word": "音楽",
        "kana": "おんがく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 2,
        "number": 148,
        "word": "音楽",
        "kana": "おんがく"
      },
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 325,
        "word": "音",
        "kana": "おと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 148,
        "word": "音楽",
        "kana": "おんがく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 325,
        "word": "音",
        "kana": "おと"
      }
    ]
  },
  {
    "id": "kanji-52dd",
    "char": "勝",
    "category": "culture",
    "meaning": "menang",
    "on": [
      "ショウ"
    ],
    "kun": [
      "か.つ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 278,
    "examples": [
      {
        "word": "勝つ",
        "kana": "かつ",
        "meaning": "menang",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 397
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 397,
        "word": "勝つ",
        "kana": "かつ"
      }
    ]
  },
  {
    "id": "kanji-8ca0",
    "char": "負",
    "category": "culture",
    "meaning": "kalah; menanggung",
    "on": [
      "フ"
    ],
    "kun": [
      "ま.ける",
      "お.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 279,
    "examples": [
      {
        "word": "負ける",
        "kana": "まける",
        "meaning": "kalah",
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 398
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 398,
        "word": "負ける",
        "kana": "まける"
      }
    ]
  },
  {
    "id": "kanji-559c",
    "char": "喜",
    "category": "culture",
    "meaning": "gembira",
    "on": [
      "キ"
    ],
    "kun": [
      "よろこ.ぶ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 280,
    "examples": [
      {
        "word": "喜びます",
        "kana": "よろこびます",
        "meaning": "bergembira",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 306
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 306,
        "word": "喜びます",
        "kana": "よろこびます"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 306,
        "word": "喜びます",
        "kana": "よろこびます"
      }
    ]
  },
  {
    "id": "kanji-8a95",
    "char": "誕",
    "category": "culture",
    "meaning": "kelahiran",
    "on": [
      "タン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 281,
    "examples": [
      {
        "word": "誕生日",
        "kana": "たんじょうび",
        "meaning": "ulang tahun",
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 206
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 3,
        "number": 206,
        "word": "誕生日",
        "kana": "たんじょうび"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 206,
        "word": "誕生日",
        "kana": "たんじょうび"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 206,
        "word": "誕生日",
        "kana": "たんじょうび"
      }
    ]
  },
  {
    "id": "kanji-9858",
    "char": "願",
    "category": "culture",
    "meaning": "permohonan; harapan",
    "on": [
      "ガン"
    ],
    "kun": [
      "ねが.う"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 282,
    "examples": [
      {
        "word": "願い事",
        "kana": "ねがいごと",
        "meaning": "harapan; keinginan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 310
      },
      {
        "word": "お願いします",
        "kana": "おねがいします",
        "meaning": "tolong",
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 161
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        2,
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-1",
        "page": 2,
        "number": 161,
        "word": "お願いします",
        "kana": "おねがいします"
      },
      {
        "source": "marugoto-a2-2",
        "page": 3,
        "number": 161,
        "word": "お願いします",
        "kana": "おねがいします"
      },
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 310,
        "word": "願い事",
        "kana": "ねがいごと"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 2,
        "number": 161,
        "word": "お願いします",
        "kana": "おねがいします"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 310,
        "word": "願い事",
        "kana": "ねがいごと"
      }
    ]
  },
  {
    "id": "kanji-670d",
    "char": "服",
    "category": "clothes",
    "meaning": "pakaian",
    "on": [
      "フク"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 283,
    "examples": [
      {
        "word": "服",
        "kana": "ふく",
        "meaning": "pakaian",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 364
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 364,
        "word": "服",
        "kana": "ふく"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 364,
        "word": "服",
        "kana": "ふく"
      }
    ]
  },
  {
    "id": "kanji-578b",
    "char": "型",
    "category": "society",
    "meaning": "pola; tipe",
    "on": [
      "ケイ"
    ],
    "kun": [
      "かた"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 284,
    "examples": [
      {
        "word": "文型",
        "kana": "ぶんけい",
        "meaning": "pola kalimat",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 490
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 490,
        "word": "文型",
        "kana": "ぶんけい"
      }
    ]
  },
  {
    "id": "kanji-6cd5",
    "char": "法",
    "category": "society",
    "meaning": "hukum; cara",
    "on": [
      "ホウ",
      "ハッ"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2-b1",
    "order": 285,
    "examples": [
      {
        "word": "方法",
        "kana": "ほうほう",
        "meaning": "cara; metode",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 434
      },
      {
        "word": "文法",
        "kana": "ぶんぽう",
        "meaning": "tata bahasa",
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 491
      }
    ],
    "source": {
      "id": "marugoto-a2-b1",
      "label": "Pengayaan A2/B1",
      "pages": [
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 434,
        "word": "方法",
        "kana": "ほうほう"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 5,
        "number": 491,
        "word": "文法",
        "kana": "ぶんぽう"
      }
    ]
  },
  {
    "id": "kanji-6ce8",
    "char": "注",
    "category": "society",
    "meaning": "menuang; memperhatikan",
    "on": [
      "チュウ"
    ],
    "kun": [
      "そそ.ぐ"
    ],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 286,
    "examples": [
      {
        "word": "注文",
        "kana": "ちゅうもん",
        "meaning": "pesanan",
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 244
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        3,
        4
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 4,
        "number": 244,
        "word": "注文",
        "kana": "ちゅうもん"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 3,
        "number": 244,
        "word": "注文",
        "kana": "ちゅうもん"
      }
    ]
  },
  {
    "id": "kanji-7981",
    "char": "禁",
    "category": "society",
    "meaning": "larangan",
    "on": [
      "キン"
    ],
    "kun": [],
    "english": "",
    "strokes": null,
    "radical": "",
    "mnemonic": "",
    "level": "N4",
    "scope": "a2",
    "order": 287,
    "examples": [
      {
        "word": "禁止",
        "kana": "きんし",
        "meaning": "dilarang",
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 349
      }
    ],
    "source": {
      "id": "marugoto-a2",
      "label": "Marugoto A2",
      "pages": [
        4,
        5
      ]
    },
    "sources": [
      {
        "source": "marugoto-a2-2",
        "page": 5,
        "number": 349,
        "word": "禁止",
        "kana": "きんし"
      },
      {
        "source": "marugoto-a2-b1",
        "page": 4,
        "number": 349,
        "word": "禁止",
        "kana": "きんし"
      }
    ]
  }
];
const KANJI_N4_CATEGORIES = [{"id": "numbers", "name": "Angka & hitungan"}, {"id": "nature", "name": "Alam & cuaca"}, {"id": "people", "name": "Orang & keluarga"}, {"id": "body", "name": "Tubuh & kesehatan"}, {"id": "position", "name": "Letak & arah"}, {"id": "time", "name": "Waktu & urutan"}, {"id": "learning", "name": "Belajar & bahasa"}, {"id": "places", "name": "Tempat & kendaraan"}, {"id": "qualities", "name": "Ukuran & sifat"}, {"id": "actions", "name": "Kegiatan sehari-hari"}, {"id": "food", "name": "Makanan & minuman"}, {"id": "work", "name": "Pekerjaan & layanan"}, {"id": "culture", "name": "Budaya & hiburan"}, {"id": "clothes", "name": "Pakaian"}, {"id": "society", "name": "Aturan & masyarakat"}];
function kanjiEntries(level=(typeof prefs!=='undefined'?prefs.level:'N5')){return level==='N4'?KANJI_N4_DATA:KANJI_DATA}
function kanjiCategories(level=(typeof prefs!=='undefined'?prefs.level:'N5')){return level==='N4'?KANJI_N4_CATEGORIES:KANJI_CATEGORIES}
