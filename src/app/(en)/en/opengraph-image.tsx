import { getDictionary } from "@/content";
import { ogSize, renderOgImage } from "@/lib/og-image";

export const alt = getDictionary("en").meta.ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new Response(await renderOgImage("en"), { headers: { "Content-Type": contentType } });
}
