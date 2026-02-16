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
  { value: "3", label: "Licensed Valuations" },
  { value: "100%", label: "Seller-First Focus" },
  { value: "$0", label: "Upfront Consultation Cost" },
  { value: "12mo", label: "Flexible Selling Timeline" },
];

export default function StatsBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20 md:py-28 overflow-hidden" ref={ref}>
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/nestla-suburban-ranch-exterior-presale-prep.webp"
          alt=""
          aria-hidden="true"
          className="absolute h-full w-full object-cover blur-md scale-105"
        />
      </div>

      {/* Dark overlay for readability 
      <div className="absolute inset-0 bg-black/60" />

    */}
      <div
        className={`relative z-10 container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Content Background Wrapper */}
        <div className="relative rounded-2xl border border-white/10 bg-background/80 backdrop-blur-xl p-10 md:p-14 shadow-2xl overflow-hidden">

          {/* Radial Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/30 via-primary/10 to-transparent blur-3xl opacity-60" />

          {/* Header */}
          <div className="relative mx-auto max-w-3xl text-center mb-16">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              By the Numbers
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">

              Built Around What Sellers Actually Need
            </h2>
          </div>

          {/* Stats Grid */}
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-2 text-center"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="font-heading text-5xl font-extrabold tracking-tight text-gradient md:text-6xl">
                  {s.value}
                </span>
                <span className="text-sm text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>

          {/* ROI / 24h Card (unchanged layout) */}
          <div className="relative mx-auto mt-14 max-w-3xl rounded-xl border border-white/10 bg-black/40 p-8 backdrop-blur-md">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex items-center gap-5">
                <span className="font-heading text-4xl font-extrabold text-gradient">
                  ROI
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every home gets prep recommendations designed to increase
                  your net return — not just your list price.
                </p>
              </div>
              <div className="flex items-center gap-5">
                <span className="font-heading text-4xl font-extrabold text-gradient">
                  24h
                </span>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Your concierge team responds within 24 hours at every stage —
                  from application to closing.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
