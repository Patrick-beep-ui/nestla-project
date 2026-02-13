/**
 * MetricCards — Card grid with large icons and bold metric numbers.
 * Use cases: impact numbers, credibility stats, company milestones, trust signals, KPIs.
 * Inspired by DevSavant trusted-by metrics cards (image-21).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DollarSign, ShieldCheck, Users } from "lucide-react";

const metrics = [
  { icon: DollarSign, value: "[000]", label: "[Metric label #1]" },
  { icon: ShieldCheck, value: "[000]", label: "[Metric label #2]" },
  { icon: Users, value: "[000]", label: "[Metric label #3]" },
];

export default function MetricCards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Section headline goes here]
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 transition-all duration-300 hover:border-primary/30"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Decorative wave gradient */}
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

              {/* Icon */}
              <div className="relative z-10 mb-12 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <m.icon className="h-6 w-6 text-primary" />
              </div>

              <span className="relative z-10 block font-heading text-4xl font-extrabold tracking-tight md:text-5xl">
                {m.value}
              </span>
              <span className="relative z-10 mt-2 block text-sm text-muted-foreground">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
