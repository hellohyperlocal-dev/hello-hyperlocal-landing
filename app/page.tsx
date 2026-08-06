import type { Metadata } from "next"

import { SiteHeader } from "@/components/landing/SiteHeader"
import { Hero } from "@/components/landing/Hero"
import { PartnerStrip } from "@/components/landing/PartnerStrip"
import { Features } from "@/components/landing/Features"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { Testimonials } from "@/components/landing/Testimonials"
import { Newsletter } from "@/components/landing/Newsletter"
import { BusinessIntake } from "@/components/landing/BusinessIntake"
import { Expansion } from "@/components/landing/Expansion"
import { DownloadCta } from "@/components/landing/DownloadCta"
import { SiteFooter } from "@/components/landing/SiteFooter"

export const metadata: Metadata = {
  title: "Hello Hyperlocal — Love where you live.",
  description:
    "Discover exclusive neighbourhood deals, stay updated with ward events, and connect with your local community — all in one place.",
}

export default function Page() {
  return (
    <div className="w-full overflow-x-hidden bg-brand-warm-white text-brand-onyx">
      <SiteHeader />
      <main>
        <Hero />
        <PartnerStrip />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Newsletter />
        <BusinessIntake />
        <Expansion />
        <DownloadCta />
      </main>
      <SiteFooter />
    </div>
  )
}
