"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const FreeAuditCTA = () => {
  const handleAuditClick = () => {
    trackEvent("free_audit_click", { location: "audit_banner" });
    const el = document.getElementById("inquiry");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("select-automation-service", {
          detail: "Workflow Audit / Optimization",
        })
      );
    }
  };

  return (
    <section className="w-full py-14 bg-[#111113] border-b border-[#27272A]/40">
      <div className="max-w-5xl mx-auto px-6 sm:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl bg-gradient-to-r from-[#18181B] via-[#1a1c23] to-[#18181B] border border-[#27272A] p-8 sm:p-10 overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-xl"
        >
          {/* Subtle blue accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />

          {/* Copy */}
          <div className="space-y-3 max-w-xl relative z-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 text-xs font-semibold">
              <Sparkles size={12} />
              <span>Free Consultation & Audit</span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8FAFC] tracking-tight">
              Not sure what should be automated?
            </h3>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Send me your current workflow, website, or business process and I’ll identify practical opportunities to simplify it with automation or a better web system.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#71717A] pt-1 justify-center sm:justify-start">
              <ShieldCheck size={14} className="text-[#38BDF8]" />
              <span>No obligation — just a practical starting point.</span>
            </div>
          </div>

          {/* Action Button */}
          <div className="relative z-10 shrink-0">
            <button
              type="button"
              onClick={handleAuditClick}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#38BDF8] text-[#111113] font-bold text-sm sm:text-base hover:bg-[#7DD3FC] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20 group cursor-pointer"
            >
              <span>Request a Free Workflow Audit</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
