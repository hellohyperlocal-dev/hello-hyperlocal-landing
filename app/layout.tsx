import { Almarai, Bricolage_Grotesque } from "next/font/google";
import { GeistMono } from "geist/font/mono";

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

import { CookieConsent } from "@/components/ui/CookieConsent";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const almarai = Almarai({
  variable: "--font-almarai",
  subsets: ["arabic", "latin"],
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
      suppressHydrationWarning
      className={cn(
        "antialiased",
        bricolage.variable,
        almarai.variable,
        GeistMono.variable
      )}
    >
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-5 focus:py-2.5 focus:bg-[#1C472A] focus:text-[#7ED957] focus:rounded-full focus:shadow-xl focus:font-bold focus:text-sm focus:outline-none focus:ring-2 focus:ring-[#7ED957] transition-all"
        >
          Skip to main content
        </a>
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
