import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, [paused]);

  const active = testimonials[index] ?? testimonials[0]!;

  return (
    <div
      className="relative mx-auto max-w-3xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <article className="rounded-lg bg-card px-6 py-10 text-center shadow-[var(--shadow-lift)] lg:px-12">
        <div className="mb-5 flex justify-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={16} className="fill-accent text-accent" />
          ))}
        </div>
        <p className="quote-serif text-base text-foreground lg:text-lg">“{active.quote}”</p>
        <p className="mt-6 font-display text-base font-semibold text-primary">{active.name}</p>
        <p className="text-xs text-muted-foreground">{active.service}</p>
      </article>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          aria-label="Previous testimonial"
          onClick={() => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Show testimonial ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-2 w-2 rounded-full transition-colors ${
                i === index ? "bg-accent" : "bg-primary-foreground/30"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          aria-label="Next testimonial"
          onClick={() => setIndex((i) => (i + 1) % testimonials.length)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}
