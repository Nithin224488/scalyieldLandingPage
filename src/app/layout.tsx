import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TrackingScripts } from "@/components/tracking/TrackingScripts";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ScaleYield — Data-Driven Performance Marketing Agency",
  description:
    "Generate more qualified leads, increase ROAS, and grow profitably with Meta Ads, Google Ads, and Conversion Optimization. Book your free strategy call today.",
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
    title: "ScaleYield — Data-Driven Performance Marketing Agency",
    description:
      "Generate more qualified leads, increase ROAS, and grow profitably with Meta Ads, Google Ads, and Conversion Optimization.",
    type: "website",
    locale: "en_IN",
    siteName: "ScaleYield",
  },
  twitter: {
    card: "summary_large_image",
    title: "ScaleYield — Performance Marketing Agency",
    description:
      "Generate more qualified leads, increase ROAS, and grow profitably.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <TrackingScripts />
        {children}
      </body>
    </html>
  );
}
