import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          Ready for an Honest Look at Your Ads?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-500">
          Book a free strategy call. We&apos;ll audit your setup and tell you
          exactly what we&apos;d change — whether you work with us or not.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/#contact">
            <Button size="lg">
              Book Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="/#contact">
            <Button variant="outline" size="lg">
              Get Free Audit
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
