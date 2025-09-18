"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Text3D,
  MeshDistortMaterial,
  Sphere,
  Octahedron,
  Icosahedron,
  Dodecahedron,
  Torus,
  Box,
  Cylinder,
  Cone,
  Stars,
  Environment,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";

// AI Brain-like Neural Network
function AIBrain() {
  const brainRef = useRef<THREE.Group>(null);
  const spheresRef = useRef<THREE.InstancedMesh>(null);
  const connectionsRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const nodePositions = [];
    for (let i = 0; i < 30; i++) {
      nodePositions.push([
        (Math.random() - 0.5) * 20,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 20,
      ]);
    }
    return nodePositions;
  }, []);

  useFrame((state) => {
    if (brainRef.current) {
      brainRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      brainRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.08) * 0.2;
    }
  });

  return (
    <group ref={brainRef} position={[-15, 5, -25]}>
      {/* Neural Nodes */}
      {nodes.map((position, index) => (
        <Float
          key={index}
          speed={1 + Math.random()}
          rotationIntensity={2}
          floatIntensity={3}
          position={position as [number, number, number]}
        >
          <Sphere args={[0.3 + Math.random() * 0.5]}>
            <MeshDistortMaterial
              color="#00d4ff"
              emissive="#0066cc"
              emissiveIntensity={0.5}
              distort={0.3}
              speed={2}
            />
          </Sphere>
        </Float>
      ))}

      {/* Connection Lines */}
      <group ref={connectionsRef}>
        {nodes.map((_, index) => {
          if (index < nodes.length - 1 && Math.random() > 0.7) {
            const start = nodes[index];
            const end = nodes[index + 1];
            const points = [
              new THREE.Vector3(...start),
              new THREE.Vector3(...end),
            ];
            const geometry = new THREE.BufferGeometry().setFromPoints(points);

            return (
              <primitive
                key={index}
                object={
                  new THREE.Line(
                    geometry,
                    new THREE.LineBasicMaterial({
                      color: "#00d4ff",
                      opacity: 0.3,
                      transparent: true,
                    })
                  )
                }
              />
            );
          }
          return null;
        })}
      </group>
    </group>
  );
}

// Floating Code Blocks
function CodeBlocks() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.05;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.3) * 2;
    }
  });

  return (
    <group ref={groupRef} position={[20, -5, -15]}>
      {Array.from({ length: 12 }).map((_, index) => (
        <Float
          key={index}
          speed={0.8 + Math.random() * 0.4}
          rotationIntensity={1.5}
          floatIntensity={2}
          position={[
            (Math.random() - 0.5) * 15,
            (Math.random() - 0.5) * 12,
            (Math.random() - 0.5) * 10,
          ]}
        >
          <Box
            args={[2, 0.3, 3]}
            rotation={[Math.random(), Math.random(), Math.random()]}
          >
            <meshStandardMaterial
              color={index % 2 === 0 ? "#00ff88" : "#ff6b00"}
              emissive={index % 2 === 0 ? "#00aa44" : "#cc4400"}
              emissiveIntensity={0.3}
              transparent
              opacity={0.8}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

// Hackathon Trophy and Tools
function HackathonElements() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      groupRef.current.position.x = Math.cos(state.clock.elapsedTime * 0.2) * 3;
    }
  });

  return (
    <group ref={groupRef} position={[0, 10, -20]}>
      {/* Trophy */}
      <Float
        speed={1.5}
        rotationIntensity={2}
        floatIntensity={3}
        position={[0, 0, 0]}
      >
        <group>
          <Cylinder args={[1.5, 2, 4]} position={[0, 0, 0]}>
            <meshStandardMaterial
              color="#ffd700"
              emissive="#ff8800"
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
            />
          </Cylinder>
          <Sphere args={[1]} position={[0, 3, 0]}>
            <meshStandardMaterial
              color="#ffd700"
              emissive="#ff8800"
              emissiveIntensity={0.4}
              metalness={0.8}
              roughness={0.2}
            />
          </Sphere>
        </group>
      </Float>

      {/* Floating Tools */}
      <Float
        speed={1.2}
        rotationIntensity={1.8}
        floatIntensity={2.5}
        position={[-8, 2, 5]}
      >
        <Octahedron args={[1.5]}>
          <meshStandardMaterial
            color="#9c27b0"
            emissive="#6a1b9a"
            emissiveIntensity={0.3}
            transparent
            opacity={0.9}
          />
        </Octahedron>
      </Float>

      <Float
        speed={0.9}
        rotationIntensity={1.3}
        floatIntensity={2}
        position={[8, -2, 3]}
      >
        <Dodecahedron args={[1.2]}>
          <meshStandardMaterial
            color="#e91e63"
            emissive="#ad1457"
            emissiveIntensity={0.3}
            transparent
            opacity={0.8}
          />
        </Dodecahedron>
      </Float>
    </group>
  );
}

// Innovation Rings
function InnovationRings() {
  const ringGroupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (ringGroupRef.current) {
      ringGroupRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      ringGroupRef.current.rotation.z = state.clock.elapsedTime * 0.08;
    }
  });

  return (
    <group ref={ringGroupRef} position={[12, -8, -30]}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Float
          key={index}
          speed={1 + index * 0.2}
          rotationIntensity={1.5}
          floatIntensity={2}
          position={[0, 0, index * 3]}
        >
          <Torus
            args={[3 + index * 0.5, 0.2 + index * 0.1, 16, 32]}
            rotation={[Math.PI / 2, 0, (index * Math.PI) / 4]}
          >
            <meshStandardMaterial
              color={`hsl(${180 + index * 40}, 80%, 60%)`}
              emissive={`hsl(${180 + index * 40}, 60%, 30%)`}
              emissiveIntensity={0.4}
              transparent
              opacity={0.7}
            />
          </Torus>
        </Float>
      ))}
    </group>
  );
}

// Data Streams
function DataStreams() {
  const streamRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (streamRef.current) {
      streamRef.current.rotation.y = state.clock.elapsedTime * 0.12;
      streamRef.current.position.z =
        Math.sin(state.clock.elapsedTime * 0.15) * 5;
    }
  });

  return (
    <group ref={streamRef} position={[-20, -10, -25]}>
      {Array.from({ length: 20 }).map((_, index) => (
        <Float
          key={index}
          speed={2 + Math.random()}
          rotationIntensity={0.5}
          floatIntensity={4}
          position={[Math.sin(index) * 8, index * 0.8 - 8, Math.cos(index) * 5]}
        >
          <Box args={[0.3, 0.3, 2 + Math.random() * 3]}>
            <meshStandardMaterial
              color="#00ffff"
              emissive="#0088cc"
              emissiveIntensity={0.5}
              transparent
              opacity={0.8}
            />
          </Box>
        </Float>
      ))}
    </group>
  );
}

// Quantum Particles
function QuantumParticles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 10000;

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

      // Vibrant colors
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
      <bufferGeometry>
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

// Main Scene
function AIHackathonScene() {
  return (
    <>
      {/* Advanced Lighting */}
      <ambientLight intensity={0.1} color="#1a1a2e" />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#00d4ff" />
      <pointLight position={[-20, 10, 10]} intensity={1.5} color="#ff6b00" />
      <pointLight position={[20, -10, -10]} intensity={1.2} color="#9c27b0" />
      <pointLight position={[0, 20, -20]} intensity={0.8} color="#00ff88" />
      <spotLight
        position={[0, 30, 0]}
        intensity={1}
        angle={0.3}
        color="#ffd700"
      />

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

      {/* AI and Hackathon Elements */}
      <AIBrain />
      <CodeBlocks />
      <HackathonElements />
      <InnovationRings />
      <DataStreams />
      <QuantumParticles />

      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

// AI Hackathon Background Component
export default function AIHackathonBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
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
        <AIHackathonScene />
      </Canvas>
    </div>
  );
}
