/**
 * PeopleGrid — 3-column portrait card grid with name, role, and social links.
 * Use cases: team members, leadership, advisors, partners, contributors, board members.
 * Inspired by DevSavant team section (image-24).
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Linkedin } from "lucide-react";

const people = [
  { name: "[Person name #1]", role: "[Role or title]" },
  { name: "[Person name #2]", role: "[Role or title]" },
  { name: "[Person name #3]", role: "[Role or title]" },
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
            [Section label]
          </p>
          <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
            [Section headline goes here]
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {people.map((person, i) => (
            <div
              key={i}
              className="group flex flex-col"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Photo placeholder */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-card/40">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-card/80" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm text-muted-foreground">[Photo]</span>
                </div>
              </div>

              {/* Info */}
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
