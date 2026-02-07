"use client";

import {
  ArrowRight,
  Bird,
  Menu,
} from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HeroGeometric } from "@/components/ui/hero-geometric";
import { ValuePropositionSection } from "@/components/ui/value-proposition-section";
import { ServicesSection } from "@/components/ui/services-section";
import { PortfolioSection } from "@/components/ui/portfolio-section";
import { HoverFooter } from "@/components/ui/hover-footer";
import { colorClasses } from "@/lib/colors";

const navigationItems = [
  { title: "SOLUTIONS", href: "#" },
  { title: "SERVICES", href: "#services" },
  { title: "INSIGHTS", href: "#" },
  { title: "CONTACT", href: "#contact" },
];

export function MainLayout() {

  return (
    <div className={`relative min-h-screen ${colorClasses.bg.primary} overflow-hidden`}>
      <div className="relative z-10">
        <header className={`sticky top-0 z-50 backdrop-blur-md ${colorClasses.bg.primary}/80 ${colorClasses.border.primary} border-b`}>
          <div className="container mx-auto px-4">
            <div className="flex h-16 items-center justify-between">
              <a href="#" className="flex items-center gap-2">
                <div className="flex items-center space-x-2">
                  <Bird className={`h-8 w-8 ${colorClasses.text.accent}`} />
                  <span className={`font-mono text-xl font-bold ${colorClasses.text.primary}`}>Falzin</span>
                </div>
              </a>

              <nav className="hidden md:flex items-center space-x-8">
                {navigationItems.map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className={`text-sm font-mono ${colorClasses.text.secondary} ${colorClasses.text.accentHover} transition-colors`}
                  >
                    {item.title}
                  </a>
                ))}
              </nav>

              <div className="flex items-center space-x-4">
                <Button
                  variant="default"
                  className={`rounded-none hidden md:inline-flex ${colorClasses.bg.accent} ${colorClasses.bg.accentHover} font-mono text-white`}
                >
                  TALK TO US <ArrowRight className="ml-1 w-4 h-4" />
                </Button>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className={`md:hidden ${colorClasses.text.primary}`}>
                      <Menu className="h-5 w-5" />
                      <span className="sr-only">Toggle menu</span>
                    </Button>
                  </SheetTrigger>
                  <SheetContent className={`${colorClasses.bg.primary} ${colorClasses.border.primary}`}>
                    <nav className="flex flex-col gap-6 mt-6">
                      {navigationItems.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          className="text-sm font-mono text-[#002962]/60 hover:text-[#ff002b] transition-colors"
                        >
                          {item.title}
                        </a>
                      ))}
                      <Button className={`cursor-pointer rounded-none ${colorClasses.bg.accent} ${colorClasses.bg.accentHover} font-mono text-white`}>
                        TALK TO US <ArrowRight className="ml-1 w-4 h-4" />
                      </Button>
                    </nav>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </header>

        <div className="relative">
          <HeroGeometric 
            badge="Falzin"
            title1="If your business had a face,"
            title2="it’d be your website."
          />
        </div>

        <div id="value-proposition">
          <ValuePropositionSection />
        </div>

        <div id="services">
          <ServicesSection />
        </div>

        <div id="portfolio">
          <PortfolioSection />
        </div>
        
        <div id="contact">
          <HoverFooter />
        </div>
      </div>
    </div>
  );
}
