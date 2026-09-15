import { PROGRESS } from "@/lib/progress";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";

// Fixed locale: the default differs between the server and South African browsers,
// which caused a hydration mismatch.
const formatCount = (n: number) => n.toLocaleString("en-US");

const STATS: { label: string; value: number; goal?: number; caption: string }[] = [
  {
    label: "Founding Neighbours",
    value: PROGRESS.neighbours.count,
    goal: PROGRESS.neighbours.goal,
    caption: "residents registered so far",
  },
  {
    label: "Founding Businesses",
    value: PROGRESS.businesses.count,
    goal: PROGRESS.businesses.goal,
    caption: "local businesses signed up",
  },
  {
    label: "Community Partners",
    value: PROGRESS.partners.count,
    caption: "schools, organisations and local leaders",
  },
];

export function Progress() {
  return (
    <section id="progress" className="relative bg-white pb-[100px] split:pb-[130px]">
      <div className="site-container flex flex-col gap-10">
        <div className="flex flex-col items-start gap-5 split:flex-row split:items-end split:justify-between">
          <div className="flex flex-col items-start gap-5">
            <SectionEyebrow label="Building the Community" tone="light" />
            <h2 className="m-0 type-h2 text-hh-onyx">Hello Linden is coming in 2026.</h2>
          </div>
          <p className="m-0 max-w-[460px] type-body-lg text-hh-muted">
            Our founding community is growing ahead of launch. Register early to help shape Hello
            Linden.
          </p>
        </div>

        <dl className="m-0 grid grid-cols-1 gap-10 rounded-card bg-hh-lime px-6 py-8 text-hh-onyx split:grid-cols-3 split:px-[50px] split:py-[30px]">
          {STATS.map((stat) => {
            const percent = stat.goal ? Math.min(100, Math.round((stat.value / stat.goal) * 100)) : null;
            return (
              <div key={stat.label} className="flex flex-col gap-3">
                <dt className="type-h3">{stat.label}</dt>
                <dd className="order-first m-0 flex items-baseline gap-2">
                  <span className="type-stat">{formatCount(stat.value)}</span>
                  {stat.goal ? (
                    <span className="font-heading text-[24px] font-medium text-hh-onyx/70">
                      / {formatCount(stat.goal)}
                    </span>
                  ) : null}
                </dd>
                {percent !== null && stat.goal ? (
                  <dd className="m-0">
                    <div
                      role="progressbar"
                      aria-label={`${stat.label} progress`}
                      aria-valuenow={stat.value}
                      aria-valuemin={0}
                      aria-valuemax={stat.goal}
                      className="h-2 w-full overflow-hidden rounded-full bg-hh-onyx/15"
                    >
                      <div className="h-full rounded-full bg-hh-onyx" style={{ width: `${percent}%` }} />
                    </div>
                  </dd>
                ) : null}
                <dd className="m-0 type-body">{stat.caption}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
