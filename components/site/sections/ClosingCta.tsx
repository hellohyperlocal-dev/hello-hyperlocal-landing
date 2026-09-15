import Image from "next/image";
import { CtaLink } from "@/components/site/ui/CtaLink";

export function ClosingCta() {
  return (
    <section id="join" className="relative bg-white pb-[100px]">
      <span id="get-app" aria-hidden="true" className="absolute top-0 block h-0" />
      <div className="site-container">
        <div className="relative flex min-h-[520px] w-full flex-col justify-end overflow-clip rounded-card px-5 pb-10 pt-24 split:min-h-[560px] split:px-[50px] split:pb-[50px]">
          <Image
            src="/photography/linden-market.jpg"
            alt=""
            fill
            sizes="(min-width: 1340px) 1300px, 100vw"
            className="z-0 object-cover"
          />
          {/* Photo veil: permitted gradient exception, keeps white copy legible. */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(rgb(14_15_12/0.3)_0%,rgb(14_15_12/0.82)_100%)]"
          />

          <div className="relative z-10 flex w-full flex-col items-start gap-[30px]">
            <div className="flex max-w-[900px] flex-col items-start gap-5">
              <h2 className="m-0 font-heading text-[40px] font-semibold leading-none tracking-[-2.2px] text-white md:text-[56px] xl:text-[72px]">
                Be part of Hello Linden from the start.
              </h2>
              <p className="m-0 max-w-[620px] type-body-lg text-white">
                Hello Linden is coming in 2026. Register early to help shape it for the neighbourhood
                you already call home.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <CtaLink href="#founding-neighbours" surface="dark">
                Join Hello Linden
              </CtaLink>
              <CtaLink href="#businesses" variant="text" surface="dark">
                Become a Founding Business
              </CtaLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
