// Analytics event tracking utility
// Uses a dataLayer pattern compatible with GA4 / GTM
// To activate: add GA4 measurement ID or connect GTM container

type EventProperties = Record<string, string | number | boolean>;

export function trackEvent(eventName: string, properties?: EventProperties) {
  // Push to dataLayer for GTM compatibility
  if (typeof window !== "undefined") {
    const w = window as typeof window & { dataLayer?: Record<string, unknown>[] };
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: eventName,
      ...properties,
    });
  }
}

// Pre-defined events matching the tracking plan
export const analytics = {
  // CTA interactions
  ctaClicked: (buttonText: string, location: string) =>
    trackEvent("cta_clicked", { button_text: buttonText, location }),

  // Retreat discovery
  intentFilterSelected: (intent: string) =>
    trackEvent("intent_filter_selected", { intent }),

  intentFilterCleared: () =>
    trackEvent("intent_filter_cleared"),

  retreatViewed: (slug: string, name: string, location: string) =>
    trackEvent("retreat_viewed", {
      retreat_slug: slug,
      retreat_name: name,
      retreat_location: location,
    }),

  retreatCardClicked: (slug: string, name: string, position: number) =>
    trackEvent("retreat_card_clicked", {
      retreat_slug: slug,
      retreat_name: name,
      position,
    }),

  // Saved retreats
  retreatSaved: (slug: string, name: string, location: string) =>
    trackEvent("retreat_saved", {
      retreat_slug: slug,
      retreat_name: name,
      location,
    }),

  retreatUnsaved: (slug: string) =>
    trackEvent("retreat_unsaved", { retreat_slug: slug }),

  savedNoteAdded: (slug: string) =>
    trackEvent("saved_note_added", { retreat_slug: slug }),

  // Booking funnel
  bookingStarted: (slug: string, name: string) =>
    trackEvent("booking_started", {
      retreat_slug: slug,
      retreat_name: name,
    }),

  bookingDateSelected: (slug: string, date: string) =>
    trackEvent("booking_date_selected", {
      retreat_slug: slug,
      date,
    }),

  bookingDetailsCompleted: (slug: string) =>
    trackEvent("booking_details_completed", { retreat_slug: slug }),

  bookingCompleted: (slug: string, name: string, date: string) =>
    trackEvent("booking_completed", {
      retreat_slug: slug,
      retreat_name: name,
      date,
    }),

  // Gallery interactions
  galleryScrolled: (slug: string) =>
    trackEvent("gallery_scrolled", { retreat_slug: slug }),

  // Scroll depth
  scrollDepthReached: (depth: number, page: string) =>
    trackEvent("scroll_depth_reached", { depth_percent: depth, page }),
};
