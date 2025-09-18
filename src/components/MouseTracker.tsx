"use client";

import { useEffect, useState } from "react";

interface MousePosition {
  x: number;
  y: number;
}

interface MouseTrail {
  x: number;
  y: number;
  id: number;
  timestamp: number;
}

export default function MouseTracker() {
  const [mousePos, setMousePos] = useState<MousePosition>({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState<MouseTrail[]>([]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let trailId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newPos = { x: e.clientX, y: e.clientY };
      setMousePos(newPos);
      setIsVisible(true);

      // Add new trail point
      const newTrailPoint: MouseTrail = {
        x: e.clientX,
        y: e.clientY,
        id: trailId++,
        timestamp: Date.now(),
      };

      setMouseTrail((prevTrail) => {
        const updatedTrail = [...prevTrail, newTrailPoint];
        // Keep only recent trail points (last 20 points)
        return updatedTrail.slice(-20);
      });
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Clean up old trail points
    const cleanupInterval = setInterval(() => {
      setMouseTrail((prevTrail) =>
        prevTrail.filter((point) => Date.now() - point.timestamp < 1000)
      );
    }, 50);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(cleanupInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Mouse Trail */}
      {mouseTrail.map((point) => {
        const age = Date.now() - point.timestamp;
        const opacity = Math.max(0, 1 - age / 1000);
        const scale = Math.max(0.1, 1 - age / 1000);

        return (
          <div
            key={point.id}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transform -translate-x-1 -translate-y-1"
            style={{
              left: point.x,
              top: point.y,
              opacity: opacity * 0.6,
              transform: `translate(-50%, -50%) scale(${scale})`,
              transition: "opacity 0.1s ease-out, transform 0.1s ease-out",
            }}
          />
        );
      })}

      {/* Main Mouse Circle */}
      <div
        className="absolute w-8 h-8 border-2 border-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          background:
            "radial-gradient(circle, rgba(6, 182, 212, 0.2) 0%, transparent 70%)",
          boxShadow:
            "0 0 20px rgba(6, 182, 212, 0.5), inset 0 0 10px rgba(6, 182, 212, 0.3)",
          transition: "all 0.1s ease-out",
        }}
      >
        {/* Inner Glow */}
        <div className="absolute inset-1 bg-cyan-400 rounded-full opacity-20 animate-ping" />

        {/* Center Dot */}
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-cyan-400 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      </div>

      {/* Outer Ring Animation */}
      <div
        className="absolute w-12 h-12 border border-cyan-300 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-30"
        style={{
          left: mousePos.x,
          top: mousePos.y,
          animation: "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        }}
      />
    </div>
  );
}
