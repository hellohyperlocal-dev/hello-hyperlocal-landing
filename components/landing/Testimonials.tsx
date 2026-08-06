const TESTIMONIALS = [
  {
    quote:
      "Found a plumber on a Sunday. He was four houses down the whole time.",
    initials: "S",
    author: "Sam, 5th Street",
    avatar: "bg-brand-spruce",
  },
  {
    quote: "Our stall sold out by 11am. Every booking came through the app.",
    initials: "N",
    author: "Nadia, Linden Market",
    avatar: "bg-brand-hunter",
  },
  {
    quote: "I know eleven neighbours by name now. Last year I knew two.",
    initials: "T",
    author: "Thandi, 4th Avenue",
    avatar: "bg-brand-onyx",
  },
]

export function Testimonials() {
  return (
    <section className="border-y border-brand-line-soft bg-brand-panel">
      <div className="mx-auto grid max-w-[1200px] grid-cols-[repeat(auto-fit,minmax(min(250px,100%),1fr))] gap-3.5 px-[clamp(20px,4vw,32px)] py-[clamp(48px,6vw,72px)]">
        {TESTIMONIALS.map((item) => (
          <figure
            key={item.author}
            className="m-0 border-t-2 border-brand-grass px-1 pt-6"
          >
            <blockquote className="m-0 mb-[18px] text-[16px] leading-[1.6] text-pretty text-brand-onyx">
              {item.quote}
            </blockquote>
            <figcaption className="flex items-center gap-2.5">
              <span
                className={`flex h-8 w-8 items-center justify-center rounded-full text-[12px] font-bold text-white ${item.avatar}`}
                aria-hidden="true"
              >
                {item.initials}
              </span>
              <span className="text-[12px] font-bold text-brand-hunter">
                {item.author}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
