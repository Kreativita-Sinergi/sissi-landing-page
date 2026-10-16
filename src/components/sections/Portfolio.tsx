import { ArrowUpRight } from "lucide-react";
import type { Dictionary } from "@/content";
import { Container } from "@/components/shared/Container";
import { ScreenFrame } from "@/components/shared/ScreenFrame";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { cn } from "@/components/shared/cn";

export function Portfolio({ t }: { t: Dictionary["portfolio"] }) {
  return (
    <section id="portofolio" className="py-20 sm:py-28">
      <Container>
        <SectionHeader eyebrow={t.eyebrow} title={t.title} body={t.body} />

        <ul className="mt-12 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <li key={item.href} className={cn(item.featured && "md:col-span-2 lg:col-span-3")}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn("group block", item.featured && "grid items-center gap-8 md:grid-cols-[1.5fr_1fr] md:gap-12")}
              >
                <ScreenFrame
                  kind="browser"
                  url={item.domain}
                  src={item.image}
                  alt={`${t.imageAlt} ${item.name}`}
                  width={1440}
                  height={900}
                  sizes={item.featured ? "(min-width: 768px) 640px, 92vw" : "(min-width: 1024px) 360px, (min-width: 768px) 540px, 92vw"}
                  className="transition-transform duration-300 group-hover:-translate-y-1"
                />
                <div className={cn(!item.featured && "mt-5")}>
                  <p
                    className={cn(
                      "inline-block rounded-full px-2.5 py-1 text-xs font-semibold",
                      item.client ? "bg-ink text-on-dark" : "bg-sand text-muted",
                    )}
                  >
                    {item.kind}
                  </p>
                  <h3 className={cn("mt-3 font-bold tracking-[-0.015em]", item.featured ? "text-2xl sm:text-3xl" : "text-lg")}>
                    {item.name}
                  </h3>
                  <p className={cn("mt-2 leading-relaxed text-muted", item.featured ? "text-base sm:text-lg" : "text-[15px]")}>
                    {item.summary}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-brand-deep">
                    {t.visit} {item.domain}
                    <ArrowUpRight className="size-4" />
                  </p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
