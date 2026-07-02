import { processSteps } from "@/data/content";
import { Section, SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function Process() {
  return (
    <Section id="process" className="content-auto">
      <SectionHeading
        badge="Our Process"
        title="From First Call to Live Campaigns"
        subtitle="A clear, step-by-step path — no black boxes, no vague timelines."
      />

      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-primary via-accent to-primary/20 md:left-1/2 md:block" />

        <div className="space-y-12">
          {processSteps.map((step, i) => (
            <FadeIn key={step.step} delay={i * 0.1}>
              <div
                className={`relative flex flex-col gap-4 md:flex-row md:items-center ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div className="hidden md:block md:w-1/2" />

                <div className="absolute left-6 z-10 hidden -translate-x-1/2 md:left-1/2 md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white shadow-lg shadow-primary/30">
                    {step.step}
                  </div>
                </div>

                <div
                  className={`md:w-1/2 ${
                    i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"
                  }`}
                >
                  <div className="ml-14 rounded-2xl border border-slate-200/60 bg-white p-6 shadow-sm md:ml-0">
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-white md:hidden">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-500">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
