"use client";

import { useScrollReveal } from "@/lib/use-scroll-reveal";

const signals = [
  {
    stat: "42",
    label: "retreats visited in person",
    detail: "before selecting our collection",
  },
  {
    stat: "6",
    label: "in our current collection",
    detail: "quality over quantity, always",
  },
  {
    stat: "94%",
    label: "of guests would return",
    detail: "based on post-retreat surveys",
  },
];

export function TrustSignals() {
  const { ref, isVisible } = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className={`py-12 md:py-16 px-6 md:px-16 lg:px-24 border-y border-stone/20 ${
        isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
      aria-label="Our curation in numbers"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-center">
          {signals.map((signal, i) => (
            <div
              key={signal.label}
              className={isVisible ? "scroll-visible" : "scroll-hidden"}
              style={{ animationDelay: `${i * 100 + 100}ms` }}
            >
              <p className="font-serif text-3xl md:text-4xl text-charcoal mb-1">
                {signal.stat}
              </p>
              <p className="text-sm text-charcoal-light">{signal.label}</p>
              <p className="text-xs text-warm-gray mt-0.5">{signal.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
