"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Atom,
  ShoppingBag,
  CheckSquare,
  Mail,
  Youtube,
  Cpu,
  BrainCircuit,
  MapPin
} from "lucide-react";

export const ToolsAndPlatforms = () => {
  const tools = [
    { name: "Next.js", icon: Code2 },
    { name: "React", icon: Atom },
    { name: "Shopify", icon: ShoppingBag },
    { name: "ClickUp", icon: CheckSquare },
    { name: "Gmail", icon: Mail },
    { name: "YouTube", icon: Youtube },
    { name: "APIs & Webhooks", icon: Cpu },
    { name: "AI Models", icon: BrainCircuit },
    { name: "Google Business Profile", icon: MapPin },
  ];

  return (
    <section className="w-full py-12 bg-[#111113] border-b border-[#27272A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
            INTEGRATIONS & ECOSYSTEM
          </span>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#F8FAFC]">
            Tools & Platforms I Work With
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 max-w-4xl mx-auto pt-2">
            {tools.map((tool, idx) => {
              const Icon = tool.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#18181B] border border-[#27272A] text-xs sm:text-sm font-medium text-[#A1A1AA] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 hover:bg-[#18181B]/90 transition-all duration-200 shadow-sm cursor-default"
                >
                  <Icon size={14} className="text-[#38BDF8]" />
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
