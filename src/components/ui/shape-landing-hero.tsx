"use client";

import { motion } from "framer-motion";
import { Circle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

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
    badge = "Falzin",
    title1 = "Stop Wasting Time on Manual Processes",
    title2 = "",
    subtitle = "Your business deserves intelligent systems that run smoothly — not endless spreadsheets and repetitive tasks.",
    description = "We build powerful websites, mobile apps, custom software, and tailored ERP solutions that automate operations, boost efficiency, and accelerate growth.",
}: {
    badge?: string;
    title1?: string;
    title2?: string;
    subtitle?: string;
    description?: string;
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
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#f5f5f5]">
            <div className="absolute inset-0 bg-gradient-to-br from-[#407ba7]/[0.05] via-transparent to-[#ff002b]/[0.05] blur-3xl" />

            <div className="absolute inset-0 overflow-hidden">
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
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        custom={0}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 md:mb-12"
                        style={{
                            backgroundColor: `${colors.primary[400]}14`,
                            borderWidth: '1px',
                            borderColor: `${colors.primary[400]}26`
                        }}
                    >
                        <Circle className="h-2 w-2" style={{ fill: `${colors.accent[100]}CC` }} />
                        <span className="text-sm tracking-wide" style={{ color: `${colors.primary[400]}99` }}>
                            {badge}
                        </span>
                    </motion.div>

                    <motion.div
                        custom={1}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
                            <span 
                                className="bg-clip-text text-transparent bg-gradient-to-b"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, ${colors.primary[400]}, ${colors.primary[400]}CC)`
                                }}
                            >
                                {title1}
                            </span>
                            {title2 && (
                                <>
                                    <br />
                                    <span
                                        className="bg-clip-text text-transparent"
                                        style={{
                                            backgroundImage: `linear-gradient(to right, ${colors.primary[300]}, ${colors.accent[100]}, ${colors.accent[200]})`
                                        }}
                                    >
                                        {title2}
                                    </span>
                                </>
                            )}
                        </h1>
                    </motion.div>

                    <motion.div
                        custom={2}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <p className="text-lg sm:text-xl md:text-2xl mb-4 leading-relaxed font-medium max-w-3xl mx-auto px-4" style={{ color: `${colors.primary[400]}E6` }}>
                            {subtitle}
                        </p>
                        <p className="text-base sm:text-lg md:text-xl mb-8 leading-relaxed max-w-3xl mx-auto px-4" style={{ color: `${colors.primary[400]}99` }}>
                            {description}
                        </p>
                    </motion.div>

                    <motion.div
                        custom={3}
                        variants={fadeUpVariants}
                        initial="hidden"
                        animate="visible"
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <Button
                            size="lg"
                            className="text-white rounded-none font-mono text-base px-8 py-6 transition-all duration-300"
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
                            Get Your Free Consultation <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t pointer-events-none" style={{
                backgroundImage: `linear-gradient(to top, ${colors.primary[50]}, transparent, ${colors.primary[50]}CC)`
            }} />
        </div>
    );
}

export { HeroGeometric };
