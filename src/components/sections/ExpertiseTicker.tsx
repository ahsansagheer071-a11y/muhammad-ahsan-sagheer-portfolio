"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/data/portfolioData";

export const ExpertiseTicker = () => {
  const words = PORTFOLIO_DATA.expertiseTicker.items;
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = words[currentWordIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#111113] border-b border-[#27272A]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 text-center">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-medium tracking-widest uppercase text-[#71717A] mb-4"
        >
          {PORTFOLIO_DATA.expertiseTicker.label}
        </motion.p>

        {/* Large Dynamic Headline with Typewriter Cursor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center justify-center min-h-[80px] sm:min-h-[120px]"
        >
          <h2 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[#F8FAFC] tracking-tight">
            {currentText}
            <span className="text-[#38BDF8] inline-block animate-pulse font-light ml-1">
              |
            </span>
          </h2>
        </motion.div>
      </div>
    </section>
  );
};
