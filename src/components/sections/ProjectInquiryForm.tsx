"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  Sparkles,
  Loader2,
  AlertCircle,
  RefreshCcw
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { trackEvent } from "@/lib/analytics";

export const ProjectInquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "AI Automation",
    projectDetails: "",
    processImprovement: "",
    timeline: "This Month",
    budget: "Not Sure Yet",
    automationCategory: "",
    bot_field_honey: "", // Anti-spam honeypot (browser autofill safe)
    hp_company: "", // Legacy honeypot
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Listen to external preselection triggers (from "What Can I Automate For You" and "Free Audit")
  useEffect(() => {
    const handleServiceSelect = (e: any) => {
      const serviceDetail = e.detail;
      if (serviceDetail) {
        trackEvent("inquiry_started", { source: serviceDetail });
        if (serviceDetail.includes("Ecommerce")) {
          setFormData((prev) => ({
            ...prev,
            service: "Ecommerce",
            automationCategory: serviceDetail,
          }));
        } else if (serviceDetail.includes("SEO")) {
          setFormData((prev) => ({
            ...prev,
            service: "SEO / Local SEO",
            automationCategory: serviceDetail,
          }));
        } else if (serviceDetail.includes("Web")) {
          setFormData((prev) => ({
            ...prev,
            service: "Web Development",
            automationCategory: serviceDetail,
          }));
        } else {
          setFormData((prev) => ({
            ...prev,
            service: "AI Automation",
            automationCategory: serviceDetail,
            processImprovement: `Focus area: ${serviceDetail}`,
          }));
        }
      }
    };

    window.addEventListener("select-automation-service", handleServiceSelect);
    return () =>
      window.removeEventListener("select-automation-service", handleServiceSelect);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          sourceUrl: typeof window !== "undefined" ? window.location.pathname : "/",
        }),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        trackEvent("inquiry_submitted", {
          service: formData.service,
          timeline: formData.timeline,
        });
      } else {
        setStatus("error");
        setErrorMessage(
          result.error ||
            "Unable to submit inquiry at this moment. Please try again or email directly."
        );
      }
    } catch {
      setStatus("error");
      setErrorMessage(
        "Network error occurred. Please verify your connection or send an email directly."
      );
    }
  };

  const resetForm = () => {
    setStatus("idle");
    setErrorMessage("");
    setFormData({
      name: "",
      email: "",
      service: "AI Automation",
      projectDetails: "",
      processImprovement: "",
      timeline: "This Month",
      budget: "Not Sure Yet",
      automationCategory: "",
      bot_field_honey: "",
      hp_company: "",
    });
  };

  return (
    <section id="inquiry" className="w-full py-20 bg-[#111113] border-b border-[#27272A]/40 relative">
      <div className="max-w-4xl mx-auto px-6 sm:px-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 text-xs font-semibold">
            <Sparkles size={12} />
            <span>START A PROJECT</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F8FAFC] tracking-tight">
            Project Inquiry & Workflow Scoping
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-xl mx-auto">
            Fill out the details below to discuss your project requirements, scope a custom automation, or ask about timeline and availability.
          </p>
        </motion.div>

        {/* Inquiry Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-[#18181B] border border-[#27272A] rounded-2xl p-6 sm:p-10 shadow-2xl relative"
        >
          {status === "success" ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30 flex items-center justify-center text-[#38BDF8] mx-auto animate-in zoom-in-50 duration-300">
                <CheckCircle2 size={34} />
              </div>
              
              <div className="space-y-2">
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
                  Inquiry Sent Successfully
                </h3>
                <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md mx-auto leading-relaxed">
                  Thanks — your project details have been sent. I’ll review your requirements and get back to you shortly.
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#111113] border border-[#27272A] text-[#A1A1AA] hover:text-[#38BDF8] hover:border-[#38BDF8]/40 text-xs font-medium transition-colors"
                >
                  <RefreshCcw size={14} />
                  <span>Submit Another Project</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Spam Honeypot Field (Hidden from real users, autofill-safe) */}
              <div
                style={{ position: "absolute", left: "-9999px", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="bot_field_honey"
                  id="bot_field_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  value={formData.bot_field_honey}
                  onChange={(e) =>
                    setFormData({ ...formData, bot_field_honey: e.target.value })
                  }
                />
              </div>

              {/* Error Alert Box */}
              {status === "error" && (
                <div className="p-4 rounded-xl bg-red-950/40 border border-red-800/50 flex items-start gap-3 text-red-200 text-xs sm:text-sm">
                  <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <p className="font-medium">{errorMessage}</p>
                    <p className="text-xs text-red-300/80 mt-1">
                      You can also reach out directly via email at{" "}
                      <a
                        href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
                        className="underline font-mono text-white"
                      >
                        {PORTFOLIO_DATA.personal.contactEmail}
                      </a>
                    </p>
                  </div>
                </div>
              )}

              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Your Name <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    disabled={status === "loading"}
                    placeholder="e.g. John Doe"
                    value={formData.name}
                    onChange={(e) => {
                      if (status === "error") setStatus("idle");
                      setFormData({ ...formData, name: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] placeholder-[#52525B] focus:outline-none focus:border-[#38BDF8] transition-colors disabled:opacity-50"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Email Address <span className="text-[#38BDF8]">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    disabled={status === "loading"}
                    placeholder="e.g. john@company.com"
                    value={formData.email}
                    onChange={(e) => {
                      if (status === "error") setStatus("idle");
                      setFormData({ ...formData, email: e.target.value });
                    }}
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] placeholder-[#52525B] focus:outline-none focus:border-[#38BDF8] transition-colors disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Row 2: Service Selection */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  What do you need? <span className="text-[#38BDF8]">*</span>
                </label>
                <select
                  disabled={status === "loading"}
                  value={formData.service}
                  onChange={(e) =>
                    setFormData({ ...formData, service: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors cursor-pointer disabled:opacity-50"
                >
                  <option value="AI Automation">AI Automation & Workflow</option>
                  <option value="Web Development">Web Development / Modern Website</option>
                  <option value="SEO / Local SEO">SEO / Local SEO Optimization</option>
                  <option value="Ecommerce">Ecommerce System / Shopify</option>
                  <option value="Other">Other / General Consultation</option>
                </select>
              </div>

              {/* Row 3: Tell me about your project */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  Tell me about your project <span className="text-[#38BDF8]">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  disabled={status === "loading"}
                  placeholder="Briefly describe what you are looking to build or achieve..."
                  value={formData.projectDetails}
                  onChange={(e) => {
                    if (status === "error") setStatus("idle");
                    setFormData({ ...formData, projectDetails: e.target.value });
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] placeholder-[#52525B] focus:outline-none focus:border-[#38BDF8] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {/* Row 4: What process are you trying to improve? */}
              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                  What process are you trying to improve?
                </label>
                <textarea
                  rows={2}
                  disabled={status === "loading"}
                  placeholder="e.g. Lead intake is manual, customer emails take too long, or our website needs higher conversion..."
                  value={formData.processImprovement}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      processImprovement: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] placeholder-[#52525B] focus:outline-none focus:border-[#38BDF8] transition-colors resize-none disabled:opacity-50"
                />
              </div>

              {/* Row 5: Timeline & Budget */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Target Timeline
                  </label>
                  <select
                    disabled={status === "loading"}
                    value={formData.timeline}
                    onChange={(e) =>
                      setFormData({ ...formData, timeline: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <option value="ASAP">ASAP (Immediate)</option>
                    <option value="1–2 Weeks">1–2 Weeks</option>
                    <option value="This Month">This Month</option>
                    <option value="Flexible">Flexible</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA]">
                    Budget <span className="text-[#71717A] text-[11px] lowercase">(optional)</span>
                  </label>
                  <select
                    disabled={status === "loading"}
                    value={formData.budget}
                    onChange={(e) =>
                      setFormData({ ...formData, budget: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-[#111113] border border-[#27272A] text-sm text-[#F8FAFC] focus:outline-none focus:border-[#38BDF8] transition-colors cursor-pointer disabled:opacity-50"
                  >
                    <option value="Not Sure Yet">Not Sure Yet</option>
                    <option value="Under $500">Under $500</option>
                    <option value="$500–$1,000">$500–$1,000</option>
                    <option value="$1,000–$2,500">$1,000–$2,500</option>
                    <option value="$2,500+">$2,500+</option>
                  </select>
                </div>
              </div>

              {/* Submit Button & Direct Email Note */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#27272A]/80">
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#38BDF8] text-[#111113] font-bold text-sm sm:text-base hover:bg-[#7DD3FC] transition-all duration-200 shadow-lg shadow-[#38BDF8]/20 cursor-pointer disabled:opacity-60 group"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Sending Inquiry...</span>
                    </>
                  ) : (
                    <>
                      <span>Let’s Discuss Your Project</span>
                      <Send
                        size={16}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </>
                  )}
                </button>

                <div className="text-xs text-[#71717A] text-center sm:text-right">
                  <span>Prefer direct email? </span>
                  <a
                    href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
                    className="text-[#38BDF8] hover:underline font-mono"
                  >
                    {PORTFOLIO_DATA.personal.contactEmail}
                  </a>
                </div>
              </div>

            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
};
