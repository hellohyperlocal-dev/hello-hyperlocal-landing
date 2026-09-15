import { Sparkles } from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";

interface GrowthCounterProps {
  neighbourCount?: number;
  neighbourGoal?: number;
  businessCount?: number;
  businessGoal?: number;
  partnerCount?: number;
}

// Fixed locale: the default differs between the server and South African browsers,
// which caused a hydration mismatch.
const formatCount = (n: number) => n.toLocaleString("en-US");

export function GrowthCounter({
  neighbourCount = 327,
  neighbourGoal = 1000,
  businessCount = 42,
  businessGoal = 100,
  partnerCount = 6,
}: GrowthCounterProps) {
  const stats: { label: string; value: number; goal?: number; caption: string }[] = [
    {
      label: "Founding Neighbours",
      value: neighbourCount,
      goal: neighbourGoal,
      caption: "residents registered so far",
    },
    {
      label: "Founding Businesses",
      value: businessCount,
      goal: businessGoal,
      caption: "local businesses signed up",
    },
    {
      label: "Community Partners",
      value: partnerCount,
      caption: "schools, organisations and local leaders",
    },
  ];

  return (
    <section id="progress" className="w-full py-[clamp(48px,8vw,96px)]">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-8 px-5">
        <div className="flex flex-col items-start gap-4 split:flex-row split:items-end split:justify-between">
          <div className="flex flex-col items-start gap-4">
            <EyebrowPill icon={Sparkles} variant="standard">
              Building the Community
            </EyebrowPill>
            <h2 className="m-0 font-heading text-[36px] font-semibold leading-[1] tracking-[-2.2px] text-[#0e0f0c] dark:text-[#FCFAF7] md:text-[40px] xl:text-[48px]">
              Hello Linden is coming in 2026.
            </h2>
          </div>
          <p className="m-0 max-w-[460px] text-copy-18 text-[#454745] dark:text-[#99A893]">
            Our founding community is growing ahead of launch. Register early to
            help shape Hello Linden.
          </p>
        </div>

        <dl className="grid grid-cols-1 gap-10 rounded-[10px] bg-[#7ED957] px-6 py-8 text-[#0e0f0c] split:grid-cols-3 split:px-[50px] split:py-[30px]">
          {stats.map((stat) => {
            const percent = stat.goal
              ? Math.min(100, Math.round((stat.value / stat.goal) * 100))
              : null;

            return (
              <div key={stat.label} className="flex flex-col gap-3">
                <dt className="font-heading text-[22px] font-medium leading-[26px] tracking-[-1px]">
                  {stat.label}
                </dt>
                <dd className="order-first m-0 flex items-baseline gap-2 font-heading font-medium leading-none">
                  <span className="text-[56px] xl:text-[78px]">
                    {formatCount(stat.value)}
                  </span>
                  {stat.goal ? (
                    <span className="text-[24px] text-[#0e0f0c]/60">
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
                      className="h-2 w-full overflow-hidden rounded-full bg-[#0e0f0c]/15"
                    >
                      <div
                        className="h-full rounded-full bg-[#0e0f0c]"
                        style={{ width: `${percent}%` }}
                      />
                    </div>
                  </dd>
                ) : null}
                <dd className="m-0 text-copy-16">{stat.caption}</dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
