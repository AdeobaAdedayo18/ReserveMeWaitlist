"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "Venues Listed", value: 120, suffix: "+" },
  { label: "Happy Customers", value: 5000, suffix: "+" },
  { label: "Cities Covered", value: 2, suffix: "+" },
  { label: "Success Rate", value: 99.9, suffix: "%" },
];

export function Stats2() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat) => (
        <StatCounter
          key={stat.label}
          label={stat.label}
          value={stat.value}
          suffix={stat.suffix}
        />
      ))}
    </div>
  );
}

interface StatCounterProps {
  label: string;
  value: number;
  suffix?: string;
}

function StatCounter({ label, value, suffix = "" }: StatCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current > value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-rose-500 to-rose-300 bg-clip-text text-transparent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400">{label}</div>
    </motion.div>
  );
}
