/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Process / methodology — step-by-step journey through the Nestla Method
 * Best Funnel Position: Mid-to-Pre-Form (builds confidence before conversion)
 * Why This Section Works: Numbered cards create a clear sequential narrative. Large background
 *   numbers provide visual anchoring. This reduces uncertainty by showing exactly what happens.
 * Alternative Usage: Could present engagement phases, onboarding steps, or service tiers.

 * REFACTORED NESTLA JOURNEY - "CONFIDENCE BRIDGE" EDITION
 * Improvements: Linear narrative flow, architectural typography, 
 * and interconnected visual accents.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ClipboardCheck, LineChart, Home } from "lucide-react";

const steps = [
  {
    icon: ClipboardCheck,
    title: "Apply for a Free Review",
    desc: "Tell us about your property and goals. Our concierge team reviews your application and schedules a personalized consultation.",
  },
  {
    icon: LineChart,
    title: "Get Three Price Opinions",
    desc: "Three independent licensed realtors evaluate your home — giving you a clear, unbiased view of your market position.",
  },
  {
    icon: Home,
    title: "Prep, List, and Close",
    desc: "With Nestla Touch prep, full listing coordination, and dedicated support, you sell with confidence from start to finish.",
  },
];

export default function NestlaJourney() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="mx-auto max-w-3xl text-center mb-24">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
            The Journey
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl text-white leading-tight">
            How the Nestla Method Works
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto leading-relaxed">
            Three clear steps from application to closing — guided by your dedicated concierge team.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/5 hidden md:block -translate-y-12" />

          <div className="grid gap-12 md:grid-cols-3 relative z-10">
            {steps.map((step, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                
                {/* Number & Icon Anchor */}
                <div className="relative mb-8">
                  <div className="absolute -inset-4 rounded-full bg-[#63C7FF]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 bg-[#161616] transition-all duration-500 group-hover:border-[#63C7FF]/40 group-hover:-translate-y-2 group-hover:shadow-[0_0_30px_rgba(99,199,255,0.1)]">
                    <span className="absolute -top-3 -right-3 h-7 w-7 rounded-full bg-[#63C7FF] text-[#0F0F0F] text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <step.icon className="h-8 w-8 text-[#63C7FF]" strokeWidth={1.5} />
                  </div>
                </div>

                <h3 className="font-heading text-xl font-medium text-white mb-4 group-hover:text-[#63C7FF] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-400 max-w-xs mx-auto">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}