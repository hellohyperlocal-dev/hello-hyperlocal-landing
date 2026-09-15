import Image from "next/image";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Slots use percentages of a 594x460 orbit box so the composition scales instead of breaking.
const ORBIT = [
  { label: "Community Orgs", left: "10.27%", top: "7.17%" },
  { label: "Residents", left: "65.97%", top: "9.35%" },
  { label: "Marketplace", left: "4.04%", top: "50%", lift: true },
  { label: "Events", left: "81.23%", top: "50%", lift: true },
  { label: "Schools", left: "13.13%", top: "71.09%" },
  { label: "Local Businesses", left: "60%", top: "75.22%" },
];

export function VisionOrbit() {
  return (
    <section
      id="vision"
      className="relative flex items-center justify-center overflow-clip bg-hh-forest py-[100px] split:py-[130px]"
    >
      <div className="site-container flex flex-col items-center gap-[60px] split:flex-row">
        <div className="relative h-[340px] w-full max-w-[594px] flex-1 sm:h-[460px]">
          <ul aria-label="What Hello Hyperlocal connects" className="absolute inset-0 z-[3] m-0 list-none p-0">
            {ORBIT.map((item) => (
              <li
                key={item.label}
                style={{
                  left: item.left,
                  top: item.top,
                  transform: item.lift ? "translateY(-25px)" : undefined,
                }}
                className="absolute whitespace-nowrap rounded-card bg-hh-veil p-[10px] text-[15px] leading-[24px] text-hh-lime backdrop-blur-[10px] sm:text-[20px] sm:leading-[30px]"
              >
                {item.label}
              </li>
            ))}
          </ul>

          <div aria-hidden className="relative mx-auto aspect-square h-full">
            {/* Orbit glow: permitted gradient exception (see HANDOVER.md). */}
            <div className="absolute inset-0 rounded-full border border-hh-rule-light bg-[radial-gradient(circle,rgb(126_217_87/0.16)_0%,transparent_68%)]" />
            <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-hh-rule-light" />
            <div className="absolute left-1/2 top-1/2 flex h-[34%] w-[34%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-hh-warm p-[12%]">
              <Image
                src="/logo/hello-hyperlocal-logo.png"
                alt=""
                width={132}
                height={132}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-1 flex-col items-start gap-[50px]">
          <div className="flex flex-col items-start gap-[30px]">
            <SectionEyebrow label="Explore Hello" tone="dark" />
            <div className="flex flex-col items-start gap-5">
              <h2 className="m-0 type-h2 text-white">Building One Local Ecosystem</h2>
              <p className="m-0 type-body-lg text-hh-mint">
                Hello Linden is where the journey begins, but the vision is to build a trusted
                digital home for neighbourhoods across South Africa.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[5px] border-l-2 border-hh-lime py-1 pl-[18px]">
            <p className="m-0 text-[16px] leading-6 text-hh-lime">Hello Linden is the first Hello.</p>
            <p className="m-0 text-[16px] leading-6 text-white">It won&rsquo;t be the last.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
