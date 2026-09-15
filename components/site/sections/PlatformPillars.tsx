import { Heart, ShieldCheck, Store, type LucideIcon } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

const PILLARS: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "100% Verified Residents",
    body: "Every resident profile undergoes identity verification to eliminate anonymous trolls, municipal spam, and social media noise.",
  },
  {
    icon: Heart,
    title: "Always Free for Residents",
    body: "Accessing local feeds, safety alerts, ward updates, and community event calendars will always remain 100% free for neighbours.",
  },
  {
    icon: Store,
    title: "Backing Local Merchants",
    body: "Giving neighbourhood cafes, shops, and service providers a direct line to nearby residents without corporate ad algorithms.",
  },
];

export function PlatformPillars() {
  return (
    <section id="pillars" className="relative bg-white py-[100px] split:py-[130px]">
      <div className="site-container flex flex-col items-center gap-10">
        <div className="flex max-w-[760px] flex-col items-center gap-5 text-center">
          <SectionEyebrow label="Our Commitment" tone="light" />
          <h2 className="m-0 type-h2 text-hh-onyx">A neighbourhood platform built on trust.</h2>
          <p className="m-0 type-body-lg text-hh-muted">
            We believe a local platform should serve the community first. Here are our core promises
            to every resident, merchant, and community organisation.
          </p>
        </div>

        <ul className="m-0 grid w-full list-none grid-cols-1 gap-5 p-0 split:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col items-start gap-5 rounded-card bg-hh-panel p-6 split:p-8">
              <span className="flex h-14 w-14 items-center justify-center rounded-card bg-hh-mint text-hh-hunter">
                <Icon aria-hidden className="h-6 w-6" strokeWidth={2.2} />
              </span>
              <h3 className="m-0 type-h3 text-hh-onyx">{title}</h3>
              <p className="m-0 type-body text-hh-muted">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
