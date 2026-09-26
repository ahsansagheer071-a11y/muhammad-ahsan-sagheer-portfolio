"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Stats = () => {
  return (
    <section className="w-full py-16 sm:py-20 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.stats.map((stat, idx) => {
            const isHighlight = stat.highlighted;

            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`rounded-2xl p-8 sm:p-10 flex flex-col items-center justify-center text-center transition-transform duration-300 hover:-translate-y-1.5 ${
                  isHighlight
                    ? "bg-[#38BDF8] text-[#0A0A0C] shadow-lg shadow-[#38BDF8]/10"
                    : "bg-[#18181B] border border-[#27272A] text-[#F8FAFC] hover:border-[#38BDF8]/40"
                }`}
              >
                {/* Big Metric Display */}
                <div
                  className={`font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-3 ${
                    isHighlight ? "text-[#0A0A0C]" : "text-[#F8FAFC]"
                  }`}
                >
                  {stat.value}
                </div>

                {/* Metric Label */}
                <div
                  className={`text-sm sm:text-base font-medium max-w-[200px] leading-snug ${
                    isHighlight ? "text-[#0A0A0C]/90 font-semibold" : "text-[#A1A1AA]"
                  }`}
                >
                  {stat.label}
                </div>

                {/* Optional Small Caption */}
                {stat.caption && (
                  <div
                    className={`text-xs mt-2 font-medium tracking-tight ${
                      isHighlight ? "text-[#0A0A0C]/80 font-medium" : "text-[#71717A]"
                    }`}
                  >
                    {stat.caption}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
