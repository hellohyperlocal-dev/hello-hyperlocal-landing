import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Pill offsets as percentages of the orbit. `left` is Charion About Us at 1280px (from sm up);
// `mobileLeft` pulls the pills inside the page gutter on phones, where the orbit fills the width.
const PILLS = [
  { label: "Local cafés", left: "-4%", mobileLeft: "4%", top: "6%" },
  { label: "Familiar faces", left: "-12%", mobileLeft: "2%", top: "50%" },
  { label: "Independent businesses", left: "14%", mobileLeft: "12%", top: "90%" },
];

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

        {/* Orbit: same construction as VisionOrbit, sized to Charion's 380/300/160 rings. */}
        <div className="relative mx-auto aspect-square w-full max-w-[300px] shrink-0 sm:max-w-[380px] split:mx-0 split:mr-[70px]">
          <div
            aria-hidden
            className="absolute inset-0 rounded-full border border-hh-rule-light bg-[radial-gradient(circle,rgb(126_217_87/0.16)_0%,transparent_68%)]"
          />
          <div
            aria-hidden
            className="absolute left-1/2 top-1/2 h-[79%] w-[79%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hh-rule-light"
          />
          <div className="absolute left-1/2 top-1/2 flex h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-hh-warm p-[9%]">
            <Image
              src="/logo/hello-hyperlocal-logo.png"
              alt=""
              width={132}
              height={132}
              className="h-auto w-full object-contain"
            />
          </div>

          <ul aria-label="What makes Linden home" className="absolute inset-0 m-0 list-none p-0">
            {PILLS.map((pill) => (
              <li
                key={pill.label}
                style={
                  {
                    "--pill-left": pill.mobileLeft,
                    "--pill-left-sm": pill.left,
                    top: pill.top,
                  } as React.CSSProperties
                }
                className="absolute left-[var(--pill-left)] -translate-y-1/2 sm:left-[var(--pill-left-sm)] whitespace-nowrap rounded-card bg-hh-veil p-[10px] text-[15px] leading-[24px] text-hh-lime backdrop-blur-[10px] sm:text-[18px] sm:leading-[28px]"
              >
                {pill.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
