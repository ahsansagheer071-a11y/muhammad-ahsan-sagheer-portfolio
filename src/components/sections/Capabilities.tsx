"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const Capabilities = () => {
  return (
    <section className="w-full py-16 bg-[#111113] border-b border-[#27272A]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Sky Blue Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#38BDF8] tracking-tight">
            Capabilities<span className="text-[#38BDF8] inline-block animate-pulse font-light ml-1">|</span>
          </h2>
        </motion.div>

        {/* Horizontal Capabilities Pills Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 max-w-4xl mx-auto"
        >
          {PORTFOLIO_DATA.capabilities.map((capability, index) => (
            <div
              key={index}
              className="px-6 py-3.5 rounded-full bg-[#18181B] border border-[#27272A] text-sm sm:text-base font-semibold text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:bg-[#18181B]/90 transition-all duration-200 cursor-default shadow-sm"
            >
              {capability}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
