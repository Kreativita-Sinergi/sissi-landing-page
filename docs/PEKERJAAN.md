# Catatan pekerjaan — sissi-landing-page

> **Dokumen hidup.** Agent/kontributor WAJIB membacanya di awal sesi dan memperbaruinya di akhir sesi.
> Hanya lokal di repo ini.

Terakhir diperbarui: **2026-10-16** · oleh: Claude Opus 5.5 (navigasi anchor halus)

## Menunggu reviu sebelum merge

| Cabang | Ringkasan | Cara verifikasi | Risiko / catatan | Dibuat |
|---|---|---|---|---|
| _(kosong)_ | | | | |

## Sedang dikerjakan

_(kosong)_

## Berikutnya (urut prioritas)

1. **P1 · Rilis** — repo GitHub sudah ada & ter-push (2026-10-14:
   https://github.com/Kreativita-Sinergi/sissi-landing-page, cabang `main`). Sisa: hubungkan ke Vercel, arahkan
   domain `sissi.id` (DNS di DomaiNesia). Isi `NEXT_PUBLIC_SITE_URL` bila domain berbeda.
2. **P2 · Tinjau isi oleh pemilik** — terutama: FAQ (kepemilikan kode/data, perawatan), rentang anggaran di
   formulir, klaim "melayani klien di luar Pekanbaru", dan teks Tentang kami.

## Backlog (belum dikerjakan)

- [ ] **P2 · Tinjau terjemahan Inggris** — `src/content/en.ts` ditulis Claude; minta penutur fasih memeriksa, terutama
  FAQ "Do you work with clients outside Indonesia? … in English or Indonesian" (klaim layanan berbahasa Inggris).
- [ ] **P3 · Peringatan build `metadataBase`** — muncul dari 404 bawaan Next (`/_not-found`), semua halaman kita sudah
  memasang `metadataBase`; tidak berdampak, abaikan atau periksa saat Next diperbarui.
- [ ] **P1 · Lisensi foto hero** — `public/hero/orang-buku.webp` dari file yang diberikan pemilik; nama filenya mirip
  foto stok Freepik. Pastikan lisensinya (Freepik gratis mewajibkan atribusi; premium tidak). Bila perlu atribusi,
  tambahkan di footer.
- [ ] **P3 · Foto hero asli** — idealnya foto anggota tim sungguhan.
  Ganti dengan foto anggota tim asli bila ada: latar polos, setengah badan; potong dengan Vision macOS seperti catatan
  2026-10-14, simpan WebP transparan ±800 px lebar.
- [ ] **P3 · Tangkapan layar portofolio diperbarui** — `public/products/site-*.jpg` diambil 2026-10-14 (madeart: 2026-10-17) dari situs
  langsung (Chrome headless 1440×900). Ambil ulang bila situsnya berubah besar.
- [ ] **P3 · Nama PT** — situs memakai "PT. Sissi Kreatif Teknologi" atas permintaan pemilik walau akta belum
  terbit (2026-10-14). Bila nama/badan hukum berubah, cukup ubah `site.company`.
- [ ] **P3 · Analitik** — belum ada (CSP saat ini hanya `'self'`; tambahkan domain analitik ke CSP bila dipasang).

## Keputusan terbuka (butuh pemilik)

_(kosong)_

## Selesai (terbaru di atas)

- **2026-10-17 · Portofolio Made Art diperbarui (XS; Claude Opus 5.5; permintaan pemilik)** — tangkapan layar
  `site-madeart.jpg` diambil ulang setelah situs klien ganti foto & copy hero. Situs kini punya preloader, jadi
  `chrome --screenshot` biasa hanya menangkap logo; dipakai Chrome headless lewat CDP (1440×900, tunggu ±12 dtk).
  Ringkasan kartu: "Jakarta" → "Jabodetabek" / "Greater Jakarta" mengikuti situsnya.
- **2026-10-16 · Navigasi anchor lebih halus (XS; Claude Opus 5.5; permintaan pemilik)** — `html` kini
  `scroll-behavior: smooth` (sebelumnya hanya atribut `data-scroll-behavior` tanpa CSS-nya, jadi #produk dkk.
  meloncat; tetap mati bila `prefers-reduced-motion`). Menu seluler dibuat melayang (`absolute top-full`) agar
  penutupannya tidak menggeser isi halaman di tengah scroll (dulu tujuan meleset ±tinggi menu). Navbar menandai
  section aktif (IntersectionObserver, `aria-current="location"`).
- **2026-10-16 · Portofolio: Made Art (XS; Claude Opus 5.5; permintaan pemilik)** — https://madeart.id/ ditambahkan
  sebagai "Proyek klien" (ID & EN) dengan tangkapan layar `public/products/site-madeart.jpg` (Chrome headless
  1440×900). Kartu non-unggulan kini 3 kolom di layar `lg` agar tidak ada kartu yatim. Catatan: situs Made Art
  masih memuat testimoni placeholder ("Nama Narasumber") — sampaikan ke klien sebelum dipamerkan lebih luas.
- **2026-10-14 · Loka Accounting → Sissi Accounting (S; Claude Opus 5.5; permintaan pemilik)** — produk kini
  "Sissi Accounting" di https://accounting.sissi.id/ (ID & EN, footer, deret karya, meta). Isi dari situs produk:
  tagline "Pembukuan rapi. Usaha lebih terarah.", fitur (penjualan/pembelian, kas & bank + rekonsiliasi,
  multi-gudang & aset tetap, laba rugi/neraca/arus kas), integrasi opsional dengan Sissi Kasir, trial 30 hari.
  Panel tipografi diganti tangkapan layar dashboard aplikasi dari pemilik `public/products/accounting-ringkasan.jpg`
  (1586×1058, dipakai di bagian Produk & deret karya);
  `site-lokatech.jpg`, varian visual `panel`, nada `loka`, dan token `--color-loka-*` dihapus. Id produk/anchor
  jadi `accounting` (`#produk-accounting`).
- **2026-10-14 · Panel hero polos (XS; Claude Opus 5.5; pilihan pemilik)** — gradasi dihapus; panel kini oranye
  pastel polos `--color-panel: #fcd9bd` (kelas `fill-panel`, jadi `@theme static` tidak diperlukan lagi).
- **2026-10-14 · Panel hero oranye pastel (XS; Claude Opus 5.5; pilihan pemilik)** — panel gelap tidak disukai pemilik.
  Kini gradasi pastel halus `#fff0e4` → `#fcd6b8` → `#f8bd93` + kilau putih lembut, tanpa butiran/garis tepi.
- **2026-10-14 · Panel hero gelap + cahaya oranye (S; Claude Opus 5.5; disetujui pemilik)** — panel oranye kurang
  kontras dengan sweater oranye. Kini gradasi arang (`#3a3f43` → `#24282b` → `#16191b`), cahaya oranye di belakang
  kepala (siluet rambut tetap terbaca) + cahaya tipis kiri bawah, butiran halus (feTurbulence 7%), garis tepi putih 8%.
- **2026-10-14 · Panel hero oranye + posisi kartu (XS; Claude Opus 5.5; masukan pemilik)** — gradasi panel jadi oranye
  (`#e8611f` → `#f6a46f` → `#fde3cf`) + kilau putih; grafik turun setinggi bahu (`top-[40%]`), kartu menu turun
  (`-bottom-[5%]`). Pelajaran: perubahan token di `@theme static` tidak terdeteksi cache Turbopack — hapus
  `.next/cache .next/static .next/server` lalu build ulang (server `next dev` perlu dijalankan ulang).
- **2026-10-14 · Panel hero miring + gradasi (S; Claude Opus 5.5; masukan pemilik)** — kotak abu datar diganti SVG
  `Backdrop` di `Hero.tsx`: sisi kiri miring, sudut membulat, gradasi abu hangat (`--color-panel-deep/-/-light`) +
  sinar oranye tipis. Pelajaran: Tailwind 4 hanya menulis variabel tema yang dipakai kelas → warna yang hanya dipakai
  lewat `var()` di SVG harus di `@theme static`; `stopColor` dengan `var()` harus lewat `style`, bukan atribut.
- **2026-10-14 · Judul hero dua baris + jarak kolom (XS; Claude Opus 5.5; masukan pemilik)** — kolom teks hero
  dilebarkan (`1.45fr_1fr`), jarak kolom `gap-16`/`xl:gap-20`, kolase maks 480 px, dan ukuran judul disesuaikan (HP 1,8rem → desktop 3,1rem). Diukur dengan Playwright: 2 baris di
  360–1440 px untuk ID dan EN (EN 1 baris di 768 px).
- **2026-10-14 · Dua bahasa (ID/EN) + SEO per bahasa (L; Claude Opus 5.5; disetujui pemilik)** — keputusan pemilik:
  hanya Indonesia & Inggris; produk tidak dipaksa berbahasa Inggris (nama & tagline tetap Indonesia, ada catatan
  "products are currently available in Indonesian"); WA & email sama. `src/constants/content.ts` dipecah jadi kamus
  `src/content/{id,en}.ts` (+ `site.ts`, `locales.ts`); komponen menerima teks lewat prop. Route: dua root layout
  `(id)` → `/`, `(en)` → `/en` (statis, `<html lang>` benar, tanpa pengalihan otomatis), `global-not-found.tsx`
  dwibahasa. Tombol ID/EN di header (desktop & HP). SEO: canonical per bahasa, hreflang id/en/x-default, og:locale +
  alternatif, gambar OG per bahasa, sitemap dengan `xhtml:link` alternatif, JSON-LD WebPage/FAQPage ber-`inLanguage`.
  Template pesan WhatsApp/email ikut bahasa. Diverifikasi: build statis, curl (lang, canonical, hreflang, 404,
  sitemap, OG), Playwright (ganti bahasa dari header HP, formulir EN, FAQ EN).
- **2026-10-14 · Rapikan hero (XS; Claude Opus 5.5; masukan pemilik)** — kartu menu dipotong tanpa tepi/sudut
  bawaan aplikasi (sebelumnya garis dobel); file diganti nama `menu-*.webp` agar cache gambar tidak memakai versi
  lama. Label "Sissi Kasir" → "Sissi · Software, aplikasi & IoT". Judul → "Kami membuat software untuk usahamu."
  (tanpa "Indonesia", karena target pasar meluas).
- **2026-10-14 · Hero kolase (M; Claude Opus 5.5; masukan pemilik)** — foto dari pemilik
  (`../assets/education-students-happy-asian-woman-…jpg`) dihapus latarnya tanpa halo: masker Vision
  (`scripts/hapus-latar-masker.swift`) + matting dua warna (`scripts/hapus-latar-matting.py`: alpha = proyeksi
  (C−B) ke (H−B), warna tepi = warna subjek terdekat). Diperiksa di latar gelap/putih/oranye. Komposisi meniru contoh
  pemilik: panel abu (sweter oranye bentrok dengan panel oranye), potongan UI asli Kasir — grafik & panel pesanan di
  belakang orang, 3 kartu menu di depan — dan label "Sissi Kasir". Pelajaran: server `next dev` lama sempat tertinggal
  di port 3100 dan menyajikan CSS lama; selalu hentikan server dev setelah dipakai (`lsof -iTCP:3100`).
- **2026-10-14 · Potret hero baru, potongan lebih rapi (S; Claude Opus 5.5; masukan pemilik)** — foto yang diminta
  pemilik (0buCbtPbP14) ternyata Unsplash+ berbayar → dipakai foto gratis yang mirip (perempuan berkerudung, latar
  polos). Potongan sebelumnya tidak rapi (tepi dikikis → lingkaran gelap, sisa warna latar). Cara baru
  (`scratchpad`, belum masuk repo): masker Vision resolusi penuh sebagai wilayah kasar + keyer warna terhadap latar
  lokal untuk tepi tajam + dekontaminasi warna `F = (C − (1−a)·B) / a`. Tablet di foto berwarna mirip latar → foto
  dipotong setinggi dada. File: `public/hero/potret.webp` (nama baru agar cache gambar Next tidak memakai foto lama).
- **2026-10-14 · Hero: orang tanpa latar + layar melayang (S; Claude Opus 5.5; masukan pemilik)** — pemilik ingin gaya
  seperti contoh (orang dipotong dari latar, tangkapan layar aplikasi boleh). Foto Unsplash berlatar polos dipotong
  dengan Vision macOS (`VNGenerateForegroundInstanceMaskRequest`, offline), tepi dirapikan (spill kuning), dipotong
  sampai pinggang → `public/hero/orang.webp` (transparan). Komposisi: panel oranye membulat di belakang + 3 layar asli
  melayang (laporan Kasir, Kasir HP, hias Booth). Foto lama `konsultasi.webp` dihapus.
- **2026-10-14 · Latar foto hero (XS; Claude Opus 5.5; masukan pemilik)** — simbol S yang diperbesar di belakang foto
  terlihat berantakan (tepi jiplakan bergelombang). Diganti satu lingkaran oranye polos di kanan atas foto.
- **2026-10-14 · Hero: foto + simbol S (S; Claude Opus 5.5; masukan pemilik)** — pemilik tidak mau kartu karya
  maupun tangkapan layar aplikasi di kanan hero; contoh yang disukai: gamatechno.com (foto orang + bentuk merek, tanpa
  slider). Kanan hero kini foto orang (Unsplash, gratis komersial) di atas simbol S logo yang diperbesar, plus 2 label
  (lokasi, konsultasi gratis). Deret "Yang sudah kami buat" kembali di bawah hero. Judul hero dikecilkan
  (maks 3,25rem).
- **2026-10-14 · Hero dua kolom (S; Claude Opus 5.5; masukan pemilik)** — sisi kanan judul terasa kosong. Alih-alih
  gambar dekoratif, deret "Yang sudah kami buat" (4 kartu) dipindah ke kanan judul sebagai grid 2×2; di HP tetap di
  bawah teks. Dicek 1440, 1280, dan 390 px tanpa luapan.
- **2026-10-14 · Judul hero & tombol oranye (XS; Claude Opus 5.5; diminta pemilik)** — judul "Software house dari
  Pekanbaru." → "Kami membuat software untuk usaha Indonesia." (gambar OG ikut). Teks tombol oranye → putih
  (token `on-brand`; hover/tekan ke oranye lebih gelap). Catatan: kontras putih di atas `#F1702C` = 2,96:1, di
  bawah batas WCAG AA (4,5:1) — pemilik memilih putih; alternatif bila perlu: oranye tombol `#C95215` (4,47:1).
- **2026-10-14 · Redesain hero & layanan (M; Claude Opus 5.5; pemilik memilih opsi)** — Masukan pemilik: hero
  terasa seperti situs aplikasi kasir dan bagian layanan terasa "AI slop". Hero → opsi B "pernyataan + deret karya":
  judul "Software house dari Pekanbaru." + 4 kartu sejajar (Kasir, Booth, Loka, pilihfotomu sebagai proyek klien).
  Layanan → daftar "masalahnya → yang kami buat → contoh" (tanpa grid kartu, nomor, pil, dan spanduk oranye) dan
  dipindah tepat di bawah hero. Pola template lain dikurangi: label bergaris mono di tiap section, strip "sedang
  berjalan", daftar centang di Produk, kotak bernomor di Cara kerja (kini garis waktu). Portofolio: pilihfotomu +
  situs kasir.sissi.id & booth.sissi.id (Loka tidak diulang). Gambar OG mengikuti judul baru.
- **2026-10-14 · Situs perusahaan versi pertama (L; Claude Opus 5.5; disetujui pemilik)** — Next.js 16 + Tailwind 4
  + TS, satu halaman statis: Hero (layar asli Sissi Kasir), Produk (Kasir, Booth, Loka — fakta dari situs masing-
  masing), Layanan (6 + paket digitalisasi UMKM), Cara kerja (5 langkah), Portofolio (pilihfotomu = proyek klien,
  3 produk sendiri; tangkapan layar situs asli), Tentang (Pekanbaru), FAQ (akordeon), formulir permintaan proyek
  (chip, validasi, kirim lewat WhatsApp/email), Footer. SEO: metadata, JSON-LD, sitemap, robots, gambar OG.
  Keputusan pemilik: harga "sesuai kebutuhan", gratis konsultasi, nama PT ditampilkan. Diverifikasi: lint +
  build bersih, uji Playwright (HP 390px tanpa luapan horizontal, validasi formulir, isi pesan WhatsApp, menu HP,
  FAQ).

## Cara memperbarui (ringkas)

Pindahkan yang selesai ke "Selesai" (terbaru di atas, bertanggal), tambah temuan ke Backlog saat itu juga, dan
ubah tanggal "Terakhir diperbarui" — dalam commit yang sama dengan pekerjaannya.
