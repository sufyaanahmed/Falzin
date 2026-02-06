"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/colors";
import { Lightbulb, PenTool, Rocket, CheckCircle2, HeartHandshake } from "lucide-react";

const buildSteps = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Understand",
    subtitle: "Business, Not Just the Brief",
    description: "We dive deep into your workflows, bottlenecks, and growth goals. Before writing a single line of code, we understand how your business actually operates.",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    id: 2,
    icon: PenTool,
    title: "Design & Build",
    subtitle: "For Scale from Day One",
    description: "No templates. No shortcuts. We architect systems, interfaces, and workflows that mirror how your team works — clean, intuitive, and efficient.",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 3,
    icon: Rocket,
    title: "Automate",
    subtitle: "The Manual Away",
    description: "Repetitive tasks don't belong to people. We introduce intelligent automation and smart workflows that reduce manual effort and operational drag.",
    gradient: "from-cyan-500/20 to-teal-500/20"
  },
  {
    id: 4,
    icon: CheckCircle2,
    title: "Perfect",
    subtitle: "Test, Refine, Deliver",
    description: "Details matter. We rigorously test performance, usability, and reliability — refining until everything works exactly as it should.",
    gradient: "from-emerald-500/20 to-green-500/20"
  },
  {
    id: 5,
    icon: HeartHandshake,
    title: "Evolve",
    subtitle: "Launch, Support, Grow",
    description: "Launch is just the beginning. We stay involved with ongoing support, improvements, and optimization as your business evolves.",
    gradient: "from-violet-500/20 to-purple-500/20"
  }
];

export function ValuePropositionSection() {
  return (
    <div style={{ backgroundColor: colors.primary[50] }}>
      {/* Hero Section */}
      <section className="py-24 flex items-center justify-center relative">
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-bold mb-8 font-mono"
            style={{ color: colors.primary[500] }}
          >
            How We Build at Falzin
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-3xl mb-6 font-bold"
            style={{ color: colors.accent[100] }}
          >
            We don't sell software. We engineer outcomes.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl max-w-3xl mx-auto"
            style={{ color: colors.primary[400] }}
          >
            Every product we build follows a proven, clarity-first process designed to fit your business — not force it to adapt.
          </motion.p>
        </div>
      </section>

      {/* Build Steps */}
      <div className="py-12">
        {buildSteps.map((step, index) => {
          const Icon = step.icon;
          return (
            <motion.section
              key={step.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="py-16 relative overflow-hidden"
              style={{
                backgroundColor: index % 2 === 0 ? colors.primary[50] : colors.primary[100]
              }}
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-30`}
                style={{ mixBlendMode: "multiply" }}
              />
              
              <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Icon and number */}
                    <div className="flex flex-col items-center md:items-start space-y-6">
                      <div 
                        className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110"
                        style={{ 
                          backgroundColor: colors.accent[100],
                          boxShadow: `0 20px 60px -10px ${colors.accent[100]}60`
                        }}
                      >
                        <Icon className="w-12 h-12" style={{ color: colors.primary[50] }} />
                      </div>
                      <div 
                        className="text-[120px] md:text-[180px] font-bold leading-none opacity-10"
                        style={{ color: colors.accent[100] }}
                      >
                        0{step.id}
                      </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-6">
                      <div>
                        <h3 
                          className="text-4xl md:text-5xl font-bold mb-2 font-mono"
                          style={{ color: colors.primary[500] }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-2xl md:text-3xl"
                          style={{ color: colors.accent[100] }}
                        >
                          {step.subtitle}
                        </p>
                      </div>
                      <p 
                        className="text-lg md:text-xl leading-relaxed"
                        style={{ color: colors.primary[400] }}
                      >
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          );
        })}
      </div>

      {/* Final Result Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-24 flex items-center justify-center relative"
        style={{
          background: `linear-gradient(135deg, ${colors.accent[100]}15, ${colors.accent[400]}15)`
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="space-y-8">
            <div 
              className="inline-block p-6 rounded-full mb-8"
              style={{
                backgroundColor: `${colors.accent[100]}20`,
                boxShadow: `0 30px 80px -20px ${colors.accent[100]}40`
              }}
            >
              <CheckCircle2 className="w-16 h-16" style={{ color: colors.accent[100] }} />
            </div>
            <h3 
              className="text-5xl md:text-6xl font-bold mb-6 font-mono"
              style={{ color: colors.primary[500] }}
            >
              The Result
            </h3>
            <p 
              className="text-2xl md:text-3xl leading-relaxed"
              style={{ color: colors.primary[400] }}
            >
              Custom-built digital systems that simplify operations, 
              improve efficiency, and deliver measurable growth.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
