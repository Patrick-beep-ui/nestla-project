/**
 * REFINED TEAM SECTION - NESTLA EDITION
 * Improvements:
 * - Premium portrait placeholders (Unsplash)
 * - Subtle zoom on hover
 * - Elevated glass treatment
 * - Cleaner visual hierarchy
 */

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, Linkedin } from "lucide-react";

const people = [
  {
    name: "Sarah Mitchell",
    role: "Head of Concierge",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "David Chen",
    role: "Pricing Strategy Lead",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Maria Torres",
    role: "Client Experience",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop",
  },
];

export default function PeopleGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 md:py-36 bg-[#0F0F0F]" ref={ref}>
      <div
        className={`mx-auto max-w-6xl px-6 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Intro */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#63C7FF]">
            Your Team
          </p>
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-white md:text-5xl">
            The People Behind Your Sale
          </h2>
          <p className="mt-6 text-base leading-relaxed text-gray-400">
            Dedicated professionals guiding every step with precision,
            discretion, and care.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-10 md:grid-cols-3">
          {people.map((person, i) => (
            <div
              key={person.name}
              className="group"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Portrait */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-white/5 bg-[#161616]/40 backdrop-blur-xl">
                <img
                  src={person.image}
                  alt={person.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>

              {/* Info */}
              <div className="mt-6">
                <h3 className="font-heading text-xl font-medium text-white">
                  {person.name}
                </h3>
                <p className="mt-1 text-sm text-[#63C7FF]">
                  {person.role}
                </p>

                {/* Contact */}
                <div className="mt-5 flex gap-3">
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-[#63C7FF] hover:text-[#63C7FF]"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-gray-400 transition-all duration-300 hover:border-[#63C7FF] hover:text-[#63C7FF]"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
