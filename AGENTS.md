# AGENTS.md — sissi-landing-page (situs perusahaan sissi.id)

> **Baca seluruh berkas ini SEBELUM mengubah kode.** Aturan kerja umum (git, estimasi, catatan, sumber daya)
> sama dengan semua proyek pemilik: `../pos/sissi-pos-app/docs/aturan-lengkap.md`. Jangan mengubah `../pos/`.

Situs perusahaan **PT. Sissi Kreatif Teknologi** (sissi.id): profil, produk (Sissi Kasir, Sissi Booth, Loka
Accounting), layanan (website, aplikasi, sistem custom, IoT, UI/UX, perawatan), cara kerja, portofolio, tentang,
FAQ, dan formulir permintaan proyek. Bahasa kerja & teks: **Bahasa Indonesia**.

## 0. Aturan paling penting

1. **Git:** agent **selain Claude DILARANG commit/push ke `main`** — cabang `agent/<model>/<tugas>`, daftarkan di
   `docs/PEKERJAAN.md` → "Menunggu reviu". Semua agent: jangan push / tambah remote tanpa diminta; jangan
   `--no-verify`; jangan commit `.env*`/rahasia.
2. **Catatan pekerjaan:** awal sesi baca `docs/PEKERJAAN.md`; akhir sesi perbarui dalam commit yang sama.
3. **Estimasi sebelum kerja:** ukuran XS–XL; **M ke atas → minta persetujuan pemilik**.
4. **Perintah berat lewat `scripts/exclusive.sh`** (build, lint penuh). Server dev di **port 3100** (8080 milik
   sissi-pos-service); hentikan setelah dipakai.
5. **Dua bahasa: Indonesia (`/`, bawaan) & Inggris (`/en`).** Semua teks di kamus `src/content/id.ts` dan
   `src/content/en.ts` (bentuk wajib sama — TypeScript menolak bila beda); data bersama (kontak, nama PT) di
   `src/content/site.ts`. Komponen tidak berisi copy dan menerima teks lewat prop `t`. Nama produk & tagline
   produk tetap bahasa Indonesia di semua bahasa (keputusan pemilik). **Jangan menulis harga jasa**:
   keputusan pemilik "gratis konsultasi, harga sesuai kebutuhan". Fakta produk harus sesuai situs produknya
   (kasir.sissi.id, booth.sissi.id, lokatech.id) — jangan mengarang angka, klien, atau testimoni.
6. **Token desain di `src/app/globals.css` (`@theme`)** — jangan hex mentah di komponen. Warna di `src/lib/og.ts`
   harus sama dengan `@theme`.
7. **Anti "AI slop":** tanpa gradien ungu, ikon dalam lingkaran berderet, kartu kaca, statistik karangan, atau
   UI tiruan. Visual produk = tangkapan layar asli (`public/products/`). Hero = kolase: foto orang tanpa latar (`public/hero/orang-buku.webp`)
   di depan panel abu, potongan UI asli Sissi Kasir di belakang & di depan, label produk (gaya pilihan pemilik).
   Hapus latar foto: `scripts/hapus-latar-*.{swift,py}` (lihat komentar di dalamnya); wajib tanpa halo di tepi. Oranye merek hanya aksen.
8. **Dialog/dropdown/menu bukan bawaan sistem** (pilihan di formulir = chip). Catatan/artefak proyek **hanya lokal**.
9. **Halaman statis:** `cacheComponents` aktif → jangan `new Date()`/data dinamis saat prerender (tahun di
   `site.year`).

## 1. Stack

Next.js 16 (App Router) · React 19 · Tailwind CSS 4 · TypeScript · lucide-react · `next/font/google`
(Plus Jakarta Sans, JetBrains Mono). Jangan tambah pustaka UI tanpa alasan kuat.

## 2. Struktur

- `src/app/` — dua root layout per bahasa: `(id)/layout.tsx` + `(id)/page.tsx` (`/`) dan `(en)/layout.tsx` +
  `(en)/en/page.tsx` (`/en`), masing-masing dengan `opengraph-image.tsx`. Bersama: `globals.css` (token),
  `global-not-found.tsx` (404 dwibahasa; `experimental.globalNotFound`), `icon.svg`, `robots.ts`, `sitemap.ts`
  (hreflang). Bahasa baru = kamus baru + root layout baru + tambah di `src/content/locales.ts`.
- `src/content/` — `id.ts`, `en.ts` (kamus), `site.ts` (data bersama), `locales.ts` (daftar bahasa, alamat, aman
  untuk client), `types.ts`, `index.ts` (`getDictionary`).
- `src/components/HomePage.tsx` — beranda satu bahasa (urutan section + JSON-LD); `layout/RootDocument.tsx` (fon,
  `<html lang>`), `layout/LanguageSwitch.tsx` (ID/EN di header).
- `src/components/shared/` — `Container`, `SectionHeader`, `ButtonLink`, `Logo`, `ScreenFrame`, `cn`.
- `src/components/layout/` — `Navbar` (client: menu HP), `Footer`.
- `src/components/sections/` — satu berkas per section, teks lewat prop `t`. Client component hanya `Navbar`,
  `Faq`, `Contact`.
- `src/lib/seo.ts` — `siteUrl` (env `NEXT_PUBLIC_SITE_URL`, bawaan https://sissi.id), `contentUpdated`
  (**ubah saat isi berubah**), `homeMetadata(locale)` (canonical + hreflang + Open Graph per bahasa),
  `homeJsonLd(locale)` (Organization/WebSite/WebPage/FAQPage). `src/lib/og-image.tsx` — gambar OG per bahasa.
- `public/brand/` — logo (salinan `../assets`); `public/products/` — tangkapan layar asli aplikasi & situs.
- Formulir kontak **tanpa server**: menyusun pesan lalu membuka `wa.me` atau `mailto:`.

## 3. Perintah

```bash
npm run dev                          # http://localhost:3100
scripts/exclusive.sh npm run lint
scripts/exclusive.sh npm run build
```

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
