import Image from "next/image";
import { PRIMARY_RESIDENT_BENEFITS } from "@/lib/join-options";
import { PROGRESS } from "@/lib/progress";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { BenefitTiles } from "@/components/site/ui/BenefitTiles";

const formatCount = (n: number) => n.toLocaleString("en-US");

// Brief §5 (For Residents) and §8 (Founding Neighbours) in one streamlined section.
export function ForResidents() {
  const goal = PROGRESS.neighbours.goal;

  return (
    <section id="residents" className="relative bg-hh-warm py-[80px] split:py-[110px]">
      <span id="founding-neighbours" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container flex flex-col items-start gap-[40px]">
        <div className="flex w-full flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
          <div className="flex max-w-[720px] flex-col items-start gap-4">
            <SectionEyebrow label="For Residents" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">What Hello Linden gives you</h2>
            <p className="m-0 type-body-lg text-hh-muted">
              Everything happening in Linden, in one place. A simpler way to discover what&apos;s
              around you and take part in the life of your neighbourhood.
            </p>
          </div>
          <CtaLink href="/for-residents" variant="text" surface="light">
            Explore All Resident Benefits
          </CtaLink>
        </div>

        <BenefitTiles items={PRIMARY_RESIDENT_BENEFITS} tile="white" />

        {/* Founding Neighbours: told as recognition in prose, with green Jacaranda photo overlay. */}
        <div className="relative flex w-full flex-col items-start overflow-hidden rounded-card bg-hh-forest px-5 py-8 split:p-[50px]">
          <Image
            src="/photography/jacaranda-founding.webp"
            alt=""
            fill
            className="object-cover object-bottom"
            sizes="(max-width: 1280px) 100vw, 1200px"
          />
          <div className="absolute inset-0 bg-[#054d28]/65 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#054d28]/90 via-[#054d28]/70 to-[#054d28]/45" />

          <div className="relative z-10 flex w-full flex-col items-start gap-5">
            <h3 className="m-0 type-h2 text-white sm:whitespace-nowrap">Become a Founding Neighbour</h3>
            <p className="m-0 mt-2 w-full type-body-lg text-hh-mint">
              Founding Neighbours are the first {formatCount(goal)} residents to join, the group
              helping us build Hello Linden before launch. Your feedback shapes what we build
              first. You&apos;ll get early access, invitations to community launch events, the chance
              to test new features, and recognition inside Hello Linden.
            </p>
            {/* Smaller label on phones so the no-wrap button fits inside the card's padding. */}
            <CtaLink href="/join?type=resident" surface="dark" className="mt-4 gap-3 text-[15px] sm:gap-[55px] sm:text-[20px]">
              Become a Founding Neighbour
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
