import { createFileRoute, Link } from "@tanstack/react-router";
import { Layers, Gem, ClipboardCheck, Award } from "lucide-react";
import heroImage from "@/assets/hero-interior.jpg";
import { projects, services, stats, whyOfem, whatsappLink } from "@/lib/site-data";
import { SectionHeading, ConsultationCta } from "@/components/site/Sections";
import { TestimonialCarousel } from "@/components/site/TestimonialCarousel";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OFEM HOME — Luxury Interior & Exterior Design in Lagos" },
      {
        name: "description",
        content:
          "Interior design, exterior decoration and custom furniture for Lagos homes and offices. See our transformations and book a free consultation.",
      },
      { property: "og:title", content: "OFEM HOME — Luxury Interior & Exterior Design in Lagos" },
      {
        property: "og:description",
        content:
          "Three services under one roof: interior design, exterior decoration and bespoke furniture in Lagos.",
      },
    ],
  }),
  component: Index,
});

const featureIcons = [Layers, Gem, ClipboardCheck, Award];

function Index() {
  return (
    <>
      <section className="relative flex min-h-[480px] items-center justify-center overflow-hidden lg:min-h-[600px]">
        <img
          src={heroImage}
          alt="Luxury Lagos living room designed by OFEM HOME"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/55 to-primary/45" />
        <div className="container-page relative py-20 text-center">
          <h1 className="mx-auto max-w-3xl text-[36px] text-primary-foreground lg:text-[56px]">
            Transform Your Space Into Luxury
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/85 lg:text-lg">
            Professional interior design, exterior decoration and custom furniture for your Lagos
            home.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              to="/portfolio"
              className="rounded-sm bg-accent px-9 py-3.5 font-display text-sm font-semibold tracking-wider text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-[var(--shadow-gold)]"
            >
              View Portfolio
            </Link>
            <Link
              to="/contact"
              className="rounded-sm border-2 border-primary-foreground px-9 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-colors duration-300 hover:bg-primary-foreground/10"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Latest Transformations"
          subtitle="Projects showcasing the full range of our expertise across interiors, exteriors and bespoke furniture."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Link
              key={p.slug}
              to="/portfolio"
              className="group overflow-hidden rounded-lg border border-border bg-card shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="h-[280px] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <span className="inline-block rounded-full bg-surface px-3 py-1.5 text-[11px] font-medium tracking-wide text-primary">
                  {p.category}
                </span>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="text-[13px] text-muted-foreground">{p.location}</p>
                <p className="mt-3 text-sm leading-relaxed text-foreground">{p.brief}</p>
                <span className="mt-3 inline-block text-[13px] font-medium text-accent group-hover:underline">
                  View Full Project
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading eyebrow="Why us" title="Why Choose OFEM Home" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyOfem.map((item, i) => {
              const Icon = featureIcons[i] ?? Layers;
              return (
                <article
                  key={item.title}
                  className="rounded-lg bg-card p-8 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
                >
                  <Icon size={40} className="mb-4 text-accent" strokeWidth={1.25} />
                  <h3 className="mb-3 text-lg">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-foreground">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading eyebrow="Services" title="Our Expertise" />
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services"
              className="group overflow-hidden rounded-lg bg-card shadow-[var(--shadow-card)] transition-all duration-300 hover:shadow-[var(--shadow-lift)]"
            >
              <div className="relative h-[240px] overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/85 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-2xl text-primary-foreground">{s.title}</h3>
                  <p className="mt-1 text-[13px] text-primary-foreground/80">{s.descriptor}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm leading-relaxed text-foreground">{s.summary}</p>
                <span className="mt-4 inline-block text-[13px] font-medium text-accent group-hover:underline">
                  {s.title} Services
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-page section-y">
          <SectionHeading eyebrow="Testimonials" title="What Our Clients Say" tone="dark" />
          <TestimonialCarousel />
        </div>
      </section>

      <section className="container-page section-y">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-bold text-primary">{s.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-xl text-center text-sm text-muted-foreground">
          Prefer to talk first?{" "}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="font-medium text-accent hover:underline"
          >
            Message us on WhatsApp
          </a>{" "}
          — we usually reply within 24 hours.
        </p>
      </section>

      <ConsultationCta />
    </>
  );
}
