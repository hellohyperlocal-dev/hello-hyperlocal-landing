import { Almarai, Bricolage_Grotesque } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/site/Providers";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { cn } from "@/lib/utils";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata = {
  title: "Hello Linden | Love Where You Live",
  description:
    "Hello Linden helps residents discover what's around them, support local businesses and stay connected to community life. Coming in 2026.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("antialiased", bricolage.variable, almarai.variable)}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-button focus:bg-hh-forest focus:px-5 focus:py-2.5 focus:text-sm focus:font-bold focus:text-hh-lime focus:outline-none focus:ring-2 focus:ring-hh-lime"
        >
          Skip to main content
        </a>
        <Providers>
          {children}
          <CookieConsent />
        </Providers>
      </body>
    </html>
  );
}
