import Image from "next/image";
import { MISSED_MOMENTS } from "@/lib/our-story";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Compact telling for the landing page. The full story, in the client's words, lives at /about.
export function OurStory() {
  return (
    <section id="our-story" className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px] split:flex-row split:gap-[120px]">
        <div className="flex w-full flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-[30px]">
            <SectionEyebrow label="Our Story" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">How Hello Hyperlocal Started</h2>
            <div className="flex max-w-[640px] flex-col gap-4">
              <p className="m-0 type-body-lg text-hh-onyx">
                It started with a simple question: how do we help people feel more connected to the
                place they already call home?
              </p>
              <p className="m-0 type-body text-hh-muted">
                I&apos;ve lived in Linden for more than a decade, as a resident and local business
                owner, and I&apos;ve seen how easy it is to miss what&apos;s happening right around
                us.
              </p>
            </div>
          </div>

          {/* Plain lines, deliberately not a list: numbering made the story read like a checklist. */}
          <div className="flex w-full flex-col items-start gap-6">
            {MISSED_MOMENTS.map((moment) => (
              <p
                key={moment.title}
                className="m-0 font-heading text-[20px] font-medium leading-[26px] tracking-[-0.6px] text-hh-muted xl:text-[24px] xl:leading-[30px]"
              >
                {moment.short}
              </p>
            ))}
          </div>

          <blockquote className="m-0 flex flex-col gap-3 border-l-2 border-hh-hunter py-1 pl-[18px]">
            <p className="m-0 type-body-lg text-hh-onyx">
              Linden never lacked community. What was missing was a simple, trusted way to bring it
              all together.
            </p>
            <footer className="text-[16px] leading-6 text-hh-hunter">
              That idea became Hello Hyperlocal.
            </footer>
          </blockquote>

          <CtaLink href="/about" surface="light">
            Read our full story
          </CtaLink>
        </div>

        <figure className="m-0 flex w-full flex-col gap-3 split:w-[455px] split:shrink-0">
          <Image
            src="/photography/jc-steyn-founder.jpg"
            alt="JC Steyn, founder of Hello Hyperlocal, in Linden"
            width={455}
            height={650}
            sizes="(min-width: 810px) 455px, 100vw"
            className="h-full max-h-[650px] w-full rounded-card object-cover"
          />
          <figcaption className="flex flex-col gap-1">
            <span className="font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-hh-onyx">
              JC Steyn, Founder
            </span>
            <span className="text-[16px] leading-6 text-hh-muted">
              Linden resident &amp; local business owner
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
