"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Environment } from "@react-three/drei";
import * as THREE from "three";

// Interactive Particle System (Stars)
function InteractiveParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 8000;

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      // Spiral galaxy formation
      const radius = Math.random() * 50;
      const angle = Math.random() * Math.PI * 2;
      const height = (Math.random() - 0.5) * 20;

      positions[i3] = Math.cos(angle) * radius;
      positions[i3 + 1] = height;
      positions[i3 + 2] = Math.sin(angle) * radius;

      // Vibrant colors for stars
      const colorChoice = Math.random();
      if (colorChoice < 0.3) {
        colors[i3] = 0;
        colors[i3 + 1] = 1;
        colors[i3 + 2] = 1; // Cyan
      } else if (colorChoice < 0.6) {
        colors[i3] = 1;
        colors[i3 + 1] = 0.5;
        colors[i3 + 2] = 0; // Orange
      } else {
        colors[i3] = 1;
        colors[i3 + 1] = 0;
        colors[i3 + 2] = 1; // Magenta
      }
    }

    return { positions, colors };
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
          args={[particles.positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
          args={[particles.colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        size={0.02}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Mouse Interaction Controller
function MouseController() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    camera.position.x += (mouse.x * 5 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Simplified Scene with Only Stars
function StarfieldScene() {
  return (
    <>
      {/* Ambient lighting for stars */}
      <ambientLight intensity={0.2} color="#1a1a2e" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.5}
        color="#00d4ff"
      />
      <pointLight position={[-20, 10, 10]} intensity={0.8} color="#ff6b00" />

      {/* Interactive Controls */}
      <MouseController />

      {/* Enhanced Stars */}
      <Stars
        radius={200}
        depth={100}
        count={8000}
        factor={8}
        saturation={0}
        fade
        speed={0.5}
      />

      {/* Interactive Particles */}
      <InteractiveParticles />

      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

// Simplified Background Component with Only Stars
export default function DraggableAIBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        style={{
          background:
            "radial-gradient(circle at 30% 70%, #1a1a2e 0%, #16213e 25%, #0f3460 50%, #0e1b2e 75%, #000000 100%)",
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <StarfieldScene />
      </Canvas>
    </div>
  );
}
