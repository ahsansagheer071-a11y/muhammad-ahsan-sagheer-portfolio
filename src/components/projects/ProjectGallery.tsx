"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { GalleryItem } from "@/data/projectsData";
import {
  Layers,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectGalleryProps {
  gallery: GalleryItem[];
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ gallery }) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleOpen = (idx: number) => {
    setSelectedIndex(idx);
  };

  const handleClose = () => {
    setSelectedIndex(null);
  };

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev > 0 ? prev - 1 : gallery.length - 1
    );
  }, [selectedIndex, gallery.length]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev !== null && prev < gallery.length - 1 ? prev + 1 : 0
    );
  }, [selectedIndex, gallery.length]);

  // Handle keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        handlePrev();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    // Prevent background scrolling while modal is open
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedIndex, handlePrev, handleNext]);

  if (!gallery || gallery.length === 0) return null;

  return (
    <section className="space-y-6">
      <div className="flex items-center gap-2 text-[#38BDF8] text-xs font-mono uppercase tracking-wider">
        <Layers size={15} />
        <span>Visual Gallery &amp; Deliverables</span>
      </div>

      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#F8FAFC]">
            Project Interface &amp; Deliverables
          </h2>
          <p className="text-xs sm:text-sm text-[#A1A1AA] mt-1">
            Click on any asset to inspect high-resolution details in full-screen view.
          </p>
        </div>
        <span className="text-xs font-mono text-[#71717A] bg-[#18181B] px-3 py-1.5 rounded-lg border border-[#27272A] self-start sm:self-auto">
          {gallery.length} High-Res {gallery.length === 1 ? "Asset" : "Assets"}
        </span>
      </div>

      {/* Gallery Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {gallery.map((item, idx) => (
          <div
            key={idx}
            onClick={() => handleOpen(idx)}
            className="rounded-2xl bg-[#18181B] border border-[#27272A] overflow-hidden group hover:border-[#38BDF8]/60 hover:shadow-2xl hover:shadow-[#38BDF8]/10 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Visual Container */}
            <div className="relative w-full aspect-[16/10] bg-[#111113] overflow-hidden">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="px-4 py-2 rounded-full bg-[#111113]/90 backdrop-blur-md border border-[#38BDF8]/60 text-xs font-semibold text-[#F8FAFC] flex items-center gap-2 transform group-hover:scale-105 transition-transform">
                  <Maximize2 size={13} className="text-[#38BDF8]" />
                  <span>Click to Expand</span>
                </div>
              </div>

              {/* Asset Index Badge */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded-md bg-[#111113]/85 backdrop-blur-md border border-[#27272A] text-[11px] font-mono text-[#38BDF8]">
                  0{idx + 1}
                </span>
              </div>
            </div>

            {/* Asset Caption Details */}
            <div className="p-5 sm:p-6 space-y-1.5 bg-[#18181B] border-t border-[#27272A]/80">
              <h4 className="font-heading text-base font-bold text-[#F8FAFC] group-hover:text-[#38BDF8] transition-colors flex items-center justify-between">
                <span>{item.title}</span>
                <Maximize2 size={14} className="text-[#71717A] group-hover:text-[#38BDF8] transition-colors shrink-0" />
              </h4>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                {item.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-[#0A0A0D]/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 select-none"
            onClick={handleClose}
          >
            {/* Modal Top Bar */}
            <div
              className="w-full max-w-7xl mx-auto flex items-center justify-between z-10 pt-2"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="space-y-0.5">
                <span className="text-xs font-mono text-[#38BDF8]">
                  Asset {selectedIndex + 1} of {gallery.length}
                </span>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#F8FAFC] truncate max-w-md sm:max-w-xl">
                  {gallery[selectedIndex].title}
                </h3>
              </div>

              <button
                onClick={handleClose}
                className="w-11 h-11 rounded-full bg-[#18181B] border border-[#27272A] text-[#A1A1AA] hover:text-[#F8FAFC] hover:border-[#38BDF8] hover:bg-[#202025] flex items-center justify-center transition-all cursor-pointer shadow-lg"
                aria-label="Close image preview"
              >
                <X size={20} />
              </button>
            </div>

            {/* Center Stage: Image and Left/Right Buttons */}
            <div
              className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-center my-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              {gallery.length > 1 && (
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 z-20 w-12 h-12 rounded-full bg-[#18181B]/90 backdrop-blur-md border border-[#27272A] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
              )}

              {/* Main Image Stage */}
              <div className="relative w-full h-[65vh] sm:h-[75vh] max-h-[820px] flex items-center justify-center">
                <Image
                  src={gallery[selectedIndex].imageSrc}
                  alt={gallery[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>

              {/* Next Button */}
              {gallery.length > 1 && (
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 z-20 w-12 h-12 rounded-full bg-[#18181B]/90 backdrop-blur-md border border-[#27272A] text-[#F8FAFC] hover:border-[#38BDF8] hover:text-[#38BDF8] hover:scale-105 active:scale-95 flex items-center justify-center transition-all cursor-pointer shadow-2xl"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              )}
            </div>

            {/* Modal Bottom Caption Bar */}
            <div
              className="w-full max-w-3xl mx-auto text-center z-10 pb-2 space-y-1"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="text-xs sm:text-sm text-[#CBD5E1]">
                {gallery[selectedIndex].caption}
              </p>
              <p className="text-[11px] font-mono text-[#71717A]">
                Press Esc or click outside to close • Use ← / → keys to navigate
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
