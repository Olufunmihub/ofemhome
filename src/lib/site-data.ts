import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const business = {
  name: "OFEM HOME",
  tagline: "Interior & Exterior Design",
  whatsapp: "2348000000000",
  whatsappDisplay: "+234 800 000 0000",
  phone: "+2348000000000",
  phoneDisplay: "+234 800 000 0000",
  email: "hello@ofemhome.com",
  address: "Lekki Phase 1, Lagos, Nigeria",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  hours: "Mon – Sat, 9:00am – 6:00pm (WAT)",
};

export const whatsappLink = (message = "Hello OFEM HOME, I'd like to discuss a design project.") =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(message)}`;

export type ServiceCategory = "Interior Design" | "Exterior" | "Furniture";

export type Project = {
  slug: string;
  title: string;
  category: ServiceCategory;
  location: string;
  brief: string;
  image: string;
  scope: string[];
  duration: string;
};

export const projects: Project[] = [
  {
    slug: "lekki-penthouse",
    title: "Lekki Penthouse Living",
    category: "Interior Design",
    location: "Lekki Phase 1 · Residential",
    brief:
      "A tired open-plan lounge reimagined with layered lighting, bespoke seating and a warm neutral palette.",
    image: project1,
    scope: ["Space planning", "Custom joinery", "Lighting design", "Styling"],
    duration: "10 weeks",
  },
  {
    slug: "ikoyi-facade",
    title: "Ikoyi Facade Refresh",
    category: "Exterior",
    location: "Ikoyi · Residential",
    brief:
      "Facade cladding, landscape planting and warm architectural lighting that transformed the street presence.",
    image: project2,
    scope: ["Facade treatment", "Landscaping", "Exterior lighting"],
    duration: "8 weeks",
  },
  {
    slug: "walnut-dining-suite",
    title: "Walnut Dining Suite",
    category: "Furniture",
    location: "Victoria Island · Residential",
    brief:
      "A ten-seat solid walnut table and upholstered chairs, designed, built and installed by our workshop.",
    image: project3,
    scope: ["Bespoke design", "Fabrication", "Upholstery", "Installation"],
    duration: "6 weeks",
  },
  {
    slug: "emerald-kitchen",
    title: "Emerald Kitchen",
    category: "Interior Design",
    location: "Ajah · Residential",
    brief:
      "Deep green cabinetry, brass detailing and stone surfaces built around how this family actually cooks.",
    image: project4,
    scope: ["Kitchen design", "Cabinetry", "Stone work", "Lighting"],
    duration: "9 weeks",
  },
  {
    slug: "terrace-garden-lounge",
    title: "Terrace Garden Lounge",
    category: "Exterior",
    location: "Banana Island · Residential",
    brief:
      "An unused terrace turned into an evening entertaining space with weatherproof seating and soft lighting.",
    image: project5,
    scope: ["Outdoor furniture", "Planting", "Fire feature", "Lighting"],
    duration: "5 weeks",
  },
  {
    slug: "executive-office-suite",
    title: "Executive Office Suite",
    category: "Interior Design",
    location: "Victoria Island · Commercial",
    brief:
      "A boardroom and director's office with full-height joinery, acoustic comfort and a calm, confident tone.",
    image: project6,
    scope: ["Commercial fit-out", "Built-in joinery", "Acoustics", "Furniture"],
    duration: "12 weeks",
  },
];

export const services = [
  {
    slug: "interior-design",
    title: "Interior Design",
    descriptor: "Create spaces that inspire",
    summary:
      "From space planning to final styling. We design interiors that are beautiful, functional and uniquely yours.",
    image: project1,
    includes: [
      "Consultation & space assessment",
      "Concept boards and 3D visuals",
      "Material, finish and colour selection",
      "Furniture sourcing and custom pieces",
      "Lighting design and installation",
      "Final styling and handover",
    ],
  },
  {
    slug: "exterior-decoration",
    title: "Exterior Decoration",
    descriptor: "Transform your outdoor spaces",
    summary:
      "Landscaping, facades, outdoor furniture and lighting design. Your exterior is the first impression.",
    image: project2,
    includes: [
      "Facade treatment and finishes",
      "Landscape and planting design",
      "Outdoor furniture and shading",
      "Architectural and garden lighting",
      "Paving, decking and water features",
      "Maintenance guidance",
    ],
  },
  {
    slug: "custom-furniture",
    title: "Custom Furniture",
    descriptor: "Bespoke craftsmanship",
    summary:
      "Designed and built to your specifications. Quality materials, expert craftsmanship, perfect fit.",
    image: project3,
    includes: [
      "Measured survey and technical drawings",
      "Timber, stone and fabric selection",
      "In-house fabrication",
      "Upholstery and finishing",
      "Delivery and installation",
      "One-year craftsmanship guarantee",
    ],
  },
];

export const whyOfem = [
  {
    title: "Complete In-House Services",
    text: "Interior design, exterior decoration and custom furniture. All handled by our team under one roof. No subcontracting, no coordination confusion.",
  },
  {
    title: "Luxury Within Reach",
    text: "Premium quality finishes and designs at prices that respect your budget. We believe luxury should be accessible to more Lagosians.",
  },
  {
    title: "Concept to Completion",
    text: "From initial consultation to final installation, we manage every detail. Transparent timelines, regular updates and professional execution.",
  },
  {
    title: "Proven Expertise",
    text: "8+ years transforming Lagos homes and offices. Hundreds of satisfied clients. Before and after portfolios that speak for themselves.",
  },
];

export const stats = [
  { value: "8+", label: "Years of experience" },
  { value: "250+", label: "Projects completed" },
  { value: "3", label: "Services under one roof" },
  { value: "98%", label: "Client satisfaction" },
];

export const testimonials = [
  {
    quote:
      "OFEM took our half-finished duplex and made it feel like a home we never want to leave. Every deadline was met and every naira was accounted for.",
    name: "Adaeze O.",
    service: "Interior Design · Lekki",
  },
  {
    quote:
      "The facade and garden work completely changed how our building is perceived. Neighbours keep asking who did it.",
    name: "Tunde A.",
    service: "Exterior Decoration · Ikoyi",
  },
  {
    quote:
      "The dining set they built for us is better than anything we saw imported, and it fits our room perfectly. Real craftsmanship.",
    name: "Mrs. Bello",
    service: "Custom Furniture · Victoria Island",
  },
  {
    quote:
      "Working with one team for design, build and furniture saved us months. Communication on WhatsApp was constant and clear.",
    name: "Chuka E.",
    service: "Office Fit-out · Victoria Island",
  },
];

export const faqGroups = [
  {
    title: "Services & Scope",
    items: [
      {
        q: "What services does OFEM HOME offer?",
        a: "Three core services under one roof: interior design, exterior decoration and custom furniture. Most clients combine two or three, which is where we add the most value.",
      },
      {
        q: "Do you work on commercial spaces?",
        a: "Yes. We handle offices, showrooms, short-let apartments and hospitality spaces alongside private residences.",
      },
      {
        q: "Do you work outside Lagos?",
        a: "Lagos is our base and where most of our projects are. We take selected projects in other states — logistics and travel are quoted transparently upfront.",
      },
    ],
  },
  {
    title: "Process & Timelines",
    items: [
      {
        q: "How do I schedule a consultation?",
        a: "Three ways: WhatsApp, a phone call, or the contact form on this site. Tell us your preferred contact method and availability. We typically respond within 24 hours.",
      },
      {
        q: "Can consultations be done via video call?",
        a: "Yes. We offer video consultations via WhatsApp, Zoom or Google Meet. For detailed space assessment an in-person visit is ideal, and hybrid approaches work well.",
      },
      {
        q: "How long does a typical project take?",
        a: "A single room takes 4–6 weeks, a full apartment 8–12 weeks, and larger builds or commercial fit-outs 12 weeks and up. You get a written schedule before work begins.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      {
        q: "How is pricing determined?",
        a: "By scope, size, material selection and timeline. After the consultation you receive an itemised proposal so you can see exactly what you're paying for.",
      },
      {
        q: "Do you accept online payment on the website?",
        a: "Not currently. You submit an inquiry, receive a detailed quote and proposal, agree terms, then pay by bank transfer after order confirmation. This keeps every quote customised and transparent.",
      },
      {
        q: "Do you work with a fixed budget?",
        a: "Yes. Tell us your budget range at the consultation and we design to it, prioritising the changes that make the biggest visual difference.",
      },
    ],
  },
  {
    title: "Warranty & Aftercare",
    items: [
      {
        q: "What is the warranty on materials and installation?",
        a: "Materials carry manufacturer warranties of 1–5 years depending on the item. Our installation work is guaranteed for one year; craftsmanship defects are fixed at no cost within that period.",
      },
      {
        q: "What if something needs repair after completion?",
        a: "Within the one-year warranty we address issues at no cost. After that we offer support on an hourly basis, and our team stays available for consultations and adjustments.",
      },
    ],
  },
];
