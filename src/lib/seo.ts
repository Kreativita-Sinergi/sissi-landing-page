/**
 * Bahan SEO: alamat situs, metadata per bahasa (hreflang), dan data terstruktur (JSON-LD schema.org).
 * Semua statis (tanpa `new Date()`) karena halaman diprerender.
 */
import type { Metadata } from "next";
import { getDictionary, homePath, locales, ogLocale, site, type Locale } from "@/content";

export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://sissi.id").replace(/\/+$/, "");

/** Tanggal terakhir isi diperbarui (sitemap). Ubah saat teks berubah. */
export const contentUpdated = "2026-10-30";

/** Peta hreflang → alamat; x-default = bahasa bawaan. */
export const languageAlternates = {
  ...Object.fromEntries(locales.map((l) => [l, homePath(l)])),
  "x-default": "/",
};

export function homeMetadata(locale: Locale): Metadata {
  const t = getDictionary(locale).meta;
  return {
    metadataBase: new URL(siteUrl),
    title: t.title,
    description: t.description,
    applicationName: site.brand,
    keywords: t.keywords,
    authors: [{ name: site.company }],
    alternates: { canonical: homePath(locale), languages: languageAlternates },
    openGraph: {
      type: "website",
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      url: homePath(locale),
      siteName: site.brand,
      title: t.title,
      description: t.description,
    },
    twitter: { card: "summary_large_image", title: t.title, description: t.description },
  };
}

export function homeJsonLd(locale: Locale) {
  const t = getDictionary(locale);
  const url = `${siteUrl}${homePath(locale) === "/" ? "" : homePath(locale)}`;
  return {
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
        address: { "@type": "PostalAddress", addressLocality: site.city, addressRegion: site.region, addressCountry: "ID" },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: `+${site.phoneE164}`,
          email: site.email,
          contactType: "sales",
          availableLanguage: ["Indonesian", "English"],
        },
        sameAs: t.products.items.map((p) => p.href),
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#situs`,
        url: siteUrl,
        name: site.brand,
        inLanguage: ["id-ID", "en"],
        publisher: { "@id": `${siteUrl}/#organisasi` },
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#halaman`,
        url,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: locale === "id" ? "id-ID" : "en",
        isPartOf: { "@id": `${siteUrl}/#situs` },
        about: { "@id": `${siteUrl}/#organisasi` },
      },
      {
        "@type": "FAQPage",
        inLanguage: locale === "id" ? "id-ID" : "en",
        mainEntity: t.faq.items.map((i) => ({ "@type": "Question", name: i.q, acceptedAnswer: { "@type": "Answer", text: i.a } })),
      },
    ],
  };
}
