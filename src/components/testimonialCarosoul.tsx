import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

// interface Testimonial {
//   name: string;
//   title: string;
//   quote: string;
//   avatar: string;
// }

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-5xl mx-auto">
      <div className="relative flex items-center space-x-4">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <div className="flex-1 p-4 bg-white rounded-lg shadow-md">
          <img
            src={currentTestimonial.avatar || "/placeholder.svg"}
            alt={currentTestimonial.name}
            className="w-20 h-20 rounded-full mx-auto mb-4"
          />
          <p className="text-center text-lg font-medium mb-2">
            {currentTestimonial.name}
          </p>
          <p className="text-center text-sm text-gray-500 mb-4">
            {currentTestimonial.title}
          </p>
          <p className="text-center text-gray-700">
            {currentTestimonial.quote}
          </p>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Event Planner",
    quote:
      "VenueVista has revolutionized how I find venues for my clients. The virtual tours and detailed information save me countless hours of in-person visits.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Michael Chen",
    title: "Corporate Events Manager",
    quote:
      "The platform's filtering system is incredible. I can find exactly what I need within minutes, and the booking process is seamless.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Emily Rodriguez",
    title: "Wedding Coordinator",
    quote:
      "My couples love being able to explore venues virtually before making a decision. It's made the venue selection process so much more efficient.",
    avatar: "/placeholder.svg?height=80&width=80",
  },
];

export default TestimonialCarousel;
