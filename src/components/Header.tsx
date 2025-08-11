"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";

const NAV_LINKS = [
  { href: "#tools", label: "Travel Insurance" },
  { href: "#tools", label: "Flights" },
  { href: "#tools", label: "Hotels" },
  { href: "/blog", label: "Latest Updates" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    const isScrolled = window.scrollY > 6;
    setScrolled(isScrolled);
  }, []);

  useEffect(() => {
    // Set initial state
    handleScroll();

    // Fix: Change number to NodeJS.Timeout for proper typing
    let timeoutId: NodeJS.Timeout | null = null;
    const throttledScroll = () => {
      if (timeoutId !== null) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 10);
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", throttledScroll);
      if (timeoutId !== null) clearTimeout(timeoutId);
    };
  }, [handleScroll]);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/80 backdrop-blur border-b transition-shadow ${
        scrolled ? "shadow-sm" : "shadow-none"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 h-20 md:h-24 flex items-center gap-4">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 shrink-0 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
          aria-label="VisaInsider Home"
        >
          <Image
            src="/Logo_VisaInsider.svg"
            alt="VisaInsider"
            width={500}
            height={120}
            className="h-20 md:h-24 w-auto object-contain"
            priority
          />
        </Link>

        <div className="flex-1" />

        {/* Navigation */}
        <nav
          className="hidden md:flex items-center gap-7 text-[15px] text-slate-700"
          role="navigation"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="hover:text-slate-900 focus:text-slate-900 focus:outline-none focus:underline transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Sign in button */}
        <Link
          href="/signin"
          className="ml-4 inline-flex items-center rounded-full px-6 py-2.5 text-sm font-semibold
                     bg-gradient-to-r from-blue-600 to-blue-700 text-white 
                     hover:from-blue-700 hover:to-blue-800 focus:from-blue-700 focus:to-blue-800
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                     shadow-lg shadow-blue-600/25 hover:shadow-blue-700/30
                     transform hover:scale-105 transition-all duration-200"
        >
          Sign in
        </Link>
      </div>
    </header>
  );
}