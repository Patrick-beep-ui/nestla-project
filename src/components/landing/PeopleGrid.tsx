/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Team / leadership — humanizes the brand with real faces and roles
 * Best Funnel Position: Mid-to-Late (after process, before testimonials)
 * Why This Section Works: Portrait cards with roles and contact links build personal trust.
 *   Showing real people behind the concierge model reinforces the "human care" positioning.
 * Alternative Usage: Could present advisors, partner agents, board members, or client advocates.
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Linkedin } from "lucide-react";

const people = [
  { name: "Sarah Mitchell", role: "Head of Concierge" },
  { name: "David Chen", role: "Pricing Strategy Lead" },
  { name: "Maria Torres", role: "Client Experience" },
];

export default function PeopleGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32" ref={ref}>
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="mx-auto max-w-3xl text-center mb-16">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Your Team
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            The People Behind Your Sale
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {people.map((person, i) => (
            <div
              key={i}
              className="group flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card/40">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">[Photo]</span>
                </div>
              </div>

              <div className="mt-5 flex items-baseline justify-between">
                <h3 className="font-heading text-xl font-bold">{person.name}</h3>
                <span className="text-sm text-primary">+ {person.role}</span>
              </div>

              <div className="mt-4 border-t border-border pt-4 flex gap-3">
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
