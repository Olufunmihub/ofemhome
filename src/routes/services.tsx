import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { services } from "@/lib/site-data";
import { PageHeader, ConsultationCta, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Interior, Exterior & Custom Furniture | OFEM HOME" },
      {
        name: "description",
        content:
          "Interior design, exterior decoration and bespoke furniture in Lagos — what's included, how we work and what to expect.",
      },
      { property: "og:title", content: "Services — Interior, Exterior & Custom Furniture" },
      {
        property: "og:description",
        content: "Three complementary services delivered in-house by one Lagos team.",
      },
    ],
  }),
  component: Services,
});

const processSteps = [
  { step: "01", title: "Consultation", text: "We visit or video call, understand your space, taste and budget." },
  { step: "02", title: "Concept & Quote", text: "Mood boards, layouts and an itemised proposal you can approve." },
  { step: "03", title: "Build & Source", text: "Fabrication, procurement and site work managed by our own team." },
  { step: "04", title: "Install & Handover", text: "Installation, styling, snagging and a one-year workmanship guarantee." },
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="What we do"
        title="Our Services"
        subtitle="Three services, one accountable team. Combine them or take them one at a time."
      />

      {services.map((s, i) => (
        <section key={s.slug} className={i % 2 === 1 ? "bg-surface" : ""}>
          <div className="container-page section-y grid items-center gap-10 lg:grid-cols-2">
            <div className={i % 2 === 1 ? "lg:order-2" : ""}>
              <img
                src={s.image}
                alt={s.title}
                loading="lazy"
                width={1200}
                height={900}
                className="h-full w-full rounded-lg object-cover shadow-[var(--shadow-card)]"
              />
            </div>
            <div>
              <p className="eyebrow mb-3">{s.descriptor}</p>
              <h2 className="text-[28px] lg:text-[38px]">{s.title}</h2>
              <p className="mt-4 text-sm leading-relaxed lg:text-base">{s.summary}</p>
              <ul className="mt-6 space-y-3">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <Check size={18} className="mt-0.5 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="mt-8 inline-flex rounded-sm bg-primary px-7 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-colors duration-300 hover:bg-primary-hover"
              >
                Request a quote
              </Link>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-primary">
        <div className="container-page section-y">
          <SectionHeading
            eyebrow="How it works"
            title="From Concept to Completion"
            tone="dark"
            subtitle="A clear four-step process with transparent timelines and regular updates."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.step} className="rounded-lg bg-card p-6 shadow-[var(--shadow-card)]">
                <span className="font-display text-3xl font-bold text-accent">{p.step}</span>
                <h3 className="mt-3 text-lg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ConsultationCta title="Not Sure Which Service You Need?" text="Tell us about your space and we'll advise honestly — even if that means a smaller project." />
    </>
  );
}
