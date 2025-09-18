"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// Flip Card Component with proper logic - bottom shows next upcoming value
function FlipCard({ value, label }: { value: number; label: string }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (value !== displayValue) {
      setIsFlipping(true);
      setTimeout(() => {
        setDisplayValue(value);
        setIsFlipping(false);
      }, 100);
    }
  }, [value, displayValue]);

  const formatValue = (val: number) => val.toString().padStart(2, "0");

  return (
    <div className="flex flex-col items-center space-y-4">
      {/* Card Container */}
      <div className="relative w-20 h-24 sm:w-24 sm:h-28 md:w-28 md:h-32 lg:w-32 lg:h-36">
        {/* Main Card */}
        <div className="absolute inset-0 bg-gray-800 rounded-lg shadow-2xl border border-gray-600 overflow-hidden">
          {/* Top Half - Shows current number */}
          <div className="absolute top-0 left-0 right-0 h-1/2 rounded-t-lg bg-gradient-to-b from-gray-700 to-gray-800 overflow-hidden">
            <div className="absolute inset-0 flex items-end justify-center pb-1">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono leading-none">
                {formatValue(displayValue)}
              </div>
            </div>
          </div>

          {/* Center Divider Line */}
          <div
            className="absolute top-1/2 left-0 right-0 h-px bg-gray-900 z-20"
            style={{ transform: "translateY(-0.5px)" }}
          />

          {/* Bottom Half - Shows same current number */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2 rounded-b-lg bg-gradient-to-t from-gray-800 to-gray-700 overflow-hidden">
            <div className="absolute inset-0 flex items-start justify-center pt-1">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 font-mono leading-none">
                {formatValue(displayValue)}
              </div>
            </div>
          </div>

          {/* Flip Animation Overlay - Only flips when value changes */}
          <AnimatePresence>
            {isFlipping && (
              <motion.div
                initial={{ rotateX: 0 }}
                animate={{ rotateX: -90 }}
                exit={{ rotateX: -90 }}
                transition={{ duration: 0.2, ease: "easeInOut" }}
                className="absolute top-1/2 left-0 right-0 h-1/2 bg-gray-800 rounded-b-lg border-t border-gray-600 z-30"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "center top",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-gray-800 to-gray-700 rounded-b-lg flex items-start justify-center pt-1">
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 font-mono leading-none">
                    {formatValue(displayValue)}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Shadow Effect */}
        <div
          className="absolute inset-0 bg-black/40 rounded-lg blur-sm"
          style={{ transform: "translateX(2px) translateY(4px)", zIndex: -1 }}
        />
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <span className="text-sm sm:text-base md:text-lg font-semibold text-white/80 uppercase tracking-widest">
          {label}
        </span>
      </motion.div>
    </div>
  );
}

export default function CountdownTimer3D({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 flex items-center justify-center">
        <div className="text-white/70 text-lg">Loading Timer...</div>
      </div>
    );
  }

  const timeUnits = [
    { value: timeLeft.days, label: "DAYS" },
    { value: timeLeft.hours, label: "HOURS" },
    { value: timeLeft.minutes, label: "MINUTES" },
    { value: timeLeft.seconds, label: "SECONDS" },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto">
      {/* "COMING SOON" Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-[0.3em] mb-4">
          COMING SOON
        </h2>
      </motion.div>

      {/* Timer Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-12 mb-12"
      >
        {timeUnits.map(({ value, label }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <FlipCard value={value} label={label} />
          </motion.div>
        ))}
      </motion.div>

      {/* Description Text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center max-w-2xl mx-auto"
      >
        <p className="text-white/60 text-sm sm:text-base leading-relaxed">
          Get ready for the ultimate innovation challenge. Join thousands of
          creators, developers, and visionaries in shaping the future through
          technology.
        </p>
      </motion.div>
    </div>
  );
}
