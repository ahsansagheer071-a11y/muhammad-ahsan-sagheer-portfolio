"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { Workflow, LayoutDashboard, Palette, ArrowRight } from "lucide-react";

export const CreativityZone = () => {
  const icons = [Workflow, LayoutDashboard, Palette];

  return (
    <section className="w-full py-20 bg-[#111113]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] block mb-2">
              Systems & Architecture
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
              {PORTFOLIO_DATA.creativityZone.heading}
            </h2>
          </div>
          <p className="text-[#A1A1AA] text-sm max-w-md">
            A look into the automated workflows, data dashboards, and digital collateral built behind the scenes.
          </p>
        </motion.div>

        {/* 3-Card Visual Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {PORTFOLIO_DATA.creativityZone.items.map((item, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative rounded-2xl overflow-hidden bg-[#18181B] border border-[#27272A] aspect-[4/5] flex flex-col justify-between p-6 hover:border-[#38BDF8]/60 transition-all duration-300 shadow-xl hover:shadow-[#38BDF8]/10"
              >
                {/* Real Image Visual Background */}
                {item.imageSrc && (
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <Image
                      src={item.imageSrc}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-108 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.9]"
                    />
                    {/* Dark gradient blend for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/50 to-[#111113]/40" />
                  </div>
                )}

                {/* Subtle Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a15_1px,transparent_1px),linear-gradient(to_bottom,#27272a15_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-[1]" />

                {/* Card Top Indicator */}
                <div className="relative z-10 flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#111113]/90 border border-[#27272A] flex items-center justify-center text-[#38BDF8] backdrop-blur-md group-hover:border-[#38BDF8] group-hover:scale-105 transition-all">
                    <Icon size={19} />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#111113]/90 border border-[#27272A] text-[#A1A1AA] backdrop-blur-md">
                    0{idx + 1}
                  </span>
                </div>

                {/* Card Center Visual Label */}
                <div className="relative z-10 my-auto text-center pointer-events-none">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-widest text-[#38BDF8] bg-[#111113]/90 px-3 py-1 rounded-full border border-[#38BDF8]/30 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Inspecting Component
                  </span>
                </div>

                {/* Card Bottom Meta */}
                <div className="relative z-10 pt-5 border-t border-[#27272A]/90 bg-[#111113]/90 -mx-6 -mb-6 p-6 backdrop-blur-md group-hover:bg-[#111113]/95 transition-colors">
                  <h4 className="text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowRight size={15} className="text-[#71717A] group-hover:text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                  </h4>
                  <p className="text-xs text-[#A1A1AA] mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
