import { ArrowUp } from "lucide-react";
import { site, type Dictionary } from "@/content";
import { Container } from "@/components/shared/Container";
import { Logo } from "@/components/shared/Logo";

/** `home` = alamat beranda bila footer dipakai di luar beranda, agar tautan "#section" tetap menuju beranda. */
export function Footer({ t, home = "" }: { t: Dictionary["footer"]; home?: string }) {
  return (
    <footer className="bg-ink text-on-dark">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
        <div>
          <Logo light className="h-7 w-auto" />
          <p className="mt-5 font-semibold">{site.company}</p>
          <p className="mt-1 max-w-xs text-sm leading-relaxed text-on-dark-muted">{t.tagline}</p>
        </div>

        {t.columns.map((col) => (
          <div key={col.title}>
            <p className="font-mono text-xs tracking-[0.14em] text-on-dark-muted uppercase">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => {
                const external = l.href.startsWith("http");
                const href = l.href.startsWith("#") ? `${home}${l.href}` : l.href;
                return (
                  <li key={l.href}>
                    <a
                      href={href}
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
          <p className="font-mono text-xs tracking-[0.14em] text-on-dark-muted uppercase">{t.contactTitle}</p>
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
          © {site.year} {site.company}. {t.rights}
        </p>
        <div className="flex items-center gap-6">
          <a href={t.privacy.href} className="transition-colors hover:text-on-dark">
            {t.privacy.label}
          </a>
          <a href="#" className="inline-flex items-center gap-1.5 transition-colors hover:text-on-dark">
            {t.backToTop}
            <ArrowUp className="size-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
