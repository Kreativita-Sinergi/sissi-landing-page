/**
 * Bahan SEO: alamat situs, tanggal konten, dan data terstruktur (JSON-LD schema.org).
 * Semua statis (tanpa `new Date()`) karena halaman diprerender.
 */
import { faq, products, site } from "@/constants/content";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sissi.id").replace(/\/+$/, "");

/** Tanggal terakhir isi diperbarui (sitemap). Ubah saat teks berubah. */
export const contentUpdated = "2026-10-14";

export const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organisasi`,
      name: site.company,
      alternateName: site.brand,
      url: siteUrl,
      logo: `${siteUrl}/brand/sissi-logo.svg`,
      email: site.email,
      telephone: `+${site.phoneE164}`,
      address: {
        "@type": "PostalAddress",
        addressLocality: site.city,
        addressRegion: site.region,
        addressCountry: "ID",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: `+${site.phoneE164}`,
        email: site.email,
        contactType: "sales",
        availableLanguage: "Indonesian",
      },
      sameAs: products.items.map((p) => p.href),
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#situs`,
      url: siteUrl,
      name: site.brand,
      inLanguage: "id-ID",
      publisher: { "@id": `${siteUrl}/#organisasi` },
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.items.map((i) => ({
        "@type": "Question",
        name: i.q,
        acceptedAnswer: { "@type": "Answer", text: i.a },
      })),
    },
  ],
};
