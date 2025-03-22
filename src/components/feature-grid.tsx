"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Shield, Star, Users, Clock } from "lucide-react";

const features = [
  {
    icon: <Search className="h-6 w-6" />,
    title: "Smart Search",
    description: "Find the perfect venue with our advanced filtering system",
  },
  {
    icon: <Calendar className="h-6 w-6" />,
    title: "Real-time Availability",
    description: "Check venue availability instantly and book with confidence",
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Verified Venues",
    description: "All venues are personally verified for quality assurance",
  },
  {
    icon: <Star className="h-6 w-6" />,
    title: "Virtual Tours",
    description: "Experience venues in immersive 3D virtual tours",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Host Dashboard",
    description: "Powerful tools for venue owners to manage their spaces",
  },
  {
    icon: <Clock className="h-6 w-6" />,
    title: "Instant Booking",
    description: "Secure your venue instantly with our streamlined process",
  },
];

export function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="relative p-8 rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-transparent backdrop-blur-sm transition-all duration-300 group hover:border-rose-500/30 hover:from-rose-500/[0.08]">
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent to-rose-500/[0.05] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500/20 to-rose-500/10 flex items-center justify-center mb-6 text-rose-500 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
