import { Bricolage_Grotesque, Geist } from "next/font/google";

import "./globals.css";
import { Providers } from "@/components/site/Providers";
import { CookieConsent } from "@/components/ui/CookieConsent";
import { GoogleAnalytics } from "@/components/site/GoogleAnalytics";
import { cn } from "@/lib/utils";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

// Body copy. Geist is a variable font, so every weight used (400 body, 700 bold labels) ships in one file.
const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
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
      className={cn("antialiased", bricolage.variable, geist.variable)}
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
          <GoogleAnalytics />
        </Providers>
      </body>
    </html>
  );
}
