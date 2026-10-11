"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const QuoteSection = () => {
  return (
    <section className="w-full py-14 sm:py-18 bg-[#111113] border-y border-[#27272A]/40">
      <div className="max-w-4xl mx-auto px-6 sm:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <blockquote className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
            {PORTFOLIO_DATA.quote.text}
          </blockquote>
          
          <p className="text-sm sm:text-base font-medium text-[#71717A] tracking-wider uppercase">
            {PORTFOLIO_DATA.quote.author}
          </p>
        </motion.div>
      </div>
    </section>
  );
};
