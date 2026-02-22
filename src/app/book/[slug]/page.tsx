"use client";

import { use, useState } from "react";
import Link from "next/link";
import { retreats } from "@/data/retreats";

type Step = "details" | "confirmation";

export default function BookRetreat({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const retreat = retreats.find((r) => r.slug === slug);
  const [step, setStep] = useState<Step>("details");
  const [selectedDate, setSelectedDate] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  if (!retreat) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream pt-20">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-charcoal mb-4">
            Retreat not found
          </h1>
          <Link
            href="/"
            className="text-sm text-ochre hover:text-terracotta border-b border-ochre/40 pb-0.5"
          >
            Return home
          </Link>
        </div>
      </div>
    );
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-cream pt-28 md:pt-36 pb-20">
        <div className="max-w-xl mx-auto px-6 md:px-12 text-center">
          <div className="animate-fade-up">
            <div className="w-12 h-12 rounded-full bg-sage/30 flex items-center justify-center mx-auto mb-8">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="text-sage-dark"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">
              You&rsquo;re going.
            </h1>
            <p className="text-charcoal-light text-lg mb-2">
              {retreat.name} &middot; {selectedDate}
            </p>
            <p className="text-charcoal-light leading-relaxed mb-8">
              We&rsquo;re glad you chose this. A confirmation has been sent to{" "}
              <span className="text-charcoal">{email}</span> with
              everything you need to prepare.
            </p>

            <div className="bg-linen rounded-sm p-8 text-left space-y-6 mb-8">
              <h3 className="font-serif text-xl text-charcoal">
                Before you go
              </h3>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-3">
                  What to Pack
                </p>
                <ul className="space-y-2">
                  {retreat.preparation.packing.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-charcoal-light flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-ochre mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-3">
                  What to Expect
                </p>
                <ul className="space-y-2">
                  {retreat.preparation.whatToExpect.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-charcoal-light flex items-start gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-ochre mt-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone/30">
                <p className="text-sm text-charcoal-light italic leading-relaxed">
                  {retreat.preparation.personalNote}
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="text-sm text-warm-gray hover:text-charcoal-light transition-colors duration-300"
            >
              Return to all retreats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const canSubmit = selectedDate && name.trim() && email.trim();

  return (
    <div className="min-h-screen bg-cream pt-28 md:pt-36 pb-20">
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        {/* Breadcrumb */}
        <Link
          href={`/retreat/${retreat.slug}`}
          className="text-sm text-warm-gray hover:text-charcoal-light transition-colors duration-300 flex items-center gap-2 mb-12"
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
          Back to {retreat.name}
        </Link>

        <div className="animate-fade-up">
          <h1 className="font-serif text-3xl md:text-4xl text-charcoal mb-2">
            Begin booking
          </h1>
          <p className="text-charcoal-light mb-12">
            {retreat.name} &middot; {retreat.location}
          </p>

          <div className="space-y-8">
            {/* Date selection */}
            <div>
              <label className="text-xs tracking-[0.15em] uppercase text-warm-gray block mb-4">
                Choose your dates
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {retreat.dates.map((date) => (
                  <button
                    key={date}
                    onClick={() => setSelectedDate(date)}
                    className={`p-4 text-left text-sm rounded-sm border transition-all duration-300 ${
                      selectedDate === date
                        ? "border-charcoal bg-charcoal/5 text-charcoal"
                        : "border-stone/60 text-charcoal-light hover:border-charcoal-light"
                    }`}
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>

            {/* Guest details */}
            <div className="space-y-4">
              <label className="text-xs tracking-[0.15em] uppercase text-warm-gray block mb-2">
                Your Details
              </label>
              <input
                type="text"
                placeholder="Full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3.5 bg-transparent border border-stone/60 rounded-sm text-charcoal placeholder:text-warm-gray/60 focus:border-charcoal focus:outline-none transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3.5 bg-transparent border border-stone/60 rounded-sm text-charcoal placeholder:text-warm-gray/60 focus:border-charcoal focus:outline-none transition-colors duration-300"
              />
            </div>

            {/* Price summary */}
            <div className="bg-linen rounded-sm p-6 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="text-sm text-charcoal-light">
                  {retreat.name} &middot; {retreat.duration}
                </span>
                <span className="font-serif text-lg text-charcoal">
                  {retreat.priceRange}
                </span>
              </div>
              <p className="text-xs text-warm-gray">{retreat.priceNote}</p>
            </div>

            {/* Submit */}
            <button
              onClick={() => canSubmit && setStep("confirmation")}
              disabled={!canSubmit}
              className={`w-full py-4 text-sm tracking-wide rounded-sm transition-all duration-400 ${
                canSubmit
                  ? "bg-charcoal text-cream hover:bg-charcoal-light cursor-pointer"
                  : "bg-stone/40 text-warm-gray cursor-not-allowed"
              }`}
              style={{
                transitionTimingFunction:
                  "cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              Confirm booking
            </button>

            <p className="text-xs text-warm-gray text-center">
              No payment is charged today. The retreat will contact you to
              complete your reservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
