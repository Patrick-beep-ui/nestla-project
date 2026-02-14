/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Social proof / trust bar — logos or partner names for credibility
 * Best Funnel Position: Top (immediately after hero)
 * Why This Section Works: Quick credibility boost via association. Reduces skepticism before
 *   the visitor reads further. Works best with recognizable names.
 * Alternative Usage: Could show media mentions, certifications, or technology partners.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = ["Zillow", "Realtor.com", "Redfin", "MLS Network", "HomeLight", "BBB Accredited"];

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`border-y border-border/40 py-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by homeowners and backed by industry leaders
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((name) => (
            <span
              key={name}
              className="font-heading text-lg font-semibold text-muted-foreground/50 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
