import type { MetadataRoute } from "next";
import { contentUpdated, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: siteUrl, lastModified: contentUpdated, changeFrequency: "monthly", priority: 1 }];
}
