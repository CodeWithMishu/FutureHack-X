"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Code2, Target } from "lucide-react";
import Image from "next/image";
import ClientOnlyBackground from "@/components/ClientOnlyBackground";
import CountdownTimer3D from "@/components/CountdownTimer3D";
import RegisterButton from "@/components/RegisterButton";
import SkillNetLogo from "@/components/SkillNetLogo";
import MouseTracker from "@/components/MouseTracker";
import ScrollToBottomIndicator from "@/components/ScrollToBottomIndicator";

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <>
      {/* SEO Structured Data for Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "FutureHack-X 2026 Registration",
            description:
              "Register for the ultimate AI and innovation hackathon featuring 19 technology domains",
            url: "https://future-hack-x.vercel.app",
            mainEntity: {
              "@type": "Event",
              name: "FutureHack-X 2026",
              startDate: "2026-01-04",
              location: "Global Event",
              organizer: {
                "@type": "Organization",
                name: "SkillNet Learning",
              },
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://future-hack-x.vercel.app",
                },
              ],
            },
          }),
        }}
      />

      {/* Hidden SEO Content for Search Engines */}
      <div className="sr-only">
        <h1>FutureHack-X 2026 - The Ultimate AI and Innovation Hackathon</h1>
        <p>
          Join thousands of developers, innovators, and creators in FutureHack-X
          2026, the premier artificial intelligence and innovation hackathon
          scheduled for January 4, 2026.
        </p>

        <h2>Featured Technology Domains</h2>
        <ul>
          <li>Artificial Intelligence and Machine Learning</li>
          <li>Blockchain and Web3 Development</li>
          <li>Internet of Things (IoT) for Smart Cities</li>
          <li>Augmented Reality and Virtual Reality</li>
          <li>Cybersecurity and Data Protection</li>
          <li>Healthcare AI and Medical Innovation</li>
          <li>Agricultural Technology and AI</li>
          <li>Smart Mobility and Transportation</li>
          <li>Education Technology and AI Learning</li>
          <li>Robotics and Automation</li>
          <li>Climate Change and Sustainability Tech</li>
          <li>Financial Technology and AI</li>
          <li>Gaming and Interactive Media</li>
          <li>Space Technology and Exploration</li>
          <li>Quantum Computing Applications</li>
          <li>Neural Networks and Deep Learning</li>
          <li>Computer Vision and Image Processing</li>
          <li>Natural Language Processing</li>
          <li>AI for Governance and Public Policy</li>
        </ul>

        <h2>Why Join FutureHack-X 2026?</h2>
        <ul>
          <li>Compete in 19 cutting-edge technology domains</li>
          <li>Learn from industry expert mentors and judges</li>
          <li>Network with global tech innovators and entrepreneurs</li>
          <li>Win amazing prizes, recognition, and career opportunities</li>
          <li>Shape the future of technology and innovation</li>
          <li>Access to exclusive workshops and masterclasses</li>
          <li>Collaboration opportunities with leading tech companies</li>
          <li>Showcase your innovations to industry leaders</li>
        </ul>

        <h2>Event Details</h2>
        <ul>
          <li>Date: January 4, 2026</li>
          <li>Registration: Limited spots available</li>
          <li>Format: 24-hour innovation challenge</li>
          <li>Organizer: SkillNet Learning</li>
          <li>Categories: 19 technology domains</li>
          <li>
            Target Audience: Developers, innovators, creators, students,
            professionals
          </li>
        </ul>

        <address>
          Organized by SkillNet Learning Email: info@skillnetlearning.com
          Website: https://skillnetlearning.com
        </address>
      </div>

      {/* Draggable AI Hackathon 3D Background */}
      <ClientOnlyBackground />

      {/* Mouse Tracker */}
      <MouseTracker />

      {/* Scroll to Bottom Indicator */}
      <ScrollToBottomIndicator />

      {/* Main Content Container */}
      <main className="relative min-h-screen z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Hero Section */}
          <section className="min-h-screen flex flex-col items-center justify-center text-center py-20 lg:py-24 space-y-12">
            <div className="max-w-4xl mx-auto space-y-12">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* SkillNet Logo + CPUH Logo - Responsive Layout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  className="flex justify-center mb-8 sm:mb-12 pt-4 sm:pt-8 px-4 sm:px-0"
                >
                  <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 sm:p-6 lg:p-8 border border-orange-500/20 w-full sm:max-w-5xl shadow-2xl shadow-black/50">
                    {/* Container for both logos - Responsive Layout */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6 lg:gap-8">
                      {/* SkillNet Logo - Responsive Sizes */}
                      <div className="flex flex-col items-center order-1 w-full sm:w-auto">
                        {/* Mobile: Much Larger (up to sm) */}
                        <div className="sm:hidden w-full flex justify-center">
                          <SkillNetLogo
                            width={280}
                            height={84}
                            className="max-w-full h-auto"
                          />
                        </div>
                        {/* Tablet: Medium (sm to md) */}
                        <SkillNetLogo
                          width={300}
                          height={90}
                          className="hidden sm:block md:hidden"
                        />
                        {/* Desktop: Large (md to lg) */}
                        <SkillNetLogo
                          width={400}
                          height={120}
                          className="hidden md:block lg:hidden"
                        />
                        {/* Large Desktop: Extra Large (lg+) */}
                        <SkillNetLogo
                          width={480}
                          height={140}
                          className="hidden lg:block"
                        />
                      </div>

                      {/* Collaboration Text - Responsive Typography */}
                      <div className="flex flex-col items-center order-2 px-2 sm:px-2 my-4 sm:my-0">
                        <span className="text-white/90 text-sm sm:text-sm md:text-base lg:text-lg font-light text-center leading-relaxed whitespace-nowrap bg-gradient-to-r from-orange-400/20 to-blue-400/20 px-3 py-1.5 rounded-full border border-white/10">
                          in collaboration with
                        </span>
                      </div>

                      {/* CPUH Logo - Responsive Sizes */}
                      <div className="flex flex-col items-center order-3 w-full sm:w-auto">
                        {/* Mobile: Much Larger (up to sm) */}
                        <div className="sm:hidden w-full flex justify-center">
                          <Image
                            src="/cpuh.png"
                            alt="Career Point University Hamirpur"
                            width={110}
                            height={110}
                            className="drop-shadow-lg max-w-full h-auto"
                            priority
                          />
                        </div>
                        {/* Tablet: Medium (sm to md) */}
                        <Image
                          src="/cpuh.png"
                          alt="Career Point University Hamirpur"
                          width={100}
                          height={100}
                          className="hidden sm:block md:hidden drop-shadow-lg"
                          priority
                        />
                        {/* Desktop: Large (md to lg) */}
                        <Image
                          src="/cpuh.png"
                          alt="Career Point University Hamirpur"
                          width={120}
                          height={120}
                          className="hidden md:block lg:hidden drop-shadow-lg"
                          priority
                        />
                        {/* Large Desktop: Extra Large (lg+) */}
                        <Image
                          src="/cpuh.png"
                          alt="Career Point University Hamirpur"
                          width={140}
                          height={140}
                          className="hidden lg:block drop-shadow-lg"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Presents Text */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 15 }}
                  transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                  className="text-center"
                >
                  <p className="text-xs sm:text-sm lg:text-base text-gray-400 font-light tracking-wide uppercase mb-4">
                    presents
                  </p>
                </motion.div>

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white tracking-tight leading-tight mt-8 mb-6">
                  FutureHack-X
                </h1>
                <div className="flex flex-wrap items-center justify-center gap-4 text-lg sm:text-xl lg:text-2xl text-gray-300 mb-8">
                  <span className="font-semibold">Innovate</span>
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="font-semibold">Create</span>
                  <span className="text-orange-400 text-xl">•</span>
                  <span className="font-semibold">Future</span>
                </div>
              </motion.div>

              {/* "Get ready for the ultimate..." text */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="max-w-3xl mx-auto py-8"
              >
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 leading-relaxed font-light">
                  Get ready for the ultimate innovation challenge. Join
                  thousands of creators, developers, and visionaries in shaping
                  the future through technology.
                </p>
              </motion.div>

              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="w-full max-w-4xl mx-auto py-8"
              >
                <CountdownTimer3D targetDate="2026-01-04T00:00:00Z" />
              </motion.div>

              {/* Register Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex justify-center items-center w-full pt-8 pb-16"
              >
                <div className="w-full max-w-lg">
                  <RegisterButton />
                </div>
              </motion.div>
            </div>
          </section>

          {/* Event Details Section */}
          <section className="py-32 lg:py-40 text-center">
            <div className="max-w-6xl mx-auto space-y-24">
              {/* Event Info Cards */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
              >
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 lg:p-14 border border-orange-500/20 text-center min-h-[360px] flex flex-col items-center justify-center shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <Calendar className="w-24 h-24 lg:w-28 lg:h-28 text-orange-400 mb-10 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                    Event Date
                  </h3>
                  <p className="text-gray-300 text-xl lg:text-2xl font-medium">
                    January 4, 2026
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 lg:p-14 border border-orange-500/20 text-center min-h-[360px] flex flex-col items-center justify-center shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <Target className="w-24 h-24 lg:w-28 lg:h-28 text-orange-400 mb-10 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                    Theme
                  </h3>
                  <p className="text-gray-300 text-xl lg:text-2xl font-medium">
                    Advanced AI & Innovation
                  </p>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-12 lg:p-14 border border-orange-500/20 text-center min-h-[360px] flex flex-col items-center justify-center shadow-2xl hover:bg-white/10 transition-all duration-300 group hover:scale-105">
                  <Code2 className="w-24 h-24 lg:w-28 lg:h-28 text-orange-400 mb-10 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                    Domains
                  </h3>
                  <p className="text-gray-300 text-xl lg:text-2xl font-medium">
                    19 Tech Challenges
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Innovation Domains Section */}
          <section className="py-40 lg:py-48 text-center">
            <div className="max-w-7xl mx-auto space-y-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight">
                  19 Innovation Domains
                </h2>
                <p className="text-2xl sm:text-3xl lg:text-4xl text-gray-400 max-w-5xl mx-auto leading-relaxed font-light">
                  Choose your battlefield and innovate in cutting-edge
                  technology domains
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 lg:gap-12"
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
                    className="bg-gradient-to-br from-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-10 lg:p-12 border border-orange-500/20 hover:border-orange-500/40 hover:bg-gradient-to-br hover:from-orange-500/20 hover:to-red-500/20 transition-all duration-300 text-center min-h-[180px] flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 group cursor-pointer"
                  >
                    <p className="text-white font-semibold text-lg lg:text-xl leading-relaxed group-hover:text-orange-100 transition-colors">
                      {domain}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
