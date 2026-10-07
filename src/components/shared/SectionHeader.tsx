import React from "react";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
  titleClassName?: string;
}

export function SectionHeader({
  tag,
  title,
  subtitle,
  align = "left",
  className = "",
  titleClassName = "",
}: SectionHeaderProps) {
  const alignClasses =
    align === "center"
      ? "text-center mx-auto items-center"
      : "text-left items-start";

  return (
    <div className={`flex flex-col max-w-3xl mb-12 sm:mb-14 ${alignClasses} ${className}`}>
      {tag && (
        <span className="text-[13px] font-medium font-mono tracking-wider uppercase text-[#f1702c] mb-2 sm:mb-3">
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl sm:text-4xl lg:text-[48px] font-semibold tracking-tight text-[#292e31] leading-[1.12] ${titleClassName}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-[17px] text-[#525866] leading-relaxed max-w-2xl font-normal">
          {subtitle}
        </p>
      )}
    </div>
  );
}
