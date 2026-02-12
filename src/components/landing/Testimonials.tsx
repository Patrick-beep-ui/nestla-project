import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

// Questionnaire: Social Proof & Credibility Indicators
const testimonials = [
  {
    quote: "[Client testimonial #1 — outcome-focused, reflecting a key pain point resolved]",
    name: "[Client Name]",
    title: "[Client Title]",
    company: "[Client Company]",
  },
  {
    quote: "[Client testimonial #2 — speaks to trust, speed, or quality of engagement]",
    name: "[Client Name]",
    title: "[Client Title]",
    company: "[Client Company]",
  },
  {
    quote: "[Client testimonial #3 — quantifiable result or emotional transformation]",
    name: "[Client Name]",
    title: "[Client Title]",
    company: "[Client Company]",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Questionnaire: Social Proof / Credibility */}
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">[Social Proof Label]</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          [Testimonials heading — what clients experience]
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
