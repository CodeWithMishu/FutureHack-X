"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Code2, Target } from "lucide-react";
import CountdownTimer3D from "@/components/CountdownTimer3D";
import RegisterButton from "@/components/RegisterButton";

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
        <section className="min-h-screen flex flex-col items-center justify-center py-16 space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              FutureHack-X
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-orange-300 font-medium">
              Powered by SkillNet Learning
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-base sm:text-lg md:text-xl text-gray-300">
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
        </section>

        {/* Event Details Section */}
        <section className="py-20 space-y-16">
          {/* Event Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-orange-500/20 text-center">
              <Calendar className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Event Date
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                January 4, 2026
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-orange-500/20 text-center">
              <Target className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Theme
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                Advanced AI & Innovation
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-orange-500/20 text-center sm:col-span-2 lg:col-span-1">
              <Code2 className="w-10 h-10 sm:w-12 sm:h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
                Domains
              </h3>
              <p className="text-gray-300 text-base sm:text-lg">
                19 Tech Challenges
              </p>
            </div>
          </motion.div>
        </section>

        {/* Innovation Domains Section - Prominently Displayed */}
        <section className="py-20 space-y-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center space-y-8 max-w-6xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
              19 Innovation Domains
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
              Choose your battlefield and innovate in cutting-edge technology
              domains
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-7xl mx-auto justify-items-center"
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
                className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-orange-500/20 hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 text-center"
              >
                <p className="text-white font-medium text-sm sm:text-base leading-relaxed">
                  {domain}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8 max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              Ready to Shape the Future?
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Join thousands of innovators, creators, and visionaries in the
              ultimate hackathon experience.
            </p>
          </motion.div>

          {/* Final Register Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-lg mx-auto flex justify-center"
          >
            <RegisterButton />
          </motion.div>
        </section>
      </div>
    </div>
  );
}
