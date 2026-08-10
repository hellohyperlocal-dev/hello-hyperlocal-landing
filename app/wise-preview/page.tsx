"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Copy,
  Download,
  ExternalLink,
  FileCode,
  Globe,
  Lock,
  Moon,
  Search,
  Shield,
  Sun,
  X,
  Zap,
  Store,
  MapPin,
  Calendar,
  Users,
  Sparkles,
} from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";

// Suburbs data for interactive neighborhood search / deal calculator
const SUBURBS = {
  Linden: { name: "Linden, JHB", verifiedCount: "2,840", activeDeals: "18", flag: "📍" },
  Greenside: { name: "Greenside, JHB", verifiedCount: "1,920", activeDeals: "12", flag: "📍" },
  Parkhurst: { name: "Parkhurst, JHB", verifiedCount: "3,110", activeDeals: "24", flag: "📍" },
  Melville: { name: "Melville, JHB", verifiedCount: "1,450", activeDeals: "9", flag: "📍" },
};

export default function HelloHyperlocalDesignMdPreviewPage() {
  const [copied, setCopied] = useState<boolean>(false);
  const [showRawModal, setShowRawModal] = useState<boolean>(false);
  const [selectedSuburb, setSelectedSuburb] = useState<keyof typeof SUBURBS>("Linden");

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText("https://getdesign.md/hello-hyperlocal/design-md");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#111210] text-[#e8ebe6] font-sans selection:bg-[#7ED957] selection:text-[#0e0f0c]">
      
      {/* ─── 1. TOP GETDESIGN.MD CHROME HEADER ─── */}
      <header className="sticky top-0 z-50 bg-[#181916]/95 backdrop-blur-md border-b border-white/10 px-4 sm:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 text-label-13">
          <Link href="/" className="flex items-center gap-2 font-bold text-white hover:text-[#7ED957] transition-colors">
            <span className="h-6 w-6 rounded bg-[#7ED957] text-[#0e0f0c] font-black flex items-center justify-center text-xs">
              D
            </span>
            <span className="tracking-tight">getdesign.md</span>
          </Link>
          <span className="text-white/30">/</span>
          <span className="text-white/70">hello-hyperlocal</span>
          <span className="text-white/30">/</span>
          <span className="text-[#7ED957] font-medium">design.md</span>
          <span className="ml-2 px-2 py-0.5 rounded-full bg-white/10 text-white/70 text-[10px] uppercase tracking-wider font-bold">
            alpha
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 text-label-13 text-white/70 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            Landing Page <ExternalLink className="h-3.5 w-3.5" />
          </Link>
          
          <button
            onClick={() => setShowRawModal(true)}
            className="inline-flex items-center gap-1.5 text-label-13 text-white/80 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:bg-white/5 transition-colors"
          >
            <FileCode className="h-3.5 w-3.5" />
            <span>View Raw</span>
          </button>

          <button
            onClick={handleCopyMarkdown}
            className="bg-[#7ED957] hover:bg-[#cdffad] text-[#0e0f0c] text-button-12 font-semibold px-3.5 py-1.5 rounded-lg transition-all flex items-center gap-1.5"
          >
            {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
            <span>{copied ? "Copied" : "Copy Spec"}</span>
          </button>
        </div>
      </header>

      {/* ─── 2. MAIN DOCUMENT SHEET CONTAINER ─── */}
      <main className="max-w-[940px] mx-auto px-4 sm:px-6 py-10 sm:py-16">
        <div className="bg-[#ffffff] text-[#0e0f0c] rounded-[24px] border border-black/10 overflow-hidden">
          
          {/* ─── DOCUMENT HEADER / HERO CARD ─── */}
          <div className="bg-[#F5F5F5] p-8 sm:p-12 border-b border-[#0e0f0c]/10 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-label-12-mono font-bold uppercase tracking-wider text-[#454745] bg-white px-2.5 py-0.5 rounded-full border border-black/5">
                design.md
              </span>
              <span className="text-label-12-mono text-[#454745]">version: alpha</span>
            </div>

            <h1 className="text-heading-48 sm:text-heading-64 lg:text-[68px] leading-[1.05] tracking-[-0.04em] font-semibold text-[#0e0f0c] max-w-2xl">
              Design System Analysis of Hello Hyperlocal
            </h1>

            <p className="mt-6 text-copy-16 sm:text-copy-18 text-[#454745] max-w-2xl leading-relaxed">
              An inspired interpretation of Hello Hyperlocal's design language — a community network brand whose surface combines an authoritative near-black display sans with a vivid lime-green brand accent, sage-tinted surface neutrals, rounded white cards on a pale green-tinted canvas, and the technical precision of Vercel's Geist Typography System.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#7ED957] text-[#0e0f0c] text-label-12 font-semibold">
                33 tokens
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#0e0f0c] text-label-12 font-semibold border border-black/5">
                18 components
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#0e0f0c] text-label-12 font-semibold border border-black/5">
                Geist Typography
              </span>
            </div>
          </div>

          {/* ─── DOCUMENT BODY CONTENT ─── */}
          <div className="p-8 sm:p-12 space-y-16 text-left">
            
            {/* ─── SECTION 1: COLORS ─── */}
            <section id="colors" className="space-y-6">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Colors</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  A lime-green CTA on sage canvas.
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Hello Hyperlocal pairs its signature lime-green <code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono">#7ED957</code> primary CTA with a pale sage-tinted canvas <code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono">#F5F5F5</code> and near-black ink <code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono">#0e0f0c</code>.
                </p>
              </div>

              {/* Brand & Accent */}
              <div className="space-y-3">
                <h3 className="text-label-14 font-semibold text-[#0e0f0c]">Brand & Accent</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#7ED957] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#7ED957</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">primary</span>
                      <span className="block text-[11px] text-[#868685]">Universal CTA color</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#cdffad] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#cdffad</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">primary-active</span>
                      <span className="block text-[11px] text-[#868685]">Hover active state</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#c5edab] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#c5edab</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">primary-neutral</span>
                      <span className="block text-[11px] text-[#868685]">Mid-saturation green</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#e2f6d5] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#e2f6d5</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">primary-pale</span>
                      <span className="block text-[11px] text-[#868685]">Soft surface tint</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Surface */}
              <div className="space-y-3">
                <h3 className="text-label-14 font-semibold text-[#0e0f0c]">Surface</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#ffffff] border-b border-black/5 flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#ffffff</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">canvas</span>
                      <span className="block text-[11px] text-[#868685]">Card interiors</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#F5F5F5] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#F5F5F5</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">canvas-soft</span>
                      <span className="block text-[11px] text-[#868685]">Light page background</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#EBEBEB] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#EBEBEB</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">canvas-muted</span>
                      <span className="block text-[11px] text-[#868685]">Subtle card fill</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="space-y-3">
                <h3 className="text-label-14 font-semibold text-[#0e0f0c]">Text</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#0e0f0c] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-white">#0e0f0c</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">ink</span>
                      <span className="block text-[11px] text-[#868685]">Default text & headings</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#1C472A] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-white">#1C472A</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">ink-deep</span>
                      <span className="block text-[11px] text-[#868685]">Deep forest green ink</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#454745] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-white">#454745</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">body</span>
                      <span className="block text-[11px] text-[#868685]">Secondary body</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-20 bg-[#868685] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-white">#868685</span>
                    </div>
                    <div className="p-3">
                      <span className="block text-label-13 font-semibold text-[#0e0f0c]">mute</span>
                      <span className="block text-[11px] text-[#868685]">Captions & placeholders</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Semantic Palettes */}
              <div className="space-y-3">
                <h3 className="text-label-14 font-semibold text-[#0e0f0c]">Semantic</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-16 bg-[#2ead4b] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-white">#2ead4b</span>
                    </div>
                    <div className="p-2.5">
                      <span className="block text-label-12 font-semibold text-[#0e0f0c]">positive</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-16 bg-[#ffd11a] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#ffd11a</span>
                    </div>
                    <div className="p-2.5">
                      <span className="block text-label-12 font-semibold text-[#0e0f0c]">warning</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-16 bg-[#d03238] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-white">#d03238</span>
                    </div>
                    <div className="p-2.5">
                      <span className="block text-label-12 font-semibold text-[#0e0f0c]">negative</span>
                    </div>
                  </div>

                  <div className="rounded-[16px] border border-black/10 overflow-hidden bg-white">
                    <div className="h-16 bg-[#ffc091] flex items-end p-2.5">
                      <span className="text-label-12-mono font-bold text-[#0e0f0c]">#ffc091</span>
                    </div>
                    <div className="p-2.5">
                      <span className="block text-label-12 font-semibold text-[#0e0f0c]">accent-orange</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── SECTION 2: TYPOGRAPHY LADDER ─── */}
            <section id="typography" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Typography</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Weight 900 for hero, 600 for everything else.
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Rendered with Vercel's <strong>Geist Typography System</strong> (`GeistSans` and `GeistMono`). Negative letter spacing calibrated for high visual impact on large displays.
                </p>
              </div>

              {/* Specimen Ladder List */}
              <div className="space-y-8 pt-4 divide-y divide-[#0e0f0c]/10">
                
                {/* display-mega (165px) */}
                <div className="pt-8 flex flex-col gap-4">
                  <div className="flex items-center justify-between text-label-12-mono pb-2 border-b border-[#0e0f0c]/10">
                    <span className="font-bold text-[#0e0f0c] text-sm">display-mega</span>
                    <span className="bg-[#F5F5F5] px-2.5 py-0.5 rounded text-[#0e0f0c] font-semibold">165px · 600 · -9.9px</span>
                  </div>
                  <div className="py-2">
                    <div className="text-[84px] sm:text-[120px] md:text-[150px] lg:text-[165px] leading-[0.88] tracking-[-9.9px] font-semibold text-[#0e0f0c] text-pretty">
                      Send money.<br />Get the best rate.
                    </div>
                  </div>
                </div>

                {/* display-xxl (96px) */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">display-xxl</span>
                    <span>96px · 600 · -4.32px</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-[64px] sm:text-[80px] md:text-[96px] leading-[0.95] tracking-[-4.32px] font-semibold text-[#0e0f0c]">
                      Sub-hero scale.
                    </div>
                  </div>
                </div>

                {/* display-xl (72px) */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">display-xl</span>
                    <span>72px · 600 · -4.32px</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-heading-72 text-[#0e0f0c]">
                      A standard hero lives here.
                    </div>
                  </div>
                </div>

                {/* display-md */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">display-md (Section Headings)</span>
                    <span>50px · 600 · -3.00px</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-heading-50 text-[#0e0f0c]">
                      Everything your neighbourhood needs.
                    </div>
                  </div>
                </div>

                {/* display-sm */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">display-sm</span>
                    <span>32px · 600 · -1.28px</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-heading-32 text-[#0e0f0c]">
                      Section header in 32px.
                    </div>
                  </div>
                </div>

                {/* display-xs */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">display-xs</span>
                    <span>24px · 600 · -0.96px</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-heading-24 text-[#0e0f0c]">
                      Verified Local Feed & Deals
                    </div>
                  </div>
                </div>

                {/* body-lg */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">body-lg</span>
                    <span>20px · 400 · 36px</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-copy-20 text-[#454745]">
                      Discover local deals, verified neighbour updates, and community events in your suburb — all in one app.
                    </div>
                  </div>
                </div>

                {/* body-md & body-md-strong */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">body-md</span>
                    <span>16px · 400 & 600</span>
                  </div>
                  <div className="md:col-span-8">
                    <div className="text-copy-16 text-[#454745]">
                      Default paragraph body. <strong>100% verified residents matched to physical addresses</strong> to eliminate trolls and spam.
                    </div>
                  </div>
                </div>

                {/* caption & button-md */}
                <div className="pt-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline">
                  <div className="md:col-span-4 text-label-12-mono text-[#868685]">
                    <span className="block font-bold text-[#0e0f0c]">caption / button-md</span>
                    <span>12px / 16px</span>
                  </div>
                  <div className="md:col-span-8 flex flex-wrap items-center gap-4">
                    <span className="text-label-12 text-[#868685]">Caption note in 12px</span>
                    <button className="bg-[#7ED957] text-[#0e0f0c] text-button-14 px-4 py-2 rounded-full font-semibold">
                      Download the app
                    </button>
                  </div>
                </div>

              </div>
            </section>

            {/* ─── SECTION 3: SHAPES & RADII ─── */}
            <section id="shapes" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Shapes</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Pill-rectangles at 24 px.
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  The brand's canonical card and button radius is <code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono font-bold">24px</code> (xl). It creates a soft, friendly Scandinavian community voice.
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-2">
                <div className="rounded-[8px] bg-[#F5F5F5] p-4 text-center">
                  <span className="text-label-12-mono font-bold text-[#0e0f0c] block">sm</span>
                  <span className="text-[11px] text-[#868685]">8px</span>
                </div>
                <div className="rounded-[12px] bg-[#F5F5F5] p-4 text-center">
                  <span className="text-label-12-mono font-bold text-[#0e0f0c] block">md</span>
                  <span className="text-[11px] text-[#868685]">12px</span>
                </div>
                <div className="rounded-[16px] bg-[#F5F5F5] p-4 text-center">
                  <span className="text-label-12-mono font-bold text-[#0e0f0c] block">lg</span>
                  <span className="text-[11px] text-[#868685]">16px</span>
                </div>
                <div className="rounded-[24px] bg-[#7ED957] p-4 text-center">
                  <span className="text-label-12-mono font-bold text-[#0e0f0c] block">xl (Canonical)</span>
                  <span className="text-[11px] text-[#0e0f0c]/70 font-semibold">24px</span>
                </div>
                <div className="rounded-full bg-[#F5F5F5] p-4 text-center">
                  <span className="text-label-12-mono font-bold text-[#0e0f0c] block">pill</span>
                  <span className="text-[11px] text-[#868685]">9999px</span>
                </div>
                <div className="h-16 w-16 mx-auto rounded-full bg-[#0e0f0c] text-white flex flex-col items-center justify-center">
                  <span className="text-label-12-mono font-bold block leading-none">full</span>
                </div>
              </div>
            </section>

            {/* ─── SECTION 4: BUTTONS & MICRO-ANIMATIONS ─── */}
            <section id="buttons" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Controls & Micro-Animations</span>
                <h2 className="text-heading-32 sm:text-heading-50 text-[#0e0f0c] mt-1">
                  Button arrow flip & pill controls.
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Interactive controls feature canonical 24px pill geometry. Hover over the buttons below to preview the dual-element <strong>Arrow Flip</strong> micro-animation.
                </p>
              </div>

              <div className="bg-[#F5F5F5] rounded-[24px] p-6 sm:p-8 flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-4">
                  {/* button-primary with Arrow Flip */}
                  <button className="group bg-[#7ED957] hover:bg-[#cdffad] active:bg-[#c5edab] text-[#0e0f0c] text-button-14 px-6 py-3.5 rounded-[24px] font-semibold transition-all flex items-center gap-2">
                    <span>button-arrow-flip</span>
                    <ArrowFlipIcon size={16} />
                  </button>

                  {/* button-primary standard */}
                  <button className="bg-[#7ED957] hover:bg-[#cdffad] active:bg-[#c5edab] text-[#0e0f0c] text-button-14 px-6 py-3.5 rounded-[24px] font-semibold transition-all">
                    button-primary
                  </button>

                  {/* button-secondary */}
                  <button className="group bg-white hover:bg-[#f3f5f1] text-[#0e0f0c] text-button-14 px-6 py-3.5 rounded-[24px] font-semibold transition-all border border-[#0e0f0c]/10 flex items-center gap-2">
                    <span>button-secondary</span>
                    <ArrowFlipIcon size={16} />
                  </button>

                  {/* button-tertiary */}
                  <button className="bg-transparent hover:bg-[#0e0f0c]/5 text-[#0e0f0c] border border-[#0e0f0c] text-button-14 px-6 py-3.5 rounded-[24px] font-semibold transition-all">
                    button-tertiary
                  </button>

                  {/* button-icon-circular with flip */}
                  <button className="group h-12 w-12 rounded-full bg-white border border-[#0e0f0c]/10 hover:bg-[#7ED957] flex items-center justify-center text-[#0e0f0c] transition-all">
                    <ArrowFlipIcon size={16} />
                  </button>
                </div>

                <div className="pt-4 border-t border-[#0e0f0c]/10 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-label-12-mono text-[#868685]">Status Pills:</span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e2f6d5] text-[#054d28] text-label-12 font-semibold">
                      <Check className="h-3 w-3" /> badge-positive
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#320707] text-white text-label-12 font-semibold">
                      <X className="h-3 w-3" /> badge-negative
                    </span>
                  </div>
                  <span className="text-label-12-mono text-[#454745]">
                    Motion: cubic-bezier(0.16, 1, 0.3, 1) · 0.3s
                  </span>
                </div>
              </div>
            </section>

            {/* ─── SECTION 5: CARD PRIMITIVES ─── */}
            <section id="cards" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Cards</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Pill cards on sage canvas.
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Four primary card surfaces ladder the Hello Hyperlocal content layout:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* card-content */}
                <div className="rounded-[24px] bg-[#ffffff] p-6 border border-[#0e0f0c]/10">
                  <span className="text-label-12-mono text-[#868685] block mb-1">card-content</span>
                  <h3 className="text-heading-20 text-[#0e0f0c] mb-2">Verified Resident Feed</h3>
                  <p className="text-copy-14 text-[#454745]">
                    Standard white card with 1px soft hairline border on sage canvas.
                  </p>
                </div>

                {/* card-content-elevated */}
                <div className="rounded-[24px] bg-[#ffffff] p-6 shadow-[0_4px_24px_rgba(14,15,12,0.1)] border-none">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-label-12-mono text-[#054d28] font-semibold">card-content-elevated</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#e2f6d5] text-[#054d28] rounded-full">Elevated</span>
                  </div>
                  <h3 className="text-heading-20 text-[#0e0f0c] mb-2">Neighbourhood Alerts</h3>
                  <p className="text-copy-14 text-[#454745]">
                    Elevated white surface with no border and a soft subtle shadow for floating hierarchy.
                  </p>
                </div>

                {/* card-feature-sage */}
                <div className="rounded-[24px] bg-[#F5F5F5] p-6 border border-[#0e0f0c]/10">
                  <span className="text-label-12-mono text-[#868685] block mb-1">card-feature-sage</span>
                  <h3 className="text-heading-20 text-[#0e0f0c] mb-2">Love Local Directory</h3>
                  <p className="text-copy-14 text-[#454745]">
                    Discover and support independent cafes, shops, and service providers.
                  </p>
                </div>

                {/* card-feature-green */}
                <div className="rounded-[24px] bg-[#e2f6d5] p-6 border border-[#054d28]/10">
                  <span className="text-label-12-mono text-[#054d28] block mb-1">card-feature-green</span>
                  <h3 className="text-heading-20 text-[#0e0f0c] mb-2">Resident-Only Specials</h3>
                  <p className="text-copy-14 text-[#0e0f0c]/80">
                    Unlock exclusive 15% discounts and loyalty stamps from local partners.
                  </p>
                </div>

                {/* card-feature-dark-primary (#1C472A) */}
                <div className="rounded-[24px] bg-[#1C472A] p-6 text-white border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-label-12-mono text-[#7ED957] font-semibold">card-feature-dark-primary</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#7ED957]/20 text-[#7ED957] rounded-full">#1C472A Forest</span>
                  </div>
                  <h3 className="text-heading-20 text-[#7ED957] mb-2">Merchant Business Portal</h3>
                  <p className="text-copy-14 text-white/80">
                    Primary dark feature surface rendered in deep forest green ink for high-engagement business tools.
                  </p>
                </div>

                {/* card-feature-dark-secondary (#0e0f0c) */}
                <div className="rounded-[24px] bg-[#0e0f0c] p-6 text-white border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-label-12-mono text-[#868685] font-semibold">card-feature-dark-secondary</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-white/10 text-white/80 rounded-full">#0e0f0c Ink</span>
                  </div>
                  <h3 className="text-heading-20 text-white mb-2">Municipal & Security Alerts</h3>
                  <p className="text-copy-14 text-white/70">
                    Secondary dark feature surface rendered in authoritative near-black ink.
                  </p>
                </div>
              </div>

              {/* Signature Interactive Suburb Hub Card */}
              <div className="mt-8 rounded-[24px] bg-[#ffffff] border-2 border-[#0e0f0c] p-6 sm:p-8 max-w-lg mx-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-label-14 font-bold text-[#0e0f0c]">suburb-hub-card</span>
                  <span className="text-label-12-mono font-bold px-2.5 py-0.5 rounded-full bg-[#e2f6d5] text-[#054d28]">
                    Verified
                  </span>
                </div>

                <div className="space-y-3">
                  <div className="rounded-[16px] border border-[#0e0f0c]/30 p-3 flex items-center justify-between">
                    <div>
                      <span className="block text-[11px] text-[#868685]">Select Suburb</span>
                      <span className="text-heading-20 font-bold">{SUBURBS[selectedSuburb].name}</span>
                    </div>
                    <select
                      value={selectedSuburb}
                      onChange={(e) => setSelectedSuburb(e.target.value as keyof typeof SUBURBS)}
                      className="bg-[#F5F5F5] px-3 py-1.5 rounded-full text-label-14 font-bold outline-none cursor-pointer"
                    >
                      {Object.keys(SUBURBS).map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className="text-copy-13 text-[#454745] pl-3 py-1 flex justify-between">
                    <span>Verified Residents: {SUBURBS[selectedSuburb].verifiedCount}</span>
                    <span className="font-semibold text-[#054d28]">Active Deals: {SUBURBS[selectedSuburb].activeDeals}</span>
                  </div>

                  <button className="w-full bg-[#7ED957] hover:bg-[#cdffad] text-[#0e0f0c] text-button-14 font-semibold py-3 rounded-[24px] transition-all">
                    Join {selectedSuburb} Community
                  </button>
                </div>
              </div>
            </section>

            {/* ─── SECTION 5: SPACING RHYTHM ─── */}
            <section id="spacing" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Spacing</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  A 4 px rhythm from xxs to 3xl.
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Base unit 4px. Structural padding relies on 48px (3xl) and card interior uses 24px (xl).
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                {[
                  { name: "xxs", val: "2px", w: "4%" },
                  { name: "xs", val: "4px", w: "8%" },
                  { name: "sm", val: "8px", w: "16%" },
                  { name: "md", val: "12px", w: "24%" },
                  { name: "lg", val: "16px", w: "32%" },
                  { name: "xl", val: "24px", w: "48%" },
                  { name: "2xl", val: "32px", w: "64%" },
                  { name: "3xl", val: "48px", w: "96%" },
                ].map((s) => (
                  <div key={s.name} className="flex items-center gap-4 text-label-12-mono">
                    <span className="w-12 text-[#868685]">{s.name}</span>
                    <span className="w-12 font-bold text-[#0e0f0c]">{s.val}</span>
                    <div className="flex-1 bg-[#F5F5F5] h-6 rounded-md overflow-hidden">
                      <div className="bg-[#7ED957] h-full rounded-md" style={{ width: s.w }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* ─── SECTION 6: SIGNATURE MOMENTS ─── */}
            <section id="signature" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Signatures</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  The pieces that assemble Hello Hyperlocal.
                </h2>
              </div>

              {/* hero-band */}
              <div className="rounded-[24px] bg-[#F5F5F5] p-8 sm:p-12">
                <span className="text-label-12-mono text-[#868685] block mb-2">hero-band</span>
                <div className="text-heading-48 sm:text-heading-64 font-semibold text-[#0e0f0c]">
                  Love where you live.
                </div>
              </div>

              {/* hero-band-dark */}
              <div className="rounded-[24px] bg-[#0e0f0c] p-8 sm:p-12 text-white shadow-xl">
                <span className="text-label-12-mono text-[#9fe870] block mb-2">hero-band-dark</span>
                <div className="text-heading-48 sm:text-heading-64 font-semibold text-[#9fe870]">
                  Connected neighbours.
                </div>
              </div>
            </section>

          </div>

          {/* ─── DOCUMENT FOOTER ─── */}
          <div className="bg-[#0e0f0c] text-[#868685] p-8 text-center text-label-12 border-t border-black/10">
            <p>© 2026 getdesign.md spec mirror · Hello Hyperlocal Design Analysis updated with Geist Typography.</p>
          </div>

        </div>
      </main>

      {/* ─── RAW MARKDOWN MODAL ─── */}
      {showRawModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-[#181916] border border-white/10 rounded-[24px] max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden text-left shadow-2xl">
            <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
              <span className="text-label-14 font-bold text-white">Raw design.md</span>
              <button onClick={() => setShowRawModal(false)} className="text-white/60 hover:text-white">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="p-4 sm:p-6 overflow-y-auto font-mono text-xs text-white/80 space-y-2 bg-[#0e0f0c]">
              <pre className="whitespace-pre-wrap">{`---
version: alpha
name: Hello-Hyperlocal-design-analysis
description: An inspired interpretation of Hello Hyperlocal's design language...

colors:
  primary: "#7ED957"
  on-primary: "#0e0f0c"
  canvas: "#ffffff"
  canvas-soft: "#F5F5F5"
  ink: "#0e0f0c"

typography:
  display-mega:
    fontFamily: var(--font-geist-sans), sans-serif
    fontSize: 165px
    fontWeight: 600
    letterSpacing: -9.9px
  display-xl:
    fontSize: 72px
    letterSpacing: -4.32px
  display-md:
    fontSize: 50px
    letterSpacing: -3.00px
  body-md:
    fontSize: 16px

components:
  card-content:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
  card-content-elevated:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
    border: "none"
    shadow: "0 4px 24px rgba(14, 15, 12, 0.1)"
  card-feature-dark-primary:
    backgroundColor: "{colors.ink-deep}" # #1C472A
    textColor: "{colors.primary}" # #7ED957
    rounded: "{rounded.xl}"
  card-feature-dark-secondary:
    backgroundColor: "{colors.ink}" # #0e0f0c
    textColor: "{colors.primary}" # #7ED957
    rounded: "{rounded.xl}"

rounded:
  xl: 24px
  pill: 9999px
---`}</pre>
            </div>
            <div className="p-4 border-t border-white/10 flex justify-end">
              <button
                onClick={() => setShowRawModal(false)}
                className="bg-white/10 hover:bg-white/20 text-white text-button-12 px-4 py-2 rounded-lg font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
