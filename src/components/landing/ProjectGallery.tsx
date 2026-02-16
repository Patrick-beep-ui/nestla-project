/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Portfolio / case studies — showcasing completed work with visual proof
 * Best Funnel Position: Mid-to-Late (after services/process, before testimonials)
 * Why This Section Works: Grid gallery with hover overlays creates a luxury portfolio feel.
 *   Tag badges and outcome labels reinforce quality and results without being salesy.
 * Alternative Usage: Could present case studies, project types, neighborhood coverage, or partner work.
 */

import { useMemo, useState, useEffect } from "react";
import { X } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import images from "./../../data/images.json";

const selectedImages = [
  "nestla-industrial-modern-kitchen-walnut-finish.webp",
  "nestla-custom-blue-cabinetry-living-room-design.webp",
  "nestla-scandinavian-kitchen-wood-cabinetry.webp",
  "nestla-white-oak-kitchen-wicker-lighting.webp",
  "nestla-open-concept-living-luxury-lighting.webp",
  "luxury-craftsman-home-prep-nestla-listing.webp",
  "nestla-luxury-kitchen-marble-waterfall-island.webp",
  "nestla-suburban-ranch-exterior-presale-prep.webp",
  "nestla-modern-fire-pit-lounge-prep.webp",
  "nestla-modern-dining-room-minimalist-styling.webp",
  "nestla-grand-entryway-spiral-staircase.webp",
  "nestla-spanish-revival-exterior-refresh.webp",
];

const ITEMS_PER_PAGE = 6;

export default function ProjectGallery() {
  const { ref, isVisible } = useScrollReveal();
  const [page, setPage] = useState(0);
  const [selectedImage, setSelectedImage] = useState<any | null>(null);
  const [displayPage, setDisplayPage] = useState(page);
  const [isFading, setIsFading] = useState(false);
  


  const projects = useMemo(() => {
    return selectedImages
      .map((name) =>
        images.images.find(
          (img) =>
            img.original_name === name ||
            img.optimized_seo_name === name
        )
      )
      .filter(Boolean);
  }, []);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const paginatedProjects = projects.slice(
    displayPage  * ITEMS_PER_PAGE,
    displayPage  * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  const goToPage = (index: number) => {
    if (index >= 0 && index < totalPages && index !== page) {
      setIsFading(true);
  
      setTimeout(() => {
        setDisplayPage(index);
        setPage(index);
        setIsFading(false);
      }, 300);
    }
  };
  
  

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
  
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  

  return (
    <section className="py-24 md:py-32 bg-background" ref={ref} id="projects">
      <div
        className={`container mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-[#63C7FF]">
              Our Work
            </p>
            <h2 className="font-heading text-4xl font-semibold tracking-[-0.02em] leading-[1.1] text-white md:text-5xl">
              Homes We've Represented
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-gray-400">
            Every home receives concierge-level preparation and strategic pricing —
            engineered for maximum return.
          </p>
        </div>

        {/* 3x2 Grid */}
        <div
          className={`grid gap-6 sm:grid-cols-2 lg:grid-cols-3 transition-opacity duration-500 ease-in-out
 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
        >

          {paginatedProjects.map((project, i) => (
            <div
              key={project.optimized_seo_name}
              onClick={() => setSelectedImage(project)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/5 bg-[#161616]/40 backdrop-blur-xl"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={`/images/${project.optimized_seo_name}`}
                  alt={project.recommended_alt_text}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-5 pt-12">
                <p className="text-sm font-semibold text-white">
                {project.optimized_seo_name
                    .replace("nestla-", "")
                    .replace(/-/g, " ")
                    .replace(".webp", "")}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={() => goToPage(page - 1)}
                disabled={page === 0}
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-gray-400 transition hover:border-[#63C7FF] hover:text-[#63C7FF] disabled:opacity-30"
              >
                ← Previous
              </button>

              <button
                onClick={() => goToPage(page + 1)}
                disabled={page === totalPages - 1}
                className="rounded-full border border-white/10 px-5 py-2 text-sm text-gray-400 transition hover:border-[#63C7FF] hover:text-[#63C7FF] disabled:opacity-30"
              >
                Next →
              </button>
            </div>

            {/* Dots */}
            <div className="flex gap-3">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
                    page === i
                      ? "bg-[#63C7FF] scale-125"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-6"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-[1200px] w-full animate-in fade-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/images/${selectedImage.optimized_seo_name}`}
              alt={selectedImage.recommended_alt_text}
              className="w-full h-full object-contain rounded-2xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 rounded-full bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20 transition"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

