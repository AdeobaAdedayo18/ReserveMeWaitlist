"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { CelebrationAnimation } from "./celebration-animation";

interface WaitlistFormProps {
  isDarkMode: boolean;
}

export function WaitlistForm({ isDarkMode }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");
  console.log(isDarkMode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMessage("Please enter your email");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setStatus("success");
    setEmail("");
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative w-full p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 overflow-hidden transition-colors duration-300"
      >
        <CelebrationAnimation />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
          }}
          className="relative flex flex-col items-center text-center space-y-4"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.2,
            }}
            className="w-16 h-16 rounded-full bg-rose-500 flex items-center justify-center"
          >
            <Check className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Welcome Aboard! 🎉
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              You're now part of an exclusive community of early adopters. We'll
              keep you posted about our launch and early access.
            </p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="pt-4"
          >
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/20">
              <span className="text-sm text-rose-600 dark:text-rose-500">
                <span className="font-semibold">
                  #{Math.floor(1000 + Math.random() * 9000)}
                </span>{" "}
                in line
              </span>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-gray-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            Join the Waitlist
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Get early access and exclusive benefits
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-4 bg-white dark:bg-white/5 border-gray-200 dark:border-white/10 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:ring-2 focus:ring-rose-500 focus:border-rose-500 transition-colors duration-300"
            />
            {errorMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-rose-500"
              >
                {errorMessage}
              </motion.p>
            )}
          </div>

          <Button
            type="submit"
            disabled={status === "loading"}
            className="w-full h-12 bg-rose-600 dark:bg-rose-500 hover:bg-rose-700 dark:hover:bg-rose-600 transition-colors text-white text-base font-medium"
          >
            {status === "loading" ? (
              "Securing your spot..."
            ) : (
              <>
                Join the Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </form>

        {/* Benefits */}
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <motion.li
              key={benefit}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="flex items-center text-sm text-gray-600 dark:text-gray-400"
            >
              <Check className="w-4 h-4 text-rose-600 dark:text-rose-500 mr-2 flex-shrink-0" />
              {benefit}
            </motion.li>
          ))}
        </ul>

        {/* Trust Badges */}
        <div className="pt-4 border-t border-gray-200 dark:border-white/10">
          <p className="text-xs text-center text-gray-500 dark:text-gray-400">
            Trusted by event planners worldwide. 100% secure signup.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

const benefits = [
  "Early access to platform features",
  "Priority support and concierge service",
  "Exclusive launch day discounts",
  "Premium venue partnerships",
];
