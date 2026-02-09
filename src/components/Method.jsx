import { motion } from 'framer-motion';

export default function Method() {
  const steps = [
    {
      number: 'I.',
      icon: 'adjust',
      title: 'Discovery & Audit',
      description: 'Defining the vision and identifying critical operational bottlenecks within your current architecture.'
    },
    {
      number: 'II.',
      icon: 'schema',
      title: 'Architectural Blueprint',
      description: 'Strategic technical mapping and design of a resilient, scalable digital architecture.'
    },
    {
      number: 'III.',
      icon: 'precision_manufacturing',
      title: 'Precision Engineering',
      description: 'Crafting high-performance digital infrastructure with uncompromising attention to detail.'
    },
    {
      number: 'IV.',
      icon: 'insights',
      title: 'Continuous Optimization',
      description: 'Iterative refinement and performance scaling to ensure enduring competitive advantage.'
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
            Precision engineering meets strategic vision. Our process is a linear journey from raw concept to operational mastery.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0 relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-primary/10 z-0"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
