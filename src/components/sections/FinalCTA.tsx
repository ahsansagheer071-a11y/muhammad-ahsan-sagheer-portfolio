"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { MapPin, Globe, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="w-full py-20 md:py-28 bg-[#111113] border-t border-[#27272A]/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-14">
          
          {/* Left: Circular Avatar with Sky Blue Background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative flex-shrink-0"
          >
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] p-1.5 shadow-2xl overflow-hidden relative">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111113]">
                <Image
                  src="/images/hero-portrait.jpg"
                  alt="Personal Avatar"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Narrative CTA & Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex-1 text-center md:text-left space-y-5"
          >
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
                {PORTFOLIO_DATA.personal.roleBadge}
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
                {PORTFOLIO_DATA.finalCta.heading}
              </h2>
            </div>

            <p className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed max-w-xl">
              {PORTFOLIO_DATA.finalCta.body}
            </p>

            <div className="p-4 rounded-xl bg-[#18181B] border border-[#27272A] inline-block max-w-xl">
              <p className="text-sm font-medium text-[#F8FAFC] flex items-center gap-2">
                <Sparkles size={16} className="text-[#38BDF8] shrink-0" />
                <span>Have a workflow, website or business process that could work better? Let’s talk.</span>
              </p>
            </div>

            {/* Location & Availability Status */}
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-sm font-medium">
              <div className="flex items-center gap-2 text-[#38BDF8]">
                <MapPin size={16} />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-[#A1A1AA] text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
                <span>{PORTFOLIO_DATA.finalCta.availability}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
