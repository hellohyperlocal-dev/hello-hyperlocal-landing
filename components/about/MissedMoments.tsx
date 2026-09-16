import Image from "next/image";
import { CalendarDays, Store, Utensils, Wrench } from "lucide-react";
import { MISSED_MOMENTS } from "@/lib/our-story";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const ICONS = { utensils: Utensils, calendar: CalendarDays, store: Store, wrench: Wrench };

// Charion's "People who care" team grid, repurposed: one card per moment people miss,
// with the 36px accent chip where Charion shows a team badge.
export function MissedMoments() {
  return (
    <section className="relative bg-white pb-[100px] split:pb-[130px]">
      <div className="site-container flex flex-col gap-[50px]">
        <div className="flex flex-col items-start gap-5 split:flex-row split:items-end split:justify-between">
          <div className="flex max-w-[760px] flex-col items-start gap-[30px]">
            <SectionEyebrow label="What we kept missing" tone="light" />
            <div className="flex flex-col gap-5">
              <h2 className="m-0 type-h2 text-hh-onyx">Easy to miss what&apos;s right around us</h2>
              <p className="m-0 type-body-lg text-hh-muted">
                As a resident and local business owner, I&apos;ve also seen how easy it is for
                people to miss what&apos;s happening right around them.
              </p>
            </div>
          </div>
          <CtaLink href="/join" variant="text" surface="light" className="px-0">
            Join Hello Linden
          </CtaLink>
        </div>

        <ul className="m-0 grid list-none grid-cols-1 gap-5 p-0 sm:grid-cols-2 xl:grid-cols-4">
          {MISSED_MOMENTS.map((moment) => {
            const Icon = ICONS[moment.icon];
            return (
              <li key={moment.title} className="flex flex-col overflow-clip rounded-card bg-hh-panel">
                <div className="relative aspect-[388/460] w-full">
                  <Image
                    src={moment.image}
                    alt=""
                    fill
                    sizes="(min-width: 1280px) 310px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-[10px] p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="m-0 type-h3 text-hh-onyx">{moment.title}</h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-hh-lime text-hh-onyx">
                      <Icon aria-hidden className="h-[18px] w-[18px]" />
                    </span>
                  </div>
                  <p className="m-0 type-body text-hh-muted">{moment.line}</p>
                </div>
              </li>
            );
          })}
        </ul>

        <p className="m-0 max-w-[760px] type-body-lg text-hh-onyx">
          And many community initiatives depend on word of mouth to reach the people who would
          gladly support them.
        </p>
      </div>
    </section>
  );
}
