import { cn } from "./cn";

type Props = {
  eyebrow: string;
  title: string;
  body?: string;
  dark?: boolean;
  className?: string;
};

/** Judul section: label pendek, judul besar, paragraf opsional. */
export function SectionHeader({ eyebrow, title, body, dark = false, className }: Props) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("text-sm font-semibold", dark ? "text-brand" : "text-brand-deep")}>{eyebrow}</p>
      <h2
        className={cn(
          "mt-3 text-3xl leading-[1.1] font-extrabold tracking-[-0.03em] text-balance sm:text-[2.6rem]",
          dark ? "text-on-dark" : "text-ink",
        )}
      >
        {title}
      </h2>
      {body ? (
        <p className={cn("mt-4 max-w-2xl text-base leading-relaxed text-pretty sm:text-lg", dark ? "text-on-dark-muted" : "text-muted")}>
          {body}
        </p>
      ) : null}
    </div>
  );
}
