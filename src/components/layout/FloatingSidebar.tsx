"use client";

import React, { useState, useEffect } from "react";
import { ArrowUp, Linkedin, Github, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { trackEvent } from "@/lib/analytics";

// Custom Upwork icon (SVG-based)
const UpworkIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H8.029v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.546-2.546V3.492H.391v7.112c0 2.914 2.37 5.303 5.283 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.554l1.213-5.71c1.063.679 2.285 1.109 3.537 1.109 3.148 0 5.71-2.561 5.71-5.708 0-3.148-2.561-5.709-5.71-5.709z" />
  </svg>
);

// Custom Fiverr icon (SVG-based)
const FiverrIcon = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16.25 16.25v-10h-10v10h10zm0-11.667c.92 0 1.667.747 1.667 1.667v10c0 .92-.747 1.667-1.667 1.667h-10c-.92 0-1.667-.747-1.667-1.667v-10c0-.92.747-1.667 1.667-1.667h10zM10.583 8.75a.833.833 0 110 1.667.833.833 0 010-1.667zm2.5 5.833H10.75v-3.75h.833v2.917h1.5v.833zm1.667 0h-.833V11.25h.833v3.333z" />
  </svg>
);

export const FloatingSidebar = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const activeSocials = PORTFOLIO_DATA.socials.filter(
    (social) => social.enabled && social.url
  );

  return (
    <>
      {/* Left Vertical Rail: Scroll to top */}
      <div
        className={`fixed left-6 bottom-12 z-40 hidden xl:flex flex-col items-center gap-4 transition-opacity duration-300 ${
          showScrollTop ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 -rotate-90 origin-bottom-left text-xs font-mono tracking-widest text-[#71717A] hover:text-[#38BDF8] transition-colors py-2 cursor-pointer"
          aria-label="Scroll to top"
        >
          <ArrowUp size={14} className="rotate-90" />
          <span>Scroll to top</span>
        </button>
        <div className="w-[1px] h-16 bg-[#27272A] mt-24" />
      </div>

      {/* Right Vertical Rail: Contact / Social Icons */}
      <div className="fixed right-6 bottom-12 z-40 hidden xl:flex flex-col items-center gap-4">
        <div className="flex flex-col gap-4 text-[#71717A]">
          {/* Direct Email Link */}
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
            onClick={() => trackEvent("get_in_touch_click", { location: "sidebar_email" })}
            className="hover:text-[#38BDF8] transition-colors"
            aria-label="Send direct email"
            title="Send Email"
          >
            <Mail size={16} />
          </a>

          {/* Dynamic Enabled Socials */}
          {activeSocials.map((social) => {
            if (social.label === "LinkedIn") {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              );
            }
            if (social.label === "GitHub") {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={16} />
                </a>
              );
            }
            if (social.label === "Upwork") {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                  aria-label="Upwork"
                >
                  <UpworkIcon size={16} />
                </a>
              );
            }
            if (social.label === "Fiverr") {
              return (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] transition-colors"
                  aria-label="Fiverr"
                >
                  <FiverrIcon size={16} />
                </a>
              );
            }
            return null;
          })}
        </div>
        <div className="w-[1px] h-16 bg-[#27272A]" />
        <span className="-rotate-90 origin-top-right text-[11px] font-mono tracking-widest text-[#71717A] whitespace-nowrap mt-8">
          Contact
        </span>
      </div>
    </>
  );
};
