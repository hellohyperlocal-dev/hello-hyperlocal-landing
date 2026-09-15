import Image from "next/image";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const MISSED = [
  "We hear about a new restaurant after it has already opened.",
  "We miss local events because the information was shared in a WhatsApp group we weren’t part of.",
  "We drive past great businesses without knowing their story.",
  "We sometimes struggle to find a trusted local service.",
];

export function OurStory() {
  return (
    <section id="our-story" className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-start gap-[60px] split:flex-row split:gap-[120px]">
        <div className="flex w-full flex-1 flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-[30px]">
            <SectionEyebrow label="Our Story" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">How Hello Hyperlocal Started</h2>
            <p className="m-0 max-w-[640px] type-body-lg text-hh-muted">
              As a resident and local business owner, I’ve seen how easy it is for people to miss
              what’s happening right around them.
            </p>
          </div>

          <ol className="m-0 flex w-full list-none flex-col items-start gap-8 p-0">
            {MISSED.map((line, i) => (
              <li key={line} className="flex items-start gap-[10px]">
                <span className="text-[18px] leading-[27px] text-hh-muted">
                  {String(i + 1).padStart(2, "0")}.
                </span>
                <p className="m-0 font-heading text-[20px] font-medium leading-[26px] tracking-[-0.6px] text-hh-muted xl:text-[24px] xl:leading-[30px]">
                  {line}
                </p>
              </li>
            ))}
          </ol>

          <blockquote className="m-0 flex flex-col gap-3 border-l-2 border-hh-hunter py-1 pl-[18px]">
            <p className="m-0 type-body-lg text-hh-onyx">
              The community was already here. What was missing was a simple, trusted way to bring
              it all together.
            </p>
            <footer className="text-[16px] leading-6 text-hh-hunter">
              That idea became Hello Hyperlocal.
            </footer>
          </blockquote>

          <p className="m-0 font-heading text-[24px] font-medium leading-[30px] tracking-[-0.6px] text-hh-forest">
            Because sometimes the best things aren’t far away. They’re just around the corner.
          </p>
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
              JC Steyn &amp; Founding Team
            </span>
            <span className="text-[16px] leading-6 text-hh-muted">Linden Resident (10+ Yrs)</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
