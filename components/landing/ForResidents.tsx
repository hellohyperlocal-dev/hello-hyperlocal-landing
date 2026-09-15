import {
  Award,
  BadgeCheck,
  Bell,
  Calendar,
  Gem,
  Heart,
  MapPin,
  Sprout,
  Store,
  Users,
  type LucideIcon,
} from "lucide-react";
import { EyebrowPill } from "@/components/ui/EyebrowPill";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";

const BENEFITS: { icon: LucideIcon; title: string; body: string }[] = [
  { icon: MapPin, title: "What's on nearby", body: "Discover what is happening in your neighbourhood." },
  { icon: Store, title: "Local businesses", body: "Find local businesses and services close to home." },
  { icon: Calendar, title: "Events", body: "Explore markets, school activities and community gatherings." },
  { icon: Heart, title: "Support local", body: "Back the independent businesses that make Linden special." },
  { icon: BadgeCheck, title: "Trusted recommendations", body: "Find recommendations from people who live here." },
  { icon: Sprout, title: "Community projects", body: "Follow the projects shaping your neighbourhood." },
  { icon: Gem, title: "Hidden gems", body: "Discover the places you drive past every day." },
  { icon: Bell, title: "Neighbourhood information", body: "Receive the updates that affect where you live." },
  { icon: Award, title: "Rewards", body: "Earn rewards and take part in local initiatives in future." },
];

export function ForResidents() {
  return (
    <section id="residents" className="w-full bg-[#1C472A] py-[clamp(80px,10vw,130px)]">
      <div className="mx-auto flex w-full max-w-[1340px] flex-col gap-12 px-5">
        <div className="flex max-w-[760px] flex-col items-start gap-5">
          <EyebrowPill icon={Users} variant="dark">
            For Residents
          </EyebrowPill>
          <h2 className="m-0 font-heading text-[36px] font-semibold leading-[1] tracking-[-2.2px] text-white md:text-[40px] xl:text-[48px]">
            What Hello Linden gives residents
          </h2>
          <p className="m-0 text-copy-20 text-[#e2f6d5]">
            A simpler way to take part in the life of your neighbourhood, and
            to feel more connected to the place you already call home.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-x-[55px] gap-y-[50px] split:grid-cols-2 lg:grid-cols-3">
          {BENEFITS.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex flex-col items-start gap-5">
              <span className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-[#7ED957] text-[#0e0f0c]">
                <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
              </span>
              <h3 className="m-0 font-heading text-[28px] font-medium leading-[1.1] tracking-[-1px] text-white xl:text-[32px]">
                {title}
              </h3>
              <p className="m-0 text-copy-16 text-[#e2f6d5]">{body}</p>
            </li>
          ))}
        </ul>

        <a
          href="#founding-neighbours"
          className="group flex h-[58px] w-fit items-center gap-6 rounded-lg bg-[#7ED957] py-2.5 pl-5 pr-2.5 text-[#0e0f0c] transition-colors hover:bg-[#cdffad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#1C472A]"
        >
          <span className="text-copy-18">Become a Founding Neighbour</span>
          <span className="flex h-[38px] w-[38px] items-center justify-center rounded-sm bg-[#0e0f0c] text-[#7ED957]">
            <ArrowFlipIcon size={14} />
          </span>
        </a>
      </div>
    </section>
  );
}
