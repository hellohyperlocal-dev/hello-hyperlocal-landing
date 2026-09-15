"use client";

import React from "react";
import { Layers, Users, Store, GraduationCap, HeartHandshake, ShieldCheck, Calendar, ShoppingBag, Award, Wrench, Sprout } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

const ECOSYSTEM_NODES = [
  { icon: Users, title: "Residents", desc: "Discover nearby, follow updates, and connect with trusted neighbours." },
  { icon: Store, title: "Local Businesses", desc: "Showcase specials, tell stories, and connect with local customers." },
  { icon: GraduationCap, title: "Schools", desc: "Share school announcements, fundraisers, and community events." },
  { icon: HeartHandshake, title: "Community Orgs", desc: "Organize volunteers, civic projects, and local initiatives." },
  { icon: ShieldCheck, title: "Local Leaders & LCA", desc: "Communicate ward updates, safety advisories, and municipal progress." },
  { icon: Calendar, title: "Events", desc: "Discover market days, sports games, workshops, and neighbourhood gatherings." },
  { icon: Sprout, title: "Community Projects", desc: "Follow local projects, see their progress, and find ways to get involved." },
  { icon: Wrench, title: "Local Services", desc: "Find vetted plumbers, electricians, tutors, and neighbourhood services." },
  { icon: ShoppingBag, title: "Marketplace", desc: "Buy, sell, and trade safely with verified physical residents." },
  { icon: Award, title: "Rewards & Discovery", desc: "Earn rewards and perks for discovering and supporting local spots." },
];

export function Vision() {
  return (
    <section id="vision" className="w-full py-20 sm:py-28 bg-white dark:bg-[#0e0f0c] text-[#0e0f0c] dark:text-[#FCFAF7] transition-colors duration-200">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <EyebrowPill icon={Layers} variant="standard">
            Explore Hello & The Vision
          </EyebrowPill>
          <h2 className="text-heading-32 sm:text-heading-48 lg:text-heading-50 font-bold text-[#1C472A] dark:text-[#7ED957] tracking-tight">
            Building One Local Ecosystem
          </h2>
          <p className="text-copy-18 text-[#454745] dark:text-[#99A893] leading-relaxed">
            Hello Linden is where the journey begins, but the vision is to build a trusted digital home for neighbourhoods across South Africa.
          </p>
        </div>

        {/* Vision Narrative Callout Box */}
        <div className="rounded-[32px] bg-[#1C472A] text-white p-8 sm:p-12 shadow-xl relative overflow-hidden space-y-6 text-left">
          
          <div className="max-w-3xl space-y-4 relative z-10">
            <span className="text-label-12 font-bold uppercase tracking-widest text-[#7ED957] bg-white/10 px-3 py-1 rounded-full border border-white/10 inline-block">
              Core Platform Promise
            </span>
            <h3 className="text-heading-28 sm:text-heading-36 lg:text-heading-40 font-bold text-white tracking-tight leading-tight">
              &ldquo;Technology should never replace community. It should strengthen it.&rdquo;
            </h3>
            <p className="text-copy-16 sm:text-copy-18 text-white/85 leading-relaxed">
              Every neighbourhood already has its own rhythm. Residents know the streets, businesses know their customers, and local leaders do vital work. Hello Hyperlocal brings it all into one trusted ecosystem while allowing each suburb to keep its own identity and local voice.
            </p>
          </div>
        </div>

        {/* Ecosystem 9-Grid */}
        <div className="space-y-6 text-left">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <h3 className="text-heading-24 font-bold text-[#0e0f0c] dark:text-white">
              What Hello Hyperlocal Connects
            </h3>
            <span className="text-xs text-[#868685]">
              10 Core Community Pillars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {ECOSYSTEM_NODES.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.title}
                  className="p-6 rounded-[24px] bg-[#FCFAF7] dark:bg-[#151F17] border border-[#0e0f0c]/6 dark:border-white/10 hover:border-[#7ED957] hover:shadow-md transition-all space-y-3"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#e2f6d5] dark:bg-[#1C472A] text-[#054d28] dark:text-[#7ED957]">
                    <Icon className="h-5.5 w-5.5" />
                  </div>
                  <h4 className="text-heading-18 font-bold text-[#0e0f0c] dark:text-white m-0">
                    {node.title}
                  </h4>
                  <p className="text-copy-14 text-[#454745] dark:text-[#99A893] m-0 leading-relaxed">
                    {node.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Vision Footer Statement */}
        <div className="p-6 rounded-[24px] bg-[#F5F5F5] dark:bg-[#151F17] text-center max-w-2xl mx-auto space-y-2 border border-[#0e0f0c]/5 dark:border-white/5">
          <p className="text-copy-16 font-semibold text-[#0e0f0c] dark:text-white">
            Hello Linden is the first Hello. It won’t be the last.
          </p>
          <p className="text-copy-14 text-[#868685]">
            The technology can scale, but the community should always stay local.
          </p>
        </div>

      </div>
    </section>
  );
}
