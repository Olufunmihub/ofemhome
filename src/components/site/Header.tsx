import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { business, whatsappLink } from "@/lib/site-data";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border bg-background transition-shadow duration-300 ${
        scrolled ? "shadow-[var(--shadow-soft)]" : ""
      }`}
    >
      <div className="container-page flex h-[60px] items-center justify-between lg:h-[70px]">
        <Link to="/" className="flex flex-col leading-none" onClick={() => setOpen(false)}>
          <span className="font-display text-lg font-bold tracking-tight text-primary">
            {business.name}
          </span>
          <span className="text-[11px] text-muted-foreground">{business.tagline}</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="text-sm font-medium tracking-wide text-foreground transition-colors duration-300 hover:text-primary"
              activeProps={{
                className: "text-primary border-b-2 border-accent pb-1",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden rounded-sm bg-primary px-7 py-3 font-display text-[13px] font-semibold tracking-wider text-primary-foreground transition-all duration-300 hover:bg-primary-hover hover:shadow-[var(--shadow-lift)] lg:inline-flex"
          >
            Get Your Quote
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center text-primary lg:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              onClick={() => setOpen(false)}
              className="block border-l-[3px] border-transparent py-3 pl-4 text-base font-medium text-foreground"
              activeProps={{ className: "border-accent text-primary" }}
            >
              {item.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block rounded-sm bg-primary px-6 py-3 text-center font-display text-sm font-semibold tracking-wider text-primary-foreground"
          >
            Chat on WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
