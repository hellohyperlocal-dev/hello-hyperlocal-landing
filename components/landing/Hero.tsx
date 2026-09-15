"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { Play, Sparkles } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { VideoModal } from "@/components/landing/VideoModal";

const RISE_EASE = [0.16, 1, 0.3, 1] as const;

const container: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const rise: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: RISE_EASE },
  },
};

const SECONDARY_CTAS = [
  { href: "#business", label: "Register Your Business" },
  { href: "#businesses", label: "Become a Founding Business" },
  { href: "#our-story", label: "Learn More" },
];

export function Hero() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <>
      <section
        id="top"
        className="relative w-full overflow-hidden bg-[#1C472A] pb-16 pt-32 sm:pt-40 split:pb-24"
      >
        <div className="mx-auto flex w-full max-w-[1340px] flex-col items-center gap-12 px-5 split:flex-row split:gap-10">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="flex w-full flex-1 flex-col items-start gap-10"
          >
            <div className="flex flex-col items-start gap-5">
              <motion.div variants={rise}>
                <EyebrowPill icon={Sparkles} variant="dark">
                  Hello Linden · Coming in 2026
                </EyebrowPill>
              </motion.div>

              <motion.h1
                variants={rise}
                className="m-0 font-heading text-[46px] font-bold leading-[0.9] tracking-[-3px] text-white lg:text-[68px] xl:text-[80px]"
              >
                Love Where You Live.
              </motion.h1>

              <motion.p
                variants={rise}
                className="m-0 max-w-[560px] text-copy-20 text-[#e2f6d5]"
              >
                Hello Linden is being created to help residents discover
                what&apos;s around them, support local businesses and stay
                connected to community life.
              </motion.p>
            </div>

            <motion.div
              variants={rise}
              className="flex flex-wrap items-center gap-x-4 gap-y-3"
            >
              <a
                href="#founding-neighbours"
                className="group flex h-[58px] items-center gap-6 rounded-lg bg-[#7ED957] py-2.5 pl-5 pr-2.5 text-[#0e0f0c] transition-colors hover:bg-[#cdffad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C472A]"
              >
                <span className="text-copy-18">Become a Founding Neighbour</span>
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-sm bg-[#0e0f0c] text-[#7ED957]">
                  <ArrowFlipIcon size={14} />
                </span>
              </a>

              {SECONDARY_CTAS.map((cta) => (
                <a
                  key={cta.label}
                  href={cta.href}
                  className="group flex h-[58px] items-center gap-2.5 rounded-lg border border-white/20 px-5 text-white transition-colors hover:border-[#7ED957] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ED957]"
                >
                  <span className="text-copy-18">{cta.label}</span>
                  <span className="text-[#7ED957]">
                    <ArrowFlipIcon size={14} />
                  </span>
                </a>
              ))}
            </motion.div>
          </motion.div>

          <motion.button
            type="button"
            onClick={() => setVideoModalOpen(true)}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: RISE_EASE }}
            aria-label="Watch the Hello Linden launch video"
            className="group relative aspect-[0.92] w-full flex-1 overflow-hidden rounded-[10px] text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ED957] split:max-w-[560px]"
          >
            <Image
              src="/photography/linden-streetview.jpeg"
              alt=""
              fill
              priority
              sizes="(min-width: 810px) 560px, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Photo veil: the only permitted gradient, keeps the caption legible. */}
            <span
              aria-hidden
              className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0)_35%,rgba(0,0,0,0.65)_100%)]"
            />
            <span className="absolute inset-x-6 bottom-6 flex items-center gap-4">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#7ED957] text-[#0e0f0c] transition-transform duration-300 group-hover:scale-110">
                <Play className="h-7 w-7 translate-x-0.5 fill-current" />
              </span>
              <span className="flex flex-col gap-1">
                <span className="text-heading-20 text-white">
                  Watch the launch video
                </span>
                <span className="text-copy-14 text-white/80">
                  Discover the Hello Linden vision
                </span>
              </span>
            </span>
          </motion.button>
        </div>
      </section>

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </>
  );
}
