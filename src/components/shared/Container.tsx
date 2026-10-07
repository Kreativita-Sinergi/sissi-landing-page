import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  size?: "default" | "narrow" | "wide";
  children: React.ReactNode;
}

export function Container({
  className = "",
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl px-4 sm:px-6",
    default: "max-w-[1440px] px-6 sm:px-12 lg:px-[120px]",
    wide: "max-w-[1440px] px-4 sm:px-8",
  };

  return (
    <div
      className={`mx-auto w-full ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
