/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Founder story / personal positioning — humanizes brand with personal narrative
 * Best Funnel Position: Mid-to-Late (after services/process, before testimonials or form)
 * Why This Section Works: Split layout with portrait creates intimacy. Personal narrative builds
 *   emotional trust and differentiates from faceless corporate competitors.
 * Alternative Usage: Could present a partner story, brand origin, mission narrative, or leadership profile.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import founderPortrait from "@/assets/founder-portrait.jpg";

export default function FounderSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Portrait */}
          <div className="relative overflow-hidden rounded-2xl border border-border/40">
            <img
              src={founderPortrait}
              alt="Founder portrait"
              className="w-full object-cover aspect-[3/4]"
              loading="lazy"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-primary">
              Meet the Founder
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-4xl lg:text-5xl">
              Built from Frustration. Driven by Trust.
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                After watching too many homeowners get rushed through one of the biggest financial decisions of their lives, the idea for Nestla was born. The traditional model rewards speed over outcomes — and sellers pay the price.
              </p>
              <p>
                Nestla was created to flip that model. Instead of pressure and guesswork, we built a concierge-led experience where every seller gets independent pricing, ROI-focused preparation, and a team that puts their outcome first.
              </p>
              <p>
                The vision is simple: become the most trusted name in real estate by combining genuine human care with smart, transparent systems.
              </p>
            </div>
            <div>
              <Button size="lg" className="group">
                Apply for Your Seller Review
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
