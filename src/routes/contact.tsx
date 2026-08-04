import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import { business, whatsappLink } from "@/lib/site-data";
import { PageHeader } from "@/components/site/Sections";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact OFEM HOME — Book a Free Design Consultation in Lagos" },
      {
        name: "description",
        content:
          "Reach OFEM HOME by WhatsApp, phone, email or the inquiry form. Free consultations for Lagos interior, exterior and furniture projects.",
      },
      { property: "og:title", content: "Contact OFEM HOME — Free Design Consultation" },
      {
        property: "og:description",
        content: "WhatsApp, call, email or send an inquiry — we reply within 24 hours.",
      },
    ],
  }),
  component: Contact,
});

const methods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    detail: business.whatsappDisplay,
    action: "Open WhatsApp",
    href: whatsappLink(),
  },
  {
    icon: Phone,
    title: "Phone",
    detail: business.phoneDisplay,
    action: "Call Now",
    href: `tel:${business.phone}`,
  },
  { icon: Mail, title: "Email", detail: business.email, action: "Email Us", href: `mailto:${business.email}` },
  {
    icon: MapPin,
    title: "Studio",
    detail: business.address,
    action: "Get Directions",
    href: `https://maps.google.com/?q=${encodeURIComponent(business.address)}`,
  },
];

const serviceOptions = ["Interior Design", "Exterior Decoration", "Custom Furniture", "Not sure yet"];
const budgetOptions = ["Under ₦1m", "₦1m – ₦5m", "₦5m – ₦15m", "₦15m+", "Prefer to discuss"];
const timelineOptions = ["Immediately", "1–3 months", "3–6 months", "Just exploring"];

const fieldClass =
  "w-full rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors duration-300 focus:border-accent";
const labelClass = "mb-2 block text-sm font-medium tracking-wide text-primary";

function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const message = [
      "New inquiry from the OFEM HOME website",
      "",
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone")}`,
      `Service: ${data.get("service")}`,
      `Location: ${data.get("location")}`,
      `Budget: ${data.get("budget")}`,
      `Timeline: ${data.get("timeline")}`,
      `Preferred contact: ${data.get("preferred")}`,
      "",
      `Details: ${data.get("details")}`,
    ].join("\n");

    window.open(whatsappLink(message), "_blank", "noreferrer");
    setSent(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="Let's Talk About Your Space"
        subtitle="Free consultations, honest advice and a reply within 24 hours — usually much sooner on WhatsApp."
      />

      <section className="container-page section-y">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {methods.map((m) => (
            <a
              key={m.title}
              href={m.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
            >
              <m.icon size={36} className="mx-auto mb-4 text-accent" strokeWidth={1.25} />
              <h2 className="text-lg">{m.title}</h2>
              <p className="mt-2 text-sm break-words text-muted-foreground">{m.detail}</p>
              <span className="mt-4 inline-block text-[13px] font-medium text-accent">
                {m.action}
              </span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="container-page section-y grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-lg bg-card p-6 shadow-[var(--shadow-card)] lg:p-10">
            <h2 className="text-2xl lg:text-3xl">Send an Inquiry</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this in and we'll open WhatsApp with your details prepared, so nothing gets lost.
            </p>

            <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className={labelClass} htmlFor="name">
                    Full name *
                  </label>
                  <input id="name" name="name" required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="email">
                    Email address *
                  </label>
                  <input id="email" name="email" type="email" required className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    pattern="[0-9+\-\s()]{7,}"
                    placeholder="+234 ..."
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="location">
                    Project location
                  </label>
                  <input id="location" name="location" placeholder="e.g. Lekki, Lagos" className={fieldClass} />
                </div>
                <div>
                  <label className={labelClass} htmlFor="service">
                    Service needed *
                  </label>
                  <select id="service" name="service" required className={fieldClass}>
                    {serviceOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="budget">
                    Budget range
                  </label>
                  <select id="budget" name="budget" className={fieldClass}>
                    {budgetOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="timeline">
                    Timeline
                  </label>
                  <select id="timeline" name="timeline" className={fieldClass}>
                    {timelineOptions.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className={labelClass} htmlFor="preferred">
                    Preferred contact
                  </label>
                  <select id="preferred" name="preferred" defaultValue="WhatsApp" className={fieldClass}>
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                    <option>Email</option>
                  </select>
                </div>
              </div>

              <div>
                <label className={labelClass} htmlFor="details">
                  Tell us about your project *
                </label>
                <textarea id="details" name="details" required rows={5} className={fieldClass} />
              </div>

              <label className="flex items-start gap-3 text-sm text-muted-foreground">
                <input type="checkbox" required className="mt-1 accent-[var(--color-primary)]" />
                I agree to be contacted about my inquiry via WhatsApp, phone or email.
              </label>

              <button
                type="submit"
                className="w-full rounded-sm bg-primary px-8 py-3.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[var(--shadow-lift)]"
              >
                Send Inquiry
              </button>

              {sent && (
                <p className="rounded-sm bg-accent-soft px-4 py-3 text-sm text-primary">
                  Thanks! WhatsApp should have opened with your details. If it didn't, message us
                  directly at {business.whatsappDisplay}.
                </p>
              )}
            </form>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg bg-card p-8 shadow-[var(--shadow-soft)]">
              <h2 className="text-xl">Response times</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                WhatsApp: usually within a few hours. Email and form inquiries: within 24 hours on
                working days. For urgent requests, WhatsApp is fastest.
              </p>
              <p className="mt-4 text-sm font-medium text-primary">{business.hours}</p>
            </div>
            <div className="overflow-hidden rounded-lg shadow-[var(--shadow-soft)]">
              <iframe
                title="OFEM HOME studio location in Lagos"
                src={`https://www.google.com/maps?q=${encodeURIComponent(business.address)}&output=embed`}
                className="h-80 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
