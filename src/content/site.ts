// Data yang sama di semua bahasa: identitas perusahaan & kontak.
const phoneE164 = "6285161462806";
const email = "sissikreatifteknologi@gmail.com";

export const site = {
  company: "PT. Sissi Kreatif Teknologi",
  brand: "Sissi",
  domain: "sissi.id",
  city: "Pekanbaru",
  region: "Riau",
  email,
  phoneDisplay: "+62 851-6146-2806",
  phoneE164,
  whatsappUrl: `https://wa.me/${phoneE164}`,
  mailUrl: `mailto:${email}`,
  year: 2026,
} as const;
