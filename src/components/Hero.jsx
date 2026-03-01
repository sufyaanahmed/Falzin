import { motion } from 'framer-motion';
import CalButton from './ui/CalButton';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20 overflow-hidden">
      {/* Background blur — hero-bg-blur class scales it down on mobile via CSS */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40 pointer-events-none">
        <div className="hero-bg-blur w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-tr from-[#E6D5B8]/30 via-transparent to-primary/10"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.4em] font-semibold text-accent-emerald mb-8 block"
        >
          AN ELITE DIGITAL ATELIER
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="serif-title text-5xl sm:text-6xl md:text-8xl font-light leading-tight text-primary mb-6 md:mb-8"
        >
          Architecting <br />
          <span className="italic">Digital Excellence</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-base md:text-xl font-light text-primary/60 max-w-2xl mx-auto mb-10 md:mb-12 luxury-text-spacing leading-relaxed"
        >
          Bespoke software and automation for the visionary leader.
        </motion.p>
        
        <div className="flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            <CalButton className="px-8 md:px-10 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] text-sm rounded-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500">
              Connect with Us
            </CalButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
