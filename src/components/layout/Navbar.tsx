"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

// MAS Monogram — inline SVG, crisp at all sizes, no gradients/glow
const MASMonogram = () => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="MAS monogram"
    className="flex-shrink-0"
  >
    {/* Background square */}
    <rect width="36" height="36" rx="6" fill="#18181B" />
    {/* Sky Blue accent bar — top */}
    <rect x="6" y="5" width="24" height="2" rx="1" fill="#38BDF8" />
    {/* M stroke */}
    <path
      d="M7 28V12L12.5 21L18 12L18 28"
      stroke="#F8FAFC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* A stroke */}
    <path
      d="M18 28L22 12L26 28M19.8 22H24.2"
      stroke="#F8FAFC"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    {/* Sky Blue accent dot — bottom right */}
    <circle cx="30" cy="30" r="2" fill="#38BDF8" />
  </svg>
);

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#111113] border-b border-[#27272A]/40 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 h-20 flex items-center justify-between">

        {/* Left: MAS Logo + Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-[#F8FAFC] border border-[#27272A] rounded-md hover:border-[#38BDF8] transition-colors lg:hidden"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          <a
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Muhammad Ahsan Sagheer — Home"
          >
            {/* MAS Monogram mark */}
            <div className="group-hover:[&_rect:first-child]:fill-[#1a1a1d] group-hover:[&_rect:nth-child(2)]:fill-[#7DD3FC] group-hover:[&_circle]:fill-[#7DD3FC] transition-all duration-200">
              <MASMonogram />
            </div>

            {/* Wordmark — hidden on very small screens */}
            <div className="hidden sm:flex flex-col leading-tight select-none">
              <span className="font-heading font-extrabold text-[11px] text-[#F8FAFC] tracking-[0.14em] uppercase group-hover:text-[#F8FAFC] transition-colors">
                MUHAMMAD
              </span>
              <span className="font-heading font-semibold text-[9px] text-[#A1A1AA] tracking-[0.18em] uppercase group-hover:text-[#7DD3FC] transition-colors">
                AHSAN SAGHEER
              </span>
            </div>
          </a>
        </div>

        {/* Right: Navigation Links & CTA */}
        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium">
            <a
              href="/#home"
              className="text-[#F8FAFC] hover:text-[#38BDF8] transition-colors"
            >
              Home
            </a>
            <a
              href="/#portfolio"
              className="text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors flex items-center gap-1.5"
            >
              <span>Portfolio</span>
              <span className="text-[11px] font-semibold text-[#38BDF8] px-1.5 py-0.5 bg-[#38BDF8]/10 rounded border border-[#38BDF8]/20">
                {PORTFOLIO_DATA.featuredProjects.length.toString().padStart(2, "0")}
              </span>
            </a>
            <a
              href="/#about"
              className="text-[#A1A1AA] hover:text-[#F8FAFC] transition-colors"
            >
              About
            </a>
          </nav>

          <Button
            asAnchor
            href="/#inquiry"
            variant="dark"
            size="sm"
            className="rounded-full px-5 py-2 text-xs font-semibold hover:border-[#38BDF8] hover:text-[#38BDF8]"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#18181B] border-b border-[#27272A] px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium">
            <a
              href="/#home"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8FAFC] hover:text-[#38BDF8] py-1"
            >
              Home
            </a>
            <a
              href="/#portfolio"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A1A1AA] hover:text-[#F8FAFC] py-1 flex items-center justify-between"
            >
              <span>Portfolio</span>
              <span className="text-xs text-[#38BDF8] px-2 py-0.5 bg-[#38BDF8]/10 rounded">
                {PORTFOLIO_DATA.featuredProjects.length.toString().padStart(2, "0")}
              </span>
            </a>
            <a
              href="/#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#A1A1AA] hover:text-[#F8FAFC] py-1"
            >
              About
            </a>
          </nav>
          <div className="pt-2">
            <Button
              asAnchor
              href="/#inquiry"
              variant="sky"
              size="sm"
              className="w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
