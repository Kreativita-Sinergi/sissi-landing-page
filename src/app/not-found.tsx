import { notFound as copy } from "@/constants/content";
import { ButtonLink } from "@/components/shared/ButtonLink";
import { Logo } from "@/components/shared/Logo";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-4 text-center">
      <Logo className="h-8 w-auto" />
      <h1 className="text-3xl font-bold tracking-[-0.02em]">{copy.title}</h1>
      <p className="max-w-sm text-muted">{copy.body}</p>
      <ButtonLink href="/">{copy.cta}</ButtonLink>
    </main>
  );
}
