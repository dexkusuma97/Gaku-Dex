# I Sold My Life — adaptasi pembelajaran

Sumber alur: tujuh TXT dalam I_Sold_My_Life_Bab1-7.zip kiriman pengguna; salinan identik berada di isold-source/. Adaptasi Jepang baru, bukan transkripsi manga. Pembagian 7 bab dipertahankan dengan total 100 blok, masing-masing terjemahan Indonesia dan bantuan bahasa; 21 pertanyaan pemahaman opsional. Level N4–N3 terbimbing adalah panduan editorial, bukan klasifikasi resmi semua token.

Kredit metadata mengikuti penerbit Shueisha: karya asli Three Days of Happiness (三日間の幸福), Sugaru Miaki; adaptasi manga Shouichi Taguchi. https://www.s-manga.net/items/contents.html?jdcn=08881121881121315501 . README kiriman menyebut one-shot; istilah tersebut tidak digunakan sebagai metadata aplikasi. Alur hanya dari berkas pengguna.

Rak I Sold My Life tampil sesudah Nitamono, tujuh kartu dengan satu sampul original. Sampul WebP 600×900; prompt di ISOLD_IMAGE_PROMPT.json. Cerpen, Dongeng, Nene, Nitamono dan aset audio lama dipertahankan.

Audio belum ada: 100 jalur isold-1.mp3 sampai isold-100.mp3, penomoran lintas bab. Generator mendukung `bash scripts/generate-cerita-audio.sh --dry-run isold`; manifest di isold-audio-manifest.json. Tidak memanggil ElevenLabs selama implementasi. Renderer mengutamakan MP3, fallback perangkat hanya jika berkas hilang (404/410).

Validasi: tes Cerita (11 buku, semua bagian/kuis/furigana/bujet gambar), navigasi Cerita termasuk bagian 7, penomoran audio bagian 2 mulai isold-13.mp3, regresi Kaiwa/audio/navigation, syntax JS/bash, dry-run dan diff check lulus. Browser Chromium membuka rak, detail, bagian 1 dan terjemahan dengan baik. Android/tablet fisik belum diuji. Screenshot /workspace/scratch/dex-gaku-isold-bagian1.jpg.
