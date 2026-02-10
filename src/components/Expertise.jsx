import { motion } from 'framer-motion';
import Header from './Header';
import Footer from './Footer';
import { ScrollToTop } from './ScrollToTop';

export default function Expertise() {
  const services = [
    {
      icon: 'web',
      title: 'Web Application Development',
      description: 'Custom web applications engineered with cutting-edge technologies. Scalable architecture, seamless integrations, and exceptional user experiences that drive business growth.',
      features: ['React & Next.js', 'RESTful APIs', 'Cloud Infrastructure', 'Real-time Features']
    },
    {
      icon: 'business_center',
      title: 'ERP Implementation & Setup',
      description: 'Enterprise Resource Planning solutions tailored to your operational workflow. From assessment to deployment, we ensure your ERP system delivers maximum efficiency.',
      features: ['System Integration', 'Process Automation', 'Data Migration', 'Training & Support']
    },
    {
      icon: 'tune',
      title: 'Custom ERP Modules',
      description: 'Bespoke ERP customizations and module development. Extend your existing system with proprietary features designed for your unique business requirements.',
      features: ['Custom Workflows', 'Advanced Reporting', 'Third-party Integration', 'Mobile Access']
    }
  ];

  const technologies = [
    { name: 'React & Next.js', category: 'Frontend' },
    { name: 'Node.js & Python', category: 'Backend' },
    { name: 'PostgreSQL & MongoDB', category: 'Database' },
    { name: 'AWS & Azure', category: 'Cloud' },
    { name: 'Custom ERP Setup', category: 'ERP' },
    { name: 'Docker & Kubernetes', category: 'DevOps' }
  ];

  const approach = [
    {
      step: '01',
      title: 'Discovery & Analysis',
      description: 'Deep dive into your business processes, technical requirements, and growth objectives.'
    },
    {
      step: '02',
      title: 'Architecture Design',
      description: 'Crafting scalable, secure system architecture aligned with enterprise best practices.'
    },
    {
      step: '03',
      title: 'Iterative Development',
      description: 'Agile development cycles with continuous feedback and quality assurance.'
    },
    {
      step: '04',
      title: 'Deployment & Evolution',
      description: 'Seamless launch with ongoing optimization, monitoring, and strategic enhancements.'
    }
  ];

  return (
    <div className="bg-background-light text-[#0c121d] dark:bg-background-dark dark:text-white antialiased font-display">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex flex-col items-center justify-center px-4 pt-32 pb-20">
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
            <div className="w-[500px] h-[500px] rounded-full blur-[100px] bg-gradient-to-tr from-[#E6D5B8]/20 via-transparent to-primary/10"></div>
          </div>
          
          <div className="relative z-10 text-center max-w-5xl mx-auto">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xs uppercase tracking-[0.4em] font-semibold text-accent-emerald mb-8 block"
            >
              OUR EXPERTISE
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="serif-title text-5xl md:text-7xl font-light leading-tight text-primary mb-8"
            >
              Enterprise Solutions <br />
              <span className="italic">Built to Last</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg md:text-xl font-light text-primary/60 max-w-3xl mx-auto leading-relaxed"
            >
              From sophisticated web applications to comprehensive ERP systems, we deliver technology that scales with your ambition.
            </motion.p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-32 bg-white/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="serif-title text-4xl md:text-5xl text-primary mb-6">
                Core Capabilities
              </h2>
              <div className="w-12 h-px bg-champagne-gold mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="bg-background-light p-10 border border-primary/10 hover:border-primary/20 transition-all duration-500 group"
                >
                  <div className="mb-8 text-primary group-hover:text-accent-emerald transition-colors duration-500">
                    <span className="material-symbols-outlined text-5xl font-light">
                      {service.icon}
                    </span>
                  </div>
                  
                  <h3 className="serif-title text-2xl text-primary mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-primary/60 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-primary/70">
                        <span className="w-1 h-1 bg-champagne-gold rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-32 bg-background-light">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="serif-title text-4xl md:text-5xl text-primary mb-6">
                Technology Stack
              </h2>
              <p className="text-primary/60 max-w-2xl mx-auto">
                Industry-leading tools and frameworks selected for reliability, performance, and scalability.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-white p-8 border border-primary/5 text-center hover:border-accent-emerald/30 transition-all duration-500"
                >
                  <div className="text-xs uppercase tracking-widest text-accent-emerald mb-2 font-semibold">
                    {tech.category}
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {tech.name}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-32 bg-white/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-20"
            >
              <h2 className="serif-title text-4xl md:text-5xl text-primary mb-6">
                Our Approach
              </h2>
              <div className="w-12 h-px bg-champagne-gold mx-auto"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approach.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-background-light p-10 border-l-2 border-accent-burgundy"
                >
                  <div className="serif-title text-5xl text-primary/20 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-3 text-primary">
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary/60 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="serif-title text-4xl md:text-6xl mb-8 leading-tight"
            >
              Ready to Build Something Exceptional?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/70 text-lg mb-10 leading-relaxed"
            >
              Let's discuss how our expertise can transform your digital infrastructure.
            </motion.p>
            
            <motion.button 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="px-12 py-5 bg-white text-primary font-bold uppercase tracking-[0.3em] text-sm hover:bg-champagne-gold hover:text-white transition-all duration-500"
            >
              Schedule a Consultation
            </motion.button>
          </div>
        </section>
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}
