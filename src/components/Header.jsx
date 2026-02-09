import { motion } from 'framer-motion'; 
import { Link } from 'react-router-dom';

const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <Link 
            to="/"
            className="flex items-center gap-3"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
        <div className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-sm">
            <span className="material-symbols-outlined text-sm">architecture</span>
        </div>
            <h2 className="text-xl font-bold tracking-[0.2em] luxury-text-spacing text-primary uppercase">
                FALZIN
            </h2>
        </Link>

        
        <nav className="hidden md:flex items-center gap-12">
          <Link
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors cursor-pointer"
            to="/expertise"
          >
            Expertise
          </Link>
          <a
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('method'); }}
            href="#method"
          >
            The Method
          </a>
          <a
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('services'); }}
            href="#services"
          >
            Case Studies
          </a>
          <a
            className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors cursor-pointer"
            onClick={(e) => { e.preventDefault(); smoothScrollTo('footer'); }}
            href="#footer"
          >
            Journal
          </a>
        </nav>
        
        <button className="px-6 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest border border-champagne-gold/40 rounded-sm hover:bg-primary/90 transition-all duration-500">
          Talk To Us
        </button>
      </div>
    </motion.header>
  );
}
