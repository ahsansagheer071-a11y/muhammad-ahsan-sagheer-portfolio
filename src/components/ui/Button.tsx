import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "sky" | "outline" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "sky",
  size = "md",
  children,
  className,
  asAnchor = false,
  href = "#",
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]/50 active:scale-[0.98] rounded-full";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-2.5 text-sm",
    lg: "px-8 py-3.5 text-base font-semibold",
  };

  const variantStyles = {
    sky: "bg-[#38BDF8] text-[#0A0A0C] hover:bg-[#7DD3FC] shadow-sm font-semibold",
    outline: "bg-transparent border border-[#27272A] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8]",
    dark: "bg-[#18181B] text-[#F8FAFC] border border-[#27272A] hover:bg-[#232328] hover:border-[#3F3F46]",
    ghost: "bg-transparent text-[#A1A1AA] hover:text-[#F8FAFC]",
  };

  const combinedClass = cn(baseStyles, sizeStyles[size], variantStyles[variant], className);

  if (asAnchor) {
    return (
      <a href={href} className={combinedClass}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClass} {...props}>
      {children}
    </button>
  );
};
