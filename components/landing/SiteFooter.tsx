const LINKS = [
  { href: "#top", label: "Privacy policy" },
  { href: "#top", label: "Terms" },
  { href: "#expansion", label: "Contact" },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-brand-line-soft">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-5 px-[clamp(20px,4vw,32px)] py-8">
        <div className="flex flex-wrap gap-6">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[12px] font-bold text-brand-hunter transition-colors hover:text-brand-spruce"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="text-[12px] text-brand-muted">
          © 2026 Hello Hyperlocal · Generated with love by Wavepoint Studio
        </div>
      </div>
    </footer>
  )
}
