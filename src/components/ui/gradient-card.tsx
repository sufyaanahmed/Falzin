"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { colors } from "@/lib/colors";
import { LucideIcon } from "lucide-react";

interface GradientCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
}

export const GradientCard = ({ icon: Icon, title, description, link = "#" }: GradientCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Handle mouse movement for 3D effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      const rotateX = -(y / rect.height) * 5;
      const rotateY = (x / rect.width) * 5;

      setRotation({ x: rotateX, y: rotateY });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative rounded-3xl overflow-hidden w-full h-full min-h-[380px]"
      style={{
        transformStyle: "preserve-3d",
        backgroundColor: colors.primary[500],
        boxShadow: `0 -10px 100px 10px ${colors.primary[300]}40, 0 0 10px 0 rgba(0, 0, 0, 0.5)`,
      }}
      initial={{ y: 0 }}
      animate={{
        y: isHovered ? -5 : 0,
        rotateX: rotation.x,
        rotateY: rotation.y,
        perspective: 1000,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      {/* Glass reflection overlay */}
      <motion.div
        className="absolute inset-0 z-35 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 80%, rgba(255,255,255,0.05) 100%)",
          backdropFilter: "blur(2px)",
        }}
        animate={{
          opacity: isHovered ? 0.7 : 0.5,
          rotateX: -rotation.x * 0.2,
          rotateY: -rotation.y * 0.2,
          z: 1,
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Dark background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: `linear-gradient(180deg, ${colors.primary[500]} 0%, ${colors.primary[500]} 70%)`,
        }}
        animate={{ z: -1 }}
      />

      {/* Noise texture */}
      <motion.div
        className="absolute inset-0 opacity-30 mix-blend-overlay z-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='5' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        animate={{ z: -0.5 }}
      />

      {/* Gradient glow effect */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-20"
        style={{
          background: `
            radial-gradient(ellipse at bottom right, ${colors.accent[100]}B3 -10%, transparent 70%),
            radial-gradient(ellipse at bottom left, ${colors.primary[200]}B3 -10%, transparent 70%)
          `,
          filter: "blur(40px)",
        }}
        animate={{
          opacity: isHovered ? 0.9 : 0.8,
          y: isHovered ? rotation.x * 0.5 : 0,
          z: 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Central glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-2/3 z-21"
        style={{
          background: `radial-gradient(circle at bottom center, ${colors.accent[200]}B3 -20%, transparent 60%)`,
          filter: "blur(45px)",
        }}
        animate={{
          opacity: isHovered ? 0.85 : 0.75,
          y: isHovered ? `calc(10% + ${rotation.x * 0.3}px)` : "10%",
          z: 0
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Bottom border glow */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] z-25"
        style={{
          background: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.7) 50%, rgba(255, 255, 255, 0.05) 100%)",
        }}
        animate={{
          boxShadow: isHovered
            ? `0 0 20px 4px ${colors.accent[100]}E6, 0 0 30px 6px ${colors.accent[200]}B3, 0 0 40px 8px ${colors.primary[200]}80`
            : `0 0 15px 3px ${colors.accent[100]}CC, 0 0 25px 5px ${colors.accent[200]}99, 0 0 35px 7px ${colors.primary[200]}66`,
          opacity: isHovered ? 1 : 0.9,
          z: 0.5
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />

      {/* Card content */}
      <motion.div
        className="relative flex flex-col h-full p-8 z-40"
        animate={{ z: 2 }}
      >
        {/* Icon circle */}
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center mb-6"
          style={{
            background: `linear-gradient(225deg, ${colors.primary[400]} 0%, ${colors.primary[500]} 100%)`,
            position: "relative",
            overflow: "hidden"
          }}
          initial={{ filter: "blur(3px)", opacity: 0.7 }}
          animate={{
            filter: "blur(0px)",
            opacity: 1,
            boxShadow: isHovered
              ? `0 8px 16px -2px rgba(0, 0, 0, 0.3), 0 4px 8px -1px rgba(0, 0, 0, 0.2), inset 2px 2px 5px ${colors.primary[100]}26, inset -2px -2px 5px rgba(0, 0, 0, 0.7)`
              : `0 6px 12px -2px rgba(0, 0, 0, 0.25), 0 3px 6px -1px rgba(0, 0, 0, 0.15), inset 1px 1px 3px ${colors.primary[100]}1F, inset -2px -2px 4px rgba(0, 0, 0, 0.5)`,
            z: isHovered ? 10 : 5,
            y: isHovered ? -2 : 0,
            rotateX: isHovered ? -rotation.x * 0.5 : 0,
            rotateY: isHovered ? -rotation.y * 0.5 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div
            className="absolute top-0 left-0 w-2/3 h-2/3 opacity-40"
            style={{
              background: "radial-gradient(circle at top left, rgba(255, 255, 255, 0.5), transparent 80%)",
              pointerEvents: "none",
              filter: "blur(10px)"
            }}
          />

          <div className="flex items-center justify-center w-full h-full relative z-10">
            <Icon className="w-6 h-6" style={{ color: colors.primary[100] }} />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="mb-auto"
          animate={{
            z: isHovered ? 5 : 2,
            rotateX: isHovered ? -rotation.x * 0.3 : 0,
            rotateY: isHovered ? -rotation.y * 0.3 : 0
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.h3
            className="text-2xl font-medium mb-3 font-mono"
            style={{
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
              color: colors.primary[100]
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 2px 4px rgba(0,0,0,0.2)" : "none",
              filter: "blur(0px)",
              opacity: 1,
              transition: { duration: 1.2, delay: 0.2 }
            }}
          >
            {title}
          </motion.h3>

          <motion.p
            className="text-sm mb-6"
            style={{
              lineHeight: 1.5,
              fontWeight: 350,
              color: `${colors.primary[100]}D9`
            }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              textShadow: isHovered ? "0 1px 2px rgba(0,0,0,0.1)" : "none",
              filter: "blur(0px)",
              opacity: 0.85,
              transition: { duration: 1.2, delay: 0.4 }
            }}
          >
            {description}
          </motion.p>

          {/* Learn More link */}
          <motion.a
            href={link}
            className="inline-flex items-center text-sm font-medium group font-mono"
            style={{ color: colors.primary[100] }}
            initial={{ filter: "blur(3px)", opacity: 0.7 }}
            animate={{
              filter: "blur(0px)",
              opacity: 0.9,
              transition: { duration: 1.2, delay: 0.6 }
            }}
            whileHover={{
              filter: "drop-shadow(0 0 5px rgba(255, 255, 255, 0.5))"
            }}
          >
            Learn More
            <motion.svg
              className="ml-1 w-4 h-4"
              width="8"
              height="8"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              animate={{
                x: isHovered ? 4 : 0
              }}
              transition={{
                duration: 0.6,
                ease: "easeOut"
              }}
            >
              <path
                d="M1 8H15M15 8L8 1M15 8L8 15"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
