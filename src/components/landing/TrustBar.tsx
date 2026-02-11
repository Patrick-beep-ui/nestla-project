import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = ["Acme Corp", "Globex", "Initech", "Umbrella", "Stark Industries", "Wayne Enterprises"];

export default function TrustBar() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section
      ref={ref}
      className={`border-y border-border/40 py-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="container mx-auto px-6">
        <p className="mb-8 text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
          {logos.map((name) => (
            <span
              key={name}
              className="font-heading text-lg font-semibold text-muted-foreground/50 md:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
