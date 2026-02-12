import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function FinalCta() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Final conversion headline — last chance to convert, outcome-focused]
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            [Closing reinforcement copy — restate the core promise, reduce friction, address remaining objections. Maps to Follow-up Tone & Automation Goals.]
          </p>
          <div className="mt-8">
            <Button size="lg" className="gap-2 text-base" asChild>
              <a href="#lead-form">
                [Final CTA Label — e.g. "Start Your Journey →"] <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
