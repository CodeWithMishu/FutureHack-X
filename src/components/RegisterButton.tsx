"use client";

import { motion } from "framer-motion";
import { Calendar, Users, Zap, ArrowRight } from "lucide-react";

export default function RegisterButton() {
  const handleRegister = () => {
    // Placeholder for registration logic
    console.log("Registration clicked");
  };

  return (
    <div className="text-center space-y-12 w-full">
      {/* Main Register Button - Large and Prominent */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative mb-12"
      >
        <motion.button
          onClick={handleRegister}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="relative group w-full max-w-lg mx-auto bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 hover:from-orange-400 hover:via-red-400 hover:to-orange-500 text-white font-bold text-xl sm:text-2xl md:text-3xl px-8 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 lg:py-12 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden border-2 border-orange-400/50 hover:border-orange-300 min-h-[80px] sm:min-h-[90px] md:min-h-[100px] lg:min-h-[110px]"
        >
          {/* Animated Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

          {/* Button Content */}
          <div className="relative z-10 flex items-center justify-center space-x-3 sm:space-x-4">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </motion.div>
            <span className="font-black tracking-wide">REGISTER NOW</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10" />
            </motion.div>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out rounded-2xl" />

          {/* Pulse Ring */}
          <div className="absolute inset-0 rounded-2xl border-2 border-orange-400 opacity-75 animate-ping group-hover:opacity-100" />
        </motion.button>

        {/* Enhanced Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 rounded-2xl blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 -z-10 scale-110" />

        {/* Additional Outer Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-400 via-red-400 to-orange-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-20 scale-125" />
      </motion.div>

      {/* Event Details - Enhanced */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center space-y-6 sm:space-y-0 sm:space-x-8 lg:space-x-12 text-white/90 pt-8 pb-8"
      >
        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 sm:px-8 py-4 border border-orange-500/20">
          <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
          <span className="font-semibold text-sm sm:text-base lg:text-lg">
            January 4, 2026
          </span>
        </div>

        <div className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm rounded-xl px-6 sm:px-8 py-4 border border-orange-500/20">
          <Users className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
          <span className="font-semibold text-sm sm:text-base lg:text-lg">
            Limited Spots
          </span>
        </div>
      </motion.div>

      {/* Call to Action Text - Enhanced */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="space-y-8 pt-8"
      >
        <p className="text-white/80 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium px-4">
          Join innovators, creators, and visionaries in shaping tomorrow&apos;s
          technology.
        </p>

        <div className="py-4">
          <p className="text-orange-400 text-sm sm:text-base lg:text-lg font-semibold">
            🚀 Early bird registration ends soon! 🚀
          </p>
        </div>

        {/* Urgency Indicator */}
        <div className="flex justify-center items-center space-x-2 text-xs sm:text-sm lg:text-base text-orange-300 pt-4">
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
          <span className="font-medium">
            Secure your spot before it&apos;s too late
          </span>
          <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        </div>
      </motion.div>
    </div>
  );
}
