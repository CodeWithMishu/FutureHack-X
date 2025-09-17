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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center max-w-5xl mx-auto space-y-12"
        >
          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight">
              FutureHack-X
            </h1>
            <p className="text-xl md:text-2xl text-purple-300 font-light">
              Powered by SkillNet Learning
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg md:text-xl text-gray-300">
              <span>Innovate</span>
              <span className="text-purple-400">•</span>
              <span>Create</span>
              <span className="text-purple-400">•</span>
              <span>Future</span>
            </div>
          </div>

          {/* Event Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Calendar className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Event Date
              </h3>
              <p className="text-gray-300">January 4, 2026</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Theme</h3>
              <p className="text-gray-300">Advanced AI & Innovation</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Code2 className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-white mb-2">Domains</h3>
              <p className="text-gray-300">19 Tech Challenges</p>
            </div>
          </div>

          {/* 3D Countdown Timer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <CountdownTimer3D targetDate="2026-01-04T00:00:00Z" />
          </motion.div>

          {/* Register Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <RegisterButton />
          </motion.div>
        </motion.div>
      </section>

      {/* Tech Domains Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            19 Innovation Domains
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <p className="text-white font-medium text-center">{domain}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
