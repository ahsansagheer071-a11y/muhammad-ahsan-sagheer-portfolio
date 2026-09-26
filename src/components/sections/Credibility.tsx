"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Briefcase, CheckCircle } from "lucide-react";

export const Credibility = () => {
  return (
    <section className="w-full py-12 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headline */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/20 text-[#38BDF8] text-xs font-semibold mb-4">
                <Briefcase size={14} />
                <span>{PORTFOLIO_DATA.credibility.tag}</span>
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-[#F8FAFC] tracking-tight leading-snug">
                {PORTFOLIO_DATA.credibility.headline}
              </h3>
              <p className="text-[#A1A1AA] text-sm sm:text-base mt-3 max-w-lg">
                {PORTFOLIO_DATA.credibility.subheadline}
              </p>
            </div>

            {/* Right Column: Profile Card Shell */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-sm bg-[#111113] border border-[#27272A] rounded-xl p-5 hover:border-[#38BDF8]/40 transition-colors">
                <div className="flex items-start gap-4">
                  {/* Avatar with Sky Blue circle */}
                  <div className="relative w-14 h-14 rounded-full overflow-hidden border border-[#38BDF8]/50 flex-shrink-0 bg-[#0284C7]">
                    <Image
                      src="/images/hero-portrait.jpg"
                      alt="Profile Avatar"
                      width={56}
                      height={56}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Profile Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-[#F8FAFC] truncate">
                        {PORTFOLIO_DATA.credibility.profileCard.title}
                      </h4>
                      <CheckCircle size={14} className="text-[#38BDF8] flex-shrink-0" />
                    </div>
                    <p className="text-xs text-[#38BDF8] font-mono font-semibold mt-0.5">
                      {PORTFOLIO_DATA.credibility.profileCard.primary}
                    </p>
                    <p className="text-xs text-[#A1A1AA] mt-1 leading-snug">
                      {PORTFOLIO_DATA.credibility.profileCard.supporting}
                    </p>
                    <p className="text-[11px] text-[#71717A] mt-1.5 font-medium border-t border-[#27272A]/80 pt-1.5">
                      {PORTFOLIO_DATA.credibility.profileCard.secondary}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};
