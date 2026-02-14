/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Process / methodology — step-by-step journey through the Nestla Method
 * Best Funnel Position: Mid-to-Pre-Form (builds confidence before conversion)
 * Why This Section Works: Numbered cards create a clear sequential narrative. Large background
 *   numbers provide visual anchoring. This reduces uncertainty by showing exactly what happens.
 * Alternative Usage: Could present engagement phases, onboarding steps, or service tiers.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    number: "01",
    title: "Apply for a Free Review",
    desc: "Tell us about your property and timeline. Our team reviews your application and schedules a personalized consultation.",
  },
  {
    number: "02",
    title: "Get Three Price Opinions",
    desc: "Three independent licensed realtors evaluate your home — giving you a clear, unbiased view of your market position.",
  },
  {
    number: "03",
    title: "Prep, List, and Close",
    desc: "With Nestla Touch prep, full listing coordination, and concierge support, you sell with confidence from start to finish.",
  },
];

export default function NumberedCards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="font-heading text-4xl font-extrabold tracking-tight md:text-6xl">
            How the Nestla Method Works
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Three clear steps from application to closing — guided by your dedicated concierge team.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="absolute top-4 left-6 font-heading text-7xl font-extrabold text-muted-foreground/10 select-none">
                {card.number}
              </span>

              <div className="relative z-10 mb-16 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <div className="h-4 w-4 rounded-sm bg-primary/60" />
              </div>

              <h3 className="relative z-10 font-heading text-lg font-bold text-primary">
                {card.title}
              </h3>
              <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
