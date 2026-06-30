"use client";

import { kpiResults } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Results() {
  return (
    <Section id="results" className="gradient-cta">
      <SectionHeading
        badge="Proven Results"
        title="Numbers That Speak for Themselves"
        subtitle="Average performance metrics across our client portfolio."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {kpiResults.map((kpi) => (
          <StaggerItem key={kpi.label}>
            <div className="group rounded-2xl border border-slate-200/60 bg-white p-8 text-center shadow-sm transition-all hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
              <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
                {kpi.label}
              </p>
              <p className="mt-3 text-4xl font-bold tracking-tight text-slate-900">
                <AnimatedCounter
                  value={kpi.value}
                  prefix={kpi.prefix}
                  suffix={kpi.suffix}
                  decimals={kpi.decimals}
                />
              </p>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gradient-to-r from-primary to-accent opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </Section>
  );
}
