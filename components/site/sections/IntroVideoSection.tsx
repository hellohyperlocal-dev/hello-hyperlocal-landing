"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { VideoModal } from "@/components/site/modals/VideoModal";

export function IntroVideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="intro-video" className="relative w-full bg-white pb-16 lg:pb-24">
      <div className="site-container">
        {/* Banner Card Container styled after reference design */}
        <div
          onClick={() => setVideoOpen(true)}
          className="group relative flex min-h-[380px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-card bg-hh-onyx p-8 sm:min-h-[460px] sm:p-12 lg:min-h-[500px] lg:p-14 shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-hh-lime"
        >
          {/* Linden Streetview Background Photography */}
          <Image
            src="/photography/linden-streetview.jpeg"
            alt="Linden streetview looking towards Brixton Tower"
            fill
            sizes="(max-width: 1340px) 100vw, 1340px"
            priority={false}
            className="object-cover object-[center_65%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />

          {/* Dark Overlay gradient for crisp text legibility */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,15,12,0.25)_0%,rgba(14,15,12,0.85)_100%)] transition-colors duration-300 group-hover:bg-[linear-gradient(180deg,rgba(14,15,12,0.35)_0%,rgba(14,15,12,0.92)_100%)]" />

          {/* Content Wrapper (Bottom Left Statement + Bottom Right CTA Button) */}
          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <p className="m-0 max-w-[760px] font-heading text-[24px] font-medium leading-[1.25] tracking-[-1px] text-white sm:text-[32px] sm:leading-[1.2] lg:text-[40px] lg:tracking-[-1.5px]">
              Linden never lacked community. What was missing was a simple, trusted way to bring it all together.
            </p>

            <div className="shrink-0">
              <CtaLink
                onClick={(e?: React.MouseEvent) => {
                  e?.stopPropagation();
                  setVideoOpen(true);
                }}
                surface="light"
                icon={<Play className="ml-0.5 h-4 w-4 fill-current" />}
              >
                Watch Intro Video
              </CtaLink>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal playing 2:20 Intro Video */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoSrc="/video/Hello Hyper Local 2min20s.mp4"
        maxTime={140}
        title="Hello Linden Intro Video"
      />
    </section>
  );
}
