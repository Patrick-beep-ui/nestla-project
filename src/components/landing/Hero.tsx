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
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Professional Services
          </p>
          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
            Accelerate Growth with{" "}
            <span className="text-gradient">Expert Strategy</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            We partner with ambitious organizations to streamline operations, unlock new revenue, and build sustainable competitive advantage.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button
              size="lg"
              onClick={() => scrollTo("#contact")}
              className="rounded-full px-8 text-base font-semibold transition-transform hover:scale-105"
            >
              Request a Consultation <ArrowRight className="ml-1" size={18} />
            </Button>
            <button
              onClick={() => scrollTo("#benefits")}
              className="text-sm font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
            >
              Learn more ↓
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
