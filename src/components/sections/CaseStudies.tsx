"use client";

import { caseStudies } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { ArrowUpRight, TrendingUp } from "lucide-react";

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <SectionHeading
        badge="Case Studies"
        title="Real Results for Real Businesses"
        subtitle="See how we've helped businesses like yours achieve breakthrough growth."
      />

      <StaggerContainer className="grid gap-8 lg:grid-cols-3">
        {caseStudies.map((study) => (
          <StaggerItem key={study.industry}>
            <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-sm transition-all hover:shadow-lg">
              <div className={`bg-gradient-to-br ${study.gradient} p-6`}>
                <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {study.industry}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="space-y-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Challenge
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{study.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Solution
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{study.solution}</p>
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Results
                    </p>
                    <p className="mt-1 text-sm text-slate-600">{study.results}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                  <div>
                    <p className="text-xs text-slate-400">ROAS Increase</p>
                    <p className="mt-1 flex items-center gap-1 text-sm font-bold text-emerald-600">
                      <TrendingUp className="h-3.5 w-3.5" />
                      {study.roasIncrease}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">Revenue Generated</p>
                    <p className="mt-1 text-sm font-bold text-slate-900">
                      {study.revenueGenerated}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
