import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/content";
import type { WorkTone } from "@/content/types";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { cn } from "@/components/shared/cn";

const tones: Record<WorkTone, string> = {
  sand: "bg-sand",
  yellow: "bg-booth-yellow",
  loka: "bg-loka-bg",
  dark: "bg-ink",
};

export function Hero({ t }: { t: Dictionary["hero"] }) {
  return (
    <section className="overflow-hidden border-b border-line">
      <Container className="grid items-center gap-14 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.45fr_1fr] lg:gap-16 xl:gap-20 lg:pt-16 lg:pb-20">
        <div className="animate-rise">
          <p className="text-sm font-semibold text-brand-deep">{t.eyebrow}</p>
          <h1 className="mt-4 text-[1.8rem] leading-[1.12] font-extrabold tracking-[-0.04em] text-balance sm:text-[2.6rem] lg:text-[2.75rem] xl:text-[3.1rem]">
            {t.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">{t.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={t.primary.href}>
              {t.primary.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={t.secondary.href} variant="outline">
              {t.secondary.label}
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm text-faint">{t.note}</p>
        </div>

        {/* Gaya kolase: orang tanpa latar, potongan UI asli di belakang & di depan, label produk. */}
        <div className="relative mx-auto aspect-[1/1.05] w-full max-w-[380px] animate-rise [animation-delay:150ms] sm:max-w-[480px] lg:mr-0">
          <Backdrop />

          {/* Di belakang orang */}
          <UiCard img={t.ui.chart} className="top-[40%] -left-[3%] w-[52%]" />
          <UiCard img={t.ui.order} className="top-[34%] -right-[3%] w-[34%]" />

          <Image
            src={t.person.src}
            alt={t.person.alt}
            width={t.person.width}
            height={t.person.height}
            priority
            sizes="(min-width: 1024px) 380px, 70vw"
            className="absolute bottom-[2%] left-1/2 z-10 w-[64%] -translate-x-[46%]"
          />

          {/* Di depan orang */}
          <div className="absolute -bottom-[5%] left-[1%] z-20 flex w-[50%] gap-[4%]">
            {t.ui.menu.map((m) => (
              <UiCard key={m.src} img={m} className="relative w-1/3" sizes="90px" />
            ))}
          </div>

          <div className="absolute top-[6%] right-0 z-20 flex items-center gap-2.5 rounded-2xl bg-surface py-2.5 pr-4 pl-2.5 shadow-[0_14px_30px_-16px_rgba(31,35,38,0.45)]">
            <Image src="/brand/sissi-mark.svg" alt="" width={32} height={32} className="size-8" />
            <span>
              <span className="block text-sm leading-tight font-bold">{t.badge.name}</span>
              <span className="block text-[11px] leading-tight text-muted">{t.badge.line}</span>
            </span>
          </div>
        </div>
      </Container>

      <Container className="pb-16 lg:pb-20">
        <p className="border-b border-line pb-3 text-sm font-semibold text-muted">{t.worksLabel}</p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
          {t.works.map((w) => {
            const isApp = w.tone === "sand" || w.tone === "yellow";
            return (
              <li key={w.name}>
                <a href={w.href} className="group block">
                  <div className={cn("relative aspect-[16/10] overflow-hidden rounded-xl", tones[w.tone])}>
                    <Image
                      src={w.image}
                      alt=""
                      width={w.width}
                      height={w.height}
                      sizes="(min-width: 1024px) 270px, 45vw"
                      className={cn(
                        "absolute transition-transform duration-500 group-hover:scale-[1.03]",
                        isApp
                          ? "top-[14%] left-[10%] w-[115%] max-w-none rounded-md shadow-[0_12px_30px_-12px_rgba(31,35,38,0.45)]"
                          : "inset-0 h-full w-full object-cover object-left-top",
                      )}
                    />
                  </div>
                  <p className={cn("mt-3 text-xs font-semibold", w.client ? "text-brand-deep" : "text-faint")}>
                    {w.kind}
                  </p>
                  <p className="mt-0.5 text-base font-bold tracking-[-0.01em] group-hover:underline group-hover:decoration-brand group-hover:decoration-2 group-hover:underline-offset-4">
                    {w.name}
                  </p>
                  <p className="mt-0.5 text-[13px] leading-snug text-muted">{w.line}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

type UiImg = { src: string; alt: string; width: number; height: number };

/** Potongan UI asli dalam kartu putih bertepi tipis. */
function UiCard({ img, className, sizes = "260px" }: { img: UiImg; className: string; sizes?: string }) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden rounded-xl border border-line bg-surface shadow-[0_20px_40px_-20px_rgba(31,35,38,0.35)]",
        className,
      )}
    >
      <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes={sizes} className="block h-auto w-full" />
    </div>
  );
}

/**
 * Panel di belakang orang: sisi kiri miring + sudut membulat, gradasi oranye pastel yang halus (pilihan pemilik).
 * Pastel cukup terang sehingga sweater oranye pekat tetap menonjol.
 */
const PANEL = "M152 0 H440 Q480 0 480 40 V300 Q480 340 440 340 H44 Q0 340 13 302 L103 38 Q116 0 152 0 Z";

function Backdrop() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 480 340"
      preserveAspectRatio="none"
      className="absolute top-[28%] right-[1%] bottom-[2%] left-[-2%] h-[70%] w-[101%]"
    >
      <defs>
        <linearGradient id="hero-panel" x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0" style={{ stopColor: "var(--color-panel-light)" }} />
          <stop offset="0.55" style={{ stopColor: "var(--color-panel)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-panel-deep)" }} />
        </linearGradient>
        <radialGradient id="hero-glow" cx="0.6" cy="0.1" r="0.6">
          <stop offset="0" style={{ stopColor: "#ffffff", stopOpacity: 0.55 }} />
          <stop offset="1" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
        </radialGradient>
      </defs>
      <path d={PANEL} fill="url(#hero-panel)" />
      <path d={PANEL} fill="url(#hero-glow)" />
    </svg>
  );
}
