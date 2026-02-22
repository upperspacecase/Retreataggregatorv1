"use client";

import { useState } from "react";
import { EditorialHero } from "@/components/editorial-hero";
import { CurationStatement } from "@/components/curation-statement";
import { IntentFilter } from "@/components/intent-filter";
import { RetreatCard } from "@/components/retreat-card";
import { retreats, type Intent } from "@/data/retreats";

export default function Home() {
  const [selectedIntent, setSelectedIntent] = useState<Intent | null>(null);

  const filtered = selectedIntent
    ? retreats.filter((r) => r.intents.includes(selectedIntent))
    : retreats;

  return (
    <>
      <EditorialHero />

      <CurationStatement />

      <IntentFilter
        selected={selectedIntent}
        onSelect={setSelectedIntent}
      />

      {/* Retreats listing */}
      <section className="px-6 md:px-16 lg:px-24 pb-32">
        <div className="max-w-6xl mx-auto space-y-24 md:space-y-32">
          {filtered.length > 0 ? (
            filtered.map((retreat, i) => (
              <RetreatCard key={retreat.slug} retreat={retreat} index={i} />
            ))
          ) : (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-charcoal-light italic">
                Nothing quite fits those criteria.
              </p>
              <p className="text-warm-gray mt-3">
                Try broadening your search, or let us suggest something
                unexpected.
              </p>
              <button
                onClick={() => setSelectedIntent(null)}
                className="mt-6 text-sm text-ochre hover:text-terracotta border-b border-ochre/40 hover:border-terracotta transition-colors duration-300 pb-0.5"
              >
                Show all retreats
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone/40 bg-linen">
        <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-24 py-16 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-4">
                Curated Calm
              </h3>
              <p className="text-charcoal-light text-sm leading-relaxed max-w-xs">
                A small collection of wellness retreats chosen by people who
                believe rest is not a luxury &mdash; it&rsquo;s a practice.
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4">
                Explore
              </p>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li>
                  <a
                    href="#"
                    className="hover:text-charcoal transition-colors duration-300"
                  >
                    All Retreats
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-charcoal transition-colors duration-300"
                  >
                    Our Curation Process
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-charcoal transition-colors duration-300"
                  >
                    Travel Circle Membership
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4">
                Connect
              </p>
              <ul className="space-y-2 text-sm text-charcoal-light">
                <li>
                  <a
                    href="#"
                    className="hover:text-charcoal transition-colors duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-charcoal transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-charcoal transition-colors duration-300"
                  >
                    For Retreat Operators
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-stone/30 text-xs text-warm-gray">
            <p>&copy; 2026 Curated Calm. Made with care, not urgency.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
