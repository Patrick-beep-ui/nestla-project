/**
 * SECTION DOCUMENTATION
 * ─────────────────────
 * Primary Use Case: Immersive portfolio showcase — storytelling-driven visual presentation
 * Best Funnel Position: Mid (after grid gallery, before testimonials or founder)
 * Why This Section Works: Large carousel with partial prev/next previews creates a luxury,
 *   editorial browsing experience. Controlled navigation prevents scroll-jacking frustration.
 * Alternative Usage: Could present neighborhoods, case studies, before/after transformations,
 *   or partner highlights with a premium visual cadence.
 */

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import home1 from "@/assets/gallery/home-1.jpg";
import home2 from "@/assets/gallery/home-2.jpg";
import home3 from "@/assets/gallery/home-3.jpg";
import home4 from "@/assets/gallery/home-4.jpg";
import home5 from "@/assets/gallery/home-5.jpg";
import home6 from "@/assets/gallery/home-6.jpg";

const slides = [
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

export default function ProjectGallerySlider() {
  const { ref: sectionRef, isVisible } = useScrollReveal();
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 bg-background" ref={sectionRef}>
      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
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
                key={i}
                className="relative flex-[0_0_80%] sm:flex-[0_0_55%] lg:flex-[0_0_42%] min-w-0 px-3"
              >
                <div
                  className={`group relative overflow-hidden rounded-2xl border border-border/30 transition-all duration-500 ${
                    i === selectedIndex ? "opacity-100 scale-100" : "opacity-60 scale-[0.97]"
                  }`}
                >
                  <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden">
                    <img
                      src={slide.image}
                      alt={`Home in ${slide.location}`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>

                  {/* Tag */}
                  <div className="absolute left-4 top-4">
                    <span className="rounded-full bg-background/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary border border-border/40">
                      {slide.tag}
                    </span>
                  </div>

                  {/* Bottom overlay */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/60 to-transparent p-6 pt-16">
                    <p className="text-base font-semibold text-foreground">
                      {slide.location}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {slide.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
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
