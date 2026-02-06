"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

export function FinalCTASection() {
  return (
    <section className="py-24" style={{ backgroundColor: colors.primary[100] }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 font-mono" style={{ color: colors.primary[400] }}>
            Transform Your Business Today
          </h2>
          
          <p className="text-xl mb-8" style={{ color: `${colors.primary[400]}CC` }}>
            Don't let outdated processes hold you back. Let's build the digital foundation your company needs to thrive.
          </p>
          
          <p className="text-lg mb-12" style={{ color: `${colors.primary[400]}99` }}>
            Schedule a no-obligation discovery call — we'll audit your current setup and share tailored recommendations.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              size="lg"
              className="text-white rounded-none font-mono transition-all duration-300 min-w-[200px]"
              style={{ 
                backgroundColor: colors.accent[100],
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent[200];
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.accent[100];
              }}
            >
              Talk to Our Experts <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="rounded-none font-mono min-w-[200px] transition-all duration-300"
              style={{ 
                borderColor: colors.primary[400],
                color: colors.primary[400],
              }}
            >
              Contact Form
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-sm">
            <a 
              href="mailto:hello@falzin.com" 
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: colors.primary[400] }}
            >
              <Mail className="w-4 h-4" />
              hello@falzin.com
            </a>
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 hover:opacity-70 transition-opacity"
              style={{ color: colors.primary[400] }}
            >
              <Phone className="w-4 h-4" />
              +1 (555) 123-4567
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
