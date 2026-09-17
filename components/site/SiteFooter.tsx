import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { ArrowIcon } from "@/components/site/ui/ArrowIcon";

// Root-relative hashes so these links also work from /privacy, /terms and the other legal pages.
const COLUMNS = [
  {
    title: "Explore Hello",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "The Vision", href: "/#vision" },
      { label: "How the App Works", href: "/#how-it-works" },
      { label: "For Local Businesses", href: "/#businesses" },
      { label: "Join Hello Linden", href: "/join" },
    ],
  },
  {
    title: "Support & Legal",
    links: [
      { label: "Help & Verification", href: "/help" },
      { label: "Merchant Support", href: "/merchant-support" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

// Placeholder hrefs until the real Instagram and Facebook profile URLs are supplied.
const SOCIAL_LINKS = [
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "Facebook", href: "#", icon: FaFacebook },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Preferences", href: "/privacy#cookies" },
];

const focusRing =
  "rounded-chip focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-lime focus-visible:ring-offset-2 focus-visible:ring-offset-hh-forest";

export function SiteFooter() {
  return (
    <footer className="bg-hh-forest pb-[10px] pt-[60px] text-white">
      <div className="site-container flex flex-col gap-10 pb-10">
        <div className="flex flex-col justify-between gap-10 split:flex-row">
          <div className="flex max-w-[360px] flex-col items-start gap-5">
            <Link
              href="/#top"
              aria-label="Hello Hyperlocal, home"
              className={`flex h-[64px] items-center rounded-card ${focusRing}`}
            >
              <Image
                src="/logo/hhl-logo-lime.svg"
                alt="Hello Hyperlocal"
                width={130}
                height={64}
                className="h-16 w-auto"
              />
            </Link>
            <p className="m-0 font-heading text-[22px] font-medium leading-[26.4px] tracking-[-1px] text-white">
              Love where you live.
            </p>
            <p className="m-0 type-body text-hh-mint">
              Connecting neighbours, supporting local businesses, and celebrating community across
              South Africa.
            </p>
            <ul className="flex items-center gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className={`flex h-11 w-11 items-center justify-center rounded-button border border-hh-rule-light text-hh-mint transition-colors hover:bg-hh-lime hover:text-hh-onyx ${focusRing}`}
                  >
                    <Icon className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-x-[60px] gap-y-8">
            {COLUMNS.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h2 className="m-0 font-sans text-[14px] font-bold uppercase leading-4 tracking-[0.14em] text-hh-lime">
                  {column.title}
                </h2>
                <ul className="flex flex-col gap-2">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`text-[18px] leading-[30px] tracking-[-0.8px] text-white transition-colors hover:text-hh-lime ${focusRing}`}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <Link
            href="/join"
            className={`flex h-[60px] w-fit shrink-0 items-center gap-[15px] rounded-button bg-hh-lime px-5 text-[20px] leading-[30px] text-hh-onyx transition-colors hover:bg-hh-lime-hover ${focusRing}`}
          >
            Join Hello Linden
            <ArrowIcon size={14} />
          </Link>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-hh-rule-light pt-6 split:flex-row split:items-center">
          <p className="m-0 text-[16px] leading-6 text-hh-mint">
            © 2026 Hello Hyperlocal (Pty) Ltd. All rights reserved.
          </p>
          <ul className="flex flex-wrap items-center gap-6">
            {LEGAL_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={`text-[16px] leading-6 text-hh-mint transition-colors hover:text-white ${focusRing}`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
