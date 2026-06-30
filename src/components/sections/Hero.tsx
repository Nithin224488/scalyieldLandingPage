"use client";

import { trustBadges } from "@/data/content";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowRight, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

function DashboardIllustration() {
  const metrics = [
    { label: "ROAS", value: 4.8, suffix: "x", change: "+32%", color: "text-emerald-500" },
    { label: "Leads", value: 1247, suffix: "", change: "+58%", color: "text-primary" },
    { label: "Revenue", value: 24, prefix: "₹", suffix: "L", change: "+45%", color: "text-accent" },
    { label: "Cost Per Lead", value: 142, prefix: "₹", suffix: "", change: "-28%", color: "text-emerald-500" },
    { label: "Conversion Rate", value: 6.4, suffix: "%", change: "+18%", color: "text-primary" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="relative"
    >
      <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl" />
      <div className="glass relative overflow-hidden rounded-2xl border border-slate-200/60 p-6 shadow-2xl shadow-primary/10">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
              Performance Dashboard
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">Campaign Overview</p>
          </div>
          <div className="flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
            <span className="text-xs font-semibold text-emerald-600">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm"
            >
              <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                {metric.label}
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900">
                <AnimatedCounter
                  value={metric.value}
                  prefix={metric.prefix}
                  suffix={metric.suffix}
                  decimals={metric.suffix === "x" || metric.suffix === "%" ? 1 : 0}
                />
              </p>
              <p className={`mt-0.5 text-xs font-semibold ${metric.color}`}>
                {metric.change}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex h-24 items-end gap-1">
          {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
              className="flex-1 rounded-t-sm bg-gradient-to-t from-primary/60 to-primary"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section className="gradient-hero relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8 lg:pb-28 lg:pt-40">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <FadeIn>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="text-xs font-semibold text-primary">
                  Performance Marketing Agency
                </span>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Scale Your Business with{" "}
                <span className="text-gradient">Data-Driven</span> Performance Marketing
              </h1>
            </FadeIn>

            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-500">
                Generate more qualified leads, increase ROAS, and grow profitably with Meta
                Ads, Google Ads, and Conversion Optimization.
              </p>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get Free Strategy Call
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Free Ads Audit
                  </Button>
                </a>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
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
            </FadeIn>
          </div>

          <DashboardIllustration />
        </div>
      </div>
    </section>
  );
}
