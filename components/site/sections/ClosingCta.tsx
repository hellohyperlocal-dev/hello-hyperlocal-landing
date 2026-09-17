import { cn } from "@/lib/utils";
import { CtaLink } from "@/components/site/ui/CtaLink";

interface CtaTarget {
  href: string;
  label: string;
}

interface ClosingCtaProps {
  heading?: string;
  body?: string;
  primary?: CtaTarget;
  secondary?: CtaTarget;
  /** Drop the top padding when the section above already ends in a card that pairs with this one. */
  flushTop?: boolean;
}

// Defaults are the landing page's copy; /about passes its own closing lines.
export function ClosingCta({
  heading = "Be part of Hello Linden from the start.",
  body = "Hello Linden is coming in 2026. Register early to help shape it for the neighbourhood you already call home.",
  primary = { href: "/join", label: "Join Hello Linden" },
  secondary = { href: "/join?type=business", label: "Become a Founding Business" },
  flushTop = false,
}: ClosingCtaProps) {
  return (
    <section id="join" className={cn("relative bg-white pb-[100px]", !flushTop && "pt-[100px] split:pt-[130px]")}>
      <span id="get-app" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container">
        {/* Solid lime card, onyx copy (10.9:1). No photo, so no veil is needed. */}
        <div className="flex w-full flex-col justify-center rounded-card bg-hh-lime px-5 py-[70px] split:px-[50px] split:py-[100px]">
          <div className="flex w-full flex-col items-start gap-[30px]">
            <div className="flex max-w-[900px] flex-col items-start gap-5">
              <h2 className="m-0 font-heading text-[40px] font-semibold leading-none tracking-[-2.2px] text-hh-onyx md:text-[56px] xl:text-[72px]">
                {heading}
              </h2>
              <p className="m-0 max-w-[620px] type-body-lg text-hh-onyx">{body}</p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <CtaLink href={primary.href} surface="lime">
                {primary.label}
              </CtaLink>
              <CtaLink href={secondary.href} variant="text" surface="lime">
                {secondary.label}
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
