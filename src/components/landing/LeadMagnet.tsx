/**
 * LEAD MAGNET SECTION - THE "DEAL KILLER" ADVISORY
 * Features: Vertical Video Player + Lead Magnet CTA for GHL integration.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { Download, PlayCircle, ShieldCheck } from "lucide-react";

export default function LeadMagnet() {
  const { ref, isVisible } = useScrollReveal();

  const scrollToForm = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-24 bg-[#0F0F0F] overflow-hidden" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          
        <div className="relative mx-auto lg:mx-0 lg:justify-self-center w-full max-w-[360px] aspect-[9/16] rounded-[2.5rem] border-8 border-[#161616] bg-black shadow-2xl overflow-hidden">
            
            <iframe
                src="https://www.youtube-nocookie.com/embed/e6Sv4J2By8s?rel=0"
                title="Nancy Testimonial"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
            />

            {/* Subtle Gradient Overlay for Brand Depth */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>


          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#63C7FF]/10 border border-[#63C7FF]/20">
              <ShieldCheck className="w-4 h-4 text-[#63C7FF]" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#63C7FF]">Free Seller Resource</span>
            </div>
            
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white leading-[1.1]">
              Don't Let a Home Inspection <span className="text-[#63C7FF]">Kill Your Deal.</span>
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-lg">
              Deals fall apart because of small inspection items, not price. Tarek's <strong>"Fix-First Checklist"</strong> identifies the top deal-killers before they ever reach escrow.
            </p>

            <ul className="space-y-4">
              {[
                "Avoid panic-driven buyer negotiations",
                "Identify high-risk inspection red flags",
                "Fix the items that cause deals to die"
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#63C7FF]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Button 
                onClick={scrollToForm}
                size="lg" 
                className="rounded-full bg-white text-black hover:bg-[#63C7FF] hover:text-black font-bold h-14 px-8 transition-all"
              >
                <Download className="mr-2 w-5 h-5" /> Download the Checklist
              </Button>
              <p className="mt-4 text-xs text-gray-600 font-medium">
                *Guide will be sent immediately to your email upon application.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}