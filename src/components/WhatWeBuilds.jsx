import { motion } from 'framer-motion';

const items = [
  {
    icon: 'layers',
    title: 'Custom SaaS Platforms (Web and Mobile Applications)',
    description:
      "Proprietary web and mobile platforms tailored to your company’s unique operations.",
  },
  {
    icon: 'build',
    title: 'Internal Operations Software (Web Dashboards, Admin Panels, and Tools)',
    description:
      'Custom web dashboards and admin tools that replace spreadsheets and disconnected workflows.',
  },
  {
    icon: 'account_tree',
    title: 'Workflow Automation Systems (Automated Forms, Data Workflows, and App Integrations)',
    description:
      'Systems that automate repetitive tasks across apps and tools, saving time and reducing errors.',
  },
  {
    icon: 'bar_chart',
    title: 'Data Infrastructure & Dashboards (Reporting Portals and Analytics Apps)',
    description:
      'Web and mobile dashboards that consolidate data and provide real-time operational insights.',
  },
  {
    icon: 'smart_toy',
    title: 'AI-Powered Operational Tools',
    description:
      'Applications that use AI to assist teams with decisions, predict outcomes, and automate complex workflows.',
  },
];

export default function WhatWeBuilds() {
  return (
    <section id="what-we-build" className="py-40 bg-background-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-24"
        >
          <h2 className="serif-title text-5xl md:text-6xl text-primary mb-6">
            What Falzin Builds
          </h2>
          <div className="w-12 h-px bg-champagne-gold mx-auto mb-6"></div>
          <p className="text-primary/50 text-xs uppercase tracking-[0.5em]">
            Software systems for operations-driven businesses
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-12 shadow-sm hover:shadow-2xl hover:shadow-accent-burgundy/5 transition-all duration-700 group border border-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-transparent group-hover:bg-accent-burgundy transition-all duration-700"></div>

              <div className="mb-10 text-primary group-hover:text-accent-burgundy transition-colors duration-500">
                <span className="material-symbols-outlined text-4xl font-light">
                  {item.icon}
                </span>
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-primary/35 font-bold mb-3">
                {item.subtitle}
              </p>

              <h3 className="serif-title text-3xl text-primary mb-6">
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
  );
}
