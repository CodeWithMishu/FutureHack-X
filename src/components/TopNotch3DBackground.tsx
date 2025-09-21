"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Box,
  Sphere,
  Octahedron,
  Icosahedron,
  Dodecahedron,
  Torus,
  Cone,
  Ring,
  Tetrahedron,
  Stars,
  Environment,
} from "@react-three/drei";
import * as THREE from "three";

// Spectacular Floating 3D Geometric Elements
function SpectacularGeometry() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.02) * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Central Large Icosahedron */}
      <Float
        speed={1.2}
        rotationIntensity={1.5}
        floatIntensity={2}
        position={[0, 0, -8]}
      >
        <Icosahedron args={[2.5]} rotation={[0, 0, Math.PI / 6]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.08}
            wireframe
            emissive="#1e40af"
            emissiveIntensity={0.15}
          />
        </Icosahedron>
      </Float>

      {/* Floating Cubes Array */}
      <Float
        speed={0.8}
        rotationIntensity={2}
        floatIntensity={1.5}
        position={[-10, 6, -18]}
      >
        <Box args={[1.5, 1.5, 1.5]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.12}
            wireframe
            emissive="#dc2626"
            emissiveIntensity={0.12}
          />
        </Box>
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={1.8}
        floatIntensity={2.5}
        position={[10, -5, -25]}
      >
        <Box args={[1, 1, 1]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <meshStandardMaterial
            color="#ffa726"
            transparent
            opacity={0.15}
            wireframe
            emissive="#f59e0b"
            emissiveIntensity={0.12}
          />
        </Box>
      </Float>

      {/* Octahedrons */}
      <Float
        speed={1.8}
        rotationIntensity={1.2}
        floatIntensity={3}
        position={[8, 10, -30]}
      >
        <Octahedron args={[1.8]} rotation={[Math.PI / 6, 0, Math.PI / 4]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.1}
            wireframe
            emissive="#1e40af"
            emissiveIntensity={0.1}
          />
        </Octahedron>
      </Float>

      <Float
        speed={1.1}
        rotationIntensity={2.2}
        floatIntensity={1.8}
        position={[-12, -8, -35]}
      >
        <Octahedron args={[1.3]} rotation={[0, Math.PI / 5, 0]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.13}
            wireframe
            emissive="#dc2626"
            emissiveIntensity={0.1}
          />
        </Octahedron>
      </Float>

      {/* Dodecahedrons */}
      <Float
        speed={0.9}
        rotationIntensity={1.6}
        floatIntensity={2.2}
        position={[-6, 12, -40]}
      >
        <Dodecahedron args={[1.5]} rotation={[Math.PI / 8, Math.PI / 3, 0]}>
          <meshStandardMaterial
            color="#ffa726"
            transparent
            opacity={0.09}
            wireframe
            emissive="#f59e0b"
            emissiveIntensity={0.08}
          />
        </Dodecahedron>
      </Float>

      {/* Tetrahedrons */}
      <Float
        speed={2.2}
        rotationIntensity={2.8}
        floatIntensity={3.5}
        position={[15, 4, -22]}
      >
        <Tetrahedron args={[1.2]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.16}
            wireframe
            emissive="#1e40af"
            emissiveIntensity={0.12}
          />
        </Tetrahedron>
      </Float>

      <Float
        speed={1.7}
        rotationIntensity={2.1}
        floatIntensity={2.8}
        position={[-15, -10, -28]}
      >
        <Tetrahedron args={[1.6]} rotation={[0, Math.PI / 6, Math.PI / 2]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.14}
            wireframe
            emissive="#dc2626"
            emissiveIntensity={0.12}
          />
        </Tetrahedron>
      </Float>

      {/* Cones */}
      <Float
        speed={1.4}
        rotationIntensity={1.8}
        floatIntensity={2.8}
        position={[18, 12, -33]}
      >
        <Cone args={[1.2, 3, 8]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.11}
            wireframe
            emissive="#1e40af"
            emissiveIntensity={0.09}
          />
        </Cone>
      </Float>

      <Float
        speed={1.6}
        rotationIntensity={2.5}
        floatIntensity={1.5}
        position={[-18, -12, -38]}
      >
        <Cone args={[1.8, 3.5, 6]} rotation={[0, Math.PI / 4, Math.PI / 3]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.13}
            wireframe
            emissive="#dc2626"
            emissiveIntensity={0.09}
          />
        </Cone>
      </Float>

      {/* Torus Shapes */}
      <Float
        speed={1.3}
        rotationIntensity={1.4}
        floatIntensity={2.1}
        position={[0, -15, -45]}
      >
        <Torus args={[3, 1, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#ffa726"
            transparent
            opacity={0.08}
            wireframe
            emissive="#f59e0b"
            emissiveIntensity={0.07}
          />
        </Torus>
      </Float>

      <Float
        speed={0.8}
        rotationIntensity={1.1}
        floatIntensity={1.8}
        position={[22, 0, -42]}
      >
        <Torus args={[2, 0.6, 16, 32]} rotation={[0, Math.PI / 3, Math.PI / 4]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.1}
            wireframe
            emissive="#1e40af"
            emissiveIntensity={0.07}
          />
        </Torus>
      </Float>

      {/* Rings */}
      <Float
        speed={1.9}
        rotationIntensity={1.7}
        floatIntensity={3.2}
        position={[-22, 8, -48]}
      >
        <Ring args={[2, 3.5, 32]} rotation={[Math.PI / 3, Math.PI / 4, 0]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.06}
            wireframe
            emissive="#dc2626"
            emissiveIntensity={0.06}
          />
        </Ring>
      </Float>

      {/* Large Background Spheres */}
      <Float
        speed={0.5}
        rotationIntensity={0.8}
        floatIntensity={1.5}
        position={[25, -8, -55]}
      >
        <Sphere args={[2.5, 24, 24]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.05}
            wireframe
            emissive="#1e40af"
            emissiveIntensity={0.04}
          />
        </Sphere>
      </Float>

      <Float
        speed={0.7}
        rotationIntensity={1.1}
        floatIntensity={2.1}
        position={[-25, 10, -60]}
      >
        <Sphere args={[3, 28, 28]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.06}
            wireframe
            emissive="#dc2626"
            emissiveIntensity={0.04}
          />
        </Sphere>
      </Float>
    </group>
  );
}

// Advanced Particle Galaxy
function ParticleGalaxy() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(8000 * 3);
    for (let i = 0; i < 8000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * viewport.width * 8;
      temp[i3 + 1] = (Math.random() - 0.5) * viewport.height * 8;
      temp[i3 + 2] = (Math.random() - 0.5) * 80;
    }
    return temp;
  }, [viewport]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.03) * 0.15;

      // Enhanced mouse interaction
      const mouse = state.mouse;
      ref.current.rotation.x += mouse.y * 0.12;
      ref.current.rotation.y += mouse.x * 0.12;

      // Dynamic pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.6) * 0.2;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <points
      ref={ref}
      args={[
        new THREE.BufferGeometry().setAttribute(
          "position",
          new THREE.BufferAttribute(particles, 3)
        ),
      ]}
    >
      <pointsMaterial
        color="#4fc3f7"
        size={0.01}
        sizeAttenuation={true}
        transparent
        opacity={0.4}
      />
    </points>
  );
}

// Energy Connection Network
function EnergyNetwork() {
  const networkRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (networkRef.current) {
      networkRef.current.rotation.z =
        Math.sin(state.clock.elapsedTime * 0.08) * 0.03;
      networkRef.current.children.forEach((child, index) => {
        child.rotation.y = state.clock.elapsedTime * (0.05 + index * 0.02);
        if ("material" in child && child.material) {
          (child.material as THREE.Material).opacity =
            0.05 + Math.sin(state.clock.elapsedTime * 2 + index) * 0.05;
        }
      });
    }
  });

  const connections = [];
  const nodePositions = [
    [0, 0, -8],
    [-10, 6, -18],
    [10, -5, -25],
    [8, 10, -30],
    [-12, -8, -35],
    [-6, 12, -40],
    [15, 4, -22],
    [-15, -10, -28],
    [18, 12, -33],
    [-18, -12, -38],
    [0, -15, -45],
    [22, 0, -42],
    [-22, 8, -48],
    [25, -8, -55],
    [-25, 10, -60],
  ];

  for (let i = 0; i < nodePositions.length; i++) {
    for (let j = i + 1; j < nodePositions.length; j++) {
      if (Math.random() > 0.7) {
        // Only create some connections for performance
        const start = new THREE.Vector3(...nodePositions[i]);
        const end = new THREE.Vector3(...nodePositions[j]);
        const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);

        connections.push(
          <primitive
            key={`${i}-${j}`}
            object={
              new THREE.Line(
                geometry,
                new THREE.LineBasicMaterial({
                  color: Math.random() > 0.5 ? "#ff6b35" : "#4fc3f7",
                  transparent: true,
                  opacity: 0.05,
                })
              )
            }
          />
        );
      }
    }
  }

  return <group ref={networkRef}>{connections}</group>;
}

// Main Spectacular Scene
function TopNotchScene() {
  const { camera, mouse } = useThree();

  useFrame((state) => {
    // Smooth camera movement with enhanced responsiveness
    const targetX = mouse.x * 5;
    const targetY = -mouse.y * 5;
    const targetZ = 10 + Math.sin(state.clock.elapsedTime * 0.08) * 1.5;

    camera.position.x += (targetX - camera.position.x) * 0.025;
    camera.position.y += (targetY - camera.position.y) * 0.025;
    camera.position.z += (targetZ - camera.position.z) * 0.01;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Multi-layered Lighting System */}
      <ambientLight intensity={0.08} color="#0f172a" />
      <pointLight position={[15, 15, 15]} intensity={1.2} color="#4fc3f7" />
      <pointLight position={[-15, -15, -15]} intensity={0.8} color="#ff6b35" />
      <pointLight position={[0, 20, 8]} intensity={0.6} color="#ffa726" />
      <pointLight position={[0, -20, -25]} intensity={0.4} color="#9c27b0" />
      <pointLight position={[30, 0, -10]} intensity={0.5} color="#10b981" />
      <pointLight position={[-30, 0, -30]} intensity={0.3} color="#f59e0b" />

      {/* Enhanced Starfield */}
      <Stars
        radius={150}
        depth={80}
        count={5000}
        factor={6}
        saturation={0}
        fade
        speed={0.3}
      />

      {/* Main 3D Elements */}
      <SpectacularGeometry />
      <ParticleGalaxy />
      <EnergyNetwork />

      {/* Environment for enhanced reflections */}
      <Environment preset="night" />
    </>
  );
}

// Top-Notch 3D Background Component
export default function TopNotch3DBackground() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 80 }}
        style={{
          background:
            "radial-gradient(circle at 50% 50%, #1e1b4b 0%, #0f0f23 30%, #020617 60%, #000000 100%)",
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
        }}
      >
        <TopNotchScene />
      </Canvas>
    </div>
  );
}
