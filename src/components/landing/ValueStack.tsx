/**
 * ValueStack — Vertical stacked items with left accent border, split text layout.
 * Use cases: process steps, value propositions, service breakdown, timeline, differentiators.
 * Inspired by Scale AI stacked list with dividers (image-15).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "[Value or step title #1]",
    desc: "[Explanation of this value, step, or feature — one to two sentences describing what it means and why it matters.]",
  },
  {
    title: "[Value or step title #2]",
    desc: "[Explanation of this value, step, or feature — one to two sentences describing what it means and why it matters.]",
  },
  {
    title: "[Value or step title #3]",
    desc: "[Explanation of this value, step, or feature — one to two sentences describing what it means and why it matters.]",
  },
  {
    title: "[Value or step title #4]",
    desc: "[Explanation of this value, step, or feature — one to two sentences describing what it means and why it matters.]",
  },
];

export default function ValueStack() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-20">
          {/* Left — heading + CTA */}
          <div className="sticky top-32 flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              [Section label]
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              [Section headline goes here]
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              [Supporting text that clarifies the value of this section.]
            </p>
            <div>
              <Button size="lg" className="group">
                [Action label]
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right — stacked items */}
          <div className="flex flex-col">
            {items.map((item, i) => (
              <div
                key={i}
                className="border-l-2 border-border py-8 pl-8 transition-colors hover:border-primary"
              >
                <h3 className="font-heading text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
