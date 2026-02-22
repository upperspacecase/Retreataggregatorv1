"use client";

import { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { retreats } from "@/data/retreats";
import { useSaved } from "@/lib/saved-context";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import { analytics } from "@/lib/analytics";
import {
  SchemaMarkup,
  generateRetreatEventSchema,
  generateBreadcrumbSchema,
} from "@/components/schema-markup";

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
    if (retreat) {
      analytics.retreatViewed(retreat.slug, retreat.name, retreat.location);
    }
  }, [retreat]);

  if (!retreat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">
            Retreat not found
          </h1>
          <p className="text-charcoal-light mb-8">
            Something went sideways. We&rsquo;re looking into it &mdash; try again in a moment.
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

  function handleSave() {
    if (saved) {
      analytics.retreatUnsaved(retreat!.slug);
    } else {
      analytics.retreatSaved(retreat!.slug, retreat!.name, retreat!.location);
    }
    toggleSave(retreat!.slug);
  }

  function handleBookingClick() {
    analytics.ctaClicked("Begin booking", "retreat_detail_bottom");
  }

  return (
    <article className="bg-cream">
      {/* Structured data */}
      <SchemaMarkup
        schema={[
          ...generateRetreatEventSchema(retreat),
          generateBreadcrumbSchema([
            { name: "Home", url: "https://curatedcalm.com" },
            { name: "Retreats", url: "https://curatedcalm.com" },
            {
              name: retreat.name,
              url: `https://curatedcalm.com/retreat/${retreat.slug}`,
            },
          ]),
        ]}
      />

      {/* SEO: set document title */}
      <title>
        {retreat.name} in {retreat.location} | Curated Calm
      </title>
      <meta
        name="description"
        content={`${retreat.tagline} ${retreat.duration} wellness retreat in ${retreat.location}. ${retreat.priceRange}. Maximum ${retreat.maxGuests} guests.`}
      />
      <meta
        property="og:title"
        content={`${retreat.name} — ${retreat.location} | Curated Calm`}
      />
      <meta property="og:description" content={retreat.tagline} />
      <meta property="og:image" content={retreat.images.hero} />
      <meta property="og:type" content="website" />

      {/* Cinematic hero */}
      <section
        className="relative h-[70vh] md:h-[85vh] w-full overflow-hidden"
        aria-label={`${retreat.name} hero image`}
      >
        <div
          className={`absolute inset-0 transition-transform duration-[1200ms] ${
            heroLoaded ? "scale-100" : "scale-105"
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <Image
            src={retreat.images.hero}
            alt={`${retreat.name} — wellness retreat in ${retreat.location}`}
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/20 via-transparent to-charcoal/60" />

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 lg:p-24">
          <div className="max-w-4xl">
            <p
              className={`text-cream/70 text-xs tracking-[0.2em] uppercase mb-3 transition-all duration-[800ms] ${
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
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
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
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
                heroLoaded
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
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

      {/* Quick details bar — visible above the fold for returning visitors */}
      <div className="border-b border-stone/20 bg-linen/50">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-6 text-sm text-charcoal-light">
            <span>{retreat.duration}</span>
            <span className="hidden md:inline text-stone">|</span>
            <span>{retreat.priceRange}</span>
            <span className="hidden md:inline text-stone">|</span>
            <span>Max {retreat.maxGuests} guests</span>
          </div>
          <Link
            href={`/book/${retreat.slug}`}
            onClick={handleBookingClick}
            className="px-6 py-2.5 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-all duration-400 rounded-sm"
            style={{
              transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            Check availability
          </Link>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24">
        {/* Description */}
        <section className="py-16 md:py-24" aria-label="About this retreat">
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
        <section className="pb-16 md:pb-24" aria-label="Photo gallery">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-6 px-6 md:-mx-0 md:px-0 snap-x snap-mandatory">
            {retreat.images.gallery.map((img, i) => (
              <ScrollSection
                key={i}
                delay={i * 80}
                className="flex-shrink-0 w-[80vw] md:w-[45%] snap-center"
              >
                <div className="relative aspect-[3/2] rounded-sm overflow-hidden">
                  <Image
                    src={img}
                    alt={`${retreat.name} — photo ${i + 1} of ${retreat.images.gallery.length}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 768px) 80vw, 45vw"
                  />
                </div>
              </ScrollSection>
            ))}
          </div>
        </section>

        {/* Experience narrative (second person) */}
        <section
          className="py-16 md:py-24 border-t border-stone/30"
          aria-label="What your days look like"
        >
          <ScrollSection>
            <h2 className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-8">
              Your Days Here
            </h2>
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
        <section
          className="py-16 md:py-24 border-t border-stone/30"
          aria-label="Practical details"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {/* What's included */}
            <ScrollSection>
              <div>
                <h2 className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-6">
                  What&rsquo;s Included
                </h2>
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
                  <h2 className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-6">
                    Upcoming Dates
                  </h2>
                  <ul className="space-y-2">
                    {retreat.dates.map((date, i) => (
                      <li key={i} className="text-charcoal-light">
                        {date}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-3">
                    Investment
                  </h3>
                  <p className="font-serif text-2xl text-charcoal">
                    {retreat.priceRange}
                  </p>
                  <p className="text-sm text-warm-gray mt-1">
                    {retreat.priceNote}
                  </p>
                </div>

                <div>
                  <h3 className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-3">
                    Group Size
                  </h3>
                  <p className="text-charcoal-light">
                    Maximum {retreat.maxGuests} guests &mdash; intimate by design
                  </p>
                </div>
              </div>
            </ScrollSection>
          </div>
        </section>

        {/* Booking CTA */}
        <section
          className="py-16 md:py-24 border-t border-stone/30"
          aria-label="Book this retreat"
        >
          <ScrollSection>
            <div className="max-w-xl mx-auto text-center space-y-6">
              <h2 className="font-serif text-3xl md:text-4xl text-charcoal">
                This could be your next chapter.
              </h2>
              <p className="text-charcoal-light leading-relaxed">
                Secure your place at {retreat.name}. No payment today &mdash;
                just a simple reservation to hold your dates. Our process is as
                unhurried as the retreat itself.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Link
                  href={`/book/${retreat.slug}`}
                  onClick={handleBookingClick}
                  className="px-8 py-3.5 bg-charcoal text-cream text-sm tracking-wide hover:bg-charcoal-light transition-all duration-400 rounded-sm"
                  style={{
                    transitionTimingFunction:
                      "cubic-bezier(0.22, 1, 0.36, 1)",
                  }}
                >
                  Reserve your place
                </Link>
                <button
                  onClick={handleSave}
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
                  {saved ? "Saved to your collection" : "Save for later"}
                </button>
              </div>
              <p className="text-xs text-warm-gray pt-2">
                Same price as booking direct. No hidden fees.
              </p>
            </div>
          </ScrollSection>
        </section>
      </div>

      {/* Back navigation */}
      <nav className="border-t border-stone/30 bg-linen" aria-label="Breadcrumb">
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
      </nav>
    </article>
  );
}
