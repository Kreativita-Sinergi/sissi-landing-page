import { ImageResponse } from "next/og";
import { getDictionary, site, type Locale } from "@/content";
import { brand, ogFonts, publicImage } from "@/lib/og";

export const ogSize = { width: 1200, height: 630 };

/** Pratinjau tautan (WhatsApp, Instagram, Google) 1200×630 untuk satu bahasa. */
export async function renderOgImage(locale: Locale) {
  "use cache"; // render sekali saat build (cacheComponents)
  const t = getDictionary(locale).hero;
  const logo = await publicImage("/brand/sissi-logo.svg", "image/svg+xml");
  const res = new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: brand.paper,
          fontFamily: "Jakarta",
          color: brand.ink,
          padding: "64px 72px",
          borderBottom: `14px solid ${brand.orange}`,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse (Satori) hanya mengenal <img>. */}
        <img src={logo} width={186} height={60} alt="" />
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div style={{ display: "flex", fontSize: 84, fontWeight: 800, lineHeight: 1.04, letterSpacing: -3 }}>{t.title}</div>
          <div style={{ display: "flex", fontSize: 30, fontWeight: 500, lineHeight: 1.45, color: brand.muted, maxWidth: 980 }}>
            {t.lead}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, fontWeight: 500, color: brand.muted }}>
          <span>{site.company}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    ),
    { ...ogSize, fonts: await ogFonts() },
  );
  return new Uint8Array(await res.arrayBuffer());
}
