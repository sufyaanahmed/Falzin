import { motion } from 'framer-motion';

export default function Metrics() {
  const metrics = [
    { value: '5+', label: 'Solutions Deployed' },
    { value: '200k+', label: 'Client Revenue Managed' },
    { value: '15ms', label: 'Average Latency' },
    { value: '24/7', label: 'Operational Support' }
  ];

  return (
    <section className="py-32 border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="text-center"
          >
            <div className="serif-title text-6xl text-primary mb-2">
              {metric.value}
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-primary/40 font-bold">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
