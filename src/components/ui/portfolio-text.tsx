"use client";

import { motion } from "framer-motion";
import { colors } from "@/lib/colors";
import { cn } from "@/lib/utils";

interface AnimatedLetterTextProps {
  text: string;
  letterToReplace: string;
  className?: string;
}

export const AnimatedLetterText = ({ text, letterToReplace, className }: AnimatedLetterTextProps) => {
  const letters = text.split("");
  
  return (
    <span className={cn("inline-flex items-center", className)}>
      {letters.map((letter, index) => {
        const shouldReplace = letter.toLowerCase() === letterToReplace.toLowerCase();
        
        return (
          <span key={index} className="inline-flex items-center">
            {shouldReplace ? (
              <motion.span
                className="inline-flex items-center justify-center mx-0.5"
                style={{ position: "relative", display: "inline-block", width: "1em", height: "1em" }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <svg
                  width="1em"
                  height="1em"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ position: "absolute" }}
                >
                  <defs>
                    <linearGradient id="diamondGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: colors.accent[100], stopOpacity: 1 }} />
                      <stop offset="50%" style={{ stopColor: colors.accent[200], stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: colors.accent[300], stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <polygon
                    points="50,10 90,50 50,90 10,50"
                    fill="url(#diamondGradient)"
                    stroke={colors.accent[100]}
                    strokeWidth="2"
                  />
                </svg>
              </motion.span>
            ) : (
              letter
            )}
          </span>
        );
      })}
    </span>
  );
};
