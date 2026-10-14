import { ArrowRight, ArrowUpRight } from "lucide-react";
import { hero, trust } from "@/constants/content";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Container } from "@/components/shared/Container";
import { ScreenFrame } from "@/components/shared/ScreenFrame";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="grid items-center gap-14 pt-12 pb-16 sm:pt-16 lg:grid-cols-[1.12fr_1fr] lg:gap-12 lg:pt-20 lg:pb-24">
        <div className="animate-rise">
          <p className="font-mono text-xs font-medium tracking-[0.14em] text-brand-deep uppercase">{hero.eyebrow}</p>
          <h1 className="mt-5 text-[2.5rem] leading-[1.05] font-extrabold tracking-[-0.035em] text-balance sm:text-[3.4rem] xl:text-[3.75rem]">
            {hero.titleLead} <span className="text-brand">{hero.titleAccent}</span> {hero.titleTail}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-pretty text-muted sm:text-lg">{hero.body}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={hero.primary.href}>
              {hero.primary.label}
              <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={hero.secondary.href} variant="outline">
              {hero.secondary.label}
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-faint">{hero.note}</p>
        </div>

        <div className="relative mx-auto w-full max-w-xl animate-rise [animation-delay:120ms] lg:max-w-none">
          <ScreenFrame
            src={hero.shotTablet.src}
            alt={hero.shotTablet.alt}
            width={1280}
            height={800}
            priority
            sizes="(min-width: 1024px) 560px, 92vw"
            className="mr-10 sm:mr-16"
          />
          <ScreenFrame
            src={hero.shotPhone.src}
            alt={hero.shotPhone.alt}
            width={390}
            height={844}
            kind="phone"
            priority
            sizes="160px"
            className="absolute right-0 -bottom-8 w-[30%] max-w-[170px] ring-8 ring-paper"
          />
          <p className="mt-4 font-mono text-[11px] text-faint">{hero.shotCaption}</p>
        </div>
      </Container>

      <div className="border-y border-line bg-surface">
        <Container className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-8">
          <p className="flex shrink-0 items-center gap-2 font-mono text-[11px] tracking-[0.14em] text-faint uppercase">
            <span aria-hidden className="relative flex size-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand/60" />
              <span className="relative size-2 rounded-full bg-brand" />
            </span>
            {trust.label}
          </p>
          <ul className="flex flex-wrap gap-x-7 gap-y-2">
            {trust.items.map((t) => (
              <li key={t.href}>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-baseline gap-2 text-[15px] font-semibold text-ink"
                >
                  {t.name}
                  <span className="font-mono text-xs font-normal text-faint group-hover:text-brand-deep">{t.domain}</span>
                  <ArrowUpRight className="size-3.5 self-center text-faint group-hover:text-brand-deep" />
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}
