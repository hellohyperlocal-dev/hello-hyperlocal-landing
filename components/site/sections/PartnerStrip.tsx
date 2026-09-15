"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { useReducedMotion } from "motion/react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const LOGOS = [
  { src: "/partner-logos/private-property-logo.png", alt: "Private Property" },
  { src: "/partner-logos/lca-logo.png", alt: "Linden Community Association" },
  { src: "/partner-logos/linden-market-logo.webp", alt: "Linden Village Market" },
  { src: "/partner-logos/linden-lanes.png", alt: "Linden Lanes" },
  { src: "/partner-logos/goddess-cafe-logo.png", alt: "Goddess Cafe" },
];

export function PartnerStrip() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="partner-logos" className="relative bg-white pb-10 pt-[60px]">
      <div className="site-container flex flex-col items-center gap-8">
        <SectionEyebrow label="Powering Local Communities, Hand in Hand" tone="light" className="text-center" />

        <ul className="m-0 w-full list-none p-0" aria-label="Community partners">
          <Marquee
            gradient
            gradientColor="#ffffff"
            gradientWidth={64}
            autoFill
            pauseOnHover
            play={!reduceMotion}
            speed={40}
          >
            {LOGOS.map((logo) => (
              <li key={logo.src} className="mx-6 flex h-16 w-40 items-center justify-center sm:w-48 lg:mx-8">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={192}
                  height={64}
                  className="h-auto max-h-14 w-auto object-contain opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
                />
              </li>
            ))}
          </Marquee>
        </ul>
      </div>
    </section>
  );
}
