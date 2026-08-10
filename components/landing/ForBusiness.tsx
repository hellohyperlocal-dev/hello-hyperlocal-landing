import Image from "next/image";
import { Check, Store } from "lucide-react";
import { ArrowFlipIcon } from "@/components/ui/ArrowFlipIcon";

const BENEFITS = [
  "Direct reach to residents in your specific suburb",
  "Feature weekly specials and resident-only offers",
  "Verified business profile and interactive map placement",
];

export function ForBusiness() {
  return (
    <section
      id="business"
      className="bg-transparent py-[clamp(60px,10vw,120px)] transition-colors duration-200"
    >
      <div className="mx-auto grid max-w-[1240px] grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-14 px-4 sm:px-6 lg:px-8">
        
        {/* Left Column: Pitch & CTA (lg:col-span-7) */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          <div className="mb-4 inline-block rounded-full border border-brand-line-soft dark:border-brand-spruce-line bg-brand-panel dark:bg-[#151F17] px-4 py-1 text-label-12 font-bold tracking-[0.14em] text-brand-hunter dark:text-brand-grass uppercase w-fit">
            For local business owners
          </div>
          
          <h2 className="m-0 mb-4 max-w-2xl text-[32px] sm:text-[40px] md:text-[50px] leading-[1.08] font-semibold tracking-[-3px] text-pretty text-brand-onyx dark:text-[#FCFAF7]">
            Grow your business where it matters most: your neighbourhood.
          </h2>
          
          <p className="m-0 mb-8 max-w-xl text-[18px] sm:text-[20px] leading-[32px] sm:leading-[36px] font-normal text-pretty text-brand-muted dark:text-[#99A893]">
            Stop spending advertising budget on city-wide ads. Hello Hyperlocal
            puts your business, weekly specials and local offers in front of
            residents who already walk past your door.
          </p>

          <ul className="m-0 mb-8 flex list-none flex-col gap-3.5 p-0">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#e2f6d5] text-[#054d28]"
                >
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <span className="text-[16px] leading-[24px] font-medium text-brand-onyx dark:text-[#FCFAF7]">
                  {benefit}
                </span>
              </li>
            ))}
          </ul>

          {/* Merchant Call to Action with Arrow Flip animation */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="mailto:partnerships@hellohyperlocal.co.za?subject=Local%20Merchant%20Partnership%20Inquiry"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#0e0f0c] dark:bg-white px-7 py-3.5 text-[15px] font-semibold text-white dark:text-[#0e0f0c] transition-all hover:bg-[#1C472A] dark:hover:bg-[#e2f6d5] hover:scale-105"
            >
              <Store className="h-4 w-4" />
              <span>Register your business</span>
              <ArrowFlipIcon size={14} className="opacity-90" />
            </a>
          </div>

        </div>

        {/* Right Column: Local Photography (lg:col-span-5) */}
        <div className="lg:col-span-5 relative w-full h-[360px] sm:h-[440px] lg:h-[480px] overflow-hidden rounded-[32px] shadow-sm">
          <Image
            src="/photography/linden-market.jpg"
            alt="Traders and shoppers at the Linden Village Market"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-cover"
          />
        </div>

      </div>
    </section>
  );
}
