import { ArrowUp } from "lucide-react";
import { footer, site } from "@/constants/content";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

export function Footer() {
  return (
    <footer className="bg-ink text-on-dark">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light className="h-7 w-auto" />
          <p className="mt-5 font-semibold">{site.company}</p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-on-dark-muted">{footer.tagline}</p>
        </div>

        {footer.columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs tracking-[0.14em] text-on-dark-muted uppercase">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => {
                const external = l.href.startsWith("http");
                return (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-on-dark transition-colors hover:text-brand"
                    >
                      {l.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div>
          <p className="font-mono text-xs tracking-[0.14em] text-on-dark-muted uppercase">{footer.contactTitle}</p>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={site.mailUrl} className="break-all transition-colors hover:text-brand">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand">
                {site.phoneDisplay}
              </a>
            </li>
            <li className="text-on-dark-muted">
              {site.city}, {site.region}
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs text-on-dark-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {site.year} {site.company}. {footer.rights}
        </p>
        <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-on-dark">
          {footer.backToTop}
          <ArrowUp className="size-3.5" />
        </a>
      </Container>
    </footer>
  );
}
