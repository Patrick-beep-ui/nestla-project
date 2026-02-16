/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Lead capture / seller application — primary conversion point
 * Best Funnel Position: Bottom (final conversion section)
 * Why This Section Works: Clean form with minimal fields reduces friction. Contextual copy
 *   sets expectations for follow-up and reinforces the no-pressure, trust-first positioning.
 * Alternative Usage: Could be adapted for consultation booking, newsletter signup, or partner inquiry.
 /**
 * REFINED LEADFORM - NESTLA "HIDDEN BRIDGE" EDITION
 * Purpose: Keeps premium design while triggering free GHL standard automation.
 */

 import { useScrollReveal } from "@/hooks/useScrollReveal";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { Checkbox } from "@/components/ui/checkbox";
 import { ArrowRight } from "lucide-react";
 
 export default function LeadForm() {
   const { ref, isVisible } = useScrollReveal();
 
   return (
     <section id="contact" className="py-24 md:py-32 bg-background" ref={ref}>
       <div
         className={`container mx-auto px-6 transition-all duration-1000 ${
           isVisible
             ? "opacity-100 translate-y-0"
             : "opacity-0 translate-y-12"
         }`}
       >
         <div className="mx-auto max-w-2xl text-center mb-16">
           <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
             Apply Now
           </p>
           <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl text-white">
             Start Your Free Seller Review
           </h2>
         </div>
 
         <form className="mx-auto max-w-xl space-y-6">
           {/* Name */}
           <div className="grid gap-5 sm:grid-cols-2">
             <div>
               <label className="text-gray-300 block mb-2">
                 First Name
               </label>
               <Input
                 placeholder="Jane"
                 className="bg-[#161616] border-white/10 rounded-xl h-12"
               />
             </div>
 
             <div>
               <label className="text-gray-300 block mb-2">
                 Last Name
               </label>
               <Input
                 placeholder="Smith"
                 className="bg-[#161616] border-white/10 rounded-xl h-12"
               />
             </div>
           </div>
 
           {/* Contact */}
           <div className="grid gap-5 sm:grid-cols-2">
             <div>
               <label className="text-gray-300 block mb-2">
                 Email
               </label>
               <Input
                 type="email"
                 placeholder="jane@email.com"
                 className="bg-[#161616] border-white/10 rounded-xl h-12"
               />
             </div>
 
             <div>
               <label className="text-gray-300 block mb-2">
                 Phone
               </label>
               <Input
                 type="tel"
                 placeholder="(555) 000-0000"
                 className="bg-[#161616] border-white/10 rounded-xl h-12"
               />
             </div>
           </div>
 
           {/* Location */}
           <div>
             <label className="text-gray-300 block mb-2">
               Property Location (optional)
             </label>
             <Input
               placeholder="City, State"
               className="bg-[#161616] border-white/10 rounded-xl h-12"
             />
           </div>
 
           {/* Message */}
           <div>
             <label className="text-gray-300 block mb-2">
               Tell Us About Your Situation
             </label>
             <Textarea
               rows={4}
               className="bg-[#161616] border-white/10 rounded-2xl resize-none"
             />
           </div>
 
           {/* Consent */}
           <div className="flex flex-row items-start space-x-3 rounded-2xl border border-white/5 bg-white/[0.02] p-5">
             <Checkbox className="border-white/20 data-[state=checked]:bg-[#63C7FF]" />
             <p className="text-[11px] leading-relaxed text-gray-500 font-medium">
               By checking this box, I consent to receive transactional and promotional messages from Nestla.
             </p>
           </div>
 
           {/* Button */}
           <Button
             type="button"
             size="lg"
             className="w-full h-14 rounded-full bg-[#63C7FF] text-[#0F0F0F] font-bold"
           >
             Submit My Application
             <ArrowRight className="ml-2 h-5 w-5" />
           </Button>
         </form>
       </div>
     </section>
   );
 }