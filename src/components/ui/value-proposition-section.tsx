"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { colors } from "@/lib/colors";
import { Lightbulb, PenTool, Rocket, CheckCircle2, HeartHandshake } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
  const sectionRef = useRef<HTMLDivElement>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // GSAP ScrollTrigger animations
    const panels = gsap.utils.toArray<HTMLElement>(".scroll-panel");
    
    panels.forEach((panel, index) => {
      const icon = panel.querySelector(".panel-icon");
      const title = panel.querySelector(".panel-title");
      const subtitle = panel.querySelector(".panel-subtitle");
      const description = panel.querySelector(".panel-description");
      
      // Create timeline for each panel
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        }
      });

      // Animate elements
      tl.fromTo(icon, 
        { scale: 0, rotation: -180, opacity: 0 },
        { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      )
      .fromTo(title,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(subtitle,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      )
      .fromTo(description,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.4"
      );

      // Parallax effect on panel background
      gsap.to(panel, {
        scrollTrigger: {
          trigger: panel,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        y: (index % 2 === 0) ? -50 : 50,
        ease: "none"
      });
    });

    // Intersection Observer for adding visible classes
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.5 }
    );

    panels.forEach((panel) => observer.observe(panel));

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={sectionRef} className="scroll-container" style={{ backgroundColor: colors.primary[50] }}>
      {/* Hero Section */}
      <section 
        className="scroll-panel panel-hero min-h-screen flex items-center justify-center relative"
        style={{ 
          scrollSnapAlign: "start",
          backgroundColor: colors.primary[50]
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-5xl">
          <h2 
            className="text-5xl md:text-7xl font-bold mb-8 panel-title font-serif"
            style={{ color: colors.primary[500] }}
          >
            How We Build at Falzin
          </h2>
          <p 
            className="text-2xl md:text-3xl mb-6 font-semibold panel-subtitle"
            style={{ color: colors.accent[100] }}
          >
            We don't sell software. We engineer outcomes.
          </p>
          <p 
            className="text-lg md:text-xl max-w-3xl mx-auto panel-description"
            style={{ color: colors.primary[400] }}
          >
            Every product we build follows a proven, clarity-first process designed to fit your business — not force it to adapt.
          </p>
        </div>
      </section>

      {/* Build Steps - Full Page Sections */}
      {buildSteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <section
            key={step.id}
            className="scroll-panel min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
              scrollSnapAlign: "start",
              backgroundColor: index % 2 === 0 ? colors.primary[50] : colors.primary[100]
            }}
          >
            {/* Background gradient */}
            <div 
              className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-30`}
              style={{ mixBlendMode: "multiply" }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <div className="max-w-4xl mx-auto">
                <div className="panel-content grid md:grid-cols-2 gap-12 items-center">
                  {/* Left side - Icon and number */}
                  <div className="flex flex-col items-center md:items-start space-y-6">
                    <div 
                      className="panel-icon w-24 h-24 rounded-2xl flex items-center justify-center shadow-2xl transform transition-transform hover:scale-110"
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
                        className="panel-title text-4xl md:text-5xl font-bold mb-2"
                        style={{ color: colors.primary[500] }}
                      >
                        {step.title}
                      </h3>
                      <p 
                        className="panel-subtitle text-2xl md:text-3xl font-serif"
                        style={{ color: colors.accent[100] }}
                      >
                        {step.subtitle}
                      </p>
                    </div>
                    <p 
                      className="panel-description text-lg md:text-xl leading-relaxed"
                      style={{ color: colors.primary[400] }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Final Result Section */}
      <section
        className="scroll-panel min-h-screen flex items-center justify-center relative"
        style={{
          scrollSnapAlign: "start",
          background: `linear-gradient(135deg, ${colors.accent[100]}15, ${colors.accent[400]}15)`
        }}
      >
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="panel-content space-y-8">
            <div 
              className="panel-icon inline-block p-6 rounded-full mb-8"
              style={{
                backgroundColor: `${colors.accent[100]}20`,
                boxShadow: `0 30px 80px -20px ${colors.accent[100]}40`
              }}
            >
              <CheckCircle2 className="w-16 h-16" style={{ color: colors.accent[100] }} />
            </div>
            <h3 
              className="panel-title text-5xl md:text-6xl font-bold mb-6 font-serif"
              style={{ color: colors.primary[500] }}
            >
              The Result
            </h3>
            <p 
              className="panel-description text-2xl md:text-3xl leading-relaxed"
              style={{ color: colors.primary[400] }}
            >
              Custom-built digital systems that simplify operations, 
              improve efficiency, and deliver measurable growth.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
