import { cn } from "@/lib/utils";
import type { Benefit } from "@/lib/join-options";

interface BenefitTilesProps {
  items: Benefit[];
  /** Tile colour: "white" tiles on warm sections, "panel" tiles on white sections. */
  tile?: "white" | "panel";
  cols?: 2 | 3 | 4;
}

const gridColsMap = {
  2: "sm:grid-cols-2",
  3: "sm:grid-cols-2 lg:grid-cols-3",
  4: "sm:grid-cols-2 lg:grid-cols-4",
};

// Icon tiles instead of checkmark lists: benefits read as things you'll get, not a marked test.
export function BenefitTiles({ items, tile = "white", cols }: BenefitTilesProps) {
  const activeCols = cols ?? (items.length === 4 ? 4 : 3);

  return (
    <ul
      className={cn(
        "m-0 grid w-full list-none grid-cols-1 gap-4 p-0 xl:gap-5",
        gridColsMap[activeCols],
      )}
    >
      {items.map(({ icon: Icon, title, caption }) => (
        <li
          key={title}
          className={cn(
            "flex flex-col items-start gap-4 rounded-card p-5 split:p-6",
            tile === "white" ? "bg-white" : "bg-hh-panel",
          )}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] bg-hh-lime text-hh-onyx">
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
