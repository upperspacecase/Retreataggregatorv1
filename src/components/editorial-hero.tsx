"use client";

import { useEffect, useState } from "react";

export function EditorialHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80')",
          transform: loaded ? "scale(1)" : "scale(1.05)",
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      />

      {/* Warm gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/30 via-charcoal/10 to-charcoal/50" />

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end pb-20 md:pb-28 px-6 md:px-16 lg:px-24 max-w-6xl">
        <h1
          className={`font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-6 transition-all duration-[900ms] ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "300ms",
          }}
        >
          The places that change
          <br />
          how you breathe.
        </h1>

        <p
          className={`text-cream/80 text-lg md:text-xl max-w-xl leading-relaxed transition-all duration-[900ms] ${
            loaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            transitionDelay: "500ms",
          }}
        >
          A small, carefully chosen collection of retreats for people who
          know that rest is not a luxury.
        </p>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-[900ms] ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "800ms" }}
      >
        <span className="text-cream/50 text-xs tracking-[0.2em] uppercase">
          Explore
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-cream/40 to-transparent" />
      </div>
    </section>
  );
}
