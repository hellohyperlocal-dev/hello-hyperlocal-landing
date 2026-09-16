import { RESIDENT_BENEFITS } from "@/lib/join-options";
import { PROGRESS } from "@/lib/progress";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { BenefitTiles } from "@/components/site/ui/BenefitTiles";

const formatCount = (n: number) => n.toLocaleString("en-US");

// Brief §5 (For Residents) and §8 (Founding Neighbours) in one section: what residents get,
// then how to be among the first 1,000.
export function ForResidents() {
  const goal = PROGRESS.neighbours.goal;

  return (
    <section id="residents" className="relative bg-hh-warm py-[100px] split:py-[130px]">
      <span id="founding-neighbours" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container flex flex-col items-start gap-[50px]">
        <div className="flex max-w-[720px] flex-col items-start gap-5">
          <SectionEyebrow label="For Residents" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">What Hello Linden gives you</h2>
          <p className="m-0 type-body-lg text-hh-muted">
            Everything happening in Linden, in one place. A simpler way to discover what&apos;s
            around you and take part in the life of your neighbourhood.
          </p>
        </div>

        <BenefitTiles items={RESIDENT_BENEFITS} tile="white" />

        {/* Founding Neighbours: told as recognition in prose, not a checklist. */}
        <div className="flex w-full flex-col items-start rounded-card bg-hh-forest px-5 py-8 split:p-[50px]">
          <div className="flex max-w-[640px] flex-col items-start gap-5">
            <h3 className="m-0 type-h2 text-white">Become a Founding Neighbour</h3>
            <p className="m-0 type-body-lg text-hh-mint">
              Founding Neighbours are the first {formatCount(goal)} residents to join, the group
              helping us build Hello Linden before launch.
            </p>
            <p className="m-0 type-body text-white">
              Your feedback shapes what we build first. You&apos;ll get early access, invitations to
              community launch events, the chance to test new features, and recognition inside Hello
              Linden.
            </p>
            {/* Smaller label on phones so the no-wrap button fits inside the card's padding. */}
            <CtaLink href="/join?type=resident" surface="dark" className="gap-3 text-[15px] sm:gap-[55px] sm:text-[20px]">
              Become a Founding Neighbour
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
