/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Credibility metrics — quantifiable proof points that build trust
 * Best Funnel Position: Mid (after positioning, before detailed features)
 * Why This Section Works: Large numbers grab attention and provide instant credibility.
 *   The emphasis card row reinforces two key differentiators with context.
 * Alternative Usage: Could show company milestones, market data, or campaign results.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "3", label: "Independent Price Opinions" },
  { value: "100%", label: "Seller-First Focus" },
  { value: "$0", label: "Upfront Consultation Cost" },
  { value: "12mo", label: "Flexible Selling Timeline" },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-20 md:py-28" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            By the Numbers
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            Built Around What Sellers Actually Need
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-2 text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl">
                {s.value}
              </span>
              <span className="text-sm text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-border bg-card/60 p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex items-center gap-5">
              <span className="font-heading text-4xl font-extrabold text-gradient">ROI</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Every home gets prep recommendations designed to increase your net return — not just your list price.
              </p>
            </div>
            <div className="flex items-center gap-5">
              <span className="font-heading text-4xl font-extrabold text-gradient">24h</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Your concierge team responds within 24 hours at every stage — from application to closing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
