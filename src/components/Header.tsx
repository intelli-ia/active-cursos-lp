"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { WA_LINK, CTA_LABEL } from "@/lib/constants";

export default function Header() {
  const [visible, setVisible] = useState(false);
  const [darkBg, setDarkBg] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero");
      if (!hero) return;
      const pastHero = hero.getBoundingClientRect().bottom <= 0;
      setVisible(pastHero);

      if (pastHero) {
        const navbarY = 40;
        const sections = document.querySelectorAll("section, footer");
        let isDark = true;

        for (const section of Array.from(sections)) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= navbarY && rect.bottom > navbarY) {
            const bg = window.getComputedStyle(section).backgroundColor;
            const match = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?\)/);
            if (match) {
              const luminance = (+match[1] * 299 + +match[2] * 587 + +match[3] * 114) / 1000;
              isDark = luminance < 150;
            }
            break;
          }
        }
        setDarkBg(isDark);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-5 left-0 right-0 z-50 flex justify-center px-4 transition-[opacity,transform] duration-500 ease-out ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <div
        style={{ WebkitBackdropFilter: "blur(14px)", backdropFilter: "blur(14px)" }}
        className={`flex items-center justify-center sm:justify-between gap-6 rounded-full px-1.5 sm:pl-5 sm:pr-1.5 py-1.5 shadow-lg w-fit sm:w-full sm:max-w-xl transform-gpu border transition-colors duration-300 ${
          darkBg ? "bg-white/5 border-white/10" : "bg-black/5 border-black/10"
        }`}
      >
        {/* Wordmark */}
        <Link href="/" className="hidden sm:flex items-center flex-shrink-0">
          <span
            className={`font-serif italic text-[15px] tracking-wide leading-none transition-colors duration-300 ${
              darkBg ? "text-white" : "text-black"
            }`}
          >
            Active{" "}
            <span className="text-[#CF9D2F] not-italic font-sora font-semibold text-[11px] align-middle uppercase tracking-[0.15em]">
              Cursos
            </span>
          </span>
        </Link>

        {/* CTA */}
        <Link
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 bg-[#CF9D2F] hover:bg-[#B8891A] text-black font-semibold text-xs rounded-full px-4 py-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(207,157,47,0.4)] active:translate-y-0.5 whitespace-nowrap"
        >
          {CTA_LABEL}
        </Link>
      </div>
    </header>
  );
}
