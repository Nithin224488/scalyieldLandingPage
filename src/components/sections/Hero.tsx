import { freeAuditDeliverables, trustBadges } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { AnchorLink } from "@/components/ui/AnchorLink";
import { ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";

function AuditPreviewCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
      <div className="glass relative overflow-hidden rounded-2xl border border-slate-200/60 p-6 shadow-2xl shadow-primary/10 sm:p-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ClipboardList className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Free Ads Audit
            </p>
            <p className="text-lg font-bold text-slate-900">
              What you&apos;ll get
            </p>
          </div>
        </div>

        <ul className="space-y-3">
          {freeAuditDeliverables.map((item) => (
            <li
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-slate-100 bg-white px-4 py-3"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-5 text-center text-xs font-medium text-slate-400">
          30-minute call · No obligation · Honest recommendations
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden px-4 pb-20 pt-22 sm:px-6 lg:px-8 lg:pb-28 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              <span className="text-xs font-semibold text-primary">
                Now accepting new clients
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Performance Marketing That{" "}
              <span className="text-gradient">Starts With Clarity</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
              Book a free ads audit. We&apos;ll review your Meta campaigns,
              tracking, ecommerce store and landing pages — then give you a
              clear plan to generate more qualified leads.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <AnchorLink href="/#contact">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Free Strategy Call
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </AnchorLink>
              <AnchorLink href="/#free-audit">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  See What&apos;s Included
                </Button>
              </AnchorLink>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  className="flex items-center gap-1.5 text-sm font-medium text-slate-600"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  {badge}
                </div>
              ))}
            </div>
          </div>

          <AuditPreviewCard />
        </div>
      </div>
    </section>
  );
}
