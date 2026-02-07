"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
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
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.primary[100], perspective: "2000px" }}>
      {/* Parallax background layers */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent"
          animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-full h-full bg-gradient-to-tl from-purple-500/5 to-transparent"
          animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: -10 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-mono" style={{ color: colors.primary[500], transform: "translateZ(20px)" }}>
            Portfolio
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.primary[400], transform: "translateZ(10px)" }}>
            Real projects delivering real results for our clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioProjects.map((project, index) => {
            const [isHovered, setIsHovered] = useState(false);
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            
            const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 300, damping: 30 });
            const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 300, damping: 30 });

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              mouseX.set((e.clientX - centerX) / rect.width);
              mouseY.set((e.clientY - centerY) / rect.height);
            };

            const handleMouseLeave = () => {
              mouseX.set(0);
              mouseY.set(0);
              setIsHovered(false);
            };

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, rotateX: -20 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={handleMouseLeave}
                style={{
                  rotateX,
                  rotateY,
                  transformStyle: "preserve-3d",
                  perspective: "1000px"
                }}
                className="group relative overflow-hidden rounded-2xl cursor-pointer"
              >
                {/* Main card container with 3D depth */}
                <div
                  className="relative"
                  style={{
                    backgroundColor: colors.primary[50],
                    border: `1px solid ${colors.primary[300]}`,
                    boxShadow: isHovered 
                      ? `0 30px 60px -15px rgba(0,0,0,0.4), 0 0 0 1px ${colors.accent[100]}40`
                      : "0 10px 30px -10px rgba(0,0,0,0.2)",
                    transition: "box-shadow 0.5s ease",
                    borderRadius: "1rem"
                  }}
                >
              {/* Background gradient with 3D depth */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-opacity duration-500 pointer-events-none`}
                style={{ 
                  mixBlendMode: "multiply",
                  opacity: isHovered ? 0.4 : 0,
                  transform: "translateZ(-10px)"
                }}
              />

              {/* Glossy overlay */}
              <div 
                className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent transition-opacity duration-500 pointer-events-none"
                style={{ opacity: isHovered ? 1 : 0 }}
              />

              {/* Content with layered depth */}
              <div className="relative p-8 space-y-4" style={{ transform: "translateZ(40px)" }}>
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

                {/* Links with micro-interactions */}
                <div className="space-y-2 pt-4 relative z-50">
                  {project.links.map((link, linkIndex) => (
                    <motion.a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm font-semibold transition-all hover:underline"
                      style={{ color: colors.accent[100], position: "relative", zIndex: 100 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="inline-flex items-center gap-2">
                        {link.label} <ExternalLink className="w-4 h-4" />
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Animated glow border on hover */}
              <motion.div 
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  border: `2px solid ${colors.accent[100]}`,
                  opacity: isHovered ? 1 : 0,
                  boxShadow: `0 0 30px ${colors.accent[100]}40`
                }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
