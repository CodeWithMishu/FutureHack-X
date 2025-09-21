"use client";

import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function ParticleEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = ["#00ffff", "#8b5cf6", "#ec4899", "#10b981"];
    const newParticles: Particle[] = [];

    // Create particles
    for (let i = 0; i < 30; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 10,
      });
    }

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full opacity-30 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
            animation: `float ${particle.duration}s infinite linear`,
            animationDelay: `${particle.delay}s`,
          }}
        />
      ))}

      {/* Additional animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-cyan-500/5 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-purple-500/5 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-pink-500/5 rounded-full blur-xl animate-pulse delay-2000"></div>
      <div className="absolute bottom-20 right-32 w-36 h-36 bg-green-500/5 rounded-full blur-xl animate-pulse delay-3000"></div>
    </div>
  );
}
