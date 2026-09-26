"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PORTFOLIO_DATA, ProjectItem } from "@/data/portfolioData";
import { ChevronLeft, ChevronRight, ExternalLink, Code2, Sparkles, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export const FeaturedProjects = () => {
  const projects = PORTFOLIO_DATA.featuredProjects;
  const sliderRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollBounds = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    if (slider) {
      slider.addEventListener("scroll", checkScrollBounds);
      checkScrollBounds();
      return () => slider.removeEventListener("scroll", checkScrollBounds);
    }
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.querySelector<HTMLElement>(".project-card")?.offsetWidth || 420;
      const scrollAmount = direction === "left" ? -(cardWidth + 24) : cardWidth + 24;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="portfolio" className="relative w-full py-20 md:py-28 bg-[#111113] overflow-hidden">
      
      {/* Top Decorative Wavy Line (Fixed small size) */}
      <div className="w-full flex justify-center mb-12 px-6">
        <svg
          style={{ width: "180px", height: "18px", maxWidth: "180px" }}
          className="text-[#38BDF8]/40"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
        >
          <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Header & Slider Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#38BDF8] tracking-tight">
              Featured Projects
            </h2>
            <p className="text-[#A1A1AA] text-sm sm:text-base mt-2 max-w-xl">
              Browse horizontally through intelligent automations and scalable web architectures.
            </p>
          </motion.div>

          {/* Previous / Next Arrow Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => handleScroll("left")}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollLeft
                  ? "border-[#27272A] bg-[#18181B] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 active:scale-95"
                  : "border-[#27272A]/40 bg-[#18181B]/40 text-[#71717A]/40 cursor-not-allowed"
              }`}
              aria-label="Previous project"
            >
              <ChevronLeft size={22} />
            </button>

            <button
              onClick={() => handleScroll("right")}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-200 ${
                canScrollRight
                  ? "border-[#27272A] bg-[#18181B] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 active:scale-95"
                  : "border-[#27272A]/40 bg-[#18181B]/40 text-[#71717A]/40 cursor-not-allowed"
              }`}
              aria-label="Next project"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>

      </div>

      {/* Horizontal Slider Track */}
      <div className="w-full relative">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-6 sm:px-10 lg:px-16 pb-6 pt-2 select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          style={{ cursor: "grab" }}
        >
          {projects.map((project: ProjectItem, index: number) => (
            <Link
              key={project.id}
              href={`/projects/${project.slug}`}
              onClick={() =>
                trackEvent("project_card_click", {
                  slug: project.slug,
                  title: project.title,
                })
              }
              className="project-card group snap-start shrink-0 w-[84vw] sm:w-[380px] md:w-[420px] lg:w-[460px] flex flex-col space-y-4 focus:outline-none"
            >
              {/* Project Mockup Card */}
              <div
                style={{ backgroundColor: "#18181B", borderColor: "#27272A" }}
                className="w-full h-[340px] sm:h-[380px] rounded-2xl bg-[#18181B] border border-[#27272A] overflow-hidden relative flex flex-col justify-between p-6 sm:p-7 transition-all duration-300 group-hover:border-[#38BDF8]/60 group-hover:shadow-2xl group-hover:shadow-[#38BDF8]/10"
              >
                {/* Visual Background if image exists */}
                {project.imageSrc && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 group-hover:scale-105 transition-all duration-500 overflow-hidden pointer-events-none">
                    <Image
                      src={project.imageSrc}
                      alt={project.title}
                      fill
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#18181B] via-[#18181B]/80 to-transparent" />
                  </div>
                )}

                {/* Decorative background glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#38BDF8]/5 rounded-full blur-3xl group-hover:bg-[#38BDF8]/15 transition-colors pointer-events-none" />

                {/* Mockup Top Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-[#27272A]/80 pb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27272A] group-hover:bg-[#38BDF8]/50 transition-colors"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27272A]"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27272A]"></span>
                  </div>
                  <span className="text-[11px] font-mono text-[#71717A] group-hover:text-[#38BDF8] transition-colors uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>

                {/* Mockup Center Body */}
                <div className="relative z-10 my-auto py-4 flex flex-col items-center justify-center text-center space-y-3">
                  <div className="w-14 h-14 rounded-2xl bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#38BDF8] group-hover:scale-110 group-hover:border-[#38BDF8] transition-all duration-300 shadow-lg">
                    <Code2 size={26} />
                  </div>
                  <div className="space-y-1.5 max-w-xs">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#38BDF8]/10 text-[#38BDF8] text-[11px] font-semibold border border-[#38BDF8]/20">
                      <Sparkles size={11} />
                      <span>Project 0{index + 1}</span>
                    </div>
                    <p className="text-xs text-[#A1A1AA] leading-relaxed line-clamp-2">
                      {project.summary}
                    </p>
                  </div>
                </div>

                {/* Mockup Bottom Tags */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-[#27272A]/80">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags?.slice(0, 3).map((tag: string) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2 py-0.5 rounded bg-[#111113] border border-[#27272A] text-[#A1A1AA] group-hover:border-[#38BDF8]/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#111113] border border-[#27272A] flex items-center justify-center text-[#71717A] group-hover:text-[#38BDF8] group-hover:border-[#38BDF8] group-hover:scale-110 transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>

              {/* Project Title & Category Meta */}
              <div className="px-1">
                <h3 className="font-heading text-lg sm:text-xl font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors flex items-center justify-between">
                  <span>{project.title}</span>
                  <ArrowUpRight size={16} className="text-[#71717A] group-hover:text-[#38BDF8] opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </h3>
                <p className="text-xs sm:text-sm text-[#71717A] mt-0.5 font-medium">
                  {project.category}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
