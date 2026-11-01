/* Dialog adaptasi untuk pemula. audioId opsional mencegah pemakaian rekaman lama setelah revisi naskah.
   Hori/H = wanita, Ryota/R = pria. Referensi dan status audio: data/KAIWA.md. */
window.GAKU_KAIWA_DATA = [
  {
    "id": "jiko",
    "ic": "✦",
    "judul": "Perkenalan",
    "sub": "Kenalan dengan teman baru: nama, umur, hobi, dan tempat tinggal.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://lbifib.ui.ac.id/id/blog/artikel/percakapan-bahasa-jepang-tentang-teman",
    "lines": [
      {
        "who": "npc",
        "jp": "こんにちは。はじめまして。ほりです。",
        "rom": "Konnichiwa. Hajimemashite. Hori desu.",
        "id": "Halo. Salam kenal. Saya Hori."
      },
      {
        "who": "me",
        "jp": "りょうたです。どうぞ よろしく おねがいします。",
        "rom": "Ryōta desu. Dōzo yoroshiku onegaishimasu.",
        "id": "Saya Ryota. Senang berkenalan denganmu.",
        "salah": [
          {
            "jp": "みずを ください。",
            "why": "Ini meminta air. Saat pertama berkenalan, sebutkan nama dan sampaikan salam kenal."
          },
          {
            "jp": "いくらですか。",
            "why": "Ini menanyakan harga. Hori sedang memperkenalkan diri, jadi balas dengan perkenalanmu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "こちらこそ。りょうたさんは がくせいですか。",
        "rom": "Kochira koso. Ryōta-san wa gakusei desu ka.",
        "id": "Saya juga senang berkenalan. Ryota, apakah kamu pelajar?"
      },
      {
        "who": "me",
        "jp": "はい。にほんごを べんきょうしています。",
        "rom": "Hai. Nihongo o benkyō shite imasu.",
        "id": "Ya. Saya sedang belajar bahasa Jepang.",
        "salah": [
          {
            "jp": "はい、あめです。",
            "why": "Ini berarti “Ya, hujan”. Hori menanyakan apakah kamu pelajar."
          },
          {
            "jp": "えきで あいましょう。",
            "why": "Ini mengajak bertemu di stasiun. Jawab dulu pertanyaan tentang statusmu sebagai pelajar."
          }
        ],
        "note": "べんきょうしています menyatakan kegiatan yang sedang dijalani: di sini, belajar bahasa Jepang."
      },
      {
        "who": "npc",
        "jp": "そうですか。しつれいですが、なんさいですか。",
        "rom": "Sō desu ka. Shitsurei desu ga, nansai desu ka.",
        "id": "Begitu ya. Maaf kalau boleh tahu, berapa umurmu?"
      },
      {
        "who": "me",
        "jp": "にじゅういっさいです。ほりさんは？",
        "rom": "Nijū issai desu. Hori-san wa?",
        "id": "Saya 21 tahun. Kalau Hori?",
        "salah": [
          {
            "jp": "いちじ はんです。",
            "why": "Ini menyebut jam setengah dua. Umur memakai “〜さい”, bukan “〜じ”."
          },
          {
            "jp": "ひとりです。",
            "why": "Ini berarti “Satu orang”. Pertanyaannya tentang umur, bukan jumlah orang."
          }
        ],
        "note": "にじゅういっさい = 21 tahun. ほりさんは？ adalah pertanyaan singkat: “Kalau Hori?”"
      },
      {
        "who": "npc",
        "jp": "わたしも にじゅういっさいです。なにが すきですか。",
        "rom": "Watashi mo nijū issai desu. Nani ga suki desu ka.",
        "id": "Saya juga 21 tahun. Apa yang kamu sukai?"
      },
      {
        "who": "me",
        "jp": "おんがくが すきです。よく ギターを ひきます。",
        "rom": "Ongaku ga suki desu. Yoku gitā o hikimasu.",
        "id": "Saya suka musik. Saya sering bermain gitar.",
        "salah": [
          {
            "jp": "おんがくは にせんえんです。",
            "why": "Ini menyebut harga musik. Untuk menceritakan kesukaan, gunakan “〜が すきです”."
          },
          {
            "jp": "きのうは あめでした。",
            "why": "Ini membahas cuaca kemarin. Hori sedang menanyakan hal yang kamu sukai."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "いいですね。わたしは りょうりが すきです。",
        "rom": "Ii desu ne. Watashi wa ryōri ga suki desu.",
        "id": "Asyik ya. Saya suka memasak."
      },
      {
        "who": "me",
        "jp": "そうですか。どんな りょうりを つくりますか。",
        "rom": "Sō desu ka. Donna ryōri o tsukurimasu ka.",
        "id": "Begitu ya. Masakan seperti apa yang kamu buat?",
        "salah": [
          {
            "jp": "ギターは えきの となりです。",
            "why": "Ini membahas lokasi gitar. Lanjutkan obrolan tentang masakan yang Hori sukai."
          },
          {
            "jp": "りょうりを たべませんでしたか。",
            "why": "Ini menanyakan apakah Hori tidak makan. Pertanyaan tentang jenis masakan lebih sesuai dengan obrolan ini."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "よく カレーを つくります。りょうたさんは どこに すんでいますか。",
        "rom": "Yoku karē o tsukurimasu. Ryōta-san wa doko ni sunde imasu ka.",
        "id": "Saya sering membuat kari. Ryota tinggal di mana?"
      },
      {
        "who": "me",
        "jp": "なごやに すんでいます。ほりさんは？",
        "rom": "Nagoya ni sunde imasu. Hori-san wa?",
        "id": "Saya tinggal di Nagoya. Kalau Hori?",
        "salah": [
          {
            "jp": "あした いきます。",
            "why": "Ini menyebut waktu pergi besok. Hori menanyakan tempat tinggalmu sekarang."
          },
          {
            "jp": "なごやは おいしいです。",
            "why": "Ini menyatakan sebuah kota enak rasanya. Sebutkan tempat tinggal dengan “〜に すんでいます”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おおさかに すんでいます。また おはなししましょう。",
        "rom": "Ōsaka ni sunde imasu. Mata ohanashi shimashō.",
        "id": "Saya tinggal di Osaka. Kita mengobrol lagi kapan-kapan, ya."
      },
      {
        "who": "me",
        "jp": "はい、ぜひ。また あいましょう。",
        "rom": "Hai, zehi. Mata aimashō.",
        "id": "Ya, tentu. Sampai bertemu lagi.",
        "salah": [
          {
            "jp": "ただいま。",
            "why": "Ini ucapan saat pulang ke rumah. Kalian sedang mengakhiri obrolan perkenalan."
          },
          {
            "jp": "いただきます。",
            "why": "Ini ucapan sebelum makan. Untuk berpisah, kamu bisa mengatakan “また あいましょう”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "じゃあ、また。",
        "rom": "Jā, mata.",
        "id": "Kalau begitu, sampai jumpa."
      },
      {
        "who": "me",
        "jp": "またね。",
        "rom": "Mata ne.",
        "id": "Sampai jumpa.",
        "salah": [
          {
            "jp": "おかえりなさい。",
            "why": "Ini menyambut orang yang pulang. Hori sedang berpamitan, jadi balas dengan salam perpisahan."
          },
          {
            "jp": "いらっしゃいませ。",
            "why": "Ini menyambut pelanggan di toko. Sekarang kalian sedang berpisah."
          }
        ]
      }
    ],
    "audioId": "kenalan",
    "playerName": "Ryota"
  },
  {
    "id": "kai",
    "ic": "▣",
    "judul": "Belanja",
    "sub": "Tanyakan harga dan beli barang di toko.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "いらっしゃいませ。",
        "rom": "Irasshaimase.",
        "id": "Selamat datang."
      },
      {
        "who": "me",
        "jp": "すみません。この ノートは いくらですか。",
        "rom": "Sumimasen. Kono nōto wa ikura desu ka.",
        "id": "Permisi. Berapa harga buku catatan ini?",
        "salah": [
          {
            "jp": "おやすみなさい。",
            "why": "Ini ucapan sebelum tidur. Di toko, kamu bisa menanyakan harga dengan “いくらですか”."
          },
          {
            "jp": "わたしは がくせいです。",
            "why": "Ini berarti “Saya pelajar”. Untuk membeli buku, tanyakan harganya dahulu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "さんびゃくえんです。",
        "rom": "Sanbyaku-en desu.",
        "id": "Harganya 300 yen."
      },
      {
        "who": "me",
        "jp": "では、これを ください。",
        "rom": "Dewa, kore o kudasai.",
        "id": "Kalau begitu, saya beli yang ini.",
        "salah": [
          {
            "jp": "はじめまして。",
            "why": "Ini untuk pertama kali berkenalan. Gunakan “これを ください” untuk meminta barang yang ingin dibeli."
          },
          {
            "jp": "いってきます。",
            "why": "Ini biasanya diucapkan saat meninggalkan rumah. Di sini kamu sedang membeli buku catatan."
          }
        ],
        "note": "これをください dipakai untuk meminta barang yang ingin dibeli: “Yang ini, tolong.”"
      },
      {
        "who": "npc",
        "jp": "ほかに なにか ありますか。",
        "rom": "Hoka ni nanika arimasu ka.",
        "id": "Ada barang lain yang diinginkan?"
      },
      {
        "who": "me",
        "jp": "いいえ、これだけです。",
        "rom": "Iie, kore dake desu.",
        "id": "Tidak, ini saja.",
        "salah": [
          {
            "jp": "はい、とうきょうへ いきます。",
            "why": "Ini menyebut tujuan perjalanan. Hori bertanya apakah ada barang lain yang ingin dibeli."
          },
          {
            "jp": "いってきます。",
            "why": "Ini diucapkan saat meninggalkan rumah. Di toko, jawab pertanyaan Hori tentang barang lain."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ぜんぶで さんびゃくえんです。",
        "rom": "Zenbu de sanbyaku-en desu.",
        "id": "Totalnya 300 yen."
      },
      {
        "who": "me",
        "jp": "はい、どうぞ。ありがとうございました。",
        "rom": "Hai, dōzo. Arigatō gozaimashita.",
        "id": "Ya, ini uangnya. Terima kasih banyak.",
        "salah": [
          {
            "jp": "もしもし。",
            "why": "Ini sapaan saat telepon. Kamu sedang membayar langsung di toko."
          },
          {
            "jp": "わたしは りょうたです。",
            "why": "Ini memperkenalkan nama. Hori menyebut total harga, jadi serahkan uang dan ucapkan terima kasih."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "resu",
    "ic": "♨",
    "judul": "Restoran",
    "sub": "Pesan makanan dan minuman dengan sopan.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "いらっしゃいませ。ごちゅうもんは？",
        "rom": "Irasshaimase. Gochūmon wa?",
        "id": "Selamat datang. Mau pesan apa?"
      },
      {
        "who": "me",
        "jp": "カレーを ひとつ おねがいします。",
        "rom": "Karē o hitotsu onegaishimasu.",
        "id": "Saya pesan satu porsi kari.",
        "salah": [
          {
            "jp": "わたしは りょうたです。",
            "why": "Ini untuk memperkenalkan nama. Pelayan sedang menanyakan pesananmu."
          },
          {
            "jp": "カレーは どこですか。",
            "why": "Ini menanyakan lokasi kari. Untuk memesan, gunakan “カレーを … おねがいします”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おのみものは？",
        "rom": "Onomimono wa?",
        "id": "Untuk minumannya?"
      },
      {
        "who": "me",
        "jp": "みずを おねがいします。",
        "rom": "Mizu o onegaishimasu.",
        "id": "Air putih, tolong.",
        "salah": [
          {
            "jp": "きのう いきました。",
            "why": "Ini berarti “Kemarin saya pergi”. Pertanyaannya tentang minuman yang kamu inginkan."
          },
          {
            "jp": "カレーは おいしいです。",
            "why": "Ini berarti “Karinya enak”. Hori sedang menanyakan minuman, jadi sebutkan minumannya."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おまたせしました。カレーと みずです。",
        "rom": "Omatase shimashita. Karē to mizu desu.",
        "id": "Terima kasih sudah menunggu. Ini kari dan air putihnya."
      },
      {
        "who": "me",
        "jp": "いただきます。",
        "rom": "Itadakimasu.",
        "id": "Saya mulai makan, ya.",
        "salah": [
          {
            "jp": "ごちそうさまでした。",
            "why": "Ini diucapkan setelah selesai makan, sedangkan makananmu baru datang."
          },
          {
            "jp": "いってきます。",
            "why": "Ini diucapkan saat berangkat dari rumah. Sekarang kamu akan mulai makan."
          }
        ],
        "note": "いただきます diucapkan oleh orang yang akan makan, sebagai ungkapan syukur dan penghargaan atas makanan."
      },
      {
        "who": "npc",
        "jp": "カレーは どうですか。",
        "rom": "Karē wa dō desu ka.",
        "id": "Bagaimana karinya?"
      },
      {
        "who": "me",
        "jp": "とても おいしいです。ごちそうさまでした。",
        "rom": "Totemo oishii desu. Gochisōsama deshita.",
        "id": "Enak sekali. Terima kasih atas makanannya.",
        "salah": [
          {
            "jp": "あしたは あめです。",
            "why": "Ini membahas cuaca besok. Hori menanyakan rasa kari yang kamu makan."
          },
          {
            "jp": "えきは どこですか。",
            "why": "Ini menanyakan lokasi stasiun. Hori menanyakan pendapatmu tentang rasa kari."
          }
        ],
        "note": "ごちそうさまでした diucapkan setelah selesai makan untuk berterima kasih atas hidangannya."
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "michi",
    "ic": "⌖",
    "judul": "Tanya Jalan",
    "sub": "Tanyakan lokasi bangunan dan pahami petunjuk arah.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "どうしましたか。",
        "rom": "Dō shimashita ka.",
        "id": "Ada apa? Ada yang bisa dibantu?"
      },
      {
        "who": "me",
        "jp": "すみません。ゆうびんきょくは どこですか。",
        "rom": "Sumimasen. Yūbinkyoku wa doko desu ka.",
        "id": "Permisi. Di mana kantor pos?",
        "salah": [
          {
            "jp": "ゆうびんきょくは なんじですか。",
            "why": "Ini menanyakan jam. Untuk menanyakan lokasi, gunakan “どこですか”."
          },
          {
            "jp": "コーヒーを ください。",
            "why": "Ini untuk meminta kopi. Kamu sedang mencari lokasi kantor pos."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ゆうびんきょくは あそこです。ぎんこうの となりに あります。",
        "rom": "Yūbinkyoku wa asoko desu. Ginkō no tonari ni arimasu.",
        "id": "Kantor pos ada di sana. Letaknya di sebelah bank."
      },
      {
        "who": "me",
        "jp": "わかりました。ありがとうございます。",
        "rom": "Wakarimashita. Arigatō gozaimasu.",
        "id": "Saya mengerti. Terima kasih banyak.",
        "salah": [
          {
            "jp": "おやすみなさい。",
            "why": "Ini ucapan sebelum tidur. Di sini, kamu berterima kasih atas petunjuk arah."
          },
          {
            "jp": "いくらですか。",
            "why": "Ini menanyakan harga. Hori baru saja menunjukkan arah, jadi ucapkan terima kasih."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ゆうびんきょくは ちかいですよ。あるいて ごふんです。",
        "rom": "Yūbinkyoku wa chikai desu yo. Aruite gofun desu.",
        "id": "Kantor pos dekat kok. Jalan kaki lima menit."
      },
      {
        "who": "me",
        "jp": "じゃあ、あるいて いきます。",
        "rom": "Jā, aruite ikimasu.",
        "id": "Kalau begitu, saya jalan kaki saja.",
        "salah": [
          {
            "jp": "じゃあ、ごちそうさまでした。",
            "why": "Ini diucapkan setelah makan. Hori menjelaskan jarak ke kantor pos."
          },
          {
            "jp": "じゃあ、さんびゃくえんです。",
            "why": "Ini menyebut harga 300 yen. Tanggapi penjelasan jarak dengan cara berangkatmu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ぎんこうの となりですよ。わかりますか。",
        "rom": "Ginkō no tonari desu yo. Wakarimasu ka.",
        "id": "Di sebelah bank. Kamu paham?"
      },
      {
        "who": "me",
        "jp": "はい、わかります。ありがとうございました。",
        "rom": "Hai, wakarimasu. Arigatō gozaimashita.",
        "id": "Ya, saya paham. Terima kasih banyak.",
        "salah": [
          {
            "jp": "いいえ、いりません。",
            "why": "Ini berarti “Tidak perlu”. Hori menanyakan apakah kamu paham petunjuknya."
          },
          {
            "jp": "ただいま。",
            "why": "Ini diucapkan saat pulang ke rumah. Kamu sedang berterima kasih atas petunjuk arah."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "densha",
    "ic": "◷",
    "judul": "Kereta & Waktu",
    "sub": "Tanyakan jadwal kereta dan lama perjalanan.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "いらっしゃいませ。どこへ いきますか。",
        "rom": "Irasshaimase. Doko e ikimasu ka.",
        "id": "Selamat datang. Mau pergi ke mana?"
      },
      {
        "who": "me",
        "jp": "おおさかへ いきます。つぎの でんしゃは なんじですか。",
        "rom": "Ōsaka e ikimasu. Tsugi no densha wa nanji desu ka.",
        "id": "Saya mau ke Osaka. Kereta berikutnya jam berapa?",
        "salah": [
          {
            "jp": "おおさかは いくらですか。",
            "why": "Ini menanyakan harga. Kamu perlu menyebut tujuan dan menanyakan jam dengan “なんじ”."
          },
          {
            "jp": "ふたりです。",
            "why": "Ini menyebut jumlah orang (dua orang). Pertanyaan Hori tentang tujuan perjalananmu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "じゅうじ はんです。1ばんせんから でます。",
        "rom": "Jūji han desu. Ichi-ban-sen kara demasu.",
        "id": "Pukul 10.30. Berangkat dari peron 1.",
        "note": "じゅうじ はん = pukul 10.30. 1ばんせん menunjukkan jalur/peron nomor 1; jam pagi atau malam belum disebutkan."
      },
      {
        "who": "me",
        "jp": "おおさかまで どのくらい かかりますか。",
        "rom": "Ōsaka made dono kurai kakarimasu ka.",
        "id": "Sampai Osaka butuh waktu berapa lama?",
        "salah": [
          {
            "jp": "おおさかから きました。",
            "why": "Ini berarti “Saya datang dari Osaka”. Kamu sedang menanyakan lama perjalanan ke Osaka."
          },
          {
            "jp": "おなまえは なんですか。",
            "why": "Ini menanyakan nama. Untuk menanyakan lama perjalanan, gunakan “どのくらい”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おおさかまで にじかんぐらいです。",
        "rom": "Ōsaka made nijikan gurai desu.",
        "id": "Sampai Osaka sekitar dua jam."
      },
      {
        "who": "me",
        "jp": "わかりました。きっぷを いちまい ください。",
        "rom": "Wakarimashita. Kippu o ichimai kudasai.",
        "id": "Saya mengerti. Tolong satu tiket.",
        "salah": [
          {
            "jp": "おおさかから きました。",
            "why": "Ini berarti “Saya datang dari Osaka”. Kamu perlu membeli tiket menuju Osaka."
          },
          {
            "jp": "おやすみなさい。",
            "why": "Ini ucapan sebelum tidur. Di stasiun, mintalah tiket dengan “ください”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "いちまい にせんえんです。いってらっしゃい。",
        "rom": "Ichimai nisen-en desu. Itterasshai.",
        "id": "Satu tiket 2000 yen. Selamat jalan."
      },
      {
        "who": "me",
        "jp": "いってきます。ありがとうございます。",
        "rom": "Ittekimasu. Arigatō gozaimasu.",
        "id": "Saya berangkat. Terima kasih.",
        "salah": [
          {
            "jp": "ただいま。",
            "why": "Ini diucapkan saat pulang ke rumah. Kamu sedang berangkat naik kereta."
          },
          {
            "jp": "いただきます。",
            "why": "Ini diucapkan sebelum makan. Hori melepasmu berangkat, jadi jawab dengan “いってきます”."
          }
        ],
        "note": "いってきます adalah salam saat pergi dengan maksud kembali. Balasannya いってらっしゃい. Di loket, berterima kasih saja juga wajar."
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "nichi",
    "ic": "☼",
    "judul": "Rutinitas Harian",
    "sub": "Ceritakan kegiatanmu dari pagi sampai malam.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "アディさんは まいあさ なんじに おきますか。",
        "rom": "Adi-san wa maiasa nanji ni okimasu ka.",
        "id": "Adi, kamu bangun jam berapa setiap pagi?"
      },
      {
        "who": "me",
        "jp": "ろくじに おきます。それから ごはんを たべます。",
        "rom": "Rokuji ni okimasu. Sorekara gohan o tabemasu.",
        "id": "Saya bangun pukul enam. Setelah itu, saya makan.",
        "salah": [
          {
            "jp": "ろくじは どこですか。",
            "why": "Ini menanyakan tempat. Hori menanyakan jam bangunmu, jadi sebutkan jamnya."
          },
          {
            "jp": "さんびゃくえんです。",
            "why": "Ini menyebut harga 300 yen. Pertanyaannya tentang jam bangun tidurmu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "そうですか。ひるまは なにを しますか。",
        "rom": "Sō desu ka. Hiruma wa nani o shimasu ka.",
        "id": "Begitu ya. Siang hari kamu melakukan apa?"
      },
      {
        "who": "me",
        "jp": "がっこうで にほんごを べんきょうします。よる テレビは みません。",
        "rom": "Gakkō de nihongo o benkyō shimasu. Yoru terebi wa mimasen.",
        "id": "Saya belajar bahasa Jepang di sekolah. Malam hari saya tidak menonton TV.",
        "salah": [
          {
            "jp": "きのう おおさかへ いきました。",
            "why": "Ini membahas kemarin. Hori menanyakan kegiatan rutin di siang hari."
          },
          {
            "jp": "もしもし、アディです。",
            "why": "Ini sapaan saat mengangkat telepon. Kamu sedang diajak bicara langsung, bukan lewat telepon."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "よるは なんじに ねますか。",
        "rom": "Yoru wa nanji ni nemasu ka.",
        "id": "Malam hari kamu tidur jam berapa?"
      },
      {
        "who": "me",
        "jp": "じゅうじに ねます。",
        "rom": "Jūji ni nemasu.",
        "id": "Saya tidur jam sepuluh.",
        "salah": [
          {
            "jp": "じゅうえんです。",
            "why": "Ini menyebut harga 10 yen. Hori menanyakan jam tidurmu."
          },
          {
            "jp": "ひるごはんを たべました。",
            "why": "Ini berarti “Saya sudah makan siang”. Pertanyaannya tentang jam tidur di malam hari."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "はやいですね。まいにち べんきょうしますか。",
        "rom": "Hayai desu ne. Mainichi benkyō shimasu ka.",
        "id": "Tidurnya awal, ya. Apakah kamu belajar setiap hari?"
      },
      {
        "who": "me",
        "jp": "はい、まいにち すこし べんきょうします。",
        "rom": "Hai, mainichi sukoshi benkyō shimasu.",
        "id": "Ya, setiap hari saya belajar sedikit.",
        "salah": [
          {
            "jp": "はい、あしたは あめです。",
            "why": "Ini membahas cuaca besok. Hori menanyakan kebiasaan belajarmu."
          },
          {
            "jp": "はじめまして、アディです。",
            "why": "Ini perkenalan pertama. Kalian sudah saling kenal, jadi jawab pertanyaan tentang belajar."
          }
        ]
      }
    ],
    "playerName": "Adi"
  },
  {
    "id": "yaku",
    "ic": "♪",
    "judul": "Mengajak Teman",
    "sub": "Ajak dan terima ajakan untuk pergi bersama.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "アディさん、あした ひまですか。",
        "rom": "Adi-san, ashita hima desu ka.",
        "id": "Adi, apakah besok kamu senggang?"
      },
      {
        "who": "me",
        "jp": "はい、ひまです。どうしてですか。",
        "rom": "Hai, hima desu. Dōshite desu ka.",
        "id": "Ya, saya senggang. Kenapa?",
        "salah": [
          {
            "jp": "ごちそうさまでした。",
            "why": "Ini diucapkan setelah makan. Hori menanyakan apakah besok kamu senggang."
          },
          {
            "jp": "ゆうびんきょくは どこですか。",
            "why": "Ini menanyakan lokasi kantor pos. Jawab dulu pertanyaan Hori tentang besok."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "いっしょに えいがを みませんか。",
        "rom": "Issho ni eiga o mimasen ka.",
        "id": "Mau menonton film bersama?"
      },
      {
        "who": "me",
        "jp": "いいですね。みましょう。",
        "rom": "Ii desu ne. Mimashō.",
        "id": "Wah, boleh. Ayo kita tonton.",
        "salah": [
          {
            "jp": "いいえ、みませんでした。",
            "why": "Ini berarti “Saya tidak menonton” (lampau). Hori mengajak untuk besok, jadi terima dengan “みましょう”."
          },
          {
            "jp": "わたしは がくせいです。",
            "why": "Ini berarti “Saya pelajar”. Hori sedang mengajak menonton film, jadi tanggapi ajakannya."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "なんじに あいましょうか。",
        "rom": "Nanji ni aimashō ka.",
        "id": "Mau bertemu jam berapa?"
      },
      {
        "who": "me",
        "jp": "ごじに えきで あいましょう。",
        "rom": "Goji ni eki de aimashō.",
        "id": "Ayo bertemu jam lima di stasiun.",
        "salah": [
          {
            "jp": "ごじは さんびゃくえんです。",
            "why": "Ini mencampur jam dengan harga. Hori menanyakan jam janjian, jadi usulkan waktu dan tempat."
          },
          {
            "jp": "ごじに いきました。",
            "why": "Ini bentuk lampau, “Saya pergi jam lima”. Janjinya untuk besok, jadi gunakan “あいましょう”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "はい。じゃあ、ごじに えきの まえで。",
        "rom": "Hai. Jā, goji ni eki no mae de.",
        "id": "Baik. Kalau begitu, jam lima di depan stasiun."
      },
      {
        "who": "me",
        "jp": "はい。たのしみです。",
        "rom": "Hai. Tanoshimi desu.",
        "id": "Ya. Saya menantikannya.",
        "salah": [
          {
            "jp": "いいえ、いきません。",
            "why": "Ini berarti “Saya tidak pergi”. Kamu sudah menerima ajakan, jadi tanggapi dengan positif."
          },
          {
            "jp": "ごちそうさまでした。",
            "why": "Ini diucapkan setelah makan. Hori sedang menyepakati janji bertemu."
          }
        ]
      }
    ],
    "playerName": "Adi"
  },
  {
    "id": "kyoka",
    "ic": "✎",
    "judul": "Izin & Minta Tolong",
    "sub": "Minta izin dan minta bantuan dengan sopan.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "ここは ちょっと あついですね。",
        "rom": "Koko wa chotto atsui desu ne.",
        "id": "Di sini agak panas, ya."
      },
      {
        "who": "me",
        "jp": "そうですね。まどを あけても いいですか。",
        "rom": "Sō desu ne. Mado o akete mo ii desu ka.",
        "id": "Iya ya. Bolehkah saya membuka jendela?",
        "salah": [
          {
            "jp": "まどは いくらですか。",
            "why": "Ini menanyakan harga jendela. Kamu ingin meminta izin membuka jendela."
          },
          {
            "jp": "まどを あけませんでした。",
            "why": "Ini berarti “Saya tidak membuka jendela”. Untuk meminta izin, gunakan “〜ても いいですか”."
          }
        ],
        "note": "〜てもいいですか meminta izin melakukan sesuatu. あけてもいいですか = “Bolehkah saya membuka?”"
      },
      {
        "who": "npc",
        "jp": "ええ、どうぞ。それから、その ノートを とって ください。",
        "rom": "Ee, dōzo. Sorekara, sono nōto o totte kudasai.",
        "id": "Ya, silakan. Lalu, tolong ambilkan buku catatan itu."
      },
      {
        "who": "me",
        "jp": "はい、わかりました。どうぞ。",
        "rom": "Hai, wakarimashita. Dōzo.",
        "id": "Baik, saya mengerti. Ini, silakan.",
        "salah": [
          {
            "jp": "おなまえは なんですか。",
            "why": "Ini menanyakan nama. Hori sedang meminta tolong, jadi jawab dengan “わかりました”."
          },
          {
            "jp": "いただきます。",
            "why": "Ini diucapkan sebelum makan. Di sini, kamu menanggapi permintaan tolong."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "アディさん、でんわを かりても いいですか。",
        "rom": "Adi-san, denwa o karite mo ii desu ka.",
        "id": "Adi, bolehkah saya pinjam teleponnya?"
      },
      {
        "who": "me",
        "jp": "ええ、どうぞ。",
        "rom": "Ee, dōzo.",
        "id": "Ya, silakan.",
        "salah": [
          {
            "jp": "いいえ、さんびゃくえんです。",
            "why": "Ini menyebut harga 300 yen. Hori meminta izin meminjam telepon, jadi beri jawabanmu."
          },
          {
            "jp": "はい、いただきます。",
            "why": "Ini diucapkan sebelum makan. Hori menanyakan izin meminjam telepon."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ありがとうございます。すみません、ドアを しめて ください。",
        "rom": "Arigatō gozaimasu. Sumimasen, doa o shimete kudasai.",
        "id": "Terima kasih. Maaf, tolong tutup pintunya."
      },
      {
        "who": "me",
        "jp": "はい、わかりました。しめます。",
        "rom": "Hai, wakarimashita. Shimemasu.",
        "id": "Baik, saya mengerti. Saya tutup.",
        "salah": [
          {
            "jp": "ごちそうさまでした。",
            "why": "Ini diucapkan setelah makan. Hori meminta tolong menutup pintu."
          },
          {
            "jp": "はじめまして。",
            "why": "Ini untuk pertama kali berkenalan. Tanggapi permintaan tolong dengan “わかりました”."
          }
        ]
      }
    ],
    "playerName": "Adi"
  },
  {
    "id": "denwa",
    "ic": "☎",
    "judul": "Telepon",
    "sub": "Telepon sekolah dan tanyakan apakah seseorang ada.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "はい、さくらがっこうです。",
        "rom": "Hai, Sakura-gakkō desu.",
        "id": "Halo, ini Sekolah Sakura."
      },
      {
        "who": "me",
        "jp": "もしもし、アディです。やまださんは いますか。",
        "rom": "Moshi moshi, Adi desu. Yamada-san wa imasu ka.",
        "id": "Halo, saya Adi. Apakah Yamada ada?",
        "salah": [
          {
            "jp": "やまださんは いくらですか。",
            "why": "Ini menanyakan harga seseorang. Untuk menanyakan apakah orangnya ada, gunakan “いますか”."
          },
          {
            "jp": "いらっしゃいませ。",
            "why": "Ini sapaan pegawai kepada pelanggan. Kamu yang menelepon, jadi sebutkan namamu dan tanyakan orangnya."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "すみません、やまださんは いま いません。さんじに かえります。",
        "rom": "Sumimasen, Yamada-san wa ima imasen. Sanji ni kaerimasu.",
        "id": "Maaf, Yamada sedang tidak ada. Ia kembali ke sini pukul tiga.",
        "note": "Dalam konteks telepon ini, かえります berarti kembali ke tempat asalnya, yaitu sekolah. Setelah ia kembali pukul tiga, Adi diminta menelepon pukul empat."
      },
      {
        "who": "me",
        "jp": "わかりました。では、また でんわします。",
        "rom": "Wakarimashita. Dewa, mata denwa shimasu.",
        "id": "Baik. Kalau begitu, saya telepon lagi.",
        "salah": [
          {
            "jp": "はじめまして。よろしく おねがいします。",
            "why": "Ini ucapan perkenalan pertama. Hori memberi kabar Yamada tidak ada, jadi tanggapi dengan “わかりました”."
          },
          {
            "jp": "カレーを ひとつ おねがいします。",
            "why": "Ini untuk memesan kari. Hori memberi kabar bahwa Yamada tidak ada, jadi tanggapi kabarnya."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "はい。よじに でんわして ください。",
        "rom": "Hai. Yoji ni denwa shite kudasai.",
        "id": "Baik. Tolong telepon lagi jam empat."
      },
      {
        "who": "me",
        "jp": "はい、よじに でんわします。",
        "rom": "Hai, yoji ni denwa shimasu.",
        "id": "Baik, saya telepon jam empat.",
        "salah": [
          {
            "jp": "よじは どこですか。",
            "why": "Ini menanyakan tempat. Hori meminta kamu menelepon lagi pada jam tertentu."
          },
          {
            "jp": "よじに いきました。",
            "why": "Ini berarti “Saya pergi jam empat” (lampau). Janjinya untuk menelepon nanti."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おなまえは アディさんですね。",
        "rom": "Onamae wa Adi-san desu ne.",
        "id": "Nama Anda Adi, ya."
      },
      {
        "who": "me",
        "jp": "はい、アディです。しつれいします。",
        "rom": "Hai, Adi desu. Shitsurei shimasu.",
        "id": "Ya, saya Adi. Permisi, saya akhiri teleponnya.",
        "salah": [
          {
            "jp": "いいえ、やまだです。",
            "why": "Ini berarti “Bukan, saya Yamada”. Kamu sudah menyebut dirimu Adi."
          },
          {
            "jp": "おやすみなさい。",
            "why": "Ini ucapan sebelum tidur. Telepon akan ditutup dengan “しつれいします”."
          }
        ],
        "note": "しつれいします adalah ungkapan sopan saat mengakhiri percakapan atau berpamitan."
      }
    ],
    "playerName": "Adi"
  },
  {
    "id": "kansou",
    "ic": "❀",
    "judul": "Cerita Liburan",
    "sub": "Ceritakan kesan liburan, cuaca, dan alasannya.",
    "npc": "Hori",
    "gender": "female",
    "lines": [
      {
        "who": "npc",
        "jp": "おかえりなさい。りょこうは どうでしたか。",
        "rom": "Okaerinasai. Ryokō wa dō deshita ka.",
        "id": "Selamat datang kembali. Bagaimana liburannya?"
      },
      {
        "who": "me",
        "jp": "たのしかったです。てんきも よかったです。",
        "rom": "Tanoshikatta desu. Tenki mo yokatta desu.",
        "id": "Menyenangkan. Cuacanya juga bagus.",
        "salah": [
          {
            "jp": "あしたは あついです。",
            "why": "Ini membahas cuaca besok. Hori bertanya tentang liburan yang sudah lewat, jadi gunakan bentuk lampau “〜かったです”."
          },
          {
            "jp": "ふたりです。",
            "why": "Ini menyebut jumlah orang (dua orang). Hori menanyakan kesanmu tentang liburan."
          }
        ],
        "note": "たのしかったです dan よかったです menyatakan kesan tentang hal yang sudah lewat."
      },
      {
        "who": "npc",
        "jp": "いいですね。どうして おおさかへ いきましたか。",
        "rom": "Ii desu ne. Dōshite Ōsaka e ikimashita ka.",
        "id": "Bagus ya. Kenapa kamu pergi ke Osaka?"
      },
      {
        "who": "me",
        "jp": "たこやきが すきですから。",
        "rom": "Takoyaki ga suki desu kara.",
        "id": "Karena saya suka takoyaki.",
        "salah": [
          {
            "jp": "たこやきを ください。",
            "why": "Ini untuk meminta takoyaki. Hori menanyakan alasan, jadi jawab dengan “〜から”."
          },
          {
            "jp": "さんじに かえります。",
            "why": "Ini berarti “Saya pulang jam tiga”. Pertanyaannya tentang alasan pergi ke Osaka."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "たこやきは どうでしたか。",
        "rom": "Takoyaki wa dō deshita ka.",
        "id": "Bagaimana takoyakinya?"
      },
      {
        "who": "me",
        "jp": "とても おいしかったです。",
        "rom": "Totemo oishikatta desu.",
        "id": "Enak sekali.",
        "salah": [
          {
            "jp": "あした たべます。",
            "why": "Ini berarti “Saya makan besok”. Hori menanyakan takoyaki yang sudah kamu makan."
          },
          {
            "jp": "たこやきを ください。",
            "why": "Ini untuk memesan takoyaki. Hori menanyakan kesanmu, bukan kamu sedang membeli."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おおさかは さむかったですか。",
        "rom": "Ōsaka wa samukatta desu ka.",
        "id": "Apakah Osaka dingin?"
      },
      {
        "who": "me",
        "jp": "いいえ、さむくなかったです。あたたかかったです。",
        "rom": "Iie, samukunakatta desu. Atatakakatta desu.",
        "id": "Tidak, tidak dingin. Hangat.",
        "salah": [
          {
            "jp": "いいえ、さんびゃくえんでした。",
            "why": "Ini menyebut harga 300 yen. Hori menanyakan cuaca di Osaka."
          },
          {
            "jp": "いいえ、あしたは さむいです。",
            "why": "Ini membahas cuaca besok. Hori bertanya tentang cuaca saat kamu di Osaka."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "shusshin",
    "ic": "⌂",
    "judul": "Asal & Tempat Tinggal",
    "sub": "Saling bertanya negara asal dan tempat tinggal sebelumnya.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://blog.schoters.com/percakapan-bahasa-jepang",
    "lines": [
      {
        "who": "npc",
        "jp": "りょうたさんは どこの くにから きましたか。",
        "rom": "Ryōta-san wa doko no kuni kara kimashita ka.",
        "id": "Ryota berasal dari negara mana?"
      },
      {
        "who": "me",
        "jp": "インドネシアから きました。ほりさんは？",
        "rom": "Indoneshia kara kimashita. Hori-san wa?",
        "id": "Saya dari Indonesia. Kalau Hori?",
        "salah": [
          {
            "jp": "あした きます。",
            "why": "Ini menyebut waktu datang besok. Pertanyaannya menanyakan negara asal dengan “どこの くに”."
          },
          {
            "jp": "パンを たべました。",
            "why": "Ini menceritakan makan roti. Sebutkan negara asalmu untuk menjawab pertanyaan."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "にほんです。インドネシアでは どこに すんでいましたか。",
        "rom": "Nihon desu. Indoneshia de wa doko ni sunde imashita ka.",
        "id": "Saya dari Jepang. Dulu kamu tinggal di mana di Indonesia?",
        "note": "すんでいました menyatakan tempat tinggal dahulu. すんでいます menyatakan tempat tinggal sekarang."
      },
      {
        "who": "me",
        "jp": "バンドンに すんでいました。",
        "rom": "Bandon ni sunde imashita.",
        "id": "Dulu saya tinggal di Bandung.",
        "salah": [
          {
            "jp": "バンドンへ いきませんか。",
            "why": "Ini mengajak pergi ke Bandung. Hori menanyakan tempat tinggalmu dahulu."
          },
          {
            "jp": "バンドンは いくらですか。",
            "why": "Ini menanyakan harga sebuah kota. Jawab tempat tinggal dahulu dengan “〜に すんでいました”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "バンドンは どんな まちですか。",
        "rom": "Bandon wa donna machi desu ka.",
        "id": "Bandung itu kota seperti apa?"
      },
      {
        "who": "me",
        "jp": "にぎやかな まちです。おいしい たべものが あります。",
        "rom": "Nigiyaka na machi desu. Oishii tabemono ga arimasu.",
        "id": "Kotanya ramai. Ada makanan yang enak.",
        "salah": [
          {
            "jp": "さんじに はじまります。",
            "why": "Ini menyebut waktu mulai. Pertanyaannya meminta gambaran tentang Bandung."
          },
          {
            "jp": "にまい ください。",
            "why": "Ini meminta dua lembar benda. Ceritakan suasana kota untuk menjawab “どんな まち”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "いいですね。いまは どこに すんでいますか。",
        "rom": "Ii desu ne. Ima wa doko ni sunde imasu ka.",
        "id": "Menarik ya. Sekarang kamu tinggal di mana?"
      },
      {
        "who": "me",
        "jp": "いまは とうきょうに すんでいます。",
        "rom": "Ima wa Tōkyō ni sunde imasu.",
        "id": "Sekarang saya tinggal di Tokyo.",
        "salah": [
          {
            "jp": "きのう とうきょうへ いきました。",
            "why": "Ini menyebut perjalanan kemarin. Pertanyaannya tentang tempat tinggal saat ini."
          },
          {
            "jp": "とうきょうから てがみが きました。",
            "why": "Ini berarti surat datang dari Tokyo. Hori menanyakan lokasi tempat tinggalmu."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "teinei",
    "ic": "✧",
    "judul": "Berkenalan dengan Senior",
    "sub": "Latih perkenalan sopan dengan orang yang lebih senior.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://blog.schoters.com/percakapan-bahasa-jepang",
    "lines": [
      {
        "who": "npc",
        "jp": "こんにちは。わたしは ほりです。おなまえを おしえて ください。",
        "rom": "Konnichiwa. Watashi wa Hori desu. Onamae o oshiete kudasai.",
        "id": "Halo. Saya Hori. Boleh tahu nama Anda?"
      },
      {
        "who": "me",
        "jp": "りょうたと もうします。よろしく おねがいします。",
        "rom": "Ryōta to mōshimasu. Yoroshiku onegaishimasu.",
        "id": "Nama saya Ryota. Senang berkenalan dengan Anda.",
        "salah": [
          {
            "jp": "おなまえは さんびゃくえんです。",
            "why": "Ini menggabungkan nama dengan harga. Perkenalkan diri dengan “〜と もうします” agar sopan."
          },
          {
            "jp": "みずを のみます。",
            "why": "Ini menyebut kegiatan minum air. Hori meminta kamu menyebutkan nama."
          }
        ],
        "note": "〜ともうします adalah cara sopan menyebut nama. Untuk awal belajar, pahami sebagai ungkapan utuh: “Nama saya …”."
      },
      {
        "who": "npc",
        "jp": "りょうたさんですね。こちらこそ。おしごとは なんですか。",
        "rom": "Ryōta-san desu ne. Kochira koso. Oshigoto wa nan desu ka.",
        "id": "Ryota, ya. Saya juga senang berkenalan. Apa pekerjaan Anda?"
      },
      {
        "who": "me",
        "jp": "エンジニアです。",
        "rom": "Enjinia desu.",
        "id": "Saya seorang insinyur.",
        "salah": [
          {
            "jp": "にじゅうごさいです。",
            "why": "Ini menyebut umur 25 tahun. “おしごと” menanyakan pekerjaan."
          },
          {
            "jp": "きょうは げつようびです。",
            "why": "Ini menyebut hari Senin. Jawab pertanyaan tentang pekerjaanmu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "そうですか。こちらの かいしゃは はじめてですか。",
        "rom": "Sō desu ka. Kochira no kaisha wa hajimete desu ka.",
        "id": "Begitu ya. Apakah ini pertama kalinya Anda ke perusahaan ini?"
      },
      {
        "who": "me",
        "jp": "はい、はじめてです。きょうから ここで はたらきます。",
        "rom": "Hai, hajimete desu. Kyō kara koko de hatarakimasu.",
        "id": "Ya, pertama kali. Mulai hari ini saya bekerja di sini.",
        "salah": [
          {
            "jp": "はい、はたらきましたか。",
            "why": "Ini malah bertanya balik apakah seseorang sudah bekerja. Jawab apakah kunjunganmu ini yang pertama."
          },
          {
            "jp": "かいしゃを ください。",
            "why": "Ini meminta sebuah perusahaan. Tanggapi pertanyaan pertama kali berkunjung."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "わからない ことが あったら、きいて ください。",
        "rom": "Wakaranai koto ga attara, kiite kudasai.",
        "id": "Kalau ada yang belum dimengerti, silakan bertanya.",
        "note": "わからないことがあったら berarti “kalau ada yang belum dimengerti”. Cukup pahami sebagai ungkapan bantuan; pola 〜たら diperdalam di N4."
      },
      {
        "who": "me",
        "jp": "ありがとうございます。どうぞ よろしく おねがいします。",
        "rom": "Arigatō gozaimasu. Dōzo yoroshiku onegaishimasu.",
        "id": "Terima kasih. Mohon bantuannya.",
        "salah": [
          {
            "jp": "おやすみなさい。",
            "why": "Ini ucapan sebelum tidur. Di sini, senior menawarkan bantuan, jadi sampaikan terima kasih."
          },
          {
            "jp": "ごちそうさまでした。",
            "why": "Ini ucapan setelah makan. Kamu sedang berkenalan di tempat kerja."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "tomodachi",
    "ic": "♪",
    "judul": "Teman Lama",
    "sub": "Tanyakan kabar dan rencanakan pertemuan dengan teman.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://lbifib.ui.ac.id/id/blog/artikel/percakapan-bahasa-jepang-tentang-teman",
    "lines": [
      {
        "who": "npc",
        "jp": "りょうたさん、ひさしぶりですね。げんきですか。",
        "rom": "Ryōta-san, hisashiburi desu ne. Genki desu ka.",
        "id": "Ryota, lama tidak bertemu. Apa kabar?"
      },
      {
        "who": "me",
        "jp": "はい、げんきです。ほりさんも げんきですか。",
        "rom": "Hai, genki desu. Hori-san mo genki desu ka.",
        "id": "Ya, saya baik. Hori juga baik?",
        "salah": [
          {
            "jp": "はい、いちまいです。",
            "why": "Ini menyebut jumlah satu lembar. Temanmu sedang menanyakan kabar."
          },
          {
            "jp": "でんしゃは あそこです。",
            "why": "Ini menunjukkan lokasi kereta. Balas sapaan teman dengan kabarmu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "わたしも げんきです。きょうは なにを しますか。",
        "rom": "Watashi mo genki desu. Kyō wa nani o shimasu ka.",
        "id": "Saya juga baik. Hari ini kamu mau melakukan apa?"
      },
      {
        "who": "me",
        "jp": "ごぜんは うちで べんきょうします。ごごは ひまです。",
        "rom": "Gozen wa uchi de benkyō shimasu. Gogo wa hima desu.",
        "id": "Pagi ini saya belajar di rumah. Siang nanti saya senggang.",
        "salah": [
          {
            "jp": "きのうは はたらきました。",
            "why": "Ini menceritakan kemarin. Pertanyaannya tentang rencana hari ini."
          },
          {
            "jp": "ほんは つくえの うえです。",
            "why": "Ini menyebut lokasi buku. Ceritakan kegiatanmu hari ini."
          }
        ],
        "note": "ごぜん = sebelum tengah hari; ごご = setelah tengah hari. Dalam dialog ini, janji bertemunya pukul dua siang."
      },
      {
        "who": "npc",
        "jp": "じゃあ、ごご こうえんを さんぽしませんか。",
        "rom": "Jā, gogo kōen o sanpo shimasen ka.",
        "id": "Kalau begitu, mau berjalan-jalan di taman siang nanti?"
      },
      {
        "who": "me",
        "jp": "いいですね。にじに こうえんの いりぐちで あいましょう。",
        "rom": "Ii desu ne. Niji ni kōen no iriguchi de aimashō.",
        "id": "Boleh. Ayo bertemu jam dua di pintu masuk taman.",
        "salah": [
          {
            "jp": "きのう さんぽしました。",
            "why": "Ini membahas jalan-jalan kemarin. Hori sedang mengajak untuk nanti siang."
          },
          {
            "jp": "こうえんは やさいです。",
            "why": "Ini menyatakan taman adalah sayuran. Tanggapi ajakan dan tentukan waktu bertemu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "わかりました。あとで あいましょう。",
        "rom": "Wakarimashita. Ato de aimashō.",
        "id": "Baik. Sampai bertemu nanti."
      },
      {
        "who": "me",
        "jp": "はい、また あとで。",
        "rom": "Hai, mata ato de.",
        "id": "Ya, sampai nanti.",
        "salah": [
          {
            "jp": "はじめまして。",
            "why": "Ini digunakan saat pertama berkenalan. Hori adalah teman yang sudah lama kamu kenal."
          },
          {
            "jp": "いらっしゃいませ。",
            "why": "Ini sapaan kepada pelanggan. Sekarang kalian sedang mengakhiri obrolan dan sudah sepakat bertemu."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "aisatsu",
    "ic": "☼",
    "judul": "Sapaan Sehari-hari",
    "sub": "Sapa teman, tanyakan waktu, dan ucapkan terima kasih.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://blog.schoters.com/percakapan-bahasa-jepang",
    "lines": [
      {
        "who": "npc",
        "jp": "おはようございます、りょうたさん。",
        "rom": "Ohayō gozaimasu, Ryōta-san.",
        "id": "Selamat pagi, Ryota."
      },
      {
        "who": "me",
        "jp": "おはようございます、ほりさん。",
        "rom": "Ohayō gozaimasu, Hori-san.",
        "id": "Selamat pagi, Hori.",
        "salah": [
          {
            "jp": "こんばんは。",
            "why": "Ini salam saat malam hari. Hori menyapamu pada pagi hari."
          },
          {
            "jp": "おやすみなさい。",
            "why": "Ini ucapan sebelum tidur. Balas sapaan pagi dengan “おはようございます”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "きょうの じゅぎょうは くじからです。いま なんじですか。",
        "rom": "Kyō no jugyō wa kuji kara desu. Ima nanji desu ka.",
        "id": "Pelajaran hari ini mulai jam sembilan. Sekarang jam berapa?"
      },
      {
        "who": "me",
        "jp": "はちじ ごじゅっぷんです。あと じゅっぷんですね。",
        "rom": "Hachiji gojuppun desu. Ato juppun desu ne.",
        "id": "Jam 08.50. Sepuluh menit lagi, ya.",
        "salah": [
          {
            "jp": "はちまいです。",
            "why": "Ini menyebut delapan lembar. Pertanyaannya tentang jam, yang memakai “〜じ”."
          },
          {
            "jp": "あしたは にちようびです。",
            "why": "Ini menyebut hari besok. Hori menanyakan jam sekarang."
          }
        ],
        "note": "08.50 ke 09.00 tersisa 10 menit. あとじゅっぷん = “sepuluh menit lagi”."
      },
      {
        "who": "npc",
        "jp": "あ、この ほん、どうぞ。きょう つかいますよ。",
        "rom": "A, kono hon, dōzo. Kyō tsukaimasu yo.",
        "id": "Oh, silakan ambil buku ini. Hari ini kita memakainya."
      },
      {
        "who": "me",
        "jp": "ありがとうございます。たすかります。",
        "rom": "Arigatō gozaimasu. Tasukarimasu.",
        "id": "Terima kasih. Ini sangat membantu.",
        "salah": [
          {
            "jp": "ごめんなさい。ほんを たべます。",
            "why": "Ini menyatakan kamu akan memakan buku. Terimalah bantuan dengan ucapan terima kasih."
          },
          {
            "jp": "いってらっしゃい。",
            "why": "Ini melepas orang yang hendak pergi. Hori sedang memberikan buku kepadamu."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "どういたしまして。いっしょに きょうしつへ いきましょう。",
        "rom": "Dō itashimashite. Issho ni kyōshitsu e ikimashō.",
        "id": "Sama-sama. Ayo ke kelas bersama."
      },
      {
        "who": "me",
        "jp": "はい、いきましょう。",
        "rom": "Hai, ikimashō.",
        "id": "Ya, ayo.",
        "salah": [
          {
            "jp": "いいえ、いきました。",
            "why": "Ini menyebut sudah pergi dan menolak. Untuk menerima ajakan sekarang, gunakan “いきましょう”."
          },
          {
            "jp": "おかえりなさい。",
            "why": "Ini menyambut orang yang baru pulang. Hori mengajakmu berangkat ke kelas."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "uchi",
    "ic": "⌂",
    "judul": "Berangkat & Pulang",
    "sub": "Gunakan pasangan salam saat meninggalkan dan tiba di rumah.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://blog.schoters.com/percakapan-bahasa-jepang",
    "lines": [
      {
        "who": "npc",
        "jp": "りょうたさん、もう でかけますか。",
        "rom": "Ryōta-san, mō dekakemasu ka.",
        "id": "Ryota, sudah mau pergi?"
      },
      {
        "who": "me",
        "jp": "はい、いってきます。",
        "rom": "Hai, ittekimasu.",
        "id": "Ya, saya berangkat.",
        "salah": [
          {
            "jp": "はい、おかえりなさい。",
            "why": "Ini menyambut orang yang pulang. Kamu yang akan berangkat, jadi katakan “いってきます”."
          },
          {
            "jp": "はい、ただいま。",
            "why": "Ini diucapkan saat tiba kembali di rumah. Sekarang kamu baru mau berangkat."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "いってらっしゃい。なんじごろ かえりますか。",
        "rom": "Itterasshai. Nanji goro kaerimasu ka.",
        "id": "Hati-hati di jalan. Kira-kira pulang jam berapa?",
        "note": "〜じごろ menyatakan waktu perkiraan. ろくじごろ = “sekitar pukul enam”."
      },
      {
        "who": "me",
        "jp": "ろくじごろ かえります。",
        "rom": "Rokuji goro kaerimasu.",
        "id": "Saya pulang sekitar jam enam.",
        "salah": [
          {
            "jp": "ろっこ あります。",
            "why": "Ini menyebut ada enam benda. Pertanyaannya tentang jam pulang."
          },
          {
            "jp": "いえは あそこです。",
            "why": "Ini menunjukkan letak rumah. Hori menanyakan kapan kamu pulang."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "おかえりなさい。",
        "rom": "Okaerinasai.",
        "id": "[Sore hari] Selamat datang kembali."
      },
      {
        "who": "me",
        "jp": "ただいま。きょうは つかれました。",
        "rom": "Tadaima. Kyō wa tsukaremashita.",
        "id": "Saya pulang. Hari ini melelahkan.",
        "salah": [
          {
            "jp": "いってきます。",
            "why": "Ini ucapan saat berangkat. Pada bagian sore ini kamu baru tiba di rumah."
          },
          {
            "jp": "いらっしゃいませ。",
            "why": "Ini sapaan pegawai kepada pelanggan. Balasan orang yang pulang adalah “ただいま”."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ゆっくり やすんで ください。おやすみなさい。",
        "rom": "Yukkuri yasunde kudasai. Oyasuminasai.",
        "id": "Beristirahatlah dengan santai, ya. Selamat tidur."
      },
      {
        "who": "me",
        "jp": "ありがとう。おやすみなさい。",
        "rom": "Arigatō. Oyasuminasai.",
        "id": "Terima kasih. Selamat tidur.",
        "salah": [
          {
            "jp": "おはようございます。",
            "why": "Ini salam pagi. Hori sedang mengucapkan selamat tidur pada akhir hari."
          },
          {
            "jp": "いただきます。",
            "why": "Ini ucapan sebelum makan. Di sini kalian akan beristirahat malam."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  },
  {
    "id": "shokuji",
    "ic": "♨",
    "judul": "Salam saat Makan",
    "sub": "Tanyakan apakah sudah makan dan gunakan salam sebelum serta sesudah makan.",
    "npc": "Hori",
    "gender": "female",
    "referensi": "https://blog.schoters.com/percakapan-bahasa-jepang",
    "lines": [
      {
        "who": "npc",
        "jp": "りょうたさん、もう ひるごはんを たべましたか。",
        "rom": "Ryōta-san, mō hirugohan o tabemashita ka.",
        "id": "Ryota, sudah makan siang?"
      },
      {
        "who": "me",
        "jp": "いいえ、まだです。",
        "rom": "Iie, mada desu.",
        "id": "Belum.",
        "salah": [
          {
            "jp": "はい、まだです。",
            "why": "“はい” dan “まだです” tidak selaras untuk jawaban ini. Untuk belum makan, pilih “いいえ、まだです”."
          },
          {
            "jp": "いいえ、えきです。",
            "why": "Ini menyebut stasiun. Hori sedang menanyakan apakah kamu sudah makan."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "じゃあ、いっしょに たべましょう。おべんとうを つくりました。",
        "rom": "Jā, issho ni tabemashō. Obentō o tsukurimashita.",
        "id": "Kalau begitu, ayo makan bersama. Saya membuat bekal."
      },
      {
        "who": "me",
        "jp": "ありがとう。いただきます。",
        "rom": "Arigatō. Itadakimasu.",
        "id": "Terima kasih. Saya mulai makan, ya.",
        "salah": [
          {
            "jp": "ありがとう。ごちそうさまでした。",
            "why": "“ごちそうさまでした” dipakai setelah selesai makan. Saat baru mulai, gunakan “いただきます”."
          },
          {
            "jp": "ありがとう。いってきます。",
            "why": "“いってきます” dipakai saat berangkat dari rumah. Kamu akan mulai makan."
          }
        ],
        "note": "いただきます diucapkan sebelum mulai makan; ごちそうさまでした setelah selesai makan."
      },
      {
        "who": "npc",
        "jp": "どうですか。この たまごやきは？",
        "rom": "Dō desu ka. Kono tamagoyaki wa?",
        "id": "Bagaimana telur dadar ini?"
      },
      {
        "who": "me",
        "jp": "おいしいです。りょうりが じょうずですね。",
        "rom": "Oishii desu. Ryōri ga jōzu desu ne.",
        "id": "Enak. Kamu pandai memasak, ya.",
        "salah": [
          {
            "jp": "あしたは あめです。",
            "why": "Ini membahas cuaca besok. Hori sedang menanyakan rasa makanannya."
          },
          {
            "jp": "この たまごやきは えきです。",
            "why": "Ini menyebut telur dadar sebagai stasiun. Beri kesan tentang rasa makanan."
          }
        ]
      },
      {
        "who": "npc",
        "jp": "ありがとう。もう たべおわりましたか。",
        "rom": "Arigatō. Mō tabeowarimashita ka.",
        "id": "Terima kasih. Sudah selesai makan?",
        "note": "たべおわりましたか berarti “Sudah selesai makan?”. Pahami dulu sebagai ungkapan utuh; pola kata kerja + おわる diperdalam di N4."
      },
      {
        "who": "me",
        "jp": "はい。ごちそうさまでした。",
        "rom": "Hai. Gochisōsama deshita.",
        "id": "Sudah. Terima kasih atas makanannya.",
        "salah": [
          {
            "jp": "はい。いただきます。",
            "why": "“いただきます” dipakai sebelum makan. Sekarang kamu menyatakan sudah selesai makan."
          },
          {
            "jp": "はい。おはようございます。",
            "why": "Ini salam pagi. Setelah selesai makan, gunakan “ごちそうさまでした”."
          }
        ]
      }
    ],
    "playerName": "Ryota"
  }
];
