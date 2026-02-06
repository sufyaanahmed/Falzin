"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Cpu, BarChart3, Sparkles, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const services = [
  {
    icon: Globe,
    title: "Websites That Convert & Scale",
    description:
      "Modern, responsive website development designed for speed, user experience, and search visibility. From corporate sites to e-commerce platforms — built to attract, engage, and grow your customer base.",
  },
  {
    icon: Smartphone,
    title: "iOS & Android Mobile Apps",
    description:
      "Native and cross-platform mobile app development that delivers seamless experiences on every device. Turn your ideas into intuitive apps that keep users coming back.",
  },
  {
    icon: Cpu,
    title: "Custom Software Development",
    description:
      "Bespoke software solutions tailored to your unique processes. Automate workflows, integrate systems, and eliminate inefficiencies with powerful, secure custom applications.",
  },
  {
    icon: TrendingUp,
    title: "Custom ERP Solutions & Implementation",
    description:
      "Tailored ERP customization and setup to unify your business operations. Streamline finance, inventory, HR, CRM, and more with intelligent, scalable systems that grow with you — fully configured to match your exact needs.",
  },
  {
    icon: Sparkles,
    title: "AI Automation & Intelligent Workflows",
    description:
      "Smart automation tools powered by AI to reduce manual work, predict trends, and optimize daily operations for maximum efficiency.",
  },
  {
    icon: BarChart3,
    title: "Data Insights & Business Analytics",
    description:
      "Turn raw data into actionable intelligence. Custom dashboards and analytics solutions that help you make faster, smarter decisions.",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24" style={{ backgroundColor: colors.primary[50] }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" style={{ color: colors.primary[400] }}>
            Our Core Services
          </h2>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: `${colors.primary[400]}99` }}>
            From stunning responsive websites to enterprise-grade custom ERP customization and setup — we turn your vision into scalable digital reality.
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
              className="border rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              style={{ 
                backgroundColor: `${colors.primary[100]}99`,
                borderColor: `${colors.primary[400]}1A`
              }}
            >
              <div className="mb-6">
                <div 
                  className="inline-flex p-4 rounded-xl transition-all duration-300"
                  style={{ 
                    backgroundColor: `${colors.primary[300]}1A`,
                  }}
                >
                  <service.icon 
                    className="h-8 w-8 transition-colors duration-300" 
                    style={{ color: colors.primary[300] }}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 font-mono" style={{ color: colors.primary[400] }}>
                {service.title}
              </h3>
              
              <p className="text-sm leading-relaxed" style={{ color: `${colors.primary[400]}99` }}>
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
            className="text-white rounded-none font-mono transition-all duration-300"
            style={{ 
              backgroundColor: colors.accent[100],
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent[200];
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = colors.accent[100];
            }}
          >
            Explore All Services <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
