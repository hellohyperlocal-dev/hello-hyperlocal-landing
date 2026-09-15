"use client";

import React from "react";
import Image from "next/image";
import {
  Check,
  ShieldCheck,
  Store,
  Calendar,
  Heart,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Star,
  Sparkles,
  Layers,
  type LucideIcon,
} from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

/* ─────────────────────────────────────────────────────────────
   Shared Phone Frame Wrapper for Sticky Stacking Cards
   (Enlarged phone geometry, top-half showcase, bottom clipped)
───────────────────────────────────────────────────────────── */
function StickyCardPhone({ children }: { children: React.ReactNode }) {
  return (
    <div aria-label="App interface preview screen" className="relative w-[330px] sm:w-[380px] lg:w-[420px] aspect-[1242/2072] select-none -mb-40 sm:-mb-52 lg:-mb-60">
      {/* Screen Viewport - Masked strictly inside phone-2.png hardware cutout */}
      <div aria-hidden="true" className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[26px] sm:rounded-[34px] bg-[#FCFAF7] z-0 flex flex-col shadow-inner pointer-events-none">
        <div className="w-full h-full overflow-hidden flex flex-col text-left font-sans">
          {children}
        </div>
      </div>

      {/* iPhone Frame Asset from public/phone-2.png */}
      <img
        src="/phone-2.png"
        alt="Hello Linden App Feature Mockup"
        className="relative z-10 block w-full h-auto pointer-events-none drop-shadow-2xl"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Mini Status Bar (Clean without WiFi)
───────────────────────────────────────────────────────────── */
function MiniStatusBar({ isDark = false }: { isDark?: boolean }) {
  const textColor = isDark ? "text-white" : "text-[#0e0f0c]";
  const bgBar = isDark ? "bg-white" : "bg-[#0e0f0c]";
  const borderBar = isDark ? "border-white" : "border-[#0e0f0c]";

  return (
    <div className={`h-8 w-full px-5 pt-2 flex items-center justify-between text-[11px] font-semibold ${textColor} tracking-tight shrink-0 select-none`}>
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        <div className="flex items-end gap-[1.5px] h-2.5">
          <div className={`w-[2.5px] h-[3.5px] ${bgBar} rounded-xs`} />
          <div className={`w-[2.5px] h-[5.5px] ${bgBar} rounded-xs`} />
          <div className={`w-[2.5px] h-[7.5px] ${bgBar} rounded-xs`} />
          <div className={`w-[2.5px] h-[9.5px] ${bgBar} rounded-xs`} />
        </div>
        <div className={`w-4 h-2.5 border ${borderBar} rounded-[2px] p-[0.5px] flex items-center`}>
          <div className={`w-full h-full ${bgBar} rounded-[0.5px]`} />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOCKUP 1: Verified Suburb Feed (Card 1)
───────────────────────────────────────────────────────────── */
function MockupVerifiedFeed() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7]">
      <MiniStatusBar />

      {/* Suburb Feed Header */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-[#0e0f0c]/5">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-extrabold text-[#0e0f0c]">Linden Feed</span>
          <span className="h-2 w-2 rounded-full bg-[#7ED957]" />
        </div>
        <span className="text-[9.5px] font-bold text-[#054d28] bg-[#e2f6d5] px-2.5 py-0.5 rounded-full">
          Ward 99 Verified
        </span>
      </div>

      {/* Feed Card 1: Official Municipal Update */}
      <div className="p-3.5 space-y-3">
        <div className="bg-white rounded-[18px] p-3.5 border border-[#0e0f0c]/5 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
              LCA
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0e0f0c] block leading-tight">
                LCA Ward Committee
              </span>
              <span className="text-[8.5px] text-[#868685]">Municipal Alert · 12m ago</span>
            </div>
          </div>
          <p className="text-[11px] text-[#454745] font-medium leading-relaxed m-0">
            <strong>3rd St Power Substation:</strong> City Power technicians replaced primary relay. Power fully restored to 4th & 5th Avenues.
          </p>
          <span className="text-[9px] text-[#054d28] font-bold block pt-0.5">
            ✓ 42 Verified Neighbours confirmed
          </span>
        </div>

        {/* Feed Card 2: Resident Post */}
        <div className="bg-white rounded-[18px] p-3.5 border border-[#0e0f0c]/5 space-y-2">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-[#e2f6d5] text-[#054d28] flex items-center justify-center font-bold text-[9px]">
              SV
            </div>
            <div>
              <span className="text-[11px] font-extrabold text-[#0e0f0c] block leading-tight">
                Sarah van der Merwe
              </span>
              <span className="text-[8.5px] text-[#868685]">4th Avenue · 1h ago</span>
            </div>
          </div>
          <p className="text-[11px] text-[#454745] font-medium leading-relaxed m-0">
            Huge shout-out to the 18 neighbours who joined the Spruit cleanup yesterday morning! 🌿
          </p>
          <div className="flex items-center gap-3 pt-0.5 text-[9px] text-[#868685]">
            <span className="font-bold text-[#0e0f0c]">♥ 34</span>
            <span>8 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOCKUP 2: Local Merchants Spotlight (Goddess Cafe Layout)
───────────────────────────────────────────────────────────── */
function MockupLocalMerchants() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7] text-left">
      {/* Hero Image Header with Overlaid Controls */}
      <div className="relative h-48 w-full bg-[#1C472A] overflow-hidden shrink-0">
        <Image
          src="/photography/goddess-cafe-linden.jpg"
          alt="Goddess Cafe Linden"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20" />
        
        {/* Status Bar */}
        <div className="relative z-10">
          <MiniStatusBar isDark={true} />
        </div>

        {/* Top Nav Actions */}
        <div className="relative z-10 px-4 pt-1 flex items-center justify-between text-white">
          <div className="h-7 w-7 rounded-full bg-black/30 backdrop-blur-xs flex items-center justify-center text-xs font-bold">
            ‹
          </div>
          <div className="h-7 w-7 rounded-full bg-black/30 backdrop-blur-xs flex items-center justify-center">
            <Heart className="h-3.5 w-3.5" />
          </div>
        </div>

        {/* Bottom Hero Text */}
        <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
          <span className="text-[9px] font-black text-[#7ED957] uppercase tracking-wider block">
            Cafe · Linden
          </span>
          <h3 className="text-[18px] font-extrabold text-white leading-tight m-0">
            Goddess Cafe
          </h3>
          <span className="text-[10px] text-white/90 font-medium">
            4th Avenue · Open till 3pm · 320m away
          </span>
        </div>
      </div>

      {/* Body Content */}
      <div className="p-4 space-y-3">
        {/* Cafe Description */}
        <p className="text-[10.5px] text-[#454745] font-medium leading-relaxed m-0">
          A corner café on 4th Avenue pouring flat whites and plating big weekend breakfasts. A neighbourhood regular for slow Saturday mornings and after-market coffees.
        </p>

        {/* Operating Meta */}
        <div className="space-y-1.5 pt-1.5 border-t border-[#0e0f0c]/5 text-[10px]">
          <div className="flex items-center gap-2 text-[#0e0f0c] font-semibold">
            <span className="h-2 w-2 rounded-full bg-[#2ead4b]" />
            <span>Open now</span>
            <span className="text-[#868685] font-normal">· 7am–3pm daily</span>
          </div>
          <div className="flex items-center gap-2 text-[#868685]">
            <span className="h-2 w-2 rounded-full bg-[#868685]" />
            <span>44 Fourth Avenue, Linden, Johannesburg</span>
          </div>
        </div>

        {/* More Local Spots Card */}
        <div className="pt-2">
          <span className="text-[11.5px] font-extrabold text-[#1C472A] block mb-1.5">
            More local spots
          </span>
          <div className="bg-white rounded-[16px] p-2.5 border border-[#0e0f0c]/5 flex gap-2.5">
            <div className="relative h-14 w-16 rounded-xl overflow-hidden shrink-0 bg-[#EBEBEB]">
              <Image
                src="/photography/whippet-linden.jpg"
                alt="The Whippet"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <span className="text-[8px] font-bold text-[#868685] uppercase">Pub · 200M</span>
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0">The Whippet</h5>
              <span className="text-[8.5px] text-[#868685] block mt-0.5">Free entry · Dog-friendly · Open late</span>
            </div>
          </div>
        </div>

        {/* Support Local Pill Button */}
        <div className="pt-1.5 pb-2">
          <button className="w-full bg-[#7ED957] text-[#0e0f0c] text-[11.5px] font-bold py-2.5 rounded-full text-center">
            Support local
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOCKUP 3: Civic Action & Ward Projects (Card 3)
───────────────────────────────────────────────────────────── */
function MockupCivicAction() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7]">
      <MiniStatusBar />

      {/* Header */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-[#0e0f0c]/5">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-extrabold text-[#0e0f0c]">Ward 99 Projects</span>
        </div>
        <span className="text-[9.5px] font-bold text-[#7ED957] bg-[#1C472A] px-2.5 py-0.5 rounded-full">
          Civic Action
        </span>
      </div>

      <div className="p-3.5 space-y-3">
        {/* Civic Project Card: Spruit Trail */}
        <div className="bg-[#1C472A] text-white rounded-[18px] p-3.5 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-bold text-[#7ED957] uppercase tracking-wider">
              Solar Security Lights
            </span>
            <span className="text-[9px] text-white/70">14d left</span>
          </div>
          <h4 className="text-[12px] font-extrabold text-white leading-snug m-0">
            Braamfontein Spruit Lighting Project
          </h4>
          <div className="space-y-1.5 pt-0.5">
            <div className="flex justify-between text-[9px] font-bold">
              <span className="text-[#7ED957]">R38,500 raised</span>
              <span className="text-white/70">Goal: R45k</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
              <div className="h-full bg-[#7ED957] rounded-full w-[85%]" />
            </div>
          </div>
          <div className="flex items-center justify-between pt-1.5 border-t border-white/10">
            <span className="text-[8.5px] text-white/70">86 neighbours backed</span>
            <span className="text-[9px] font-bold bg-white text-[#0e0f0c] px-3 py-1 rounded-full">
              Back R150 →
            </span>
          </div>
        </div>

        {/* Project 2 */}
        <div className="bg-white rounded-[16px] p-3 border border-[#0e0f0c]/5">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-extrabold text-[#0e0f0c]">Quarterly Tree Planting</span>
            <span className="text-[9px] font-bold text-[#054d28]">Sat 08:30</span>
          </div>
          <span className="text-[9px] text-[#868685] block mt-0.5">4th Ave Footbridge · 28 attending</span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   MOCKUP 4: Suburb Events Calendar (Card 4)
───────────────────────────────────────────────────────────── */
function MockupSuburbEvents() {
  return (
    <div className="flex-1 flex flex-col bg-[#FCFAF7]">
      <MiniStatusBar />

      {/* Header */}
      <div className="px-5 py-2.5 flex items-center justify-between border-b border-[#0e0f0c]/5">
        <div className="flex items-center gap-2">
          <span className="text-[15px] font-extrabold text-[#0e0f0c]">What&apos;s On</span>
          <span className="text-[9.5px] font-bold text-[#0e0f0c] bg-[#F5F5F5] px-2.5 py-0.5 rounded-full">
            Weekend
          </span>
        </div>
        <span className="text-[9.5px] font-bold text-[#7ED957] bg-[#1C472A] px-2.5 py-0.5 rounded-full">
          Linden
        </span>
      </div>

      <div className="p-3.5 space-y-3">
        {/* Featured Weekend Event Card */}
        <div className="relative h-32 w-full rounded-[18px] overflow-hidden">
          <Image
            src="/photography/linden-market-2.jpg"
            alt="Linden Village Market"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute top-2.5 left-2.5">
            <span className="bg-[#7ED957] text-[#0e0f0c] text-[8.5px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Sat 15 Aug
            </span>
          </div>
          <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
            <h4 className="text-[12px] font-extrabold text-white leading-tight m-0">
              Linden Village Craft & Food Market
            </h4>
            <div className="flex items-center justify-between mt-1">
              <span className="text-[8.5px] text-white/90">09:00 · 142 Going</span>
              <span className="bg-[#7ED957] text-[#0e0f0c] text-[8.5px] font-bold px-2.5 py-0.5 rounded-full">
                Going ✓
              </span>
            </div>
          </div>
        </div>

        {/* Event 2 */}
        <div className="bg-white rounded-[16px] p-3 border border-[#0e0f0c]/5 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-extrabold text-[#0e0f0c] block">Spruit 5km Social Run</span>
            <span className="text-[9px] text-[#868685]">Sunday 07:00 · Meet at The Whippet</span>
          </div>
          <span className="text-[9px] font-bold text-[#054d28] bg-[#e2f6d5] px-2.5 py-0.5 rounded-full">
            Free
          </span>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Features (App Experience) Sticky Cards Section
───────────────────────────────────────────────────────────── */
interface FeatureCardSpec {
  kicker: string;
  kickerIcon: LucideIcon;
  kickerVariant: "standard" | "dark" | "accent" | "surface-contrast";
  title: string;
  description: string;
  points: string[];
  bgColor: string;
  textColor: string;
  titleColor: string;
  mutedColor: string;
  checkIconBg: string;
  checkIconColor: string;
  topOffsetClass: string;
  zIndexClass: string;
  mockup: React.ReactNode;
}

const CARDS: FeatureCardSpec[] = [
  {
    kicker: "Verified Feed",
    kickerIcon: ShieldCheck,
    kickerVariant: "standard",
    title: "Stay informed on what's happening around your block.",
    description:
      "Real-time municipal notices, power restoration timelines, community alerts, and local news verified to your physical address.",
    points: [
      "100% address-verified resident posts",
      "Municipal ward & security alerts in real time",
      "Noise-free, chronological neighbourhood timeline",
    ],
    bgColor: "bg-[#ffffff] dark:bg-[#161814]",
    textColor: "text-[#0e0f0c] dark:text-[#FCFAF7]",
    titleColor: "text-[#0e0f0c] dark:text-white",
    mutedColor: "text-[#454745] dark:text-[#99A893]",
    checkIconBg: "bg-[#e2f6d5] dark:bg-[#1C472A]",
    checkIconColor: "text-[#054d28] dark:text-[#7ED957]",
    topOffsetClass: "top-24 sm:top-28",
    zIndexClass: "z-10",
    mockup: <MockupVerifiedFeed />,
  },
  {
    kicker: "Local Merchants",
    kickerIcon: Store,
    kickerVariant: "standard",
    title: "Discover and support the gems on your doorstep.",
    description:
      "Connect directly with independent neighbourhood cafes, weekend markets, and trusted service providers who make your community unique.",
    points: [
      "Exclusive resident specials and local perks",
      "Direct merchant updates without algorithmic paywalls",
      "Interactive suburb business directory and map",
    ],
    bgColor: "bg-[#EBEBEB] dark:bg-[#1B241C]",
    textColor: "text-[#0e0f0c] dark:text-[#FCFAF7]",
    titleColor: "text-[#0e0f0c] dark:text-white",
    mutedColor: "text-[#454745] dark:text-[#99A893]",
    checkIconBg: "bg-[#e2f6d5] dark:bg-[#7ED957]/20",
    checkIconColor: "text-[#054d28] dark:text-[#7ED957]",
    topOffsetClass: "top-28 sm:top-32",
    zIndexClass: "z-20",
    mockup: <MockupLocalMerchants />,
  },
  {
    kicker: "Civic Action",
    kickerIcon: Heart,
    kickerVariant: "surface-contrast",
    title: "Back local projects that make your suburb thrive.",
    description:
      "Rally neighbours for park care, spruit cleanups, solar lighting initiatives, and security infrastructure with transparent progress tracking.",
    points: [
      "Community-led volunteer drives and fundraisers",
      "Ward committee collaboration and project milestones",
      "Real-time neighbourhood impact tracking",
    ],
    bgColor: "bg-[#e2f6d5] dark:bg-[#162E1D]",
    textColor: "text-[#1C472A] dark:text-[#FCFAF7]",
    titleColor: "text-[#1C472A] dark:text-white",
    mutedColor: "text-[#1C472A]/80 dark:text-[#99A893]",
    checkIconBg: "bg-[#1C472A] dark:bg-[#7ED957]/20",
    checkIconColor: "text-[#7ED957] dark:text-[#7ED957]",
    topOffsetClass: "top-32 sm:top-36",
    zIndexClass: "z-30",
    mockup: <MockupCivicAction />,
  },
  {
    kicker: "Suburb Events",
    kickerIcon: Calendar,
    kickerVariant: "dark",
    title: "Never miss a market, run, or neighbourhood gathering.",
    description:
      "A unified calendar of weekend village markets, community sports, art walks, and local resident meetups happening in your area.",
    points: [
      "Synced suburb event calendar and reminders",
      "Coordinate and RSVP with nearby neighbours",
      "Create and host verified community activities",
    ],
    bgColor: "bg-[#1C472A] dark:bg-[#0E1B12]",
    textColor: "text-white",
    titleColor: "text-white",
    mutedColor: "text-white/80",
    checkIconBg: "bg-[#7ED957]/20",
    checkIconColor: "text-[#7ED957]",
    topOffsetClass: "top-36 sm:top-40",
    zIndexClass: "z-40",
    mockup: <MockupSuburbEvents />,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="w-full bg-[#F5F5F5] dark:bg-[#111A13] py-[clamp(60px,10vw,120px)] transition-colors duration-200"
    >
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* 1. Section Header */}
        <div className="flex flex-col items-center text-center mx-auto mb-12 sm:mb-16 max-w-3xl">
          <div className="mb-4">
            <EyebrowPill icon={Layers} variant="standard">
              App Experience
            </EyebrowPill>
          </div>
          <h2 className="m-0 text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-brand-onyx dark:text-[#FCFAF7] text-pretty max-w-2xl">
            Your digital town square, without the algorithm.
          </h2>
          <p className="mt-4 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] text-brand-muted dark:text-[#99A893] max-w-xl">
            Stay informed with verified local feeds, support independent merchants, and organize community initiatives with the people who actually live near you.
          </p>
        </div>

        {/* 2. Sticky Stacking Cards Container */}
        <div className="relative flex flex-col items-center gap-8 lg:gap-12 pb-16">
          {CARDS.map((card, index) => {
            // Swap column 1 and 2 on desktop for Card 2 (index 1) and Card 4 (index 3)
            const isReversed = index === 1 || index === 3;

            return (
              <div
                key={card.kicker}
                className={`sticky ${card.topOffsetClass} ${card.zIndexClass} w-full mx-auto rounded-3xl overflow-hidden border-none ${
                  index === 0 ? "shadow-[0_8px_40px_rgba(14,15,12,0.08)]" : ""
                } ${card.bgColor} p-8 sm:p-10 lg:p-12 pb-0 sm:pb-0 lg:pb-0 transition-all duration-300`}
              >
                {/* 3. Individual Card Layout (2-Column Alternating Split) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  
                  {/* Column A (Text Side): lg:order-1 on Cards 1 & 3, lg:order-2 on Cards 2 & 4 */}
                  <div className={`flex flex-col items-start text-left pb-8 sm:pb-10 lg:pb-12 ${isReversed ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="mb-4">
                      <EyebrowPill icon={card.kickerIcon} variant={card.kickerVariant}>
                        {card.kicker}
                      </EyebrowPill>
                    </div>
                    <h3 className={`text-[32px] leading-[1.15] font-semibold tracking-[-1.28px] mb-4 text-pretty ${card.titleColor}`}>
                      {card.title}
                    </h3>
                    <p className={`text-copy-16 mb-6 leading-relaxed ${card.mutedColor}`}>
                      {card.description}
                    </p>

                    {/* Feature Bullet Points */}
                    <ul className="space-y-3.5 list-none p-0 m-0 w-full">
                      {card.points.map((point) => (
                        <li key={point} className="flex items-center gap-3">
                          <div className={`h-6 w-6 rounded-full flex items-center justify-center shrink-0 ${card.checkIconBg} ${card.checkIconColor}`}>
                            <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                          </div>
                          <span className={`text-label-14 font-medium ${card.textColor}`}>
                            {point}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column B (Asset Side): lg:order-2 on Cards 1 & 3, lg:order-1 on Cards 2 & 4 */}
                  <div className={`flex items-end justify-center relative w-full h-[360px] sm:h-[420px] lg:h-[480px] overflow-hidden ${isReversed ? "lg:order-1" : "lg:order-2"}`}>
                    <StickyCardPhone>
                      {card.mockup}
                    </StickyCardPhone>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
