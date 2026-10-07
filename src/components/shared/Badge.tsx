import React from "react";

export type BadgeVariant = "brand" | "neutral" | "accent" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({
  variant = "brand",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles: Record<BadgeVariant, string> = {
    brand: "bg-[#fef1eb] text-[#f1702c] border border-[#f1702c]/20",
    neutral: "bg-[#f3f6f5] text-[#525866] border border-[#e4e9e7]",
    accent: "bg-[#f1702c] text-white",
    outline: "bg-transparent text-[#7d8986] border border-[#b0b8b5]",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
}
