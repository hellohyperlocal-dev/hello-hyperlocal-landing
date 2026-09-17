import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

export function AboutHero() {
  return (
    <section id="top" className="relative w-full overflow-hidden bg-hh-forest pb-[100px] pt-[160px] split:pb-[163px] split:pt-[177px]">
      {/* Decorative wave at Charion's measured offset; purely presentational. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <Image
          src="/decoration/hero-wave-1.svg"
          alt=""
          width={923}
          height={769}
          className="absolute left-0 top-[71px] w-[923px] max-w-none"
        />
        {/* Second wave pinned bottom-right, as in the home Hero (right: 0 keeps its cut edge off-screen). */}
        <Image
          src="/decoration/hero-wave-2.svg"
          alt=""
          width={1096}
          height={705}
          className="absolute bottom-0 right-0 w-[1096px] max-w-none translate-y-[20%]"
        />
      </div>

      <div className="site-container relative z-10 flex flex-col items-start gap-[70px] split:flex-row split:items-center split:justify-between">
        <div className="flex w-full max-w-[625px] flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="Hello Hyperlocal" tone="dark" />
            <h1 className="m-0 type-h1 text-white">Our Story</h1>
            <p className="m-0 max-w-[560px] type-body-lg text-hh-mint">
              Hello Hyperlocal started with a simple question: how do we help people feel more
              connected to the place they already call home?
            </p>
          </div>
          <CtaLink href="/join" surface="dark">
            Join Hello Linden
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
