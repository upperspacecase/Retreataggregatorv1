"use client";

import { use, useState, useEffect } from "react";
import Link from "next/link";
import { retreats } from "@/data/retreats";
import { analytics } from "@/lib/analytics";

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
  const [emailTouched, setEmailTouched] = useState(false);

  useEffect(() => {
    if (retreat) {
      analytics.bookingStarted(retreat.slug, retreat.name);
    }
  }, [retreat]);

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

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const canSubmit = selectedDate && name.trim().length >= 2 && isValidEmail;

  function handleDateSelect(date: string) {
    setSelectedDate(date);
    analytics.bookingDateSelected(retreat!.slug, date);
  }

  function handleSubmit() {
    if (!canSubmit) return;
    analytics.bookingDetailsCompleted(retreat!.slug);
    analytics.bookingCompleted(retreat!.slug, retreat!.name, selectedDate);
    setStep("confirmation");
  }

  if (step === "confirmation") {
    return (
      <div className="min-h-screen bg-cream pt-28 md:pt-36 pb-20">
        <title>Booking Confirmed — {retreat.name} | Curated Calm</title>
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
              <span className="text-charcoal font-medium">{email}</span> with
              everything you need to prepare.
            </p>

            <div className="bg-linen rounded-sm p-8 text-left space-y-6 mb-8">
              <h2 className="font-serif text-xl text-charcoal">
                Everything you need before you go
              </h2>

              <div>
                <h3 className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-3">
                  What to Pack
                </h3>
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
                <h3 className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-3">
                  What to Expect
                </h3>
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
                  &ldquo;{retreat.preparation.personalNote}&rdquo;
                </p>
              </div>
            </div>

            <Link
              href="/"
              className="text-sm text-warm-gray hover:text-charcoal-light transition-colors duration-300"
            >
              Continue exploring retreats
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Calculate completeness for progress indicator
  const stepsComplete = [!!selectedDate, !!name.trim(), isValidEmail].filter(
    Boolean
  ).length;

  return (
    <div className="min-h-screen bg-cream pt-28 md:pt-36 pb-20">
      <title>Book {retreat.name} | Curated Calm</title>
      <meta
        name="description"
        content={`Reserve your place at ${retreat.name} in ${retreat.location}. ${retreat.duration}, ${retreat.priceRange}.`}
      />
      <div className="max-w-2xl mx-auto px-6 md:px-12">
        {/* Back navigation */}
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
            Reserve your place
          </h1>
          <p className="text-charcoal-light mb-4">
            {retreat.name} &middot; {retreat.location}
          </p>

          {/* Progress indicator */}
          <div className="flex items-center gap-2 mb-12" role="progressbar" aria-valuenow={stepsComplete} aria-valuemin={0} aria-valuemax={3} aria-label="Booking progress">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors duration-500 ${
                  i < stepsComplete ? "bg-ochre" : "bg-stone/30"
                }`}
                style={{
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />
            ))}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
            className="space-y-8"
            noValidate
          >
            {/* Step 1: Date selection */}
            <fieldset>
              <legend className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4">
                1. Choose your dates
              </legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {retreat.dates.map((date) => (
                  <button
                    key={date}
                    type="button"
                    onClick={() => handleDateSelect(date)}
                    className={`p-4 text-left text-sm rounded-sm border transition-all duration-300 ${
                      selectedDate === date
                        ? "border-charcoal bg-charcoal/5 text-charcoal"
                        : "border-stone/60 text-charcoal-light hover:border-charcoal-light"
                    }`}
                    style={{
                      transitionTimingFunction:
                        "cubic-bezier(0.22, 1, 0.36, 1)",
                    }}
                    aria-pressed={selectedDate === date}
                  >
                    {date}
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Step 2: Guest details */}
            <fieldset className="space-y-4">
              <legend className="text-xs tracking-[0.15em] uppercase text-warm-gray mb-4">
                2. Your details
              </legend>
              <div>
                <label
                  htmlFor="guest-name"
                  className="text-sm text-charcoal-light block mb-1.5"
                >
                  Your name
                </label>
                <input
                  id="guest-name"
                  type="text"
                  placeholder="e.g. Sarah Mitchell"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                  className="w-full px-4 py-3.5 bg-transparent border border-stone/60 rounded-sm text-charcoal placeholder:text-warm-gray/40 focus:border-charcoal focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label
                  htmlFor="guest-email"
                  className="text-sm text-charcoal-light block mb-1.5"
                >
                  Email address
                </label>
                <input
                  id="guest-email"
                  type="email"
                  placeholder="e.g. sarah@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={() => setEmailTouched(true)}
                  autoComplete="email"
                  required
                  className={`w-full px-4 py-3.5 bg-transparent border rounded-sm text-charcoal placeholder:text-warm-gray/40 focus:border-charcoal focus:outline-none transition-colors duration-300 ${
                    emailTouched && email && !isValidEmail
                      ? "border-terracotta/60"
                      : "border-stone/60"
                  }`}
                />
                {emailTouched && email && !isValidEmail && (
                  <p className="text-xs text-terracotta mt-1.5">
                    Please enter a valid email address
                  </p>
                )}
              </div>
              <p className="text-xs text-warm-gray/60">
                We&rsquo;ll send your confirmation and preparation guide to this address.
              </p>
            </fieldset>

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
              {selectedDate && (
                <p className="text-xs text-charcoal-light pt-1 border-t border-stone/20">
                  Selected: {selectedDate}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
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
              {canSubmit
                ? "Confirm reservation"
                : !selectedDate
                  ? "Choose your dates above"
                  : !name.trim()
                    ? "Enter your name to continue"
                    : "Enter your email to continue"}
            </button>

            <div className="text-center space-y-2">
              <p className="text-xs text-warm-gray">
                No payment today. The retreat will contact you to finalize your reservation.
              </p>
              <p className="text-xs text-warm-gray/60">
                Same price as booking direct &middot; Free cancellation guidance
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
