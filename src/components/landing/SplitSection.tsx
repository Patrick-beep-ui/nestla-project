/**
 * /**

 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Positioning / differentiation — bold statement with visual support
 * Best Funnel Position: Mid (after services, before stats)
 * Why This Section Works: 50/50 split layout creates breathing room and lets a single message
 *   land with weight. CTA drives toward application. Visual placeholder invites future imagery.
 * Alternative Usage: Could be used for mission statement, founder story, product overview, or case study highlight.
 *
 * 
 * REFINED NESTLA DIFFERENCE - "THE MODEL FLIP"
 * Improvements: Architectural typography, premium image framing, and explicit value contrast.
 */


import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

export default function SplitSection() {
  const { ref, isVisible } = useScrollReveal();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="difference" className="py-24 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid items-center gap-16 md:grid-cols-2 md:gap-24">
          
          <div className="relative group">
            <div className="absolute -inset-4 rounded-[2rem] border border-white/5 bg-white/2 backdrop-blur-3xl transition-all duration-500 group-hover:border-[#63C7FF]/20" />
            <div className="relative aspect-[4/5] md:aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="/images/modern-living-room-staging-nestla-concierge.webp"
                alt="Nestla professionally staged modern interior"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            {/* Subtle brand watermark or tag */}
            <div className="absolute bottom-6 right-6 rounded-full bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
               <p className="text-[10px] font-bold uppercase tracking-widest text-white/80">Project No. 7161</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
                The Nestla Difference
              </p>
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.03em] leading-[1.1] text-white lg:text-5xl">
                No Pressure. No Guesswork. <br /> 
                <span className="text-[#63C7FF]">Just Guidance.</span>
              </h2>
            </div>

            <p className="text-base leading-relaxed text-gray-400 md:text-lg">
              Most sellers face confusing pricing, rushed timelines, and agents focused on closing fast. Nestla flips the model: we prioritize your net return through independent data and concierge-led preparation.
            </p>

            <ul className="space-y-3 border-l border-white/10 pl-6">
               <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={14} className="text-[#63C7FF]" /> 3 Independent Price Opinions
               </li>
               <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={14} className="text-[#63C7FF]" /> ROI-Focused Prep Roadmap
               </li>
               <li className="flex items-center gap-3 text-sm text-gray-300">
                  <Check size={14} className="text-[#63C7FF]" /> 24h Dedicated Support
               </li>
            </ul>

            <div className="mt-4">
              <Button size="lg" onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#contact");
                    }}
                    className="group h-14 rounded-full bg-[#63C7FF] px-8 text-sm font-bold text-[#0F0F0F] hover:bg-[#63C7FF]/90">
                Apply for Your Free Review
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}