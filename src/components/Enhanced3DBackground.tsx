"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

// Animated connecting lines
function ConnectingLines() {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
      linesRef.current.children.forEach((child, index) => {
        child.rotation.y = state.clock.elapsedTime * (0.1 + index * 0.05);
      });
    }
  });

  const points1 = [new THREE.Vector3(-8, 3, -5), new THREE.Vector3(8, -3, -8)];
  const points2 = [
    new THREE.Vector3(6, 6, -10),
    new THREE.Vector3(-6, -4, -12),
  ];
  const points3 = [
    new THREE.Vector3(0, 8, -15),
    new THREE.Vector3(-4, -8, -18),
  ];

  return (
    <group ref={linesRef}>
      <Line
        points={points1}
        color="#ff6b35"
        transparent
        opacity={0.3}
        lineWidth={2}
      />
      <Line
        points={points2}
        color="#4fc3f7"
        transparent
        opacity={0.4}
        lineWidth={2}
      />
      <Line
        points={points3}
        color="#ffa726"
        transparent
        opacity={0.2}
        lineWidth={2}
      />
    </group>
  );
}

// Floating data streams
function DataStreams() {
  const streamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (streamRef.current) {
      streamRef.current.children.forEach((child, index) => {
        child.position.y = ((state.clock.elapsedTime * 2 + index) % 20) - 10;
        if (
          child instanceof THREE.Mesh &&
          child.material instanceof THREE.Material
        ) {
          (child.material as THREE.Material).opacity =
            Math.sin(state.clock.elapsedTime + index) * 0.3 + 0.1;
        }
      });
    }
  });

  const streams = [];
  for (let i = 0; i < 8; i++) {
    streams.push(
      <mesh
        key={i}
        position={[Math.random() * 16 - 8, 0, -15 + Math.random() * 5]}
      >
        <boxGeometry args={[0.05, 1.5, 0.05]} />
        <meshBasicMaterial color="#00ff88" transparent />
      </mesh>
    );
  }

  return <group ref={streamRef}>{streams}</group>;
}

// Pulsing energy orbs
function EnergyOrbs() {
  const orbsRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (orbsRef.current) {
      orbsRef.current.children.forEach((child, index) => {
        const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.2;
        child.scale.setScalar(scale);
        child.rotation.y = state.clock.elapsedTime * (0.5 + index * 0.1);
      });
    }
  });

  return (
    <group ref={orbsRef}>
      <Float
        speed={2}
        rotationIntensity={1}
        floatIntensity={2}
        position={[-10, 4, -8]}
      >
        <mesh>
          <sphereGeometry args={[0.6, 16, 16]} />
          <meshBasicMaterial color="#ff6b35" transparent opacity={0.3} />
        </mesh>
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={1.5}
        floatIntensity={1.5}
        position={[10, -4, -12]}
      >
        <mesh>
          <sphereGeometry args={[0.8, 16, 16]} />
          <meshBasicMaterial color="#4fc3f7" transparent opacity={0.25} />
        </mesh>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={2.5}
        position={[0, 8, -18]}
      >
        <mesh>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#ffa726" transparent opacity={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

// Rotating hexagonal grid
function HexGrid() {
  const hexRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (hexRef.current) {
      hexRef.current.rotation.z = state.clock.elapsedTime * 0.1;
      hexRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.5;
    }
  });

  const hexagons = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2;
    const x = Math.cos(angle) * 8;
    const y = Math.sin(angle) * 8;

    hexagons.push(
      <mesh key={i} position={[x, y, -20]}>
        <ringGeometry args={[1, 1.2, 6]} />
        <meshBasicMaterial color="#ff6b35" transparent opacity={0.15} />
      </mesh>
    );
  }

  return <group ref={hexRef}>{hexagons}</group>;
}

// Enhanced 3D Scene
function EnhancedScene() {
  return (
    <>
      <ConnectingLines />
      <DataStreams />
      <EnergyOrbs />
      <HexGrid />
    </>
  );
}

// Enhanced 3D Background Component
export default function Enhanced3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 90 }}
        style={{ background: "transparent" }}
      >
        <EnhancedScene />
      </Canvas>
    </div>
  );
}
