import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export default function CtaDownload() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="relative overflow-hidden rounded-2xl border border-border/60 bg-card p-12 md:p-16">
          {/* Decorative gradient blob */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-60" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-gradient-to-tr from-accent/15 to-primary/5 blur-3xl opacity-40" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              [CTA Section Label — e.g. "Get Started"]
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl">
              [Mid-page conversion headline — reinforces value, creates urgency]
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              [Supporting copy — what the user gets by taking action now. Maps to Campaign Goals & Automation Goals from questionnaire.]
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="#lead-form">
                  [Primary CTA Label] <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> [Secondary CTA — e.g. "Download Guide"]
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
