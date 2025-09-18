"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Code2, Target } from "lucide-react";
import CountdownTimer3D from "@/components/CountdownTimer3D";
import RegisterButton from "@/components/RegisterButton";
import Advanced3DBackground from "@/components/Advanced3DBackground";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section
          className="min-h-screen flex flex-col items-center justify-center py-20 space-y-20 relative overflow-hidden"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Advanced 3D Animated Background */}
          <Advanced3DBackground />

          {/* Background Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm z-10"></div>

          {/* Content with higher z-index */}
          <div className="relative z-20 flex flex-col items-center justify-center space-y-20 w-full">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center space-y-12"
            >
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-tight">
                FutureHack-X
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-orange-300 font-medium mt-8">
                Powered by SkillNet Learning
              </p>
              <div className="flex flex-wrap items-center justify-center gap-6 text-base sm:text-lg md:text-xl text-gray-300 mt-10">
                <span className="font-semibold">Innovate</span>
                <span className="text-orange-400 text-2xl">•</span>
                <span className="font-semibold">Create</span>
                <span className="text-orange-400 text-2xl">•</span>
                <span className="font-semibold">Future</span>
              </div>
            </motion.div>

            {/* Countdown Timer - Centered and Single */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="w-full max-w-4xl"
            >
              <CountdownTimer3D targetDate="2026-01-04T00:00:00Z" />
            </motion.div>

            {/* Large Prominent Register Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="w-full max-w-lg"
            >
              <RegisterButton />
            </motion.div>
          </div>
        </section>

        {/* Event Details Section */}
        <section className="py-24 space-y-16 flex flex-col items-center justify-center">
          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 lg:gap-16 max-w-6xl mx-auto justify-items-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-10 lg:p-12 border border-orange-500/20 text-center min-h-[240px] flex flex-col justify-center shadow-2xl hover:bg-white/10 transition-all duration-300">
              <Calendar className="w-14 h-14 lg:w-16 lg:h-16 text-orange-400 mx-auto mb-8" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Event Date
              </h3>
              <p className="text-gray-300 text-lg lg:text-xl">
                January 4, 2026
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-10 lg:p-12 border border-orange-500/20 text-center min-h-[240px] flex flex-col justify-center shadow-2xl hover:bg-white/10 transition-all duration-300">
              <Target className="w-14 h-14 lg:w-16 lg:h-16 text-orange-400 mx-auto mb-8" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Theme
              </h3>
              <p className="text-gray-300 text-lg lg:text-xl">
                Advanced AI & Innovation
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-10 lg:p-12 border border-orange-500/20 text-center min-h-[240px] flex flex-col justify-center shadow-2xl hover:bg-white/10 transition-all duration-300">
              <Code2 className="w-14 h-14 lg:w-16 lg:h-16 text-orange-400 mx-auto mb-8" />
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-6">
                Domains
              </h3>
              <p className="text-gray-300 text-lg lg:text-xl">
                19 Tech Challenges
              </p>
            </div>
          </motion.div>
        </section>

        {/* Innovation Domains Section - Prominently Displayed */}
        <section className="py-32 space-y-20 flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-10 max-w-6xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              19 Innovation Domains
            </h2>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Choose your battlefield and innovate in cutting-edge technology
              domains
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto justify-items-center"
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
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-xl p-8 lg:p-10 border border-orange-500/20 hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 text-center min-h-[140px] flex items-center justify-center w-full max-w-sm shadow-lg hover:shadow-2xl hover:scale-105"
              >
                <p className="text-white font-medium text-base lg:text-lg leading-relaxed">
                  {domain}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>
    </div>
  );
}
