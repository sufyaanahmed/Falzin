"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Code, Database, Sparkles, BarChart } from "lucide-react";
import { colors } from "@/lib/colors";
import { GradientCard } from "@/components/ui/gradient-card";
import { FlipLinks } from "@/components/ui/flip-links";

const services = [
  {
    icon: Globe,
    title: "Websites & Web Apps",
    description: "Modern, responsive websites and powerful web applications built with cutting-edge technologies to deliver exceptional user experiences.",
  },
  {
    icon: Smartphone,
    title: "iOS & Android Apps",
    description: "Native and cross-platform mobile applications that engage users and drive business growth across all devices.",
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed to solve your unique business challenges and streamline operations.",
  },
  {
    icon: Database,
    title: "ERP Solutions",
    description: "Comprehensive enterprise resource planning systems that unify your business processes into one intelligent platform.",
  },
  {
    icon: Sparkles,
    title: "AI & Automation",
    description: "Intelligent automation solutions that eliminate repetitive tasks and unlock unprecedented efficiency gains.",
  },
  {
    icon: BarChart,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with custom analytics dashboards and reporting tools.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 relative overflow-hidden" style={{ backgroundColor: colors.primary[50] }}>
      {/* Flip Links Background - positioned on the left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-10 hidden xl:block opacity-20 pointer-events-none">
        <div className="scale-150">
          <FlipLinks />
        </div>
      </div>

      {/* Flip Links Background - positioned on the right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden xl:block opacity-20 pointer-events-none">
        <div className="scale-150">
          <FlipLinks />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" style={{ color: colors.primary[400] }}>
            Our Services
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${colors.primary[400]}99` }}>
            Comprehensive technology solutions to transform your business operations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GradientCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                link="#contact"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

