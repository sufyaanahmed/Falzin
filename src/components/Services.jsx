import { motion } from 'framer-motion';

export default function Services() {
  const services = [
    {
      icon: 'terminal',
      title: 'Custom Enterprise Software',
      description: 'Scalable, secure, and proprietary platforms designed to match your unique operational DNA.'
    },
    {
      icon: 'settings_input_component',
      title: 'Workflow Automation',
      description: 'Removing human friction from high-stakes operations through intelligent agentic systems.'
    },
    {
      icon: 'model_training',
      title: 'Strategic Tech Advisory',
      description: 'Fractional CTO services and architectural audits for visionary operations leaders.'
    }
  ];

  return (
    <section id="services" className="py-40 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="serif-title text-5xl md:text-6xl text-primary mb-6">
            Bespoke Solutions
          </h2>
          <div className="w-12 h-px bg-champagne-gold mx-auto mb-6"></div>
          <p className="text-primary/50 text-xs uppercase tracking-[0.5em]">
            Reserved for the top 1% of founders
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white p-12 shadow-sm hover:shadow-2xl hover:shadow-accent-burgundy/5 transition-all duration-700 group border border-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-accent-burgundy transition-all duration-700"></div>
              
              <div className="mb-10 text-primary group-hover:text-accent-burgundy transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl font-light">
                  {service.icon}
                </span>
              </div>
              
              <h3 className="serif-title text-3xl text-primary mb-6">
                {service.title}
              </h3>
              
              <p className="text-sm text-primary/60 leading-relaxed mb-10">
                {service.description}
              </p>
              
              <a
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary group-hover:text-accent-burgundy transition-colors"
                href="#"
              >
                Explore
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
