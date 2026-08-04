import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import aboutStudio from "@/assets/about-studio.jpg";
import { stats, whyOfem } from "@/lib/site-data";
import { PageHeader, ConsultationCta, SectionHeading } from "@/components/site/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About OFEM HOME — Lagos Interior & Exterior Design Studio" },
      {
        name: "description",
        content:
          "Eight years transforming Lagos homes and offices with interior design, exterior decoration and custom furniture built in-house.",
      },
      { property: "og:title", content: "About OFEM HOME — Lagos Design Studio" },
      {
        property: "og:description",
        content: "Our story, values and the way we run projects from concept to completion.",
      },
    ],
  }),
  component: About,
});

const values = [
  { title: "Craftsmanship", text: "Details are checked twice. Finishes are chosen to last, not just to photograph well." },
  { title: "Transparency", text: "Itemised quotes, written timelines and updates you don't have to chase." },
  { title: "Accessibility", text: "Luxury design should be reachable. We design to real budgets without cutting corners." },
  { title: "Accountability", text: "One team owns design, build and install — so there's never a blame handoff." },
];

function About() {
  return (
    <>
      <PageHeader
        eyebrow="Our story"
        title="Design That Respects How You Live"
        subtitle="OFEM HOME of Interior & Exterior Decor is a Lagos studio built to remove the fragmentation of hiring three different vendors."
      />

      <section className="container-page section-y grid items-center gap-12 lg:grid-cols-2">
        <img
          src={aboutStudio}
          alt="OFEM HOME studio desk with fabric swatches, timber samples and drawings"
          loading="lazy"
          width={1200}
          height={1000}
          className="rounded-lg object-cover shadow-[var(--shadow-card)]"
        />
        <div>
          <p className="eyebrow mb-3">Who we are</p>
          <h2 className="text-[28px] lg:text-[38px]">One studio, three disciplines</h2>
          <p className="mt-4 text-sm leading-relaxed lg:text-base">
            We started with a simple frustration: clients were hiring an interior designer, a
            landscaper and a carpenter, then spending months coordinating between them. So we built
            all three capabilities in-house — design, exterior work and a furniture workshop.
          </p>
          <p className="mt-4 text-sm leading-relaxed lg:text-base">
            Eight years and hundreds of projects later, that's still the difference. One
            conversation, one schedule, one team responsible for the result — whether it's a single
            bedroom in Ajah or a full office fit-out on Victoria Island.
          </p>
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y">
          <SectionHeading eyebrow="What we stand for" title="Mission & Values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <article key={v.title} className="rounded-lg bg-card p-8 shadow-[var(--shadow-soft)]">
                <Check size={28} className="mb-4 text-accent" strokeWidth={1.5} />
                <h3 className="mb-2 text-lg">{v.title}</h3>
                <p className="text-sm leading-relaxed">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container-page section-y grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-5xl font-bold text-accent">{s.value}</p>
              <p className="mt-2 text-sm text-primary-foreground/75">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page section-y">
        <SectionHeading eyebrow="The difference" title="Why Clients Stay With Us" />
        <div className="grid gap-6 md:grid-cols-2">
          {whyOfem.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-border bg-card p-8 shadow-[var(--shadow-soft)]"
            >
              <h3 className="mb-3 text-lg">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <ConsultationCta />
    </>
  );
}
