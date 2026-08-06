import Image from "next/image"

const FEATURES = [
  {
    image: "/photography/breakfast.jpg",
    eyebrow: "Love Local",
    title: "Deals only neighbours get",
    body: "Exclusive neighbourhood specials, merchant rewards and standing discounts from the shops you already walk past.",
    dark: false,
  },
  {
    image: "/photography/linden-market-2.jpg",
    eyebrow: "What's on",
    title: "Every RSVP in one place",
    body: "Suburb events, ward community projects and weekend markets — with a head count before you buy the rolls.",
    dark: false,
  },
  {
    image: "/photography/linden-streetview.jpeg",
    eyebrow: "Suburb feed",
    title: "News without the noise",
    body: "Verified local news, lost pets and community updates from people who live here. No strangers, no algorithm, no outrage.",
    dark: true,
  },
]

export function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-[1200px] px-[clamp(20px,4vw,32px)] pt-[clamp(60px,8vw,96px)] pb-[clamp(28px,4vw,44px)]"
    >
      <div className="mb-3.5 text-[11px] font-bold tracking-[0.14em] text-brand-hunter uppercase">
        What you get
      </div>
      <h2 className="m-0 mb-11 max-w-[600px] text-[clamp(30px,4.4vw,44px)] leading-[1.05] font-extrabold tracking-[-0.02em] text-pretty text-brand-onyx">
        Three reasons your street is already on it.
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-3.5">
        {FEATURES.map((feature) => (
          <div
            key={feature.title}
            className={`flex flex-col rounded-[32px] p-7 ${
              feature.dark
                ? "bg-brand-spruce"
                : "border border-brand-line-soft bg-brand-panel"
            }`}
          >
            <div className="relative mb-[22px] h-[170px] overflow-hidden rounded-[24px]">
              <Image
                src={feature.image}
                alt=""
                fill
                sizes="(max-width: 900px) 100vw, 380px"
                className="object-cover"
              />
            </div>
            <div
              className={`mb-2 text-[11px] font-bold tracking-[0.14em] uppercase ${
                feature.dark ? "text-brand-grass" : "text-brand-hunter"
              }`}
            >
              {feature.eyebrow}
            </div>
            <div
              className={`mb-2 text-[20px] font-extrabold ${
                feature.dark ? "text-white" : "text-brand-onyx"
              }`}
            >
              {feature.title}
            </div>
            <div
              className={`text-[14px] leading-[1.65] ${
                feature.dark ? "text-white/78" : "text-brand-muted"
              }`}
            >
              {feature.body}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
