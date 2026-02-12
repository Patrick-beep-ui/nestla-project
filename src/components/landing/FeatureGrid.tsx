/**
 * FeatureGrid — 3-column card grid with icons and descriptions.
 * Use cases: services overview, value pillars, feature list, process steps.
 * Inspired by Scale AI resource cards (image-12, image-16).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Layers, Zap, Shield, Globe, BarChart3, Sparkles } from "lucide-react";

const items = [
  { icon: Layers, title: "[Item title #1]", desc: "[Short description of this item — one or two sentences that can explain a feature, service, or value.]" },
  { icon: Zap, title: "[Item title #2]", desc: "[Short description of this item — one or two sentences that can explain a feature, service, or value.]" },
  { icon: Shield, title: "[Item title #3]", desc: "[Short description of this item — one or two sentences that can explain a feature, service, or value.]" },
  { icon: Globe, title: "[Item title #4]", desc: "[Short description of this item — one or two sentences that can explain a feature, service, or value.]" },
  { icon: BarChart3, title: "[Item title #5]", desc: "[Short description of this item — one or two sentences that can explain a feature, service, or value.]" },
  { icon: Sparkles, title: "[Item title #6]", desc: "[Short description of this item — one or two sentences that can explain a feature, service, or value.]" },
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
            [Section label]
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Section headline goes here]
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            [Supporting text that clarifies the value proposition of this block.]
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
