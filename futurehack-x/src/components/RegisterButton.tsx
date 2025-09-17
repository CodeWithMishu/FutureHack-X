'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Zap } from 'lucide-react';

export default function RegisterButton() {
  const handleRegister = () => {
    // Placeholder for registration logic
    console.log('Registration clicked');
  };

  return (
    <div className="text-center space-y-6">
      {/* Main Register Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <motion.button
          onClick={handleRegister}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative group bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-xl px-12 py-4 rounded-2xl shadow-2xl transition-all duration-300 overflow-hidden"
        >
          {/* Button Background Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          
          {/* Button Content */}
          <div className="relative z-10 flex items-center space-x-3">
            <Zap className="w-6 h-6" />
            <span>Register Now</span>
          </div>

          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </motion.button>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300 -z-10" />
      </motion.div>

      {/* Event Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80"
      >
        <div className="flex items-center space-x-2">
          <Calendar className="w-5 h-5 text-orange-400" />
          <span className="font-medium">January 4, 2026</span>
        </div>
        
        <div className="flex items-center space-x-2">
          <Users className="w-5 h-5 text-orange-400" />
          <span className="font-medium">Limited Spots</span>
        </div>
      </motion.div>

      {/* Call to Action Text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-white/70 text-sm max-w-md mx-auto"
      >
        Join innovators, creators, and visionaries in shaping tomorrow's technology.
        Early bird registration ends soon!
      </motion.p>
    </div>
  );
}