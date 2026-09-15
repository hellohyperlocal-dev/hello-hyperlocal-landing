import { Compass, Radio, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const FEATURES: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "Verified Residents",
    body: "Every profile is authenticated to a physical address to keep community discussions trusted and troll-free.",
  },
  {
    icon: Compass,
    title: "Discover Local Spots",
    body: "Explore independent neighbourhood cafes, weekend markets, and community-recommended local artisans.",
  },
  {
    icon: Radio,
    title: "Real-Time Ward Alerts",
    body: "Stay informed on municipal notices, power restoration timelines, and safety updates without noisy ad feeds.",
  },
  {
    icon: Users,
    title: "Back Ward Projects",
    body: "Organise community cleanups, support local park restorations, and track neighbourhood progress together.",
  },
];

export function WhyHello() {
  return (
    <section id="features" className="relative bg-hh-forest py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-center">
        <div className="flex w-full max-w-[985px] flex-col items-start gap-10">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="Why Hello Hyperlocal" tone="dark" />
            <h2 className="m-0 type-h2 text-white">Designed for Everyday Life</h2>
            <p className="m-0 max-w-[620px] type-body-lg text-hh-mint">
              Connect with verified neighbours, discover local culture, and stay informed with
              real-time community updates.
            </p>
          </div>

          <ul className="m-0 grid w-full list-none grid-cols-1 gap-x-[55px] gap-y-[50px] p-0 split:grid-cols-2">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <li key={title} className="flex flex-col items-start gap-5">
                <span className="flex h-16 w-16 items-center justify-center rounded-card bg-hh-lime text-hh-onyx">
                  <Icon aria-hidden className="h-7 w-7" strokeWidth={2.2} />
                </span>
                <h3 className="m-0 font-heading text-[36px] font-medium leading-[0.95] tracking-[-2px] text-white md:text-[44px] xl:text-[56px] xl:tracking-[-3px]">
                  {title}
                </h3>
                <p className="m-0 type-body text-hh-mint">{body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
