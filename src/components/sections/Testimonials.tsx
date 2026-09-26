"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  Target,
  Cpu,
  Code2,
  CheckCircle2,
  PackageCheck
} from "lucide-react";

export const Testimonials = () => {
  const expectations = [
    {
      id: "exp-1",
      title: "Clear Communication",
      desc: "Straightforward updates and clear expectations throughout the project.",
      icon: MessageSquare,
    },
    {
      id: "exp-2",
      title: "Business-Focused Solutions",
      desc: "I focus on solving the actual workflow or business problem — not adding unnecessary complexity.",
      icon: Target,
    },
    {
      id: "exp-3",
      title: "Practical Automation",
      desc: "Automations are designed around real processes and the tools teams already use.",
      icon: Cpu,
    },
    {
      id: "exp-4",
      title: "Modern Development",
      desc: "Responsive, clean and maintainable web experiences built around practical functionality.",
      icon: Code2,
    },
    {
      id: "exp-5",
      title: "Attention to Detail",
      desc: "From interface polish to workflow logic, important details are tested before delivery.",
      icon: CheckCircle2,
    },
    {
      id: "exp-6",
      title: "Reliable Handoff",
      desc: "Projects are organized so they can be maintained, updated and expanded after launch.",
      icon: PackageCheck,
    },
  ];

  return (
    <section id="testimonials" className="w-full py-24 md:py-32 bg-[#111113] border-b border-[#27272A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20 space-y-3"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
            STANDARDS & COMMITMENT
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#38BDF8] tracking-tight">
            What Clients Can Expect
          </h2>
          <p className="text-[#A1A1AA] text-sm sm:text-base max-w-xl mx-auto">
            Principles and working standards you can rely on when collaborating on any project.
          </p>
        </motion.div>

        {/* 6-Card Grid (2 columns on tablet/desktop, 3 on large screens) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {expectations.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="bg-[#18181B] border border-[#27272A] rounded-2xl p-7 flex flex-col justify-between hover:border-[#38BDF8]/60 transition-all duration-200 group shadow-lg"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#38BDF8] group-hover:scale-105 group-hover:border-[#38BDF8]/50 transition-all">
                    <Icon size={22} />
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#27272A]/80 flex items-center justify-between text-[11px] font-mono text-[#71717A]">
                  <span>Standard 0{idx + 1}</span>
                  <span className="text-[#38BDF8]/80">Core Value</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
