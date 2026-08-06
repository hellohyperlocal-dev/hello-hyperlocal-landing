import Image from "next/image"

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#business", label: "For business" },
  { href: "#expansion", label: "Your suburb" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line-soft bg-brand-warm-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-6 px-[clamp(20px,4vw,32px)] py-3.5">
        <a href="#top" className="flex shrink-0 items-center">
          <Image
            src="/logo/hhl-logo.png"
            alt="Hello Hyperlocal"
            width={124}
            height={137}
            priority
            className="h-[34px] w-auto object-contain"
          />
        </a>
        <nav className="flex flex-wrap items-center justify-end gap-[clamp(14px,2.2vw,28px)]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold text-brand-hunter transition-colors hover:text-brand-spruce"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#get"
            className="inline-flex items-center rounded-full bg-brand-grass px-5 py-[11px] text-[13px] font-bold text-brand-spruce transition-colors hover:bg-brand-spruce hover:text-brand-grass"
          >
            Get the app
          </a>
        </nav>
      </div>
    </header>
  )
}
