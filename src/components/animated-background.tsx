"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedBackgroundProps {
  isDarkMode: boolean;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
}

export function AnimatedBackground({ isDarkMode }: AnimatedBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const particles = useRef<Particle[]>([]);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setDimensions({ width, height });
        initParticles();
      }
    };

    const initParticles = () => {
      particles.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * (dimensions.width || 0),
        y: Math.random() * (dimensions.height || 0),
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2,
      }));
    };

    const animate = () => {
      if (canvasRef.current) {
        const ctx = canvasRef.current.getContext("2d");
        if (ctx) {
          ctx.clearRect(0, 0, dimensions.width, dimensions.height);

          // Update and draw particles
          particles.current.forEach((particle) => {
            particle.x += particle.speedX;
            particle.y += particle.speedY;

            // Wrap around edges
            if (particle.x < 0) particle.x = dimensions.width;
            if (particle.x > dimensions.width) particle.x = 0;
            if (particle.y < 0) particle.y = dimensions.height;
            if (particle.y > dimensions.height) particle.y = 0;

            ctx.beginPath();
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(244, 63, 94, ${particle.opacity})`;
            ctx.fill();
          });

          // Draw connections
          particles.current.forEach((particle, i) => {
            particles.current.slice(i + 1).forEach((otherParticle) => {
              const dx = particle.x - otherParticle.x;
              const dy = particle.y - otherParticle.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < 100) {
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(otherParticle.x, otherParticle.y);
                ctx.strokeStyle = `rgba(244, 63, 94, ${
                  0.1 * (1 - distance / 100)
                })`;
                ctx.stroke();
              }
            });
          });
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [dimensions.width, dimensions.height]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full transition-colors duration-300"
      style={{
        background: isDarkMode
          ? "linear-gradient(to bottom right, #000000, #1a1a1a)"
          : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
      }}
    />
  );
}
