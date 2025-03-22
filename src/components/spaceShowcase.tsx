import { useState } from "react";
import { motion } from "framer-motion";

export function SpaceShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors
              ${
                activeCategory === category.id
                  ? "bg-rose-500 text-white"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Spaces Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {spaces.map((space, index) => (
          <motion.div
            key={space.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-lg"
          >
            <div className="aspect-w-16 aspect-h-9 relative">
              <img
                src={space.image || "/placeholder.svg"}
                alt={space.name}
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{space.name}</h3>
              <p className="text-gray-600 mb-4">{space.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-rose-500 font-medium">{space.price}</span>
                <span className="text-sm text-gray-500">{space.capacity}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const categories = [
  { id: "all", name: "All Spaces" },
  { id: "wedding", name: "Wedding Venues" },
  { id: "corporate", name: "Corporate Events" },
  { id: "party", name: "Party Venues" },
  { id: "outdoor", name: "Outdoor Spaces" },
];

const spaces = [
  {
    id: 1,
    name: "The Grand Ballroom",
    description: "Elegant space perfect for weddings and galas",
    price: "From $2,000/day",
    capacity: "Up to 300 guests",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Urban Loft",
    description: "Modern industrial space for creative events",
    price: "From $1,500/day",
    capacity: "Up to 150 guests",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Garden Terrace",
    description: "Beautiful outdoor venue with stunning views",
    price: "From $1,800/day",
    capacity: "Up to 200 guests",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "Tech Hub",
    description: "Fully equipped space for conferences",
    price: "From $1,200/day",
    capacity: "Up to 100 guests",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    name: "Rooftop Lounge",
    description: "Sophisticated space with city views",
    price: "From $2,500/day",
    capacity: "Up to 250 guests",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 6,
    name: "Historic Manor",
    description: "Classic venue with timeless charm",
    price: "From $3,000/day",
    capacity: "Up to 400 guests",
    image: "/placeholder.svg?height=400&width=600",
  },
];
