import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "./ArrowIcon";

type Variant = "primary" | "text";
/** "lime" is for CTAs sitting on the lime brand colour, where the lime primary button would vanish. */
type Surface = "dark" | "light" | "lime";

interface CommonProps {
  children: React.ReactNode;
  variant?: Variant;
  /** Surface the control sits on. Drives text, arrow and focus-ring colours so AA holds. */
  surface?: Surface;
  className?: string;
}

type AnchorProps = CommonProps & { href: string; onClick?: never; type?: never; disabled?: never };
type ButtonProps = CommonProps & {
  href?: undefined;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
};

export type CtaLinkProps = AnchorProps | ButtonProps;

function classes(variant: Variant, surface: Surface, className?: string) {
  const ring =
    surface === "dark"
      ? "focus-visible:ring-hh-lime focus-visible:ring-offset-hh-forest"
      : surface === "lime"
        ? "focus-visible:ring-hh-onyx focus-visible:ring-offset-hh-lime"
        : "focus-visible:ring-hh-forest focus-visible:ring-offset-white";

  return cn(
    "group inline-flex h-[58px] shrink-0 items-center rounded-button text-[18px] leading-[30px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-[20px]",
    ring,
    variant === "primary"
      ? cn(
          // whitespace-nowrap + tighter mobile gap: long labels must never wrap inside the button.
          "justify-between gap-4 whitespace-nowrap py-[10px] pl-5 pr-[10px] sm:gap-[55px]",
          // On lime the button inverts to onyx (white text 19:1, lime chip 10.9:1).
          surface === "lime"
            ? "bg-hh-onyx text-white hover:bg-hh-forest"
            : "bg-hh-lime text-hh-onyx hover:bg-hh-lime-hover",
        )
      : cn(
          // No gap: the arrow slots animate their own spacing (see TextInner).
          "px-5",
          surface === "dark" ? "text-white" : "text-hh-onyx",
        ),
    className,
  );
}

function Inner({ variant, surface, children }: Required<Pick<CommonProps, "variant" | "surface">> & { children: React.ReactNode }) {
  if (variant === "primary") {
    return (
      <>
        <span>{children}</span>
        <span
          className={cn(
            "flex h-[38px] w-[38px] items-center justify-center rounded-chip",
            surface === "lime" ? "bg-hh-lime text-hh-onyx" : "bg-hh-onyx text-hh-lime",
          )}
        >
          <ArrowIcon size={14} />
        </span>
      </>
    );
  }
  return <TextInner surface={surface}>{children}</TextInner>;
}

// Hover animation from arrowlinkcta.framer.website: the right arrow spins out and collapses while
// a left arrow spins in and pushes the label over, and the underline wipes (retracts to the right
// as a new line draws in from the left). Reverses on leave; keyboard focus plays it too.
const ease = "duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none";

function TextInner({ surface, children }: { surface: Surface; children: React.ReactNode }) {
  const accent = surface === "dark" ? "text-hh-lime" : surface === "lime" ? "text-hh-onyx" : "text-hh-hunter";
  const line = surface === "dark" ? "bg-hh-lime" : surface === "lime" ? "bg-hh-onyx" : "bg-hh-hunter";
  return (
    <span className="relative inline-flex items-center pb-1">
      {/* Left arrow: hidden (0 width, scale 0, -90deg) until hover. */}
      <span
        aria-hidden
        className={cn(
          "flex w-0 shrink-0 -rotate-90 scale-0 items-center overflow-visible opacity-0 transition-all",
          "group-hover:mr-[15px] group-hover:w-[14px] group-hover:rotate-0 group-hover:scale-100 group-hover:opacity-100",
          "group-focus-visible:mr-[15px] group-focus-visible:w-[14px] group-focus-visible:rotate-0 group-focus-visible:scale-100 group-focus-visible:opacity-100",
          accent,
          ease,
        )}
      >
        <ArrowIcon size={14} />
      </span>

      <span>{children}</span>

      {/* Right arrow: visible until hover, then spins out and collapses. */}
      <span
        aria-hidden
        className={cn(
          "ml-[15px] flex w-[14px] shrink-0 items-center overflow-visible transition-all",
          "group-hover:ml-0 group-hover:w-0 group-hover:rotate-90 group-hover:scale-0 group-hover:opacity-0",
          "group-focus-visible:ml-0 group-focus-visible:w-0 group-focus-visible:rotate-90 group-focus-visible:scale-0 group-focus-visible:opacity-0",
          accent,
          ease,
        )}
      >
        <ArrowIcon size={14} />
      </span>

      {/* Underline wipe, from the source's two-line setup (Line Right pinned right at 100%,
          Line Left pinned left at ~0%, swapped on hover). The lines are staggered so the wipe is
          visible: on hover the line exits to the right, then a new line draws in from the left;
          on leave that line exits to the left, then the original grows back from the right.
          The delay that applies is the one on the state being entered. */}
      <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-px overflow-hidden">
        <span
          className={cn(
            "absolute inset-0 origin-left scale-x-0 transition-transform delay-0 duration-[250ms] ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none",
            "group-hover:scale-x-100 group-hover:delay-200 group-focus-visible:scale-x-100 group-focus-visible:delay-200",
            line,
          )}
        />
        <span
          className={cn(
            "absolute inset-0 origin-right scale-x-100 transition-transform delay-200 duration-[250ms] ease-[cubic-bezier(0.44,0,0.56,1)] motion-reduce:transition-none",
            "group-hover:scale-x-0 group-hover:delay-0 group-focus-visible:scale-x-0 group-focus-visible:delay-0",
            line,
          )}
        />
      </span>
    </span>
  );
}

export function CtaLink(props: CtaLinkProps) {
  const { children, variant = "primary", surface = "dark", className } = props;
  const cls = classes(variant, surface, className);
  const inner = (
    <Inner variant={variant} surface={surface}>
      {children}
    </Inner>
  );

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={cls}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={props.onClick} disabled={props.disabled} className={cls}>
      {inner}
    </button>
  );
}
