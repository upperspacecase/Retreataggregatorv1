"use client";

import { intents, type Intent } from "@/data/retreats";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

interface IntentFilterProps {
  selected: Intent | null;
  onSelect: (intent: Intent | null) => void;
}

export function IntentFilter({ selected, onSelect }: IntentFilterProps) {
  const { ref, isVisible } = useScrollReveal(0.3);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-6 md:px-16 lg:px-24 ${
        isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-warm-gray text-sm tracking-[0.15em] uppercase mb-4">
          What are you seeking?
        </p>
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {intents.map((intent, i) => {
            const isActive = selected === intent.label;
            return (
              <button
                key={intent.label}
                onClick={() =>
                  onSelect(isActive ? null : intent.label)
                }
                className={`group relative px-6 py-3 text-base md:text-lg transition-all duration-400 ${
                  isVisible ? "scroll-visible" : "scroll-hidden"
                }`}
                style={{
                  animationDelay: `${i * 80 + 100}ms`,
                  transitionTimingFunction:
                    "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
                title={intent.description}
              >
                <span
                  className={`font-serif transition-colors duration-300 ${
                    isActive
                      ? "text-charcoal"
                      : "text-warm-gray hover:text-charcoal-light"
                  }`}
                >
                  {intent.label}
                </span>
                <span
                  className={`absolute bottom-1.5 left-6 right-6 h-px transition-all duration-400 ${
                    isActive
                      ? "bg-ochre scale-x-100"
                      : "bg-stone scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                />
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
