# Catatan pekerjaan — sissi-landing-page

> **Dokumen hidup.** Agent/kontributor WAJIB membacanya di awal sesi dan memperbaruinya di akhir sesi.
> Hanya lokal di repo ini.

Terakhir diperbarui: **2026-10-14** · oleh: Claude Opus 5.5 (hero dua kolom: karya di kanan)

## Menunggu reviu sebelum merge

| Cabang | Ringkasan | Cara verifikasi | Risiko / catatan | Dibuat |
|---|---|---|---|---|
| _(kosong)_ | | | | |

## Sedang dikerjakan

_(kosong)_

## Berikutnya (urut prioritas)

1. **P1 · Rilis** — buat repo GitHub (nama `sissi-landing-page`; nama ini sebelumnya redirect ke
   `sissi-pos-landing-page`, pemilik sudah setuju redirect itu hilang), hubungkan ke Vercel, arahkan domain
   `sissi.id` (DNS di DomaiNesia). Isi `NEXT_PUBLIC_SITE_URL` bila domain berbeda.
2. **P2 · Tinjau isi oleh pemilik** — terutama: FAQ (kepemilikan kode/data, perawatan), rentang anggaran di
   formulir, klaim "melayani klien di luar Pekanbaru", dan teks Tentang kami.

## Backlog (belum dikerjakan)

- [ ] **P2 · Tangkapan layar aplikasi Loka Accounting** — produk Loka kini memakai panel tipografi (belum ada
  tangkapan layar aplikasi di Dev/Sissi). Ganti dengan layar asli bila tersedia (`src/constants/content.ts` →
  `products.items[loka].visual`).
- [ ] **P3 · Tangkapan layar portofolio diperbarui** — `public/products/site-*.jpg` diambil 2026-10-14 dari situs
  langsung (Chrome headless 1440×900). Ambil ulang bila situsnya berubah besar.
- [ ] **P3 · Nama PT** — situs memakai "PT. Sissi Kreatif Teknologi" atas permintaan pemilik walau akta belum
  terbit (2026-10-14). Bila nama/badan hukum berubah, cukup ubah `site.company`.
- [ ] **P3 · Analitik** — belum ada (CSP saat ini hanya `'self'`; tambahkan domain analitik ke CSP bila dipasang).

## Keputusan terbuka (butuh pemilik)

_(kosong)_

## Selesai (terbaru di atas)

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
