/**
 * SECTION: NESTLA VS. TRADITIONAL
 * Purpose: Analytical proof of value and ROI maximization.
 */

import { Check, X, Info } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const comparisonData = [
  { 
    feature: "Pricing Strategy", 
    nestla: "Equity Protection via 3 Licensed Valuations", 
    traditional: "Single Agent 'Gut Feeling'",
    highlight: true 
  },
  { 
    feature: "Pre-Sale Preparation", 
    nestla: "Maximized Net Proceeds Strategy", 
    traditional: "Basic 'Clean & Declutter'",
    highlight: true 
  },
  { 
    feature: "Communication", 
    nestla: "Dedicated 24h Concierge Team", 
    traditional: "Variable Agent Availability",
    highlight: false 
  },
  { 
    feature: "Fee Structure", 
    nestla: "Transparent Flat-Fee", 
    traditional: "High % Commissions",
    highlight: true 
  },
  { 
    feature: "Final Outcome", 
    nestla: "Optimized Seller Equity", 
    traditional: "Standard Market Average",
    highlight: true 
  },
];

export default function ComparisonTable() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-[#0F0F0F]" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        
        <div className="mx-auto max-w-3xl text-center mb-20">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
            The Comparison
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl text-white">
            Why Intelligent Sellers <br/> Choose Nestla
          </h2>
        </div>

        <div className="mx-auto max-w-5xl overflow-x-auto rounded-3xl border border-white/5 bg-[#161616]/40 backdrop-blur-xl shadow-2xl">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 md:p-8 text-gray-400 font-medium text-sm">Service Feature</th>
                <th className="p-6 md:p-8 text-[#63C7FF] font-heading text-xl font-bold bg-[#63C7FF]/5">Nestla Method</th>
                <th className="p-6 md:p-8 text-gray-500 font-medium text-sm">Traditional Agent</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonData.map((row, i) => (
                <tr key={i} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 md:p-8 text-white font-medium text-sm md:text-base">
                    {row.feature}
                  </td>
                  <td className={`p-6 md:p-8 bg-[#63C7FF]/5 transition-colors group-hover:bg-[#63C7FF]/10`}>
                    <div className="flex items-center gap-3">
                      <Check className="text-[#63C7FF] shrink-0" size={18} />
                      <span className="text-white font-semibold text-sm md:text-base">{row.nestla}</span>
                    </div>
                  </td>
                  <td className="p-6 md:p-8">
                    <div className="flex items-center gap-3 opacity-40">
                      <X className="text-gray-500 shrink-0" size={18} />
                      <span className="text-gray-400 text-sm md:text-base">{row.traditional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {/* Bottom Trust Note */}
          <div className="p-6 bg-black/40 text-center">
             <p className="text-xs text-gray-500 flex items-center justify-center gap-2 italic">
               <Info size={14} /> Based on internal performance data compared to industry averages.
             </p>
          </div>
        </div>
      </div>
    </section>
  );
}