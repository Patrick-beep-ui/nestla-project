import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (href: string) =>
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="relative overflow-hidden pt-32 pb-24 md:pt-44 md:pb-36">
      {/* Decorative gradient blob */}
      <div
        className="pointer-events-none absolute -right-32 top-16 h-[500px] w-[500px] rounded-full opacity-30 blur-[120px] md:h-[700px] md:w-[700px]"
        style={{
          background:
            "radial-gradient(circle, hsl(202 100% 67% / 0.6), hsl(202 100% 83% / 0.2), transparent 70%)",
        }}
      />

      <div className="container relative mx-auto px-6">
      <div className="max-w-3xl">
          {/* Questionnaire: Business Vision & Mission → tagline */}
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            [Service Category from Questionnaire]
          </p>

          {/* Questionnaire: Campaign Goals → primary headline addressing audience pain point */}
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            [Primary Benefit Statement]{" "}
            <span className="text-gradient">[Key Differentiator]</span>
          </h1>

          {/* Questionnaire: Target Audience + Pain Points → subheadline */}
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            [Subheadline addressing who you serve, what outcome you deliver, and why it matters — sourced from audience pain points and brand tone]
          </p>

          {/* Questionnaire: Automation Goals → CTA aligned with follow-up flow */}
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="rounded-full px-8 text-base font-semibold transition-transform hover:scale-105"
            >
              [Primary CTA Label] <ArrowRight className="ml-1" size={18} />
            </Button>
            <button
              onClick={() => scrollTo("#benefits")}
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              [Secondary CTA Label] ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
