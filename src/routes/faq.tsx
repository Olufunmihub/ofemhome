import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqGroups } from "@/lib/site-data";
import { PageHeader, ConsultationCta } from "@/components/site/Sections";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Pricing, Timelines & Process | OFEM HOME" },
      {
        name: "description",
        content:
          "Answers on OFEM HOME services, project timelines, pricing, payment and warranty for interior and exterior design in Lagos.",
      },
      { property: "og:title", content: "FAQ — Pricing, Timelines & Process | OFEM HOME" },
      {
        property: "og:description",
        content: "Common questions about working with OFEM HOME in Lagos.",
      },
    ],
  }),
  component: Faq;
});

function Faq() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <>
      <PageHeader
        eyebrow="Answers"
        title="Frequently Asked Questions"
        subtitle="Everything clients usually ask before starting a project. Still unsure? Message us on WhatsApp."
      />

      <section className="container-page section-y">
        <div className="mx-auto max-w-3xl space-y-12">
          {faqGroups.map((group) => (
            <div key={group.title}>
              <h2 className="mb-5 text-xl lg:text-2xl">{group.title}</h2>
              <div className="divide-y divide-border rounded-lg border border-border bg-card">
                {group.items.map((item) => {
                  const id = `${group.title}-${item.q}`;
                  const isOpen = open === id;
                  return (
                    <div key={item.q}>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setOpen(isOpen ? null : id)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <span className="font-display text-base font-semibold text-primary">
                          {item.q}
                        </span>
                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-accent transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isOpen && (
                        <p className="px-6 pb-6 text-sm leading-relaxed text-foreground">
                          {item.a}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <ConsultationCta
        title="Still Have Questions?"
        text="Ask us directly — no sales pressure, just straight answers."
      />
    </>
  );
}
