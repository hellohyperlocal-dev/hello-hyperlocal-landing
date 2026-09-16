import { cn } from "@/lib/utils";
import type { Benefit } from "@/lib/join-options";

interface BenefitTilesProps {
  items: Benefit[];
  /** Tile colour: "white" tiles on warm sections, "panel" tiles on white sections. */
  tile?: "white" | "panel";
}

// Icon tiles instead of checkmark lists: benefits read as things you'll get, not a marked test.
export function BenefitTiles({ items, tile = "white" }: BenefitTilesProps) {
  return (
    <ul className="m-0 grid w-full list-none grid-cols-1 gap-4 p-0 sm:grid-cols-2 xl:grid-cols-3 xl:gap-5">
      {items.map(({ icon: Icon, title, caption }) => (
        <li
          key={title}
          className={cn(
            "flex items-start gap-4 rounded-card p-5 split:p-6",
            tile === "white" ? "bg-white" : "bg-hh-panel",
          )}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-button bg-hh-lime text-hh-onyx">
            <Icon aria-hidden className="h-5 w-5" strokeWidth={2.2} />
          </span>
          <span className="flex flex-col gap-1">
            <span className="type-h3 text-hh-onyx">{title}</span>
            <span className="type-body text-hh-muted">{caption}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}
