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

        {/* Orang (latar dihapus) di depan panel oranye + tangkapan layar asli produk yang melayang. */}
        <div className="relative mx-auto aspect-[1/1.02] w-full max-w-[360px] animate-rise [animation-delay:150ms] sm:max-w-[480px] lg:mr-0">
          <div aria-hidden className="absolute inset-x-[6%] top-[40%] bottom-0 rounded-[36px] bg-brand" />
          <Image
            src={hero.person.src}
            alt={hero.person.alt}
            width={hero.person.width}
            height={hero.person.height}
            priority
            sizes="(min-width: 1024px) 420px, 80vw"
            className="absolute bottom-0 left-1/2 w-[62%] -translate-x-[50%]"
          />

          <Float className="top-[20%] -left-[4%] w-[42%] sm:-left-[8%]" img={hero.floats[0]} />
          <Float className="top-[50%] -right-[2%] w-[22%] sm:-right-[4%]" img={hero.floats[1]} rounded="rounded-[14px]" />
          <Float className="bottom-[7%] -left-[2%] w-[40%] sm:-left-[8%]" img={hero.floats[2]} />
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

type FloatImg = { src: string; alt: string; width: number; height: number };

/** Kartu tangkapan layar yang melayang di hero. */
function Float({ img, className, rounded = "rounded-xl" }: { img: FloatImg; className: string; rounded?: string }) {
  return (
    <div
      className={cn(
        "absolute overflow-hidden border-4 border-surface bg-surface shadow-[0_24px_50px_-18px_rgba(31,35,38,0.45)]",
        rounded,
        className,
      )}
    >
      <Image src={img.src} alt={img.alt} width={img.width} height={img.height} sizes="220px" className="block h-auto w-full" />
    </div>
  );
}
