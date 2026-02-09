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
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs uppercase tracking-[0.4em] font-semibold text-accent-emerald mb-8 block"
        >
          AN ELITE DIGITAL ATELIER
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="serif-title text-6xl md:text-8xl font-light leading-tight text-primary mb-8"
        >
          Architecting <br />
          <span className="italic">Digital Excellence</span>.
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-lg md:text-xl font-light text-primary/60 max-w-2xl mx-auto mb-12 luxury-text-spacing leading-relaxed"
        >
          Bespoke software and automation for the visionary leader.
        </motion.p>
        
        <div className="flex flex-col items-center gap-6">
          <motion.button 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-[0.2em] text-sm rounded-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-700"
          >
            Request an Invitation
          </motion.button>
          
          {/* Abstract 3D Element */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-20 w-48 h-48 relative"
          >
            <div className="absolute inset-0 border border-champagne-gold/20 rotate-45 animate-[pulse_6s_infinite]"></div>
            <div className="absolute inset-4 border border-primary/10 -rotate-12"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                alt="Abstract 3D glass and gold sculpture"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXIyGoecmdmsvtgV-f9WNGRyaV4W5MOQJyRIAwGtom9M7mg2i88F0l4AQYBHDYdNYo0Zcz-7XI7BRTtB-abGj5FWIgtOom_nNhCJ5LHdZBqo8psUC2bhEx6zhhFG5UxFDsZyj537shNdLrODoKD6AtLF-eIydty9hLjJBUx3OGSm2O7NsvK99sCGfvc5e3BBBKqS4jAcBIa3hObtDdYJb4Wb3bM0fhiOfUdFxPjBPC-OYAC-e143k0WHtgJBSfL86EwCSmVlck-KU"
              />
            </div>
          </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary/30">
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-primary/20"></div>
      </div>
    </section>
  );
}
