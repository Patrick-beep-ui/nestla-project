/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Detailed feature/service grid — what's included in the Nestla Method
 * Best Funnel Position: Mid (after stats, before card showcase)
 * Why This Section Works: 6-card grid provides comprehensive coverage of the offer without
 *   overwhelming. Icon + title + description pattern is highly scannable.
 * Alternative Usage: Could present values, differentiators, FAQs-as-features, or process details.


 *
 * REFINED FEATURE GRID - NESTLA "BOUTIQUE" EDITION
 * Improvements: 4-card power pillar grid, balanced typography, and consolidated value.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Layers, Zap, Shield, Globe, BarChart3, Sparkles } from "lucide-react";

const items = [
  { 
    icon: Layers, 
    title: "Independent Valuation", 
    desc: "Receive three price opinions from licensed realtors to ensure total confidence in your asking price." 
  },
  { 
    icon: Sparkles, 
    title: "ROI-Focused Prep", 
    desc: "Strategic staging and Nestla Touch improvements designed to maximize your net return at closing." 
  },
  { 
    icon: Zap, 
    title: "Concierge Coordination", 
    desc: "From photography to negotiations, your dedicated team handles every detail with 24h responsive support." 
  },
  { 
    icon: Shield, 
    title: "Smart Listing Strategy", 
    desc: "No-pressure guidance that routes you to the best path—whether traditional listing or a cash offer." 
  },
];

export default function FeatureGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="features" className="py-24 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
<div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
              What's Included
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] leading-[1.1] md:text-5xl text-white">
              Everything You Need to <br /> Sell with Confidence
            </h2>
          </div>
          <p className="text-gray-400 max-w-xs text-sm md:text-base leading-relaxed border-l-2 border-[#63C7FF]/30 pl-6 mb-2">
            The Nestla Method covers every stage of your journey—from pricing to preparation to closing.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          
          {/* Integrated Visual Anchor - This breaks the "Generic" feel */}
          <div className="relative overflow-hidden rounded-3xl border border-white/5 bg-[#161616] md:row-span-2">
             <img 
               src="/images/nestla-custom-blue-cabinetry-living-room-design.webp" 
               alt="Nestla Design Detail" 
               className="h-full w-full object-cover opacity-60 hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
             <div className="absolute bottom-8 left-8 p-1">
                <p className="text-white font-heading text-lg font-medium leading-tight">Built for clarity. <br/> Designed for growth.</p>
             </div>
          </div>

          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-3xl border border-white/5 bg-[#161616]/40 p-10 backdrop-blur-xl transition-all duration-500 hover:border-[#63C7FF]/30 hover:bg-[#1c1c1c]"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Architectural Tab Accent */}
              <div className="absolute top-10 left-0 w-[2px] h-12 bg-[#63C7FF]/0 group-hover:bg-[#63C7FF] transition-all duration-500" />
              
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-[#63C7FF] transition-all duration-500 group-hover:bg-[#63C7FF] group-hover:text-[#0F0F0F]">
                <item.icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              
              <h3 className="font-heading text-xl font-medium text-white transition-colors duration-300 group-hover:text-[#63C7FF]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 group-hover:text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}