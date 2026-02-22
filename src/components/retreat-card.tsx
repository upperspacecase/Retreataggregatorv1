"use client";

import Link from "next/link";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { useSaved } from "@/lib/saved-context";
import type { Retreat } from "@/data/retreats";

interface RetreatCardProps {
  retreat: Retreat;
  index: number;
}

export function RetreatCard({ retreat, index }: RetreatCardProps) {
  const { ref, isVisible } = useScrollReveal(0.15);
  const { isSaved, toggleSave } = useSaved();
  const saved = isSaved(retreat.slug);
  const isEven = index % 2 === 0;

  return (
    <article
      ref={ref}
      className={`${isVisible ? "scroll-visible" : "scroll-hidden"}`}
      style={{ animationDelay: "100ms" }}
    >
      <div
        className={`flex flex-col ${
          isEven ? "md:flex-row" : "md:flex-row-reverse"
        } gap-8 md:gap-12 lg:gap-16 items-center`}
      >
        {/* Image */}
        <Link
          href={`/retreat/${retreat.slug}`}
          className="w-full md:w-3/5 group"
        >
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-[3/2]">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[600ms] group-hover:scale-[1.02]"
              style={{
                backgroundImage: `url('${retreat.images.hero}')`,
                transitionTimingFunction:
                  "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/10 transition-colors duration-[400ms]" />

            {/* Location overlay on hover */}
            <div
              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-charcoal/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
              style={{
                transitionTimingFunction:
                  "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span className="text-cream/90 text-sm tracking-[0.1em] uppercase">
                {retreat.location}
              </span>
            </div>
          </div>
        </Link>

        {/* Content */}
        <div className="w-full md:w-2/5 space-y-5">
          <div
            className={`${
              isVisible ? "scroll-visible-delay-1" : "scroll-hidden"
            }`}
          >
            <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-2">
              {retreat.country} &middot; {retreat.duration}
            </p>
            <Link href={`/retreat/${retreat.slug}`}>
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal hover:text-charcoal-light transition-colors duration-300 leading-tight">
                {retreat.name}
              </h2>
            </Link>
          </div>

          <p
            className={`font-serif text-lg text-charcoal-light italic leading-relaxed ${
              isVisible ? "scroll-visible-delay-2" : "scroll-hidden"
            }`}
          >
            {retreat.tagline}
          </p>

          <div
            className={`flex items-center gap-4 pt-2 ${
              isVisible ? "scroll-visible-delay-3" : "scroll-hidden"
            }`}
          >
            <Link
              href={`/retreat/${retreat.slug}`}
              className="text-sm tracking-wide text-charcoal-light hover:text-charcoal border-b border-stone hover:border-charcoal transition-all duration-300 pb-0.5"
            >
              Explore this retreat
            </Link>

            <button
              onClick={() => toggleSave(retreat.slug)}
              className="group/save flex items-center gap-1.5 text-sm text-warm-gray hover:text-ochre transition-colors duration-300"
              aria-label={saved ? "Remove from saved" : "Save for later"}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill={saved ? "currentColor" : "none"}
                stroke="currentColor"
                strokeWidth="1.5"
                className={`transition-all duration-300 ${
                  saved ? "text-ochre scale-110" : ""
                }`}
                style={{
                  transitionTimingFunction:
                    "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              >
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
              <span className="hidden md:inline">
                {saved ? "Saved" : "Save for later"}
              </span>
            </button>
          </div>

          <p className="text-xs text-warm-gray">
            From {retreat.priceRange}
          </p>
        </div>
      </div>
    </article>
  );
}
