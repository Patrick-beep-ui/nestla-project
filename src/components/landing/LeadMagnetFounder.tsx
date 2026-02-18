/**
 * COMBINED FOUNDER & LEAD MAGNET SECTION
 * Purpose: Blends Tarek's personal authority with a high-value lead magnet.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Download, ShieldCheck, PlayCircle } from "lucide-react";

export default function LeadMagnetFounder() {
  const { ref, isVisible } = useScrollReveal();

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="leadership" className="py-24 md:py-32 bg-[#0F0F0F] overflow-hidden" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: VERTICAL PLAYER WITH GLASS QUOTE */}
          <div className="relative mx-auto lg:mx-0 lg:justify-self-center w-full max-w-[380px]">
            <div className="relative aspect-[9/16] rounded-[2.5rem] border-8 border-[#161616] bg-black shadow-2xl overflow-hidden">
              <iframe
                src="https://www.youtube-nocookie.com/embed/e6Sv4J2By8s?rel=0"
                title="Tarek El Moussa Advice"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            
            {/* The Glass Quote from Founder Section */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 max-w-[280px] rounded-2xl border border-white/10 bg-black/60 p-5 backdrop-blur-md shadow-2xl">
              <p className="text-xs md:text-sm leading-relaxed text-white italic">
                "I've seen too many families lose equity to a broken system. Nestla changes that forever."
              </p>
            </div>
          </div>

          {/* RIGHT: AUTHORITY CONTENT & CTA */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#63C7FF]/10 border border-[#63C7FF]/20">
                <ShieldCheck className="w-4 h-4 text-[#63C7FF]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#63C7FF]">
                  Expert Advice from Tarek El Moussa
                </span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-[1.1]">
                Don't Let a Home Inspection <span className="text-[#63C7FF]">Kill Your Deal.</span>
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                Nestla was built by one of America's most trusted home experts to protect your equity. 
              </p>
              <p className="text-gray-400 leading-relaxed">
                Deals fall apart because of small inspection items, not price. Download Tarek's <strong>"Fix-First Checklist"</strong> to identify the top red flags before you ever reach escrow.
              </p>
            </div>

            <ul className="space-y-4 border-y border-white/5 py-8">
              {[
                "Avoid panic-driven buyer negotiations",
                "Identify red flags before the inspector does",
                "Maximize your net proceeds at closing"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#63C7FF]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4 space-y-4">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="w-full md:w-auto rounded-full bg-white text-black hover:bg-[#63C7FF] hover:text-black font-bold h-14 px-10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                <Download className="mr-2 w-5 h-5" /> Download the Checklist
              </Button>
              <p className="text-[10px] text-gray-600 font-bold uppercase tracking-widest">
                *Guide will be sent immediately upon application.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}