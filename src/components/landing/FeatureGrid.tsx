/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Detailed feature/service grid — what's included in the Nestla Method
 * Best Funnel Position: Mid (after stats, before card showcase)
 * Why This Section Works: 6-card grid provides comprehensive coverage of the offer without
 *   overwhelming. Icon + title + description pattern is highly scannable.
 * Alternative Usage: Could present values, differentiators, FAQs-as-features, or process details.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Layers, Zap, Shield, Globe, BarChart3, Sparkles } from "lucide-react";

const items = [
  { icon: Layers, title: "Three Price Opinions", desc: "Three independent licensed realtors evaluate your home — giving you confidence in your asking price." },
  { icon: Sparkles, title: "Nestla Touch Prep", desc: "Strategic improvements and staging recommendations designed to maximize your return on investment." },
  { icon: Shield, title: "No-Pressure Guidance", desc: "Every recommendation is honest and transparent. We guide — you decide. No hard sells, ever." },
  { icon: Globe, title: "Full Listing Coordination", desc: "From photography to showings to offer negotiation, your concierge team handles the details." },
  { icon: BarChart3, title: "Smart Routing", desc: "If a traditional listing isn't the best fit, we'll connect you to a cash offer or alternative path." },
  { icon: Zap, title: "Responsive Communication", desc: "Your dedicated team responds quickly at every stage. You'll always know what's happening next." },
];

export default function FeatureGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            What's Included
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            Everything You Need to Sell with Confidence
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            The Nestla Method covers every stage of your selling journey — from pricing to preparation to closing.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className="group rounded-xl border border-border bg-card/40 p-7 transition-all duration-300 hover:border-primary/30 hover:bg-card/70"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
