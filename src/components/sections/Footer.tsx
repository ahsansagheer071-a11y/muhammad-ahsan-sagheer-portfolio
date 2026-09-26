"use client";

import React from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";
import { ArrowRight, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const Footer = () => {
  const activePlatforms = PORTFOLIO_DATA.contactLinks.filter(
    (link) => link.enabled && link.href && link.label !== "Email"
  );

  const activeSocials = PORTFOLIO_DATA.socials.filter(
    (social) => social.enabled && social.url
  );

  return (
    <footer id="contact" className="w-full bg-[#111113] border-t border-[#27272A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Main Connect Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end pb-16 border-b border-[#27272A]/80">

          {/* Left: "Say Hello!" & Email Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-6"
          >
            <span className="text-xs font-mono uppercase tracking-widest text-[#71717A]">
              {PORTFOLIO_DATA.finalCta.connectLabel}
            </span>
            <h2 className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#F8FAFC] tracking-tight">
              {PORTFOLIO_DATA.finalCta.connectTitle}
            </h2>

            <div className="pt-2">
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
                onClick={() => trackEvent("get_in_touch_click", { location: "footer_say_hello" })}
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#38BDF8] text-[#0A0A0C] font-semibold text-base hover:bg-[#7DD3FC] transition-colors group shadow-lg shadow-[#38BDF8]/10"
              >
                <Mail size={18} />
                <span>{PORTFOLIO_DATA.finalCta.ctaButton}</span>
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Info & Platform Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-5 space-y-4"
          >
            <p className="text-xs font-mono uppercase text-[#71717A] tracking-wider">
              Direct Inquiries & Collaborations:
            </p>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.contactEmail}`}
              onClick={() => trackEvent("get_in_touch_click", { location: "footer_email_link" })}
              className="text-lg sm:text-xl font-bold text-[#F8FAFC] hover:text-[#38BDF8] transition-colors inline-flex items-center gap-2 group"
            >
              <Mail size={18} className="text-[#38BDF8]" />
              <span>{PORTFOLIO_DATA.personal.contactEmail}</span>
            </a>

            {/* Platform Links (only renders verified/enabled profiles) */}
            {activePlatforms.length > 0 && (
              <div className="pt-3 flex flex-wrap gap-3">
                {activePlatforms.map((platform) => (
                  <a
                    key={platform.label}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#A1A1AA] hover:text-[#38BDF8] border border-[#27272A] hover:border-[#38BDF8]/50 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {platform.label === "LinkedIn" && <Linkedin size={13} />}
                    {platform.label === "GitHub" && <Github size={13} />}
                    {platform.label !== "LinkedIn" && platform.label !== "GitHub" && (
                      <ExternalLink size={13} />
                    )}
                    <span>{platform.label}</span>
                  </a>
                ))}
              </div>
            )}
          </motion.div>

        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#71717A]">
          <p>{PORTFOLIO_DATA.personal.copyright}</p>

          <div className="flex items-center gap-6">
            <span>{PORTFOLIO_DATA.personal.location}</span>
            {activeSocials.length > 0 &&
              activeSocials.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#38BDF8] transition-colors font-medium"
                >
                  {social.label}
                </a>
              ))}
          </div>
        </div>

      </div>
    </footer>
  );
};
