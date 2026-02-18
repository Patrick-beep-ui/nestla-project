/**
 * REFINED TESTIMONIALS - NANCY FULL STORY EDITION
 * Features: High-capacity narrative layout with integrated vertical video.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote, Star } from "lucide-react";

const supportingTestimonials = [
  {
    quote: "I was terrified of pricing my home wrong. Nestla gave me three independent opinions and I finally felt confident listing. We sold above asking.",
    name: "Jennifer L.",
    title: "Homeowner",
    company: "Austin, TX",
  },
  {
    quote: "No pressure, no games. My concierge team was responsive and honest about everything — even when the answer wasn't what I wanted to hear. That's real trust.",
    name: "Marcus D.",
    title: "Homeowner",
    company: "Denver, CO",
  },
  {
    quote: "The Nestla Touch prep recommendations added real value. Small changes, big impact. I netted significantly more than I expected.",
    name: "Rachel & Tom K.",
    title: "Homeowners",
    company: "Nashville, TN",
  },
];

export default function Testimonials() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="testimonials" className="py-24 md:py-32 bg-background" ref={ref}>
      <div className={`container mx-auto px-6 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}>
        
        <div className="max-w-2xl mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
            What Sellers Say
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Real Stories from <br/> Real Homeowners
          </h2>
        </div>

        {/* FEATURED FULL STORY (NANCY) */}
        <div className="mb-16 rounded-[2rem] border border-white/5 bg-white/[0.01] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left: Deep Narrative */}
            <div className="p-8 md:p-14 lg:col-span-8 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-[#63C7FF] text-[#63C7FF]" />
                ))}
              </div>
              
              <Quote className="mb-6 h-10 w-10 text-[#63C7FF]/20" />
              
              <div className="space-y-6 text-gray-300 leading-relaxed text-sm md:text-base">
                <p>
                  "We were living in Arizona and trying to sell our house, but we had <strong>no luck</strong>. We listed it multiple times, took it off the market, and relisted—still with no results."
                </p>
                <p>
                  "Then, I had a conversation with <strong>Tarek El Moussa</strong>. He promised to connect us with the best licensed housing experts and construction pros to help us sell. He was true to his promises every step of the way."
                </p>
                <p className="text-white font-medium text-lg italic">
                  "Things finally clicked! We started getting four or more showings a week, online interest picked up, and we received a <strong>full-price offer</strong>."
                </p>
                <p>
                  "No matter where you live, let Tarek find you a realtor and connect you with stagers and contractors. It’s a tough market, but our experience was a pleasure."
                </p>
              </div>

              <div className="mt-10 flex items-center gap-5 border-t border-white/5 pt-8">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-[#63C7FF] to-[#3a7bd5] flex items-center justify-center text-[#0F0F0F] font-bold text-xl">
                  N
                </div>
                <div>
                  <p className="text-white font-bold text-lg">Nancy</p>
                  <p className="text-sm text-gray-500 font-medium tracking-wide">Homeowner | Arizona Case Study</p>
                </div>
              </div>
            </div>

            {/* Right: Video Evidence */}
            <div className="bg-[#161616] lg:col-span-4 flex items-center justify-center p-8 md:p-12 order-1 lg:order-2 border-b lg:border-b-0 lg:border-l border-white/5">
              <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden shadow-2xl bg-black border-[6px] border-[#0F0F0F]">
                <iframe
                  src="https://www.youtube-nocookie.com/embed/K5L6PPQOH0o?rel=0"
                  title="Nancy Testimonial"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>

          </div>
        </div>

        {/* SUPPORTING GRID 
        <div className="grid gap-6 md:grid-cols-3">
          {supportingTestimonials.map((t) => (
            <div key={t.name} className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#161616] p-8 hover:border-[#63C7FF]/20 transition-all duration-500 group">
              <div>
                <Quote className="mb-4 h-5 w-5 text-[#63C7FF]/40 group-hover:text-[#63C7FF] transition-colors" />
                <p className="text-sm leading-relaxed text-gray-400">"{t.quote}"</p>
              </div>
              <div className="mt-8 flex items-center gap-3 border-t border-white/5 pt-6">
                <div className="h-10 w-10 rounded-full bg-[#63C7FF]/10 flex items-center justify-center text-[#63C7FF] font-bold text-xs">
                  {t.name[0]}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.title}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}