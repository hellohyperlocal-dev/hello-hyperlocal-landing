import {
  CalendarDays,
  Compass,
  Gem,
  Gift,
  HeartHandshake,
  MapPin,
  Megaphone,
  MessageSquareHeart,
  Newspaper,
  Sprout,
  Store,
  Tag,
  TrendingUp,
  Users,
  type LucideIcon,
} from "lucide-react";

// Shared copy for the /join flow and the landing sections that describe it. Kept in one
// place so a benefit listed on the landing page can never drift from the one shown in
// the flow itself. Wording follows the client's brief.

export const SUBURBS = [
  { value: "Linden", label: "Linden, Johannesburg" },
  { value: "Greenside", label: "Greenside" },
  { value: "Parkhurst", label: "Parkhurst" },
  { value: "Melville", label: "Melville" },
  { value: "Other", label: "Other Suburb" },
] as const;

export const INTERESTS = [
  "Local Business Specials & Deals",
  "Community Events & Markets",
  "Safety & Municipal Advisories",
  "School & Youth Activities",
  "Volunteering & Civic Projects",
  "Buy & Sell Marketplace",
] as const;

export interface Benefit {
  icon: LucideIcon;
  title: string;
  caption: string;
}

/** Brief §5, For Residents: the nine things residents get. */
export const RESIDENT_BENEFITS: Benefit[] = [
  { icon: MapPin, title: "Discover what's nearby", caption: "See what's happening around you." },
  { icon: Store, title: "Local businesses & services", caption: "From cafés to a trusted plumber." },
  { icon: CalendarDays, title: "Explore events", caption: "Markets, school events and more." },
  { icon: HeartHandshake, title: "Support local businesses", caption: "Back the people who make Linden." },
  { icon: MessageSquareHeart, title: "Trusted recommendations", caption: "Tips from real neighbours." },
  { icon: Sprout, title: "Follow community projects", caption: "See progress and ways to help." },
  { icon: Gem, title: "Discover hidden gems", caption: "The spots you keep driving past." },
  { icon: Megaphone, title: "Neighbourhood information", caption: "Important updates for your suburb." },
  { icon: Gift, title: "Rewards & local initiatives", caption: "Coming later, for exploring your suburb." },
];

/** Brief §6, For Businesses: the nine regular business benefits. */
export const BUSINESS_BENEFITS: Benefit[] = [
  { icon: Store, title: "Business profile", caption: "Your story, hours and offers in one place." },
  { icon: Compass, title: "Local discovery", caption: "Get found by residents nearby." },
  { icon: Tag, title: "Promotions & specials", caption: "Share deals with the people around you." },
  { icon: CalendarDays, title: "Events", caption: "Put your events in front of the suburb." },
  { icon: Newspaper, title: "Featured stories", caption: "Be spotlighted in the community." },
  { icon: Gift, title: "Rewards participation", caption: "Reward locals for choosing you." },
  { icon: Megaphone, title: "Community campaigns", caption: "Join campaigns that bring people out." },
  { icon: Users, title: "Direct connection", caption: "Reach local customers, not algorithms." },
  { icon: TrendingUp, title: "Future promotion", caption: "Advertising opportunities as Hello grows." },
];

/** Brief §8, what the first 1,000 Founding Neighbours get. Used as a list in /join. */
export const NEIGHBOUR_PERKS = [
  "Numbered Founding Badge",
  "Early app access prior to public launch",
  "Invitations to community launch events",
  "Direct input into platform development",
  "Opportunities to test new features",
] as const;

/** Brief §7, Founding Business benefits. Used as a list in /join. */
export const FOUNDING_BUSINESS_BENEFITS = [
  "Founding Business recognition",
  "Early platform access",
  "Input into how Hello Linden is developed",
  "Launch visibility",
  "Founding badge and window sticker",
  "Potential launch opportunities",
  "Priority onboarding",
] as const;
