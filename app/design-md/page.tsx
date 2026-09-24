"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
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
  Handshake,
  MapPin,
  Calendar,
  Users,
  Sparkles,
  Compass,
  Layers,
  ListOrdered,
  ShieldCheck,
  Smartphone,
  HelpCircle,
  Heart,
  CheckCircle2,
  AlertTriangle,
  AlertOctagon,
  Info,
} from "lucide-react";

// Inline helper components for clean standalone preview
function EyebrowPill({
  children,
  icon: Icon,
  variant = "standard",
}: {
  children: React.ReactNode;
  icon?: React.ElementType;
  variant?: "standard" | "dark" | "accent" | "surface-contrast";
}) {
  const variantStyles = {
    standard: "bg-[#e2f6d5] text-[#054d28] border border-[#0e0f0c]/5",
    dark: "bg-white/10 text-[#7ED957] border border-white/10",
    accent: "bg-[#7ED957] text-[#0e0f0c]",
    "surface-contrast": "bg-[#1C472A] text-[#7ED957]",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-semibold leading-none ${variantStyles[variant]}`}
    >
      {Icon && <Icon className="h-3.5 w-3.5 shrink-0" strokeWidth={2.2} />}
      <span>{children}</span>
    </span>
  );
}

function ArrowFlipIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <span className={`inline-flex items-center ${className}`}>
      <ArrowRight style={{ width: size, height: size }} />
    </span>
  );
}

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
              An inspired interpretation of Hello Hyperlocal&apos;s design language — a community network brand whose surface combines an authoritative near-black display sans with a vivid lime-green brand accent, sage-tinted surface neutrals, rounded white cards on a pale green-tinted canvas, and technical precision.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full bg-[#7ED957] text-[#0e0f0c] text-label-12 font-semibold">
                33 tokens
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#0e0f0c] text-label-12 font-semibold border border-black/5">
                18 components
              </span>
              <span className="px-3 py-1 rounded-full bg-white text-[#0e0f0c] text-label-12 font-semibold border border-black/5">
                Design System Spec
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

            {/* ─── SECTION 1.5: TYPOGRAPHY & SCALE TOKENS ─── */}
            <section id="typography" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10 text-left">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Typography</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Font Families & Type Ladder Tokens
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Headings use <code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono font-bold text-[#0e0f0c]">Bricolage Grotesque</code> (<code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono">var(--font-heading)</code>). Body copy, controls, and labels use <code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono font-bold text-[#0e0f0c]">Geist</code> (<code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono">font-sans</code>).
                </p>
              </div>

              {/* Core Utility Swatches on White Background with Dividers */}
              <div className="divide-y divide-[#0e0f0c]/10 rounded-[24px] bg-white p-6 sm:p-8 border border-[#0e0f0c]/10">
                {/* type-h1 */}
                <div className="pb-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-label-12-mono font-mono text-[#868685]">type-h1</span>
                    <span className="text-xs font-mono text-[#868685]">
                      Bricolage Grotesque · 46px/68px/80px · 700 · line-height 0.9 · letter-spacing -3px
                    </span>
                  </div>
                  <div className="type-h1 text-[#0e0f0c]">
                    Love Where You Live
                  </div>
                </div>

                {/* type-h2 */}
                <div className="py-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-label-12-mono font-mono text-[#868685]">type-h2</span>
                    <span className="text-xs font-mono text-[#868685]">
                      Bricolage Grotesque · 36px/40px/48px · 600 · line-height 1.0 · letter-spacing -2.2px
                    </span>
                  </div>
                  <div className="type-h2 text-[#0e0f0c]">
                    Get Started with Hello Linden
                  </div>
                </div>

                {/* type-h3 */}
                <div className="py-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-label-12-mono font-mono text-[#868685]">type-h3</span>
                    <span className="text-xs font-mono text-[#868685]">
                      Bricolage Grotesque · 22px · 500 · line-height 26.4px · letter-spacing -1px
                    </span>
                  </div>
                  <div className="type-h3 text-[#0e0f0c]">
                    Founding Partners & Local Merchants
                  </div>
                </div>

                {/* type-stat */}
                <div className="py-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-label-12-mono font-mono text-[#868685]">type-stat</span>
                    <span className="text-xs font-mono text-[#868685]">
                      Bricolage Grotesque · 56px/78px · 500 · line-height 1.0
                    </span>
                  </div>
                  <div className="type-stat text-[#1C472A]">
                    85%
                  </div>
                </div>

                {/* type-body-lg */}
                <div className="py-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-label-12-mono font-mono text-[#868685]">type-body-lg</span>
                    <span className="text-xs font-mono text-[#868685]">
                      Geist · 20px · 400 · line-height 30px · letter-spacing -0.6px
                    </span>
                  </div>
                  <div className="type-body-lg text-[#0e0f0c]">
                    Hello Linden is coming in 2026. Register early to help shape it for the neighbourhood you call home.
                  </div>
                </div>

                {/* type-body */}
                <div className="pt-6 space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-label-12-mono font-mono text-[#868685]">type-body</span>
                    <span className="text-xs font-mono text-[#868685]">
                      Geist · 16px · 400 · line-height 24px · letter-spacing -0.6px
                    </span>
                  </div>
                  <div className="type-body text-[#454745]">
                    Standard body copy used for card descriptions, paragraph content, and verified resident feed updates.
                  </div>
                </div>
              </div>
            </section>

            {/* ─── SECTION 2: UNIFIED SECTION EYEBROW SYSTEM ─── */}
            <section id="eyebrow-pills" className="space-y-8 pt-8 border-t border-[#0e0f0c]/10 text-left">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Canonical UI Components</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Section Eyebrow System
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Standardized live-status section headers. Features a pulsing lime dot (<code className="text-xs bg-[#F5F5F5] px-1.5 py-0.5 rounded font-mono font-bold">#7ED957</code>) with an expanding ping animation ring and clean Title Case typography.
                </p>
              </div>

              {/* Tones Preview Grid */}
              <div className="space-y-3">
                <h3 className="text-heading-20 text-[#0e0f0c]">
                  Canonical Tones & Surface Rendering
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Light Tone */}
                  <div className="p-6 rounded-[24px] bg-[#FCFAF7] border border-[#0e0f0c]/10 space-y-4">
                    <span className="text-[11px] font-bold text-[#868685] font-mono uppercase tracking-wider block">tone="light" (Default)</span>
                    <div className="py-2">
                      <SectionEyebrow label="Get Started" tone="light" />
                    </div>
                    <p className="text-[13px] text-[#454745] m-0 leading-relaxed">
                      Dark onyx text (<code className="text-xs bg-white px-1.5 py-0.5 rounded font-mono">#0e0f0c</code>) with lime pulsing dot. Used on all white, sage, and light background sections (Hero, Get Started, Our Story, How It Works, For Businesses, FAQ, Partners).
                    </p>
                  </div>

                  {/* Dark Tone */}
                  <div className="p-6 rounded-[24px] bg-[#1C472A] border border-white/10 space-y-4 text-white">
                    <span className="text-[11px] font-bold text-white/60 font-mono uppercase tracking-wider block">tone="dark"</span>
                    <div className="py-2">
                      <SectionEyebrow label="For Residents" tone="dark" />
                    </div>
                    <p className="text-[13px] text-white/80 m-0 leading-relaxed">
                      Mint pale text (<code className="text-xs bg-black/30 px-1.5 py-0.5 rounded font-mono">#e2f6d5</code>) with lime pulsing dot. Used on dark forest green surfaces (<code className="text-xs bg-black/30 px-1.5 py-0.5 rounded font-mono">#1C472A</code>).
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. Purpose-Driven Semantic Color Matrix */}
              <div className="space-y-3 pt-6 border-t border-[#0e0f0c]/10">
                <h3 className="text-heading-20 text-[#0e0f0c]">
                  2. Semantic Color & Visual Language Matrix
                </h3>
                <p className="text-[14px] text-[#454745] m-0">
                  Purpose-driven semantic feedback colors maintaining WCAG AAA/AA accessibility contrast compliance:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                  {/* Semantic 1: Success / Verified */}
                  <div className="p-4 rounded-[20px] bg-[#e2f6d5] border border-[#054d28]/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#054d28]">Success / Verified</span>
                      <CheckCircle2 className="h-4 w-4 text-[#054d28]" />
                    </div>
                    <div className="text-[16px] font-bold text-[#054d28]">
                      100% Verified Pass
                    </div>
                    <span className="inline-block text-[11px] font-bold bg-[#1C472A] text-[#7ED957] px-2 py-0.5 rounded-full">
                      7.6:1 (AAA)
                    </span>
                    <p className="text-[11.5px] text-[#054d28]/80 m-0">
                      Physical address verification, confirmed perks, success toasts.
                    </p>
                  </div>

                  {/* Semantic 2: Warning / Notice */}
                  <div className="p-4 rounded-[20px] bg-[#FEF3C7] border border-[#B45309]/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309]">Warning / Notice</span>
                      <AlertTriangle className="h-4 w-4 text-[#B45309]" />
                    </div>
                    <div className="text-[16px] font-bold text-[#B45309]">
                      Scheduled Maintenance
                    </div>
                    <span className="inline-block text-[11px] font-bold bg-[#B45309] text-white px-2 py-0.5 rounded-full">
                      5.4:1 (AA)
                    </span>
                    <p className="text-[11.5px] text-[#B45309]/80 m-0">
                      Municipal repair notices, power advisories, review pending.
                    </p>
                  </div>

                  {/* Semantic 3: Danger / Outage */}
                  <div className="p-4 rounded-[20px] bg-[#FEE2E2] border border-[#991B1B]/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#991B1B]">Danger / Outage</span>
                      <AlertOctagon className="h-4 w-4 text-[#991B1B]" />
                    </div>
                    <div className="text-[16px] font-bold text-[#991B1B]">
                      Substation 4 Outage
                    </div>
                    <span className="inline-block text-[11px] font-bold bg-[#991B1B] text-white px-2 py-0.5 rounded-full">
                      5.8:1 (AA)
                    </span>
                    <p className="text-[11.5px] text-[#991B1B]/80 m-0">
                      Emergency safety alerts, urgent outages, form validation errors.
                    </p>
                  </div>

                  {/* Semantic 4: Info / Civic Action */}
                  <div className="p-4 rounded-[20px] bg-[#DBEAFE] border border-[#1E40AF]/15 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E40AF]">Info / Civic Action</span>
                      <Info className="h-4 w-4 text-[#1E40AF]" />
                    </div>
                    <div className="text-[16px] font-bold text-[#1E40AF]">
                      Ward 99 Project (85%)
                    </div>
                    <span className="inline-block text-[11px] font-bold bg-[#1E40AF] text-white px-2 py-0.5 rounded-full">
                      6.1:1 (AA)
                    </span>
                    <p className="text-[11.5px] text-[#1E40AF]/80 m-0">
                      Ward infrastructure milestones, community projects, voting dates.
                    </p>
                  </div>
                </div>
              </div>

            </section>

            {/* ─── SECTION 3: BUTTONS & CONTROLS ─── */}
            <section id="buttons" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Controls & Micro-Animations</span>
                <h2 className="text-heading-32 sm:text-heading-50 text-[#0e0f0c] mt-1">
                  Button & pill controls.
                </h2>
              </div>

              <div className="bg-[#F5F5F5] rounded-[24px] p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-6">
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-label-12-mono text-[#868685] font-mono">button-primary</span>
                    <CtaLink href="#buttons" surface="light">
                      button-primary
                    </CtaLink>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="text-label-12-mono text-[#868685] font-mono">button-secondary</span>
                    <CtaLink href="#buttons" variant="text" surface="light">
                      button-secondary
                    </CtaLink>
                  </div>

                  <div className="flex flex-col items-start gap-2">
                    <span className="text-label-12-mono text-[#868685] font-mono">button-tertiary</span>
                    <CtaLink href="#buttons" variant="primary" surface="lime">
                      button-tertiary
                    </CtaLink>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── SECTION 4: CARD PRIMITIVES ─── */}
            <section id="cards" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Cards</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Pill cards on sage canvas.
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-[24px] bg-[#ffffff] p-6 border border-[#0e0f0c]/10">
                  <span className="text-label-12-mono text-[#868685] block mb-1">card-content</span>
                  <h3 className="text-heading-20 text-[#0e0f0c] mb-2">Verified Resident Feed</h3>
                  <p className="text-copy-14 text-[#454745]">
                    Standard white card with 1px soft hairline border on sage canvas.
                  </p>
                </div>

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

                <div className="rounded-[24px] bg-[#1C472A] p-6 text-white border border-white/5">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-label-12-mono text-[#7ED957] font-semibold">card-feature-dark-primary</span>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 bg-[#7ED957]/20 text-[#7ED957] rounded-full">#1C472A Forest</span>
                  </div>
                  <h3 className="text-heading-20 text-[#7ED957] mb-2">Merchant Business Portal</h3>
                  <p className="text-copy-14 text-white/80">
                    Primary dark feature surface rendered in deep forest green ink.
                  </p>
                </div>

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
            </section>

            {/* ─── SECTION 5: ICON BOXES ─── */}
            <section id="icon-boxes" className="space-y-6 pt-8 border-t border-[#0e0f0c]/10 text-left">
              <div>
                <span className="text-label-12 font-bold uppercase tracking-[0.14em] text-[#868685]">Icon Box Primitives</span>
                <h2 className="text-heading-32 sm:text-heading-40 text-[#0e0f0c] mt-1">
                  Feature Icon Boxes
                </h2>
                <p className="text-copy-16 text-[#454745] mt-2 max-w-2xl">
                  Standardized icon box feature cards used across section feature grids (e.g. Partners & Investors section).
                </p>
              </div>

              <div className="bg-[#FCFAF7] rounded-[24px] p-6 sm:p-8 border border-[#0e0f0c]/10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Primary Icon Box */}
                  <div className="rounded-[24px] bg-white p-6 border border-[#0e0f0c]/10 flex flex-col items-start gap-4">
                    <span className="text-label-12-mono font-mono text-[#868685] block">icon-box-primary</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#1C472A] text-[#7ED957]">
                      <Handshake className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="m-0 type-h3 text-[#0e0f0c]">Primary Icon Box</h3>
                      <p className="m-0 type-body text-[#454745]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  {/* Secondary Icon Box */}
                  <div className="rounded-[24px] bg-[#f5f5f5] p-6 border border-[#0e0f0c]/10 flex flex-col items-start gap-4">
                    <span className="text-label-12-mono font-mono text-[#868685] block">icon-box-secondary</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#7ED957] text-[#0e0f0c]">
                      <Handshake className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="m-0 type-h3 text-[#0e0f0c]">Secondary Icon Box</h3>
                      <p className="m-0 type-body text-[#454745]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>

                  {/* Tertiary Icon Box */}
                  <div className="rounded-[24px] bg-[#e2f6d5] p-6 border border-[#0e0f0c]/10 flex flex-col items-start gap-4">
                    <span className="text-label-12-mono font-mono text-[#1C472A]/70 block">icon-box-tertiary</span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-[10px] bg-[#c5edab] text-[#1C472A]">
                      <Handshake className="h-6 w-6" strokeWidth={2.2} />
                    </span>
                    <div className="space-y-1.5">
                      <h3 className="m-0 type-h3 text-[#0e0f0c]">Tertiary Icon Box</h3>
                      <p className="m-0 type-body text-[#454745]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* ─── DOCUMENT FOOTER ─── */}
          <div className="bg-[#0e0f0c] text-[#868685] p-8 text-center text-label-12 border-t border-black/10">
            <p>© 2026 getdesign.md spec mirror · Hello Hyperlocal Design Analysis.</p>
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
    fontSize: 165px
  body-md:
    fontSize: 16px

components:
  card-content:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.xl}"
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
