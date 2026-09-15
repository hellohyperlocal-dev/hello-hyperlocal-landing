"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { VideoModal } from "@/components/site/modals/VideoModal";

// No entrance animation here: the h1 and primary CTA are the LCP content and must ship
// visible in the server HTML, not at opacity 0 waiting on hydration.
export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="top" className="relative w-full overflow-hidden bg-hh-forest pb-20 pt-[140px] split:pb-[100px]">
      <div className="site-container flex flex-col items-center gap-12 split:flex-row split:gap-10">
        <div className="flex w-full flex-1 flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="Hello Linden · Coming in 2026" tone="dark" />

            <h1 className="m-0 type-h1 text-white">Love Where You Live.</h1>

            <p className="m-0 max-w-[560px] type-body-lg text-hh-mint">
              Hello Linden is being created to help residents discover what&apos;s around them,
              support local businesses and stay connected to community life.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5">
            <CtaLink href="#founding-neighbours" surface="dark">
              Become a Founding Neighbour
            </CtaLink>
            <CtaLink href="#businesses" variant="text" surface="dark">
              Register Your Business
            </CtaLink>
          </div>

          <div className="flex flex-col gap-1">
            <p className="m-0 text-[16px] leading-6 text-hh-lime">Hello Linden is coming in 2026.</p>
            <p className="m-0 text-[16px] leading-6 text-white">Register early to help shape Hello Linden.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          aria-label="Watch the Hello Linden launch video"
          className="group relative aspect-[0.92] w-full flex-1 overflow-hidden rounded-card text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime focus-visible:ring-offset-2 focus-visible:ring-offset-hh-forest split:max-w-[560px]"
        >
          <Image
            src="/photography/linden-streetview.jpeg"
            alt=""
            fill
            priority
            sizes="(min-width: 810px) 560px, 100vw"
            className="object-cover"
          />
          {/* Photo veil: permitted gradient exception, keeps the caption legible. */}
          <span
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(rgb(14_15_12/0)_30%,rgb(14_15_12/0.78)_100%)]"
          />
          <span className="absolute inset-x-6 bottom-6 flex items-center gap-4">
            <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-hh-lime text-hh-onyx transition-colors group-hover:bg-hh-lime-hover">
              <Play className="h-7 w-7 translate-x-0.5 fill-current" />
            </span>
            <span className="flex flex-col gap-1">
              <span className="font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-white">
                Watch the launch video
              </span>
              <span className="text-[16px] leading-6 text-white">Discover the Hello Linden vision</span>
            </span>
          </span>
        </button>
      </div>

      <VideoModal open={videoOpen} onOpenChange={setVideoOpen} />
    </section>
  );
}
