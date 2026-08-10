"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Heart,
  Calendar,
  Compass,
  Home,
  Plus,
  ArrowRight,
  ShieldCheck,
  Check,
  Smartphone,
  Layers,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
   Shared Mobile Top Status Bar Component
───────────────────────────────────────────────────────────── */
function StatusBar() {
  return (
    <div className="h-10 w-full px-6 pt-1 flex items-center justify-between text-[13px] font-semibold text-[#0e0f0c] tracking-tight shrink-0 select-none">
      <span>9:41</span>
      <div className="flex items-center gap-1.5">
        {/* Cellular Signal */}
        <div className="flex items-end gap-[2px] h-3">
          <div className="w-[3px] h-[4px] bg-[#0e0f0c] rounded-xs" />
          <div className="w-[3px] h-[6px] bg-[#0e0f0c] rounded-xs" />
          <div className="w-[3px] h-[8px] bg-[#0e0f0c] rounded-xs" />
          <div className="w-[3px] h-[10px] bg-[#0e0f0c] rounded-xs" />
        </div>
        {/* Battery Icon */}
        <div className="w-5 h-2.5 border border-[#0e0f0c] rounded-[3px] p-[1px] flex items-center">
          <div className="w-full h-full bg-[#0e0f0c] rounded-[1px]" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Shared Floating Bottom Nav Bar Pill Component (Exact Reference)
───────────────────────────────────────────────────────────── */
function FloatingBottomNav({ activeTab = "home" }: { activeTab?: "home" | "heart" | "map" | "calendar" | "plus" }) {
  return (
    <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none z-30">
      <div className="pointer-events-auto bg-[#1C472A] text-white/70 rounded-full px-5 py-2.5 flex items-center gap-6 shadow-[0_8px_24px_rgba(28,71,42,0.3)]">
        {/* Home Tab */}
        <div
          className={`flex items-center justify-center cursor-pointer transition-colors ${
            activeTab === "home" ? "text-white" : "hover:text-white"
          }`}
        >
          <div className={`p-1 rounded-full ${activeTab === "home" ? "ring-1 ring-[#7ED957] text-[#7ED957]" : ""}`}>
            <Home className="h-4 w-4" />
          </div>
        </div>

        {/* Heart / Activity Tab */}
        <div
          className={`flex items-center justify-center cursor-pointer transition-colors ${
            activeTab === "heart" ? "text-white" : "hover:text-white"
          }`}
        >
          <div className={`p-1 rounded-full ${activeTab === "heart" ? "ring-1 ring-[#7ED957] text-[#7ED957]" : ""}`}>
            <Heart className="h-4 w-4" />
          </div>
        </div>

        {/* Map / Discover Tab */}
        <div
          className={`flex items-center justify-center cursor-pointer transition-colors ${
            activeTab === "map" ? "text-white" : "hover:text-white"
          }`}
        >
          <div className={`p-1 rounded-full ${activeTab === "map" ? "ring-1 ring-[#7ED957] text-[#7ED957]" : ""}`}>
            <Compass className="h-4 w-4" />
          </div>
        </div>

        {/* Calendar / What's on Tab */}
        <div
          className={`flex items-center justify-center cursor-pointer transition-colors ${
            activeTab === "calendar" ? "text-white" : "hover:text-white"
          }`}
        >
          <div className={`p-1 rounded-full ${activeTab === "calendar" ? "ring-1 ring-[#7ED957] text-[#7ED957]" : ""}`}>
            <Calendar className="h-4 w-4" />
          </div>
        </div>

        {/* Plus / Post Action */}
        <div
          className={`flex items-center justify-center cursor-pointer transition-colors ${
            activeTab === "plus" ? "text-white" : "hover:text-white"
          }`}
        >
          <div className={`p-1 rounded-full ${activeTab === "plus" ? "ring-1 ring-[#7ED957] text-[#7ED957]" : ""}`}>
            <Plus className="h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Phone Device Frame Wrapper (Exact Pixel Cutout Fit for phone-2.png)
───────────────────────────────────────────────────────────── */
function PhoneFramedMockup({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative z-10 inline-block mx-auto select-none">
      {/* Photo / Screen Viewport (The "Mask") - Fitted exactly inside phone-2.png screen bezel */}
      <div className="absolute top-[2.8%] left-[14.65%] w-[68.6%] h-[89.5%] overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#FCFAF7] z-0 flex flex-col">
        <div className="w-full h-full overflow-y-auto no-scrollbar flex flex-col">
          {children}
        </div>
      </div>

      {/* Frame Graphic */}
      <img
        src="/phone-2.png"
        alt="Hello Linden iPhone Frame"
        className="relative z-10 block w-[320px] sm:w-[420px] h-auto pointer-events-none drop-shadow-2xl"
      />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCREEN 1: Home Feed (Community Pulse - Exact Match to Design)
───────────────────────────────────────────────────────────── */
function Screen1HomeFeed() {
  return (
    <div className="w-full h-full bg-[#FCFAF7] text-[#0e0f0c] flex flex-col justify-between overflow-hidden relative select-none font-sans">
      <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        <StatusBar />

        {/* User Header */}
        <div className="px-5 pt-3 pb-3 flex items-center justify-between text-left">
          <div>
            <h1 className="text-[24px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
              Hello, Sam.
            </h1>
            <span className="text-[10px] font-bold text-[#5C6656] uppercase tracking-[0.14em]">
              Linden · Block 4
            </span>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[15px]">
            S
          </div>
        </div>

        {/* Hero Card: Forest Green Ink Banner (#1C472A) */}
        <div className="px-4 pt-1">
          <div className="bg-[#1C472A] text-white rounded-[22px] p-5 text-left space-y-2">
            <span className="text-[11px] font-bold text-[#7ED957] tracking-wide block">
              Around the neighbourhood
            </span>
            <h2 className="text-[16px] font-extrabold text-white leading-snug m-0">
              Load-shedding schedule update
            </h2>
            <p className="text-[12px] text-white/80 leading-relaxed m-0 pb-1">
              Stage 2 tonight from 8pm–10:30pm. Linden falls under block 4.
            </p>
            <button className="bg-white hover:bg-[#F5F5F5] text-[#0e0f0c] text-[11px] font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all">
              <span>Read more</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="px-4 pt-4">
          <div className="bg-[#EBEBEB] p-1 rounded-full flex items-center justify-between">
            <button className="bg-[#1C472A] text-white text-[11px] font-bold px-4 py-1.5 rounded-full flex-1 text-center shadow-xs">
              Around you
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-4 py-1.5 rounded-full flex-1 text-center">
              What&apos;s on
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-4 py-1.5 rounded-full flex-1 text-center">
              Love Local
            </button>
          </div>
        </div>

        {/* Ticker Notice Text */}
        <div className="px-5 pt-3.5 text-left">
          <p className="text-[11px] text-[#454745] leading-relaxed m-0">
            Piano teacher wanted for an 8-year-old — must be in the neighbourhood.
          </p>
        </div>

        {/* Section Header */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between text-left">
          <h3 className="text-[14px] font-extrabold text-[#1C472A] tracking-tight m-0">
            Hidden gems near you
          </h3>
          <span className="text-[11px] font-bold text-[#5C6656] cursor-pointer">
            See all
          </span>
        </div>

        {/* Featured Big Photo Card */}
        <div className="px-4">
          <div className="relative h-[160px] w-full rounded-[20px] overflow-hidden">
            <Image
              src="/photography/linden-market-2.jpg"
              alt="Linden Village Market"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#7ED957] text-[#0e0f0c] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                This Saturday
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-left text-white">
              <h4 className="text-[14px] font-extrabold text-white leading-tight m-0">
                Linden Village Market
              </h4>
              <span className="text-[10px] text-white/90 font-medium">
                8am–1pm · 4th Avenue · 214 going
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Photo Cards Row */}
        <div className="px-4 pt-3 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/breakfast.jpg"
                alt="Weekend breakfast"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                Weekend breakfast
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                R85 · Goddess Cafe
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/whippet-linden.jpg"
                alt="The Whippet"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                The Whippet
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                Free entry
              </span>
            </div>
          </div>
        </div>

        {/* Marketplace Wanted Card */}
        <div className="px-4 pt-3 pb-2">
          <div className="bg-white rounded-[20px] p-4 border border-[#0e0f0c]/5 text-left space-y-2">
            <span className="bg-[#F5F5F5] text-[#5C6656] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block">
              Marketplace · Wanted
            </span>
            <p className="text-[12px] text-[#0e0f0c] font-medium leading-relaxed m-0">
              Looking for someone who can teach piano to my 8-year-old — preferably within the community.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-6 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
                TM
              </div>
              <span className="text-[10px] font-semibold text-[#868685]">
                Thandi M. · Block 4 · 2h ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <FloatingBottomNav activeTab="home" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCREEN 2: What’s On (Suburb Calendar & Civic Projects)
───────────────────────────────────────────────────────────── */
function Screen2WhatsOn() {
  return (
    <div className="w-full h-full bg-[#FCFAF7] text-[#0e0f0c] flex flex-col justify-between overflow-hidden relative select-none font-sans">
      <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        <StatusBar />

        {/* User Header */}
        <div className="px-5 pt-3 pb-3 flex items-center justify-between text-left">
          <div>
            <h1 className="text-[24px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
              What&apos;s on.
            </h1>
            <span className="text-[10px] font-bold text-[#5C6656] uppercase tracking-[0.14em]">
              Linden · Ward 99
            </span>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[15px]">
            S
          </div>
        </div>

        {/* Hero Card: Forest Green Ink Banner (#1C472A) */}
        <div className="px-4 pt-1">
          <div className="bg-[#1C472A] text-white rounded-[22px] p-5 text-left space-y-2">
            <span className="text-[11px] font-bold text-[#7ED957] tracking-wide block">
              Ward Community Initiative
            </span>
            <h2 className="text-[16px] font-extrabold text-white leading-snug m-0">
              Braamfontein Spruit Solar Trail
            </h2>
            <div className="space-y-1 pt-0.5">
              <div className="flex justify-between text-[10px] font-bold">
                <span className="text-[#7ED957]">R38,500 raised</span>
                <span className="text-white/70">Goal: R45,000</span>
              </div>
              <div className="w-full h-2 rounded-full bg-white/20 overflow-hidden">
                <div className="h-full bg-[#7ED957] rounded-full w-[85%]" />
              </div>
            </div>
            <button className="bg-white hover:bg-[#F5F5F5] text-[#0e0f0c] text-[11px] font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all mt-1">
              <span>Back this project</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="px-4 pt-4">
          <div className="bg-[#EBEBEB] p-1 rounded-full flex items-center justify-between">
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              All events
            </button>
            <button className="bg-[#1C472A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex-1 text-center shadow-xs">
              This weekend
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              Ward projects
            </button>
          </div>
        </div>

        {/* Ticker Notice Text */}
        <div className="px-5 pt-3.5 text-left">
          <p className="text-[11px] text-[#454745] leading-relaxed m-0">
            Meet at 4th Ave bridge on Saturday 08:30 for community tree planting.
          </p>
        </div>

        {/* Section Header */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between text-left">
          <h3 className="text-[14px] font-extrabold text-[#1C472A] tracking-tight m-0">
            Upcoming in the suburb
          </h3>
          <span className="text-[11px] font-bold text-[#5C6656] cursor-pointer">
            Filter
          </span>
        </div>

        {/* Featured Big Photo Card */}
        <div className="px-4">
          <div className="relative h-[160px] w-full rounded-[20px] overflow-hidden">
            <Image
              src="/photography/linden-market.jpg"
              alt="Linden Market Gathering"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#7ED957] text-[#0e0f0c] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                Sat 15 Aug
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-left text-white">
              <h4 className="text-[14px] font-extrabold text-white leading-tight m-0">
                Linden Village Craft & Food Market
              </h4>
              <span className="text-[10px] text-white/90 font-medium">
                8am–1pm · Linden Bowling Club · 142 going
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Events Grid */}
        <div className="px-4 pt-3 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/linden-streetview.jpeg"
                alt="Suburb 5km run"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                Spruit Social 5km
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                Sat 07:00 · Free
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/goddess-cafe-linden.jpg"
                alt="Acoustic Sunday"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                Acoustic Sunday
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                Sun 14:00 · Goddess
              </span>
            </div>
          </div>
        </div>

        {/* Civic Card */}
        <div className="px-4 pt-3 pb-2">
          <div className="bg-white rounded-[20px] p-4 border border-[#0e0f0c]/5 text-left space-y-2">
            <span className="bg-[#e2f6d5] text-[#054d28] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block">
              Civic Project · 14 Days Left
            </span>
            <p className="text-[12px] text-[#0e0f0c] font-medium leading-relaxed m-0">
              Help install 12 off-grid solar security lights along the Braamfontein Spruit trail.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-6 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
                LCA
              </div>
              <span className="text-[10px] font-semibold text-[#868685]">
                Ward 99 Committee · 86 backers
              </span>
            </div>
          </div>
        </div>
      </div>

      <FloatingBottomNav activeTab="calendar" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCREEN 3: Local Places & Culture (Explore Linden)
───────────────────────────────────────────────────────────── */
function Screen3ExploreLinden() {
  return (
    <div className="w-full h-full bg-[#FCFAF7] text-[#0e0f0c] flex flex-col justify-between overflow-hidden relative select-none font-sans">
      <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        <StatusBar />

        {/* User Header */}
        <div className="px-5 pt-3 pb-3 flex items-center justify-between text-left">
          <div>
            <h1 className="text-[24px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
              Love Local.
            </h1>
            <span className="text-[10px] font-bold text-[#5C6656] uppercase tracking-[0.14em]">
              Linden · Independent Spots
            </span>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[15px]">
            S
          </div>
        </div>

        {/* Hero Card: Forest Green Ink Banner (#1C472A) */}
        <div className="px-4 pt-1">
          <div className="bg-[#1C472A] text-white rounded-[22px] p-5 text-left space-y-2">
            <span className="text-[11px] font-bold text-[#7ED957] tracking-wide block">
              Resident Special Spotlight
            </span>
            <h2 className="text-[16px] font-extrabold text-white leading-snug m-0">
              Support neighbourhood merchants
            </h2>
            <p className="text-[12px] text-white/80 leading-relaxed m-0 pb-1">
              Unlock verified 15% resident breakfast perks and bakery loyalty stamps.
            </p>
            <button className="bg-white hover:bg-[#F5F5F5] text-[#0e0f0c] text-[11px] font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all">
              <span>View perks</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="px-4 pt-4">
          <div className="bg-[#EBEBEB] p-1 rounded-full flex items-center justify-between">
            <button className="bg-[#1C472A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex-1 text-center shadow-xs">
              Coffee & Dining
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              Artisans
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              Parks & Trail
            </button>
          </div>
        </div>

        {/* Ticker Notice Text */}
        <div className="px-5 pt-3.5 text-left">
          <p className="text-[11px] text-[#454745] leading-relaxed m-0">
            Fresh artisanal sourdough batches arriving at 4th Ave bakeries daily at 07:30.
          </p>
        </div>

        {/* Section Header */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between text-left">
          <h3 className="text-[14px] font-extrabold text-[#1C472A] tracking-tight m-0">
            Featured Linden spots
          </h3>
          <span className="text-[11px] font-bold text-[#5C6656] cursor-pointer">
            Map view
          </span>
        </div>

        {/* Featured Big Photo Card */}
        <div className="px-4">
          <div className="relative h-[160px] w-full rounded-[20px] overflow-hidden">
            <Image
              src="/photography/goddess-cafe-linden.jpg"
              alt="Goddess Cafe Linden"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#7ED957] text-[#0e0f0c] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                Open Now · 4.9 ★
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-left text-white">
              <h4 className="text-[14px] font-extrabold text-white leading-tight m-0">
                Goddess Café Linden
              </h4>
              <span className="text-[10px] text-white/90 font-medium">
                4th Avenue · Patisserie & Breakfast · 15% Resident Perk
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Spots Grid */}
        <div className="px-4 pt-3 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/whippet-linden.jpg"
                alt="The Whippet Coffee"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                The Whippet
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                7th Street · Roastery
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/linden-market-2.jpg"
                alt="Linden Market"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                Village Market
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                Central Park · Food
              </span>
            </div>
          </div>
        </div>

        {/* Merchant Update Card */}
        <div className="px-4 pt-3 pb-2">
          <div className="bg-white rounded-[20px] p-4 border border-[#0e0f0c]/5 text-left space-y-2">
            <span className="bg-[#e2f6d5] text-[#054d28] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block">
              Merchant Special · Verified
            </span>
            <p className="text-[12px] text-[#0e0f0c] font-medium leading-relaxed m-0">
              Winter breakfast specials launched featuring warm shakshuka and artisan sourdough toasties.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-6 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
                GC
              </div>
              <span className="text-[10px] font-semibold text-[#868685]">
                Goddess Cafe · 4th Ave · 1h ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <FloatingBottomNav activeTab="map" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCREEN 4: Resident Profile & Pass (Verified Resident)
───────────────────────────────────────────────────────────── */
function Screen4ResidentProfile() {
  return (
    <div className="w-full h-full bg-[#FCFAF7] text-[#0e0f0c] flex flex-col justify-between overflow-hidden relative select-none font-sans">
      <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        <StatusBar />

        {/* User Header */}
        <div className="px-5 pt-3 pb-3 flex items-center justify-between text-left">
          <div>
            <h1 className="text-[24px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
              My Profile.
            </h1>
            <span className="text-[10px] font-bold text-[#5C6656] uppercase tracking-[0.14em]">
              Verified Resident · Ward 99
            </span>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[15px]">
            LM
          </div>
        </div>

        {/* Hero Card: Forest Green Ink Banner (#1C472A) */}
        <div className="px-4 pt-1">
          <div className="bg-[#1C472A] text-white rounded-[22px] p-5 text-left space-y-2">
            <span className="text-[11px] font-bold text-[#7ED957] tracking-wide block">
              Digital Suburb Pass · Ward 99
            </span>
            <h2 className="text-[16px] font-extrabold text-white leading-snug m-0">
              Liam Montgomery
            </h2>
            <p className="text-[12px] text-white/80 leading-relaxed m-0 pb-1">
              Authenticated resident on 4th Avenue. Member ID: HL-LND-2026-8941.
            </p>
            <button className="bg-white hover:bg-[#F5F5F5] text-[#0e0f0c] text-[11px] font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all">
              <span>Show resident pass</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="px-4 pt-4">
          <div className="bg-[#EBEBEB] p-1 rounded-full flex items-center justify-between">
            <button className="bg-[#1C472A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex-1 text-center shadow-xs">
              Overview
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              My activity
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              Local perks
            </button>
          </div>
        </div>

        {/* Impact Counters (3 White Cards) */}
        <div className="px-4 pt-3.5 grid grid-cols-3 gap-2.5">
          <div className="bg-white p-3 rounded-[16px] border border-[#0e0f0c]/5 text-center">
            <span className="block text-[16px] font-extrabold text-[#1C472A]">14</span>
            <span className="text-[9px] font-bold text-[#868685] uppercase">Projects</span>
          </div>
          <div className="bg-white p-3 rounded-[16px] border border-[#0e0f0c]/5 text-center">
            <span className="block text-[16px] font-extrabold text-[#1C472A]">38</span>
            <span className="text-[9px] font-bold text-[#868685] uppercase">Posts</span>
          </div>
          <div className="bg-white p-3 rounded-[16px] border border-[#0e0f0c]/5 text-center">
            <span className="block text-[16px] font-extrabold text-[#1C472A]">12</span>
            <span className="text-[9px] font-bold text-[#868685] uppercase">Perks</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between text-left">
          <h3 className="text-[14px] font-extrabold text-[#1C472A] tracking-tight m-0">
            Active resident perks
          </h3>
          <span className="text-[11px] font-bold text-[#5C6656] cursor-pointer">
            Manage
          </span>
        </div>

        {/* Featured Big Photo Card */}
        <div className="px-4">
          <div className="relative h-[160px] w-full rounded-[20px] overflow-hidden">
            <Image
              src="/photography/breakfast.jpg"
              alt="15% Breakfast discount"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#7ED957] text-[#0e0f0c] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full">
                Resident Perk Active
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-left text-white">
              <h4 className="text-[14px] font-extrabold text-white leading-tight m-0">
                15% Off Weekday Breakfast
              </h4>
              <span className="text-[10px] text-white/90 font-medium">
                Valid at Goddess Cafe & The Whippet · Present Digital Pass
              </span>
            </div>
          </div>
        </div>

        {/* Community Contributions Card */}
        <div className="px-4 pt-3 pb-2">
          <div className="bg-white rounded-[20px] p-4 border border-[#0e0f0c]/5 text-left space-y-2">
            <span className="bg-[#e2f6d5] text-[#054d28] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block">
              Community Impact · Verified
            </span>
            <p className="text-[12px] text-[#0e0f0c] font-medium leading-relaxed m-0">
              Contributed to Spruit Solar Lighting initiative and volunteered for the quarterly park cleanup.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-6 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
                LM
              </div>
              <span className="text-[10px] font-semibold text-[#868685]">
                Liam M. · Linden Resident since 2019
              </span>
            </div>
          </div>
        </div>
      </div>

      <FloatingBottomNav activeTab="heart" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   SCREEN 5: Designed for Everyday Life (Why Hello Hyperlocal Spec)
───────────────────────────────────────────────────────────── */
function Screen5EverydayLife() {
  return (
    <div className="w-full h-full bg-[#FCFAF7] text-[#0e0f0c] flex flex-col justify-between overflow-hidden relative select-none font-sans">
      <div className="flex-1 overflow-y-auto pb-20 no-scrollbar">
        <StatusBar />

        {/* User Header */}
        <div className="px-5 pt-3 pb-3 flex items-center justify-between text-left">
          <div>
            <h1 className="text-[24px] font-extrabold text-[#0e0f0c] tracking-tight m-0 leading-tight">
              Hello Linden.
            </h1>
            <span className="text-[10px] font-bold text-[#5C6656] uppercase tracking-[0.14em]">
              Designed for Everyday Life
            </span>
          </div>
          <div className="h-10 w-10 rounded-full bg-[#1C472A] text-[#7ED957] flex items-center justify-center font-bold text-[13px] border border-[#7ED957]/30">
            HL
          </div>
        </div>

        {/* Hero Card: Forest Green Ink Banner (#1C472A) */}
        <div className="px-4 pt-1">
          <div className="bg-[#1C472A] text-white rounded-[22px] p-5 text-left space-y-2">
            <span className="text-[11px] font-bold text-[#7ED957] tracking-wide block">
              Why Hello Hyperlocal
            </span>
            <h2 className="text-[16px] font-extrabold text-white leading-snug m-0">
              Your suburb, authenticated
            </h2>
            <p className="text-[12px] text-white/80 leading-relaxed m-0 pb-1">
              Connect with verified neighbours, discover local culture, and stay informed with real-time community updates.
            </p>
            <button className="bg-white hover:bg-[#F5F5F5] text-[#0e0f0c] text-[11px] font-bold px-4 py-2 rounded-full inline-flex items-center gap-1.5 transition-all">
              <span>Join community</span>
              <ArrowRight className="h-3 w-3" />
            </button>
          </div>
        </div>

        {/* Segmented Filter Pills */}
        <div className="px-4 pt-4">
          <div className="bg-[#EBEBEB] p-1 rounded-full flex items-center justify-between">
            <button className="bg-[#1C472A] text-white text-[11px] font-bold px-3 py-1.5 rounded-full flex-1 text-center shadow-xs">
              Verified Feed
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              Local Spots
            </button>
            <button className="text-[#454745] text-[11px] font-semibold px-3 py-1.5 rounded-full flex-1 text-center">
              Ward Alerts
            </button>
          </div>
        </div>

        {/* Ticker Notice Text */}
        <div className="px-5 pt-3.5 text-left">
          <p className="text-[11px] text-[#454745] leading-relaxed m-0">
            100% address-verified resident posts · Zero anonymous trolls or corporate ads.
          </p>
        </div>

        {/* Section Header */}
        <div className="px-5 pt-4 pb-2 flex items-center justify-between text-left">
          <h3 className="text-[14px] font-extrabold text-[#1C472A] tracking-tight m-0">
            Community pulse
          </h3>
          <span className="text-[11px] font-bold text-[#5C6656] cursor-pointer">
            Ward 99
          </span>
        </div>

        {/* Featured Big Photo Card: Verified Neighbours */}
        <div className="px-4">
          <div className="relative h-[160px] w-full rounded-[20px] overflow-hidden">
            <Image
              src="/photography/linden-market-2.jpg"
              alt="Verified Neighbours in Linden"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute top-3 left-3">
              <span className="bg-[#7ED957] text-[#0e0f0c] text-[9px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full flex items-center gap-1">
                <Check className="h-2.5 w-2.5" strokeWidth={3} /> Verified Residents
              </span>
            </div>
            <div className="absolute bottom-3 left-3 right-3 text-left text-white">
              <h4 className="text-[14px] font-extrabold text-white leading-tight m-0">
                4th Avenue Block & Park Initiative
              </h4>
              <span className="text-[10px] text-white/90 font-medium">
                28 active neighbours coordinating quarterly trail restoration
              </span>
            </div>
          </div>
        </div>

        {/* 2-Column Grid: Discover Spots + Back Projects */}
        <div className="px-4 pt-3 grid grid-cols-2 gap-3">
          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/goddess-cafe-linden.jpg"
                alt="Discover Local Spots"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                Discover Local Spots
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                Goddess Cafe · 4th Ave
              </span>
            </div>
          </div>

          <div className="bg-white rounded-[18px] overflow-hidden border border-[#0e0f0c]/5 text-left">
            <div className="relative h-24 w-full bg-[#EBEBEB]">
              <Image
                src="/photography/linden-streetview.jpeg"
                alt="Back Ward Projects"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-2.5">
              <h5 className="text-[11px] font-extrabold text-[#0e0f0c] leading-tight m-0 truncate">
                Back Ward Projects
              </h5>
              <span className="text-[10px] font-bold text-[#1C472A] block mt-0.5">
                Spruit Solar Lights
              </span>
            </div>
          </div>
        </div>

        {/* Real-Time Ward Alert Card */}
        <div className="px-4 pt-3 pb-2">
          <div className="bg-white rounded-[20px] p-4 border border-[#0e0f0c]/5 text-left space-y-2">
            <span className="bg-[#e2f6d5] text-[#054d28] text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full inline-block">
              Real-Time Ward Alert · Verified
            </span>
            <p className="text-[12px] text-[#0e0f0c] font-medium leading-relaxed m-0">
              Ward 99 water maintenance scheduled for 3rd Avenue tomorrow from 09:00–13:00.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <div className="h-6 w-6 rounded-full bg-[#1C472A] text-white flex items-center justify-center font-bold text-[9px]">
                LCA
              </div>
              <span className="text-[10px] font-semibold text-[#868685]">
                LCA Ward 99 Committee · 12m ago
              </span>
            </div>
          </div>
        </div>
      </div>

      <FloatingBottomNav activeTab="home" />
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────
   Main Showcase Preview Page
───────────────────────────────────────────────────────────── */
export default function PhoneMockupPreviewPage() {
  const [viewMode, setViewMode] = useState<"framed" | "raw">("framed");
  const [scale, setScale] = useState<number>(1);

  return (
    <div className="min-h-screen bg-[#0E0F0C] text-white p-6 sm:p-10 font-sans">
      {/* Page Header & Toolbar */}
      <div className="max-w-7xl mx-auto mb-10 text-left border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-block rounded-full bg-[#7ED957]/20 text-[#7ED957] px-3 py-1 text-[11px] font-bold uppercase tracking-wider mb-2">
            Phone Frame & Mockup Suite
          </div>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Hello Linden — Phone Mockups
          </h1>
          <p className="text-sm text-white/60 mt-1 max-w-2xl">
            View the 1st mockup screen fitted and masked seamlessly inside the official <strong>phone-2.png</strong> frame, or toggle to raw 1:1 view for Shots.so.
          </p>
        </div>

        {/* Quick Controls */}
        <div className="flex flex-wrap items-center gap-3 self-start md:self-auto">
          {/* View Mode Toggle */}
          <div className="bg-white/10 p-1 rounded-2xl border border-white/10 flex items-center gap-1">
            <button
              onClick={() => setViewMode("framed")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "framed" ? "bg-[#7ED957] text-[#0e0f0c]" : "text-white/70 hover:text-white"
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span>Fitted in Phone-2.png</span>
            </button>
            <button
              onClick={() => setViewMode("raw")}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                viewMode === "raw" ? "bg-[#7ED957] text-[#0e0f0c]" : "text-white/70 hover:text-white"
              }`}
            >
              <Layers className="h-3.5 w-3.5" />
              <span>Raw 1:1 (Shots.so)</span>
            </button>
          </div>

          {/* Zoom Scale Buttons */}
          <div className="flex items-center gap-1 bg-white/10 p-1 rounded-2xl border border-white/10">
            <button
              onClick={() => setScale(0.85)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                scale === 0.85 ? "bg-white text-[#0e0f0c]" : "text-white/70 hover:text-white"
              }`}
            >
              85%
            </button>
            <button
              onClick={() => setScale(1)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                scale === 1 ? "bg-white text-[#0e0f0c]" : "text-white/70 hover:text-white"
              }`}
            >
              100%
            </button>
          </div>
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          FEATURED: 1st Mockup Screen Fitted inside phone-2.png
      ───────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-6">
          <span className="text-xs font-mono font-bold text-[#7ED957] uppercase tracking-wider block">
            ⭐ Fitted Device Mockup Frame
          </span>
          <h2 className="text-xl font-bold text-white mt-0.5">
            1st Mockup Screen inside <code className="text-[#7ED957] text-sm bg-white/10 px-2 py-0.5 rounded">public/phone-2.png</code>
          </h2>
        </div>

        <div
          style={{ transform: `scale(${scale})`, transformOrigin: "top center" }}
          className="flex justify-center transition-transform"
        >
          {viewMode === "framed" ? (
            <PhoneFramedMockup>
              <Screen1HomeFeed />
            </PhoneFramedMockup>
          ) : (
            <div className="w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl">
              <Screen1HomeFeed />
            </div>
          )}
        </div>
      </div>

      {/* ─────────────────────────────────────────────────────────
          ALL SCREENS GRID (Scrollable reference suite)
      ───────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-12">
        <div className="text-left mb-8">
          <span className="text-xs font-mono font-bold text-[#7ED957] uppercase tracking-wider block">
            Complete Mobile UI Suite
          </span>
          <h3 className="text-lg font-bold text-white mt-0.5">
            All 5 Screens ({viewMode === "framed" ? "Framed in phone-2.png" : "390px × 844px Viewports"})
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12 items-start justify-items-center">
          {/* Screen 1 */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#7ED957] uppercase">Screen 1 · Home Feed</span>
            {viewMode === "framed" ? (
              <PhoneFramedMockup>
                <Screen1HomeFeed />
              </PhoneFramedMockup>
            ) : (
              <div className="w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl">
                <Screen1HomeFeed />
              </div>
            )}
          </div>

          {/* Screen 5: Why Hello Hyperlocal */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#7ED957] uppercase">Screen 2 · Why Hello Hyperlocal</span>
            {viewMode === "framed" ? (
              <PhoneFramedMockup>
                <Screen5EverydayLife />
              </PhoneFramedMockup>
            ) : (
              <div className="w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl">
                <Screen5EverydayLife />
              </div>
            )}
          </div>

          {/* Screen 2: What's On */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#7ED957] uppercase">Screen 3 · What&apos;s On</span>
            {viewMode === "framed" ? (
              <PhoneFramedMockup>
                <Screen2WhatsOn />
              </PhoneFramedMockup>
            ) : (
              <div className="w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl">
                <Screen2WhatsOn />
              </div>
            )}
          </div>

          {/* Screen 3: Love Local */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#7ED957] uppercase">Screen 4 · Love Local</span>
            {viewMode === "framed" ? (
              <PhoneFramedMockup>
                <Screen3ExploreLinden />
              </PhoneFramedMockup>
            ) : (
              <div className="w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl">
                <Screen3ExploreLinden />
              </div>
            )}
          </div>

          {/* Screen 4: Resident Profile */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-mono font-bold text-[#7ED957] uppercase">Screen 5 · My Profile</span>
            {viewMode === "framed" ? (
              <PhoneFramedMockup>
                <Screen4ResidentProfile />
              </PhoneFramedMockup>
            ) : (
              <div className="w-[390px] h-[844px] rounded-[28px] overflow-hidden shadow-2xl">
                <Screen4ResidentProfile />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
