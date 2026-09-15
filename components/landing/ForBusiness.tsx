"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, Store } from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";
import { RollingText } from "@/components/ui/RollingText";
import { MerchantModal } from "@/components/landing/MerchantModal";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

interface ForBusinessProps {
  initialModalOpen?: boolean;
}

export function ForBusiness({ initialModalOpen = false }: ForBusinessProps) {
  const [modalOpen, setModalOpen] = useState(initialModalOpen);

  return (
    <section
      id="business"
      className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 py-[clamp(60px,10vw,120px)] bg-transparent transition-colors duration-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
        
        {/* Left Column: Copy & Merchant Benefits */}
        <div className="flex flex-col text-left">
          <div className="mb-4">
            <EyebrowPill icon={Store} variant="standard">
              For Local Businesses
            </EyebrowPill>
          </div>
          
          <h2 className="m-0 font-heading text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-[#0e0f0c] dark:text-[#FCFAF7] text-pretty">
            Connect directly with verified local residents.
          </h2>
          
          <p className="mt-4 text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-brand-muted dark:text-[#99A893]">
            Hello Linden is not simply another directory. It is a way for local businesses to become more visible within their own community.
          </p>

          {/* Benefits Bullet Points with Green Checkmarks */}
          <ul className="mt-6 space-y-3">
            {[
              "A business profile residents can find",
              "Local discovery by the people living around you",
              "Promotions and specials",
              "Share your events",
              "Featured stories about your business",
              "Rewards participation",
              "Community campaigns",
              "A direct connection with local customers",
              "Future advertising and promotional opportunities",
            ].map((benefit) => (
              <li key={benefit} className="flex items-start gap-3">
                <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1C472A] dark:bg-[#7ED957] text-[#7ED957] dark:text-[#0e0f0c] mt-0.5">
                  <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                </div>
                <span className="text-copy-16 text-[#0e0f0c] dark:text-[#FCFAF7]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          {/* Merchant Call to Action Triggering Modal */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#7ED957] px-7 py-3.5 text-[15px] font-semibold text-[#0e0f0c] transition-all hover:bg-[#cdffad] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1C472A] dark:focus-visible:ring-[#7ED957] focus-visible:ring-offset-2"
            >
              <Store className="h-4 w-4" />
              <RollingText text="Register your business" />
              <ArrowFlipIcon size={14} className="opacity-90" />
            </button>
          </div>

        </div>

        {/* Right Column: Local Photography (Equal 50% Width) */}
        <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[500px] overflow-hidden rounded-[32px] shadow-sm">
          <Image
            src="/photography/linden-streetview.jpeg"
            alt="Streetview of local shops, stores and cafes in Linden"
            fill
            sizes="(max-width: 1024px) 100vw, 600px"
            className="object-cover"
          />
        </div>

      </div>

      {/* Interactive Merchant Registration Modal */}
      <MerchantModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </section>
  );
}
