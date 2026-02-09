import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section className="py-40 bg-primary text-white overflow-hidden relative">
      <div className="absolute right-0 bottom-0 opacity-10 hidden md:block">
        <span className="serif-title text-[10rem] md:text-[15rem] lg:text-[20rem] leading-none italic select-none">
          Excellence
        </span>
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="serif-title text-5xl md:text-7xl mb-10 leading-tight"
        >
          Ready to elevate your digital infrastructure?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white/60 text-lg mb-12 luxury-text-spacing font-light"
        >
          We accept a limited number of clients per quarter to ensure obsessive quality control.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="px-12 py-5 bg-white text-primary font-bold uppercase tracking-[0.3em] text-sm hover:bg-champagne-gold hover:text-white transition-all duration-500"
        >
          Request an Invitation
        </motion.button>
      </div>
    </section>
  );
}
