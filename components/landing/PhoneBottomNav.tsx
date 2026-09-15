import { CircleUserRound, Heart, House, Store } from "lucide-react"

const ITEMS = [House, Store, Heart, CircleUserRound]

/**
 * Floating bottom nav inside the phone mockups. Dark Spruce fill,
 * inactive icons in translucent white, active icon gets a grass ring
 * (never a filled background) — brand-board §05.
 */
export function PhoneBottomNav({ active }: { active: number }) {
  return (
    <div
      aria-hidden="true"
      className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2 rounded-full bg-brand-spruce p-2.5 shadow-[0_14px_30px_rgba(15,15,15,0.22)]"
    >
      {ITEMS.map((Icon, index) => {
        const isActive = index === active
        return (
          <span
            key={index}
            className={`flex h-[34px] w-[34px] items-center justify-center rounded-full ${
              isActive
                ? "bg-brand-grass/15 text-brand-grass shadow-[inset_0_0_0_1.5px_#7ED957]"
                : "text-white/55"
            }`}
          >
            <Icon className="h-[15px] w-[15px]" />
          </span>
        )
      })}
    </div>
  )
}
