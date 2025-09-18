"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollToBottomIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Hide when user has scrolled more than 50% of the first screen
      // or when near the bottom of the page
      const shouldHide =
        scrollPosition > windowHeight * 0.5 ||
        scrollPosition > documentHeight - windowHeight * 1.5;

      setIsVisible(!shouldHide);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
        scale: isVisible ? 1 : 0.8,
      }}
      transition={{ duration: 0.6, delay: 1.5 }}
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-0 pointer-events-auto"
      style={{ pointerEvents: isVisible ? "auto" : "none" }}
    >
      {/* Left Hand Pointing */}
      <motion.div
        animate={{
          rotate: [15, 25, 15],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-16 top-1/2 transform -translate-y-1/2 text-orange-400/60 text-4xl"
      >
        👉
      </motion.div>

      {/* Main Scroll Button */}
      <motion.button
        onClick={scrollToBottom}
        whileHover={{
          scale: 1.1,
          y: -2,
          boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)",
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          y: [0, -8, 0],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative group bg-gradient-to-r from-orange-500/20 to-red-500/20 hover:from-orange-500/40 hover:to-red-500/40 backdrop-blur-sm border border-orange-500/30 hover:border-orange-400/50 rounded-full p-3 transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10 scale-150" />

        {/* Arrow Icon */}
        <motion.div
          animate={{
            y: [0, 3, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-orange-400 group-hover:text-orange-300" />
        </motion.div>
      </motion.button>

      {/* Right Hand Pointing */}
      <motion.div
        animate={{
          rotate: [-15, -25, -15],
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute -right-16 top-1/2 transform -translate-y-1/2 text-orange-400/60 text-4xl"
      >
        👈
      </motion.div>

      {/* Scroll Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
      >
        <p className="text-orange-400/80 text-sm font-medium tracking-wide">
          More content below
        </p>
      </motion.div>
    </motion.div>
  );
}
