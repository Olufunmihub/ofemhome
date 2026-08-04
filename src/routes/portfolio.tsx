import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { projects, type Project, type ServiceCategory } from "@/lib/site-data";
import { PageHeader, ConsultationCta } from "@/components/site/Sections";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — OFEM HOME Lagos Design Projects" },
      {
        name: "description",
        content:
          "Browse completed OFEM HOME projects across interior design, exterior decoration and custom furniture in Lagos.",
      },
      { property: "og:title", content: "Portfolio — OFEM HOME Lagos Design Projects" },
      {
        property: "og:description",
        content: "Interior, exterior and bespoke furniture transformations across Lagos.",
      },
    ],
  }),
  component: Portfolio,
});

const filters = ["All", "Interior Design", "Exterior", "Furniture"] as const;

function Portfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === (filter as ServiceCategory));

  return (
    <>
      <PageHeader
        eyebrow="Our work"
        title="Portfolio"
        subtitle="Real Lagos spaces, transformed. Filter by service to see the work most relevant to your project."
      />

      <section className="container-page section-y">
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-surface text-foreground hover:bg-accent-soft"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => (
            <button
              key={p.slug}
              type="button"
              onClick={() => setActive(p)}
              className="group overflow-hidden rounded-lg border border-border bg-card text-left shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
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
                <h2 className="mt-3 text-lg">{p.title}</h2>
                <p className="text-[13px] text-muted-foreground">{p.location}</p>
                <p className="mt-3 text-sm leading-relaxed">{p.brief}</p>
                <span className="mt-3 inline-block text-[13px] font-medium text-accent">
                  View Full Project
                </span>
              </div>
            </button>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="text-center text-sm text-muted-foreground">
            No projects in this category yet.
          </p>
        )}
      </section>

      {active && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center bg-primary/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-lg bg-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img
                src={active.image}
                alt={active.title}
                width={1200}
                height={900}
                className="h-64 w-full object-cover lg:h-96"
              />
              <button
                type="button"
                aria-label="Close project details"
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background text-primary"
              >
                <X size={20} />
              </button>
            </div>
            <div className="p-6 lg:p-8">
              <span className="eyebrow">{active.category}</span>
              <h2 className="mt-2 text-2xl lg:text-3xl">{active.title}</h2>
              <p className="text-sm text-muted-foreground">{active.location}</p>
              <p className="mt-4 text-sm leading-relaxed">{active.brief}</p>
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="eyebrow">Scope</dt>
                  <dd className="mt-2 text-sm">{active.scope.join(" · ")}</dd>
                </div>
                <div>
                  <dt className="eyebrow">Duration</dt>
                  <dd className="mt-2 text-sm">{active.duration}</dd>
                </div>
              </dl>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-sm bg-primary px-7 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
              >
                Start a similar project
              </Link>
            </div>
          </div>
        </div>
      )}

      <ConsultationCta title="Like What You See?" text="Let's design something like this for your space." />
    </>
  );
}
