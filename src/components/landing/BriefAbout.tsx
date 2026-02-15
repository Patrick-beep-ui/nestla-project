/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Company overview / mission positioning — who we are + core competencies
 * Best Funnel Position: Top-to-Mid (after trust bar, before services)
 * Why This Section Works: Centered heading builds authority; 2×2 pillar grid breaks down the
 *   company's approach into scannable competency blocks. Balances mission with proof.
 * Alternative Usage: Could be reframed for partner onboarding, investor pitch, or "Why Nestla" positioning.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, Lightbulb, Award } from "lucide-react";
import sectionInterior from "@/assets/section-interior-1.jpg";

const pillars = [
  {
    icon: Target,
    title: "Concierge-Led Guidance",
    desc: "A dedicated team manages every step — from pricing strategy to closing — so you never feel lost or pressured.",
  },
  {
    icon: Users,
    title: "Built for Homeowners",
    desc: "We serve sellers planning to list in the next 0–12 months who want clarity, transparency, and a stronger outcome.",
  },
  {
    icon: Lightbulb,
    title: "Smart Systems, Human Care",
    desc: "Nestla combines intelligent routing and preparation tools with empathetic, hands-on support at every stage.",
  },
  {
    icon: Award,
    title: "Three Independent Opinions",
    desc: "Every seller receives pricing from three licensed realtors — eliminating guesswork and building confidence in your asking price.",
  },
];

export default function BriefAbout() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Who We Are
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            Selling Should Feel Clear, Calm, and Trustworthy
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            Nestla is a seller concierge platform that guides homeowners through every decision — from pricing to preparation to closing. Our mission is to become the most trusted name in real estate by combining human care with smart systems.
          </p>
        </div>

        {/* Optional supporting image */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border/40">
          <img
            src={sectionInterior}
            alt="Bright modern home interior"
            className="w-full h-56 md:h-72 object-cover"
            loading="lazy"
          />
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className="flex gap-5 rounded-xl p-6 transition-all duration-300 hover:bg-card/60"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading text-lg font-bold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
