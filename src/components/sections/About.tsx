"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowRight, Sparkles, Layers, Cpu } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="w-full py-20 md:py-28 bg-[#111113] border-t border-[#27272A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 md:mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#F8FAFC] tracking-tight">
            {PORTFOLIO_DATA.personal.aboutHeading}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Narrative Copy & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {PORTFOLIO_DATA.personal.aboutParagraphs.map((para, index) => (
              <p
                key={index}
                className="text-[#A1A1AA] text-base sm:text-lg leading-relaxed font-normal"
              >
                {para}
              </p>
            ))}

            <div className="pt-4">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#38BDF8] text-[#0A0A0C] font-semibold text-sm hover:bg-[#7DD3FC] transition-colors group"
              >
                <span>{PORTFOLIO_DATA.personal.browseProjectsCta}</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Reference-Aligned Placeholder Graphic Block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-md aspect-square bg-[#18181B] border border-[#27272A] rounded-2xl p-8 relative flex flex-col justify-between overflow-hidden group hover:border-[#38BDF8]/40 transition-colors">
              {/* Subtle background glow circle */}
              <div className="absolute -top-10 -right-10 w-44 h-44 rounded-full bg-[#38BDF8]/10 blur-2xl" />
              
              {/* Top Graphic Elements */}
              <div className="flex items-center justify-between z-10">
                <div className="w-12 h-12 rounded-xl bg-[#232328] border border-[#27272A] flex items-center justify-center text-[#38BDF8]">
                  <Cpu size={24} />
                </div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
                  [DESIGN // CODE // AUTOMATION]
                </span>
              </div>

              {/* Center Abstract Wireframe / Composition Motif */}
              <div className="my-auto py-6 flex flex-col items-center justify-center text-center z-10 space-y-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-[#38BDF8]/40 flex items-center justify-center animate-[spin_12s_linear_infinite]">
                    <Layers size={28} className="text-[#38BDF8]" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#38BDF8] flex items-center justify-center text-[#0A0A0C]">
                    <Sparkles size={12} />
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#F8FAFC]">Engineered for Growth</h4>
                  <p className="text-xs text-[#A1A1AA] mt-1 max-w-[220px]">
                    Commercial brand design, scalable web platforms &amp; autonomous AI workflows.
                  </p>
                </div>
              </div>

              {/* Bottom Tag Bar */}
              <div className="flex items-center justify-between text-[11px] text-[#A1A1AA] pt-4 border-t border-[#27272A]/80 z-10">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  Multidisciplinary
                </span>
                <span className="font-mono text-[#71717A]">Design / Next.js / AI</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
