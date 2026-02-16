/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Founder story / personal positioning — humanizes brand with personal narrative
 * Best Funnel Position: Mid-to-Late (after services/process, before testimonials or form)
 * Why This Section Works: Split layout with portrait creates intimacy. Personal narrative builds
 *   emotional trust and differentiates from faceless corporate competitors.
 * Alternative Usage: Could present a partner story, brand origin, mission narrative, or leadership profile.

 * REFINED LEADERSHIP SECTION - NESTLA AUTHORITY
 * Improvements: Interactive glass-quote overlay, Semibold hierarchy, 
 * and trust-metric bullet points.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Home, ShieldCheck } from "lucide-react";

export default function LeadershipSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="leadership" className="py-24 md:py-32 bg-background" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="grid items-center gap-16 md:grid-cols-2 lg:gap-24">
      
          <div className="relative group">
            <div className="relative overflow-hidden rounded-3xl border border-white/5 shadow-2xl max-w-[500px]">
              <img
                src="/images/TarekElMoussa.webp"
                alt="Leadership Portrait"
                className="w-full object-cover aspect-[4/5] max-h-[520px] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md">
                <p className="text-sm md:text-base leading-relaxed text-white italic">
                  "I've seen too many families lose equity to a broken system. Nestla changes that forever."
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
                The Vision
              </p>
              <h2 className="font-heading text-4xl font-semibold tracking-[-0.03em] leading-[1.1] text-white lg:text-5xl">
                Led by <br className="hidden md:block"/> Tarek El Moussa
              </h2>
            </div>

            <div className="space-y-6 text-base leading-relaxed text-gray-400">
              <p>
                Nestla was built by one of America's most trusted home experts — after decades of seeing sellers shortchanged by the system. The traditional model rewards speed over outcomes, and sellers pay the price.
              </p>
              
              <ul className="space-y-4 border-y border-white/10 py-8">
                <li className="flex items-center gap-4 text-sm text-gray-200 font-medium">
                  <div className="h-2 w-2 rounded-full bg-[#63C7FF]" />
                  Over 1,000 homes transformed
                </li>
                <li className="flex items-center gap-4 text-sm text-gray-200 font-medium">
                  <div className="h-2 w-2 rounded-full bg-[#63C7FF]" />
                  Trusted by millions through national media
                </li>
                <li className="flex items-center gap-4 text-sm text-gray-200 font-medium">
                  <div className="h-2 w-2 rounded-full bg-[#63C7FF]" />
                  No commission agenda — just protection & clarity
                </li>
              </ul>
            </div>

            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold pt-4">
                Scroll to begin your application
              </p>
          </div>

        </div>
      </div>
    </section>
  );
}