"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Code2, Target } from "lucide-react";
import DraggableAIBackground from "@/components/DraggableAIBackground";
import CountdownTimer3D from "@/components/CountdownTimer3D";
import RegisterButton from "@/components/RegisterButton";
import SkillNetLogo from "@/components/SkillNetLogoSVG";
import MouseTracker from "@/components/MouseTracker";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* Draggable AI Hackathon 3D Background */}
      <DraggableAIBackground />

      {/* Mouse Tracker */}
      <MouseTracker />

      <div className="relative min-h-screen z-10">
        {/* Main Container with better mobile spacing */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 space-y-12 sm:space-y-16 lg:space-y-20 relative">
            {/* Content with proper z-index */}
            <div className="relative z-20 flex flex-col items-center justify-center space-y-12 sm:space-y-16 lg:space-y-20 w-full">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-center space-y-6 sm:space-y-8 lg:space-y-12"
              >
                {/* SkillNet Logo - Responsive */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex justify-center mb-8 sm:mb-10 lg:mb-12 relative z-30"
                >
                  <div className="bg-black/30 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6 border border-orange-500/20">
                    <SkillNetLogo
                      width={280}
                      height={70}
                      className="sm:hidden"
                    />
                    <SkillNetLogo
                      width={350}
                      height={87}
                      className="hidden sm:block lg:hidden"
                    />
                    <SkillNetLogo
                      width={400}
                      height={100}
                      className="hidden lg:block"
                    />
                  </div>
                </motion.div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold text-white tracking-tight leading-tight px-4">
                  FutureHack-X
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 text-sm sm:text-base lg:text-lg xl:text-xl text-gray-300 mt-6 sm:mt-8 lg:mt-10 px-4">
                  <span className="font-semibold">Innovate</span>
                  <span className="text-orange-400 text-lg sm:text-xl lg:text-2xl">
                    •
                  </span>
                  <span className="font-semibold">Create</span>
                  <span className="text-orange-400 text-lg sm:text-xl lg:text-2xl">
                    •
                  </span>
                  <span className="font-semibold">Future</span>
                </div>
              </motion.div>

              {/* Countdown Timer - Better mobile sizing */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="w-full max-w-sm sm:max-w-2xl lg:max-w-4xl px-4"
              >
                <CountdownTimer3D targetDate="2026-01-04T00:00:00Z" />
              </motion.div>

              {/* Register Button - Mobile optimized */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg px-4"
              >
                <RegisterButton />
              </motion.div>
            </div>
          </section>

          {/* Event Details Section - Mobile optimized */}
          <section className="py-16 sm:py-20 lg:py-24 space-y-12 sm:space-y-14 lg:space-y-16 flex flex-col items-center justify-center">
            {/* Event Info Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 max-w-7xl mx-auto justify-items-center px-4"
            >
              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-orange-500/20 text-center min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center shadow-2xl hover:bg-white/10 transition-all duration-300 w-full max-w-sm">
                <Calendar className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 text-orange-400 mx-auto mb-6 sm:mb-8" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Event Date
                </h3>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
                  January 4, 2026
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-orange-500/20 text-center min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center shadow-2xl hover:bg-white/10 transition-all duration-300 w-full max-w-sm">
                <Target className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 text-orange-400 mx-auto mb-6 sm:mb-8" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Theme
                </h3>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
                  Advanced AI & Innovation
                </p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-6 sm:p-8 lg:p-10 xl:p-12 border border-orange-500/20 text-center min-h-[200px] sm:min-h-[220px] lg:min-h-[240px] flex flex-col justify-center shadow-2xl hover:bg-white/10 transition-all duration-300 w-full max-w-sm">
                <Code2 className="w-10 sm:w-12 lg:w-14 xl:w-16 h-10 sm:h-12 lg:h-14 xl:h-16 text-orange-400 mx-auto mb-6 sm:mb-8" />
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-4 sm:mb-6">
                  Domains
                </h3>
                <p className="text-gray-300 text-base sm:text-lg lg:text-xl">
                  19 Tech Challenges
                </p>
              </div>
            </motion.div>
          </section>

          {/* Innovation Domains Section - Mobile optimized */}
          <section className="py-20 sm:py-24 lg:py-32 space-y-12 sm:space-y-16 lg:space-y-20 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center space-y-6 sm:space-y-8 lg:space-y-10 max-w-6xl mx-auto px-4"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight">
                19 Innovation Domains
              </h2>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
                Choose your battlefield and innovate in cutting-edge technology
                domains
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 max-w-7xl mx-auto justify-items-center px-4"
            >
              {[
                "AI for Governance",
                "Machine Learning & MLOps",
                "Deep Learning & Computer Vision",
                "NLP & BHASHINI",
                "IoT for Smart Cities",
                "Robotics & Automation",
                "UAVs & Drones Analytics",
                "AR/VR & Spatial Computing",
                "Blockchain & Web3",
                "Cybersecurity & CERT-In",
                "Data Platforms & Analytics",
                "Open Data for AI",
                "AI Supercomputing (AIRAWAT)",
                "Semiconductors & Embedded",
                "Smart Mobility & Transport",
                "Agriculture AI",
                "Healthcare AI",
                "Education & AI Skilling",
                "Smart Cities & Infrastructure",
              ].map((domain, index) => (
                <motion.div
                  key={domain}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 xl:p-10 border border-orange-500/20 hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 text-center min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] flex items-center justify-center w-full max-w-xs sm:max-w-sm shadow-lg hover:shadow-2xl hover:scale-105"
                >
                  <p className="text-white font-medium text-sm sm:text-base lg:text-lg leading-relaxed">
                    {domain}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </section>
        </div>
      </div>
    </>
  );
}
