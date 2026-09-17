import { Award, Megaphone, MessageSquareHeart, Rocket, type LucideIcon } from "lucide-react";
import { PROGRESS } from "@/lib/progress";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";

// Brief §7's seven benefits, grouped into four highlights so the section doesn't read as a checklist.
const HIGHLIGHTS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: Award, title: "Founding recognition", body: "A founding badge and window sticker." },
  { icon: Rocket, title: "Early access", body: "Early platform access and priority onboarding." },
  { icon: Megaphone, title: "Launch visibility", body: "Be seen at launch, with potential launch opportunities." },
  { icon: MessageSquareHeart, title: "A say in what's built", body: "Input into how Hello Linden develops." },
];

// Brief §7: distinct from simply registering a business.
export function FoundingBusinesses() {
  return (
    <section id="founding-businesses" className="relative bg-hh-forest py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[50px]">
        <div className="flex w-full flex-col items-start gap-6 split:flex-row split:items-end split:justify-between">
          <div className="flex max-w-[720px] flex-col items-start gap-5">
            <SectionEyebrow label="Founding Businesses" tone="dark" />
            <h2 className="m-0 type-h2 text-white">Help shape Hello Linden before launch</h2>
            <p className="m-0 type-body-lg text-hh-mint">
              Founding Businesses get involved early and help shape Hello Linden with us. The first{" "}
              {PROGRESS.businesses.goal} local businesses can join. There&apos;s no payment, just an
              expression of interest.
            </p>
          </div>
          <CtaLink href="/join?type=business" surface="dark">
            Become a Founding Business
          </CtaLink>
        </div>

        <ul className="m-0 grid w-full list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {HIGHLIGHTS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col items-start gap-4 rounded-card bg-hh-veil p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-button bg-hh-lime text-hh-onyx">
                <Icon aria-hidden className="h-5 w-5" strokeWidth={2.2} />
              </span>
              <span className="type-h3 text-white">{title}</span>
              <span className="type-body text-hh-mint">{body}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
