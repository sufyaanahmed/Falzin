"use client";

import { motion } from "framer-motion";
import { Circle } from "lucide-react";
import { cn } from "@/lib/utils";

function ElegantShape({
    className,
    delay = 0,
    width = 400,
    height = 100,
    rotate = 0,
    gradient = "from-white/[0.08]",
}: {
    className?: string;
    delay?: number;
    width?: number;
    height?: number;
    rotate?: number;
    gradient?: string;
}) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -150,
                rotate: rotate - 15,
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: rotate,
            }}
            transition={{
                duration: 2.4,
                delay,
                ease: [0.23, 0.86, 0.39, 0.96],
                opacity: { duration: 1.2 },
            }}
            className={cn("absolute", className)}
        >
            <motion.div
                animate={{
                    y: [0, 15, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                }}
                style={{
                    width,
                    height,
                }}
                className="relative"
            >
                <div
                    className={cn(
                        "absolute inset-0 rounded-full",
                        "bg-gradient-to-r to-transparent",
                        gradient,
                        "backdrop-blur-[2px] border-2 border-[#002962]/[0.15]",
                        "shadow-[0_8px_32px_0_rgba(0,46,98,0.1)]",
                        "after:absolute after:inset-0 after:rounded-full",
                        "after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_70%)]"
                    )}
                />
            </motion.div>
        </motion.div>
    );
}

function HeroGeometric({
    badge = "Design Collective",
    title1 = "Elevate Your Digital Vision",
    title2 = "Crafting Exceptional Websites",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
}) {
    const fadeUpVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                delay: 0.5 + i * 0.2,
                ease: [0.25, 0.4, 0.25, 1] as const,
            },
        }),
    };

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f5f5f5]" style={{ perspective: "2000px" }}>
            <div className="absolute inset-0 bg-gradient-to-br from-[#407ba7]/[0.05] via-transparent to-[#ff002b]/[0.05] blur-3xl" />

            {/* Additional depth layers for immersive effect */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-t from-[#002962]/5 to-transparent"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="absolute inset-0 overflow-hidden" style={{ transformStyle: "preserve-3d" }}>
                <ElegantShape
                    delay={0.3}
                    width={600}
                    height={140}
                    rotate={12}
                    gradient="from-[#004e89]/[0.15]"
                    className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
                />

                <ElegantShape
                    delay={0.5}
                    width={500}
                    height={120}
                    rotate={-15}
                    gradient="from-[#ff002b]/[0.15]"
                    className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
                />

                <ElegantShape
                    delay={0.4}
                    width={300}
                    height={80}
                    rotate={-8}
                    gradient="from-[#407ba7]/[0.15]"
                    className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
                />

                <ElegantShape
                    delay={0.6}
                    width={200}
                    height={60}
                    rotate={20}
                    gradient="from-[#c00021]/[0.15]"
                    className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
                />

                <ElegantShape
                    delay={0.7}
                    width={150}
                    height={40}
                    rotate={-25}
                    gradient="from-[#002962]/[0.15]"
                    className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
                />

                {/* Additional micro shapes for depth */}
                <ElegantShape
                    delay={0.8}
                    width={100}
                    height={30}
                    rotate={15}
                    gradient="from-[#407ba7]/[0.1]"
                    className="right-[8%] bottom-[20%]"
                />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6" style={{ transformStyle: "preserve-3d" }}>
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002962]/[0.08] border border-[#002962]/[0.15] mb-8 md:mb-12"
                        style={{ transform: "translateZ(30px)" }}
                        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,41,98,0.2)" }}
                        transition={{ duration: 0.3 }}
                    >
                        <Circle className="h-2 w-2 fill-[#ff002b]/80" />
                        <span className="text-sm text-[#002962]/60 tracking-wide">
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ transformStyle: "preserve-3d" }}
                    >
                        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 md:mb-8 tracking-tight" style={{ transform: "translateZ(50px)" }}>
                            <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#002962] to-[#002962]/80">
                                {title1}
                            </span>
                            <br />
                            <motion.span
                                className={cn(
                                    "bg-clip-text text-transparent bg-gradient-to-r from-[#004e89] via-[#ff002b] to-[#c00021]"
                                )}
                                animate={{
                                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                style={{ backgroundSize: "200% 200%" }}
                            >
                                {title2}
                            </motion.span>
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        style={{ transform: "translateZ(40px)" }}
                    >
                        <p className="text-base sm:text-lg md:text-xl text-[#002962]/60 mb-8 leading-relaxed font-light tracking-wide max-w-xl mx-auto px-4">
                            Crafting exceptional digital experiences through
                            innovative design and cutting-edge technology.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Enhanced gradient overlays for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#f5f5f5] via-transparent to-[#f5f5f5]/80 pointer-events-none" />
            <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-[#f5f5f5]/50 via-transparent to-[#f5f5f5]/50 pointer-events-none"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            />
        </div>
    );
}

export { HeroGeometric };
