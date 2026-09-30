"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, Play } from "lucide-react";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { VideoModal } from "@/components/site/modals/VideoModal";

export function OurStory() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="our-story" className="relative bg-white py-[90px] split:py-[120px]">
      <div className="site-container grid grid-cols-1 items-stretch gap-[50px] split:grid-cols-[1fr_440px] split:gap-[80px]">
        {/* Left Story Narrative Column */}
        <div className="flex w-full flex-col items-start justify-between gap-8">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="Our Story" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">How Hello Hyperlocal Started</h2>
            
            <p className="m-0 type-body-lg text-hh-onyx">
              It started with a simple question: How do we help people feel more connected to the place they already call home?
            </p>

            <p className="m-0 type-body text-[17px] leading-[26px] text-hh-muted">
              Living in Linden for more than a decade as both a resident and local business owner, it became clear how easily we miss what&apos;s happening right around us. We hear about a new restaurant after it has already opened, or miss local events shared in WhatsApp groups we weren&apos;t part of. We drive past great independent businesses without knowing their story, and struggle to find a trusted local service when we need one.
            </p>
          </div>

          {/* Key Vision Card */}
          <div className="relative w-full rounded-card bg-[#f5f5f5] p-6 sm:p-8">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-[#7ED957] text-[#0e0f0c]">
                  <Quote className="h-5 w-5 fill-current" />
                </span>
                <h3 className="m-0 font-heading text-[20px] font-medium leading-[26.4px] tracking-[-1px] text-hh-onyx sm:text-[22px]">
                  The Hello Vision
                </h3>
              </div>

              <p className="m-0 font-heading text-[20px] font-medium italic leading-[28px] tracking-[-0.8px] text-hh-onyx sm:text-[22px]">
                Linden never lacked community. What was missing was a simple, trusted way to bring it all together. That idea became Hello Hyperlocal.
              </p>
            </div>
          </div>

          <div className="pt-1">
            <CtaLink href="/about" surface="light">
              Read Our Full Story
            </CtaLink>
          </div>
        </div>

        {/* Right Founder Photo Card with interactive Video Overlay */}
        <figure className="group relative m-0 h-full min-h-[500px] w-full overflow-hidden rounded-card">
          <div className="relative h-full w-full overflow-hidden rounded-card">
            <Image
              src="/photography/jc-steyn-founder.jpg"
              alt="JC Steyn, founder of Hello Hyperlocal, in Linden"
              fill
              sizes="(min-width: 810px) 440px, 100vw"
              priority={false}
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Brand Styled Video Button on Founder Card */}
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group absolute left-6 top-6 z-10 inline-flex min-h-[52px] items-center justify-between gap-3 rounded-button bg-hh-lime py-2 pl-4 pr-2 text-left font-heading text-[16px] font-semibold tracking-[-0.4px] text-hh-onyx shadow-xl transition-all duration-300 hover:bg-hh-lime-hover hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2 sm:min-h-[58px] sm:gap-4 sm:py-[10px] sm:pl-5 sm:pr-[10px] sm:text-[18px]"
              aria-label="Watch Intro Video"
            >
              <span>Watch Intro</span>
              <span className="flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-chip bg-hh-onyx text-hh-lime transition-transform group-hover:scale-105 sm:h-[38px] sm:w-[38px]">
                <Play className="ml-0.5 h-4 w-4 fill-current" />
              </span>
            </button>

            {/* Elegant Gradient Overlay with clean typography caption */}
            <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-[linear-gradient(180deg,transparent_0%,rgba(14,15,12,0.85)_100%)] p-6 pt-24 text-white">
              <span className="font-heading text-[24px] font-bold leading-[28.8px] tracking-[-1px] text-white">
                JC Steyn
              </span>
              <span className="text-[14px] font-medium leading-5 text-white/90">
                Hello Hyperlocal Founder
              </span>
              <span className="text-[14px] leading-5 text-white/75">
                Linden resident &amp; local business owner
              </span>
            </figcaption>
          </div>
        </figure>
      </div>

      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoSrc="/video/Hello Hyper Local 2min20s.mp4"
        maxTime={140}
        title="How Hello Hyperlocal Started — JC Steyn"
      />
    </section>
  );
}
