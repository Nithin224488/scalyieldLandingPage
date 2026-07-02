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
  Radio,
  Zap,
} from "lucide-react";
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
  Tracking: Radio,
};

export function Services() {
  return (
    <Section id="services" className="content-auto">
      <SectionHeading
        badge="Our Services"
        title="What We Help You With"
        subtitle="Focused services for businesses that want more leads and better attribution — without spreading thin."
      />

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = iconMap[service.icon] || Globe;
          return (
            <StaggerItem key={service.title}>
              <div className="group h-full rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  {service.description}
                </p>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerContainer>
    </Section>
  );
}
