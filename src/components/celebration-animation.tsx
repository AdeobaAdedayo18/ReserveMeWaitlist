import { motion } from "framer-motion";

interface Particle {
  x: number;
  y: number;
  rotation: number;
  scale: number;
  color: string;
}

export function CelebrationAnimation() {
  // Generate random particles
  const particles: Particle[] = Array.from({ length: 50 }, () => ({
    x: Math.random() * 1000 - 500,
    y: Math.random() * -800,
    rotation: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
    color: ["#f43f5e", "#ffffff", "#fda4af", "#fecdd3"][
      Math.floor(Math.random() * 4)
    ],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2"
          initial={{
            x: 0,
            y: 0,
            scale: 0,
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            x: particle.x,
            y: particle.y,
            scale: particle.scale,
            rotate: particle.rotation,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 2.5,
            ease: [0.23, 0.83, 0.68, 0],
            delay: i * 0.02,
          }}
        >
          <div
            className="w-3 h-3"
            style={{
              background: particle.color,
              borderRadius: Math.random() > 0.5 ? "50%" : "2px",
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
