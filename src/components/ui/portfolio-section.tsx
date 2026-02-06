"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/colors";
import { ExternalLink } from "lucide-react";

const portfolioProjects = [
  {
    id: "bayt",
    title: "BAYT",
    category: "Full Stack WebApp",
    description:
      "BAYT is a UAE-based service marketplace that connects building owners with verified local service providers through auctions or direct quotations, with secure payments and end-to-end job tracking.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    links: [
      { label: "Building Owner Portal", url: "https://bayt-bo-frontend.vercel.app/" },
      { label: "Service Provider Portal", url: "https://bayt-sp-frontend.vercel.app/" }
    ],
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: "mct",
    title: "Muslimah Charity Trust",
    category: "Charity Website",
    description:
      "A charity website using Google Apps Script and Sheets to manage cases and media, with Razorpay integration for online donations.",
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2670&auto=format&fit=crop",
    links: [
      { label: "Visit Website", url: "https://www.muslimahcharitytrust.org/" }
    ],
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    id: "cruiseoncars",
    title: "CruiseOnCars",
    category: "Car Rental Platform",
    description:
      "Car rental platform that checks vehicle availability, captures inquiries, and generates price quotations based on rental dates and duration.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2670&auto=format&fit=crop",
    links: [
      { label: "Visit Website", url: "https://cruiseoncars.com" }
    ],
    gradient: "from-blue-500/20 to-cyan-500/20"
  }
];

export function PortfolioSection() {
  return (
    <section className="py-24 relative" style={{ backgroundColor: colors.primary[100] }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-mono" style={{ color: colors.primary[500] }}>
            Portfolio
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.primary[400] }}>
            Real projects delivering real results for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                backgroundColor: colors.primary[50],
                border: `1px solid ${colors.primary[300]}`,
              }}
            >
              {/* Background gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                style={{ mixBlendMode: "multiply" }}
              />

              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-6 space-y-4">
                <div>
                  <div 
                    className="text-sm font-mono mb-2"
                    style={{ color: colors.accent[100] }}
                  >
                    {project.category}
                  </div>
                  <h3 
                    className="text-2xl font-bold mb-3 font-mono"
                    style={{ color: colors.primary[500] }}
                  >
                    {project.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: colors.primary[400] }}
                  >
                    {project.description}
                  </p>
                </div>

                {/* Links */}
                <div className="space-y-2 pt-4">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:underline"
                      style={{ color: colors.accent[100] }}
                    >
                      {link.label} <ExternalLink className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Hover border effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  border: `2px solid ${colors.accent[100]}`,
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
