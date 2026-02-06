"use client";

import { motion } from "framer-motion";
import { AnimatedTabs } from "@/components/ui/animated-tabs";

import { colors } from "@/lib/colors";
import { ExternalLink } from "lucide-react";

const portfolioTabs = [
  {
    id: "web-apps",
    label: "Web Applications",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
          alt="Web Application Dashboard"
          className="rounded-lg w-full h-64 object-cover shadow-2xl border-none"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold mb-0 mt-0 !m-0 font-mono" style={{ color: colors.primary[100] }}>
            Enterprise Dashboards
          </h2>
          <p className="text-sm mt-0" style={{ color: `${colors.primary[100]}D9` }}>
            Custom-built analytics platforms that transform complex data into actionable insights. 
            Our web applications feature real-time monitoring, advanced reporting, and intuitive interfaces 
            designed to streamline decision-making processes.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: colors.accent[100] }}
          >
            View Case Study <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "mobile-apps",
    label: "Mobile Apps",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=2574&auto=format&fit=crop"
          alt="Mobile Application"
          className="rounded-lg w-full h-64 object-cover shadow-2xl border-none"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold mb-0 mt-0 !m-0 font-mono" style={{ color: colors.primary[100] }}>
            iOS & Android Solutions
          </h2>
          <p className="text-sm mt-0" style={{ color: `${colors.primary[100]}D9` }}>
            Native and cross-platform mobile applications that deliver seamless user experiences. 
            From e-commerce to productivity tools, we build apps that engage users and drive business growth 
            across all mobile platforms.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: colors.accent[100] }}
          >
            View Case Study <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    ),
  },
  {
    id: "erp-systems",
    label: "ERP Systems",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full h-full">
        <img
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
          alt="ERP System"
          className="rounded-lg w-full h-64 object-cover shadow-2xl border-none"
        />
        <div className="flex flex-col gap-y-3">
          <h2 className="text-3xl font-bold mb-0 mt-0 !m-0 font-mono" style={{ color: colors.primary[100] }}>
            Custom ERP Solutions
          </h2>
          <p className="text-sm mt-0" style={{ color: `${colors.primary[100]}D9` }}>
            Comprehensive enterprise resource planning systems tailored to your unique workflows. 
            Our ERP implementations integrate inventory management, financial tracking, HR systems, 
            and more into one unified platform that scales with your business.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center gap-2 text-sm font-semibold transition-colors"
            style={{ color: colors.accent[100] }}
          >
            View Case Study <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    ),
  },
];

export function PortfolioSection() {
  return (
    <section className="py-24 relative" style={{ backgroundColor: colors.primary[50] }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif" style={{ color: colors.primary[500] }}>
            Portfolio
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.primary[400] }}>
            Explore projects that showcase our expertise in delivering exceptional digital solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <AnimatedTabs tabs={portfolioTabs} defaultTab="web-apps" />
        </motion.div>
      </div>
    </section>
  );
}
