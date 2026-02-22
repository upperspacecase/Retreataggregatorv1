"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

export function CurationStatement() {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section
      ref={ref}
      className={`py-20 md:py-32 px-6 md:px-16 lg:px-24 ${
        isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
    >
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p
          className={`text-warm-gray text-xs tracking-[0.2em] uppercase ${
            isVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          Our Approach
        </p>
        <h2
          className={`font-serif text-2xl md:text-3xl lg:text-4xl text-charcoal leading-snug ${
            isVisible ? "scroll-visible-delay-1" : "scroll-hidden"
          }`}
        >
          We visit every retreat we recommend.
          <br />
          Not hundreds. Just the ones worth your time.
        </h2>
        <p
          className={`text-charcoal-light leading-relaxed max-w-lg mx-auto ${
            isVisible ? "scroll-visible-delay-2" : "scroll-hidden"
          }`}
        >
          Every place in our collection has been personally visited, carefully
          considered, and chosen because it offers something genuine &mdash; not
          because it paid to be here. We believe a great retreat is one you
          remember not for its amenities, but for how it changed the texture of
          your days.
        </p>
      </div>
    </section>
  );
}
