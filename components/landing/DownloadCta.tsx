import Image from "next/image"

import { StoreButtons } from "@/components/landing/StoreButtons"

export function DownloadCta() {
  return (
    <section
      id="get"
      className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] items-center gap-[clamp(32px,4vw,56px)] px-[clamp(20px,4vw,32px)] pb-[clamp(60px,8vw,96px)]"
    >
      <div>
        <h2 className="m-0 mb-4 text-[clamp(34px,5.4vw,54px)] leading-none font-extrabold tracking-[-0.03em] text-pretty text-brand-onyx">
          Your street is
          <br />
          already talking.
        </h2>
        <p className="m-0 mb-8 max-w-[400px] text-[16px] leading-[1.65] text-brand-muted">
          Free for residents. Four minutes to set up. One neighbour to verify
          you.
        </p>
        <StoreButtons size="lg" />
      </div>

      <div className="flex justify-center">
        <div className="flex flex-col items-center gap-4 rounded-[32px] border border-brand-line-soft bg-brand-panel px-10 py-[34px]">
          <Image
            src="/logo/hhl-logo.png"
            alt="Hello Hyperlocal"
            width={200}
            height={220}
            className="h-auto w-[200px] object-contain"
          />
          <div className="text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
            Linden · Johannesburg
          </div>
        </div>
      </div>
    </section>
  )
}
