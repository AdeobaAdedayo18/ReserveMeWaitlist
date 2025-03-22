"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import { ArrowDown, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Stats2 } from "@/components/stats";
import { WaitlistForm } from "@/components/waitlistForm";
import { CountdownTimer2 } from "@/components/countDown";
import { AnimatedBackground } from "@/components/animated-background";
import { PatternOverlay } from "@/components/patternOVerlay";

export default function Page() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Check system preference on mount
  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsDarkMode(prefersDark);
    document.documentElement.classList.toggle("dark", prefersDark);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-gray-50 dark:from-black dark:via-gray-900 dark:to-black text-gray-900 dark:text-white overflow-hidden transition-colors duration-300`}
    >
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <Button
          variant="outline"
          size="icon"
          onClick={toggleTheme}
          className="h-10 w-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-yellow-500" />
          ) : (
            <Moon className="h-5 w-5 text-gray-700" />
          )}
        </Button>
      </div>

      {/* Hero Section */}
      <section ref={containerRef} className="relative min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <AnimatedBackground isDarkMode={isDarkMode} />
          <PatternOverlay isDarkMode={isDarkMode} />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
          <motion.div
            style={{ y, opacity }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-32"
          >
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Left Column - Main Content */}
              <div className="flex-1 text-center lg:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="space-y-6"
                >
                  <div className="inline-block px-4 py-2 rounded-full bg-rose-500/10 dark:bg-rose-500/10 border border-rose-500/20 text-rose-600 dark:text-rose-500 text-sm font-medium mb-4">
                    Coming Soon
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                    Discover & Book
                    <span
                      className="block bg-gradient-to-r from-rose-600 to-rose-500 dark:from-rose-500 dark:to-rose-300 bg-clip-text text-transparent"
                      style={{ lineHeight: "1.2" }}
                    >
                      The Perfect Space
                    </span>
                  </h1>

                  <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                    From{" "}
                    <span className="text-white font-semibold">
                      event venues
                    </span>{" "}
                    to{" "}
                    <span className="text-white font-semibold">
                      office spaces, seminar halls, and casual meet-up spots
                    </span>
                    , find the ideal location for any occasion. Join early to
                    unlock **exclusive benefits** and get priority access.
                  </p>

                  {/* Social Proof */}
                  <div className="flex items-center justify-center lg:justify-start space-x-4 pt-4">
                    <div className="flex -space-x-2">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-full border-2 border-white dark:border-black bg-gradient-to-br from-rose-500 to-rose-600"
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      <span className="font-semibold text-gray-900 dark:text-white">
                        1,000+
                      </span>{" "}
                      people already joined
                    </p>
                  </div>

                  {/* Countdown */}
                  <div className="pt-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                      Limited slots available. Launch in:
                    </p>
                    <CountdownTimer2
                      targetDate="2024-03-01"
                      isDarkMode={isDarkMode}
                    />
                  </div>
                </motion.div>
              </div>

              {/* Right Column - Waitlist Form */}
              <div className="w-full lg:w-[450px]">
                <WaitlistForm isDarkMode={isDarkMode} />
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
          >
            <span className="text-sm text-gray-500 dark:text-gray-400 mb-2">
              Scroll to learn more
            </span>
            <ArrowDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Social Proof */}
      <section className="relative py-24 bg-white/50 dark:bg-black/50 backdrop-blur-sm border-t border-b border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Stats2 />

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-24 max-w-3xl mx-auto text-center"
          >
            <p className="text-2xl text-gray-600 dark:text-gray-300 italic">
              "This platform revolutionized how we discover event spaces. The
              early access was absolutely worth it."
            </p>
            <div className="mt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white">
                Sarah Johnson
              </h4>
              <p className="text-gray-500 dark:text-gray-400">
                Event Director at Creative Studios
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/30 dark:bg-black/30 backdrop-blur-sm border-t border-gray-200 dark:border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                VenueVista
              </span>
              <span className="text-gray-500 dark:text-gray-400">© 2024</span>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
