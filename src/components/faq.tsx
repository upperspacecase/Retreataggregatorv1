"use client";

import { useState } from "react";
import { useScrollReveal } from "@/lib/use-scroll-reveal";
import {
  SchemaMarkup,
  generateFAQSchema,
} from "@/components/schema-markup";

const faqs = [
  {
    question: "How do you choose which retreats to feature?",
    answer:
      "Every retreat in our collection has been personally visited by our curation team. We evaluate the quality of the experience, the integrity of the teachers and hosts, the setting, the food, and the overall feeling of the place. We reject far more than we accept — our collection stays small deliberately, because we believe in depth of curation over breadth of options.",
  },
  {
    question: "Are prices on Curated Calm higher than booking directly?",
    answer:
      "No. The prices you see are the same as booking directly with the retreat. Our commission is paid by the retreat operator, not by you. In some cases, we negotiate exclusive availability or added benefits for guests who book through us.",
  },
  {
    question: "What if I need to cancel or change my booking?",
    answer:
      "Each retreat has its own cancellation policy, which is clearly communicated before you confirm your booking. Our team is available to help facilitate any changes or cancellations directly with the retreat. We advocate on your behalf — that's part of the value of booking through a curated platform.",
  },
  {
    question: "I've never been on a wellness retreat. Is this right for me?",
    answer:
      "Many of our guests are first-timers, and we designed the experience with you in mind. Each retreat description includes a detailed account of what your days will look like, so there are no surprises. Our intent-based discovery — choosing by feeling rather than category — is especially helpful if you're not sure what type of retreat suits you. And our team is always available to help you find the right fit.",
  },
  {
    question: "What is the Travel Circle membership?",
    answer:
      "Travel Circle is our membership program for returning guests. For $99–149/year, members get early access to limited-availability retreats, a personal retreat concierge (a real person, not a chatbot), and exclusive preparation guides. The core browsing and booking experience is always free — membership is for those who want a deeper level of guidance.",
  },
];

export function FAQ() {
  const { ref, isVisible } = useScrollReveal(0.15);

  return (
    <section
      ref={ref}
      className={`py-16 md:py-24 px-6 md:px-16 lg:px-24 border-t border-stone/20 ${
        isVisible ? "scroll-visible" : "scroll-hidden"
      }`}
      aria-label="Frequently asked questions"
    >
      <SchemaMarkup schema={generateFAQSchema(faqs)} />
      <div className="max-w-3xl mx-auto">
        <p className="text-warm-gray text-xs tracking-[0.2em] uppercase mb-4 text-center">
          Common Questions
        </p>
        <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-12">
          Things people ask before they book
        </h2>
        <div className="space-y-0 divide-y divide-stone/30">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              index={i}
              visible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  index,
  visible,
}: {
  question: string;
  answer: string;
  index: number;
  visible: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={visible ? "scroll-visible" : "scroll-hidden"}
      style={{ animationDelay: `${index * 60 + 100}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-start justify-between gap-4 text-left group"
        aria-expanded={open}
      >
        <span className="font-serif text-lg text-charcoal group-hover:text-charcoal-light transition-colors duration-300">
          {question}
        </span>
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`text-warm-gray flex-shrink-0 mt-1 transition-transform duration-300 ${
            open ? "rotate-45" : ""
          }`}
          style={{
            transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ${
          open ? "max-h-96 opacity-100 pb-5" : "max-h-0 opacity-0"
        }`}
        style={{
          transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <p className="text-charcoal-light leading-relaxed pr-8">{answer}</p>
      </div>
    </div>
  );
}
