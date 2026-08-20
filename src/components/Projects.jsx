import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import CalButton from "./ui/CalButton";

/* ─────────────────────────────────────────
   PROJECT DATA — update links & content here
───────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    label: "Equipment Logistics",
    title: "Kelly SBS",
    tagline: "Heavy transport, cranes, access equipment, and piling solutions across the UAE & GCC.",
    description:
      "A comprehensive digital platform engineered for Kelly SBS, one of the UAE's trusted transport and heavy equipment rental companies. The platform showcases a GPS-tracked logistics fleet, including mobile/crawler cranes, access platforms, and foundation piling rigs. Designed with a focus on operational compliance, 24/7 breakdown support, and safety standards, the application facilitates seamless service inquiries and B2B client onboarding across the Middle East.",
    tags: ["React.js", "Tailwind CSS", "Logistics", "B2B Lead Capture", "Fleet Showroom"],
    year: "2025",
    links: [
      { label: "Visit Website", url: "https://kellysbs.com/" },
    ],
    span: "col-span-1 md:col-span-2",
    accent: "from-primary/5 to-primary/10",
    featured: true,
  },
  {
    id: 2,
    label: "Corporate Advisory",
    title: "Al Samiah Management Consulting",
    tagline: "Strategic, financial, and operational advisory solutions in the Middle East.",
    description:
      "A professional advisory portal developed for Al Samiah Management Consulting to drive sustainable corporate growth. The platform presents their consulting methodology—Discover, Analyze, Strategize, Implement, and Optimize—alongside specialized services in Corporate Finance, Risk Management, Digital Transformation, and Compliance (VAT/CIT) to bridge the gap between business vision and execution.",
    tags: ["React.js", "Tailwind CSS", "Financial Advisory", "Strategy Consulting", "Interactive Methodology"],
    year: "2026",
    links: [
      { label: "Visit Website", url: "https://www.asmc-group.com/" },
    ],
    span: "col-span-1",
    accent: "from-champagne-gold/5 to-champagne-gold/10",
    featured: true,
  },
  {
    id: 3,
    label: "Charity Management System",
    title: "Muslimah Charity Trust",
    tagline: "Serverless case management and donation processing platform.",
    description:
        "A serverless charity management platform architected using Google Apps Script as a lightweight backend layer over Google Sheets as a structured datastore. Implemented REST-like endpoints via Apps Script Web Apps to handle CRUD operations for case records, media metadata, and donation tracking. The frontend (React + Tailwind) consumes these endpoints for dynamic rendering of cases and updates. Integrated Razorpay Checkout with secure order creation, signature verification, and webhook handling to ensure transaction authenticity and real-time payment status updates. Designed with role-based access controls for internal administrators, input validation, and spreadsheet data normalization to maintain integrity and scalability without traditional database infrastructure.",
    tags: [
        "React.js",
        "Node.js",
        "Tailwind",
        "Razorpay API",
        "Google Apps Script",
        "Google Sheets (as DB)",
        "RESTful APIs",
        "Webhook Integration"
    ],
    year: "2026",
    links: [
        { label: "Visit Website", url: "https://www.muslimahcharitytrust.org/" }
    ],
    span: "col-span-1",
    accent: "from-champagne-gold/5 to-champagne-gold/10",
    featured: true
  },
  {
    id: 4,
    label: "Service Marketplace",
    title: "Bayt",
    tagline: "UAE marketplace connecting building owners with verified service providers.",
    description:
        "Bayt is a full-stack service marketplace designed for the UAE that enables building owners to post maintenance or construction jobs and receive competitive quotations from verified local service providers. The platform features separate portals for building owners and service providers, secure phone-based authentication, KYC verification workflows, and structured job lifecycle management from request creation to completion and feedback. It supports controlled quotation limits, provider eligibility filtering based on service activity and location, and a scalable architecture built with modern web technologies for reliable deployment and future marketplace expansion.",
    tags: ["Service Marketplace", "Quotations", "KYC Verification", "Job Management", "Payments"],
    year: "2025",
    links: [
        { label: "Building Owners", url: "https://bayt-bo-frontend.vercel.app/" },
        { label: "Service Providers", url: "https://bayt-sp-frontend.vercel.app/" },
    ],
    span: "col-span-1 md:col-span-2",
    accent: "from-primary/5 to-primary/10",
    featured: true,
  },
  {
    id: 5,
    label: "Quant Research Platform",
    title: "Palrin",
    tagline: "AI-assisted trading journal and research platform for swing traders.",
    description:
    "Palrin is a full-stack trading research and portfolio analytics platform designed to help traders move from macro analysis to trade execution. The system combines company fundamental analysis, sector and industry insights, and macroeconomic indicators from both Indian and US markets to support structured investment decisions. Built with a Next.js + MongoDB architecture and secured through Firebase Google OAuth, Palrin tracks active positions in real time, calculates unrealized and realized P&L, and maintains a detailed trading journal. The platform also includes an integrated investment thesis builder, institutional flow tracking (FII/DII), portfolio analytics, and an AI-powered trade idea engine that suggests swing trade opportunities based on sector strength, macro conditions, and existing portfolio exposure.",
    tags: ["Next.js", "MongoDB", "Firebase Auth", "Chart.js", "Tailwind", "AI Analytics"],
    year: "2026",
    links: [
        { label: "Visit Website", url: "https://palrin.com/" },
    ],
    span: "col-span-1",
    accent: "from-accent-emerald/5 to-accent-emerald/10",
    featured: true,
  },
  {
    id: 6,
    label: "Car Rental Platform",
    title: "CruiseOnCars",
    tagline: "Real-time vehicle availability, inquiry capture, and instant price quotations.",
    description:
      "A full-featured car rental platform that checks vehicle availability in real time, captures customer inquiries, and automatically generates accurate price quotations based on selected rental dates and duration.",
    tags: ["Availability Engine", "Quotations", "Inquiries"],
    year: "2025",
    links: [
      { label: "Visit Website", url: "https://cruiseoncars.com/" },
    ],
    span: "col-span-1 md:col-span-2",
    accent: "from-accent-burgundy/5 to-accent-burgundy/10",
    featured: false,
  },
];

/* ─────────────────────────────────────────
   STAT TILES
───────────────────────────────────────────── */
const stats = [
  { value: "6", label: "Projects Shipped" },
  { value: "2", label: "Countries Served" },
  { value: "100%", label: "On-time Delivery" },
];

/* ─────────────────────────────────────────
   BENTO CARD
───────────────────────────────────────────── */
function BentoCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className={`${project.span} group relative bg-white border border-primary/8 overflow-hidden flex flex-col justify-between p-8 md:p-10 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 min-h-[280px] md:min-h-[320px]`}
    >
      {/* Gradient bg */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
      />

        {/* Top row */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
        <span className="text-[10px] uppercase tracking-[0.35em] font-bold text-primary/30 block mb-3">
        {project.label} · {project.year}
        </span>
        <h3 className="serif-title text-2xl md:text-3xl text-primary leading-snug">
        {project.title}
        </h3>
        </div>

  {/* Render all links as small buttons */}
        {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 md:mt-0">
            {project.links.map((lnk) => (
            <a
                key={lnk.url}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest border border-primary/20 text-primary hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            >
            {lnk.label}
            <span className="material-symbols-outlined text-[11px]">arrow_outward</span>
            </a>
        ))}
        </div>
        )}
        </div>

      {/* Tagline */}
      <p className="relative z-10 text-xs text-primary/50 font-semibold uppercase tracking-widest mb-4">
        {project.tagline}
      </p>

      {/* Description — visible on featured or hover */}
      <p
        className={`relative z-10 text-sm text-primary/60 leading-relaxed font-light mb-6 ${
          project.featured ? "block" : "hidden md:block"
        }`}
      >
        {project.description}
      </p>

      {/* Tags + Multi-links */}
      <div className="relative z-10 mt-auto space-y-3">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-widest px-3 py-1 border border-primary/10 text-primary/50 font-semibold group-hover:border-primary/20 group-hover:text-primary/70 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        {project.links.length > 1 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((lnk) => (
              <a
                key={lnk.url}
                href={lnk.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest px-3 py-1.5 border border-primary/20 text-primary/60 font-bold hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
              >
                {lnk.label}
                <span className="material-symbols-outlined text-[11px]">arrow_outward</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Featured accent line */}
      {project.featured && (
        <div className="absolute top-0 left-0 w-full h-[2px] bg-champagne-gold" />
      )}
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   STAT CARD
───────────────────────────────────────────── */
function StatCard({ stat, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className="bg-primary text-white flex flex-col items-center justify-center py-12 px-6 text-center"
    >
      <span className="serif-title text-5xl md:text-6xl font-light mb-2">
        {stat.value}
      </span>
      <span className="text-[10px] uppercase tracking-[0.35em] text-white/40 font-bold">
        {stat.label}
      </span>
    </motion.div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function Projects() {
  return (
    <>
      <Header />
      <main className="bg-background-light min-h-screen">

        {/* ── Hero Banner ── */}
        <section className="pt-20 bg-primary text-white overflow-hidden relative">
          <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none select-none hidden md:block">
            <span className="serif-title text-[12rem] leading-none italic">Work</span>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative z-10">
            <motion.span
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-xs uppercase tracking-[0.4em] font-semibold text-champagne-gold block mb-4"
            >
              Selected Work
            </motion.span>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="serif-title text-5xl md:text-7xl font-light leading-tight max-w-2xl"
              >
                Case Studies &<br />
                <span className="italic">Live Projects</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/40 text-sm font-light max-w-xs leading-relaxed luxury-text-spacing"
              >
                A curated showcase of systems we have architected, engineered, and deployed for visionary operators.
              </motion.p>
            </div>
          </div>
        </section>

        {/* ── Bento Grid ── */}
        <section className="max-w-7xl mx-auto px-6 py-16 md:py-24">

          {/* Row 1 — Kelly SBS (featured 2/3) + Al Samiah (1/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <BentoCard project={projects[0]} index={0} />
            <BentoCard project={{ ...projects[1], span: "col-span-1" }} index={1} />
          </div>

          {/* Row 2 — Stat tiles */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>

          {/* Row 3 — Muslimah (1/3) + Bayt (2/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <BentoCard project={{ ...projects[2], span: "col-span-1" }} index={2} />
            <BentoCard project={{ ...projects[3], span: "col-span-1 md:col-span-2" }} index={3} />
          </div>

          {/* Row 4 — Palrin (1/3) + CruiseOnCars (2/3) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <BentoCard project={{ ...projects[4], span: "col-span-1" }} index={4} />
            <BentoCard project={{ ...projects[5], span: "col-span-1 md:col-span-2" }} index={5} />
          </div>
        </section>

        {/* ── CTA strip ── */}
        <section className="border-t border-primary/5 bg-white/40">
          <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
            >
              <h3 className="serif-title text-3xl md:text-4xl text-primary mb-2">
                Have a project in mind?
              </h3>
              <p className="text-primary/50 text-sm font-light luxury-text-spacing">
                We take on select engagements each quarter.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <CalButton className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-primary/90 transition-all duration-500">
                Request an Invitation
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </CalButton>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
