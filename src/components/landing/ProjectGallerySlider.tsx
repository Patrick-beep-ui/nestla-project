/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Immersive portfolio showcase — storytelling-driven visual presentation
 * SEO Strategy: Images dynamically mapped from centralized JSON metadata.
 * Controller Pattern: Clean array selects images by original_name only.
 */

import React, { useState, useCallback, useEffect, useMemo } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import images from "./../../data/images.json";

const selectedImages = [
  "nestla-industrial-modern-kitchen-walnut-finish.webp",
  "nestla-custom-blue-cabinetry-living-room-design.webp",
  "nestla-scandinavian-kitchen-wood-cabinetry.webp",
  "nestla-white-oak-kitchen-wicker-lighting.webp",
  "nestla-open-concept-living-luxury-lighting.webp",
  "luxury-craftsman-home-prep-nestla-listing.webp",
  "image11.jpg",
  "nestla-open-concept-kitchen-vaulted-ceilings.webp",
  "image15.jpg",
  "image22.jpg",
];

export default function ProjectGallerySlider() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = useMemo(() => {
    return selectedImages
      .map((originalName) =>
        images.images.find(
          (img) => img.original_name === originalName || img.optimized_seo_name === originalName
        )
      )
      .filter(Boolean);
  }, []);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    loop: true,
    skipSnaps: false,
    containScroll: false,
    watchDrag: true,
  });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 bg-background" ref={sectionRef}>
      <div
        className={`transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {/* Header */}
        <div className="container mx-auto px-6 mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
              Featured Homes
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight md:text-5xl">
              A Closer Look
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, i) => (
              <div
                key={slide.optimized_seo_name}
                className="relative flex-[0_0_80%] sm:flex-[0_0_55%] lg:flex-[0_0_42%] min-w-0 px-3"
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-border/30 transition-all duration-500 ${
                    i === selectedIndex
                      ? "opacity-100 scale-100"
                      : "opacity-60 scale-[0.97]"
                  }`}
                >
                  <div className="aspect-[1/1] sm:aspect-[4/3] overflow-hidden">
                    <img
                      src={`/images/${slide.optimized_seo_name}`}
                      alt={slide.recommended_alt_text}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  {/* Subtle bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent p-6 pt-16" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.optimized_seo_name}
              onClick={() => emblaApi?.scrollTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === selectedIndex
                  ? "w-6 bg-primary"
                  : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
