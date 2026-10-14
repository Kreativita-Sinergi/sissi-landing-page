import { cn } from "./cn";

type Variant = "primary" | "dark" | "outline" | "outline-dark";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-ink hover:bg-brand-hover active:bg-brand-press",
  dark: "bg-ink text-on-dark hover:bg-charcoal",
  outline: "border border-line-strong bg-surface text-ink hover:border-ink",
  "outline-dark": "border border-white/20 text-on-dark hover:border-white/60",
};

type Props = React.AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant; external?: boolean };

/** Tautan bergaya tombol. `external` membuka tab baru dengan rel aman. */
export function ButtonLink({ variant = "primary", external = false, className, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-semibold transition-colors duration-150",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}
