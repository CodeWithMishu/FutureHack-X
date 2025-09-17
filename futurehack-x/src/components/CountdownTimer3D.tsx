'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

// 3D Paper Slide Card Component
function PaperSlideCard({ value, label, colorClass }: { 
  value: number; 
  label: string; 
  colorClass: string;
}) {
  const [displayValue, setDisplayValue] = useState(value);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    if (value !== prevValue) {
      setPrevValue(displayValue);
      setTimeout(() => setDisplayValue(value), 150);
    }
  }, [value, prevValue, displayValue]);

  const formatValue = (val: number) => val.toString().padStart(2, '0');

  return (
    <div className="relative flex flex-col items-center">
      {/* Card Container */}
      <div className="relative w-24 h-32 md:w-32 md:h-40" style={{ perspective: '1000px' }}>
        {/* Card Background */}
        <div className={`absolute inset-0 ${colorClass} rounded-xl shadow-2xl`} style={{ transformStyle: 'preserve-3d' }}>
          {/* Top Half - Current Number */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl" />
            <div className="h-1/2 flex items-end justify-center pb-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`top-${displayValue}`}
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-4xl font-bold text-white font-mono"
                >
                  {formatValue(displayValue)}
                </motion.span>
              </AnimatePresence>
            </div>
            
            {/* Divider Line */}
            <div className="absolute top-1/2 left-2 right-2 h-px bg-black/20" style={{ transform: 'translateY(-0.5px)' }} />
            
            {/* Bottom Half - Previous Number (for flip effect) */}
            <div className="h-1/2 flex items-start justify-center pt-1 mt-auto">
              <AnimatePresence mode="wait">
                <motion.span
                  key={`bottom-${prevValue}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-2xl md:text-4xl font-bold text-white/80 font-mono"
                >
                  {formatValue(prevValue)}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* 3D Shadow Effect */}
          <div className="absolute inset-0 bg-black/30 rounded-xl" style={{ transform: 'translateX(4px) translateY(4px)', zIndex: -1 }} />
        </div>

        {/* Flip Animation Overlay */}
        <AnimatePresence>
          {value !== prevValue && (
            <motion.div
              initial={{ rotateX: 0 }}
              animate={{ rotateX: -180 }}
              exit={{ rotateX: -180 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className={`absolute inset-0 ${colorClass} rounded-xl`}
              style={{ 
                transformStyle: 'preserve-3d',
                transformOrigin: 'center bottom'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent rounded-xl" style={{ backfaceVisibility: 'hidden' }} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-4 text-center"
      >
        <span className="text-sm md:text-base font-semibold text-white/90 uppercase tracking-wider">
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
    { value: timeLeft.days, label: 'Days', colorClass: 'bg-gradient-to-br from-orange-500 to-red-600' },
    { value: timeLeft.hours, label: 'Hours', colorClass: 'bg-gradient-to-br from-amber-500 to-orange-600' },
    { value: timeLeft.minutes, label: 'Minutes', colorClass: 'bg-gradient-to-br from-yellow-500 to-amber-600' },
    { value: timeLeft.seconds, label: 'Seconds', colorClass: 'bg-gradient-to-br from-emerald-500 to-teal-600' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Timer Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12"
      >
        {/* Timer Grid */}
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          {timeUnits.map(({ value, label, colorClass }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <PaperSlideCard
                value={value}
                label={label}
                colorClass={colorClass}
              />
            </motion.div>
          ))}
        </div>

        {/* Target Date Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-8 pt-6 border-t border-white/10"
        >
          <p className="text-white/70 text-sm md:text-base">
            Countdown to <span className="text-orange-400 font-semibold">January 4, 2026</span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}