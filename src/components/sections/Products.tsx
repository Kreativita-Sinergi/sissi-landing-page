import { ArrowUpRight } from "lucide-react";
import type { Dictionary, Product } from "@/content";
import { Container } from "@/components/shared/Container";
import { ScreenFrame } from "@/components/shared/ScreenFrame";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/components/shared/cn";

function Visual({ visual }: { visual: Product["visual"] }) {
  return (
    <div className={cn("rounded-2xl p-5 sm:p-8", visual.tone === "yellow" ? "bg-booth-yellow" : "bg-sand")}>
      <ScreenFrame
        src={visual.src}
        alt={visual.alt}
        width={visual.width}
        height={visual.height}
        sizes="(min-width: 1024px) 560px, 92vw"
      />
    </div>
  );
}

export function Products({ t }: { t: Dictionary["products"] }) {
  return (
    <section id="produk" className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} body={t.body} />
        {t.languageNote ? <p className="mt-4 inline-block rounded-full bg-sand px-3 py-1.5 text-sm text-muted">{t.languageNote}</p> : null}

        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {t.items.map((p, i) => (
            <article key={p.id} id={`produk-${p.id}`} className="scroll-mt-24 grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <Visual visual={p.visual} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-[-0.02em]">{p.name}</h3>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">{p.badge}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-faint">{p.domain}</p>
                <p className="mt-5 text-xl leading-snug font-semibold tracking-[-0.015em] text-ink sm:text-2xl">{p.tagline}</p>
                <p className="mt-3 leading-relaxed text-pretty text-muted">{p.body}</p>
                <ul className="mt-6 grid border-t border-line sm:grid-cols-2 sm:gap-x-6">
                  {p.points.map((pt) => (
                    <li key={pt} className="border-b border-line py-2.5 text-[15px] leading-snug">
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-muted">{p.audience}</p>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex items-center gap-1.5 font-semibold text-ink underline decoration-line-strong decoration-2 underline-offset-[6px] transition-colors hover:decoration-brand"
                >
                  {p.cta}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
