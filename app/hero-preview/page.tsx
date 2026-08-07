import { Hero } from "@/components/landing/Hero";

// Isolated preview of the hero, for iterating on it without the rest of the
// landing page in the way. Same component the homepage renders — this route
// just gives it a bare shell with a placeholder header.
export default function HeroPreviewPage() {
  return (
    <main className="min-h-dvh bg-[#FCFAF7] dark:bg-[#0F0F0F]">
      <header className="sticky top-0 z-50 flex h-[var(--site-header-h)] items-center bg-[#FCFAF7]/90 backdrop-blur-sm dark:bg-[#0F0F0F]/90">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-[18px] font-extrabold tracking-[-0.02em] text-[#0F0F0F] dark:text-[#FCFAF7]">
            Hello Hyperlocal
          </span>
        </div>
      </header>
      <Hero />
    </main>
  );
}
