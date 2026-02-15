/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Portfolio / case studies — showcasing completed work with visual proof
 * Best Funnel Position: Mid-to-Late (after services/process, before testimonials)
 * Why This Section Works: Grid gallery with hover overlays creates a luxury portfolio feel.
 *   Tag badges and outcome labels reinforce quality and results without being salesy.
 * Alternative Usage: Could present case studies, project types, neighborhood coverage, or partner work.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import home1 from "@/assets/gallery/home-1.jpg";
import home2 from "@/assets/gallery/home-2.jpg";
import home3 from "@/assets/gallery/home-3.jpg";
import home4 from "@/assets/gallery/home-4.jpg";
import home5 from "@/assets/gallery/home-5.jpg";
import home6 from "@/assets/gallery/home-6.jpg";

const projects = [
  {
    image: home1,
    location: "Austin, TX",
    outcome: "Sold Above Asking",
    tag: "Nestla Method",
  },
  {
    image: home2,
    location: "Denver, CO",
    outcome: "Staged & Sold in 11 Days",
    tag: "Nestla Touch",
  },
  {
    image: home3,
    location: "Nashville, TN",
    outcome: "Strategically Priced & Sold in 9 Days",
    tag: "Nestla Method",
  },
  {
    image: home4,
    location: "Portland, OR",
    outcome: "Full Prep, Maximum Return",
    tag: "Nestla Touch",
  },
  {
    image: home5,
    location: "Charlotte, NC",
    outcome: "Sold Above Asking",
    tag: "Nestla Method",
  },
  {
    image: home6,
    location: "Scottsdale, AZ",
    outcome: "Concierge-Led Sale",
    tag: "Nestla Method",
  },
];

export default function ProjectGallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Our Work
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
              Homes We've Represented
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            Every home receives the same concierge-level care — preparation, pricing, and guidance tailored to maximize your outcome.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl border border-border/40"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={`Home in ${project.location}`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Tag badge */}
              <div className="absolute left-3 top-3">
                <span className="rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary border border-border/40">
                  {project.tag}
                </span>
              </div>

              {/* Info overlay at bottom */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-5 pt-12">
                <p className="text-sm font-semibold text-foreground">
                  {project.location}
                </p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {project.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
