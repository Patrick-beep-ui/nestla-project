/**
 * CardShowcase — Two large side-by-side cards with category labels and descriptions.
 * Use cases: service categories, product tiers, audience segments, case studies.
 * Inspired by Scale AI Public Sector / Enterprise cards (image-14).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const cards = [
  {
    label: "[Category A]",
    title: "[Card headline for the first category or offering]",
    desc: "[Description that explains what this category covers and who it's for.]",
  },
  {
    label: "[Category B]",
    title: "[Card headline for the second category or offering]",
    desc: "[Description that explains what this category covers and who it's for.]",
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
            [Section label]
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Section headline goes here]
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            [Supporting text that clarifies the value of this section.]
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card/50 transition-all duration-300 hover:border-primary/30"
            >
              {/* Visual placeholder area */}
              <div className="relative h-52 bg-gradient-to-br from-secondary to-card">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xs text-muted-foreground">[Visual placeholder]</span>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col gap-4 p-8">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                  {card.label}
                </p>
                <h3 className="font-heading text-xl font-bold md:text-2xl">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
                <div className="mt-auto pt-4">
                  <Button variant="ghost" className="group/btn px-0 text-primary hover:text-primary">
                    [Learn more]
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
