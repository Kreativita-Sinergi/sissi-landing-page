import Image from "next/image";
import { ArrowRight, MapPin, MessageCircle } from "lucide-react";
import { hero } from "@/constants/content";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { cn } from "@/components/shared/cn";

const tones = {
  sand: "bg-sand",
  yellow: "bg-booth-yellow",
  loka: "bg-loka-bg",
  dark: "bg-ink",
} as const;

export function Hero() {
  return (
    <section className="overflow-hidden border-b border-line">
      <Container className="grid items-center gap-14 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:pt-16 lg:pb-20">
        <div className="animate-rise">
          <p className="text-sm font-semibold text-brand-deep">{hero.eyebrow}</p>
          <h1 className="mt-4 text-[2.25rem] leading-[1.08] font-extrabold tracking-[-0.035em] text-balance sm:text-5xl xl:text-[3.25rem]">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">{hero.lead}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primary.href}>
              {hero.primary.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="outline">
              {hero.secondary.label}
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm text-faint">{hero.note}</p>
        </div>

        {/* Foto + bentuk dari simbol logo S di belakangnya. */}
        <div className="relative mx-auto w-full max-w-[340px] animate-rise sm:max-w-[400px] [animation-delay:150ms] lg:mr-0">
          <Image
            src="/brand/sissi-mark.svg"
            alt=""
            aria-hidden
            width={32}
            height={32}
            className="absolute top-1/2 left-1/2 w-[128%] max-w-none -translate-x-1/2 -translate-y-1/2"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-sand shadow-[0_30px_60px_-30px_rgba(31,35,38,0.5)]">
            <Image
              src={hero.photo.src}
              alt={hero.photo.alt}
              fill
              priority
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -left-4 flex max-w-[78%] items-start gap-3 rounded-2xl border border-line bg-surface p-4 shadow-[0_18px_40px_-20px_rgba(31,35,38,0.45)] sm:-left-10">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-brand text-on-brand">
              <MessageCircle className="size-4" />
            </span>
            <span>
              <span className="block text-sm font-bold">{hero.chipConsult.title}</span>
              <span className="mt-0.5 block text-[13px] leading-snug text-muted">{hero.chipConsult.body}</span>
            </span>
          </div>

          <div className="absolute top-5 -left-3 inline-flex items-center gap-1.5 rounded-full bg-ink px-3.5 py-2 text-xs font-semibold text-on-dark sm:-left-8">
            <MapPin className="size-3.5 text-brand" />
            {hero.chipPlace}
          </div>
        </div>
      </Container>

      <Container className="pb-16 lg:pb-20">
        <p className="border-b border-line pb-3 text-sm font-semibold text-muted">{hero.worksLabel}</p>
        <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
          {hero.works.map((w) => {
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
                  <p className={cn("mt-3 text-xs font-semibold", w.kind === "Proyek klien" ? "text-brand-deep" : "text-faint")}>
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
