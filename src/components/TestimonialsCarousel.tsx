import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  business: string;
  businessType: string;
  rating: number;
  projectType: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Ovations transformed our storefront completely. The new signage increased foot traffic by 40% in the first month. Everyone in Mthatha knows our shop now. Best investment we ever made.",
    author: "Sipho Mthembu",
    business: "Mthatha Fashion Hub",
    businessType: "Retail Store",
    rating: 5,
    projectType: "Complete Rebrand & Signage",
  },
  {
    id: "2",
    quote: "As a law firm, we needed signage that conveyed trust and professionalism. Ovations delivered beyond expectations. The illuminated signs look absolutely stunning at night.",
    author: "Advocate Nkosi",
    business: "Eastern Cape Legal Associates",
    businessType: "Law Firm",
    rating: 5,
    projectType: "Professional Signage",
  },
  {
    id: "3",
    quote: "Best branding company in Mthatha, hands down. They branded our entire fleet of 12 vehicles. Now every delivery is a moving advertisement. Our brand recognition has doubled.",
    author: "Thabo Khumalo",
    business: "Swift Logistics Mthatha",
    businessType: "Logistics Company",
    rating: 5,
    projectType: "Fleet Vehicle Branding",
  },
  {
    id: "4",
    quote: "From logo to signage to menus — they handled everything for our restaurant launch. The attention to detail was incredible. We opened to a packed house thanks to their work.",
    author: "Nomvula Dlamini",
    business: "Umtata Grill House",
    businessType: "Restaurant",
    rating: 5,
    projectType: "Full Launch Package",
  },
  {
    id: "5",
    quote: "I was skeptical at first, but Ovations proved me wrong. They delivered our shop signage ahead of schedule and the quality exceeded what I imagined. Truly professional.",
    author: "Mandla Xaba",
    business: "Xaba's Auto Parts",
    businessType: "Auto Parts Store",
    rating: 4,
    projectType: "Shop Signage",
  },
  {
    id: "6",
    quote: "The team at Ovations understands local business. They knew exactly what would work for our pharmacy. Now patients find us easily and our brand looks premium.",
    author: "Dr. Ayanda Mkhize",
    business: "Wellness Pharmacy Mthatha",
    businessType: "Pharmacy",
    rating: 5,
    projectType: "Brand Identity & Signage",
  },
];

const TestimonialsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "center" },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[180px]" />
      </div>

      <div className="container px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-4 mb-6">
            Real Stories from{" "}
            <span className="text-gradient-gold">Real Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Don't just take our word for it. Here's what Mthatha's business
            owners say about working with Ovations.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-none w-full md:w-[80%] lg:w-[60%] px-4"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative p-8 md:p-10 rounded-2xl bg-card border border-border"
                  >
                    {/* Quote icon */}
                    <Quote className="absolute top-6 right-6 w-12 h-12 text-primary/10" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < testimonial.rating
                              ? "text-primary fill-primary"
                              : "text-muted-foreground"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author info */}
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-display font-semibold text-foreground">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-primary">
                          {testimonial.business}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {testimonial.businessType} • {testimonial.projectType}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="dark"
              size="icon"
              onClick={scrollPrev}
              className="rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary w-6"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="dark"
              size="icon"
              onClick={scrollNext}
              className="rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-16 mt-16 p-8 rounded-2xl bg-charcoal-light border border-border"
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < 4 ? "text-primary fill-primary" : "text-primary/30"
                  }`}
                />
              ))}
            </div>
            <p className="text-2xl font-display font-bold text-primary">4.3</p>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">
              Years
            </p>
            <p className="text-sm text-muted-foreground">of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">
              100+
            </p>
            <p className="text-sm text-muted-foreground">Businesses Branded</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-display font-bold text-foreground">
              Mthatha
            </p>
            <p className="text-sm text-muted-foreground">Based & Proud</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
