import type { MetadataRoute } from "next";
import { homePath, locales, privacyPath } from "@/content/locales";
import { contentUpdated, siteUrl } from "@/lib/seo";

/** /sitemap.xml — satu entri per halaman per bahasa, masing-masing dengan alternatif hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}${homePath(l) === "/" ? "" : homePath(l)}`]));
  const privacy = Object.fromEntries(locales.map((l) => [l, `${siteUrl}${privacyPath(l)}`]));
  return [
    ...locales.map((l) => ({
      url: languages[l] || siteUrl,
      lastModified: contentUpdated,
      changeFrequency: "monthly" as const,
      priority: l === "id" ? 1 : 0.9,
      alternates: { languages },
    })),
    ...locales.map((l) => ({
      url: privacy[l],
      lastModified: contentUpdated,
      changeFrequency: "yearly" as const,
      priority: 0.3,
      alternates: { languages: privacy },
    })),
  ];
}
