"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, X } from "lucide-react";

interface JoinShellProps {
  children: React.ReactNode;
  /** 0 on the chooser, then 1..total. Drives the progress bar only. */
  step: number;
  total: number;
  onBack?: () => void;
}

/**
 * Deliberately bare: no site nav, no footer, nothing to click away to. Someone who
 * opened /join is mid-task, and the landing page is one X away.
 */
export function JoinShell({ children, step, total, onBack }: JoinShellProps) {
  const percent = total > 0 ? Math.round((step / total) * 100) : 0;

  return (
    <div className="flex min-h-dvh flex-col bg-white">
      <header className="sticky top-0 z-10 bg-white">
        <div className="mx-auto flex h-[72px] w-full max-w-[640px] items-center justify-between gap-4 px-5">
          {onBack ? (
            <button
              type="button"
              onClick={onBack}
              className="-ml-2 flex h-11 w-11 items-center justify-center rounded-button text-hh-onyx transition-colors hover:bg-hh-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest"
              aria-label="Back to the previous step"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          ) : (
            <span className="h-11 w-11" aria-hidden />
          )}

          <Link href="/" aria-label="Hello Hyperlocal home">
            <Image
              src="/logo/hello-hyperlocal-logo.png"
              alt="Hello Hyperlocal"
              width={84}
              height={35}
              priority
              className="h-auto w-[84px]"
            />
          </Link>

          <Link
            href="/"
            aria-label="Close and return to the home page"
            className="-mr-2 flex h-11 w-11 items-center justify-center rounded-button text-hh-onyx transition-colors hover:bg-hh-panel focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hh-forest"
          >
            <X className="h-5 w-5" />
          </Link>
        </div>

        {/* Progress is decorative: each step's heading already says where you are. */}
        <div aria-hidden className="h-[3px] w-full bg-hh-panel">
          <div
            className="h-full bg-hh-forest transition-[width] duration-300 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </header>

      <main id="main-content" className="flex flex-1 justify-center px-5 pb-16 pt-10 split:pt-16">
        <div className="w-full max-w-[480px]">{children}</div>
      </main>
    </div>
  );
}
