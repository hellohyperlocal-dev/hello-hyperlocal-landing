import { siteConfig } from "@/lib/site-config"

type Size = "md" | "lg"

const SIZES: Record<Size, string> = {
  md: "h-[60px]",
  lg: "h-[66px]",
}

function AppleLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="currentColor"
        d="M22.667 6.639C23.76 5.223 24.59 3.22 24.29 1.178c-1.789.124-3.88 1.272-5.098 2.767-1.111 1.356-2.026 3.37-1.67 5.328 1.955.061 3.975-1.114 5.145-2.634Z"
      />
      <path
        fill="currentColor"
        d="M31.36 12.466c-1.718-2.16-4.132-3.414-6.412-3.414-3.009 0-4.282 1.445-6.373 1.445-2.155 0-3.793-1.44-6.396-1.44-2.556 0-5.278 1.566-7.004 4.245-2.426 3.773-2.011 10.865 1.921 16.906 1.407 2.162 3.286 4.593 5.744 4.614 2.187.02 2.803-1.407 5.767-1.422 2.963-.016 3.525 1.441 5.708 1.418 2.46-.02 4.442-2.713 5.849-4.875 1.009-1.55 1.384-2.33 2.166-4.079-5.69-2.172-6.601-10.285-.97-13.399Z"
      />
    </svg>
  )
}

function GooglePlayLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={36}
      height={36}
      fill="none"
      aria-hidden="true"
      className="shrink-0"
    >
      <path
        fill="#2299F8"
        d="M19.728 17.3 3.496 33.576c-.776-.736-1.195-1.745-1.195-2.839V5.21c0-1.115.44-2.124 1.237-2.88l16.19 14.97Z"
      />
      <path
        fill="#FFC107"
        d="M33.757 17.973c0 1.473-.797 2.776-2.118 3.512l-4.613 2.566-5.726-5.3-1.572-1.45 6.06-6.078 5.85 3.239c1.322.736 2.12 2.04 2.12 3.511Z"
      />
      <path
        fill="#5ACF5F"
        d="M19.728 17.3 3.538 2.33c.21-.211.483-.4.755-.569 1.321-.799 2.915-.82 4.278-.063l17.217 9.525-6.06 6.077Z"
      />
      <path
        fill="#F84437"
        d="M27.026 24.05 8.57 34.25a4.166 4.166 0 0 1-2.097.546c-.755 0-1.51-.189-2.18-.609a3.807 3.807 0 0 1-.798-.61L19.728 17.3l1.572 1.451 5.726 5.3Z"
      />
    </svg>
  )
}

function StoreBadge({
  url,
  title,
  storeName,
  logo,
  size,
  theme,
}: {
  url: string
  title: string
  storeName: string
  logo: React.ReactNode
  size: Size
  theme: "dark" | "light"
}) {
  const isExternal = /^https?:\/\//.test(url)

  return (
    <a
      href={url}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : null)}
      aria-label={`${title} ${storeName}`}
      className={`inline-flex min-w-[180px] items-center gap-2.5 rounded-[10px] border-2 border-[#202020] p-2.5 transition-opacity hover:opacity-90 ${
        theme === "dark"
          ? "bg-[#202020] text-white"
          : "bg-transparent text-[#202020]"
      } ${SIZES[size]}`}
    >
      {logo}
      <span className="flex flex-col items-start">
        <span className="text-[12px] whitespace-nowrap">{title}</span>
        <span className="text-[20px] leading-tight font-bold whitespace-nowrap">
          {storeName}
        </span>
      </span>
    </a>
  )
}

/**
 * App Store + Google Play download badges. Plain anchors and inline SVG — no
 * runtime dependency, so they render on the server and are keyboard-reachable
 * by default. `theme="dark"` gives the near-black badges that sit best on the
 * warm-white canvas.
 */
export function StoreButtons({
  size = "md",
  theme = "dark",
  className = "",
}: {
  size?: Size
  theme?: "dark" | "light"
  className?: string
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <StoreBadge
        url={siteConfig.appStoreUrl}
        title="Download on the"
        storeName="App Store"
        logo={<AppleLogo />}
        size={size}
        theme={theme}
      />
      <StoreBadge
        url={siteConfig.playStoreUrl}
        title="GET IT ON"
        storeName="Google Play"
        logo={<GooglePlayLogo />}
        size={size}
        theme={theme}
      />
    </div>
  )
}
