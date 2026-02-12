import { TrendingUp, Shield, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

// Questionnaire: Key Benefits to Highlight → 3 core benefits
const benefits = [
  {
    icon: TrendingUp,
    title: "[Benefit #1 Title]",
    desc: "[Benefit #1 description — maps to a primary audience pain point and decision driver]",
  },
  {
    icon: Shield,
    title: "[Benefit #2 Title]",
    desc: "[Benefit #2 description — addresses trust, risk, or reliability concern]",
  },
  {
    icon: Zap,
    title: "[Benefit #3 Title]",
    desc: "[Benefit #3 description — highlights efficiency, speed, or competitive edge]",
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="benefits" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Questionnaire: Brand Values & Competitive Differentiation */}
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">[Section Label from Brand Values]</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          [Value proposition heading — why choose this brand]
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group rounded-xl border border-border/60 bg-card p-8 transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_40px_-12px_hsl(202_100%_67%/0.15)]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <b.icon className="mb-5 h-8 w-8 text-primary" />
              <h3 className="font-heading text-lg font-bold">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
