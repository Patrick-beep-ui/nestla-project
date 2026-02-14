/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Impact metrics / trust signals — bold numbers that prove credibility
 * Best Funnel Position: Pre-Form (reinforces trust just before conversion)
 * Why This Section Works: Large typography + gradient accents create visual impact. Three cards
 *   provide just enough data to build confidence without overwhelming.
 * Alternative Usage: Could show company milestones, market reach, or client satisfaction scores.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { DollarSign, ShieldCheck, Users } from "lucide-react";

const metrics = [
  { icon: DollarSign, value: "15%+", label: "Average Seller Net Gain vs. Quick-Sale Alternatives" },
  { icon: ShieldCheck, value: "100%", label: "Transparent, No-Pressure Consultations" },
  { icon: Users, value: "500+", label: "Homeowners Guided Through the Nestla Method" },
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
            Results That Speak for Themselves
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {metrics.map((m, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 transition-all duration-300 hover:border-primary/30"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-primary/30 via-transparent to-transparent" />

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
