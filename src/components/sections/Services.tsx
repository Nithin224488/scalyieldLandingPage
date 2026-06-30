"use client";

import { services } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import {
  BarChart3,
  Globe,
  Layers,
  Layout,
  Megaphone,
  Search,
  ShoppingCart,
  Target,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import type { ElementType } from "react";

const iconMap: Record<string, ElementType> = {
  Meta: Megaphone,
  Google: Search,
  CRO: BarChart3,
  Landing: Layout,
  Funnel: Layers,
  Ecommerce: ShoppingCart,
  Leads: Target,
  Automation: Zap,
};

export function Services() {
  return (
    <Section id="services">
      <SectionHeading
        badge="Our Services"
        title="Everything You Need to Scale"
        subtitle="Full-funnel performance marketing services designed to generate qualified leads and maximize your return on ad spend."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Globe;
          return (
            <StaggerItem key={service.title}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                className="group h-full rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-shadow hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
