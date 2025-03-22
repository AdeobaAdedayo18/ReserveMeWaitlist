import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Building2,
  Search,
  Calendar,
  Shield,
  Star,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FeatureComparison } from "@/components/featureComparison";
import { Newsletter } from "@/components/newsLetter";
import { PricingTable } from "@/components/pricingTable";
import { SpaceShowcase } from "@/components/spaceShowcase";
import TestimonialCarousel from "@/components/testimonialCarosoul";
import { StatisticCounter } from "@/components/statisticCounter";

export default function LandingPage() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div className="min-h-screen bg-white">
      {/* Announcement Banner */}
      <div className="bg-rose-500 text-white px-4 py-2 text-center text-sm">
        <span className="font-medium">🎉 Early access launching soon!</span>{" "}
        <a href="#waitlist" className="underline hover:no-underline">
          Join the waitlist
        </a>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-rose-500" />
              <span className="ml-2 text-xl font-bold">VenueVista</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900">
                Features
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900">
                Pricing
              </a>
              <a
                href="#testimonials"
                className="text-gray-600 hover:text-gray-900"
              >
                Testimonials
              </a>
              <Button variant="outline" className="ml-4">
                Sign In
              </Button>
              <Button className="bg-rose-500 hover:bg-rose-600">
                Join Waitlist
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={targetRef} className="relative pt-20 pb-32 overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center space-y-8">
            <Badge variant="secondary" className="mb-4">
              Revolutionizing Event Space Discovery
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Find Extraordinary
              <span className="block text-rose-500">Spaces for Events</span>
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-600">
              Discover and book unique, verified venues for any occasion. From
              intimate gatherings to grand celebrations, find the perfect space
              that tells your story.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-lg mx-auto">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600">
                Explore Venues <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                List Your Space
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16">
              <StatisticCounter
                start={0}
                end={1000}
                suffix="+"
                label="Unique Venues"
              />
              <StatisticCounter
                start={0}
                end={50000}
                suffix="+"
                label="Events Hosted"
              />
              <StatisticCounter
                start={0}
                end={98}
                suffix="%"
                label="Satisfaction Rate"
              />
              <StatisticCounter
                start={0}
                end={24}
                suffix="/7"
                label="Support"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Space Showcase */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Every Space Tells a Story
            </h2>
            <p className="text-xl text-gray-600">
              Browse through our curated collection of stunning venues
            </p>
          </div>
          <SpaceShowcase />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything You Need to Find the Perfect Venue
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform combines powerful search capabilities with detailed
              venue information to make your decision-making process seamless.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Process
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How VenueVista Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Finding and booking your perfect venue is simple and
              straightforward
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <div className="w-12 h-12 rounded-full bg-rose-500 text-white flex items-center justify-center mb-6 text-xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-1/2 -right-4 text-gray-400 transform -translate-y-1/2" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Pricing
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your venue booking needs
            </p>
          </div>
          <PricingTable />
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Compare Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what each plan includes
            </p>
          </div>
          <FeatureComparison />
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Loved by Event Planners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our users have to say about their experience
            </p>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* Newsletter/Waitlist */}
      <section id="waitlist" className="py-24 bg-gray-50">
        <Newsletter />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Updates
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    API Status
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Security
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white">
                    Cookies
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center">
                <Building2 className="h-8 w-8 text-rose-500" />
                <span className="ml-2 text-xl font-bold">VenueVista</span>
              </div>
              <p className="text-gray-400 mt-4 md:mt-0">
                © {new Date().getFullYear()} VenueVista. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "Advanced Search",
    description:
      "Filter venues by capacity, location, amenities, and more to find exactly what you need.",
    icon: <Search className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Real-time Availability",
    description:
      "Check venue availability and book instantly with our real-time calendar system.",
    icon: <Calendar className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Verified Venues",
    description:
      "Every venue is personally verified to ensure quality and accuracy of information.",
    icon: <Shield className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Virtual Tours",
    description:
      "Explore venues in detail with 360° virtual tours and high-quality photos.",
    icon: <Star className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Instant Booking",
    description:
      "Secure your venue instantly with our streamlined booking process.",
    icon: <Calendar className="h-6 w-6 text-rose-500" />,
  },
  {
    title: "Dedicated Support",
    description:
      "Get help when you need it with our 24/7 customer support team.",
    icon: <Shield className="h-6 w-6 text-rose-500" />,
  },
];

const steps = [
  {
    title: "Search & Filter",
    description:
      "Use our powerful search tools to find venues that match your specific requirements.",
  },
  {
    title: "Compare & Tour",
    description:
      "Compare venues side by side and take virtual tours to make informed decisions.",
  },
  {
    title: "Book & Celebrate",
    description:
      "Secure your venue instantly and start planning your perfect event.",
  },
];
