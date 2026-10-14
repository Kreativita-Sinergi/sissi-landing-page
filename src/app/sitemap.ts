import type { MetadataRoute } from "next";
import { homePath, locales } from "@/content/locales";
import { contentUpdated, siteUrl } from "@/lib/seo";

/** /sitemap.xml — satu entri per bahasa, masing-masing dengan alternatif hreflang. */
export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(locales.map((l) => [l, `${siteUrl}${homePath(l) === "/" ? "" : homePath(l)}`]));
  return locales.map((l) => ({
    url: languages[l] || siteUrl,
    lastModified: contentUpdated,
    changeFrequency: "monthly" as const,
    priority: l === "id" ? 1 : 0.9,
    alternates: { languages },
  }));
}
