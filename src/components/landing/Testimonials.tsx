/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Social proof — client voices that validate the brand promise
 * Best Funnel Position: Pre-Form (builds final trust before conversion)
 * Why This Section Works: Quote cards with avatars and credentials create emotional resonance.
 *   Three testimonials cover different pain points (clarity, trust, results) for broad appeal.
 * Alternative Usage: Could present partner endorsements, case study summaries, or press quotes.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "I was terrified of pricing my home wrong. Nestla gave me three independent opinions and I finally felt confident listing. We sold above asking.",
    name: "Jennifer L.",
    title: "Homeowner",
    company: "Austin, TX",
  },
  {
    quote: "No pressure, no games. My concierge team was responsive and honest about everything — even when the answer wasn't what I wanted to hear. That's real trust.",
    name: "Marcus D.",
    title: "Homeowner",
    company: "Denver, CO",
  },
  {
    quote: "The Nestla Touch prep recommendations added real value. Small changes, big impact. I netted significantly more than I expected.",
    name: "Rachel & Tom K.",
    title: "Homeowners",
    company: "Nashville, TN",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What Sellers Say</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          Real Stories from Real Homeowners
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-xl border border-border/60 bg-card p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div>
                <Quote className="mb-4 h-6 w-6 text-primary/60" />
                <p className="text-sm leading-relaxed text-foreground/90">{t.quote}</p>
              </div>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 font-heading text-sm font-bold text-primary">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {t.title}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
