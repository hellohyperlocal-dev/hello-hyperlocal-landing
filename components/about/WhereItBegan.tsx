import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Charion's "Our purpose" split: a two-photo collage (293px columns, 10px gap) with a caption
// card, then an 80px gap to a 500px text column.
export function WhereItBegan() {
  return (
    <section className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px] split:flex-row xl:gap-[80px]">
        <div className="flex w-full items-start gap-[10px] split:w-[596px] split:shrink-0">
          <div className="flex flex-1 flex-col gap-[10px]">
            <div className="relative aspect-[293/356] w-full overflow-clip rounded-card">
              <Image
                src="/photography/jc-steyn-founder.jpg"
                alt="JC Steyn, founder of Hello Hyperlocal, in Linden"
                fill
                sizes="(min-width: 810px) 293px, 50vw"
                className="object-cover"
              />
            </div>
            <p className="m-0 rounded-card bg-hh-lime p-5 text-[16px] leading-6 text-hh-onyx">
              More than a decade in Linden, as a resident and local business owner.
            </p>
          </div>
          <div className="relative aspect-[293/468] w-full flex-1 overflow-clip rounded-card">
            <Image
              src="/photography/linden-streetview.jpeg"
              alt="A tree-lined street in Linden"
              fill
              sizes="(min-width: 810px) 293px, 50vw"
              className="object-cover"
            />
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
