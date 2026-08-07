import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { PartnerStrip } from "@/components/landing/PartnerStrip";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Expansion } from "@/components/landing/Expansion";
import { ForBusiness } from "@/components/landing/ForBusiness";
import { DownloadCta } from "@/components/landing/DownloadCta";
import { Newsletter } from "@/components/landing/Newsletter";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <PartnerStrip />
      <Features />
      <HowItWorks />
      <Expansion />
      <ForBusiness />
      <DownloadCta />
      <Newsletter />
      <SiteFooter />
    </main>
  );
}
