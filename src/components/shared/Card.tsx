import React from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "flat" | "accent";
  children: React.ReactNode;
  className?: string;
}

export function Card({
  variant = "default",
  children,
  className = "",
  ...props
}: CardProps) {
  const variantStyles = {
    default:
      "bg-white border border-[#e4e9e7] rounded-2xl shadow-sm hover:shadow-md transition-all duration-200",
    elevated:
      "bg-white border border-[#e4e9e7] rounded-2xl shadow-md hover:shadow-lg transition-all duration-200",
    flat: "bg-[#f3f6f5] rounded-2xl border border-transparent hover:border-[#e4e9e7] transition-all duration-200",
    accent:
      "bg-white border-2 border-[#f1702c] rounded-2xl shadow-md transition-all duration-200",
  };

  return (
    <div
      className={`p-6 sm:p-8 flex flex-col ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
