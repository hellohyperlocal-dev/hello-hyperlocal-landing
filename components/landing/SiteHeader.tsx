const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#business", label: "For business" },
  { href: "#expansion", label: "Your suburb" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line-soft bg-brand-warm-white/95 backdrop-blur-sm">
      {/* Fixed height, not padding-derived: the hero subtracts
          --site-header-h to size its pinned stage, so this must be an exact
          known value rather than whatever the nav content happens to measure. */}
      <div className="mx-auto flex h-[var(--site-header-h)] max-w-[1200px] items-center justify-between gap-6 px-[clamp(20px,4vw,32px)]">
        {/* Wordmark stands in for the logo while alternative marks are being
            designed. The PNG lives at /logo/hhl-logo.png if it comes back. */}
        <a
          href="#top"
          className="flex shrink-0 items-center text-[18px] font-extrabold tracking-[-0.02em] text-brand-onyx transition-colors hover:text-brand-spruce"
        >
          Hello Hyperlocal
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
