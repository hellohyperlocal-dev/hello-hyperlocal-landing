import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Charion's dark testimonial card (10px radius, 130px padding), carrying the founder's own words.
export function FounderQuote() {
  return (
    <section className="relative bg-white pb-[100px] split:pb-[130px]">
      <div className="site-container">
        <figure className="m-0 flex flex-col items-center gap-[30px] rounded-card bg-hh-forest px-5 py-[80px] text-center split:px-[50px] split:py-[130px]">
          <SectionEyebrow label="In JC's words" tone="dark" />
          <blockquote className="m-0 max-w-[1000px]">
            <p className="m-0 font-heading text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] text-white split:text-[48px]">
              &ldquo;The goal is not to replace the conversations, relationships and community
              networks that already exist. It&apos;s to strengthen them.&rdquo;
            </p>
          </blockquote>
          <figcaption className="text-[16px] leading-6 text-hh-mint">
            JC Steyn, Founder, Hello Hyperlocal
          </figcaption>
          <p className="m-0 max-w-[760px] type-body-lg text-white">
            Hello Linden is being created to help residents discover what&apos;s around them,
            support local businesses, stay connected to community life and find more reasons to
            appreciate the neighbourhood they live in.
          </p>
        </figure>
      </div>
    </section>
  );
}
