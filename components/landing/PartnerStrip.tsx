"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { cn } from "@/lib/utils";

const LOGOS = [
  {
    src: "/partner-logos/private-property-logo.png",
    alt: "Private Property",
  },
  {
    src: "/partner-logos/lca-logo.png",
    alt: "Linden Community Association",
  },
  {
    src: "/partner-logos/linden-market-logo.webp",
    alt: "Linden Village Market",
  },
  {
    src: "/partner-logos/linden-lanes.png",
    alt: "Linden Lanes",
  },
  {
    src: "/partner-logos/goddess-cafe-logo.png",
    alt: "Goddess Cafe",
  },
];

export function PartnerStrip() {
  return (
    <section className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] bg-transparent py-10 overflow-hidden transition-colors duration-200">
      <div className="flex flex-col gap-6 items-center text-center">
        <h3 className="text-heading-20 text-brand-muted dark:text-[#99A893]">
          Powering Local Communities, Hand in Hand
        </h3>
      </div>
      
      <div className="mt-8 w-full">
        <Marquee 
          gradient 
          gradientColor={undefined} 
          gradientWidth={64} 
          autoFill 
          pauseOnHover 
          speed={40}
        >
          {LOGOS.map((logo, index) => (
            <div
              key={`${logo.src}-${index}`}
              className="mx-6 flex aspect-3/1 w-40 sm:w-48 items-center justify-center lg:mx-8"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={cn(
                  "h-auto max-h-12 sm:max-h-14 lg:max-h-16 w-auto object-contain filter grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer dark:brightness-125 dark:hover:brightness-100"
                )}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
