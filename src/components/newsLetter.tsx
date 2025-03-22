"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setStatus("success");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative">
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Waitlist
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be the first to know when we launch and get exclusive early access
            benefits.
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button
                type="submit"
                className="bg-rose-500 hover:bg-rose-600"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Joining..." : "Join Now"}
              </Button>
            </div>
            {status === "success" && (
              <p className="text-green-500 mt-2">
                Thanks for joining! We'll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
