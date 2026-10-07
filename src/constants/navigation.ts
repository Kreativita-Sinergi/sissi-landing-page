export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    description: string;
    href: string;
    icon: string;
  }[];
}

export const NAV_LINKS: NavItem[] = [
  { label: "Fitur", href: "/fitur" },
  {
    label: "Untuk usaha",
    href: "/#untuk-usaha",
    children: [
      {
        label: "Kuliner",
        description: "Cocok untuk restoran, rumah makan, kafe, kedai kopi, katering",
        href: "/untuk-usaha/kuliner",
        icon: "utensils",
      },
      {
        label: "Ritel",
        description: "Cocok untuk minimarket, toko kelontong, fashion, apotek, konter pulsa",
        href: "/untuk-usaha/ritel",
        icon: "shopping-basket",
      },
      {
        label: "Jasa",
        description: "Cocok untuk bengkel, servis HP, laundry, salon, barbershop, percetakan",
        href: "/untuk-usaha/jasa",
        icon: "wrench",
      },
      {
        label: "Penyewaan",
        description: "Cocok untuk lapangan padel, futsal, badminton, biliar, rental PlayStation",
        href: "/untuk-usaha/penyewaan",
        icon: "calendar-clock",
      },
    ],
  },
  { label: "Harga", href: "/harga" },
  { label: "Panduan", href: "/panduan" },
  { label: "Kontak", href: "/tentang" },
];

export const FOOTER_SECTIONS = [
  {
    title: "Produk",
    links: [
      { label: "Fitur", href: "/fitur" },
      { label: "Harga", href: "/harga" },
      { label: "Unduh aplikasi", href: "/download" },
      { label: "Cara kerja", href: "/#cara-kerja" },
    ],
  },
  {
    title: "Untuk usaha",
    links: [
      { label: "Kuliner", href: "/untuk-usaha/kuliner" },
      { label: "Ritel", href: "/untuk-usaha/ritel" },
      { label: "Jasa", href: "/untuk-usaha/jasa" },
      { label: "Penyewaan", href: "/untuk-usaha/penyewaan" },
    ],
  },
  {
    title: "Bantuan",
    links: [
      { label: "Panduan", href: "/panduan" },
      { label: "FAQ", href: "/faq" },
      { label: "Kontak", href: "/tentang" },
      { label: "Hapus akun", href: "/hapus-akun" },
    ],
  },
  {
    title: "Lainnya",
    links: [
      { label: "Tentang kami", href: "/tentang" },
      { label: "Blog", href: "/blog" },
      { label: "Syarat & ketentuan", href: "/syarat-ketentuan" },
      { label: "Kebijakan privasi", href: "/kebijakan-privasi" },
    ],
  },
];
