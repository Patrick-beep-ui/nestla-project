/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Mid-page conversion — re-engages scrollers with a focused CTA block
 * Best Funnel Position: Mid (between content-heavy sections)
 * Why This Section Works: Decorative gradients + contained card layout creates visual break.
 *   Dual CTAs offer primary (apply) and secondary (learn) paths for different intent levels.
 * Alternative Usage: Could be used for lead magnet download, webinar signup, or seasonal promo.
 */

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
          <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl opacity-60" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-60 w-60 rounded-full bg-gradient-to-tr from-accent/15 to-primary/5 blur-3xl opacity-40" />

          <div className="relative mx-auto max-w-2xl text-center">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Ready to Start?
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl">
              Your Free Seller Review Is One Step Away
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Apply in minutes. Get three independent price opinions, a personalized prep plan, and a dedicated concierge team — at no upfront cost.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Button size="lg" className="gap-2" asChild>
                <a href="#lead-form">
                  Apply Now <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Download className="h-4 w-4" /> Download Seller Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
