"use client";

import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, Smartphone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const insights = [
  {
    icon: TrendingUp,
    title: "How Custom ERP Implementation Can Cut Operational Costs by 40%",
    excerpt: "Discover the strategic advantages of custom ERP solutions and how they transform business operations.",
  },
  {
    icon: Smartphone,
    title: "The Future of Mobile Apps: Trends Driving Business Growth in 2026",
    excerpt: "Explore emerging mobile app technologies and user experience trends shaping the industry.",
  },
  {
    icon: Sparkles,
    title: "Why AI Automation Is No Longer Optional for Competitive Businesses",
    excerpt: "Learn how AI-powered automation is revolutionizing workflows and driving efficiency.",
  },
];

export function InsightsSection() {
  return (
    <section className="py-24" style={{ backgroundColor: colors.primary[50] }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono" style={{ color: colors.primary[400] }}>
            Latest from Falzin
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: `${colors.primary[400]}99` }}>
            Insights & thought leadership to help you stay ahead.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border rounded-xl p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              style={{ 
                backgroundColor: colors.primary[100],
                borderColor: `${colors.primary[400]}1A`
              }}
            >
              <div className="mb-4">
                <div 
                  className="inline-flex p-3 rounded-lg"
                  style={{ backgroundColor: `${colors.primary[300]}1A` }}
                >
                  <insight.icon 
                    className="h-6 w-6" 
                    style={{ color: colors.primary[300] }}
                  />
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-3 font-mono group-hover:text-opacity-80 transition-opacity" style={{ color: colors.primary[400] }}>
                {insight.title}
              </h3>
              
              <p className="text-sm mb-4" style={{ color: `${colors.primary[400]}99` }}>
                {insight.excerpt}
              </p>
              
              <span className="text-sm font-semibold inline-flex items-center" style={{ color: colors.accent[100] }}>
                Read More <ArrowRight className="ml-1 w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="rounded-none font-mono transition-all duration-300"
            style={{ 
              borderColor: colors.primary[400],
              color: colors.primary[400],
            }}
          >
            Read More Insights <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
