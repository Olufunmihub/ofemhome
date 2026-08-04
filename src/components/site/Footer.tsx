import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { business, whatsappLink } from "@/lib/site-data";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-xl font-bold">{business.name}</span>
          <p className="mt-3 max-w-xs text-sm text-primary-foreground/75">
            Interior design, exterior decoration and custom furniture for Lagos homes and
            workspaces — all under one roof.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: business.instagram, icon: Instagram, label: "Instagram" },
              { href: business.facebook, icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/30 bg-accent-soft text-accent transition-colors duration-300 hover:bg-accent hover:text-accent-foreground"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wider text-primary-foreground uppercase">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-primary-foreground/75 transition-colors duration-300 hover:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wider text-primary-foreground uppercase">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/75">
            <li>
              <a
                className="flex items-start gap-2 hover:text-accent"
                href={whatsappLink()}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle size={16} className="mt-1 shrink-0" />
                {business.whatsappDisplay}
              </a>
            </li>
            <li>
              <a className="flex items-start gap-2 hover:text-accent" href={`tel:${business.phone}`}>
                <Phone size={16} className="mt-1 shrink-0" />
                {business.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                className="flex items-start gap-2 hover:text-accent"
                href={`mailto:${business.email}`}
              >
                <Mail size={16} className="mt-1 shrink-0" />
                {business.email}
              </a>
            </li>
            <li>
              <a
                className="flex items-start gap-2 hover:text-accent"
                href={`https://maps.google.com/?q=${encodeURIComponent(business.address)}`}
                target="_blank"
                rel="noreferrer"
              >
                <MapPin size={16} className="mt-1 shrink-0" />
                {business.address}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold tracking-wider text-primary-foreground uppercase">
            Studio Hours
          </h3>
          <p className="mt-4 text-sm text-primary-foreground/75">{business.hours}</p>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-sm bg-accent px-6 py-3 font-display text-[13px] font-semibold tracking-wider text-accent-foreground transition-all duration-300 hover:bg-accent-hover hover:shadow-[var(--shadow-gold)]"
          >
            Start a project
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-2 py-6 text-xs text-primary-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name} of Interior & Exterior Decor. All rights
            reserved.
          </p>
          <p>Lagos, Nigeria</p>
        </div>
      </div>
    </footer>
  );
}
