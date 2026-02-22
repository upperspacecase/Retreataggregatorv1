"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSaved } from "@/lib/saved-context";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const { saved } = useSaved();

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 60);
      setHidden(y > 300 && y > lastY);
      setLastY(y);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]"
          : "bg-transparent"
      }`}
      style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl tracking-tight text-charcoal hover:text-charcoal-light transition-colors duration-300"
        >
          Curated Calm
        </Link>

        <div className="flex items-center gap-6 md:gap-8">
          <Link
            href="/saved"
            className="relative text-sm tracking-wide text-charcoal-light hover:text-charcoal transition-colors duration-300"
          >
            Saved
            {saved.length > 0 && (
              <span className="absolute -top-1.5 -right-3.5 w-4 h-4 rounded-full bg-ochre text-cream text-[10px] flex items-center justify-center font-medium">
                {saved.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
