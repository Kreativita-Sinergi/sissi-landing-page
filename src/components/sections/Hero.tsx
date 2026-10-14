import Image from "next/image";
import { ArrowRight } from "lucide-react";
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
    <section className="border-b border-line">
      <Container className="pt-14 pb-16 sm:pt-20 lg:pt-24 lg:pb-20">
        <div className="animate-rise">
          <p className="text-sm font-semibold text-brand-deep">{hero.eyebrow}</p>
          <h1 className="mt-5 max-w-4xl text-[2.75rem] leading-[1.02] font-extrabold tracking-[-0.04em] text-balance sm:text-6xl lg:text-[5.25rem]">
            {hero.title}
          </h1>
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted sm:text-[1.375rem] sm:leading-[1.55]">
              {hero.lead}
            </p>
            <div className="lg:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row">
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
          </div>
        </div>

        <div className="mt-16 animate-rise [animation-delay:150ms] sm:mt-20">
          <p className="border-b border-line pb-3 text-sm font-semibold text-muted">{hero.worksLabel}</p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4 lg:gap-x-6">
            {hero.works.map((w, i) => {
              const isApp = w.tone === "sand" || w.tone === "yellow";
              return (
                <li key={w.name}>
                  <a href={w.href} className="group block">
                    <div className={cn("relative aspect-[4/3] overflow-hidden rounded-xl", tones[w.tone])}>
                      <Image
                        src={w.image}
                        alt=""
                        width={w.width}
                        height={w.height}
                        priority={i < 2}
                        sizes="(min-width: 1024px) 270px, 45vw"
                        className={cn(
                          "absolute transition-transform duration-500 group-hover:scale-[1.03]",
                          isApp
                            ? "top-[14%] left-[10%] w-[115%] max-w-none rounded-md shadow-[0_12px_30px_-12px_rgba(31,35,38,0.45)]"
                            : "inset-0 h-full w-full object-cover object-left-top",
                        )}
                      />
                    </div>
                    <p
                      className={cn(
                        "mt-4 text-xs font-semibold",
                        w.kind === "Proyek klien" ? "text-brand-deep" : "text-faint",
                      )}
                    >
                      {w.kind}
                    </p>
                    <p className="mt-1 text-[17px] font-bold tracking-[-0.01em] group-hover:underline group-hover:decoration-brand group-hover:decoration-2 group-hover:underline-offset-4">
                      {w.name}
                    </p>
                    <p className="mt-1 text-sm leading-snug text-muted">{w.line}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
