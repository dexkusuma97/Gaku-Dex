"""Build N4/A2 cards from retained normalized source rows. N5 stays unchanged."""
import json,re,hashlib,copy,subprocess
from pathlib import Path
R=Path(__file__).resolve().parents[1];data=json.loads((R/'data/kotoba-n4-normalized.json').read_text());base=json.loads((R/'data/kotoba-n5.json').read_text());src=json.loads((R/'data/kotoba-n4-source-rows.json').read_text());known={e['id']:e for e in base['entries']}
def has(s,p):return bool(re.search(p,s,re.I))
# i-adjectives are an explicit set: ending in い alone does not make a word an adjective.
adji=set('あたたかい あつい あぶない いい いたい うすい うまい うれしい おいしい おそい おとなしい おめでたい おもしろい かっこいい かゆい かわいい くらい くわしい こい こわい しょっぱい すごい すずしい すっぱい すばらしい たのしい だるい つまらない つらい ながい ぬるい はやい ひどい ほそながい まずい まずしい めんどくさい もったいない やさしい わるい 丸い 低い 冷たい 危ない 厚い 厳しい 古い 四角い 固い 多い 大きい 安い 寂しい 寒い 小さい 少ない 広い 弱い 強い 忙しい 怖い 恥ずかしい 悪い 悲しい 新しい 早い 明るい 暑い 暖かい 暗い 柔らかい 楽しい 欲しい 温かい 激しい 煩い 熱い 狭い 珍しい 甘い 甘辛い 痛い 白い 眠い 短い 美しい 臭い 若い 苦い 蒸し暑い 詳しい 赤い 軽い 辛い 近い 遅い 遠い 重い 長い 難しい 青い 高い 黄色い 黒い きたない さむい まるい めずらしい すくない ねむい ひくい あかるい あたらしい ふるい なつかしい はずかしい かなしい うるさい きびしい にがい あまい からい しおからい ふとい ほそい よい ひろい せまい かたい やわらかい いそがしい つよい よわい さびしい さみしい むずかしい ほしい とおい ちかい たかい やすい おもい かるい みじかい わかい おおい おおきい ちいさい ほそながい うつくしい せつない'.split())
adjna=set('きれい 嫌い 好き 得意 苦手 神経質 しんせつ べんり じょうず へた まじめ ゆうめい ひま たいへん たいせつ すてき 元気 簡単 大丈夫 便利 不便 上手 下手 大切 大変 安全 危険 必要 自由'.split())
adverbs=set('もう まだ ぜひ なんとか ちょうど とても すごく かなり もっと ずっと いつも よく ときどき たまに あまり ぜんぜん まったく だいたい たいてい いっぱい すこし ちょっと たくさん まず つぎに さいごに さっき あとで もうすぐ すぐ さっそく ゆっくり はっきり しっかり いっしょに べつべつに いろいろ それぞれ だんだん どんどん どきどき わくわく びっくり たぶん きっと もちろん ぜったい 真っ直ぐ まっすぐ とくに たしかに やはり やっぱり なるべく ほとんど なるほど つい とうとう いよいよ やっと こっそり ぐっすり ぴったり すっかり ちゃんと いきなり もし けっこう いちばん 一番 全部 とにかく あらかじめ そろそろ 直接 直に'.split())
themes=[
 ('Keluarga & hubungan',r'keluarga|suami|istri|menikah|pernikahan|ayah|ibu|kakek|nenek|kakak|adik|saudara|paman|bibi|anak|bayi|teman|pacar|tetangga|hubungan|kenalan'),
 ('Tubuh & kesehatan',r'tubuh|kesehatan|sakit|obat|dokter|perawat|rumah sakit|klinik|darah|tulang|jantung|otak|paru|kulit|ginjal|lambung|retina|organ|usus|rahim|janin|sperma|mata|telinga|rambut|gigi|kepala|tangan|kaki|jari|bahu|punggung|pinggang|ketiak|pergelangan|leher|wajah|dagu|bibir|hidung|paha|kuku|dahi|pipi|tenggorokan|pusar|otot|pembuluh|demam|batuk|pilek|nyeri|luka|asuransi|stres|berat badan'),
 ('Orang & identitas',r'\bsaya\b|\baku\b|\bAnda\b|\bkamu\b|\bkalian\b|\bkami\b|\bkita\b|\bmereka\b|\bdia\b|orang|pria|wanita|laki-laki|perempuan|identitas|nama |umur|usia|warga|penduduk'),
 ('Makanan & bahan masak',r'makanan|makan siang|makan malam|sarapan|nasi|beras|mie|mi |roti|sup|telur|ikan|daging|ayam|babi|sapi|sayur|buah|apel|pisang|jeruk|stroberi|tomat|bawang|kentang|wortel|cabai|kacang|jamur|saus|bumbu|garam|gula|minyak|tepung|kari|sushi|sashimi|tempura|onigiri|ramen|udon|soba|cokelat|kue|permen|keju|yoghurt|masakan|hidangan|cita rasa'),
 ('Minuman',r'minuman|air minum|teh|kopi|susu|bir|jus|anggur|sake|alkohol'),
 ('Dapur & alat makan',r'dapur|piring|gelas|cangkir|mangkuk|sendok|garpu|sumpit|pisau|wajan|panci|kompor|oven|kulkas|peralatan masak'),
 ('Sekolah & bahasa',r'sekolah|kelas|kampus|universitas|pelajaran|belajar|ujian|tes |bahasa|huruf|kanji|kana|kosakata|kalimat|pengucapan|tata bahasa|kamus|buku teks|guru|siswa|mahasiswa|pendidikan|kursus|papan tulis|pensil|penghapus|pulpen'),
 ('Pekerjaan & kantor',r'pekerjaan|kerja|kantor|perusahaan|pabrik|pegawai|karyawan|atasan|bawahan|rapat|gaji|profesi|bisnis|industri|produksi|jadwal kerja|dokumen|berkas|absen|wawancara'),
 ('Pakaian & aksesori',r'pakaian|baju|kemeja|kaus|celana|rok|gaun|mantel|jaket|sweater|topi|sepatu|sandal|kaus kaki|sarung tangan|syal|selendang|kacamata|cincin|kalung|anting|aksesori|perhiasan|seragam|kimono|yukata|tas'),
 ('Rumah & perabot',r'rumah|apartemen|kamar|ruang tamu|ruangan|perabot|mebel|meja|kursi|sofa|tempat tidur|bantal|selimut|lemari|rak|pintu|jendela|lantai|dinding|atap|teras|tangga|toilet|kamar mandi|wastafel|bak mandi|lampu|sapu|sampah|mesin cuci|penghangat|pendingin|pemanas|AC\b'),
 ('Alam & cuaca',r'alam|cuaca|musim|hujan|salju|angin|awan|langit|matahari|bulan purnama|bintang|gunung|sungai|laut|pantai|danau|pulau|hutan|pasir|tanah|batu|gempa|bencana|banjir|topan|panas|dingin|suhu|lembap|pelangi|senja'),
 ('Hewan & tumbuhan',r'hewan|binatang|kucing|anjing|burung|serangga|semut|lebah|kupu|katak|kura|kelinci|rusa|kuda|monyet|gajah|ular|harimau|panda|tanaman|tumbuhan|bunga|pohon|daun|akar|rumput|benih|kebun|hydrangea'),
 ('Transportasi & perjalanan',r'transportasi|perjalanan|wisata|liburan|kereta|mobil|bus|pesawat|kapal|sepeda|motor|taksi|tiket|karcis|peron|stasiun|bandara|pelabuhan|jalan tol|jalan raya|bagasi|penginapan|hotel|paspor|visa|lampu lalu|penyeberangan|peta|rute|halte'),
 ('Tempat & fasilitas',r'tempat|fasilitas|toko|restoran|kantin|kafe|supermarket|pasar|gedung|bangunan|taman|museum|perpustakaan|bioskop|bank|ATM|kantor pos|balai|aula|kuil|gereja|masjid|gereja|parkir|kawasan|kota|desa|lapangan|arena|kolam|loket|pusat'),
 ('Arah & posisi',r'arah|posisi|utara|selatan|timur|barat|kanan|kiri|atas|bawah|depan|belakang|samping|seberang|dekat|jauh|sebelah|sekitar|bagian dalam|bagian luar|di antara|tengah'),
 ('Negara & kota',r'Jepang|Indonesia|Amerika|Australia|Tiongkok|China|Inggris|Perancis|Prancis|Italia|Spanyol|Korea|Thailand|Vietnam|India|Malaysia|Singapura|Tokyo|Osaka|Kyoto|negara|daerah asal'),
 ('Waktu & kalender',r'waktu|hari|minggu|bulan|tahun|tanggal|pagi|siang|sore|malam|kemarin|besok|lusa|dahulu|sekarang|saat|masa|Senin|Selasa|Rabu|Kamis|Jumat|Sabtu|Minggu|Januari|Februari|Maret|April|Mei|Juni|Juli|Agustus|September|Oktober|November|Desember'),
 ('Hobi, olahraga & budaya',r'hobi|olahraga|budaya|tradisi|adat|festival|perayaan|upacara|musik|lagu|nyanyi|gitar|piano|konser|film|anime|manga|komik|cerita|novel|bacaan|buku|majalah|foto|kamera|seni|lukis|gambar|tari|tarian|sepak|bola|tenis|renang|lari|ski|judo|karate|sumo|pertandingan|permainan|game|pemain|wisata budaya'),
 ('Teknologi & komunikasi',r'teknologi|komunikasi|internet|komputer|laptop|ponsel|telepon|surat|email|e-mail|pesan|aplikasi|situs|jaringan|printer|mesin|layar|tombol|kabel|listrik|baterai|data|robot|televisi|radio'),
 ('Belanja & uang',r'belanja|uang|harga|bayar|biaya|diskon|potongan harga|pajak|ongkos|saldo|rekening|tabungan|kredit|tunai|koin|yen|rupiah|dolar|pembelian|produk|barang|pesanan|penjualan|nota|kwitansi|kupon|kasir'),
 ('Warna, ukuran & bentuk',r'warna|merah|biru|hijau|kuning|putih|hitam|ungu|cokelat|jingga|abu-abu|ukuran|bentuk|lingkaran|persegi|segitiga|panjang|lebar|tinggi|berat|besar|kecil|tebal|tipis|bundar|bulat')]

def classify(e):
 jp=e['jp'];m=e['meaning'];k=e['kana']
 if e.get('group'):return 'verb','Grup '+str(e['group'])
 if has(m,'Bapak|Nona|Bpk[.]|Tuan |Nyonya|/Pak|/Bu'):return 'noun','Nama orang'
 if jp in 'あ ああ あっ あー う ううん ええ ええと えっ えー えーと おお いや いやあ はい はあ ははは ふうん へえ わあ オーケー'.split():return 'expression','Tanggapan & perasaan'
 if jp in 'おめでとう おかげさまで それじゃあ ハロー'.split():return 'expression','Sapaan & perkenalan'
 if jp in 'いつごろ どこ どっち どちら どなた なんで どうやって なぜ'.split():return 'expression','Kata tanya'
 if jp in 'いつまでも さいきん こんど はやく つぎ ほんとに たとえば こうやって かわりに そのまま そもそも つまり けれども ところで だからこそ'.split():return 'adverb','Cara & keadaan'
 if jp in 'キロ センチ ミリ メートル キログラム グラム リットル ど'.split():return 'number','Ukuran & satuan'
 if has(jp,r'^[0-9]+つめ$'):return 'number','Nomor & urutan'
 if has(jp,'ます$|ましょう$|ません$') and not e.get('group'):return 'expression','Pola & kata bantu'

 if e.get('group'):return 'verb','Grup '+str(e['group'])
 if e.get('na') or jp in adjna:return 'adjective','Sifat-na'
 if jp in adji or k in adji:return 'adjective','Sifat-i'
 if e.get('known'):
  x=known[e['known']];return x['category'],x['subcategory']
 if jp in adverbs:
  sub='Frekuensi' if has(m,'sering|kadang|selalu|jarang|biasanya') else 'Waktu & urutan' if has(m,'segera|akhirnya|dulu|kemudian|baru|sebentar|tiba-tiba|sudah|belum') else 'Jumlah & tingkat' if has(m,'banyak|sedikit|sangat|lebih|cukup|semua|paling|sekali|terlalu') else 'Kepastian & penekanan' if has(m,'pasti|tentu|mungkin|khusus|sebenarnya|harus') else 'Cara & keadaan'
  return 'adverb',sub
 if has(jp,'[〜～~]') or has(jp,'です|ません|ください|でしょう|ましょう|ございます|どうぞ|ありがとう|すみません|こんにちは|こんばんは|おはよう|さようなら|ごめん') or len(k)>14 or has(m,'^apakah|^mohon|^silakan|^terima kasih|^maaf|^selamat |^sampai jumpa'):
  sub='Terima kasih & maaf' if has(m,'terima kasih|maaf') else 'Permintaan & instruksi' if has(m,'silakan|mohon|tolong|jangan|harap') else 'Sapaan & perkenalan' if has(m,'selamat|sampai jumpa|halo|perkenal') else 'Tanggapan & perasaan' if has(m,'wah|ya,|tidak apa|benarkah|bagus sekali|sayang sekali|benar|oh,') else 'Pola & kata bantu'
  return 'expression',sub
 if has(m,'kata tanya|^siapa|^apa$|^berapa|^bagaimana|^mengapa|^kenapa|^di mana|^kapan|^yang mana'):return 'expression','Kata tanya'
 if jp in 'ここ そこ あそこ こちら そちら あちら これ それ あれ この その あの これら それら あれら'.split():return 'expression','Penunjuk'
 if jp in 'でも そして それから それで だから それに けれど しかし じゃあ では または あるいは それでは'.split():return 'expression','Penghubung'
 if has(m,r'kata penggolong|kata bantu bilangan|satuan|^\d|^satu |^dua |^tiga |^empat |^lima |^enam |^tujuh |^delapan |^sembilan |^sepuluh') or has(jp,r'^[0-9一二三四五六七八九十百千万]+[年月日時分人個枚本台回歳冊匹杯]'):
  sub='Orang & usia' if has(m,'orang|usia|tahun umur') else 'Uang & harga' if has(m,'yen|rupiah|uang') else 'Tanggal & kalender' if has(m,'tanggal|bulan|tahun') else 'Jam & durasi' if has(m,'jam|menit|detik|hari|minggu') else 'Nomor & urutan' if has(m,'nomor|urutan|kali') else 'Ukuran & satuan' if has(m,'meter|kilo|gram|liter|derajat') else 'Satuan benda' if has(m,'buah|lembar|ekor|batang|buku|gelas|unit|lembar') else 'Bilangan dasar'
  return 'number',sub
 if jp in '気持ちがいい きもちがいい 頭がいい 体にいい ちょうどいい 住みやすい 動きやすい 足りない 都合が悪い 具合が悪い 熱が高い 調子が悪い 髪が長い 髪が短い 背が高い 気分が悪い 味がない'.split():return 'adjective','Sifat-i'
 if jp.endswith(('ている','でいる','られる','できない','られない')) or jp in '眠れない 飲める 遊ぼう また遊ぼうね どちらでもない そんなことない 特にない'.split():return 'expression','Pola & kata bantu'
 if '?' in jp or '何て' in jp or 'どうした' in jp:return 'expression','Kata tanya'
 if jp in '確かにねえ よかった そうなの? 乾杯 お元気で お幸せに'.split():return 'expression','Tanggapan & perasaan'
 if jp in 'それとも それと および だったら そうしたら おかげで そのために'.split():return 'expression','Penghubung'
 if jp in '本当に 確かに だいぶ そのあと 先に このあと その前に 何回も 最初 あとは 前に すべて 早く 事前に 最近 こまめに しっかりと はじめ 末永く 簡単に 新しく 一度に そんなに 意外に しばらく 順番に こうして 例えば 実際に 思ったより 普通に あとから もしかしたら 通常どおり 先ほど 合わせて 自由に ついでに 最も 次に 全体的に 楽に 非常に 絶対に 局地的に もともと はじめに たしか'.split():return 'adverb','Cara & keadaan'
 if has(m,'^(.*)?persen$|^minus$|^bilangan|^jumlah lembar|^pertama$|^kedua$|^ketiga$'):return 'number','Pecahan & jumlah'
 extras=[
 ('Rumah & perabot',r'setrika|peralatan untuk tidur|selang|tisu|popok|cermin|detergen|sabun|bohlam|tabung gas|karpet|tatami|loker|handuk|kantong tidur|lilin|korek api|tangki|wadah|kaleng|botol|plastik|vinil|tali|kain|stiker|dekorasi|hiasan'),
 ('Pakaian & aksesori',r'kain tenunan|blus|celemek|dasi|rompi|helm|gantungan kunci'),
 ('Dapur & alat makan',r'tutup|penutup|sedotan|alat makan|alu'),
 ('Orang & identitas',r'jenis kelamin|cucu|penggemar|anggota|lansia|pemuda|pencuri'),
 ('Tubuh & kesehatan',r'perut|lutut|tumit|jempol|gejala|nafsu makan|rontgen|alergi|influenza|apotek|bersin|dosis|tidur|virus|muntah|diare|kelelahan|badan|masker|gizi|nutrisi|antiseptik|napas|lengan|胸|dada|siku|janggut|kumis|alis|pankreas|limpa|vena|arteri|tengkorak|indung telur'),
 ('Makanan & bahan masak',r'es krim|rempah|ubi manis|hamburger|semur|kuliner|porsi|topping|taburan|kaldu|sukiyaki|menu paket|panggang|lauk|udang|kerupuk|timun|salmon|tuna|sosis|salad|selada|acar|lemon|kaviar|lobak|kembang kol|touge|tauge|labu|ketimun|terong|kedelai|mentega|puding|gandum|jagung|lobster|kepiting|kerang|cumi|gurita|tiram|madu|jambu|melon|semangka|persik|pir|mangga|kelapa|nanas|anggur|cuka|selai|tahu|tempe|dadar|pasta|spageti|mayones|rumput laut|rasa'),
 ('Hobi, olahraga & budaya',r'agama|Buddha|Kristen|Islam|Ramadan|warisan dunia|tembikar|aset budaya|Manzai|olimpiade|medali|bisbol|bulu tangkis|rugbi|hiking|puisi|karya|azimat|omamori|tradisi|samurai|biola|klub|tenda|ukiran|rajutan|bordiran|sulaman|drama|teater|opera|kabuki|karaoke|senam|aerobik|yoga|catur|piknik|kemah|berkemah|kembang api|boneka|panggung|layang-layang|angklung|pentas|komedi|sirkus|sulap|fotografi|lukisan|kaligrafi|orchestra|orkestra|balet|ballet'),
 ('Pekerjaan & kantor',r'kaisar|shogun|prajurit|musisi|pelatih|pengusaha|wiraswasta|menteri|politikus|atlet|presiden|aktor|aktris|ilmuwan|sutradara|kapten|pendidik|penanggung jawab|petugas|produsen|dealer|vendor|pengirim|bagian umum|dinas luar|resepsionis|direktur|staf|pengemudi|pengendara|sopir|manajer|presiden direktur|ketua|pemilik|kepala divisi|pegawai'),
 ('Teknologi & komunikasi',r'elektronik|pemutar CD|pemrograman|berita|komentar|fitur|fungsi|ulasan|pencarian|energi|konsumsi daya|daya hisap|daya sedot|pengaturan|setelan|media sosial|pengisi daya|PIN|pemindai|print-out|hasil cetak|DVD|CD$|personal computer|kaset|mode senyap|fax|faks|faksimile|fotokopi|saluran|unggah|unduh|dokumen elektronik'),
 ('Transportasi & perjalanan',r'koper|perahu|jalur|ban$|perempatan|belokan|macet|penerbangan|trem|truk|feri|jalan kaki|jalan-jalan'),
 ('Tempat & fasilitas',r'benteng|istana|observatorium|makam|kuburan|pagoda|outlet mall|lobi|menara|lift|bioskop|stadion|kebun binatang|pintu masuk|pintu keluar|pelataran|sudut|pojok'),
 ('Waktu & kalender',r'kalender|abad|zaman|era$|kali ini|awal|akhir-akhir|selamanya|jadwal|jam$|arloji|kesempatan|masa depan|masa lalu'),
 ('Sekolah & bahasa',r'fisika|nilai|dialog|tingkat pemula|tingkat mahir|pelafalan|pertanyaan|jawaban|kuis|kata-kata|arti|makna|huruf|terjemahan|aksen|logat'),
 ('Belanja & uang',r'perdagangan|anggaran|resi|tip$|obral|merek|rental|hadiah|kado|kartu|pembayaran|pengiriman|potongan|promosi'),
 ('Alam & cuaca',r'petir|guntur|bukit|puncak|air terjun|lingkungan|kompos|daur ulang|getaran|goncangan|tsunami|api$|ladang|sawah|panen padi|menanam padi|udara|sinar|cahaya|terik|kelembapan|debu|asap|kabut'),
 ('Hewan & tumbuhan',r'makhluk hidup|tonggeret|tupai|cabang|jangkrik|lumba-lumba|capung|kumbang|cacing|kecoa|kera|kambing|bambu|pinus|sakura'),
 ('Negara & kota',r'Eropa|Asia|Persia|Hong Kong|Nepal|Kamboja|Bali|Mongolia|Yangon|Nikko|Nagano|Akita|Belanda|Turki|Peru|Ghana|Bangladesh|Shiga|Hyogo|Fukui|Kagawa|Arles|Gion|Shijookawaramachi|luar negeri|Cairo|Seoul|Sydney|Sao Paulo|Jerman|Filipina|Brazil|Meksiko|Moskow|Beijing|Portugal|Roma|London|Los Angeles|Barcelona|New York|Ueno|Akihabara|Ginza|Tsukiji|Toyama|Harajuku|Fukuoka|Hokkaido|Yoyogi|Ameyoko|Odaiba|Kichijoji|Shibamata|Asakusa|Shinjuku|Shibuya|Sapporo|Sendai|Okinawa|Nara|Nagoya|Nagasaki|Hiroshima'),
 ('Perasaan & pikiran',r'ide|pemikiran|kesabaran|perasaan|pikiran|ingatan|kenangan|memori|minat|sikap|suasana hati|mood|hati|perhatian|kesan|pendapat|kegembiraan|kesenangan|harapan|mimpi|kebahagiaan|kesedihan|kekhawatiran|semangat|motivasi'),
 ('Acara & kegiatan',r'acara|kegiatan|pesta|pertemuan|pameran|seminar|lokakarya|orientasi|perpisahan|pembukaan|penutupan|peringatan'),
 ('Layanan & administrasi',r'polisi|informasi|pengisian|penerimaan tamu|penyerahan|pengembalian|reservasi|evakuasi|inspeksi|pengecekan|larangan|formulir|pendaftaran|permohonan|permintaan|layanan|bantuan|pengaduan|tanda tangan|kontrak|peraturan|pemberitahuan|pengumuman|persyaratan|prosedur|izin|survei|angket'),
 ]
 for theme,pattern in extras:
  if has(m,r'(?<!\w)(?:'+pattern+r')(?!\w)'):return 'noun',theme
 for theme,pattern in themes:
  if has(m,r'(?<!\w)(?:'+pattern+r')(?!\w)'):return 'noun',theme
 return 'noun','Konsep & informasi'

merged={}
for r in data['records']:
 key=(r['jp'],r['kana'])
 if key not in merged:merged[key]=copy.deepcopy(r)
 else:
  e=merged[key];e['sources']+=r['sources'];e['aliases']+=r['aliases'];e['readings']+=r['readings'];e['daily']=e['daily'] or r['daily'];e['na']=e.get('na') or r.get('na')
  if r.get('group'):e['group']=r['group']
  if r.get('polite'):e['polite']=r['polite']
  # Prefer corrected daily meaning; retain distinct source senses.
  if r['meaning'] not in e['meaning'].split(' / '):e['meaning']+=' / '+r['meaning']
entries=[]
for i,e in enumerate(merged.values(),1):
 cat,sub=classify(e);e['category']=cat;e['subcategory']=sub;e['kind']=cat
 e['sources']=[dict(id=sid,page=page) for sid,page in sorted({(s['id'],s['page']) for s in e['sources']})]
 e['aliases']=sorted(set(e['aliases'])-{e['jp'],''});e['readings']=sorted(set(e['readings']))
 e['id']='kotoba-n4-'+hashlib.sha256((e['jp']+'|'+e['kana']).encode()).hexdigest()[:12];e['order']=i;e['level']='N4';e['scope']='N4 / A2' if any(s['id']!=13 for s in e['sources']) else 'Pengayaan';e['note']='Kosakata pengayaan dari bagian sisa daftar harian; dapat melampaui materi N4 dasar.' if e['scope']=='Pengayaan' else ''
 if cat=='verb' and not e.get('polite'):
  k=e['kana'];w=e['jp'];g=e['group'];mp=dict(zip('うくぐすつぬぶむる','いきぎしちにびみり'))
  if g==2:pol=w[:-1]+'ます';pk=k[:-1]+'ます'
  elif g==3 and w.endswith('する'):pol=w[:-2]+'します';pk=k[:-2]+'します'
  elif k=='くる':pol='来ます';pk='きます'
  else:pol=w[:-1]+mp.get(w[-1],w[-1])+'ます';pk=k[:-1]+mp.get(k[-1],k[-1])+'ます'
  e['polite']=dict(jp=pol,kana=pk)
 e.setdefault('example',None)
 for key in ['known','daily','na']:e.pop(key,None)
 if not e.get('group'):e.pop('group',None)
 entries.append(e)
categories=copy.deepcopy(base['categories'])
categories[0]['subcategories']+=['Nama orang','Perasaan & pikiran','Acara & kegiatan','Layanan & administrasi']
for c in categories:c['subcategories']=[s for s in c['subcategories'] if any(e['category']==c['id'] and e['subcategory']==s for e in entries)]
meta=dict(updated='2026-10-30',level='N4',total=len(entries),everydaySelected=411,description='Kumpulan belajar N4 / A2 dari enam indeks Marugoto–Irodori dan sisa daftar harian. Label Pengayaan menandai kata yang dapat melampaui N4 dasar.')
output=dict(meta=meta,sources=src['sources'],categories=categories,entries=entries)
code="const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);for(const f of ['kana-data.js','kanji-data.js','kanji-search.js','kotoba-data.js','kotoba-search.js'])vm.runInContext(fs.readFileSync('dist/'+f,'utf8'),c);const a=JSON.parse(fs.readFileSync(0,'utf8'));process.stdout.write(JSON.stringify(a.map(k=>vm.runInContext('kanjiRomanize('+JSON.stringify(k)+')',c))));"
romaji=json.loads(subprocess.check_output(['node','-e',code],cwd=R,input=json.dumps([e['kana'] for e in entries]).encode()))
for e,roman in zip(entries,romaji):e['romaji']=roman
(R/'data/kotoba-n4.json').write_text(json.dumps(output,ensure_ascii=False,indent=2)+'\n')
print('Built',len(entries),'daily cards',sum(any(s['id']==13 for s in e['sources']) for e in entries))
from collections import Counter
print(Counter(e['category'] for e in entries));print('concept fallback',sum(e['subcategory']=='Konsep & informasi' for e in entries))

# Apply the retained deduplication and example layer after every rebuild.
subprocess.run([__import__("sys").executable,str(R/"scripts/complete-kotoba.py")],cwd=R,check=True)
