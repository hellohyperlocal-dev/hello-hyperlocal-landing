import Image from "next/image";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";

export function ClosingCta() {
  return (
    <section id="join" className="w-full py-[clamp(60px,10vw,120px)]">
      <div className="mx-auto w-full max-w-[1340px] px-5">
        <div className="relative flex min-h-[520px] w-full flex-col justify-end overflow-hidden rounded-[10px] px-6 pb-10 pt-24 split:px-[50px] split:pb-[50px]">
          <Image
            src="/photography/linden-market.jpg"
            alt=""
            fill
            sizes="(min-width: 1340px) 1300px, 100vw"
            className="z-0 object-cover"
          />
          {/* Photo veil: the only permitted gradient, keeps the copy legible. */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.35)_0%,rgba(0,0,0,0.8)_100%)]"
          />

          <div className="relative z-10 flex w-full flex-col items-start gap-8">
            <div className="flex max-w-[860px] flex-col items-start gap-5">
              <h2 className="m-0 font-heading text-[40px] font-semibold leading-[1] tracking-[-2.2px] text-white md:text-[56px] xl:text-[72px]">
                Be part of Hello Linden from the start.
              </h2>
              <p className="m-0 max-w-[620px] text-copy-20 text-white">
                Hello Linden is coming in 2026. Register early to help shape it
                for the neighbourhood you already call home.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#founding-neighbours"
                className="group flex h-[58px] items-center gap-6 rounded-lg bg-[#7ED957] py-2.5 pl-5 pr-2.5 text-[#0e0f0c] transition-colors hover:bg-[#cdffad] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span className="text-copy-18">Join Hello Linden</span>
                <span className="flex h-[38px] w-[38px] items-center justify-center rounded-sm bg-[#0e0f0c] text-[#7ED957]">
                  <ArrowFlipIcon size={14} />
                </span>
              </a>
              <a
                href="#businesses"
                className="group flex h-[58px] items-center gap-2.5 rounded-lg border border-white/30 px-5 text-white transition-colors hover:border-[#7ED957] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7ED957]"
              >
                <span className="text-copy-18">Become a Founding Business</span>
                <span className="text-[#7ED957]">
                  <ArrowFlipIcon size={14} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
