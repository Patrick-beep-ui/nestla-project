/**
 * NumberedCards — 3-column numbered card grid with large step numbers and descriptions.
 * Use cases: process steps, phases, methodology, timeline, service tiers, engagement models.
 * Inspired by DevSavant build phase cards (image-22/23).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    number: "01",
    title: "[Card title #1]",
    desc: "[Description of this step, phase, or item — one to two sentences.]",
  },
  {
    number: "02",
    title: "[Card title #2]",
    desc: "[Description of this step, phase, or item — one to two sentences.]",
  },
  {
    number: "03",
    title: "[Card title #3]",
    desc: "[Description of this step, phase, or item — one to two sentences.]",
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
            [Section headline]
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            [Supporting text that clarifies the value of this section.]
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-8 transition-all duration-300 hover:border-primary/30 hover:bg-card/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              {/* Large faded number */}
              <span className="absolute top-4 left-6 font-heading text-7xl font-extrabold text-muted-foreground/10 select-none">
                {card.number}
              </span>

              {/* Icon placeholder */}
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
