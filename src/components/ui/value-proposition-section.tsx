"use client";

import { motion } from "framer-motion";
import { Check, Target, Zap, Shield } from "lucide-react";
import { colors } from "@/lib/colors";

const benefits = [
  {
    icon: Target,
    title: "100% Tailored Solutions",
    description: "No cookie-cutter templates.",
  },
  {
    icon: Zap,
    title: "Scalable & Future-Proof",
    description: "Systems designed to grow without breaking.",
  },
  {
    icon: Check,
    title: "Proven Results",
    description: "Reduced manual effort by up to 70% for our clients.",
  },
  {
    icon: Shield,
    title: "End-to-End Expertise",
    description: "From concept to launch and ongoing support.",
  },
];

export function ValuePropositionSection() {
  return (
    <section className="py-24" style={{ backgroundColor: colors.primary[100] }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-mono" style={{ color: colors.primary[400] }}>
            Why Businesses Choose Falzin
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-4" style={{ color: `${colors.primary[400]}CC` }}>
            Tired of off-the-shelf tools that force your processes to fit their limitations?
          </p>
          <p className="text-lg md:text-xl font-semibold" style={{ color: colors.accent[100] }}>
            We flip the script: Technology built around your business — not the other way around.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4 flex justify-center">
                <div 
                  className="inline-flex p-4 rounded-full"
                  style={{ backgroundColor: `${colors.accent[100]}1A` }}
                >
                  <benefit.icon 
                    className="h-8 w-8" 
                    style={{ color: colors.accent[100] }}
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-2 font-mono" style={{ color: colors.primary[400] }}>
                {benefit.title}
              </h3>
              
              <p style={{ color: `${colors.primary[400]}99` }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
