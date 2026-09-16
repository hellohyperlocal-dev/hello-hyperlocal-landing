"use client";

import { useRef } from "react";
import { ChevronRight, House, Store } from "lucide-react";
import { PROGRESS } from "@/lib/progress";
import type { JoinType } from "./types";

const OPTIONS: { value: JoinType; icon: typeof House; title: string; body: string }[] = [
  {
    value: "resident",
    icon: House,
    title: "I'm a Resident",
    body: "Discover what's around you and become a Founding Neighbour.",
  },
  {
    value: "business",
    icon: Store,
    title: "I'm a Business",
    body: "Put your business on the neighbourhood map.",
  },
];

interface TypeChooserProps {
  onChoose: (type: JoinType) => void;
  headingRef: React.Ref<HTMLHeadingElement>;
}

export function TypeChooser({ onChoose, headingRef }: TypeChooserProps) {
  const listRef = useRef<HTMLDivElement>(null);

  // Radio-group semantics: arrow keys move between the two cards, as a keyboard user
  // expects from a single either/or choice.
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (!["ArrowDown", "ArrowRight", "ArrowUp", "ArrowLeft"].includes(e.key)) return;
    e.preventDefault();
    const items = Array.from(listRef.current?.querySelectorAll("button") ?? []);
    const current = items.indexOf(document.activeElement as HTMLButtonElement);
    const delta = e.key === "ArrowDown" || e.key === "ArrowRight" ? 1 : -1;
    const next = items[(current + delta + items.length) % items.length];
    next?.focus();
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-3">
        <h1 ref={headingRef} tabIndex={-1} className="m-0 type-h2 text-hh-onyx focus:outline-none">
          How would you like to join Hello Linden?
        </h1>
        <p className="m-0 type-body text-hh-muted">
          Hello Linden is coming in 2026. Register early to help shape it.
        </p>
      </div>

      <div
        ref={listRef}
        role="radiogroup"
        aria-label="How would you like to join Hello Linden?"
        onKeyDown={onKeyDown}
        className="flex flex-col gap-3"
      >
        {OPTIONS.map(({ value, icon: Icon, title, body }) => (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={false}
            onClick={() => onChoose(value)}
            className="flex w-full items-center gap-4 rounded-card border border-hh-rule-dark bg-white p-4 text-left transition-colors hover:bg-hh-mint focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-button bg-hh-mint text-hh-hunter">
              <Icon className="h-6 w-6" aria-hidden />
            </span>
            <span className="flex flex-1 flex-col gap-0.5">
              <span className="type-h3 text-hh-onyx">{title}</span>
              <span className="text-[15px] leading-[22px] text-hh-muted">{body}</span>
            </span>
            <ChevronRight className="h-5 w-5 shrink-0 text-hh-muted" aria-hidden />
          </button>
        ))}
      </div>

      <p className="m-0 border-l-2 border-hh-hunter py-1 pl-4 text-[15px] leading-[22px] text-hh-muted">
        {PROGRESS.neighbours.count} of {PROGRESS.neighbours.goal} Founding Neighbours and{" "}
        {PROGRESS.businesses.count} of {PROGRESS.businesses.goal} Founding Businesses have joined so
        far.
      </p>
    </div>
  );
}
