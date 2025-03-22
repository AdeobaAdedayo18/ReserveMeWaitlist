"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatisticCounterProps {
  start: number;
  end: number;
  duration?: number;
  suffix?: string;
  label: string;
}

export function StatisticCounter({
  start = 0,
  end,
  duration = 2000,
  suffix = "",
  label,
}: StatisticCounterProps) {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        setCount(Math.floor(progress * (end - start) + start));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [start, end, duration, isInView]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-rose-500">
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 mt-2">{label}</div>
    </div>
  );
}
