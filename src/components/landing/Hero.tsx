/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Hero / first impression — emotional hook + primary CTA
 * Best Funnel Position: Top (above fold)
 * Why This Section Works: Large typography + gradient accent creates immediate visual hierarchy.
 *   Addresses the core pain point upfront ("sell for more without the stress") and provides
 *   two clear conversion paths (apply CTA + learn more scroll).
 * Alternative Usage: Could be repurposed as a campaign-specific landing header or seasonal promo block.
 */

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36" >
      <img
        src="/assets/NestlaLogo.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 hidden h-[600px] -translate-y-1/2 opacity-5 lg:block"
      />

      <div
        className="pointer-events-none absolute -right-32 top-16 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px] md:h-[700px] md:w-[700px]"
        style={{
          background:
            "radial-gradient(circle, hsl(202 100% 67% / 0.6), hsl(202 100% 83% / 0.2), transparent 70%)",
        }}
      />

      <div className="container relative mx-auto px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Seller Concierge
          </p>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Sell Your Home for More —{" "}
            <span className="text-gradient">Without the Stress</span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Nestla guides homeowners through a concierge-led selling plan — so you get clarity, confidence, and a stronger outcome without the pressure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="rounded-full px-8 text-base font-semibold transition-transform hover:scale-105"
            >
              Apply for a Free Seller Review <ArrowRight className="ml-1" size={18} />
            </Button>
            <button
              onClick={() => scrollTo("#about")}
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              See How It Works ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
