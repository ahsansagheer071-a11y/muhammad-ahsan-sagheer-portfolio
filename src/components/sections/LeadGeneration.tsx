"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Headphones,
  ShoppingBag,
  Share2,
  UserCheck,
  Cpu,
  Sparkles,
  ArrowRight,
  Check
} from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const LeadGeneration = () => {
  const [selectedPill, setSelectedPill] = useState<string>("Lead Management");

  const options = [
    { label: "Lead Management", icon: Users },
    { label: "Customer Support", icon: Headphones },
    { label: "Ecommerce", icon: ShoppingBag },
    { label: "Content & Social Media", icon: Share2 },
    { label: "Client Onboarding", icon: UserCheck },
    { label: "Internal Operations", icon: Cpu },
    { label: "Something Else", icon: Sparkles },
  ];

  const handleCtaClick = () => {
    trackEvent("tell_me_workflow_click", { selectedCategory: selectedPill });
    // Scroll to inquiry section
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      // Dispatch custom event to notify inquiry form
      window.dispatchEvent(
        new CustomEvent("select-automation-service", { detail: selectedPill })
      );
    }
  };

  return (
    <section className="w-full py-20 bg-[#111113] border-b border-[#27272A]/40 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-10 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-10"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-[#38BDF8]">
            TAILORED AUTOMATION
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            What Can I Automate For You?
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto">
            Tell me where your business is losing time, and I’ll help map a smarter workflow.
          </p>
        </motion.div>

        {/* Interactive Option Pills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto mb-10"
        >
          {options.map((opt) => {
            const isSelected = selectedPill === opt.label;
            const Icon = opt.icon;

            return (
              <button
                key={opt.label}
                type="button"
                onClick={() => setSelectedPill(opt.label)}
                className={`inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#38BDF8] text-[#111113] shadow-lg shadow-[#38BDF8]/20 scale-105"
                    : "bg-[#18181B] border border-[#27272A] text-[#F8FAFC] hover:border-[#38BDF8]/60 hover:text-[#38BDF8]"
                }`}
              >
                {isSelected ? (
                  <Check size={15} className="text-[#111113] stroke-[3]" />
                ) : (
                  <Icon size={15} className="text-[#38BDF8]" />
                )}
                <span>{opt.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            type="button"
            onClick={handleCtaClick}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#18181B] border border-[#38BDF8] text-[#38BDF8] hover:bg-[#38BDF8] hover:text-[#111113] font-bold text-sm sm:text-base transition-all duration-200 group shadow-lg shadow-[#38BDF8]/10"
          >
            <span>Tell Me Your Workflow</span>
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>
    </section>
  );
};
