"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <div ref={containerRef} style={{ backgroundColor: colors.primary[50], position: "relative" }}>
      {/* Hero Section with 3D depth */}
      <section className="py-20 flex items-center justify-center relative overflow-hidden" style={{ perspective: "1000px" }}>
        <motion.div 
          style={{ y, opacity, scale }}
          className="container mx-auto px-4 text-center max-w-5xl relative z-10"
        >
          <motion.div
            initial={{ opacity: 0, rotateX: -20 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <h2
              className="text-4xl md:text-6xl font-bold mb-6 font-mono"
              style={{ color: colors.primary[500] }}
            >
              How We Build at Falzin
            </h2>
            <p
              className="text-xl md:text-2xl mb-4 font-bold"
              style={{ color: colors.accent[100] }}
            >
              We don't sell software. We engineer outcomes.
            </p>
            <p
              className="text-base md:text-lg max-w-2xl mx-auto"
              style={{ color: colors.primary[400] }}
            >
              Every product we build follows a proven, clarity-first process designed to fit your business — not force it to adapt.
            </p>
          </motion.div>
        </motion.div>
        
        {/* Animated background layers for depth */}
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, -200]) }}
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none"
        />
      </section>

      {/* Horizontal Scroll Timeline - Compact 3D Cards */}
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto pb-8 scrollbar-hide" style={{ scrollSnapType: "x mandatory" }}>
            <div className="flex gap-6 min-w-max px-4">
              {buildSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: 100, rotateY: -15 }}
                    whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      rotateY: 5,
                      z: 50,
                      transition: { duration: 0.3 }
                    }}
                    style={{
                      scrollSnapAlign: "start",
                      transformStyle: "preserve-3d",
                      perspective: "1000px"
                    }}
                    className="relative flex-shrink-0 w-[340px] md:w-[400px] p-8 rounded-3xl overflow-hidden group cursor-pointer"
                  >
                    {/* 3D Card Background with gradient */}
                    <div 
                      className="absolute inset-0 rounded-3xl transition-all duration-500"
                      style={{
                        background: `linear-gradient(135deg, ${colors.primary[50]} 0%, ${colors.primary[100]} 100%)`,
                        boxShadow: `0 20px 60px -15px rgba(0,0,0,0.3), 0 0 0 1px ${colors.primary[300]}`,
                      }}
                    />
                    
                    {/* Gradient overlay */}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-40 group-hover:opacity-60 transition-opacity duration-500`}
                      style={{ mixBlendMode: "multiply" }}
                    />

                    {/* Glossy reflection effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 h-full flex flex-col justify-between" style={{ transform: "translateZ(20px)" }}>
                      {/* Icon with 3D depth */}
                      <motion.div
                        className="mb-6"
                        whileHover={{ rotateZ: 15, scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <div 
                          className="w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
                          style={{ 
                            backgroundColor: colors.accent[100],
                            boxShadow: `0 10px 40px -10px ${colors.accent[100]}80`,
                            transform: "translateZ(30px)"
                          }}
                        >
                          <Icon className="w-10 h-10" style={{ color: colors.primary[50] }} />
                        </div>
                      </motion.div>

                      {/* Step number with dramatic size */}
                      <div 
                        className="absolute top-4 right-4 text-8xl font-bold leading-none opacity-10 select-none"
                        style={{ color: colors.accent[100] }}
                      >
                        0{step.id}
                      </div>

                      {/* Content */}
                      <div className="space-y-4">
                        <div>
                          <h3 
                            className="text-3xl font-bold mb-2 font-mono"
                            style={{ color: colors.primary[500] }}
                          >
                            {step.title}
                          </h3>
                          <p 
                            className="text-lg font-semibold"
                            style={{ color: colors.accent[100] }}
                          >
                            {step.subtitle}
                          </p>
                        </div>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: colors.primary[400] }}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    {/* Animated border glow on hover */}
                    <div 
                      className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        boxShadow: `inset 0 0 20px ${colors.accent[100]}40, 0 0 40px ${colors.accent[100]}20`
                      }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {buildSteps.map((_, index) => (
              <div
                key={index}
                className="h-1 rounded-full transition-all duration-300"
                style={{
                  width: "40px",
                  backgroundColor: colors.accent[100],
                  opacity: 0.3
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final Result Section with 3D perspective */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 flex items-center justify-center relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${colors.accent[100]}15, ${colors.accent[400]}15)`,
          perspective: "1000px"
        }}
      >
        <motion.div 
          className="container mx-auto px-4 text-center max-w-4xl"
          style={{ transformStyle: "preserve-3d" }}
          whileHover={{ scale: 1.02, rotateX: 2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-6">
            <motion.div 
              className="inline-block p-6 rounded-full mb-6"
              style={{
                backgroundColor: `${colors.accent[100]}20`,
                boxShadow: `0 30px 80px -20px ${colors.accent[100]}40`,
                transform: "translateZ(40px)"
              }}
              animate={{
                y: [0, -10, 0],
                rotateZ: [0, 5, 0, -5, 0]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <CheckCircle2 className="w-16 h-16" style={{ color: colors.accent[100] }} />
            </motion.div>
            <h3 
              className="text-4xl md:text-5xl font-bold mb-4 font-mono"
              style={{ color: colors.primary[500], transform: "translateZ(20px)" }}
            >
              The Result
            </h3>
            <p 
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: colors.primary[400], transform: "translateZ(10px)" }}
            >
              Custom-built digital systems that simplify operations, 
              improve efficiency, and deliver measurable growth.
            </p>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
