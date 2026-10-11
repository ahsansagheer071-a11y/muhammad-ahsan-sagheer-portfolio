"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Bot, Globe, Search, Palette, ArrowUpRight } from "lucide-react";

export const WhatIDo = () => {
  const serviceIcons = [Palette, Globe, Bot, Search];

  return (
    <section id="services" className="w-full py-24 md:py-32 bg-[#111113] border-t border-[#27272A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Tag & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-20 items-end">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-4 inline-block font-semibold">
              {PORTFOLIO_DATA.whatIDo.tag}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              {PORTFOLIO_DATA.whatIDo.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4"
          >
            <p className="text-[#A1A1AA] text-sm sm:text-base leading-relaxed">
              {PORTFOLIO_DATA.whatIDo.subheadline}
            </p>
          </motion.div>

        </div>

        {/* 4-Card Service / Capability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.whatIDo.items.map((item, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="group bg-[#18181B] border border-[#27272A] rounded-2xl p-7 flex flex-col justify-between hover:border-[#38BDF8]/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#38BDF8] mb-6 group-hover:border-[#38BDF8] transition-colors">
                    <Icon size={22} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-3">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-6 mt-6 border-t border-[#27272A]/80 flex items-center justify-between text-xs text-[#71717A]">
                  <span className="font-mono uppercase tracking-wider">Service 0{idx + 1}</span>
                  <ArrowUpRight size={14} className="text-[#71717A] group-hover:text-[#38BDF8] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
