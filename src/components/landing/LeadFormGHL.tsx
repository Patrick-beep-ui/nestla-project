/**
 * LEAD FORM - LANDING PAGE VERSION
 * Uses native GoHighLevel embed (iframe)
 * Clean, stable, automation-ready
 */

import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function LeadForm() {
  const { ref, isVisible } = useScrollReveal();

  // Load GHL embed script once
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background"
      ref={ref}
    >
      <div
        className={`container mx-auto px-6 transition-all duration-1000 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-12"
        }`}
      >
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#63C7FF]">
            Apply Now
          </p>

          <h2 className="font-heading text-4xl font-semibold tracking-tight md:text-5xl text-white">
            Start Your Free Seller Review
          </h2>
        </div>

        {/* GHL Form Container */}
        
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/iNPvMZO32xobgFLSscIU"
            style={{
              width: "100%",
              height: "900px",
              border: "none",
              background: "transparent",
            }}
            id="inline-iNPvMZO32xobgFLSscIU"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-activation-type="alwaysActivated"
            data-deactivation-type="neverDeactivate"
            data-form-id="iNPvMZO32xobgFLSscIU"
            title="Seller Application Form"
          />
        </div>
      
    </section>
  );
}
