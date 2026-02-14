/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Final conversion push — last chance to convert before the form
 * Best Funnel Position: Pre-Form (directly before LeadForm)
 * Why This Section Works: Centered, distraction-free layout with bold headline creates urgency.
 *   Reinforces the core promise and reduces remaining objections with reassurance copy.
 * Alternative Usage: Could be used as a standalone CTA page section or exit-intent trigger.
 */

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
            Your Home Deserves a Better Selling Experience
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            No upfront costs. No pressure. Just a clear plan, honest pricing, and a team that puts your outcome first. Apply for your free seller review today.
          </p>
          <div className="mt-8">
            <Button size="lg" className="gap-2 text-base" asChild>
              <a href="#contact">
                Start Your Free Review <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
