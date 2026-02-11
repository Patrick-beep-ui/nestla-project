import { TrendingUp, Shield, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Revenue Acceleration",
    desc: "Data-driven strategies that identify growth levers and turn them into measurable revenue gains.",
  },
  {
    icon: Shield,
    title: "Risk Mitigation",
    desc: "Proactive frameworks that protect your business from operational, financial, and regulatory risk.",
  },
  {
    icon: Zap,
    title: "Operational Efficiency",
    desc: "Streamlined processes and automation that reduce costs and free your team to focus on what matters.",
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="benefits" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Why Nestla</p>
        <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
          Built for outcomes,<br className="hidden md:block" /> not just outputs
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
