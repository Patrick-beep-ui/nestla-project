/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Audience segments / service paths — two distinct experiences side by side
 * Best Funnel Position: Mid (after feature details)
 * Why This Section Works: Two large cards with visual areas create strong visual distinction
 *   between paths. Labels + descriptions help sellers self-identify which path fits them.
 * Alternative Usage: Could present product tiers, case study categories, or engagement models.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "Traditional Listing",
    title: "Sell on the Open Market with Full Support",
    desc: "Get three independent price opinions, ROI-focused prep, and a dedicated concierge team managing your listing from start to close.",
  },
  {
    label: "Cash Offer Path",
    title: "Get a Competitive Offer Without the Wait",
    desc: "If speed or simplicity matters more, Nestla routes you to vetted cash buyers — with full transparency on your options.",
  },
];

export default function CardShowcase() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Two Paths, One Mission
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            Choose the Selling Experience That Fits You
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Not every seller needs the same solution. Nestla helps you find the right path based on your goals, timeline, and priorities.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/30"
            >
              <div className="relative h-52 bg-gradient-to-br from-secondary to-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">[Visual placeholder]</span>
                </div>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {card.label}
                </p>
                <h3 className="font-heading text-xl font-bold md:text-2xl">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group/btn px-0 text-primary hover:text-primary">
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
