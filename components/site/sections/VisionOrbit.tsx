import Image from "next/image";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { ScrollRevealText } from "@/components/site/ui/ScrollRevealText";

// Brief §3: everything Hello connects.
const CONNECTS = [
  "Residents",
  "Local businesses",
  "Schools",
  "Community organisations",
  "Local leaders",
  "Events",
  "Community projects",
  "Local services",
  "Marketplace",
  "Rewards & discovery",
];

// Ten pills spaced evenly on an ellipse around the logo, starting at the top.
const ORBIT = CONNECTS.map((label, i) => {
  const angle = (i / CONNECTS.length) * 2 * Math.PI - Math.PI / 2;
  return { label, left: `${50 + 38 * Math.cos(angle)}%`, top: `${50 + 42 * Math.sin(angle)}%` };
});

const FOR_WHO = [
  { who: "For residents", line: "A simpler way to take part in the life of their neighbourhood." },
  { who: "For businesses", line: "A closer connection to the people living around them." },
  { who: "For schools & organisations", line: "Another way to share what's happening and reach the people who care." },
  { who: "For local leaders & projects", line: "A trusted space to share progress, needs and ways to get involved." },
];

export function VisionOrbit() {
  return (
    <>
      <section id="vision" className="relative overflow-clip bg-hh-forest py-[100px] split:py-[130px]">
        <div className="site-container flex flex-col gap-[70px]">
          <div className="flex flex-col items-center gap-[60px] split:flex-row">
            <div className="relative hidden aspect-[594/500] w-full max-w-[594px] flex-1 sm:block">
              <div aria-hidden className="absolute left-1/2 top-1/2 aspect-square h-[78%] -translate-x-1/2 -translate-y-1/2">
                {/* Orbit glow: permitted gradient exception (see HANDOVER.md). */}
                <div className="absolute inset-0 rounded-full border border-hh-rule-light bg-[radial-gradient(circle,rgb(126_217_87/0.16)_0%,transparent_68%)]" />
                <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hh-rule-light" />
                <div className="absolute left-1/2 top-1/2 flex h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-hh-warm p-[12%]">
                  <Image src="/logo/hello-hyperlocal-logo.png" alt="" width={132} height={132} className="h-auto w-full object-contain" />
                </div>
              </div>
              <ul aria-label="What Hello Hyperlocal connects" className="absolute inset-0 m-0 list-none p-0">
                {ORBIT.map((item) => (
                  <li
                    key={item.label}
                    style={{ left: item.left, top: item.top }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-card bg-hh-veil px-[10px] py-[6px] text-[14px] leading-[20px] text-hh-lime backdrop-blur-[10px] lg:text-[16px] lg:leading-[24px]"
                  >
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-1 flex-col items-start gap-[30px]">
              <SectionEyebrow label="The Vision" tone="dark" />
              <h2 className="m-0 type-h2 text-white">Hello Linden is where the journey begins</h2>
              <p className="m-0 type-body-lg text-hh-mint">
                The vision is much bigger. A Trusted digital home for neighbourhoods across South Africa,
                helping people feel more connected to where they live, the people around them and the
                businesses and organisations that make each community unique.
              </p>
              <p className="m-0 type-body text-white">
                Every neighbourhood already has its own rhythm. Residents know the streets. Businesses
                know their customers. Schools, community organisations and local leaders are already doing
                important work. The challenge is that all of this often lives in different places. Hello
                Hyperlocal brings it together.
              </p>

              {/* Phones: the orbit is too dense, so the ten connections wrap as a simple row. */}
              <ul aria-label="What Hello Hyperlocal connects" className="m-0 flex list-none flex-wrap gap-2 p-0 sm:hidden">
                {CONNECTS.map((label) => (
                  <li key={label} className="rounded-card bg-hh-veil px-[10px] py-[6px] text-[14px] leading-[20px] text-hh-lime">
                    {label}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <ul className="m-0 grid list-none grid-cols-1 gap-x-10 gap-y-8 border-t border-hh-rule-light p-0 pt-[50px] sm:grid-cols-2 xl:grid-cols-4">
            {FOR_WHO.map((item) => (
              <li key={item.who} className="flex flex-col gap-2">
                <span className="type-h3 text-white">{item.who}</span>
                <span className="type-body text-hh-mint">{item.line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Core message on white, outside the forest block. Its bottom padding adds to How It Works' own top padding, for extra room before the next section. */}
      <section className="relative bg-white pb-[60px] pt-[100px] split:pb-[90px] split:pt-[130px]">
        <div className="site-container">
          {/* The client's core message as a scroll text reveal. */}
          <ScrollRevealText
            className="flex max-w-[1100px] flex-col gap-6 font-heading text-[32px] font-semibold leading-[1.1] tracking-[-1.5px] text-hh-onyx split:text-[52px] split:tracking-[-2.4px]"
            lines={[
              {
                text: "Technology should never replace community. It should strengthen it. The technology can scale. But the community should always stay local.",
              },
              { text: "Hello Linden is the first Hello. It won’t be the last.", className: "text-hh-lime" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
