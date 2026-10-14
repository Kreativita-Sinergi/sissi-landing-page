import { ArrowUpRight, Check } from "lucide-react";
import { products, type Product } from "@/constants/content";
import { Container } from "@/components/shared/Container";
import { ScreenFrame } from "@/components/shared/ScreenFrame";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/components/shared/cn";

function Visual({ visual, name }: { visual: Product["visual"]; name: string }) {
  if (visual.kind === "screen") {
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
  // Loka belum punya tangkapan layar aplikasi di repo ini → panel tipografi, bukan UI karangan.
  return (
    <div className="flex aspect-[16/11] flex-col justify-between rounded-2xl bg-loka-bg p-7 text-loka-fg sm:p-10">
      <p className="font-mono text-[11px] tracking-[0.16em] text-loka-accent uppercase">{name}</p>
      <p className="max-w-sm text-2xl leading-snug font-semibold tracking-[-0.02em] sm:text-3xl">{visual.title}</p>
      <ul className="flex flex-wrap gap-2">
        {visual.modules.map((m) => (
          <li key={m} className="rounded-full border border-loka-accent/30 px-3 py-1 text-xs text-loka-soft">
            {m}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Products() {
  return (
    <section id="produk" className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={products.eyebrow} title={products.title} body={products.body} />

        <div className="mt-14 space-y-20 sm:mt-20 sm:space-y-28">
          {products.items.map((p, i) => (
            <article key={p.id} className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
              <div className={cn(i % 2 === 1 && "lg:order-2")}>
                <Visual visual={p.visual} name={p.name} />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-[-0.02em]">{p.name}</h3>
                  <span className="rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-deep">{p.badge}</span>
                </div>
                <p className="mt-1 font-mono text-xs text-faint">{p.domain}</p>
                <p className="mt-5 text-xl leading-snug font-semibold tracking-[-0.015em] text-ink sm:text-2xl">{p.tagline}</p>
                <p className="mt-3 leading-relaxed text-pretty text-muted">{p.body}</p>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-[15px] leading-snug">
                      <Check className="mt-0.5 size-4 shrink-0 text-brand" strokeWidth={2.5} />
                      {pt}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-line pt-4 text-sm text-muted">{p.audience}</p>
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
