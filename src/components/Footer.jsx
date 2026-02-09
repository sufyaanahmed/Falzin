import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer id="footer" className="py-20 bg-background-light border-t border-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20"
        >
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-sm">
                <span className="material-symbols-outlined text-[10px]">architecture</span>
              </div>
              <h2 className="text-sm font-bold tracking-[0.2em] luxury-text-spacing text-primary uppercase">
                FALZIN
              </h2>
            </div>
            <p className="text-sm text-primary/50 leading-loose">
              Architecting digital excellence for visionary leaders. Bespoke, performance-driven, and exclusively refined.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-16 md:gap-24">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/30 mb-8">
                Navigation
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    Expertise
                  </a>
                </li>
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    The Method
                  </a>
                </li>
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/30 mb-8">
                Legal
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary/30 mb-8">
                Connect
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="text-xs text-primary/60 hover:text-primary transition-colors uppercase tracking-widest" href="#">
                    Journal
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center border-t border-primary/5 pt-10 gap-6"
        >
          <p className="text-[10px] text-primary/40 uppercase tracking-[0.3em]">
            © 2026 Falzin Digital Atelier. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-primary/40">
            <span className="material-symbols-outlined text-lg">language</span>
            <span className="text-[10px] uppercase tracking-widest">
              Dubai / Bangalore
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
