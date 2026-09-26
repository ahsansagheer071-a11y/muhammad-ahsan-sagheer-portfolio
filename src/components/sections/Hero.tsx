"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const Hero = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: "url('/images/hero-bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#111113",
      }}
      className="relative w-full min-h-[100svh] flex items-center bg-[#111113] overflow-hidden"
    >
      {/* Dark gradient overlay on the left for text contrast & seamless site integration */}
      <div
        className="absolute inset-0 w-full md:w-[80%] lg:w-[65%] pointer-events-none z-0"
        style={{
          background:
            "linear-gradient(to right, rgba(17, 17, 19, 0.98) 0%, rgba(17, 17, 19, 0.85) 45%, rgba(17, 17, 19, 0.4) 75%, rgba(17, 17, 19, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top & bottom subtle blend */}
      <div
        className="absolute top-0 inset-x-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #111113 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 inset-x-0 h-20 pointer-events-none"
        style={{
          background: "linear-gradient(to top, #111113 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content (Positioned on the Left) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full py-20 sm:py-24 lg:py-32">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {/* Greeting */}
            <div className="mb-2 sm:mb-3">
              <span className="text-[#F8FAFC] text-lg sm:text-xl lg:text-2xl font-medium tracking-tight">
                {PORTFOLIO_DATA.personal.greeting}
              </span>
            </div>

            {/* Dominant Name Display Typography */}
            <h1 className="font-heading font-extrabold text-[#F8FAFC] tracking-tighter leading-[0.92] uppercase mb-6 sm:mb-8">
              <span className="block text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[88px] text-[#F8FAFC]/90">
                {PORTFOLIO_DATA.personal.firstName}
              </span>
              <span className="block text-5xl sm:text-7xl md:text-8xl lg:text-[88px] xl:text-[102px] text-[#F8FAFC] drop-shadow-md">
                {PORTFOLIO_DATA.personal.lastName}
              </span>
            </h1>

            {/* Role / Positioning */}
            <div className="inline-block text-lg sm:text-xl md:text-2xl font-bold text-[#38BDF8] tracking-tight mb-3">
              {PORTFOLIO_DATA.personal.heroRole}
            </div>

            {/* Supporting Line */}
            <p className="text-[#F8FAFC]/90 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-lg mb-8 sm:mb-10 drop-shadow-sm">
              {PORTFOLIO_DATA.personal.heroSupporting}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#portfolio"
                onClick={() => trackEvent("explore_work_click", { location: "hero" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#38BDF8] text-[#0A0A0C] font-bold text-sm hover:bg-[#7DD3FC] transition-all duration-200 group shadow-lg shadow-[#38BDF8]/20 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="#inquiry"
                onClick={() => trackEvent("get_in_touch_click", { location: "hero" })}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#18181B]/90 backdrop-blur-sm border border-[#27272A] text-[#F8FAFC] font-medium text-sm hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all duration-200 cursor-pointer"
              >
                <span>Get in Touch</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
