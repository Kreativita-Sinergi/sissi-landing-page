export interface GuideStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  keyPoints?: string[];
  image?: {
    src: string;
    alt: string;
    caption: string;
  };
  callout?: {
    type: "tip" | "info" | "warning";
    title: string;
    text: string;
  };
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideItem {
  slug: string;
  category: string;
  iconName: "BookOpen" | "ClipboardList" | "Printer" | "QrCode" | "Wallet" | "BarChart3";
  title: string;
  description: string;
  estimatedTime: string;
  lastUpdated: string;
  overview: string;
  prerequisites: string[];
  steps: GuideStep[];
  faqs: GuideFAQ[];
  relatedSlugs: string[];
}

export const GUIDES: GuideItem[] = [
  {
    slug: "mulai-dalam-5-menit",
    category: "MEMULAI",
    iconName: "BookOpen",
    title: "Mulai dalam 5 Menit",
    description:
      "Panduan awal: instal aplikasi di tablet/HP Android, isi nama toko, dan tambahkan kategori menu pertamamu.",
    estimatedTime: "5 menit baca",
    lastUpdated: "Oktober 2026",
    overview:
      "Aplikasi kasir Sissi dirancang agar Anda bisa langsung berjualan tanpa proses setup berbelit-belit. Hanya dalam 3 langkah sederhana, outlet Anda sudah siap menerima pesanan pertama pelanggan.",
    prerequisites: [
      "Tablet atau smartphone Android (minimal Android 8.0)",
      "Koneksi internet untuk sinkronisasi akun awal (setelahnya dapat beroperasi offline)",
      "Daftar nama menu dan harga jual yang ingin Anda input",
    ],
    steps: [
      {
        id: "langkah-1-pilih-outlet",
        stepNumber: 1,
        title: "Pilih Outlet & Perangkat Kasir",
        description:
          "Setelah masuk dengan email atau nomor WhatsApp terdaftar, pilih outlet atau cabang yang aktif. Sissi akan secara otomatis mengunduh katalog produk, konfigurasi meja, dan data tarif pajak yang sudah tersimpan di cloud.",
        keyPoints: [
          "Satu akun pemilik dapat menaungi banyak outlet atau cabang sekaligus.",
          "Tetapkan peran perangkat sebagai Kasir Utama, POS Order Meja, atau Layar Dapur (KDS).",
          "Aktifkan opsi 'Ingat Perangkat' agar kasir tidak perlu login ulang setiap membuka shift.",
        ],
        image: {
          src: "/images/panduan/setup-outlet.png",
          alt: "Tampilan pemilihan outlet pada tablet Sissi POS",
          caption: "Pilih outlet aktif Anda dan perangkat akan mengunduh katalog dalam hitungan detik.",
        },
        callout: {
          type: "tip",
          title: "Tips Keamanan",
          text: "Gunakan PIN Kasir 4 angka khusus untuk staf kasir agar data sensitif seperti omzet harian hanya dapat diakses oleh pemilik atau manajer toko.",
        },
      },
      {
        id: "langkah-2-kelola-katalog",
        stepNumber: 2,
        title: "Buat Kategori & Tambah Produk Menu",
        description:
          "Buka menu Manajemen Produk untuk menyusun katalog dagangan Anda. Buat kategori terlebih dahulu (misalnya: Minuman Kopi, Non-Kopi, Makanan Utama, Snack) agar kasir dapat mencari menu dengan cepat saat jam ramai.",
        keyPoints: [
          "Kelompokkan menu berdasarkan kategori visual dengan warna atau ikon penanda.",
          "Unggah foto produk atau gunakan inisial huruf dengan kartu warna kontras tinggi.",
          "Atur urutan kategori terpopuler di bagian paling atas grid kasir.",
        ],
        image: {
          src: "/images/panduan/kelola-produk.png",
          alt: "Layar manajemen katalog produk Sissi POS",
          caption: "Kelola daftar produk, stok aktif, dan kategori menu dalam satu tampilan intuitif.",
        },
      },
      {
        id: "langkah-3-edit-produk-varian",
        stepNumber: 3,
        title: "Atur Varian, Opsi Tambahan & Harga Modal (HPP)",
        description:
          "Klik pada menu untuk menambahkan varian (seperti ukuran Reguler/Large, level gula, ekstra shot espresso). Jangan lupa mengisi kolom Harga Modal (HPP) agar laporan margin keuntungan kotor Anda terhitung otomatis secara akurat.",
        keyPoints: [
          "Tambahkan opsi modifier (contoh: Level Pedas, Less Sugar, Topping Boba).",
          "Isi Harga Modal bahan agar margin laba per item dapat dipantau langsung di laporan.",
          "Aktifkan toggle 'Tersedia' atau 'Habis' sewaktu-waktu saat stok harian kosong.",
        ],
        image: {
          src: "/images/panduan/edit-produk.png",
          alt: "Panel edit produk dan opsi varian pada tablet Sissi",
          caption: "Pengaturan harga modal, harga jual, dan grup modifier per produk.",
        },
        callout: {
          type: "info",
          title: "Perhitungan Margin Otomatis",
          text: "Dengan mengisi harga modal bahan baku, Sissi akan otomatis menghitung Food Cost Percentage dan memberi peringatan jika margin produk Anda terlalu tipis.",
        },
      },
    ],
    faqs: [
      {
        question: "Apakah Sissi bisa berjalan tanpa koneksi internet?",
        answer:
          "Bisa. Sissi memiliki arsitektur Offline-First. Seluruh transaksi kasir, cetak struk, dan pesanan meja tetap berjalan normal saat internet mati, lalu tersinkronisasi otomatis saat terhubung kembali.",
      },
      {
        question: "Berapa jumlah menu maksimal yang bisa ditambahkan?",
        answer:
          "Tidak ada batasan jumlah menu di Sissi POS, baik untuk paket gratis maupun langganan pro.",
      },
      {
        question: "Bisakah impor menu secara massal lewat Excel?",
        answer:
          "Bisa! Anda dapat mengunduh template Excel dari dashboard web Sissi, mengisinya, lalu mengunggahnya sekaligus.",
      },
    ],
    relatedSlugs: ["mencatat-pesanan-dan-denah-meja", "menyambungkan-printer-thermal-bluetooth", "shift-kas-dan-tutup-kasir-harian"],
  },
  {
    slug: "mencatat-pesanan-dan-denah-meja",
    category: "TRANSAKSI",
    iconName: "ClipboardList",
    title: "Mencatat Pesanan & Denah Meja",
    description:
      "Cara mengatur nomor meja, simpan pesanan berjalan, kirim ke layar dapur, dan split bill tagihan pelanggan.",
    estimatedTime: "6 menit baca",
    lastUpdated: "Oktober 2026",
    overview:
      "Untuk usaha kuliner (kafe, resto, warung makan), kelancaran arus pesanan dari pelayan ke dapur adalah kunci kepuasan pelanggan. Pelajari cara mengelola meja, tiket dapur, dan tagihan terpisah.",
    prerequisites: [
      "Sudah membuat daftar kategori & menu makanan/minuman",
      "Nomor denah meja outlet Anda sudah terdaftar di aplikasi",
    ],
    steps: [
      {
        id: "langkah-1-denah-meja",
        stepNumber: 1,
        title: "Buka Meja & Pilih Nomor Tamu",
        description:
          "Buka tab 'Denah Meja' di bilah navigasi. Anda akan melihat representasi visual seluruh meja: meja hijau (kosong), meja oranye (sedang makan / open bill), atau meja dengan timer durasi duduk tamu.",
        keyPoints: [
          "Ketuk meja yang dituju untuk langsung memulai pesanan baru atas nama meja tersebut.",
          "Dapat menuliskan nama tamu atau catatan khusus (misal: 'Bapak Rian - 4 Orang').",
          "Pindahkan tamu ke meja lain dengan tombol 'Pindah Meja' tanpa kehilangan daftar pesanan.",
        ],
        image: {
          src: "/images/panduan/denah-meja.png",
          alt: "Tampilan denah meja dan status keterisian di Sissi POS",
          caption: "Denah meja interaktif: pantau meja kosong, terisi, dan durasi kunjungan tamu secara real-time.",
        },
      },
      {
        id: "langkah-2-kirim-ke-dapur",
        stepNumber: 2,
        title: "Kirim Pesanan ke Dapur & Bar (Kitchen Display)",
        description:
          "Setelah mencatat menu dan catatan modifikasi (seperti 'tanpa seledri' atau 'es dipisah'), tekan tombol 'Kirim ke Dapur'. Pesanan akan langsung muncul di Layar Dapur (KDS) atau tercetak di printer dapur secara otomatis.",
        keyPoints: [
          "Pemisahan tiket otomatis: pesanan minuman terkirim ke Bar, makanan ke Kitchen.",
          "Tamu dapat memesan menu tambahan (round 2) yang langsung digabungkan ke tagihan meja yang sama.",
          "Status pesanan di dapur terbagi rapi: Menunggu, Sedang Dimasak, dan Siap Antar.",
        ],
        image: {
          src: "/images/panduan/pesanan-dapur.png",
          alt: "Layar pesanan dapur (KDS) di Sissi POS",
          caption: "Layar Dapur menampilkan tiket pesanan per meja lengkap dengan instruksi modifikasi khusus.",
        },
        callout: {
          type: "tip",
          title: "Efisiensi Dapur",
          text: "Staf dapur dapat mengetuk kartu pesanan untuk menandai 'Selesai Dimasak', sehingga pelayan langsung menerima notifikasi meja yang siap diantar.",
        },
      },
      {
        id: "langkah-3-split-bill",
        stepNumber: 3,
        title: "Split Bill: Pisah Tagihan Meja dengan Mudah",
        description:
          "Ketika rombongan tamu ingin membayar masing-masing, Anda tidak perlu menghitung manual dengan kalkulator. Buka pesanan berjalan di meja tersebut dan pilih menu 'Pisah Tagihan'.",
        keyPoints: [
          "Pilih item yang ingin dipisahkan ke bill pertama dan bill kedua secara visual.",
          "Sistem otomatis membagi proporsi diskon dan pajak service charge secara adil.",
          "Masing-masing tamu bisa membayar dengan metode berbeda (misal: satu QRIS, satu Tunai).",
        ],
        image: {
          src: "/images/panduan/pisah-pesanan.png",
          alt: "Dialog pisah pesanan (split bill) pada tablet Sissi",
          caption: "Fitur Split Bill: pisahkan item menu ke beberapa tagihan independen dalam hitungan detik.",
        },
      },
    ],
    faqs: [
      {
        question: "Apakah bisa pesanan Takeaway (Bungkus) tanpa memilih meja?",
        answer:
          "Tentu! Cukup pilih mode 'Bungkus / Takeaway' di layar kasir, maka pesanan akan tercatat tanpa mengunci denah meja.",
      },
      {
        question: "Bagaimana jika tamu ingin menggabungkan meja?",
        answer:
          "Fitur 'Gabung Meja' memungkinkan Anda menggabungkan dua meja atau lebih ke dalam satu tagihan tunggal.",
      },
    ],
    relatedSlugs: ["menerima-pembayaran-qris-dan-tunai", "mulai-dalam-5-menit", "menyambungkan-printer-thermal-bluetooth"],
  },
  {
    slug: "menyambungkan-printer-thermal-bluetooth",
    category: "PERANGKAT",
    iconName: "Printer",
    title: "Menyambungkan Printer Thermal Bluetooth",
    description:
      "Langkah memasangkan printer ukuran 58 mm atau 80 mm, uji coba cetak struk, dan upload logo tokomu.",
    estimatedTime: "5 menit baca",
    lastUpdated: "Oktober 2026",
    overview:
      "Sissi mendukung hampir seluruh merk printer thermal bluetooth portable, desktop USB, maupun printer jaringan LAN (ESC/POS). Ikuti panduan cepat ini untuk menyambungkan printer struk Anda.",
    prerequisites: [
      "Printer thermal bluetooth dengan kertas 58mm atau 80mm",
      "Bluetooth pada tablet atau smartphone dalam kondisi menyala",
      "Kertas thermal terpasang dengan arah gulungan yang benar",
    ],
    steps: [
      {
        id: "langkah-1-pairing-bluetooth",
        stepNumber: 1,
        title: "Pasangkan (Pairing) Bluetooth di Tablet/HP",
        description:
          "Nyalakan printer kasir Anda. Masuk ke menu Bluetooth di pengaturan perangkat Android Anda, cari nama printer (biasanya bernama 'RPP02N', 'MPT-II', 'InnerPrinter', atau merk printer Anda), lalu pasangkan dengan PIN standar (umumnya 0000 atau 1234).",
        keyPoints: [
          "Pastikan printer tidak sedang terhubung ke perangkat kasir lain.",
          "Jika printer memiliki fitur Auto-sleep, nonaktifkan agar koneksi tidak sering terputus.",
          "Untuk perangkat POS all-in-one dengan printer tanam (built-in), Sissi akan mendeteksinya secara langsung.",
        ],
        image: {
          src: "/images/panduan/pengaturan-printer.png",
          alt: "Layar pengaturan perangkat dan printer thermal di Sissi",
          caption: "Pilih printer yang terdeteksi, tentukan lebar kertas (58mm / 80mm), dan lakukan Tes Cetak.",
        },
      },
      {
        id: "langkah-2-atur-printer-di-sissi",
        stepNumber: 2,
        title: "Konfigurasi Ukuran & Tes Cetak di Sissi",
        description:
          "Buka Pengaturan > Perangkat Ini di aplikasi Sissi. Di bagian 'Printer Struk', pilih perangkat Bluetooth yang sudah dipasangkan. Tentukan lebar kertas kasir (58 mm atau 80 mm), lalu ketuk 'Uji Coba Cetak'.",
        keyPoints: [
          "Pilih format kertas: 58mm (struk saku kompak) atau 80mm (struk resto detail).",
          "Aktifkan opsi 'Cetak Otomatis Setiap Transaksi Selesai' jika Anda tidak ingin menekan tombol cetak manual.",
          "Dapat mengatur opsi 'Buka Laci Uang (Cash Drawer)' otomatis setelah mencetak struk.",
        ],
        image: {
          src: "/images/panduan/pengaturan-struk.png",
          alt: "Layar kustomisasi struk dan logo toko Sissi POS",
          caption: "Kustomisasi header struk, alamat toko, kontak, pesan penutup, dan logo monokrom.",
        },
        callout: {
          type: "tip",
          title: "Uji Coba Cetak",
          text: "Jika kertas keluar tanpa tulisan, periksa apakah gulungan kertas terbalik. Kertas thermal hanya memiliki lapisan kimia di satu sisi.",
        },
      },
      {
        id: "langkah-3-logo-dan-footer-struk",
        stepNumber: 3,
        title: "Unggah Logo Toko & Pesan Catatan Struk",
        description:
          "Masuk ke menu 'Pengaturan Struk' untuk memberikan sentuhan personal pada struk pelanggan Anda. Anda dapat mengunggah logo hitam-putih toko, menuliskan alamat, nomor telepon, akun media sosial, hingga ucapan terima kasih atau password WiFi.",
        keyPoints: [
          "Gunakan logo dengan format hitam-putih kontras tinggi untuk hasil cetakan paling tajam.",
          "Tuliskan pesan promosi di bagian footer (misal: 'Follow Instagram @tokosaya untuk promo harian').",
          "Tambahkan informasi kode WiFi toko di bagian bawah struk untuk kenyamanan pelanggan.",
        ],
        callout: {
          type: "info",
          title: "Hemat Kertas Thermal",
          text: "Sissi memiliki mode kompresi baris yang menghemat hingga 25% panjang gulungan kertas thermal tanpa mengurangi keterbacaan struk.",
        },
      },
    ],
    faqs: [
      {
        question: "Merk printer apa saja yang kompatibel dengan Sissi?",
        answer:
          "Semua printer standar ESC/POS kompatibel: Panda, Iware, Eppos, VSC, MiniPOS, Sunmi, Xprinter, Epson, dan printer bluetooth murah di e-commerce.",
      },
      {
        question: "Bisakah satu kasir tersambung ke 2 printer sekaligus (struk & dapur)?",
        answer:
          "Bisa! Anda dapat mengatur Printer 1 sebagai Struk Kasir dan Printer 2 (Bluetooth/LAN) sebagai Printer Dapur.",
      },
    ],
    relatedSlugs: ["menerima-pembayaran-qris-dan-tunai", "mulai-dalam-5-menit", "shift-kas-dan-tutup-kasir-harian"],
  },
  {
    slug: "menerima-pembayaran-qris-dan-tunai",
    category: "PEMBAYARAN",
    iconName: "QrCode",
    title: "Menerima Pembayaran QRIS & Tunai",
    description:
      "Cara menampilkan QRIS dinamis di layar kasir, nominal bayar cepat, dan penghitungan uang kembalian otomatis.",
    estimatedTime: "5 menit baca",
    lastUpdated: "Oktober 2026",
    overview:
      "Percepat antrean kasir Anda dengan sistem pembayaran kilat di Sissi POS: nominal tunai cepat dengan hitungan kembalian akurat, serta QRIS dinamis yang otomatis terverifikasi lunas.",
    prerequisites: [
      "Katalog produk dan pesanan sudah siap dibayarkan",
      "Akun QRIS toko (atau stiker QRIS statis toko Anda)",
    ],
    steps: [
      {
        id: "langkah-1-pilih-metode-bayar",
        stepNumber: 1,
        title: "Buka Layar Pembayaran & Pilih Nominal Cepat Tunai",
        description:
          "Setelah meninjau pesanan pelanggan, tekan tombol 'Bayar'. Sissi akan menampilkan ringkasan subtotal, pajak, diskon, dan pilihan metode pembayaran (Tunai, QRIS, Transfer Bank, atau Debit/Kredit).",
        keyPoints: [
          "Tombol Nominal Uang Pas: Rp50.000, Rp100.000, atau pecahan pas sesuai total tagihan.",
          "Kembalian uang dihitung secara instan dengan font angka besar yang mudah dibaca kasir.",
          "Mencegah human error salah hitung uang kembalian saat toko sedang padat pembeli.",
        ],
        image: {
          src: "/images/panduan/pembayaran-kasir.png",
          alt: "Layar pembayaran kasir Sissi POS dengan opsi uang pas dan kembalian",
          caption: "Tombol pecahan nominal cepat memangkas waktu hitung uang kembalian kasir menjadi di bawah 3 detik.",
        },
      },
      {
        id: "langkah-2-qris-dinamis",
        stepNumber: 2,
        title: "Tampilkan QRIS Dinamis Otomatis",
        description:
          "Jika pelanggan memilih pembayaran QRIS, pilih tab QRIS. Sissi akan menghasilkan barcode QRIS dinamis yang mencantumkan nominal belanjaan secara persis di layar kasir atau layar hadap pelanggan.",
        keyPoints: [
          "Pelanggan cukup scan dengan aplikasi m-Banking (BCA, Mandiri, BRI, BNI) atau e-Wallet (GoPay, OVO, Dana, ShopeePay).",
          "Pelanggan tidak perlu repot mengetik nominal rupiah secara manual, mencegah salah ketik angka.",
          "Konfirmasi pembayaran langsung muncul secara otomatis begitu dana berhasil masuk.",
        ],
        image: {
          src: "/images/panduan/qris-dinamis.png",
          alt: "Dialog QRIS dinamis pada layar kasir Sissi",
          caption: "QRIS dinamis langsung menampilkan nominal tepat sehingga pelanggan tidak bisa salah input nominal.",
        },
        callout: {
          type: "tip",
          title: "QRIS Statis Juga Didukung",
          text: "Jika Anda menggunakan stiker barcode QRIS bawaan bank/merchant Anda sendiri, kasir cukup memilih 'QRIS Manual' lalu klik 'Lunas' setelah melihat notifikasi masuk di HP.",
        },
      },
      {
        id: "langkah-3-struk-dan-selesai",
        stepNumber: 3,
        title: "Konfirmasi Lunas, Cetak Struk, atau Kirim Struk Digital",
        description:
          "Setelah transaksi tuntas, layar sukses pembayaran akan muncul. Anda dapat langsung mencetak struk fisik atau mengirimkan struk digital via WhatsApp ke nomor pelanggan tanpa biaya kertas.",
        keyPoints: [
          "Pilihan cetak struk: Cetak Struk Kasir, Cetak Struk Dapur, atau Lewati.",
          "Kirim e-Receipt digital via WhatsApp langsung dari aplikasi tanpa perlu simpan kontak pembeli.",
          "Laci kasir (cash drawer) akan terbuka otomatis saat pembayaran tunai selesai.",
        ],
        image: {
          src: "/images/panduan/pembayaran-berhasil.png",
          alt: "Layar konfirmasi transaksi sukses pada Sissi POS",
          caption: "Ringkasan transaksi berhasil lengkap dengan tombol cetak struk dan pengiriman nota via WhatsApp.",
        },
      },
    ],
    faqs: [
      {
        question: "Apakah ada potongan MDR untuk pembayaran QRIS?",
        answer:
          "Untuk QRIS dinamis standar nasional Bank Indonesia, berlaku tarif MDR resmi 0.3% untuk usaha mikro (UMKM).",
      },
      {
        question: "Bagaimana jika pelanggan ingin bayar sebagian tunai dan sebagian transfer?",
        answer:
          "Sissi menyediakan fitur 'Split Payment / Bayar Sebagian', di mana satu tagihan bisa dipecah ke beberapa metode pembayaran.",
      },
    ],
    relatedSlugs: ["mencatat-pesanan-dan-denah-meja", "shift-kas-dan-tutup-kasir-harian", "membaca-laporan-penjualan-dan-margin"],
  },
  {
    slug: "shift-kas-dan-tutup-kasir-harian",
    category: "KASIR",
    iconName: "Wallet",
    title: "Shift Kas & Tutup Kasir Harian",
    description:
      "Pencatatan modal kas awal, hitung uang fisik di laci, periksa selisih, dan cetak ringkasan tutup kasir.",
    estimatedTime: "6 menit baca",
    lastUpdated: "Oktober 2026",
    overview:
      "Pengendalian uang kas laci adalah garis pertahanan pertama bisnis dari kebocoran keuangan. Sistem pergantian shift kasir Sissi menjamin setiap rupiah uang tunai tercatat dengan disiplin dan transparan.",
    prerequisites: [
      "Kasir sudah mengetahui nominal uang modal kembalian awal di laci",
      "Hak akses staf kasir sudah dikonfigurasi",
    ],
    steps: [
      {
        id: "langkah-1-buka-kasir-modal-awal",
        stepNumber: 1,
        title: "Buka Shift Kasir & Masukkan Modal Kas Awal",
        description:
          "Saat staf kasir memulai hari kerja atau pergantian shift, aplikasi akan meminta input 'Buka Kasir'. Kasir memasukkan jumlah uang fisik yang ada di laci sebagai modal kembalian (misal: Rp200.000).",
        keyPoints: [
          "Catat modal awal berdasarkan pecahan uang yang disiapkan manajer toko.",
          "Waktu pembukaan shift dan nama kasir yang bertugas akan otomatis tercatat di log audit sistem.",
          "Sissi tidak mengizinkan transaksi kasir sebelum shift resmi dibuka untuk mencegah selisih tak terlacak.",
        ],
        image: {
          src: "/images/panduan/buka-kasir.png",
          alt: "Dialog buka kasir dan input kas awal di Sissi POS",
          caption: "Dialog input modal kas awal kembalian sebelum shift kerja dimulai.",
        },
      },
      {
        id: "langkah-2-kelola-kas-masuk-keluar",
        stepNumber: 2,
        title: "Catat Kas Masuk & Kas Keluar (Petty Cash Operasional)",
        description:
          "Jika selama jam kerja ada pengeluaran kas kecil dari laci (misal: membeli es batu darurat Rp15.000 atau membayar galon air minum), kasir wajib mencatatnya di menu 'Kas Keluar' dengan catatan peruntukan.",
        keyPoints: [
          "Kategori pengeluaran operasional: Pembelian Bahan Baku Darurat, Biaya Kurir, Operasional Harian.",
          "Foto nota pembelian fisik langsung dari kamera tablet sebagai bukti audit.",
          "Uang di laci akan otomatis disesuaikan secara real-time di sistem buku kas.",
        ],
        callout: {
          type: "warning",
          title: "Disiplin Petty Cash",
          text: "Penyebab utama selisih kas di malam hari adalah pengeluaran kecil tanpa pencatatan. Pastikan kasir selalu menginput kas keluar seketika uang diambil dari laci.",
        },
      },
      {
        id: "langkah-3-tutup-kasir-hitung-fisik",
        stepNumber: 3,
        title: "Tutup Kasir (Blind Cash Close) & Cek Selisih",
        description:
          "Di akhir shift, kasir melakukan proses Tutup Kasir. Fitur Blind Cash Close Sissi menyembunyikan estimasi total sistem dari kasir, sehingga kasir wajib menghitung uang fisik lembar demi lembar secara jujur.",
        keyPoints: [
          "Kasir menginput jumlah lembaran uang fisik (Rp100rb, Rp50rb, Rp20rb, dst).",
          "Sistem membandingkan uang fisik vs hitungan sistem (Modal + Tunai Masuk - Kas Keluar).",
          "Jika ada selisih kas (kurang/lebih), kasir wajib memberikan keterangan sebelum laporan ditutup.",
        ],
        image: {
          src: "/images/panduan/tutup-kasir.png",
          alt: "Layar tutup kasir dan kalkulasi uang fisik di Sissi",
          caption: "Input pecahan uang kertas dan koin di laci kasir untuk validasi saldo akhir shift.",
        },
      },
      {
        id: "langkah-4-cetak-rekap-shift",
        stepNumber: 4,
        title: "Cetak Rekap Ringkasan Tutup Kasir (Laporan Z)",
        description:
          "Setelah shift ditutup, sistem mencetak slip ringkasan tutup kasir di printer thermal dan mengirimkan rekap ringkasan otomatis ke WhatsApp/Email pemilik toko.",
        keyPoints: [
          "Slip mencantumkan total omzet penjualan, rincian pembayaran (Tunai, QRIS, Debit), kas keluar, dan selisih.",
          "Kasir dan manajer toko menandatangani struk tutup kasir sebagai bukti serah terima uang fisik.",
          "Laporan tersimpan permanen di cloud dan dapat ditinjau kapan saja.",
        ],
        image: {
          src: "/images/panduan/laporan-tutup-kasir.png",
          alt: "Dialog laporan ringkasan tutup kasir di tablet Sissi",
          caption: "Laporan rekap harian mencakup total penjualan kotor, diskon, pengeluaran, dan verifikasi kas fisik.",
        },
      },
    ],
    faqs: [
      {
        question: "Apa yang harus dilakukan jika kasir menemukan selisih uang?",
        answer:
          "Tulis keterangan pada kolom 'Catatan Selisih'. Laporan tetap bisa ditutup dan manajer dapat memeriksa log transaksi penjualan satu per satu untuk menelusuri kejanggalan.",
      },
      {
        question: "Apakah pemilik bisa melihat laporan tutup kasir dari luar kota?",
        answer:
          "Bisa! Laporan shift langsung terkirim secara otomatis ke aplikasi Sissi Owner di smartphone Anda atau via notifikasi email.",
      },
    ],
    relatedSlugs: ["menerima-pembayaran-qris-dan-tunai", "membaca-laporan-penjualan-dan-margin", "mulai-dalam-5-menit"],
  },
  {
    slug: "membaca-laporan-penjualan-dan-margin",
    category: "LAPORAN",
    iconName: "BarChart3",
    title: "Membaca Laporan Penjualan & Margin",
    description:
      "Memantau produk terlaris, jam paling ramai pengunjung, margin kotor, dan ekspor laporan ke format Excel/CSV.",
    estimatedTime: "7 menit baca",
    lastUpdated: "Oktober 2026",
    overview:
      "Data penjualan adalah kompas bisnis Anda. Jangan biarkan data hanya tersimpan tanpa dianalisis. Pelajari cara memanfaatkan laporan analitik Sissi untuk mendongkrak profitabilitas toko Anda.",
    prerequisites: [
      "Transaksi kasir sudah berjalan selama beberapa hari untuk melihat pola tren",
      "Harga Modal (HPP) produk sudah diisi untuk perhitungan margin keuntungan",
    ],
    steps: [
      {
        id: "langkah-1-riwayat-transaksi",
        stepNumber: 1,
        title: "Pantau Riwayat Penjualan & Margin Kotor",
        description:
          "Buka menu Laporan di bilah samping. Anda akan melihat ringkasan omzet kotor, omzet bersih setelah diskon, total HPP modal bahan yang terpakai, serta Laba Kotor (Gross Profit) outlet Anda.",
        keyPoints: [
          "Filter periode tanggal fleksibel: Hari Ini, Kemarin, 7 Hari Terakhir, Bulan Ini, atau Rentang Kustom.",
          "Grafik visual tren omzet harian menunjukkan tren kenaikan atau penurunan bisnis Anda.",
          "Metrik rata-rata belanja per tamu (Average Order Value / AOV) untuk mengukur performa kasir.",
        ],
        image: {
          src: "/images/panduan/riwayat-penjualan.png",
          alt: "Layar riwayat penjualan dan laba kotor di Sissi POS",
          caption: "Grafik omzet penjualan harian, pembagian metode bayar, dan margin laba kotor.",
        },
      },
      {
        id: "langkah-2-analisis-jam-ramai",
        stepNumber: 2,
        title: "Analisis Grafik Jam Ramai (Heatmap Penjualan)",
        description:
          "Gunakan grafik distribusi transaksi per jam untuk mengetahui kapan waktu tersibuk toko Anda. Informasi ini sangat krusial untuk mengatur jadwal shift karyawan dan waktu persiapan bahan baku (prep time).",
        keyPoints: [
          "Identifikasi 'Peak Hours' (contoh: jam 12:00-14:00 makan siang, atau 19:00-21:00 nongkrong malam).",
          "Jangan menempatkan staf berlebihan pada jam sepi untuk menghemat beban operasional gaji.",
          "Manfaatkan jam sepi untuk program promo Happy Hour agar penjualan tetap berputar stabil.",
        ],
        image: {
          src: "/images/panduan/jam-ramai.png",
          alt: "Grafik jam ramai transaksi di Sissi POS",
          caption: "Grafik frekuensi transaksi per jam membantu Anda menyusun jadwal shift karyawan yang hemat dan optimal.",
        },
        callout: {
          type: "tip",
          title: "Strategi Promo Happy Hour",
          text: "Jika grafik jam 14:00 - 17:00 selalu rendah transaksi, buat promo diskon kopi 20% khusus di jam tersebut untuk menarik pengunjung laptopan/bekerja.",
        },
      },
      {
        id: "langkah-3-produk-terlaris-dan-ekspor",
        stepNumber: 3,
        title: "Peringkat Menu Terlaris (Menu Engineering) & Ekspor Data",
        description:
          "Tinjau daftar produk berdasarkan kuantitas terjual dan kontribusi keuntungan. Anda dapat mengekspor seluruh rekapan pembukuan ke format file Excel (.xlsx) atau CSV untuk keperluan laporan pajak atau pembukuan akuntansi.",
        keyPoints: [
          "Matriks menu: ketahui menu mana yang 'Star' (laris & untung besar) vs 'Dog' (jarang laku & rugi).",
          "Ekspor rincian penjualan per item, per kasir, per metode bayar dalam satu klik.",
          "Kompatibel langsung dengan software akuntansi (Jurnal, Zahir, Accurate, Excel).",
        ],
        image: {
          src: "/images/panduan/detail-transaksi.png",
          alt: "Panel rincian detail transaksi produk pada tablet Sissi",
          caption: "Rincian detail per transaksi mencakup kuantitas item, waktu cetak, kasir bertugas, dan status pembayaran.",
        },
      },
    ],
    faqs: [
      {
        question: "Apakah laporan data penjualan tersimpan selamanya?",
        answer:
          "Ya. Seluruh riwayat transaksi di Sissi disimpan aman di cloud server kami tanpa batas waktu kedaluwarsa.",
      },
      {
        question: "Bisakah laporan dikirim otomatis ke email setiap malam?",
        answer:
          "Bisa! Anda dapat mengaktifkan fitur 'Laporan Harian via Email' di menu Pengaturan Notifikasi.",
      },
    ],
    relatedSlugs: ["shift-kas-dan-tutup-kasir-harian", "menerima-pembayaran-qris-dan-tunai", "mulai-dalam-5-menit"],
  },
];
