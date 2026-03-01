import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import CalButton from './ui/CalButton';

const smoothScrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleScrollLink = (id) => {
    setMenuOpen(false);
    // If not on home page, navigate there first then scroll
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => smoothScrollTo(id), 400);
    } else {
      smoothScrollTo(id);
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-0 w-full z-50 border-b border-primary/10 bg-background-light/80 backdrop-blur-md dark:bg-background-dark/80"
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          >
            <img src="/Logo_new.jpeg" alt="Falzin Logo" className="h-10 w-auto object-contain" />
            <h2 className="text-xl font-bold tracking-[0.2em] luxury-text-spacing text-primary uppercase">
              FALZIN
            </h2>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-12">
            <Link
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors"
              to="/expertise"
            >
              Expertise
            </Link>
            <Link
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors"
              to="/projects"
            >
              Work
            </Link>
            <a
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => { e.preventDefault(); handleScrollLink('method'); }}
              href="#method"
            >
              The Method
            </a>
            <a
              className="text-xs font-semibold uppercase tracking-[0.2em] text-primary/80 hover:text-primary transition-colors cursor-pointer"
              onClick={(e) => { e.preventDefault(); handleScrollLink('services'); }}
              href="#services"
            >
              Solutions
            </a>
          </nav>

          {/* Desktop CTA */}
          <CalButton className="hidden md:block px-6 py-2 bg-primary text-white text-xs font-bold uppercase tracking-widest border border-champagne-gold/40 rounded-sm hover:bg-primary/90 transition-all duration-500">
            Talk To Us
          </CalButton>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus:outline-none"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-primary origin-center"
            />
            <motion.span
              animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.15 }}
              className="block w-6 h-[1.5px] bg-primary"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.25 }}
              className="block w-6 h-[1.5px] bg-primary origin-center"
            />
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-primary/10 backdrop-blur-sm md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-72 z-50 bg-background-light border-l border-primary/10 shadow-2xl flex flex-col pt-24 px-8 pb-10 md:hidden"
            >
              <nav className="flex flex-col gap-8 mb-12">
                {[
                  { label: 'Expertise', to: '/expertise', scroll: null },
                  { label: 'Work', to: '/projects', scroll: null },
                  { label: 'The Method', to: null, scroll: 'method' },
                  { label: 'Solutions', to: null, scroll: 'services' },
                ].map((item) =>
                  item.to ? (
                    <Link
                      key={item.label}
                      to={item.to}
                      className="text-sm font-bold uppercase tracking-[0.25em] text-primary/70 hover:text-primary transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      key={item.label}
                      href={`#${item.scroll}`}
                      className="text-sm font-bold uppercase tracking-[0.25em] text-primary/70 hover:text-primary transition-colors cursor-pointer"
                      onClick={(e) => { e.preventDefault(); handleScrollLink(item.scroll); }}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </nav>

              <div className="border-t border-primary/10 pt-8">
                <CalButton
                  className="w-full py-4 bg-primary text-white text-xs font-bold uppercase tracking-widest border border-champagne-gold/40 rounded-sm hover:bg-primary/90 transition-all duration-500"
                  onClick={() => setMenuOpen(false)}
                >
                  Talk To Us
                </CalButton>
              </div>

              {/* Decorative serif watermark */}
              <span className="serif-title text-7xl italic text-primary/5 select-none mt-auto leading-none">
                Falzin
              </span>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
