"""Authored N5 quiz frames. Five lexical situations per frame, three frames per subcategory.
Each frame names the target phrase and contrasting choices; translations constrain meaning.
"""
FRAMES={}
def add(key,jp,target,wrong,meaning,values,why):
    FRAMES.setdefault(key,[]).append(dict(jp=jp,target=target,wrong=wrong.split('|'),meaning=meaning,values=values,why=why))
# Values are Japanese/Indonesian pairs and replace {x}/{m}.
THINGS=[('ほん','buku'),('かばん','tas'),('じしょ','kamus'),('くつ','sepatu'),('とけい','jam')]
PLACES=[('がっこう','sekolah'),('えき','stasiun'),('こうえん','taman'),('びょういん','rumah sakit'),('としょかん','perpustakaan')]
PEOPLE=[('たなかさん','Tanaka'),('やまださん','Yamada'),('さとうさん','Sato'),('すずきさん','Suzuki'),('ミラーさん','Miller')]
DAYS=[('げつようび','Senin'),('かようび','Selasa'),('すいようび','Rabu'),('もくようび','Kamis'),('きんようび','Jumat')]
FOOD=[('パン','roti'),('ごはん','nasi'),('りんご','apel'),('さかな','ikan'),('やさい','sayuran')]
DRINK=[('みず','air'),('おちゃ','teh'),('コーヒー','kopi'),('ぎゅうにゅう','susu'),('ジュース','jus')]
HOURS=[('いちじ','pukul satu'),('にじ','pukul dua'),('さんじ','pukul tiga'),('よじ','pukul empat'),('ごじ','pukul lima')]
ADJI=[('たかい','mahal'),('やすい','murah'),('おおきい','besar'),('ちいさい','kecil'),('あたらしい','baru')]
# 01 adjectives
add('dasar::Kata sifat','この|{x}|は|やすかった|です','やすかった','やすいでした|やすかったでした|やすくでした','{m} ini dulu murah.',THINGS,'Lampau sifat-i memakai ～かったです.')
add('dasar::Kata sifat','この|{x}|は|よくない|です','よくない','いいくない|いいない|よいない','{m} ini tidak bagus.',THINGS,'Bentuk negatif いい memakai dasar よ: よくないです.')
add('dasar::Kata sifat','{x}|は|しずか|です','しずか','しずかな|しずかく|しずかい','{m} tenang.',PLACES,'Sifat-na langsung memakai です; な dipakai sebelum kata benda.')
#02 verbs
add('dasar::Kata kerja','きのう|わたしは|{x}|を|かいました','かいました','かいます|かいません|かいです','Kemarin saya membeli {m}.',THINGS,'Kegiatan positif lampau yang sopan memakai ～ました.')
add('dasar::Kata kerja','きのう|わたしは|{x}|へ|いきませんでした','いきませんでした','いきません|いきます|いくでした','Kemarin saya tidak pergi ke {m}.',PLACES,'Negatif lampau sopan memakai ～ませんでした.')
add('dasar::Kata kerja','まいにち|わたしは|{x}|を|のみます','のみます','のみました|のむです|のんだです','Setiap hari saya minum {m}.',DRINK,'Kebiasaan sehari-hari dapat dinyatakan dengan ～ます.')
#03 noun modifiers
add('dasar::Frasa benda','これは|あたらしい|{x}|です','あたらしい','あたらしいの|あたらしいな|あたらしくの','Ini {m} baru.',THINGS,'Sifat-i langsung menerangkan kata benda, tanpa の atau な.')
add('dasar::Frasa benda','ここは|しずかな|{x}|です','しずかな','しずかの|しずかい|しずかく','Ini {m} yang tenang.',PLACES,'Sifat-na memerlukan な sebelum kata benda.')
add('dasar::Frasa benda','わたしは|きれいな|{x}|を|みました','きれいな','きれいい|きれいく|きれいのな','Saya melihat {m} yang indah.',[('はな','bunga'),('うみ','laut'),('そら','langit'),('にわ','kebun'),('え','lukisan')],'きれい termasuk sifat-na, sehingga menjadi きれいな + benda.')
#04 の
add('partikel::Penghubung benda','これは|わたし|の|{x}|です','の','を|に|で','Ini {m} saya.',THINGS,'の menghubungkan pemilik dan benda: わたしの + benda.')
add('partikel::Penghubung benda','この|{x}|は|にほん|の|です','の','を|へ|で','{m} ini buatan Jepang.',THINGS,'の dapat menggantikan benda yang sudah jelas: にほんの = yang dari Jepang.')
add('partikel::Penghubung benda','{x}|の|かばんは|あかい|です','の','を|で|へ','Tas milik {m} berwarna merah.',PEOPLE,'Pemilik diletakkan sebelum の, kemudian benda yang dimiliki.')
#05 existence
add('dasar::Keberadaan','つくえの|うえに|{x}|が|あります','あります','います|あるます|いるです','Ada {m} di atas meja.',THINGS,'Benda mati memakai あります, bukan います.')
add('dasar::Keberadaan','{x}|に|ねこが|います','います','あります|いるます|あるです','Ada kucing di {m}.',PLACES,'Makhluk hidup seperti kucing memakai います.')
add('dasar::Keberadaan','{x}|は|つくえの|うえ|に|あります','に','を|が|へ','{m} berada di atas meja.',THINGS,'に menandai tempat keberadaan; benda yang dibicarakan ditandai は.')
#06 topic subject
add('partikel::Topik & subjek','わたし|は|{x}|です','は','を|へ|で','Saya adalah {m}.',[('がくせい','pelajar'),('せんせい','guru'),('いしゃ','dokter'),('かいしゃいん','pegawai perusahaan'),('エンジニア','insinyur')],'は menandai topik; dalam fungsi ini dibaca wa.')
add('partikel::Topik & subjek','だれ|が|{x}|へ|いきますか','が','を|へ|で','Siapa yang pergi ke {m}?',PLACES,'Kata tanya yang menjadi subjek, seperti だれ, diikuti が.')
add('partikel::Topik & subjek','この|{x}|は|いろ|が|きれいです','が','を|へ|で','Warna {m} ini indah.',THINGS,'Topik ditandai は, sedangkan bagian yang dijelaskan (warna) ditandai が.')
#07 object and company
add('partikel::Objek & kebersamaan','わたしは|{x}|を|かいます','を','に|へ|が','Saya membeli {m}.',THINGS,'を menandai objek yang dibeli.')
add('partikel::Objek & kebersamaan','わたしは|{x}|と|いきます','と','を|が|の','Saya pergi bersama {m}.',PEOPLE,'と setelah nama orang berarti bersama orang itu.')
add('partikel::Objek & kebersamaan','わたしは|{x}|を|たべます','を','へ|で|の','Saya makan {m}.',FOOD,'Objek dari たべます ditandai を.')
#08 place time method
add('partikel::Tempat, waktu & cara','わたしは|{x}|で|べんきょうします','で','に|を|が','Saya belajar di {m}.',PLACES,'で menandai tempat melakukan kegiatan.')
add('partikel::Tempat, waktu & cara','わたしは|{x}|に|おきます','に','を|の|が','Saya bangun pada {m}.',HOURS,'Waktu tertentu seperti jam diikuti に.')
add('partikel::Tempat, waktu & cara','わたしは|{x}|で|えきへ|いきます','で','を|が|の','Saya pergi ke stasiun dengan {m}.',[('バス','bus'),('でんしゃ','kereta'),('タクシー','taksi'),('じてんしゃ','sepeda'),('くるま','mobil')],'で menandai alat transportasi.')
#09 lists
add('partikel::Daftar & pilihan','{x}|も|がくせい|です','も','を|へ|で','{m} juga pelajar.',PEOPLE,'も menggantikan は untuk menyatakan juga.')
add('partikel::Daftar & pilihan','これは|{x}|か|ざっし|です','か','を|に|へ','Ini {m} atau majalah.',[('ほん','buku'),('しんぶん','koran'),('ノート','buku tulis'),('じしょ','kamus'),('てちょう','buku agenda')],'か di antara dua benda menyatakan pilihan atau.')
add('partikel::Daftar & pilihan','{x}|や|りんごなどを|かいました','や','をに|にを|へが','Saya membeli {m}, apel, dan lain-lain.',[('パン','roti'),('たまご','telur'),('にく','daging'),('さかな','ikan'),('やさい','sayuran')],'や…など menyebut sebagian contoh dalam daftar.')
#10 boundaries
add('partikel::Batas & perkiraan','{x}|から|ごごまで|はたらきます','から','を|の|が','Saya bekerja mulai {m} sampai siang.',HOURS,'から menandai titik awal waktu; まで menandai akhir.')
add('partikel::Batas & perkiraan','{x}|ごろ|ねます','ごろ','を|の|が','Saya tidur kira-kira {m}.',HOURS,'ごろ digunakan setelah waktu tertentu untuk menyatakan sekitar waktu itu.')
add('partikel::Batas & perkiraan','{x}|だけ|かいました','だけ','にを|へが|をで','Saya hanya membeli {m}.',THINGS,'だけ berarti hanya; benda yang dibeli dibatasi pada yang disebutkan.')
#11 combined wa
add('partikel::Penekanan','{x}|には|ほんが|あります','には','をは|へを|がを','Di {m}, ada buku (menekankan tempatnya).',PLACES,'に + は mempertahankan fungsi lokasi dan menambahkan penekanan topik.')
add('partikel::Penekanan','{x}|では|たばこを|すいません','では','をは|がは|へを','Di {m}, saya tidak merokok (dibanding tempat lain).',PLACES,'で + は menyatakan tempat kegiatan sebagai topik atau perbandingan.')
add('partikel::Penekanan','{x}|とは|いきません','とは','をは|がは|にを','Kalau dengan {m}, saya tidak pergi.',PEOPLE,'と + は menekankan atau membandingkan orang yang menjadi teman kegiatan.')
#12 question words
add('tanya::Kata tanya','{x}は|どこ|ですか','どこ','だれ|いつ|いくら','Di mana {m}?',PLACES,'どこ menanyakan tempat.')
add('tanya::Kata tanya','この|{x}は|いくら|ですか','いくら','だれ|いつ|どこ','Berapa harga {m} ini?',THINGS,'いくら menanyakan harga.')
add('tanya::Kata tanya','{x}は|だれ|ですか','だれ','どこ|いつ|いくら','Siapa {m}?',[('あのひと','orang itu'),('せんせい','guru itu'),('リーダー','pemimpin itu'),('あたらしいがくせい','pelajar baru itu'),('あのかた','beliau itu')],'だれ menanyakan identitas orang.')
#13 kochira
add('tanya::Penunjuk sopan','{x}は|こちら|です','こちら','こちらを|こちらにの|こちらがの','{m} ada di arah sini (sopan).',PLACES,'こちら dapat menunjukkan tempat atau arah secara sopan.')
add('tanya::Penunjuk sopan','こちら|は|{x}|です','こちら','こちらに|こちらを|こちらで','Beliau ini {m}.',PEOPLE,'こちら dapat dipakai untuk memperkenalkan orang dengan sopan.')
add('tanya::Penunjuk sopan','{x}は|どちら|ですか','どちら','だれ|いつ|いくら','Di mana {m} (dengan sopan)?',PLACES,'どちら digunakan untuk menanyakan tempat atau arah dengan sopan.')
#14 indeterminate
add('tanya::Tak tentu & cakupan','{x}で|なにか|たべます','なにか','なにも|なんの|なにをも','Saya akan makan sesuatu di {m}.',PLACES,'なにか berarti sesuatu, tanpa menyebut benda tertentu.')
add('tanya::Tak tentu & cakupan','{x}には|だれも|いません','だれも','だれか|だれでも|だれの','Tidak ada siapa pun di {m}.',PLACES,'だれも + negatif berarti tidak seorang pun.')
add('tanya::Tak tentu & cakupan','{x}は|いつでも|いいです','いつでも','いつもに|いつをも|いつのも','Untuk {m}, kapan pun boleh.',PEOPLE,'いつでも berarti kapan saja atau kapan pun.')
#15 opinions actions
add('tanya::Pendapat & tindakan','この|{x}は|どう|ですか','どう','だれ|いつ|どこ','Bagaimana pendapatmu tentang {m} ini?',THINGS,'どうですか menanyakan kesan atau keadaan.')
add('tanya::Pendapat & tindakan','{x}は|どう|しますか','どう','だれ|いくら|なんさい','Apa yang akan kamu lakukan pada hari {m}?',DAYS,'どうしますか menanyakan tindakan atau keputusan.')
add('tanya::Pendapat & tindakan','いっしょに|{x}は|どう|ですか','どう','だれ|どこ|なんさい','Bagaimana kalau kita menikmati {m} bersama?',DRINK,'N はどうですか bisa menjadi saran atau tawaran, sesuai konteks.')
#16 linking adjectives
add('rangkaian::Sifat & benda','この|{x}は|やすくて|べんりです','やすくて','やすいで|やすいくて|やすくで','{m} ini murah dan praktis.',THINGS,'Sifat-i dihubungkan dengan membuang い lalu menambahkan くて.')
add('rangkaian::Sifat & benda','この|{x}は|きれいで|しずかです','きれいで','きれいくて|きれいなて|きれいいて','{m} ini indah dan tenang.',PLACES,'Sifat-na dihubungkan dengan で.')
add('rangkaian::Sifat & benda','{x}は|がくせい|ではなくて|せんせいです','ではなくて','ではないて|じゃないて|ではなくで','{m} bukan pelajar, melainkan guru.',PEOPLE,'ではなくて menghubungkan penyangkalan benda dengan keterangan berikutnya.')
#17 sequence
add('rangkaian::Urutan kegiatan','{x}を|かって|うちへ|かえります','かって','かうて|かいて|かいで','Saya membeli {m}, lalu pulang.',THINGS,'Bentuk-te かいます adalah かって untuk menghubungkan kegiatan.')
add('rangkaian::Urutan kegiatan','{x}を|のんでから|べんきょうします','のんでから','のむてから|のみてから|のむからて','Sesudah minum {m}, saya belajar.',DRINK,'V-てから menegaskan bahwa kegiatan berikutnya dilakukan sesudah kegiatan pertama.')
add('rangkaian::Urutan kegiatan','{x}を|たべて|がっこうへ|いきます','たべて','たべるて|たべって|たべで','Saya makan {m}, lalu pergi ke sekolah.',FOOD,'Bentuk-te たべます adalah たべて.')
#18 connectors
add('rangkaian::Penghubung kalimat','{x}を|かいました。|それから|かえりました','それから','それからを|それからに|それからの','Saya membeli {m}. Setelah itu, saya pulang.',THINGS,'それから menghubungkan kegiatan secara berurutan.')
add('rangkaian::Penghubung kalimat','この|{x}は|きれいです。|そして|べんりです','そして','そしてを|そしてに|そしての','{m} ini indah. Selain itu, praktis.',PLACES,'そして menambahkan informasi yang searah.')
add('rangkaian::Penghubung kalimat','{x}へ|いきました。|それから|ほんを|かいました','それから','それからで|それからが|それからへ','Saya pergi ke {m}. Setelah itu, membeli buku.',PLACES,'それから menunjukkan langkah atau peristiwa berikutnya.')
#19 relative clauses
add('rangkaian::Anak kalimat','これは|きのう|かった|{x}です','かった','かいました|かいまして|かうです','Ini {m} yang saya beli kemarin.',THINGS,'Kata kerja sebelum benda memakai bentuk biasa, seperti かった.')
add('rangkaian::Anak kalimat','{x}が|かいた|ほんを|よみます','かいた','かきました|かきます|かいたです','Saya membaca buku yang ditulis {m}.',PEOPLE,'Anak kalimat menerangkan benda dari depan; predikatnya berbentuk biasa.')
add('rangkaian::Anak kalimat','{x}へ|いく|ひとは|だれですか','いく','いきます|いきまして|いくです','Siapa orang yang akan pergi ke {m}?',PLACES,'いく menerangkan ひと, sehingga memakai bentuk biasa sebelum benda.')
#20 desires
add('ungkapan::Keinginan','わたしは|{x}が|ほしい|です','ほしい','ほしいます|ほしな|ほしの','Saya menginginkan {m}.',THINGS,'N がほしいです menyatakan keinginan memiliki benda.')
add('ungkapan::Keinginan','わたしは|{x}を|のみたい|です','のみたい','のむたい|のんたい|のみたいます','Saya ingin minum {m}.',DRINK,'Buang ます dari のみます lalu tambahkan たいです.')
add('ungkapan::Keinginan','わたしは|{x}へ|いきたい|です','いきたい','いくたい|いったい|いきたいます','Saya ingin pergi ke {m}.',PLACES,'いきます menjadi いきたいです untuk menyatakan ingin pergi.')
#21 ongoing
add('ungkapan::Kegiatan & keadaan','いま|{x}は|ほんを|よんでいます','よんでいます','よむています|よみています|よんています','Sekarang {m} sedang membaca buku.',PEOPLE,'V-ています dapat menyatakan kegiatan yang sedang berlangsung.')
add('ungkapan::Kegiatan & keadaan','いま|わたしは|{x}を|たべています','たべています','たべるています|たべっています|たべでいます','Sekarang saya sedang makan {m}.',FOOD,'たべます menjadi たべて lalu たべています.')
add('ungkapan::Kegiatan & keadaan','{x}は|とうきょうに|すんでいます','すんでいます','すむています|すみています|すんています','{m} tinggal di Tokyo.',PEOPLE,'すんでいます menyatakan keadaan tempat tinggal, bukan harus kegiatan sesaat.')
#22 requests
add('ungkapan::Permintaan','この|{x}を|みせて|ください','みせて','みせるて|みせって|みせで','Tolong perlihatkan {m} ini.',THINGS,'V-てください digunakan untuk meminta seseorang melakukan sesuatu.')
add('ungkapan::Permintaan','{x}では|はしらないで|ください','はしらないで','はしるないで|はしりないで|はしらなくてで','Tolong jangan berlari di {m}.',PLACES,'Larangan atau permintaan agar tidak melakukan sesuatu memakai V-ないでください.')
add('ungkapan::Permintaan','この|{x}を|つかわないで|ください','つかわないで','つかうないで|つかいないで|つかわなくてで','Tolong jangan gunakan {m} ini.',THINGS,'つかいます menjadi つかわない, lalu tambahkan でください.')
#23 conversation
add('ungkapan::Percakapan','この|{x}は|べんりです|ね','ね','ねを|ねに|ねの','{m} ini praktis, ya.',THINGS,'ね meminta persetujuan atau berbagi kesan dengan lawan bicara.')
add('ungkapan::Percakapan','この|{x}は|やすいです|よ','よ','よを|よに|よの','{m} ini murah, lho.',THINGS,'よ memberi informasi atau menegaskan sesuatu kepada lawan bicara.')
add('ungkapan::Percakapan','{x}は|「おはよう」|と|いいます','と','を|へ|の','{m} mengucapkan “selamat pagi”.',PEOPLE,'と menandai isi ucapan sebelum いいます.')
#24 giving
add('ungkapan::Memberi & menerima','わたしは|{x}に|ほんを|あげました','あげました','くれました|あげるでした|もらうでした','Saya memberikan buku kepada {m}.',PEOPLE,'あげます melihat pemberian dari pihak saya kepada orang lain.')
add('ungkapan::Memberi & menerima','{x}は|わたしに|ほんを|くれました','くれました','あげました|もらいました|くれるでした','{m} memberikan buku kepada saya.',PEOPLE,'くれます digunakan ketika orang lain memberi kepada saya atau pihak saya.')
add('ungkapan::Memberi & menerima','わたしは|{x}に|ほんを|もらいました','もらいました','くれました|もらうでした|あげるでした','Saya menerima buku dari {m}.',PEOPLE,'もらいます melihat peristiwa dari pihak penerima; に dapat menandai pemberi.')
#25 invitations
add('ungkapan::Ajakan & tawaran','いっしょに|{x}へ|いきましょう','いきましょう','いくましょう|いきましょうます|いくでしょう','Ayo pergi ke {m} bersama.',PLACES,'V-ましょう adalah ajakan untuk melakukan sesuatu bersama.')
add('ungkapan::Ajakan & tawaran','いっしょに|{x}を|のみませんか','のみませんか','のむませんか|のんませんか|のみませんですか','Maukah kamu minum {m} bersama?',DRINK,'V-ませんか merupakan ajakan yang memberi ruang untuk menerima atau menolak.')
add('ungkapan::Ajakan & tawaran','その|{x}を|もちましょうか','もちましょうか','もつましょうか|もってましょうか|もちましょうですか','Bagaimana kalau saya membawakan {m} itu?',THINGS,'V-ましょうか bisa digunakan untuk menawarkan bantuan.')
#26 reason
add('penghubung::Alasan','この|{x}は|やすいです|から|かいます','から','のにを|をで|にが','Saya membeli {m} ini karena murah.',THINGS,'Kalimat alasan diikuti から, kemudian akibat atau keputusan.')
add('penghubung::Alasan','{x}は|しずかです。|だから|ここで|べんきょうします','だから','だからを|だからに|だからの','{m} tenang. Karena itu, saya belajar di sini.',PLACES,'だから di awal kalimat kedua menghubungkan alasan dengan akibatnya.')
add('penghubung::Alasan','{x}は|せんせいです|から|にほんごが|じょうずです','から','からを|からの|からに','{m} pandai bahasa Jepang karena ia guru.',PEOPLE,'から sesudah kalimat sopan menyatakan sebab atau alasan.')
#27 contrast
add('penghubung::Pertentangan','この|{x}は|たかいです|が|かいます','が','がを|がに|がの','{m} ini mahal, tetapi saya membelinya.',THINGS,'が menghubungkan dua bagian kalimat yang berlawanan.')
add('penghubung::Pertentangan','{x}へ|いきたいです。|でも|じかんが|ありません','でも','でもを|でもの|でもに','Saya ingin pergi ke {m}. Tetapi, tidak ada waktu.',PLACES,'でも di awal kalimat menyatakan pertentangan dengan kalimat sebelumnya.')
add('penghubung::Pertentangan','この|{x}は|やすいです|けど|かいません','けど','けどを|けどの|けどに','{m} ini murah, tetapi saya tidak membelinya.',THINGS,'けど adalah penghubung pertentangan yang lebih percakapan.')
#28 transition
add('penghubung::Peralihan','じかんです。|それでは|{x}へ|いきましょう','それでは','それではを|それではに|それではの','Sudah waktunya. Kalau begitu, ayo pergi ke {m}.',PLACES,'それでは menandai peralihan menuju tindakan berikutnya.')
add('penghubung::Peralihan','やすみです。|それでは|{x}を|のみましょう','それでは','それではが|それではで|それではへ','Sekarang istirahat. Kalau begitu, mari minum {m}.',DRINK,'それでは dapat membuka keputusan setelah mendengar atau mengetahui situasi.')
add('penghubung::Peralihan','べんきょうは|おわりです。|それでは|{x}さん|またあした','それでは','それではの|それではを|それではに','Belajar sudah selesai. Kalau begitu, {m}, sampai besok.',[('たなか','Tanaka'),('やまだ','Yamada'),('さとう','Sato'),('すずき','Suzuki'),('ミラー','Miller')],'それでは juga digunakan saat beralih ke salam penutup.')
#29 degree
add('keterangan::Derajat','この|{x}は|とても|べんりです','とても','とてもに|とてもな|とてもを','{m} ini sangat praktis.',THINGS,'とても menekankan tingkat sifat dan langsung diletakkan sebelum sifat.')
add('keterangan::Derajat','この|{x}は|あまり|たかくないです','あまり','あまりにを|あまりな|あまりを','{m} ini tidak begitu mahal.',THINGS,'あまり + negatif berarti tidak begitu atau tidak terlalu.')
add('keterangan::Derajat','この|{x}は|ぜんぜん|むずかしくないです','ぜんぜん','ぜんぜんを|ぜんぜんな|ぜんぜんにを','{m} ini sama sekali tidak sulit.',[('もんだい','soal'),('しゅくだい','pekerjaan rumah'),('テスト','tes'),('れんしゅう','latihan'),('しごと','pekerjaan')],'ぜんぜん + negatif berarti sama sekali tidak.')
#30 frequency
add('keterangan::Frekuensi','わたしは|まいにち|{x}を|のみます','まいにち','まいにちにを|まいにちな|まいにちをに','Saya minum {m} setiap hari.',DRINK,'まいにち menunjukkan kebiasaan setiap hari tanpa perlu に.')
add('keterangan::Frekuensi','わたしは|ときどき|{x}へ|いきます','ときどき','ときどきな|ときどきを|ときどきにを','Saya kadang-kadang pergi ke {m}.',PLACES,'ときどき berarti kadang-kadang.')
add('keterangan::Frekuensi','わたしは|あまり|{x}を|たべません','あまり','あまりな|あまりを|あまりにを','Saya tidak terlalu sering makan {m}.',FOOD,'あまり dengan kata kerja negatif menyatakan frekuensi yang tidak tinggi.')
#31 manner yoku
add('keterangan::Cara','{x}は|せんせいの|はなしを|よく|ききます','よく','よいく|よくな|よいに','{m} mendengarkan penjelasan guru dengan baik.',PEOPLE,'よく sebelum kata kerja dapat berarti dengan baik; konteks menentukan maknanya.')
add('keterangan::Cara','この|{x}を|よく|みて|ください','よく','よいに|よくの|よくな','Tolong lihat {m} ini baik-baik.',THINGS,'よくみてください meminta orang memperhatikan dengan saksama.')
add('keterangan::Cara','{x}は|にほんごが|よく|わかります','よく','よいく|よくな|よくの','{m} memahami bahasa Jepang dengan baik.',PEOPLE,'よくわかります berarti memahami dengan baik.')
#32 time adverbs
add('keterangan::Waktu','さっき|{x}を|かいました','さっき','さっきにを|さっきな|さっきをに','Tadi saya membeli {m}.',THINGS,'さっき menunjukkan waktu yang baru berlalu.')
add('keterangan::Waktu','もう|{x}を|のみました','もう','もうを|もうな|もうにを','Saya sudah minum {m}.',DRINK,'もう + lampau menyatakan kegiatan sudah selesai.')
add('keterangan::Waktu','まだ|{x}を|かっていません','まだ','まだを|まだな|まだにを','Saya belum membeli {m}.',THINGS,'まだ + V-ていません menyatakan belum melakukan sesuatu.')
#33 adjective adverbs
add('perubahan::Cara melakukan','{x}は|にほんごを|じょうずに|はなします','じょうずに','じょうずく|じょうずな|じょうずい','{m} berbicara bahasa Jepang dengan mahir.',PEOPLE,'Sifat-na menjadi keterangan cara dengan に.')
add('perubahan::Cara melakukan','この|{x}を|やすく|うります','やすく','やすいに|やすいな|やすくなに','Saya menjual {m} ini dengan harga murah.',THINGS,'Sifat-i menjadi keterangan cara dengan mengganti い menjadi く.')
add('perubahan::Cara melakukan','{x}は|しずかに|ほんを|よみます','しずかに','しずかく|しずかな|しずかい','{m} membaca buku dengan tenang.',PEOPLE,'しずか termasuk sifat-na; keterangan caranya しずかに.')
#34 change
add('perubahan::Perubahan keadaan','この|{x}は|やすく|なりました','やすく','やすいに|やすいな|やすいく','{m} ini menjadi murah.',THINGS,'Sifat-i + くなります menyatakan perubahan keadaan.')
add('perubahan::Perubahan keadaan','{x}は|げんきに|なりました','げんきに','げんきく|げんきな|げんきい','{m} menjadi sehat atau bugar.',PEOPLE,'Sifat-na + になります menyatakan perubahan keadaan.')
add('perubahan::Perubahan keadaan','わたしは|{x}を|きれいに|しました','きれいに','きれいく|きれいな|きれいい','Saya membuat {m} bersih.',[('へや','kamar'),('つくえ','meja'),('にわ','kebun'),('くるま','mobil'),('くつ','sepatu')],'Sifat-na + にします menyatakan membuat keadaan menjadi demikian.')
#35 choosing
add('perubahan::Pilihan','わたしは|{x}|に|します','に','を|へ|が','Saya memilih {m}.',DRINK,'N にします menyatakan keputusan memilih suatu benda.')
add('perubahan::Pilihan','ひるごはんは|{x}|に|します','に','へ|が|の','Untuk makan siang, saya memilih {m}.',FOOD,'にします menunjukkan pilihan yang diputuskan.')
add('perubahan::Pilihan','やすみは|{x}|に|します','に','を|へ|が','Saya memutuskan hari libur pada hari {m}.',DAYS,'N にします bisa dipakai untuk menentukan hari atau pilihan lain.')
#36 chronology
add('waktu::Saat & urutan','{x}へ|いく|まえに|でんわします','いく','いった|いきます|いきまして','Saya menelepon sebelum pergi ke {m}.',PLACES,'Sebelum まえに, kata kerja memakai bentuk kamus.')
add('waktu::Saat & urutan','{x}を|かった|あとで|かえります','かった','かう|かいます|かいまして','Saya pulang sesudah membeli {m}.',THINGS,'V-たあとで menyatakan sesudah melakukan kegiatan.')
add('waktu::Saat & urutan','{x}へ|いく|とき|かさを|もちます','いく','いきます|いきまして|いくです','Saat hendak pergi ke {m}, saya membawa payung.',PLACES,'Bentuk biasa いく ditempatkan sebelum とき.')
#37 travel purpose
add('waktu::Tujuan perjalanan','{x}を|かい|に|いきます','かい','かう|かった|かって','Saya pergi untuk membeli {m}.',THINGS,'Tujuan perjalanan memakai bentuk sebelum ます + にいきます.')
add('waktu::Tujuan perjalanan','{x}へ|べんきょうし|に|いきます','べんきょうし','べんきょうする|べんきょうした|べんきょうして','Saya pergi ke {m} untuk belajar.',PLACES,'べんきょうします menjadi べんきょうしにいきます untuk tujuan.')
add('waktu::Tujuan perjalanan','{x}を|のみ|に|いきませんか','のみ','のむ|のんだ|のんで','Maukah pergi untuk minum {m}?',DRINK,'のみます → のみにいきます: pergi untuk minum.')
#38 comparison
add('perbandingan::Dua pilihan','{x}は|バス|より|はやいです','より','を|へ|の','{m} lebih cepat daripada bus.',[('しんかんせん','Shinkansen'),('ひこうき','pesawat'),('とっきゅう','kereta ekspres'),('ちかてつ','kereta bawah tanah'),('でんしゃ','kereta')],'Benda pembanding diikuti より: lebih … daripada ….')
add('perbandingan::Dua pilihan','あの|{x}より|この{ x }の|ほうが|やすいです','ほうが','ほうを|ほうに|ほうで','{m} ini lebih murah daripada yang itu.',THINGS,'A のほうが menyatakan pihak yang lebih memiliki suatu sifat.')
# fix spaced placeholder explicitly
FRAMES['perbandingan::Dua pilihan'][-1]['jp']=FRAMES['perbandingan::Dua pilihan'][-1]['jp'].replace('{ x }','{x}')
add('perbandingan::Dua pilihan','{x}と|おちゃと|どちらが|すきですか','どちらが','どちらをは|どちらにが|どちらでを','Mana yang kamu sukai, {m} atau teh?',[('コーヒー','kopi'),('みず','air'),('ぎゅうにゅう','susu'),('ジュース','jus'),('こうちゃ','teh hitam')],'どちら menanyakan pilihan di antara dua hal.')
#39 superlatives
add('perbandingan::Paling','{x}が|いちばん|すきです','いちばん','いちばんな|いちばんを|いちばんにを','Saya paling suka {m}.',FOOD,'いちばん + sifat menyatakan yang paling di dalam suatu kelompok.')
add('perbandingan::Paling','{x}のなかで|だれが|いちばん|せがたかいですか','いちばん','いちばんな|いちばんを|いちばんのが','Siapa yang paling tinggi di antara {m}?',[('かぞく','anggota keluarga'),('クラス','anggota kelas'),('チーム','anggota tim'),('ともだち','teman-teman'),('がくせい','para pelajar')],'Kelompok のなかで…いちばん menanyakan yang paling dalam kelompok.')
add('perbandingan::Paling','{x}のなかで|これが|いちばん|やすいです','いちばん','いちばんの|いちばんな|いちばんを','Di antara {m}, yang ini paling murah.',THINGS,'いちばん diletakkan sebelum sifat yang dibandingkan.')
#40 tari
add('rangkaian::Contoh kegiatan','{x}を|よんだり|えを|かいたり|します','よんだり','よむたり|よみたり|よんたり','Saya melakukan hal seperti membaca {m} dan menggambar.',[('ほん','buku'),('しんぶん','koran'),('ざっし','majalah'),('えほん','buku bergambar'),('まんが','komik')],'Pola V-たり V-たりします menyebut beberapa contoh kegiatan.')
add('rangkaian::Contoh kegiatan','{x}を|かったり|ともだちに|あったり|しました','かったり','かうたり|かいたり|かってり','Saya melakukan hal seperti membeli {m} dan bertemu teman.',THINGS,'Bentuk-ta かった ditambah り menjadi かったり.')
add('rangkaian::Contoh kegiatan','{x}へ|いったり|うちで|やすんだり|します','いったり','いくたり|いきたり|いってり','Saya melakukan hal seperti pergi ke {m} dan beristirahat di rumah.',PLACES,'いきます memiliki bentuk いった, sehingga menjadi いったり.')
#41 nominalisation
add('kemampuan::Membendakan kegiatan','{x}を|よむ|ことが|すきです','ことが','ことをが|ことにを|ことへが','Saya suka membaca {m}.',[('ほん','buku'),('しんぶん','koran'),('ざっし','majalah'),('まんが','komik'),('しょうせつ','novel')],'V-bentuk kamus + こと membendakan kegiatan; が digunakan sebelum すきです.')
add('kemampuan::Membendakan kegiatan','{x}を|つくる|のが|すきです','のが','のをが|のにを|のへが','Saya suka membuat {m}.',[('りょうり','masakan'),('パン','roti'),('ケーキ','kue'),('スープ','sup'),('おべんとう','bekal makan')],'V-bentuk kamus + の juga dapat membendakan kegiatan.')
add('kemampuan::Membendakan kegiatan','{x}を|つくる|ことは|たのしいです','ことは','ことをは|ことにはを|ことへはが','Membuat {m} itu menyenangkan.',[('りょうり','masakan'),('パン','roti'),('ケーキ','kue'),('スープ','sup'),('おべんとう','bekal makan')],'こと mengubah kegiatan menjadi topik yang dapat diikuti は.')
#42 can do
add('kemampuan::Bisa melakukan','{x}は|にほんごを|はなす|ことが|できます','はなす','はなします|はなした|はなして','{m} dapat berbicara bahasa Jepang.',PEOPLE,'V-bentuk kamus + ことができます menyatakan kemampuan.')
add('kemampuan::Bisa melakukan','わたしは|{x}を|つくる|ことが|できます','つくる','つくります|つくった|つくって','Saya dapat membuat {m}.',[('りょうり','masakan'),('パン','roti'),('ケーキ','kue'),('スープ','sup'),('おべんとう','bekal makan')],'つくる adalah bentuk kamus sebelum ことができます.')
add('kemampuan::Bisa melakukan','ここで|{x}を|かう|ことが|できます','かう','かいます|かった|かって','Di sini bisa membeli {m}.',THINGS,'ことができます juga dapat menyatakan hal yang memungkinkan dilakukan.')
#43 potential enrichment
add('kemampuan::Pengayaan','{x}は|にほんごが|はなせます','はなせます','はなすれます|はなしれます|はなせるます','{m} bisa berbicara bahasa Jepang.',PEOPLE,'Bentuk potensial はなします adalah はなせます; が dapat menandai hal yang dikuasai.')
add('kemampuan::Pengayaan','わたしは|{x}が|よめます','よめます','よむれます|よみれます|よめるます','Saya bisa membaca {m}.',[('ひらがな','hiragana'),('カタカナ','katakana'),('かんじ','kanji'),('えいご','bahasa Inggris'),('にほんご','bahasa Jepang')],'よみます menjadi よめます untuk menyatakan bisa membaca.')
add('kemampuan::Pengayaan','ここで|{x}が|かえます','かえます','かうれます|かいれます|かえるます','Di sini bisa membeli {m}.',THINGS,'かいます menjadi かえます untuk menyatakan bisa membeli.')
