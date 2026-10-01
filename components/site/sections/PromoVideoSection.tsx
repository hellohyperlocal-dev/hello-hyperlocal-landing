"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { VideoModal } from "@/components/site/modals/VideoModal";

export function PromoVideoSection() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section id="promo-video" className="relative w-full bg-white pb-16 lg:pb-24">
      <div className="site-container">
        <button
          type="button"
          onClick={() => setVideoOpen(true)}
          className="group relative flex w-full cursor-pointer flex-col items-center justify-center overflow-hidden rounded-card bg-hh-onyx text-left focus:outline-none focus-visible:ring-4 focus-visible:ring-hh-lime shadow-2xl"
          aria-label="Watch Hello Linden promo video"
        >
          {/* Promo Cover.png Poster Container */}
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9] lg:h-[540px]">
            <Image
              src="/video/Promo Cover.png"
              alt="Hello Linden Promo Cover"
              fill
              sizes="(max-width: 1340px) 100vw, 1340px"
              priority={false}
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Dark Overlay for Contrast */}
            <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/35" />
          </div>

          {/* Centered Play Icon Control */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-black/40 backdrop-blur-md text-white shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-black/60 sm:h-24 sm:w-24">
              <Play className="ml-1 h-8 w-8 sm:h-10 sm:w-10 fill-current text-white" />
            </span>
          </div>
        </button>
      </div>

      {/* Full Theater Video Modal Player */}
      <VideoModal
        open={videoOpen}
        onOpenChange={setVideoOpen}
        videoSrc="/video/Promo Video .mp4"
        title="Hello Linden Promo Video"
      />
    </section>
  );
}
