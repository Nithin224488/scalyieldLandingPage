"use client";

import { freeAuditDeliverables, platforms } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { CheckCircle2 } from "lucide-react";

export function FreeAudit() {
  return (
    <Section id="free-audit" className="border-y border-slate-100 bg-slate-50/50">
      <SectionHeading
        badge="Free Audit"
        title="See Exactly What We'd Fix — Before You Commit"
        subtitle="No inflated case studies. Just a honest, actionable review of your marketing setup."
      />

      <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {freeAuditDeliverables.map((item) => (
          <StaggerItem key={item.title}>
            <div className="flex h-full gap-4 rounded-2xl border border-slate-200/60 bg-white p-5 shadow-sm">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      <div className="mt-14 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Platforms & tools we work with
        </p>
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          {platforms.map((platform) => (
            <span
              key={platform}
              className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-600"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
