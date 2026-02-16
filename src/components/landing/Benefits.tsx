/**
* SECTION DOCUMENTATION
* ─────────────────────
* Primary Use Case: Value proposition — outcome-driven benefits mapped to seller pain points
* Best Funnel Position: Mid (after about, before services)
* Why This Section Works: 3-column icon cards create scannable value hierarchy. Each card
* addresses a specific pain point (overwhelm, trust, speed) and reframes it as a positive outcome.
* Alternative Usage: Could present differentiators, guarantees, or competitive advantages.
*
 * REFINED BENEFITS - NESTLA "OUTCOME" EDITION V2
 * Improvements:
 * - Architectural centered heading block
 * - Slight content narrowing for premium feel
 * - Softer glow layering
 * - Stronger hierarchy rhythm
 */

import { TrendingUp, Shield, Zap } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    icon: TrendingUp,
    title: "Maximize Your Sale Price",
    desc: "ROI-focused preparation and three independent price opinions ensure you list at the strongest possible number.",
  },
  {
    icon: Shield,
    title: "Trust-First Transparency",
    desc: "No pressure, no hidden agendas. Every recommendation is backed by data and delivered with total honesty.",
  },
  {
    icon: Zap,
    title: "Fast, Responsive Support",
    desc: "Concierge-level communication means you're never left waiting. Your questions get answered within 24 hours.",
  },
];

export default function Benefits() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      id="benefits"
      ref={ref}
      className="relative py-28 md:py-36 bg-[#0F0F0F] overflow-hidden"
    >
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Centered Architectural Intro */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#63C7FF]">
            Why Nestla
          </p>

          <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] leading-[1.1] md:text-5xl">
            Outcomes Designed
            <br className="hidden md:block" />
            Around You
          </h2>

          <p className="mt-6 text-base leading-relaxed text-gray-400">
            Every recommendation is engineered to protect your equity,
            eliminate uncertainty, and accelerate your timeline.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className="group relative rounded-3xl border border-white/5 bg-[#161616]/50 p-10 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#63C7FF]/40 hover:bg-[#1b1b1b]"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Icon */}
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#63C7FF]/10 text-[#63C7FF] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#63C7FF] group-hover:text-[#0F0F0F] group-hover:shadow-[0_0_25px_rgba(99,199,255,0.35)]">
                <b.icon className="h-7 w-7" strokeWidth={1.5} />
              </div>

              <h3 className="font-heading text-xl font-medium tracking-tight text-white transition-colors duration-300 group-hover:text-[#63C7FF]">
                {b.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                {b.desc}
              </p>

              {/* Glow Layer */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,_rgba(99,199,255,0.08),_transparent_60%)]" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
