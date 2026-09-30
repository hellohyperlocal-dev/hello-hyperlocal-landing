"use client";

import { useState, useRef } from "react";
import { Play } from "lucide-react";

export function IntroVideoSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section id="intro-video" className="relative w-full bg-white pb-16 lg:pb-24">
      <div className="site-container">
        <div className="group relative flex w-full flex-col items-center justify-center overflow-hidden rounded-card bg-hh-onyx shadow-2xl">
          {/* Direct Promo Video Display */}
          <div className="relative aspect-[16/9] w-full sm:aspect-[21/9] lg:h-[540px]">
            <video
              ref={videoRef}
              src="/video/Promo Video .mp4"
              controls={isPlaying}
              playsInline
              preload="metadata"
              onEnded={() => setIsPlaying(false)}
              onPause={() => setIsPlaying(false)}
              onPlay={() => setIsPlaying(true)}
              className="h-full w-full object-cover"
            >
              Your browser does not support the video tag.
            </video>

            {/* Overlay Play Button (Visible when paused) */}
            {!isPlaying && (
              <button
                type="button"
                onClick={togglePlay}
                aria-label="Play Promo Video"
                className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/35 focus:outline-none focus-visible:ring-4 focus-visible:ring-hh-lime"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-[10px] bg-black/40 backdrop-blur-md text-white shadow-2xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:bg-black/60 sm:h-24 sm:w-24">
                  <Play className="ml-1 h-8 w-8 sm:h-10 sm:w-10 fill-current text-white" />
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
