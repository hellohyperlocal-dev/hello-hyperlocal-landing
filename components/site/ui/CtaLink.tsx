import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowIcon } from "./ArrowIcon";

type Variant = "primary" | "text";
type Surface = "dark" | "light";

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
      : "focus-visible:ring-hh-forest focus-visible:ring-offset-white";

  return cn(
    "group inline-flex h-[58px] shrink-0 items-center rounded-button text-[18px] leading-[30px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 sm:text-[20px]",
    ring,
    variant === "primary"
      ? "justify-between gap-6 bg-hh-lime py-[10px] pl-5 pr-[10px] text-hh-onyx hover:bg-hh-lime-hover sm:gap-[55px]"
      : cn(
          "gap-[15px] px-5",
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
        <span className="flex h-[38px] w-[38px] items-center justify-center rounded-chip bg-hh-onyx text-hh-lime">
          <ArrowIcon size={14} />
        </span>
      </>
    );
  }
  return (
    <>
      <span>{children}</span>
      <ArrowIcon
        size={14}
        className={cn(
          "transition-transform group-hover:translate-x-1",
          surface === "dark" ? "text-hh-lime" : "text-hh-hunter",
        )}
      />
    </>
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
