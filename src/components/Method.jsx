import { motion } from 'framer-motion';

export default function Method() {
  const steps = [
    {
      number: 'I.',
      icon: 'adjust',
      title: 'Discovery & Systems Audit',
      description: 'Analyze current systems, workflows, and technical architecture to identify bottlenecks and automation opportunities.',
      deliverable: 'Operational Systems Audit'
    },
    {
      number: 'II.',
      icon: 'schema',
      title: 'Architectural Blueprint',
      description: 'Design the full system architecture including data flows, infrastructure layers, and automation pipelines.',
      deliverable: 'Technical Architecture Blueprint'
    },
    {
      number: 'III.',
      icon: 'precision_manufacturing',
      title: 'Precision Engineering',
      description: 'Build the platform, internal tools, or automation systems with performance, reliability, and scalability as priorities.',
      deliverable: 'Production-ready Software Systems'
    },
    {
      number: 'IV.',
      icon: 'insights',
      title: 'Continuous Optimization',
      description: 'Monitor performance, refine workflows, and evolve the system as operations scale.',
      deliverable: 'Ongoing Systems Optimization'
    }
  ];

  return (
    <section id="method" className="py-32 bg-white/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs uppercase tracking-[0.4em] font-bold text-accent-emerald block mb-4">
              THE BLUEPRINT
            </span>
            <h2 className="serif-title text-5xl text-primary">The Falzin Method</h2>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-md text-primary/60 font-light leading-relaxed"
          >
            A structured engineering process — from systems audit to production deployment — built to deliver reliable, scalable software.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-primary/10 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="relative z-10 pt-10 pb-16 md:pr-8 group hover:bg-white/40 transition-all duration-700 px-4 border-l md:border-l-0 border-primary/10"
            >
              <div className="serif-title text-4xl text-primary mb-12 flex items-center gap-4">
                <span className="material-symbols-outlined text-primary/20">{step.icon}</span>
                {step.number}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest mb-4 text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-primary/60 leading-loose">
                {step.description}
              </p>
              {step.deliverable && (
                <p className="mt-4 text-xs uppercase tracking-widest text-champagne-gold font-semibold">
                  ↳ {step.deliverable}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
