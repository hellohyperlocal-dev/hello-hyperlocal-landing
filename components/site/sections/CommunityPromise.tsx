import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

export function CommunityPromise() {
  return (
    <section className="relative bg-hh-forest pb-[100px] split:pb-[130px]">
      <div className="site-container">
        <div className="relative flex min-h-[560px] w-full items-end overflow-clip rounded-card px-5 pb-10 pt-24 split:min-h-[654px] split:px-[50px] split:pb-[50px]">
          <Image
            src="/photography/linden-lanes.jpg"
            alt=""
            fill
            sizes="(min-width: 1340px) 1300px, 100vw"
            className="z-0 object-cover"
          />
          {/* Photo veil: permitted gradient exception, keeps white copy legible. */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(rgb(14_15_12/0)_-30%,rgb(14_15_12/0.82)_100%)]"
          />

          <div className="relative z-10 flex w-full flex-col items-start gap-10 split:flex-row split:items-end split:justify-between">
            <div className="flex max-w-[760px] flex-col items-start gap-5">
              <SectionEyebrow label="Core Platform Promise" tone="dark" />
              <h2 className="m-0 type-h2 text-white">
                Technology should never replace community. It should strengthen it.
              </h2>
              <p className="m-0 type-body text-white">
                Every neighbourhood already has its own rhythm. Residents know the streets,
                businesses know their customers, and local leaders do vital work. Hello Hyperlocal
                brings it all into one trusted ecosystem while allowing each suburb to keep its own
                identity and local voice.
              </p>
            </div>

            <CtaLink href="#founding-neighbours" surface="dark">
              Become a Founding Neighbour
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
