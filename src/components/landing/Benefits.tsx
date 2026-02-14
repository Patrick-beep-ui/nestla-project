/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Value proposition — outcome-driven benefits mapped to seller pain points
 * Best Funnel Position: Mid (after about, before services)
 * Why This Section Works: 3-column icon cards create scannable value hierarchy. Each card
 *   addresses a specific pain point (overwhelm, trust, speed) and reframes it as a positive outcome.
 * Alternative Usage: Could present differentiators, guarantees, or competitive advantages.
 */

import { TrendingUp, Shield, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize Your Sale Price",
    desc: "ROI-focused preparation and three independent price opinions ensure you list at the strongest possible number.",
  },
  {
    icon: Shield,
    title: "Trust-First Transparency",
    desc: "No pressure, no hidden agendas. Every recommendation is backed by data and delivered with honesty.",
  },
  {
    icon: Zap,
    title: "Fast, Responsive Support",
    desc: "Concierge-level communication means you're never left waiting. Your questions get answered, your timeline gets respected.",
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="benefits" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Why Nestla</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          The Outcomes That Matter Most
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group rounded-xl border border-border/60 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-12px_hsl(202_100%_67%/0.15)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <b.icon className="mb-5 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
