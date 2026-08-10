import { SiteHeader } from "@/components/landing/SiteHeader";
import { Hero } from "@/components/landing/Hero";
import { PartnerStrip } from "@/components/landing/PartnerStrip";
import { FeaturesBento } from "@/components/landing/FeaturesBento";
import { Features } from "@/components/landing/Features";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PlatformPillars } from "@/components/landing/PlatformPillars";
import { ForBusiness } from "@/components/landing/ForBusiness";
import { DownloadCta } from "@/components/landing/DownloadCta";
import { SiteFooter } from "@/components/landing/SiteFooter";

export default function Page() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <Hero />
      <PartnerStrip />
      <FeaturesBento />
      <Features />
      <HowItWorks />
      <ForBusiness />
      <PlatformPillars />
      <DownloadCta />
      <SiteFooter />
    </main>
  );
}
