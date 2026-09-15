import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { STEP_MOCKUPS } from "@/components/site/mockups/StepMockups";

const STEPS = [
  {
    number: "01",
    title: "Choose Your Suburb",
    body: "When Hello Linden launches in 2026, choose your suburb to open your local neighbourhood feed.",
  },
  {
    number: "02",
    title: "Get Verified",
    body: "A quick resident check keeps Hello Linden a trusted space for real neighbours.",
  },
  {
    number: "03",
    title: "Discover, Connect & Support",
    body: "Explore local spots, follow community projects and support the businesses that make your suburb thrive.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-clip bg-white py-[80px] split:py-[100px]">
      <div className="site-container flex flex-col items-start gap-12 xl:flex-row xl:gap-[100px]">
        <div className="flex w-full flex-col items-start gap-8 xl:w-[350px] xl:shrink-0 xl:justify-between xl:self-stretch">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="How It Works" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">Getting started in 3 simple steps.</h2>
            <p className="m-0 max-w-[560px] type-body text-hh-muted">
              Here is how Hello Linden will work when it launches in 2026, connecting you with the
              people and businesses right outside your door.
            </p>
          </div>
          <CtaLink href="#founding-neighbours" variant="text" surface="light" className="px-0">
            Become a Founding Neighbour
          </CtaLink>
        </div>

        <ol className="m-0 grid w-full list-none grid-cols-1 gap-10 p-0 md:grid-cols-3 md:gap-5">
          {STEPS.map((step, i) => {
            const Mockup = STEP_MOCKUPS[i];
            return (
              <li key={step.number} className="flex flex-col gap-5">
                <div
                  aria-hidden="true"
                  className="relative flex h-[230px] w-full items-start justify-center overflow-clip rounded-card bg-hh-mint pt-5"
                >
                  <div className="relative aspect-[1242/2072] w-[220px] shrink-0 select-none">
                    <div className="pointer-events-none absolute left-[14.65%] top-[2.8%] z-0 flex h-[89.5%] w-[68.6%] flex-col overflow-hidden rounded-[20px] bg-[#FCFAF7]">
                      <Mockup />
                    </div>
                    <Image
                      src="/phone-2.png"
                      alt=""
                      width={1242}
                      height={2072}
                      sizes="220px"
                      className="pointer-events-none relative z-10 block h-auto w-full"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-[10px]">
                  <h3 className="m-0 type-h3 text-hh-onyx">
                    <span className="mr-2 font-sans text-[18px] text-hh-muted">{step.number}</span>
                    {step.title}
                  </h3>
                  <p className="m-0 type-body text-hh-muted">{step.body}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
