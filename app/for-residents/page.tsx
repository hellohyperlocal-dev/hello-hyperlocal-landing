import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SiteNav } from "@/components/site/SiteNav";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { BenefitTiles } from "@/components/site/ui/BenefitTiles";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { RESIDENT_BENEFITS, NEIGHBOUR_PERKS } from "@/lib/join-options";
import { PROGRESS } from "@/lib/progress";

export const metadata = {
  title: "For Residents | Hello Linden",
  description: "Everything Hello Linden offers suburb residents. Discover nearby events, local business specials, community advisories, and more.",
};

const formatCount = (n: number) => n.toLocaleString("en-US");

export default function ForResidentsPage() {
  const goal = PROGRESS.neighbours.goal;

  return (
    <div className="relative bg-hh-warm">
      <SiteNav />
      <main id="main-content" className="pt-[130px] pb-[100px]">
        <div className="site-container flex flex-col gap-12">
          {/* Back Navigation */}
          <Link
            href="/#residents"
            className="inline-flex items-center gap-2 text-label-14 font-medium text-hh-muted hover:text-hh-onyx transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>

          {/* Hero Header */}
          <div className="flex max-w-[800px] flex-col items-start gap-4">
            <SectionEyebrow label="For Residents" tone="light" />
            <h1 className="m-0 type-h1 text-hh-onyx">What Hello Linden Gives You</h1>
            <p className="m-0 type-body-lg text-hh-muted">
              Hello Linden is built to bring your suburb together. Here is a complete breakdown of everything
              you can discover, explore, and support as a local resident.
            </p>
          </div>

          {/* Full 9 Benefit Tiles */}
          <BenefitTiles items={RESIDENT_BENEFITS} tile="white" />

          {/* Founding Neighbours Card */}
          <div className="flex w-full flex-col items-start rounded-card bg-hh-forest p-8 sm:p-12 text-white mt-6">
            <div className="flex max-w-[700px] flex-col items-start gap-6">
              <h2 className="m-0 type-h2 text-white">Become a Founding Neighbour</h2>
              <p className="m-0 type-body-lg text-hh-mint">
                Founding Neighbours are the first {formatCount(goal)} residents to join, shaping Hello Linden prior to public launch.
              </p>
              
              <ul className="m-0 flex flex-col gap-3 p-0 list-none text-body">
                {NEIGHBOUR_PERKS.map((perk) => (
                  <li key={perk} className="flex items-center gap-3">
                    <span className="flex h-2 w-2 rounded-full bg-hh-lime" />
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>

              <CtaLink href="/join?type=resident" surface="dark" className="mt-2 text-[18px]">
                Register as Resident
              </CtaLink>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
