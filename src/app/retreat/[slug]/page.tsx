"use client";

import { use, useEffect, useState } from "react";
import Link from "next/link";
import { retreats } from "@/data/retreats";
import { useSaved } from "@/lib/saved-context";
import { useScrollReveal } from "@/lib/use-scroll-reveal";

function ScrollSection({
  children,
  className = "",
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const { ref, isVisible } = useScrollReveal(0.15);
  return (
    <div
      ref={ref}
      className={`${isVisible ? "scroll-visible" : "scroll-hidden"} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function RetreatDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const retreat = retreats.find((r) => r.slug === slug);
  const { isSaved, toggleSave } = useSaved();
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  if (!retreat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">
            Retreat not found
          </h1>
          <p className="text-charcoal-light mb-8">
            Something went sideways. We&rsquo;re looking into it.
          </p>
          <Link
            href="/"
            className="text-sm text-ochre hover:text-terracotta border-b border-ochre/40 hover:border-terracotta transition-colors duration-300 pb-0.5"
          >
            Return home
          </Link>
        </div>
      </div>
    );
  }

  const saved = isSaved(retreat.slug);

  return (
    <article className="bg-cream">
      {/* Cinematic hero */}
      <section className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-[1200ms]"
          style={{
            backgroundImage: `url('${retreat.images.hero}')`,
            transform: heroLoaded ? "scale(1)" : "scale(1.05)",
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/60" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
          <div className="max-w-4xl">
            <p
              className={`text-cream/70 text-xs tracking-[0.2em] uppercase mb-3 transition-all duration-[800ms] ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{
                transitionDelay: "200ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {retreat.location} &middot; {retreat.duration}
            </p>
            <h1
              className={`font-serif text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.1] mb-4 transition-all duration-[900ms] ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: "400ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {retreat.name}
            </h1>
            <p
              className={`font-serif text-lg md:text-xl text-cream/85 italic max-w-2xl transition-all duration-[900ms] ${
                heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: "600ms",
                transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              {retreat.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Description */}
        <section className="py-16 md:py-24">
          <div className="max-w-3xl">
            {retreat.description.map((paragraph, i) => (
              <ScrollSection key={i} delay={i * 100}>
                <p className="text-charcoal-light text-lg leading-[1.85] mb-6 last:mb-0">
                  {paragraph}
                </p>
              </ScrollSection>
            ))}
          </div>
        </section>

        {/* Gallery strip */}
        <section className="pb-16 md:pb-24">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-0 md:px-0 snap-x snap-mandatory">
            {retreat.images.gallery.map((img, i) => (
              <ScrollSection
                key={i}
                delay={i * 80}
                className="flex-shrink-0 w-[80vw] md:w-[45%] snap-center"
              >
                <div
                  className="aspect-[3/2] bg-cover bg-center rounded-sm"
                  style={{ backgroundImage: `url('${img}')` }}
                />
              </ScrollSection>
            ))}
          </div>
        </section>

        {/* Experience narrative (second person) */}
        <section className="py-16 md:py-24 border-t border-stone/30">
          <ScrollSection>
            <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-8">
              Your Days Here
            </p>
          </ScrollSection>
          <div className="max-w-3xl space-y-8">
            {retreat.experience.map((paragraph, i) => (
              <ScrollSection key={i} delay={i * 80}>
                <p className="font-serif text-xl md:text-2xl text-charcoal leading-[1.6] italic">
                  {paragraph}
                </p>
              </ScrollSection>
            ))}
          </div>
        </section>

        {/* Practical details */}
        <section className="py-16 md:py-24 border-t border-stone/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* What's included */}
            <ScrollSection>
              <div>
                <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-6">
                  What&rsquo;s Included
                </p>
                <ul className="space-y-3">
                  {retreat.includes.map((item, i) => (
                    <li
                      key={i}
                      className="text-charcoal-light flex items-start gap-3"
                    >
                      <span className="w-1 h-1 rounded-full bg-ochre mt-2.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollSection>

            {/* Dates and pricing */}
            <ScrollSection delay={100}>
              <div className="space-y-8">
                <div>
                  <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-6">
                    Upcoming Dates
                  </p>
                  <ul className="space-y-2">
                    {retreat.dates.map((date, i) => (
                      <li key={i} className="text-charcoal-light">
                        {date}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-3">
                    Investment
                  </p>
                  <p className="font-serif text-2xl text-charcoal">
                    {retreat.priceRange}
                  </p>
                  <p className="text-sm text-warm-gray mt-1">
                    {retreat.priceNote}
                  </p>
                </div>

                <div>
                  <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-3">
                    Group Size
                  </p>
                  <p className="text-charcoal-light">
                    Maximum {retreat.maxGuests} guests
                  </p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </section>

        {/* Booking CTA */}
        <section className="py-16 md:py-24 border-t border-stone/30">
          <ScrollSection>
            <div className="max-w-xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                Ready to go?
              </h2>
              <p className="text-charcoal-light">
                Secure your place at {retreat.name}. Our booking process is
                simple and unhurried &mdash; just like the retreat itself.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href={`/book/${retreat.slug}`}
                  className="px-8 py-3.5 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-all duration-400 rounded-sm"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  Begin booking
                </Link>
                <button
                  onClick={() => toggleSave(retreat.slug)}
                  className="flex items-center gap-2 px-6 py-3.5 text-sm text-charcoal-light hover:text-charcoal border border-stone hover:border-charcoal-light transition-all duration-300 rounded-sm"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill={saved ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className={saved ? "text-ochre" : ""}
                  >
                    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                  </svg>
                  {saved ? "Saved" : "Save for later"}
                </button>
              </div>
            </div>
          </ScrollSection>
        </section>
      </div>

      {/* Back link */}
      <div className="border-t border-stone/30 bg-linen">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-12">
          <Link
            href="/"
            className="text-sm text-warm-gray hover:text-charcoal-light transition-colors duration-300 flex items-center gap-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to all retreats
          </Link>
        </div>
      </div>
    </article>
  );
}
