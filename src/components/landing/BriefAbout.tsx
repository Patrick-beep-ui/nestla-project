import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Target, Users, Lightbulb, Award } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "[Core Competency #1]",
    desc: "[What you do — primary capability or methodology]",
  },
  {
    icon: Users,
    title: "[Core Competency #2]",
    desc: "[Who you serve — target audience and their context]",
  },
  {
    icon: Lightbulb,
    title: "[Core Competency #3]",
    desc: "[Why you exist — mission-driven purpose or founding insight]",
  },
  {
    icon: Award,
    title: "[Core Competency #4]",
    desc: "[Why trust you — credibility signal, track record, or differentiator]",
  },
];

export default function BriefAbout() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        {/* Centered heading block inspired by Scale AI "How Scale Delivers Value" */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            [About Section Label — e.g. "Who We Are"]
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Company mission headline — why this company exists]
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            [2–3 sentence company overview — what you do, who it's for, and the outcome you deliver. Mission-driven, credibility-focused. Maps to Business Vision & Mission from questionnaire.]
          </p>
        </div>

        {/* 2x2 pillar grid inspired by Scale AI's value delivery layout */}
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
