/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Service categories — structured offering breakdown with visual separation
 * Best Funnel Position: Mid (after benefits)
 * Why This Section Works: Two large cards with gradient accents create visual weight and category
 *   distinction. Labels + descriptions frame each service as a distinct experience path.
 * Alternative Usage: Could present audience segments, engagement models, or product tiers.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";

const services = [
  {
    label: "The Nestla Method",
    title: "Flat-Fee Seller Review",
    desc: "Begin with a complimentary seller review designed to remove uncertainty. Approved homeowners receive three independent price opinions, a personalized Prep & Improve roadmap, and full listing coordination — all delivered through a transparent flat-fee structure.",
    gradient: "from-primary/20 to-accent/10",
    image: "/images/nestla-mid-century-modern-stucco-exterior.webp",
    micro: [
      "Three independent licensed realtor price opinions",
      "ROI-focused prep guidance through Nestla Touch",
      "Concierge-level communication through close",
    ],
    cta: "Start Your Seller Review",
  },
  {
    label: "Best-Fit Routing",
    title: "Your Path, Your Terms",
    desc: "Not every seller needs the same strategy. If a traditional in-person agent or a competitive cash offer better fits your timeline or goals, we guide you there thoughtfully — so you never feel pressured into the wrong path.",
    gradient: "from-accent/20 to-primary/10",
    image: "/images/nestla-bright-kitchen-dining-roi-refresh.webp",
    micro: [
      "Traditional in-person realtor experience when preferred",
      "Competitive cash offer options for speed and certainty",
      "Guidance based on your goals — not commissions",
    ],
    cta: "Explore Your Options"
  },
];


export default function Services() {
  const { ref, isVisible } = useScrollReveal();

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">What We Offer</p>
        <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] leading-[1.1] md:text-5xl">
          A Smarter Way to Sell Your Home
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <div
              key={s.title}
              className="relative overflow-hidden rounded-2xl border border-border/60 bg-card transition-all duration-300 hover:border-primary/40"
            >
              {/* Optional supporting image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative p-10">
                <div
                  className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br ${s.gradient} blur-3xl opacity-60`}
                />
                <span className="relative mb-4 inline-block rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                  {s.label}
                </span>
                <h3 className="relative font-heading text-2xl font-bold md:text-3xl">{s.title}</h3>
                <p className="relative mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {s.desc}
                </p>

                {s.micro && s.micro.length > 0 && (
                  <ul className="relative mt-5 space-y-3 text-sm text-muted-foreground">
                    {s.micro.map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <svg
                          className="mt-[3px] h-4 w-4 shrink-0 text-primary"
                          viewBox="0 0 20 20"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                        >
                          <path d="M5 10l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.cta && (
                  <a
                    href="#apply"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo("#contact");
                    }}
                    className="relative mt-10 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {s.cta} →
                  </a>
                )}

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
