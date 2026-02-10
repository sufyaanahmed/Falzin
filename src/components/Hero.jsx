import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
        <div className="w-[600px] h-[600px] rounded-full blur-[120px] bg-gradient-to-tr from-[#E6D5B8]/30 via-transparent to-primary/10"></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs uppercase tracking-[0.4em] font-semibold text-accent-emerald mb-8 block"
        >
          AN ELITE DIGITAL ATELIER
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="serif-title text-6xl md:text-8xl font-light leading-tight text-primary mb-8"
        >
          Architecting <br />
          <span className="italic">Digital Excellence</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}the scroll and animations are still not that smooth
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl font-light text-primary/60 max-w-2xl mx-auto mb-12 luxury-text-spacing leading-relaxed"
        >
          Bespoke software and automation for the visionary leader.
        </motion.p>
        
        <div className="flex flex-col items-center gap-6">
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] text-sm rounded-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700"
          >
            Request an Invitation
          </motion.button>
          
        </div>
      </div>
      
   
    </section>
  );
}
