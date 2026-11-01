"""Compile original dialogue adaptations from the two supplied A2 topic reviews."""
from pathlib import Path
import json,hashlib
ROOT=Path(__file__).resolve().parents[1]
SCENES=[]
def scene(book,topic,title,goal,text,note):
 rows=[]
 for i,row in enumerate(text.strip().splitlines()):
  cells=row.split('|');assert len(cells)==(3 if i%2==0 else 7),(title,i,cells)
  jp,rom,meaning=cells[:3];line=dict(who='npc' if i%2==0 else 'me',jp=jp,rom=rom,id=meaning)
  if i%2:line['salah']=[dict(jp=cells[3],why=cells[4]),dict(jp=cells[5],why=cells[6])]
  rows.append(line)
 assert len(rows)==8,title
 rows[1]['note']=note
 SCENES.append(dict(id=f'n4-e{book}-t{topic:02}',level='N4',ic='◇',judul=title,sub=goal,npc='Hori',gender='female',playerName='Ryota',audioMode='device',book=f'Elementary {book} · A2',source=dict(id=f'marugoto-e{book}',topic=topic,lessons=[topic*2-1,topic*2]),lines=rows))
scene(1,1,'Keluarga & hobi','Ceritakan keluarga, tempat tinggal, dan kegiatan saat senggang.', '''
りょうたさんは、いま どこに すんでいますか。|Ryōta-san wa, ima doko ni sunde imasu ka.|Ryota, sekarang tinggal di mana?
よこはまに すんでいます。あにと ふたりで くらしています。|Yokohama ni sunde imasu. Ani to futari de kurashite imasu.|Saya tinggal di Yokohama, berdua dengan kakak laki-laki saya.|らいしゅう よこはまへ いきます。|Ini rencana bepergian, bukan tempat tinggal sekarang.|あにの くつは くろいです。|Ini menjelaskan sepatu kakak, bukan tempat tinggalmu.
おにいさんとは なにごで はなしますか。|Oniisan to wa nanigo de hanashimasu ka.|Dengan kakakmu, kamu berbicara dalam bahasa apa?
インドネシアごで はなします。ときどき にほんごも つかいます。|Indoneshia-go de hanashimasu. Tokidoki nihongo mo tsukaimasu.|Kami berbicara dalam bahasa Indonesia. Kadang kami juga memakai bahasa Jepang.|まいにち ろくじに おきます。|Ini jam bangun, sedangkan yang ditanya adalah bahasa.|よこはまは おおきい まちです。|Ini menggambarkan kota, bukan bahasa yang dipakai.
やすみの ひは、なにを するのが すきですか。|Yasumi no hi wa, nani o suru no ga suki desu ka.|Saat libur, kamu suka melakukan apa?
しゃしんを とることが すきです。こうえんで よく とります。|Shashin o toru koto ga suki desu. Kōen de yoku torimasu.|Saya suka memotret. Saya sering memotret di taman.|しゃしんは つくえの したです。|Ini letak foto, bukan hobi yang kamu lakukan.|しごとは はちじに はじまります。|Ini jam kerja, bukan kegiatan kesukaan saat libur.
こんど、しゃしんを みせてください。|Kondo, shashin o misete kudasai.|Lain kali, perlihatkan fotomu, ya.
はい。つぎに あうとき、もってきます。|Hai. Tsugi ni au toki, motte kimasu.|Baik. Saat kita bertemu lagi, saya akan membawanya.|きのう しゃしんを みましたか。|Ini pertanyaan tentang kemarin, bukan jawaban atas permintaan Hori.|いいえ、ここは ぎんこうです。|Ini menyebut tempat dan tidak menanggapi permintaan melihat foto.
''','〜にすんでいます menyatakan tempat tinggal sekarang. 〜ことがすきです menyatakan kegiatan yang disukai.')
scene(1,2,'Cuaca di dua kota','Bandingkan cuaca lewat telepon dan ceritakan perubahan musim.', '''
もしもし、りょうたさん。そちらの てんきは どうですか。|Moshi moshi, Ryōta-san. Sochira no tenki wa dō desu ka.|Halo, Ryota. Bagaimana cuaca di tempatmu?
こちらは あめが ふっています。けさから ずっとです。|Kochira wa ame ga futte imasu. Kesa kara zutto desu.|Di sini sedang hujan, sejak tadi pagi terus-menerus.|きょうは すいようびです。|Ini nama hari, bukan keadaan cuaca.|らいしゅう でんわします。|Ini janji menelepon, bukan jawaban tentang cuaca sekarang.
こちらも きのうは あめでしたが、きょうは はれています。|Kochira mo kinō wa ame deshita ga, kyō wa harete imasu.|Di sini kemarin juga hujan, tetapi hari ini cerah.
いいですね。そちらは もう あたたかく なりましたか。|Ii desu ne. Sochira wa mō atatakaku narimashita ka.|Enak, ya. Apakah di sana sudah menjadi hangat?|これは あたたかい おちゃです。|Ini minuman, bukan pertanyaan lanjutan tentang musim di tempat Hori.|あめは さんびゃくえんです。|Ini menyebut harga, tidak sesuai percakapan cuaca.
はい。はるに なって、さんぽが たのしく なりました。|Hai. Haru ni natte, sanpo ga tanoshiku narimashita.|Ya. Musim semi sudah tiba, jadi berjalan-jalan terasa menyenangkan.
わたしも はるが すきです。はなが きれいですから。|Watashi mo haru ga suki desu. Hana ga kirei desu kara.|Saya juga suka musim semi, karena bunga-bunganya indah.|はなは なんじに おきますか。|Ini menanyakan jam bangun bunga, bukan menanggapi perubahan musim.|きっぷを にまい ください。|Ini membeli tiket dan tidak berkaitan dengan kesukaan musim.
こんど、はなの しゃしんを おくりますね。|Kondo, hana no shashin o okurimasu ne.|Nanti saya kirim foto bunga-bunganya, ya.
ありがとうございます。たのしみに しています。|Arigatō gozaimasu. Tanoshimi ni shite imasu.|Terima kasih. Saya menantikannya.|ごちそうさまでした。|Ini ucapan setelah makan, bukan menerima tawaran foto.|はじめまして。りょうたです。|Kalian sudah saling mengenal; ini bukan awal perkenalan.
''','あたたかくなりました berarti menjadi hangat. 〜ですから menyebutkan alasan.')
scene(1,3,'Jalan ke taman kota','Jelaskan ciri tempat dan pastikan petunjuk arah yang didengar.', '''
この まちには、どんな ところが ありますか。|Kono machi ni wa, donna tokoro ga arimasu ka.|Di kota ini ada tempat seperti apa?
えきの ちかくに、しずかで ひろい こうえんが あります。|Eki no chikaku ni, shizuka de hiroi kōen ga arimasu.|Di dekat stasiun ada taman yang tenang dan luas.|えきまで ごひゃくえんです。|Ini biaya ke stasiun, bukan gambaran tempat di kota.|あしたは あめだと おもいます。|Ini perkiraan cuaca, bukan informasi tempat yang ditanya.
いいですね。ここから どう いけば いいですか。|Ii desu ne. Koko kara dō ikeba ii desu ka.|Bagus, ya. Dari sini sebaiknya lewat mana?
まっすぐ いって、みっつめの かどを ひだりに まがってください。|Massugu itte, mittsume no kado o hidari ni magatte kudasai.|Jalan lurus, lalu belok kiri di sudut ketiga.|こうえんで ほんを よむのが すきです。|Ini hobi di taman, bukan petunjuk menuju taman.|きのう ひだりてが いたかったです。|Ini keluhan tangan kiri, bukan arah belokan.
ふたつめの かどを ひだりですね。|Futatsume no kado o hidari desu ne.|Belok kiri di sudut kedua, ya.
いいえ、ふたつめでは なくて、みっつめです。|Iie, futatsume de wa nakute, mittsume desu.|Bukan yang kedua, melainkan yang ketiga.|はい、ふたつめです。|Ini membenarkan sudut kedua, padahal petunjuk sebelumnya sudut ketiga.|いいえ、きのうは やすみでした。|Ini membicarakan libur kemarin, bukan membetulkan petunjuk.
わかりました。めじるしは ありますか。|Wakarimashita. Mejirushi wa arimasu ka.|Baik. Ada penandanya?
はい。あかくて おおきい たてものの むかいです。|Hai. Akakute ōkii tatemono no mukai desu.|Ya. Tamannya di seberang gedung besar berwarna merah.|わたしは あかい くつを はいています。|Ini pakaianmu, bukan penanda lokasi taman.|たてものを ひとつ ください。|Ini meminta gedung, bukan menjelaskan penanda tempat.
''','〜ではなくて membetulkan informasi: bukan A, melainkan B. むかい berarti di seberang.')
scene(1,4,'Janji melihat pemandangan malam','Ubah waktu janjian, terima ajakan, lalu sampaikan alasan terlambat.', '''
どようびの まちあわせは、ろくじで どうですか。|Doyōbi no machiawase wa, rokuji de dō desu ka.|Bagaimana kalau kita bertemu Sabtu pukul enam?
ろくじは しごとが あります。しちじでも いいですか。|Rokuji wa shigoto ga arimasu. Shichiji demo ii desu ka.|Pukul enam saya masih bekerja. Bolehkah pukul tujuh?|きのう ろくじに あいました。|Ini pertemuan kemarin, bukan usulan waktu untuk Sabtu.|しごとは えきの となりです。|Ini lokasi pekerjaan, bukan tanggapan terhadap usulan waktu.
いいですよ。えきの まえで あいましょう。タワーには もう いきましたか。|Ii desu yo. Eki no mae de aimashō. Tawā ni wa mō ikimashita ka.|Boleh. Mari bertemu di depan stasiun. Kamu sudah pernah ke menara itu?
いいえ、まだです。やけいを みに いきたいです。|Iie, mada desu. Yakei o mi ni ikitai desu.|Belum. Saya ingin pergi melihat pemandangan malamnya.|はい、もう いきました。まだ いっていません。|Dua pernyataan ini bertentangan: sudah pergi dan belum pergi.|タワーを たべてみたいです。|Menara bukan makanan; tanggapi ajakan melihat pemandangan.
じゃあ、いっしょに いきましょう。|Jā, issho ni ikimashō.|Kalau begitu, ayo pergi bersama.
はい。しちじに えきの まえですね。|Hai. Shichiji ni eki no mae desu ne.|Baik. Pukul tujuh di depan stasiun, ya.|はい、ろくじに タワーの なかですね。|Ini mengubah waktu dan tempat yang sudah disepakati.|いいえ、きっぷは あおいです。|Ini warna tiket, bukan memastikan janji bertemu.
［どようび］りょうたさん、こんばんは。|Doyōbi. Ryōta-san, konbanwa.|[Hari Sabtu] Selamat malam, Ryota.
おくれて すみません。でんしゃが おくれたんです。|Okurete sumimasen. Densha ga okureta n desu.|Maaf saya terlambat. Keretanya terlambat.|おくれて よかったです。|Ini berarti senang karena terlambat, tidak sesuai permintaan maaf.|おかえりなさい。ここは わたしの うちです。|Ini menyambut orang pulang, padahal kalian janjian di stasiun.
''','〜でもいいですか menegosiasikan pilihan. おくれたんです memberikan penjelasan penyebab keterlambatan.')
scene(1,5,'Belajar bahasa & menawarkan bantuan','Ceritakan pengalaman belajar dan bantu teman yang memerlukan petunjuk.', '''
いままでに、どんな がいこくごを べんきょうしましたか。|Ima made ni, donna gaikokugo o benkyō shimashita ka.|Bahasa asing apa yang pernah kamu pelajari?
こうこうで えいごを べんきょうしました。いまは にほんごを ならっています。|Kōkō de eigo o benkyō shimashita. Ima wa nihongo o naratte imasu.|Saya belajar bahasa Inggris saat SMA. Sekarang saya sedang belajar bahasa Jepang.|にほんごの ほんは あそこです。|Ini menunjukkan letak buku, bukan pengalaman belajar bahasa.|がっこうは あした やすみです。|Ini jadwal sekolah, bukan bahasa yang dipelajari.
にほんごの べんきょうは どうですか。|Nihongo no benkyō wa dō desu ka.|Bagaimana belajar bahasa Jepangnya?
たのしいですが、かんじを よむのが むずかしいです。|Tanoshii desu ga, kanji o yomu no ga muzukashii desu.|Menyenangkan, tetapi membaca kanji terasa sulit.|かんじは あした きます。|Ini menyatakan kanji akan datang, bukan kesulitan belajar.|にほんごを にまい ください。|Ini memakai hitungan lembar untuk bahasa, tidak menjawab pertanyaannya.
わからない ときは、きいてくださいね。|Wakaranai toki wa, kiite kudasai ne.|Kalau tidak mengerti, tanya saja, ya.
ありがとうございます。こんど、よみかたを おしえてください。|Arigatō gozaimasu. Kondo, yomikata o oshiete kudasai.|Terima kasih. Nanti tolong ajarkan cara membacanya.|しつれいしました。もう おなかが いっぱいです。|Ini membahas kenyang, bukan menerima bantuan belajar.|はじめまして。きのう あいましたね。|Ini mencampur perkenalan pertama dengan sudah bertemu, tidak menanggapi bantuan.
あ、えきへの みちが わかりません。|A, eki e no michi ga wakarimasen.|Oh, saya tidak tahu jalan menuju stasiun.
いっしょに いきましょうか。わたしも えきへ いきます。|Issho ni ikimashō ka. Watashi mo eki e ikimasu.|Bagaimana kalau kita pergi bersama? Saya juga menuju stasiun.|かんじを よむのは むずかしいです。|Ini kembali ke topik belajar, padahal Hori sekarang memerlukan petunjuk jalan.|えきは とても おいしいです。|Ini menggambarkan stasiun sebagai makanan enak, bukan menawarkan bantuan.
''','Kata kerja bentuk kamus + のがむずかしいです menyatakan kegiatan yang sulit. いきましょうか menawarkan bantuan.')
scene(1,6,'Bekal piknik','Sepakati bekal dan minuman, lalu tanggapi tawaran makanan.', '''
あしたの ピクニックに、なにを もっていきますか。|Ashita no pikunikku ni, nani o motte ikimasu ka.|Apa yang akan kamu bawa untuk piknik besok?
わたしは おにぎりを つくって もっていきます。|Watashi wa onigiri o tsukutte motte ikimasu.|Saya akan membuat dan membawa onigiri.|きのう おにぎりを たべました。|Ini makanan kemarin, bukan bekal yang akan dibawa besok.|ピクニックは ごひゃくえんです。|Ini menyebut harga, bukan barang yang akan dibawa.
わたしは サラダを もっていきます。のみものは なにが いいですか。|Watashi wa sarada o motte ikimasu. Nomimono wa nani ga ii desu ka.|Saya akan membawa salad. Kamu ingin minuman apa?
つめたい おちゃが いいです。わたしが かっておきます。|Tsumetai ocha ga ii desu. Watashi ga katte okimasu.|Saya ingin teh dingin. Saya akan membelinya lebih dulu.|サラダは みどりいろです。|Ini warna salad, bukan pilihan minuman.|おちゃを かいませんでした。|Ini menceritakan tidak membeli teh dahulu, bukan menyepakati persiapan besok.
［ピクニックで］サラダを どうぞ。すこし からいですよ。|Pikunikku de. Sarada o dōzo. Sukoshi karai desu yo.|[Saat piknik] Silakan saladnya. Rasanya agak pedas.
いただきます。からいですが、おいしいです。|Itadakimasu. Karai desu ga, oishii desu.|Saya mulai makan, ya. Pedas, tetapi enak.|おやすみなさい。サラダを ねます。|Ini salam tidur dan bukan tanggapan saat menerima makanan.|ごちそうさまでした。まだ たべていません。|Ucapan selesai makan tidak selaras dengan baru menerima dan belum makan.
もう すこし どうですか。|Mō sukoshi dō desu ka.|Mau tambah sedikit lagi?
ありがとうございます。でも、もう おなかが いっぱいです。|Arigatō gozaimasu. Demo, mō onaka ga ippai desu.|Terima kasih. Tetapi saya sudah kenyang.|はい、えきは まっすぐです。|Ini petunjuk jalan, bukan tanggapan tawaran menambah makanan.|それは だれの じてんしゃですか。|Ini pertanyaan tentang sepeda dan memutus percakapan makan.
''','かっておきます berarti membeli lebih dulu sebagai persiapan. おなかがいっぱいです menolak tambahan makanan dengan alasan sudah kenyang.')
scene(1,7,'Bertamu ke kantor cabang','Sebutkan pengalaman bertemu orang dan mintalah izin memakai fasilitas.', '''
この ししゃに くるのは、はじめてですか。|Kono shisha ni kuru no wa, hajimete desu ka.|Apakah ini pertama kalinya kamu datang ke kantor cabang ini?
はい、はじめてです。きょうは よろしく おねがいします。|Hai, hajimete desu. Kyō wa yoroshiku onegaishimasu.|Ya, pertama kali. Mohon bantuannya hari ini.|はい、きのうも ここに きました。|Pernyataan pertama kali tidak cocok dengan sudah datang kemarin.|いいえ、コーヒーは あまいです。|Ini rasa kopi, bukan pengalaman berkunjung.
やまださんには、あったことが ありますか。|Yamada-san ni wa, atta koto ga arimasu ka.|Apakah kamu pernah bertemu Yamada?
はい、きょねんの かいぎで あったことが あります。|Hai, kyonen no kaigi de atta koto ga arimasu.|Ya, saya pernah bertemu beliau di rapat tahun lalu.|らいねん あうつもりです。|Ini niat bertemu tahun depan, bukan pengalaman pertemuan sebelumnya.|やまださんの つくえは たかいです。|Ini meja Yamada, bukan apakah kamu pernah bertemu beliau.
かいぎまで、こちらで おまちください。|Kaigi made, kochira de omachi kudasai.|Silakan tunggu di sini sampai rapat dimulai.
ありがとうございます。この プリンターを つかっても いいですか。|Arigatō gozaimasu. Kono purintā o tsukatte mo ii desu ka.|Terima kasih. Bolehkah saya menggunakan printer ini?|この プリンターを たべても いいですか。|Printer bukan makanan; mintalah izin memakai alat itu.|かいぎは きのう おわりました。|Ini membahas rapat kemarin, bukan persiapan rapat hari ini.
はい、どうぞ。ここに かみが あります。|Hai, dōzo. Koko ni kami ga arimasu.|Ya, silakan. Kertasnya ada di sini.
たすかります。じゅんびしてから、かいぎしつへ いきます。|Tasukarimasu. Junbi shite kara, kaigishitsu e ikimasu.|Ini sangat membantu. Setelah bersiap, saya akan ke ruang rapat.|いいえ、まだ あさごはんを たべていません。|Ini sarapan, bukan tanggapan atas bantuan memakai printer.|ここに かみが ありませんね。|Ini menyangkal informasi kertas yang baru ditunjukkan tanpa alasan dalam dialog.
''','あったことがあります menyatakan pengalaman pernah bertemu. 〜てもいいですか meminta izin.')
scene(1,8,'Kebiasaan sehat','Minta saran sederhana dan ceritakan kebiasaan olahraga.', '''
さいきん、ねむれないんですか。|Saikin, nemurenai n desu ka.|Akhir-akhir ini kamu sulit tidur?
はい。よる、おそくまで スマホを みてしまうんです。|Hai. Yoru, osoku made sumaho o mite shimau n desu.|Ya. Malam hari saya terlanjur melihat ponsel sampai larut.|はい、まいにち よく ねむれます。|Ini menyatakan tidur nyenyak, tidak sesuai keluhan sulit tidur yang dilanjutkan.|スマホは あかいです。|Ini warna ponsel, bukan kebiasaan yang berkaitan dengan tidur.
ねるまえに、スマホを みないように すると いいですよ。|Neru mae ni, sumaho o minai yō ni suru to ii desu yo.|Sebaiknya biasakan tidak melihat ponsel sebelum tidur.
そうですね。こんやから やってみます。|Sō desu ne. Kon'ya kara yatte mimasu.|Benar, ya. Mulai malam ini saya akan mencobanya.|きのう スマホを かいましたか。|Ini bertanya tentang membeli ponsel, bukan menanggapi saran kebiasaan.|いただきます。パンを ください。|Ini ucapan makan dan permintaan roti, bukan tanggapan terhadap saran tidur.
わたしは、けんこうの ために まいあさ あるいています。|Watashi wa, kenkō no tame ni maiasa aruite imasu.|Saya berjalan kaki setiap pagi demi kesehatan.
どのくらい あるくんですか。わたしも はじめたいです。|Dono kurai aruku n desu ka. Watashi mo hajimetai desu.|Berapa lama kamu berjalan? Saya juga ingin mulai.|いくらの スマホを かいましたか。|Ini harga ponsel, bukan pertanyaan tentang kebiasaan berjalan.|きょうは にちようびでしたか。|Ini nama hari, bukan menindaklanjuti kebiasaan sehat Hori.
にじゅっぷんぐらいです。むりを しないでくださいね。|Nijuppun gurai desu. Muri o shinaide kudasai ne.|Sekitar dua puluh menit. Jangan memaksakan diri, ya.
はい。すこしずつ つづけるように します。|Hai. Sukoshi zutsu tsuzukeru yō ni shimasu.|Baik. Saya akan berusaha melanjutkannya sedikit demi sedikit.|はい、ねないで ずっと はしります。|Ini justru memaksakan diri dan mengabaikan saran Hori.|いいえ、ここは ゆうびんきょくです。|Ini menyebut tempat, bukan menanggapi anjuran berolahraga ringan.
''','〜てしまう dapat menyatakan kebiasaan yang disesali. 〜ようにします berarti berusaha membiasakan suatu tindakan.')
scene(1,9,'Hadiah & rencana perayaan','Ceritakan asal hadiah dan usulkan cara merayakan ulang tahun.', '''
その かばん、すてきですね。どこで かったんですか。|Sono kaban, suteki desu ne. Doko de katta n desu ka.|Tas itu bagus, ya. Kamu membelinya di mana?
かったんじゃなくて、たんじょうびに あねに もらったんです。|Katta n ja nakute, tanjōbi ni ane ni moratta n desu.|Saya tidak membelinya; saya mendapatkannya dari kakak perempuan saat ulang tahun.|あねに かばんを あげました。|Ini berarti kamu memberi tas kepada kakak, bukan menerima tas yang ditanyakan.|あした かいに いきます。|Ini rencana membeli nanti, bukan asal tas yang sedang kamu pakai.
そうだったんですね。らいしゅうは、あねの たんじょうびなんです。|Sō datta n desu ne. Raishū wa, ane no tanjōbi na n desu.|Oh, begitu. Minggu depan ulang tahun kakak perempuan saya.
なにか おいわいを しますか。|Nanika oiwai o shimasu ka.|Apakah kamu akan mengadakan suatu perayaan?|おねえさんは どの えきですか。|Ini menanyakan stasiun untuk seseorang dan tidak sesuai topik ulang tahun.|きのう かばんを なくしました。|Ini cerita kehilangan tas, bukan menindaklanjuti ulang tahun kakak Hori.
まだ きめていません。なにが いいと おもいますか。|Mada kimete imasen. Nani ga ii to omoimasu ka.|Belum saya putuskan. Menurutmu, apa yang bagus?
いえで しょくじかいを するのが いいと おもいます。|Ie de shokujikai o suru no ga ii to omoimasu.|Menurut saya, mengadakan makan bersama di rumah itu bagus.|しょくじかいを しましたか。|Ini bertanya apakah sudah dilakukan, bukan memberi usulan untuk rencana.|なにも しませんでした。|Ini cerita masa lalu, bukan saran perayaan minggu depan.
いいですね。プレゼントは、はなが いいかな。|Ii desu ne. Purezento wa, hana ga ii kana.|Ide bagus. Untuk hadiah, mungkin bunga bagus, ya.
ええ。おねえさんが すきな はなを えらびましょう。|Ee. Oniisan ga suki na hana o erabimashō.|Ya. Mari pilih bunga yang kakak perempuanmu sukai.|おねえさんが きらいな はなに しましょう。|Ini mengusulkan bunga yang tidak disukai kakaknya, tidak sesuai tujuan hadiah dalam alur ini.|はなは えきの となりです。|Ini petunjuk lokasi yang tidak menjawab usulan memilih hadiah.
''','〜にもらいました menyebutkan pemberi hadiah. 〜とおもいます dipakai untuk menyampaikan pendapat atau saran.')
scene(2,1,'Teman baru & kesan pertama','Ceritakan diri sendiri lalu kenali orang dari ciri dan kesannya.', '''
りょうたさんは、どんな しごとを していますか。|Ryōta-san wa, donna shigoto o shite imasu ka.|Ryota, kamu bekerja sebagai apa?
さくらデザインと いう かいしゃで、ウェブサイトを つくっています。|Sakura Dezain to iu kaisha de, webusaito o tsukutte imasu.|Saya membuat situs web di perusahaan bernama Sakura Design.|らいげつ かいしゃへ いきました。|Ini mencampur bulan depan dengan bentuk lampau, bukan menjelaskan pekerjaan.|ウェブサイトは おいしいです。|Ini menggambarkan situs web sebagai makanan, bukan kegiatan kerja.
そうですか。しょうらいは、なにを したいですか。|Sō desu ka. Shōrai wa, nani o shitai desu ka.|Begitu, ya. Apa yang ingin kamu lakukan di masa depan?
にほんごでも しごとが できるように なりたいです。|Nihongo demo shigoto ga dekiru yō ni naritai desu.|Saya ingin menjadi bisa bekerja dalam bahasa Jepang juga.|きのう しごとを しました。|Ini kegiatan kemarin, bukan tujuan masa depan.|しごとの かばんは あおいです。|Ini warna tas kerja, bukan kemampuan yang ingin dicapai.
あそこに いるのが、わたしの ともだちです。|Asoko ni iru no ga, watashi no tomodachi desu.|Yang ada di sana itu teman saya.
あの、めがねを かけている ひとですか。やさしそうですね。|Ano, megane o kakete iru hito desu ka. Yasashisō desu ne.|Orang yang memakai kacamata itu? Kelihatannya ramah, ya.|その めがねは いくらですか。|Ini bertanya harga kacamata, bukan memastikan orang yang diperkenalkan.|わたしの ともだちは きのう きました。|Ini cerita temanmu sendiri, bukan menanggapi teman yang Hori tunjukkan.
はい。はじめは しずかですが、はなすと おもしろい ひとですよ。|Hai. Hajime wa shizuka desu ga, hanasu to omoshiroi hito desu yo.|Ya. Awalnya pendiam, tetapi kalau diajak bicara orangnya menyenangkan.
そうなんですね。こんど、しょうかいしてください。|Sō na n desu ne. Kondo, shōkai shite kudasai.|Oh, begitu. Lain kali tolong perkenalkan saya kepadanya.|きょうは めがねを たべます。|Kacamata bukan makanan; ini tidak menanggapi cerita tentang teman Hori.|しょうかいして ありがとうございました。もう あいました。|Ini menyatakan sudah diperkenalkan dan bertemu, padahal dalam alur ini baru meminta perkenalan.
''','〜というかいしゃ berarti perusahaan yang bernama …. 〜ているひと menjelaskan ciri orang; やさしそう berarti tampak ramah.')
scene(2,2,'Makan di restoran','Sampaikan pilihan tempat duduk, minta rekomendasi dan tanyakan cara makan.', '''
いらっしゃいませ。なんめいさまですか。|Irasshaimase. Nanmei-sama desu ka.|Selamat datang. Untuk berapa orang?
ふたりです。できれば、まどの ちかくの せきが いいんですが。|Futari desu. Dekireba, mado no chikaku no seki ga ii n desu ga.|Dua orang. Kalau bisa, kami ingin tempat duduk dekat jendela.|ふたつめの かどを ひだりです。|Ini petunjuk jalan, bukan jumlah tamu dan pilihan tempat duduk.|ふたりを たべたいです。|Ini berarti ingin memakan dua orang; tidak sesuai permintaan tempat duduk.
はい、こちらへ どうぞ。ごちゅうもんは おきまりですか。|Hai, kochira e dōzo. Gochūmon wa okimari desu ka.|Baik, silakan ke sini. Sudah memutuskan pesanannya?
まだです。さかなりょうりで、おすすめは なんですか。|Mada desu. Sakana ryōri de, osusume wa nan desu ka.|Belum. Untuk hidangan ikan, apa yang direkomendasikan?|はい、きのう きめます。|Ini mencampur kemarin dengan bentuk yang tidak sesuai dan tidak menyebut pesanan.|さかなは かわで およいでいます。|Ini ikan di sungai, bukan meminta rekomendasi hidangan.
こちらの やきざかなが にんきです。ごはんも ついています。|Kochira no yakizakana ga ninki desu. Gohan mo tsuite imasu.|Ikan panggang ini populer. Nasinya juga sudah termasuk.
では、それを おねがいします。たれは さかなに かけるんですか。|Dewa, sore o onegaishimasu. Tare wa sakana ni kakeru n desu ka.|Kalau begitu, saya pesan itu. Apakah sausnya dituangkan ke ikan?|では、さかなを かわに かえしてください。|Ini meminta ikan dikembalikan ke sungai, bukan memesan hidangan.|たれは なんじに ねますか。|Ini menanyakan jam tidur saus, bukan cara memakai saus.
はい。すこしずつ かけて、めしあがってください。|Hai. Sukoshi zutsu kakete, meshiagatte kudasai.|Ya. Silakan tuangkan sedikit demi sedikit lalu nikmati makanannya.
わかりました。まず、すこし かけてみます。|Wakarimashita. Mazu, sukoshi kakete mimasu.|Baik. Pertama, saya akan mencoba menuangkan sedikit.|はい、いちどに ぜんぶ かけます。|Ini menuangkan semuanya sekaligus, tidak mengikuti petunjuk sedikit demi sedikit.|いいえ、えきは むこうです。|Ini arah stasiun, bukan tanggapan terhadap cara makan.
''','できれば berarti kalau bisa. 〜んですか meminta penjelasan. かけてみます berarti mencoba menuangkan.')
scene(2,3,'Persiapan liburan','Minta saran barang bawaan dan tanyakan kegiatan yang bisa dilakukan.', '''
らいげつ、しまへ りょこうするんですか。|Raigetsu, shima e ryokō suru n desu ka.|Bulan depan kamu akan berlibur ke pulau?
はい。はじめてなので、なにを もっていけば いいか おしえてください。|Hai. Hajimete na node, nani o motte ikeba ii ka oshiete kudasai.|Ya. Karena baru pertama kali, tolong beri tahu apa yang sebaiknya dibawa.|はい、きょねん いきました。はじめてじゃありません。|Ini bertentangan dengan konteks perjalanan pertama yang sedang disiapkan.|しまを ふたつ ください。|Pulau bukan barang pesanan untuk dibawa; tanyakan persiapan perjalanan.
ひざしが つよいので、ぼうしを もっていった ほうが いいですよ。|Hizashi ga tsuyoi node, bōshi o motte itta hō ga ii desu yo.|Karena sinar mataharinya kuat, sebaiknya kamu membawa topi.
わかりました。かるい ぼうしを かっておきます。|Wakarimashita. Karui bōshi o katte okimasu.|Baik. Saya akan membeli topi yang ringan lebih dulu.|わかりました。ぼうしは もっていかない ことにします。|Ini justru memutuskan tidak membawa topi setelah menerima saran membawanya.|ぼうしは きのう あめでした。|Ini menggabungkan topi dengan cuaca secara tidak sesuai.
うみでは、およいだり さかなを みたり できますよ。|Umi de wa, oyoidari sakana o mitari dekimasu yo.|Di laut, kamu bisa berenang, melihat ikan, dan sebagainya.
いいですね。ふねにも のれますか。|Ii desu ne. Fune ni mo noremasu ka.|Bagus, ya. Apakah saya juga bisa naik perahu?|ふねを のんでも いいですか。|Perahu tidak diminum; tanyakan kemungkinan menaikinya.|きのうの ひこうきは しろかったです。|Ini warna pesawat kemarin, bukan kegiatan di tempat tujuan.
はい。てんきが よければ、ちいさい ふねで しまを まわれます。|Hai. Tenki ga yokereba, chiisai fune de shima o mawaremasu.|Ya. Kalau cuacanya bagus, kamu bisa mengelilingi pulau dengan perahu kecil.
たのしみです。でかけるまえに、てんきを かくにんします。|Tanoshimi desu. Dekakeru mae ni, tenki o kakunin shimasu.|Saya menantikannya. Sebelum berangkat, saya akan memeriksa cuaca.|てんきは かくにんしないで、いつでも のります。|Ini mengabaikan syarat cuaca yang baru disampaikan.|はい、ふねは わたしの しゅみですか。|Ini pertanyaan yang tidak menanggapi saran memeriksa cuaca perjalanan.
''','〜たほうがいいです menyarankan tindakan. のれます adalah bentuk potensial のる: bisa naik.')
scene(2,4,'Festival & perubahan rencana','Bahas rencana jika hujan serta pastikan acara sudah dimulai atau belum.', '''
にちようびの まつり、あめが ふったら どうしますか。|Nichiyōbi no matsuri, ame ga futtara dō shimasu ka.|Untuk festival hari Minggu, bagaimana kalau hujan?
あめだったら、やたいでは なくて、ホールの なかで たべましょう。|Ame dattara, yatai de wa nakute, hōru no naka de tabemashō.|Kalau hujan, mari makan di dalam aula, bukan di kios luar.|きのうは あめでした。|Ini cuaca kemarin, bukan rencana jika hujan hari Minggu.|あめが ふったので、にちようびは きのうです。|Ini mencampur sebab hujan dan hari secara tidak sesuai; usulkan rencana pengganti.
そうしましょう。コンサートは なんじからですか。|Sō shimashō. Konsāto wa nanji kara desu ka.|Mari begitu. Konsernya mulai pukul berapa?
さんじからの よていです。すこし はやく つくように しましょう。|Sanji kara no yotei desu. Sukoshi hayaku tsuku yō ni shimashō.|Jadwalnya mulai pukul tiga. Mari usahakan tiba sedikit lebih awal.|さんじまで ねてから でかけましょう。|Ini membuat kalian baru berangkat setelah konser mulai, tidak sesuai tujuan datang lebih awal.|コンサートは さんびゃくえんの ねこです。|Ini bukan informasi waktu mulai konser.
［かいじょうで］コンサートは もう はじまりましたか。|Kaijō de. Konsāto wa mō hajimarimashita ka.|[Di lokasi acara] Apakah konser sudah dimulai?
いいえ、まだ はじまっていません。いま、じゅんびしている ところです。|Iie, mada hajimatte imasen. Ima, junbi shite iru tokoro desu.|Belum dimulai. Sekarang mereka sedang melakukan persiapan.|はい、もう おわりました。これから はじまります。|Ini menyatakan sudah selesai sekaligus baru akan mulai, tidak konsisten dalam alur ini.|かいじょうは とても おいしいです。|Ini menggambarkan lokasi sebagai makanan enak, bukan status konser.
よかったです。では、ここで まちましょう。|Yokatta desu. Dewa, koko de machimashō.|Syukurlah. Kalau begitu, mari tunggu di sini.
はい。はじまるまえに、でんわの おとを けしておきます。|Hai. Hajimaru mae ni, denwa no oto o keshite okimasu.|Baik. Sebelum mulai, saya akan mematikan bunyi ponsel lebih dulu.|はい、おわってから はじめて きます。|Ini baru datang setelah selesai, tidak sesuai kesepakatan menunggu acara mulai.|いいえ、しごとは きのうでした。|Ini membahas pekerjaan kemarin, bukan persiapan menonton konser.
''','〜たら menyatakan kondisi kalau terjadi sesuatu. 〜ているところです menyatakan kegiatan yang sedang berlangsung.')
scene(2,5,'Hari istimewa & harapan','Ceritakan kebiasaan perayaan dan sampaikan harapan untuk orang lain.', '''
おしょうがつは、どう すごしましたか。|Oshōgatsu wa, dō sugoshimashita ka.|Bagaimana kamu melewatkan libur Tahun Baru?
かぞくと りょうりを つくったり、えいがを みたり していました。|Kazoku to ryōri o tsukuttari, eiga o mitari shite imashita.|Saya membuat masakan dan menonton film bersama keluarga, dan sebagainya.|らいねんは りょうりを つくります。|Ini rencana tahun depan, bukan pengalaman libur yang sudah lewat.|かぞくは さんびゃくえんです。|Ini menyebut harga keluarga dan tidak menjawab kegiatan perayaan.
あなたの まちでは、あきに おまつりが あるんですね。|Anata no machi de wa, aki ni omatsuri ga aru n desu ne.|Di kotamu ada festival saat musim gugur, ya.
はい。まいとし、みんなで おどって、しゅうかくを いわいます。|Hai. Maitoshi, minna de odotte, shūkaku o iwaimasu.|Ya. Setiap tahun kami menari bersama dan merayakan hasil panen.|はい、きのう うまれました。|Ini menyatakan lahir kemarin, bukan menjelaskan festival tahunan.|いいえ、でんしゃは みぎです。|Ini petunjuk arah dan tidak menjawab pertanyaan tentang festival.
ことしは、わたしも みに いきたいです。|Kotoshi wa, watashi mo mi ni ikitai desu.|Tahun ini saya juga ingin pergi melihatnya.
ぜひ きてください。よかったら、まつりを あんないします。|Zehi kite kudasai. Yokattara, matsuri o annai shimasu.|Datanglah. Kalau kamu berkenan, saya akan memandu di festival.|ことしの まつりは きのうの らいねんです。|Ini urutan waktu yang tidak jelas, bukan menanggapi keinginan berkunjung.|まつりを ひとつ かして ください。|Festival bukan barang pinjaman; tawarkan bantuan berkunjung.
ありがとうございます。みんなに いい ことが ありますように。|Arigatō gozaimasu. Minna ni ii koto ga arimasu yō ni.|Terima kasih. Semoga hal-hal baik datang kepada semuanya.
ほんとうですね。たのしい いちねんに なりますように。|Hontō desu ne. Tanoshii ichinen ni narimasu yō ni.|Benar, ya. Semoga menjadi tahun yang menyenangkan.|いいえ、いちねんは あかい くつです。|Ini tidak menanggapi harapan untuk tahun yang baik.|わたしは きのう きっぷを かいましたか。|Ini bertanya tentang pembelian tiket, bukan membalas harapan Hori.
''','〜たり〜たりしていました menceritakan beberapa kegiatan dahulu. 〜ますように mengungkapkan doa atau harapan.')
scene(2,6,'Memilih barang daring','Jelaskan alasan mengganti alat dan bandingkan dua pilihan barang.', '''
なにを さがしているんですか。|Nani o sagashite iru n desu ka.|Apa yang sedang kamu cari?
あたらしい そうじきです。まえのが こわれてしまったんです。|Atarashii sōjiki desu. Mae no ga kowarete shimatta n desu.|Penyedot debu baru. Yang lama terlanjur rusak.|きのう そうじきを つかいませんでした。|Ini tidak memakai alat kemarin, bukan menjelaskan barang pengganti dan alasannya.|そうじきで パンを つくります。|Ini memakai penyedot debu untuk membuat roti, tidak sesuai kebutuhan alat.
この ふたつは どうですか。しろいのは やすいですよ。|Kono futatsu wa dō desu ka. Shiroi no wa yasui desu yo.|Bagaimana dua pilihan ini? Yang putih murah.
でも、ちょっと おもすぎると おもいます。|Demo, chotto omosugiru to omoimasu.|Tetapi menurut saya, yang itu agak terlalu berat.|しろいのは あかいです。|Ini menyebut benda putih sebagai merah, bukan memberi penilaian yang sesuai informasi.|ふたつめの かどを まがってください。|Ini petunjuk jalan, bukan menilai barang.
では、くろいのは？しろいのより かるくて、つかいやすそうです。|Dewa, kuroi no wa? Shiroi no yori karukute, tsukaiyasusō desu.|Kalau yang hitam? Lebih ringan daripada yang putih dan kelihatannya mudah dipakai.
こちらの ほうが よさそうですね。ねだんは いくらですか。|Kochira no hō ga yosasō desu ne. Nedan wa ikura desu ka.|Yang ini kelihatannya lebih bagus, ya. Berapa harganya?|こちらは おいしそうですね。いただきます。|Ini menanggapi barang sebagai makanan, tidak sesuai memilih alat.|そうじきを およがせてください。|Ini meminta alat dibuat berenang, bukan meminta informasi pembelian.
こちらは はっせんえんです。|Kochira wa hassen-en desu.|Yang ini harganya delapan ribu yen.
わかりました。レビューも よんでから、きめます。|Wakarimashita. Rebyū mo yonde kara, kimemasu.|Baik. Setelah membaca ulasannya juga, saya akan memutuskan.|はい、はちじに あいましょう。|Ini mengira delapan ribu yen sebagai janji waktu bertemu.|きのう はっせんえんに なります。|Ini urutan waktu dan pernyataan yang tidak sesuai keputusan pembelian sekarang.
''','こわれてしまいました menyatakan kerusakan yang disesali. 〜すぎる = terlalu; 〜やすい = mudah dilakukan.')
scene(2,7,'Tur tempat bersejarah','Pahami informasi pasif, sampaikan kabar dari penjelasan dan ikuti aturan tempat.', '''
この まちに くるのは、はじめてですか。|Kono machi ni kuru no wa, hajimete desu ka.|Apakah ini pertama kalinya kamu datang ke kota ini?
いいえ、にかいめです。でも、この はくぶつかんは はじめてです。|Iie, nikaime desu. Demo, kono hakubutsukan wa hajimete desu.|Bukan, ini kedua kali. Tetapi museum ini baru pertama kali.|いいえ、はじめてです。にかいめじゃありません。|Ini menyangkal pertanyaan tetapi menyatakan pertama kali secara bertentangan.|はくぶつかんを にまい ください。|Museum bukan benda lembaran; ceritakan pengalaman kunjunganmu.
この たてものは、およそ ひゃくねんまえに たてられました。|Kono tatemono wa, oyoso hyakunen mae ni tateraremashita.|Gedung ini dibangun sekitar seratus tahun yang lalu.
そうですか。なかの えも ふるいんですか。|Sō desu ka. Naka no e mo furui n desu ka.|Begitu, ya. Apakah lukisan di dalamnya juga tua?|あした ひゃくねんまえに たてます。|Ini menggabungkan besok dan seratus tahun lalu, tidak sesuai informasi sejarah.|その えを あした かきました。|Ini mencampur besok dan bentuk lampau, bukan menanyakan usia lukisan.
はい。この えは にひゃくねんまえに かかれたそうです。|Hai. Kono e wa nihyakunen mae ni kakareta sō desu.|Ya. Menurut keterangannya, lukisan ini dilukis dua ratus tahun lalu.
へえ。きねんに しゃしんを とっても いいですか。|Hē. Kinen ni shashin o totte mo ii desu ka.|Wah. Bolehkah mengambil foto sebagai kenang-kenangan?|わたしが あした にひゃくねんまえに かきます。|Ini waktu yang tidak konsisten, bukan meminta izin di museum.|この えを たべても いいですか。|Lukisan bukan makanan; mintalah izin mengambil foto jika diperlukan.
ここは さつえいきんしです。いりぐちにも かいてあります。|Koko wa satsuei kinshi desu. Iriguchi ni mo kaite arimasu.|Di sini dilarang mengambil foto. Di pintu masuk juga tertulis.
わかりました。しゃしんは とらないで、ゆっくり みます。|Wakarimashita. Shashin wa toranaide, yukkuri mimasu.|Baik. Saya akan melihat-lihat dengan santai tanpa mengambil foto.|はい、では しゃしんを たくさん とります。|Ini melanggar larangan mengambil foto yang baru dijelaskan.|わかりました。えを もってかえります。|Ini membawa pulang lukisan museum, bukan mengikuti aturan pengunjung.
''','たてられました dan かかれました adalah bentuk pasif. 〜そうです di sini menyampaikan informasi dari keterangan, bukan kesan tampilan.')
scene(2,8,'Kebiasaan ramah lingkungan','Tanggapi hal yang terlupa, ceritakan kebiasaan hemat dan pemakaian ulang barang.', '''
へやの でんきが ついたままですよ。もう つかわないんですか。|Heya no denki ga tsuita mama desu yo. Mō tsukawanai n desu ka.|Lampu kamar masih menyala. Kamarnya sudah tidak dipakai lagi?
あ、けすのを わすれました。すぐ けしてきます。|A, kesu no o wasuremashita. Sugu keshite kimasu.|Oh, saya lupa mematikannya. Saya akan segera mematikannya lalu kembali.|はい、だれも いませんから、ずっと つけておきます。|Ini membiarkan lampu terus menyala saat tidak dipakai, berlawanan dengan teguran Hori.|でんきは とても おいしいです。|Ini menggambarkan listrik sebagai makanan, bukan menanggapi lampu yang terlupa.
ほかに、なにか エコかつどうを していますか。|Hoka ni, nanika eko katsudō o shite imasu ka.|Selain itu, apakah kamu melakukan kegiatan ramah lingkungan?
かいものには、じぶんの バッグを もっていくように しています。|Kaimono ni wa, jibun no baggu o motte iku yō ni shite imasu.|Saya berusaha membiasakan membawa tas sendiri saat berbelanja.|かいものの たびに、ふくろを たくさん すてます。|Ini menambah sampah kantong, bukan kebiasaan ramah lingkungan yang ditanya.|バッグは なんじに かえりますか。|Ini menanyakan jam pulang tas dan tidak menjelaskan kebiasaanmu.
わたしもです。きなくなった ふくは、どうしていますか。|Watashi mo desu. Kinaku natta fuku wa, dō shite imasu ka.|Saya juga. Apa yang kamu lakukan terhadap baju yang sudah tidak dipakai?
まだ きれいな ふくは、ひつような ひとに あげています。|Mada kirei na fuku wa, hitsuyō na hito ni agete imasu.|Baju yang masih bagus saya berikan kepada orang yang memerlukannya.|きれいな ふくも ぜんぶ すてるために かいます。|Ini sengaja membuang baju yang masih bagus, tidak sesuai tujuan pemakaian ulang.|ふくは きのう はれでした。|Ini mencampur baju dengan cuaca, bukan cara menggunakan kembali barang.
いいですね。わたしは ふるい シャツで ふくろを つくりました。|Ii desu ne. Watashi wa furui shatsu de fukuro o tsukurimashita.|Bagus, ya. Saya membuat kantong dari kemeja lama.
すてきですね。ものを ながく つかうのは たいせつですね。|Suteki desu ne. Mono o nagaku tsukau no wa taisetsu desu ne.|Bagus, ya. Memakai barang untuk waktu yang lama itu penting, ya.|ふるい シャツは あした うまれました。|Ini urutan waktu yang tidak sesuai, bukan menanggapi pemakaian ulang barang.|その ふくろは えきで およぎますか。|Ini menanyakan kantong berenang di stasiun, tidak terkait hasil daur ulang Hori.
''','〜たまま menyatakan keadaan yang tetap berlangsung. 〜ようにしています menyatakan kebiasaan yang diusahakan.')
scene(2,9,'Kenangan & perubahan diri','Ceritakan orang yang dikagumi, masa kecil dan kemampuan yang berkembang.', '''
この しゃしんの ひと、しっていますか。|Kono shashin no hito, shitte imasu ka.|Kamu tahu orang di foto ini?
はい、もとの せんせいです。わたしが しょうがくせいの とき、えを おしえてくれました。|Hai, moto no sensei desu. Watashi ga shōgakusei no toki, e o oshiete kuremashita.|Ya, beliau mantan guru saya. Saat saya masih SD, beliau mengajari saya menggambar.|はい、あした はじめて うまれます。|Ini membicarakan lahir besok, bukan siapa orang yang sudah kamu kenal.|この しゃしんは きっぷです。|Ini menyebut foto sebagai tiket dan tidak menjelaskan orang di dalam foto.
へえ。どうして、その せんせいが すきなんですか。|Hē. Dōshite, sono sensei ga suki na n desu ka.|Wah. Mengapa kamu menyukai guru itu?
えを かく たのしさを おしえてくれたからです。いまも そんけいしています。|E o kaku tanoshisa o oshiete kureta kara desu. Ima mo sonkei shite imasu.|Karena beliau mengajari saya kegembiraan menggambar. Sampai sekarang saya masih menghormatinya.|せんせいは あそこです。|Ini menunjukkan lokasi guru, bukan alasan kamu mengaguminya.|すきですから、どうしてですか。|Ini mengulang kesukaan dan bertanya kembali, belum menjelaskan alasannya.
こどもの ときから、えが すきだったんですね。|Kodomo no toki kara, e ga suki datta n desu ne.|Berarti sejak kecil kamu sudah suka menggambar, ya.
はい。でも、はじめは じょうずじゃありませんでした。なんども れんしゅうしました。|Hai. Demo, hajime wa jōzu ja arimasen deshita. Nando mo renshū shimashita.|Ya. Tetapi awalnya saya belum pandai. Saya berlatih berkali-kali.|いいえ、わたしは まだ うまれていません。|Ini menyatakan belum lahir, tidak sesuai cerita pengalaman masa kecil.|れんしゅうは さんびゃくえんですか。|Ini harga latihan dan tidak menjelaskan perkembangan kemampuanmu.
れんしゅうして、なにが かわりましたか。|Renshū shite, nani ga kawarimashita ka.|Setelah berlatih, apa yang berubah?
すこしずつ、ひとの かおが かけるように なりました。|Sukoshi zutsu, hito no kao ga kakeru yō ni narimashita.|Sedikit demi sedikit, saya menjadi bisa menggambar wajah orang.|ひとの かおを かけるように なりたいです。まだ できません。|Ini masih keinginan dan belum bisa, bukan perubahan kemampuan yang sudah terjadi dalam alur ini.|かおは つくえの なかに あります。|Ini letak wajah, bukan kemampuan menggambar yang berkembang.
''','〜てくれました menyatakan bantuan orang lain kepadamu. 〜ようになりました menyatakan perubahan kemampuan atau kebiasaan.')

# Source mapping is topic-level, not a claim to cover every Can-do in each lesson.
import re
for s in SCENES:
 for line in s['lines']:
  if line['jp'].startswith('［'):
   stage,jp=line['jp'][1:].split('］',1);line['stage']={'どようび':'Hari Sabtu','ピクニックで':'Saat piknik','かいじょうで':'Di lokasi acara'}[stage];line['jp']=jp;line['rom']=line['rom'].split('. ',1)[1];line['id']=re.sub(r'^\[[^\]]+\]\s*','',line['id'])
# Correct a spelling in the authored romanization.
SCENES[8]['lines'][7]['rom']=SCENES[8]['lines'][7]['rom'].replace('Oniisan','Onēsan')
# Short, explicit communicative goals make alternative valid replies unambiguous.
INTENTS=[
 ['Sebutkan tempat tinggal sekarang dan dengan siapa kamu tinggal.','Jelaskan bahasa yang dipakai bersama kakak.','Ceritakan hobi memotret.','Terima permintaan dan janjikan membawa foto saat bertemu lagi.'],
 ['Jelaskan bahwa di tempatmu sedang hujan sejak pagi.','Tanyakan apakah cuaca di tempat Hori sudah menjadi hangat.','Sebutkan musim yang kamu sukai beserta alasannya.','Sampaikan terima kasih dan bahwa kamu menantikan fotonya.'],
 ['Gambarkan taman di dekat stasiun.','Berikan petunjuk menuju taman: belok kiri di sudut ketiga.','Betulkan sudut kedua menjadi sudut ketiga.','Sebutkan gedung merah sebagai penanda lokasi taman.'],
 ['Usulkan pukul tujuh karena pukul enam masih bekerja.','Sampaikan bahwa kamu belum ke menara dan ingin melihat pemandangan malam.','Pastikan waktu dan tempat yang baru disepakati.','Minta maaf karena terlambat dan jelaskan keretanya terlambat.'],
 ['Ceritakan bahasa yang pernah dipelajari dan yang sedang dipelajari.','Jelaskan bagian belajar bahasa Jepang yang terasa sulit.','Terima tawaran bantuan dan minta diajarkan cara membaca.','Tawarkan pergi bersama ke stasiun.'],
 ['Sebutkan bekal yang akan kamu buat dan bawa besok.','Pilih teh dingin dan tawarkan membelinya lebih dulu.','Terima makanan dan beri kesan rasanya.','Tolak tambahan makanan dengan sopan karena sudah kenyang.'],
 ['Sebutkan ini kunjungan pertamamu ke kantor cabang.','Ceritakan pengalaman bertemu Yamada di rapat tahun lalu.','Minta izin memakai printer.','Berterima kasih dan sampaikan urutan persiapanmu.'],
 ['Jelaskan kebiasaan melihat ponsel sampai larut.','Terima saran dan katakan akan mencobanya mulai malam ini.','Tanyakan lama berjalan karena kamu ingin mulai juga.','Sampaikan niat melanjutkan kebiasaan itu sedikit demi sedikit.'],
 ['Jelaskan tas itu hadiah dari kakak perempuan, bukan kamu beli.','Tanyakan rencana perayaan ulang tahun kakak Hori.','Usulkan makan bersama di rumah.','Sarankan memilih bunga yang disukai kakak Hori.'],
 ['Jelaskan nama perusahaan dan pekerjaanmu.','Sampaikan kemampuan kerja yang ingin kamu capai.','Pastikan ciri orang yang ditunjuk dan beri kesan pertama.','Minta diperkenalkan kepada teman Hori.'],
 ['Sebutkan dua tamu dan mintalah tempat dekat jendela.','Minta rekomendasi hidangan ikan karena belum memutuskan pesanan.','Pesan ikan panggang dan tanyakan cara memakai sausnya.','Sampaikan bahwa kamu akan mencoba menuangkan sedikit saus.'],
 ['Jelaskan ini perjalanan pertama dan mintalah saran barang bawaan.','Terima saran dan katakan akan membeli topi lebih dulu.','Tanyakan apakah kamu bisa naik perahu.','Sampaikan bahwa kamu akan memeriksa cuaca sebelum pergi.'],
 ['Usulkan makan di dalam aula jika hujan.','Sampaikan jadwal konser dan usulkan tiba lebih awal.','Jelaskan konser belum dimulai dan persiapan sedang berlangsung.','Sampaikan persiapan mematikan bunyi ponsel sebelum konser.'],
 ['Ceritakan kegiatan bersama keluarga saat libur Tahun Baru yang sudah lewat.','Jelaskan kegiatan dalam festival tahunan di kota contoh ini.','Undang Hori datang dan tawarkan memandunya.','Balas harapan Hori dengan harapan untuk tahun yang menyenangkan.'],
 ['Jelaskan barang yang dicari dan alasan alat lama perlu diganti.','Beri penilaian bahwa barang putih terlalu berat.','Nilai barang hitam lebih baik dan tanyakan harganya.','Sampaikan rencana membaca ulasan sebelum memutuskan.'],
 ['Jelaskan sudah dua kali ke kota itu tetapi baru pertama kali ke museumnya.','Tanyakan usia lukisan di dalam gedung.','Minta izin mengambil foto.','Tanggapi larangan dengan berjanji melihat tanpa memotret.'],
 ['Akui lupa mematikan lampu dan sampaikan akan segera mematikannya.','Ceritakan kebiasaan membawa tas belanja sendiri.','Jelaskan baju yang masih bagus diberikan kepada orang yang memerlukan.','Apresiasi penggunaan kembali kemeja lama.'],
 ['Kenalkan guru gambar yang ada di foto.','Jelaskan alasan kamu mengagumi guru itu.','Ceritakan bahwa awalnya belum pandai dan harus sering berlatih.','Ceritakan perubahan kemampuan menggambar yang sudah terjadi.']
]
# Replace nonsensical distractors with natural Japanese from different contexts.
REPAIRS={
 'あめは さんびゃくえんです。':('この かさは さんびゃくえんです。','Ini harga payung, bukan menanggapi perubahan musim di tempat Hori.'),
 'タワーを たべてみたいです。':('この まちの りょうりを たべてみたいです。','Ini ingin mencoba makanan setempat, bukan menjawab pengalaman dan keinginan melihat menara.'),
 'かんじは あした きます。':('あした、あたらしい じしょを かいます。','Ini rencana membeli kamus, bukan penilaian tentang belajar bahasa Jepang.'),
 'にほんごを にまい ください。':('にほんごの ほんを にさつ ください。','Ini meminta dua buku, bukan menjelaskan kesulitan belajar.'),
 'えきは とても おいしいです。':('えきの ちかくの パンは おいしいです。','Ini rasa roti dekat stasiun, bukan menawarkan bantuan pergi ke stasiun.'),
 'おやすみなさい。サラダを ねます。':('サラダは あした かってきます。','Ini rencana membeli salad besok, bukan menerima makanan yang ditawarkan sekarang.'),
 'はい、きのうも ここに きました。はじめてです。':('きのうも ここに きました。','Ini berarti sudah datang kemarin, sedangkan tujuan balasannya menyatakan kunjungan pertama.'),
 'この プリンターを たべても いいですか。':('この コーヒーを のんでも いいですか。','Ini meminta izin minum kopi, bukan menggunakan printer.'),
 'おねえさんは どの えきですか。':('おねえさんは、どの えきの ちかくに すんでいますか。','Ini menanyakan tempat tinggal kakak Hori, bukan rencana perayaan ulang tahun.'),
 'ウェブサイトは おいしいです。':('かいしゃの ちかくに、おいしい みせが あります。','Ini restoran dekat kantor, bukan menjelaskan pekerjaanmu.'),
 'ふたりを たべたいです。':('ふたりで えいがを みに いきたいです。','Ini rencana menonton film berdua, bukan menyampaikan jumlah tamu dan pilihan kursi.'),
 'はい、きのう きめます。':('きのう、よるごはんの メニューを きめました。','Ini menu makan kemarin, bukan menjawab apakah pesanan sekarang sudah diputuskan.'),
 'では、さかなを かわに かえしてください。':('この さかなは かわに すんでいますか。','Ini menanyakan habitat ikan, bukan memesan hidangan dan cara memakai saus.'),
 'たれは なんじに ねますか。':('この みせは なんじに しまりますか。','Ini jam tutup toko, bukan cara memakai saus pada hidangan.'),
 'しまを ふたつ ください。':('しまへの きっぷを にまい ください。','Ini membeli tiket, bukan meminta saran barang yang perlu dibawa.'),
 'ぼうしは きのう あめでした。':('きのう、ぼうしを みせで みました。','Ini melihat topi kemarin, bukan memutuskan persiapan membelinya.'),
 'ふねを のんでも いいですか。':('ふねの なかで のみものを かえますか。','Ini menanyakan pembelian minuman di perahu, bukan apakah kamu bisa naik perahu.'),
 'はい、ふねは わたしの しゅみですか。':('わたしの しゅみは、ふねの しゃしんを とることです。','Ini hobi memotret perahu, bukan niat memeriksa cuaca sebelum pergi.'),
 'あめが ふったので、にちようびは きのうです。':('きのうは あめだったので、いえに いました。','Ini alasan berada di rumah kemarin, bukan rencana cadangan untuk festival.'),
 'コンサートは さんびゃくえんの ねこです。':('コンサートの きっぷは さんぜんえんです。','Ini harga tiket, sedangkan Hori menanyakan waktu mulai.'),
 'かいじょうは とても おいしいです。':('かいじょうの そばの みせは おいしいですよ。','Ini makanan di dekat lokasi, bukan status konser saat ini.'),
 'はい、おわってから はじめて きます。':('はい。コンサートが おわってから、でんわします。','Ini rencana menelepon setelah konser, bukan persiapan mematikan bunyi ponsel sebelum konser.'),
 'かぞくは さんびゃくえんです。':('かぞくへの おみやげは さんぜんえんでした。','Ini harga oleh-oleh, bukan kegiatan saat libur Tahun Baru.'),
 'はい、きのう うまれました。':('はい。わたしの おいは、きのう うまれました。','Ini kabar kelahiran keponakan, bukan menjelaskan festival tahunan.'),
 'ことしの まつりは きのうの らいねんです。':('まつりは、きのう テレビで みました。','Ini melihat festival di televisi kemarin, bukan mengundang Hori dan menawarkan bantuan.'),
 'まつりを ひとつ かして ください。':('まつりの パンフレットを かして ください。','Ini meminjam brosur, bukan menanggapi keinginan Hori berkunjung.'),
 'いいえ、いちねんは あかい くつです。':('わたしの あたらしい くつは あかいです。','Ini warna sepatu baru, bukan membalas harapan untuk tahun yang baik.'),
 'そうじきで パンを つくります。':('パンを つくる きかいを さがしています。','Ini mencari alat pembuat roti, bukan penyedot debu pengganti alat yang rusak.'),
 'しろいのは あかいです。':('しろいのは、きょねんの モデルだそうです。','Ini informasi model tahun lalu, bukan pendapat bahwa barang itu terlalu berat.'),
 'こちらは おいしそうですね。いただきます。':('こちらの コーヒーは おいしいですね。','Ini rasa kopi, bukan membandingkan penyedot debu dan menanyakan harganya.'),
 'そうじきを およがせてください。':('そうじきを はこに いれてください。','Ini meminta alat dimasukkan ke kotak, bukan menilai alat dan menanyakan harga.'),
 'きのう はっせんえんに なります。':('きのう、べつの みせで はっせんえんのを みました。','Ini melihat barang di toko lain kemarin, bukan menyatakan akan membaca ulasan sebelum memutuskan.'),
 'はくぶつかんを にまい ください。':('はくぶつかんの きっぷを にまい ください。','Ini membeli tiket, bukan menjelaskan pengalaman kunjungan.'),
 'あした ひゃくねんまえに たてます。':('この たてものは らいねん とりこわすそうです。','Ini kabar rencana pembongkaran, bukan menanyakan usia lukisan di dalamnya.'),
 'その えを あした かきました。':('あした、この たてものの えを かくつもりです。','Ini rencana menggambar gedung besok, bukan pertanyaan tentang lukisan museum.'),
 'わたしが あした にひゃくねんまえに かきます。':('わたしも きょねん、えを かきました。','Ini pengalaman menggambar tahun lalu, bukan meminta izin mengambil foto.'),
 'この えを たべても いいですか。':('この えの なまえは なんですか。','Ini bertanya judul lukisan, sedangkan tujuan balasannya meminta izin memotret.'),
 'でんきは とても おいしいです。':('この へやの でんきだいは たかいですね。','Ini biaya listrik kamar, bukan mengakui lupa dan segera mematikan lampu.'),
 'バッグは なんじに かえりますか。':('かいものから なんじに かえりますか。','Ini menanyakan jam pulang berbelanja, bukan menjelaskan kebiasaan ramah lingkungan.'),
 'ふくは きのう はれでした。':('きのうは はれだったので、ふくを あらいました。','Ini mencuci baju kemarin, bukan memanfaatkan baju yang sudah tidak dipakai.'),
 'ふるい シャツは あした うまれました。':('あした、あたらしい シャツを かいに いきます。','Ini rencana membeli kemeja baru, bukan mengapresiasi pemakaian ulang kemeja lama.'),
 'その ふくろは えきで およぎますか。':('その ふくろは えきで うっていますか。','Ini bertanya penjualan kantong di stasiun, bukan mengapresiasi cara Hori memakai ulang barang.'),
 'はい、あした はじめて うまれます。':('わたしの いもうとは、らいげつ こどもが うまれます。','Ini kabar keluarga, bukan mengenalkan orang di foto.'),
 'この しゃしんは きっぷです。':('この しゃしんは、きょねんの りょこうで とりました。','Ini kapan foto diambil, bukan identitas guru di foto.'),
 'いいえ、わたしは まだ うまれていません。':('いいえ。いまは こどもに えを おしえています。','Ini pekerjaan mengajar sekarang, bukan kemampuan dan latihan pada masa kecil.'),
}
for scene_index,s in enumerate(SCENES):
 for i,l in enumerate(s['lines']):
  if l['who']=='me':
   l['intent']=INTENTS[scene_index][i//2]
   for w in l['salah']:
    if w['jp'] in REPAIRS:w['jp'],w['why']=REPAIRS[w['jp']]

sources=json.loads((ROOT/'data/kaiwa-sources/index.json').read_text())['sources']
for sc in SCENES:
 ref=next(x for x in sources if x['id']==sc['source']['id']);sc['source']['pages']=sorted({pg for n in sc['source']['lessons'] for pg in range(ref['lessonPages'][str(n)],ref['lessonPages'].get(str(n+1),ref['pages'])+1)})
assert len(SCENES)==18
for s in SCENES:
 for l in s['lines']:
  assert all(l[k].strip() for k in ['jp','rom','id'])
  if l['who']=='me':assert len({l['jp'],*[x['jp'] for x in l['salah']]})==3
# Activate uploaded recordings only while every line still matches its recorded script.
record_path=ROOT/'data/kaiwa-n4-audio-import-20261101.json'
if record_path.exists():
 recordings={row['file']:row for row in json.loads(record_path.read_text())['files']}
 for sc in SCENES:
  matches=True
  for i,l in enumerate(sc['lines'],1):
   name=f"{sc['id']}-{i}.mp3";row=recordings.get(name)
   if not row or row['jp']!=l['jp'] or row['gender']!=('female' if l['who']=='npc' else 'male'):matches=False;break
   path=ROOT/'dist/assets/kaiwa-n4'/name
   assert path.exists() and hashlib.sha256(path.read_bytes()).hexdigest()==row['sha256'],'Missing or changed recording: '+name
  if matches:sc['audioMode']='recorded';sc['audioFolder']='kaiwa-n4'
(ROOT/'data/kaiwa-n4.json').write_text(json.dumps(dict(level='N4',referenceLevel='A2',scenarios=SCENES),ensure_ascii=False,indent=2)+'\n')
(ROOT/'dist/kaiwa-n4-data.js').write_text('/* Original A2 topic adaptations; generated by scripts/build-kaiwa-n4.py. */\nwindow.GAKU_KAIWA_N4_DATA = '+json.dumps(SCENES,ensure_ascii=False,separators=(',',':'))+';\n')
manifest=[dict(id=f"{s['id']}-{i+1}",pack=s['id'],file=f"{s['id']}-{i+1}.mp3",turns=[dict(speaker=l.get('gender',s['gender'] if l['who']=='npc' else 'male'),text=l['jp'])]) for s in SCENES for i,l in enumerate(s['lines'])]
(ROOT/'scripts/voice-v3/kaiwa-n4-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2)+'\n')
print(f'Built {len(SCENES)} N4 scenarios / {len(manifest)} lines / 72 practice replies')
