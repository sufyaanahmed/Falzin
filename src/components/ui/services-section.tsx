"use client";

import { motion } from "framer-motion";
import { Globe, Cpu, Sparkles, BarChart3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colorClasses } from "@/lib/colors";

const services = [
  {
    icon: Globe,
    title: "Websites & Apps",
    description:
      "Modern, responsive platforms designed to delight users and scale with your business.",
  },
  {
    icon: Cpu,
    title: "Custom Software Solutions",
    description:
      "Tailored systems that automate processes and integrate seamlessly.",
  },
  {
    icon: Sparkles,
    title: "AI Automation",
    description:
      "Smart systems that reduce manual effort and increase operational efficiency.",
  },
  {
    icon: BarChart3,
    title: "Data Insights & Analytics",
    description:
      "Actionable insights that drive smarter decisions and measurable growth.",
  },
];

export function ServicesSection() {
  return (
    <section className={`${colorClasses.bg.primary} py-24`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${colorClasses.text.primary} mb-4 font-mono`}>
            From Idea to Digital Reality
          </h2>
          <p className={`${colorClasses.text.secondary} text-lg max-w-2xl mx-auto`}>
            We transform your vision into powerful digital solutions that drive growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${colorClasses.bg.card} ${colorClasses.border.primary} border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="mb-6">
                <div className={`inline-flex p-4 rounded-xl bg-[#004e89]/10 group-hover:bg-[#ff002b]/10 transition-colors duration-300`}>
                  <service.icon className={`h-8 w-8 text-[#004e89] group-hover:text-[#ff002b] transition-colors duration-300`} />
                </div>
              </div>
              
              <h3 className={`text-xl font-bold ${colorClasses.text.primary} mb-3 font-mono`}>
                {service.title}
              </h3>
              
              <p className={`${colorClasses.text.secondary} text-sm leading-relaxed`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button
            size="lg"
            className={`${colorClasses.bg.accent} ${colorClasses.bg.accentHover} text-white rounded-none font-mono`}
          >
            Explore Our Services <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
