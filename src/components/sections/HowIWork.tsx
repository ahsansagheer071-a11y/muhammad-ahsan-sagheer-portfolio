"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Hammer, Rocket } from "lucide-react";

export const HowIWork = () => {
  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand the business, workflow and goal.",
      icon: Search,
    },
    {
      num: "02",
      title: "Map",
      desc: "Plan the system, user flow or automation before building.",
      icon: Compass,
    },
    {
      num: "03",
      title: "Build",
      desc: "Develop the website, application or automation.",
      icon: Hammer,
    },
    {
      num: "04",
      title: "Test & Launch",
      desc: "Test the complete workflow and prepare it for real-world use.",
      icon: Rocket,
    },
  ];

  return (
    <section className="w-full py-20 bg-[#111113] border-b border-[#27272A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] block mb-2">
            METHODOLOGY
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            How I Work
          </h2>
          <p className="text-sm text-[#A1A1AA] mt-2 max-w-xl mx-auto">
            A structured, collaborative approach to turn business requirements into practical digital systems.
          </p>
        </motion.div>

        {/* 4 Steps Row / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-[#18181B] border border-[#27272A] hover:border-[#38BDF8]/50 transition-all duration-200 flex flex-col justify-between space-y-4 group"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#111113] border border-[#27272A] text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-colors">
                    {step.num}
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#71717A] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/40 transition-colors">
                    <Icon size={16} />
                  </div>
                </div>

                <div>
                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC] mb-1.5 group-hover:text-[#38BDF8] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {step.desc}
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
