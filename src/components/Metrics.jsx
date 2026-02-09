import { motion } from 'framer-motion';

export default function Metrics() {
  const metrics = [
    { value: '120+', label: 'Solutions Deployed' },
    { value: '$4B+', label: 'Client Revenue Managed' },
    { value: '15ms', label: 'Average Latency' },
    { value: '24/7', label: 'Operational Support' }
  ];

  return (
    <section className="py-32 border-y border-primary/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {metrics.map((metric, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
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
