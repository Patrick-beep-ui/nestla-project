/**
 * StatsBar — Large-number emphasis block with supporting labels.
 * Use cases: credibility metrics, company milestones, impact numbers, trust signals.
 * Inspired by Scale AI stats section (image-13).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const stats = [
  { value: "[000]", label: "[Metric label #1]" },
  { value: "[000]", label: "[Metric label #2]" },
  { value: "[000]", label: "[Metric label #3]" },
  { value: "[000]", label: "[Metric label #4]" },
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
            [Section label]
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Headline for this metrics block]
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

        {/* Optional emphasis row — like Scale AI's bottom card */}
        <div className="mx-auto mt-14 max-w-3xl rounded-xl border border-border bg-card/60 p-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="flex items-center gap-5">
              <span className="font-heading text-4xl font-extrabold text-gradient">[00X]</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                [Expanded metric description — what this number means in context.]
              </p>
            </div>
            <div className="flex items-center gap-5">
              <span className="font-heading text-4xl font-extrabold text-gradient">[00Y]</span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                [Expanded metric description — what this number means in context.]
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
