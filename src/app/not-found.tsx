import React from "react";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#111113] text-[#F8FAFC] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-md space-y-6">
        <span className="inline-block font-mono text-5xl font-extrabold text-[#38BDF8]">
          404
        </span>
        <h1 className="font-heading text-2xl sm:text-3xl font-bold text-[#F8FAFC]">
          Project or Page Not Found
        </h1>
        <p className="text-sm text-[#A1A1AA] leading-relaxed">
          The project case study or page you are looking for doesn’t exist or has moved.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#38BDF8] text-[#111113] font-bold text-sm hover:bg-[#0ea5e9] transition-all"
          >
            <Home size={15} />
            <span>Go to Home</span>
          </Link>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#18181B] border border-[#27272A] text-[#F8FAFC] font-semibold text-sm hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all"
          >
            <ArrowLeft size={15} />
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
