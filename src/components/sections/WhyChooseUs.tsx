"use client";

import { whyChooseUs } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import {
  BarChart3,
  Eye,
  FlaskConical,
  MessageSquare,
  Rocket,
  Target,
} from "lucide-react";

const icons = [BarChart3, Eye, MessageSquare, Rocket, FlaskConical, Target];

export function WhyChooseUs() {
  return (
    <Section id="why-us" className="bg-slate-50/50">
      <SectionHeading
        badge="Why Choose Us"
        title="Built for Performance, Not Promises"
        subtitle="A focused approach to Meta Ads, tracking, and conversion — without the agency fluff."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {whyChooseUs.map((item, i) => {
          const Icon = icons[i];
          return (
            <StaggerItem key={item.title}>
              <div className="group h-full rounded-2xl border border-slate-200/60 bg-white p-6 transition-all hover:border-primary/20 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
