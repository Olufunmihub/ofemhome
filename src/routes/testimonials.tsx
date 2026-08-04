import { createFileRoute } from "@tanstack/react-router";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/site-data";
import { PageHeader, ConsultationCta } from "@/components/site/Sections";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — OFEM HOME Lagos" },
      {
        name: "description",
        content:
          "What Lagos homeowners and business owners say about working with OFEM HOME on interiors, exteriors and custom furniture.",
      },
      { property: "og:title", content: "Client Testimonials — OFEM HOME Lagos" },
      {
        property: "og:description",
        content: "Reviews from OFEM HOME clients across Lekki, Ikoyi and Victoria Island.",
      },
    ],
  }),
  component: Testimonials,
});

function Testimonials() {
  return (
    <>
      <PageHeader
        eyebrow="Social proof"
        title="What Our Clients Say"
        subtitle="Honest words from the people whose homes and offices we've transformed."
      />

      <section className="container-page section-y">
        <div className="mx-auto mb-12 max-w-md rounded-lg bg-surface p-8 text-center">
          <p className="font-display text-5xl font-bold text-primary">4.9</p>
          <div className="mt-3 flex justify-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
            Average rating across completed projects
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={15} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="quote-serif text-base">“{t.quote}”</p>
              <p className="mt-5 font-display text-base font-semibold text-primary">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.service}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCta
        title="Want Results Like These?"
        text="Book a free consultation and let's talk about your space."
      />
    </>
  );
}
