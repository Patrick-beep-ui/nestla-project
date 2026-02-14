/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Core values / differentiators — vertical list with sticky heading
 * Best Funnel Position: Mid (flexible — works well before or after testimonials)
 * Why This Section Works: Sticky left heading keeps the section label visible as the user
 *   scrolls through values. Left accent borders create rhythm. Each item reframes a differentiator
 *   as a value commitment.
 * Alternative Usage: Could present process steps, service breakdown, timeline, or brand pillars.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Trust-First Transparency",
    desc: "Every recommendation, price opinion, and next step is shared openly. No hidden fees, no conflicts of interest — just honest guidance.",
  },
  {
    title: "Care and Empathy",
    desc: "Selling a home is personal. Your concierge team listens first, advises second, and always respects your pace and priorities.",
  },
  {
    title: "Clarity Over Complexity",
    desc: "From your first consultation to closing day, every step is explained simply. You'll always know what's happening and why.",
  },
  {
    title: "Seller-First Outcomes",
    desc: "Our success is measured by yours. Every decision — from prep to pricing to routing — is designed to maximize your result.",
  },
];

export default function ValueStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          <div className="sticky top-32 flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Our Values
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              What We Stand For
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              These aren't slogans — they're the principles that shape every seller interaction, every recommendation, and every outcome.
            </p>
            <div>
              <Button size="lg" className="group">
                Start Your Seller Review
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col">
            {items.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-border py-8 pl-8 transition-colors hover:border-primary"
              >
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
