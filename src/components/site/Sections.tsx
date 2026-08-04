import { Link } from "@tanstack/react-router";
import { whatsappLink } from "@/lib/site-data";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "light",
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} mb-12`}
    >
      {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
      <h2
        className={`text-[28px] lg:text-[42px] ${tone === "dark" ? "text-primary-foreground" : ""}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 text-sm lg:text-base ${
            tone === "dark" ? "text-primary-foreground/75" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <section className="bg-primary">
      <div className="container-page py-16 text-center lg:py-20">
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h1 className="text-[36px] text-primary-foreground lg:text-[52px]">{title}</h1>
        <p className="mx-auto mt-4 max-w-2xl text-sm text-primary-foreground/75 lg:text-base">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

export function ConsultationCta({
  title = "Ready to Transform Your Space?",
  text = "Book a free consultation. We'll discuss your space, your budget and what's possible — no obligation.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-surface">
      <div className="container-page section-y text-center">
        <h2 className="mx-auto max-w-2xl text-[28px] lg:text-[42px]">{title}</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground lg:text-base">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="rounded-sm bg-primary px-9 py-3.5 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-[var(--shadow-lift)]"
          >
            Chat on WhatsApp
          </a>
          <Link
            to="/contact"
            className="rounded-sm border-2 border-accent px-9 py-3 font-display text-sm font-semibold tracking-wider text-primary transition-colors duration-300 hover:bg-accent-soft"
          >
            Book Free Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
