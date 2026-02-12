/**
 * SplitSection — Split layout: text on one side, visual placeholder on the other.
 * Use cases: about / mission, feature highlight, product overview, differentiation.
 * Inspired by Solana hero split (image-17).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function SplitSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Visual placeholder */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-card border border-border">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-sm text-muted-foreground">[Visual / image placeholder]</span>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              [Section label]
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              [Headline that communicates a key message]
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              [Supporting paragraph — 2–3 sentences that expand on the headline. This block can be used to explain a capability, a mission, or a differentiator.]
            </p>
            <div>
              <Button size="lg" className="group">
                [Action label]
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
