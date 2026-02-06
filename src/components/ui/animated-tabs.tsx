"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface AnimatedTabsProps {
  tabs?: Tab[];
  defaultTab?: string;
  className?: string;
}

const AnimatedTabs = ({
  tabs,
  defaultTab,
  className,
}: AnimatedTabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(defaultTab || tabs?.[0]?.id || "");

  if (!tabs?.length) return null;

  return (
    <div className={cn("w-full flex flex-col gap-y-4", className)}>
      <div className="flex gap-2 flex-wrap p-1 rounded-xl" style={{
        backgroundColor: `${tabs[0] ? '#00043a' : '#00043a'}98`,
        backdropFilter: 'blur(10px)'
      }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "relative px-4 py-2 text-sm font-medium rounded-lg text-white outline-none transition-colors font-mono"
            )}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-tab"
                className="absolute inset-0 shadow-lg backdrop-blur-sm !rounded-lg"
                style={{ backgroundColor: `${tabs[0] ? '#002962' : '#002962'}d1` }}
                transition={{ type: "spring", duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{tab.label}</span>
          </button>
        ))}
      </div>

      <div className="p-6 text-white rounded-xl border min-h-80 h-full shadow-xl" style={{
        backgroundColor: `${tabs[0] ? '#00043a' : '#00043a'}98`,
        backdropFilter: 'blur(10px)',
        borderColor: `${tabs[0] ? '#002962' : '#002962'}33`
      }}>
        {tabs.map(
          (tab) =>
            activeTab === tab.id && (
              <motion.div
                key={tab.id}
                initial={{
                  opacity: 0,
                  scale: 0.95,
                  x: -10,
                  filter: "blur(10px)",
                }}
                animate={{ opacity: 1, scale: 1, x: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.95, x: -10, filter: "blur(10px)" }}
                transition={{
                  duration: 0.5,
                  ease: [0.25, 0.4, 0.25, 1],
                  type: "spring",
                }}
              >
                {tab.content}
              </motion.div>
            )
        )}
      </div>
    </div>
  );
};

export { AnimatedTabs };
