/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Service categories — structured offering breakdown with visual separation
 * Best Funnel Position: Mid (after benefits)
 * Why This Section Works: Two large cards with gradient accents create visual weight and category
 *   distinction. Labels + descriptions frame each service as a distinct experience path.
 * Alternative Usage: Could present audience segments, engagement models, or product tiers.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    label: "The Nestla Method",
    title: "Flat-Fee Seller Review",
    desc: "Apply for a free consultation that includes three independent price opinions, a personalized prep plan, and full listing coordination — all for a transparent flat fee.",
    gradient: "from-primary/20 to-accent/10",
  },
  {
    label: "Best-Fit Routing",
    title: "Your Path, Your Terms",
    desc: "Whether a traditional realtor experience or a competitive cash offer fits better, Nestla routes you to the right path — no pressure, just guidance based on your goals.",
    gradient: "from-accent/20 to-primary/10",
  },
];

export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What We Offer</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          A Smarter Way to Sell Your Home
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-10 transition-all duration-300 hover:border-primary/40"
            >
              <div
                className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${s.gradient} blur-3xl opacity-60`}
              />
              <span className="relative mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {s.label}
              </span>
              <h3 className="relative font-heading text-2xl font-bold md:text-3xl">{s.title}</h3>
              <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
