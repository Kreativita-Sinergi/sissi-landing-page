import { homePath, localeLabel, localeName, locales, type Locale } from "@/content/locales";
import { cn } from "@/components/shared/cn";

/** Pilihan bahasa: tautan biasa ke beranda versi bahasa lain (halaman statis per bahasa). */
export function LanguageSwitch({ current, label, className }: { current: Locale; label: string; className?: string }) {
  return (
    <nav aria-label={label} className={cn("flex items-center rounded-full border border-line-strong p-0.5", className)}>
      {locales.map((l) => {
        const active = l === current;
        return (
          <a
            key={l}
            href={homePath(l)}
            hrefLang={l}
            lang={l}
            title={localeName[l]}
            aria-current={active ? "true" : undefined}
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-semibold transition-colors",
              active ? "bg-ink text-on-dark" : "text-muted hover:text-ink",
            )}
          >
            {localeLabel[l]}
          </a>
        );
      })}
    </nav>
  );
}
