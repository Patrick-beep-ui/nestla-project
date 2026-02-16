/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Audience segments / service paths — two distinct experiences side by side
 * Best Funnel Position: Mid (after feature details)
 * Why This Section Works: Two large cards with visual areas create strong visual distinction
 *   between paths. Labels + descriptions help sellers self-identify which path fits them.
 * Alternative Usage: Could present product tiers, case study categories, or engagement models.
 /**
 * REFINED AUDIENCE IDENTIFICATION - NESTLA EDITION
 * Purpose: Help the seller self-identify their priority.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Banknote } from "lucide-react";

const paths = [
  {
    icon: Clock,
    label: "Priority: Maximum ROI",
    title: "The Strategic Seller",
    desc: "You have 3-6 months and want to ensure every dollar of equity is extracted through the Nestla Method.",
    image: "/images/nestla-luxury-kitchen-marble-waterfall-island.webp",
  },
  {
    icon: Banknote,
    label: "Priority: Speed & Certainty",
    title: "The Agile Seller",
    desc: "Your timeline is tight. You want a vetted cash offer today without the stress of showings or prep.",
    image: "/images/nestla-modern-curb-appeal-exterior-renovated.webp",
  },
];

export default function PathSelector() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="identify" className="py-24 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        <div className="mx-auto max-w-2xl text-center mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
            Self-Identification
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl text-white">
            What is Your <br/> Primary Goal?
          </h2>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          {paths.map((p, i) => (
            <div
              key={i}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-[#161616]/60 transition-all duration-500 hover:border-[#63C7FF]/30"
            >
              <div className="aspect-[21/9] overflow-hidden grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
              </div>

              <div className="p-10 flex flex-1 flex-col">
                <div className="flex items-center gap-3 mb-6">
                   <div className="p-2 rounded-lg bg-[#63C7FF]/10 text-[#63C7FF]">
                      <p.icon size={18} />
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-[#63C7FF]">{p.label}</span>
                </div>

                <h3 className="font-heading text-2xl font-semibold text-white mb-4">{p.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400 mb-8">{p.desc}</p>
                
                <div className="mt-auto">
                  <Button variant="link" className="px-0 text-[#63C7FF] font-bold hover:no-underline group/btn">
                    View This Roadmap
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}