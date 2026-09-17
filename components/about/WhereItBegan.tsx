import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Charion's "Our purpose" split: founder photo, then an 80px gap to a
// 500px text column. Side by side only from xl, where both fit.
export function WhereItBegan() {
  return (
    <section className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px] xl:flex-row xl:items-center xl:justify-center xl:gap-[80px]">
        <div className="flex w-full max-w-[455px] items-start xl:w-[455px] xl:shrink-0">
          <div className="flex flex-1 flex-col gap-[10px]">
            <div className="relative aspect-[293/356] w-full overflow-clip rounded-card">
              <Image
                src="/photography/jc-steyn-founder.jpg"
                alt="JC Steyn, founder of Hello Hyperlocal, in Linden"
                fill
                sizes="(min-width: 640px) 455px, 100vw"
                className="object-cover"
              />
              {/* Dark veil keeps the white name legible over the photo; matches the home page founder card. */}
              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-1 bg-[linear-gradient(rgb(14_15_12/0)_0%,rgb(14_15_12/0.78)_100%)] px-6 pb-6 pt-24">
                <span className="font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-white">
                  JC Steyn, Founder
                </span>
                <span className="text-[16px] leading-6 text-white/80">Hello Hyperlocal</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex w-full max-w-[500px] flex-col items-start gap-[30px]">
          <SectionEyebrow label="Where it began" tone="light" />
          <div className="flex flex-col gap-5">
            <h2 className="m-0 type-h2 text-hh-onyx">A neighbourhood worth knowing</h2>
            <p className="m-0 type-body text-hh-muted">
              I&apos;ve lived in Linden for more than a decade, and during that time I&apos;ve seen
              first-hand what makes this neighbourhood so special. It&apos;s the local cafés, the
              independent businesses, the schools, the familiar faces, the people who care deeply
              about the suburb and the small moments that make a place feel like home.
            </p>
          </div>

          <CtaLink href="/join?type=resident" surface="light">
            Become a Founding Neighbour
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
