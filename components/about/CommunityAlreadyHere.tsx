import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Charion's "Transforming lives": large statement heading and body copy beside a 460px square image.
export function CommunityAlreadyHere() {
  return (
    <section className="relative bg-white pb-[100px] split:pb-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px] split:flex-row split:items-center split:justify-between">
        <div className="flex w-full max-w-[760px] flex-col items-start gap-[30px]">
          <SectionEyebrow label="Why Linden first" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">
            The community was already here. What was missing was a simple, trusted way to bring it
            all together.
          </h2>
          <div className="flex max-w-[640px] flex-col gap-5 type-body text-hh-muted">
            <p className="m-0">
              The more I thought about it, the more I realised that the problem wasn&apos;t that
              Linden lacked community. The community was already here. What was missing was a
              simple, trusted way to bring it all together. That idea became Hello Hyperlocal.
            </p>
            <p className="m-0">
              Hello Linden is our first community because this is where the idea began. It&apos;s
              where I live, where I run a business, and where I&apos;ve experienced the value of
              local support for myself. It felt right to start close to home, with a neighbourhood I
              know and genuinely care about.
            </p>
          </div>
          <CtaLink href="/#vision" surface="light">
            Explore the vision
          </CtaLink>
        </div>

        <div className="relative aspect-square w-full shrink-0 overflow-clip rounded-card split:w-[460px]">
          <Image
            src="/photography/linden-market-2.jpg"
            alt="Neighbours at a Linden market"
            fill
            sizes="(min-width: 810px) 460px, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
