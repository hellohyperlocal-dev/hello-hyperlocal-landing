"use client";

import React from "react";
import Image from "next/image";
import { Compass, Quote, Heart, MapPin } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

export function OurStory() {
  return (
    <section id="our-story" className="w-full py-20 sm:py-28 bg-[#FCFAF7] dark:bg-[#111A13] text-[#0e0f0c] dark:text-[#FCFAF7] transition-colors duration-200">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <EyebrowPill icon={Compass} variant="standard">
            Our Story
          </EyebrowPill>
          <h2 className="text-heading-32 sm:text-heading-48 lg:text-heading-50 font-bold text-[#1C472A] dark:text-[#7ED957] tracking-tight">
            How Hello Hyperlocal Started
          </h2>
          <p className="text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
            Hello Hyperlocal started with a simple question: How do we help people feel more connected to the place they already call home?
          </p>
        </div>

        {/* Story Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Founder Photo Placeholder & Linden Badge */}
          <div className="lg:col-span-5 relative space-y-4">
            <div className="relative aspect-[4/5] w-full rounded-[32px] overflow-hidden bg-[#EBEBEB] dark:bg-[#1C281F] border border-[#0e0f0c]/10 dark:border-white/10 shadow-lg group">
              {/* Founder Image */}
              <img
                src="/JC Steyn - Founder.jfif"
                alt="JC Steyn, Founder of Hello Hyperlocal in Linden"
                className="w-full h-full object-cover filter contrast-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f0c]/80 via-transparent to-transparent" />
              
              {/* Founder Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-[24px] bg-white/95 dark:bg-[#151F17]/95 backdrop-blur-md border border-[#0e0f0c]/5 dark:border-white/10 shadow-xl space-y-1">
                <div className="flex items-center justify-between">
                  <span className="text-heading-16 font-bold text-[#0e0f0c] dark:text-white">
                    JC Steyn &amp; Founding Team
                  </span>
                  <span className="flex items-center gap-1 text-xs font-semibold text-[#054d28] dark:text-[#7ED957] bg-[#e2f6d5] dark:bg-[#1C472A] px-2.5 py-0.5 rounded-full">
                    <MapPin className="h-3 w-3" />
                    Linden Resident (10+ Yrs)
                  </span>
                </div>
                <p className="text-xs text-[#454745] dark:text-[#99A893]">
                  Resident & Local Business Owner in Linden, Johannesburg.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            <div className="space-y-4 text-copy-16 sm:text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
              <p>
                I’ve lived in Linden for more than a decade, and during that time I’ve seen first-hand what makes this neighbourhood so special. It’s the local cafés, the independent businesses, the schools, the familiar faces, the people who care deeply about the suburb, and the small moments that make a place feel like home.
              </p>
              <p>
                As a resident and local business owner, I’ve also seen how easy it is for people to miss what’s happening right around them.
              </p>
              <p>
                We hear about a new restaurant after it has already opened. We miss local events because the information was shared in a WhatsApp group we weren’t part of. We drive past great businesses without knowing their story. We sometimes struggle to find a trusted local service, and many community initiatives depend on word of mouth to reach the people who would gladly support them.
              </p>
            </div>

            {/* Highlighted Quote Callout */}
            <div className="p-6 sm:p-8 rounded-[28px] bg-[#e2f6d5] dark:bg-[#1C472A] border border-[#054d28]/15 space-y-3 relative overflow-hidden">
              <Quote className="h-10 w-10 text-[#054d28]/20 dark:text-[#7ED957]/20 absolute top-4 right-4" />
              <p className="text-heading-20 sm:text-heading-24 font-bold text-[#054d28] dark:text-[#7ED957] leading-snug relative z-10">
                &ldquo;The more I thought about it, the more I realised that the problem wasn’t that Linden lacked community. The community was already here. What was missing was a simple, trusted way to bring it all together.&rdquo;
              </p>
              <span className="text-xs font-bold uppercase tracking-wider text-[#054d28]/70 dark:text-[#7ED957]/80 block pt-1">
                That idea became Hello Hyperlocal.
              </span>
            </div>

            <div className="space-y-4 text-copy-16 sm:text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed pt-2">
              <p>
                Hello Linden is our first community because this is where the idea began. It’s where I live, where I run a business, and where I’ve experienced the value of local support for myself. It felt right to start close to home, with a neighbourhood I know and genuinely care about.
              </p>
              <p className="font-semibold text-[#0e0f0c] dark:text-white">
                The goal is not to replace the conversations, relationships and community networks that already exist. It’s to strengthen them.
              </p>
            </div>

            <div className="space-y-2 text-copy-16 sm:text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
              <p>
                Hello Linden is being created to help residents discover what’s around them, support local businesses, stay connected to community life and find more reasons to appreciate the neighbourhood they live in.
              </p>
              <p className="font-heading text-heading-24 text-[#1C472A] dark:text-[#7ED957] pt-2">
                Because sometimes the best things aren’t far away. They’re just around the corner.
              </p>
            </div>

            {/* Bottom Tagline Banner */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-heading-18 font-bold text-[#1C472A] dark:text-[#7ED957]">
              <span>Rediscover your neighbourhood.</span>
              <span className="text-xs font-normal text-[#868685]">·</span>
              <span className="flex items-center gap-1.5 text-[#054d28] dark:text-[#7ED957]">
                <Heart className="h-4 w-4 fill-current text-[#7ED957]" />
                Love Where You Live.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
