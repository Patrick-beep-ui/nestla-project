/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Core values / differentiators — vertical list with sticky heading
 * Best Funnel Position: Mid (flexible — works well before or after testimonials)
 * Why This Section Works: Sticky left heading keeps the section label visible as the user
 *   scrolls through values. Left accent borders create rhythm. Each item reframes a differentiator
 *   as a value commitment.
 * Alternative Usage: Could present process steps, service breakdown, timeline, or brand pillars.
 /**
 * REFACTORED VALUE STACK - THE NESTLA MANIFESTO
 * Improvements: Balanced grid (no sticky drift), Semibold architectural headers, 
 * and rhythmic card borders.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const items = [
  {
    title: "Trust-First Transparency",
    desc: "Every recommendation, price opinion, and next step is shared openly. No hidden fees, no conflicts of interest — just honest guidance.",
  },
  {
    title: "Care and Empathy",
    desc: "Selling a home is personal. Your concierge team listens first, advises second, and always respects your pace and priorities.",
  },
  {
    title: "Clarity Over Complexity",
    desc: "From your first consultation to closing day, every step is explained simply. You'll always know what's happening and why.",
  },
  {
    title: "Seller-First Outcomes",
    desc: "Our success is measured by yours. Every decision — from prep to pricing to routing — is designed to maximize your result.",
  },
];

export default function ValueManifesto() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="values" className="py-24 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        {/* Balanced Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
              Our Values
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl text-white leading-tight">
              The Principles Behind <br /> 
              Every Decision We Make
            </h2>
          </div>
          <div className="flex flex-col gap-6 items-start lg:items-end">
             <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed text-left lg:text-right">
              These aren't slogans — they're the principles that shape every interaction and every outcome.
             </p>
             <Button className="rounded-full bg-[#63C7FF] text-[#0F0F0F] font-bold px-8 group">
                Start Your Review
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
             </Button>
          </div>
        </div>

        {/* The 2x2 Manifesto Grid - More stable and convincing */}
        <div className="grid gap-px bg-white/10 overflow-hidden rounded-3xl border border-white/10">
          <div className="grid md:grid-cols-2 gap-px">
            {items.map((item, i) => (
              <div
                key={i}
                className="bg-[#161616] p-10 md:p-16 transition-all duration-500 hover:bg-[#1c1c1c] group"
              >
                <span className="text-[10px] font-bold text-[#63C7FF]/40 uppercase tracking-[0.3em] mb-8 block">
                  Value 0{i + 1}
                </span>
                <h3 className="font-heading text-2xl font-semibold text-white tracking-tight mb-4 group-hover:text-[#63C7FF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}