import React from "react";
import Link from "next/link";

export type ButtonVariant = "primary" | "secondary" | "outline" | "white" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles: Record<ButtonSize, string> = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
  };

  const variantStyles: Record<ButtonVariant, string> = {
    primary:
      "bg-[#f1702c] hover:bg-[#ff7a45] text-white shadow-sm hover:shadow focus:ring-[#f1702c]",
    secondary:
      "bg-[#292e31] hover:bg-[#1a1e20] text-white shadow-sm focus:ring-[#292e31]",
    white:
      "bg-white hover:bg-[#fef1eb] text-[#292e31] shadow-sm hover:shadow focus:ring-white",
    outline:
      "border border-[#e4e9e7] hover:border-[#b0b8b5] bg-white text-[#292e31] hover:bg-[#f3f6f5] focus:ring-[#f1702c]",
    ghost:
      "text-current hover:bg-black/5 dark:hover:bg-white/10 focus:ring-current",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${
    fullWidth ? "w-full" : ""
  } ${className}`;

  const content = (
    <>
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
}
