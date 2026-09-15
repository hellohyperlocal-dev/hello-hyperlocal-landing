import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SectionEyebrow } from "@/components/site/ui/SectionEyebrow";
import { CtaLink } from "@/components/site/ui/CtaLink";

// Static server component: the 404 message ships visible in the HTML, not at opacity 0.
export default function NotFound() {
  return (
    <div className="flex min-h-[100dvh] flex-col justify-between bg-white text-hh-onyx">
      <header className="w-full border-b border-hh-rule-dark px-5 py-4">
        <div className="site-container flex items-center justify-between px-0">
          <Link
            href="/"
            aria-label="Hello Hyperlocal, home"
            className="flex h-[52px] items-center rounded-card bg-hh-warm px-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
          >
            <Image
              src="/logo/hello-hyperlocal-logo.png"
              alt="Hello Hyperlocal"
              width={96}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 rounded-chip text-[16px] font-bold text-hh-hunter hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest focus-visible:ring-offset-2"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Back to Home
          </Link>
        </div>
      </header>

      <main id="main-content" className="flex flex-1 flex-col items-center justify-center px-5 py-16 text-center">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
          <SectionEyebrow label="Page Not Found" tone="light" />
          <h1 className="m-0 select-none font-heading text-[110px] font-semibold leading-[0.88] tracking-[-4px] text-hh-forest sm:text-[140px] sm:tracking-[-7px] md:text-[165px] md:tracking-[-9.9px]">
            404
          </h1>
          <h2 className="m-0 type-h2 text-hh-onyx">Looks like you&apos;ve wandered outside your suburb.</h2>
          <p className="m-0 max-w-lg type-body-lg text-hh-muted">
            The street, notice, or community page you are looking for doesn&apos;t exist or has moved.
          </p>
          <CtaLink href="/" surface="light">
            Back to Home
          </CtaLink>
        </div>
      </main>

      <footer className="w-full border-t border-hh-rule-dark px-5 py-4 text-center">
        <p className="m-0 text-[14px] leading-5 text-hh-muted">
          © 2026 Hello Hyperlocal (Pty) Ltd · Love where you live.
        </p>
      </footer>
    </div>
  );
}
