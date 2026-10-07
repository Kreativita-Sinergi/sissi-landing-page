import React from "react";
import { Container } from "./Container";

export type SectionBackground = "white" | "muted" | "orange" | "dark";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  bg?: SectionBackground;
  children: React.ReactNode;
  containerSize?: "default" | "narrow" | "wide";
  className?: string;
}

export function SectionWrapper({
  id,
  bg = "white",
  children,
  containerSize = "default",
  className = "",
  ...props
}: SectionWrapperProps) {
  const bgStyles: Record<SectionBackground, string> = {
    white: "bg-white text-[#292e31]",
    muted: "bg-[#f3f6f5] text-[#292e31]",
    orange: "bg-[#f1702c] text-white",
    dark: "bg-[#0a1412] text-white",
  };

  return (
    <section
      id={id}
      className={`py-16 sm:py-24 lg:py-[120px] relative overflow-hidden ${bgStyles[bg]} ${className}`}
      {...props}
    >
      <Container size={containerSize}>{children}</Container>
    </section>
  );
}
