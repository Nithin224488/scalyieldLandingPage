import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TrackingScripts } from "@/components/tracking/TrackingScripts";
import { HashScroll } from "@/components/HashScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ScalYield — Data-Driven Performance Marketing Agency",
  description:
    "Book a free Meta Ads audit. We review your campaigns, tracking, and landing pages — then give you a clear plan to generate more qualified leads.",
  keywords: [
    "performance marketing",
    "Meta Ads",
    "Google Ads",
    "conversion optimization",
    "lead generation",
    "ROAS",
    "digital marketing agency",
  ],
  openGraph: {
    title: "ScalYield — Data-Driven Performance Marketing Agency",
    description:
      "Book a free Meta Ads audit. Campaign review, tracking check, and a clear growth roadmap — no obligation.",
    type: "website",
    locale: "en_IN",
    siteName: "ScalYield",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScalYield — Performance Marketing Agency",
    description:
      "Free Meta Ads audit and performance marketing for growing businesses.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <TrackingScripts />
      </head>
      <body className="font-sans">
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
