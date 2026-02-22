import type { Retreat } from "@/data/retreats";

interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  const jsonLd = Array.isArray(schema)
    ? { "@context": "https://schema.org", "@graph": schema }
    : { "@context": "https://schema.org", ...schema };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

// Schema generators for different page types

export function generateOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": "https://curatedcalm.com/#organization",
    name: "Curated Calm",
    url: "https://curatedcalm.com",
    description:
      "A carefully curated collection of the world's most meaningful wellness retreats.",
  };
}

export function generateWebSiteSchema() {
  return {
    "@type": "WebSite",
    "@id": "https://curatedcalm.com/#website",
    url: "https://curatedcalm.com",
    name: "Curated Calm",
    publisher: { "@id": "https://curatedcalm.com/#organization" },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateRetreatEventSchema(retreat: Retreat) {
  return retreat.dates.map((date) => ({
    "@type": "Event",
    name: `${retreat.name} — Wellness Retreat`,
    description: retreat.tagline,
    image: retreat.images.hero,
    startDate: date.split("–")[0]?.trim(),
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: retreat.name,
      address: {
        "@type": "PostalAddress",
        addressLocality: retreat.location,
        addressCountry: retreat.country,
      },
    },
    organizer: {
      "@type": "Organization",
      name: "Curated Calm",
      url: "https://curatedcalm.com",
    },
    offers: {
      "@type": "Offer",
      url: `https://curatedcalm.com/retreat/${retreat.slug}`,
      availability: "https://schema.org/InStock",
    },
    maximumAttendeeCapacity: retreat.maxGuests,
  }));
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
