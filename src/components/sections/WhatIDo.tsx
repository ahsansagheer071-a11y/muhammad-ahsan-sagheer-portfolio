"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import {
  Bot,
  Globe,
  Search,
  Palette,
  ArrowUpRight,
  Code2,
  Atom,
  ShoppingBag,
  CheckSquare,
  Mail,
  Youtube,
  Cpu,
  BrainCircuit,
  Layers,
  Sparkles
} from "lucide-react";

export const WhatIDo = () => {
  const serviceIcons = [Palette, Globe, Bot, Search];

  const tools = [
    { name: "Next.js", icon: Code2 },
    { name: "React", icon: Atom },
    { name: "Adobe Suite", icon: Palette },
    { name: "Shopify", icon: ShoppingBag },
    { name: "ClickUp", icon: CheckSquare },
    { name: "Gmail", icon: Mail },
    { name: "YouTube API", icon: Youtube },
    { name: "APIs & Webhooks", icon: Cpu },
    { name: "AI Models / LLMs", icon: BrainCircuit },
  ];

  return (
    <section id="services" className="w-full py-16 sm:py-20 bg-[#111113] border-t border-[#27272A]/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Tag & Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 mb-12 items-end">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8] mb-3 inline-block font-semibold">
              {PORTFOLIO_DATA.whatIDo.tag}
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight leading-tight">
              {PORTFOLIO_DATA.whatIDo.headline}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-4"
          >
            <p className="text-[#A1A1AA] text-xs sm:text-sm leading-relaxed">
              {PORTFOLIO_DATA.whatIDo.subheadline}
            </p>
          </motion.div>
        </div>

        {/* 4-Card Service Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {PORTFOLIO_DATA.whatIDo.items.map((item, idx) => {
            const Icon = serviceIcons[idx % serviceIcons.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#38BDF8]/60 transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#38BDF8] mb-5 group-hover:border-[#38BDF8] transition-colors">
                    <Icon size={20} />
                  </div>

                  {/* Title */}
                  <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom link indicator */}
                <div className="pt-5 mt-5 border-t border-[#27272A]/80 flex items-center justify-between text-xs text-[#71717A]">
                  <span className="font-mono text-[11px] uppercase tracking-wider">0{idx + 1}</span>
                  <ArrowUpRight size={14} className="text-[#71717A] group-hover:text-[#38BDF8] transition-colors" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Consolidated Capabilities & Technology Stack Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#18181B] border border-[#27272A] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#27272A]/80 pb-4">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-[#38BDF8]" />
              <h4 className="font-heading text-sm font-bold text-[#F8FAFC] uppercase tracking-wider">
                Specialized Capabilities &amp; Ecosystem
              </h4>
            </div>
            <span className="text-xs font-mono text-[#71717A]">
              Design Systems • Modern Web • AI Engineering
            </span>
          </div>

          {/* Capabilities Badges */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {PORTFOLIO_DATA.capabilities.map((cap, i) => (
              <span
                key={i}
                className="px-3 py-1.5 rounded-lg bg-[#111113] border border-[#27272A] text-xs font-medium text-[#F8FAFC]/90 hover:border-[#38BDF8]/40 hover:text-[#38BDF8] transition-colors cursor-default"
              >
                {cap}
              </span>
            ))}
          </div>

          {/* Tools & Platforms Strip */}
          <div className="pt-4 border-t border-[#27272A]/60 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono text-[#71717A] uppercase mr-2 flex items-center gap-1.5">
              <Layers size={13} className="text-[#38BDF8]" />
              <span>Stack:</span>
            </span>
            {tools.map((tool, idx) => {
              const ToolIcon = tool.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#111113] border border-[#27272A] text-[11px] font-medium text-[#A1A1AA] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 transition-colors"
                >
                  <ToolIcon size={12} className="text-[#38BDF8]" />
                  <span>{tool.name}</span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
