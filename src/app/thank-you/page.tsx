import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You — ScaleYield",
  description: "Your strategy call has been booked. We'll be in touch shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="gradient-hero flex min-h-screen flex-col items-center justify-center px-4">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100">
          <CheckCircle2 className="h-8 w-8 text-emerald-600" />
        </div>

        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          You&apos;re All Set!
        </h1>

        <p className="mt-4 text-lg leading-relaxed text-slate-500">
          Thank you for booking your free strategy call. Our team will review your
          information and reach out within 24 hours to schedule your consultation.
        </p>

        <div className="mt-8 rounded-2xl border border-slate-200/60 bg-white p-6 text-left shadow-sm">
          <h2 className="font-semibold text-slate-900">What happens next?</h2>
          <ul className="mt-4 space-y-3">
            {[
              "We'll review your business and marketing goals",
              "Prepare a custom growth strategy for your call",
              "Reach out via email or phone to confirm your slot",
            ].map((step) => (
              <li key={step} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                {step}
              </li>
            ))}
          </ul>
        </div>

        <Link href="/" className="mt-8 inline-block">
          <Button variant="outline">
            Back to Homepage
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
