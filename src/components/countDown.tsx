"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownTimerProps {
  targetDate: string;
  isDarkMode: boolean;
}

export function CountdownTimer2({
  targetDate,
  isDarkMode,
}: CountdownTimerProps) {
  console.log(isDarkMode);

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  console.log(timeLeft);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const difference = now - target;
      console.log(difference);

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    calculateTimeLeft(); // Initial calculation
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex justify-center gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <motion.div
          key={unit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 backdrop-blur-sm rounded-lg border border-rose-500/20 flex items-center justify-center transition-colors duration-300">
            <span className="text-xl font-bold text-rose-600 dark:text-rose-500">
              {String(value || 0).padStart(2, "0")}
            </span>
          </div>
          <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mt-1">
            {unit}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
