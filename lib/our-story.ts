// The client's "Our Story" moments, shared by the landing section (short lines) and the
// /about page (full lines + photos) so the two tellings never drift apart.

export const MISSED_MOMENTS = [
  {
    title: "A new restaurant",
    short: "We hear about a new restaurant after it has already opened.",
    line: "We hear about a new restaurant after it has already opened.",
    image: "/photography/breakfast.jpg",
    icon: "utensils",
  },
  {
    title: "A local event",
    short: "We miss local events shared in WhatsApp groups we weren’t part of.",
    line: "We miss local events because the information was shared in a WhatsApp group we weren’t part of.",
    image: "/photography/linden-market.jpg",
    icon: "calendar",
  },
  {
    title: "A great business",
    short: "We drive past great businesses without knowing their story.",
    line: "We drive past great businesses without knowing their story.",
    image: "/photography/goddess-cafe-linden.jpg",
    icon: "store",
  },
  {
    title: "A trusted service",
    short: "We struggle to find a trusted local service.",
    line: "We sometimes struggle to find a trusted local service.",
    image: "/photography/linden-lanes.jpg",
    icon: "wrench",
  },
] as const;
