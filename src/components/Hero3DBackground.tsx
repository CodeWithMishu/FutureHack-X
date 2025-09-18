"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Points,
  PointMaterial,
  Float,
  Sphere,
  Ring,
  Torus,
} from "@react-three/drei";
import * as THREE from "three";

// Animated particles component
function AnimatedParticles() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(2000 * 3);
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * viewport.width * 3;
      temp[i3 + 1] = (Math.random() - 0.5) * viewport.height * 3;
      temp[i3 + 2] = (Math.random() - 0.5) * 20;
    }
    return temp;
  }, [viewport]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;

      // Mouse interaction
      const mouse = state.mouse;
      ref.current.rotation.x += mouse.y * 0.05;
      ref.current.rotation.y += mouse.x * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ff6b35"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

// Floating geometric shapes
function FloatingGeometry() {
  return (
    <>
      {/* Floating Rings */}
      <Float
        speed={1.5}
        rotationIntensity={1}
        floatIntensity={2}
        position={[-8, 4, -5]}
      >
        <Ring args={[2, 2.5, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#ff6b35" transparent opacity={0.3} />
        </Ring>
      </Float>

      <Float
        speed={2}
        rotationIntensity={1.5}
        floatIntensity={1.5}
        position={[8, -3, -8]}
      >
        <Ring args={[1.5, 2, 32]} rotation={[0, Math.PI / 4, 0]}>
          <meshBasicMaterial color="#4fc3f7" transparent opacity={0.4} />
        </Ring>
      </Float>

      {/* Floating Spheres */}
      <Float
        speed={1}
        rotationIntensity={0.5}
        floatIntensity={3}
        position={[6, 6, -10]}
      >
        <Sphere args={[0.5, 32, 32]}>
          <meshBasicMaterial color="#ff6b35" transparent opacity={0.2} />
        </Sphere>
      </Float>

      <Float
        speed={1.8}
        rotationIntensity={0.8}
        floatIntensity={2.5}
        position={[-6, -4, -12]}
      >
        <Sphere args={[0.8, 32, 32]}>
          <meshBasicMaterial color="#4fc3f7" transparent opacity={0.3} />
        </Sphere>
      </Float>

      {/* Floating Torus */}
      <Float
        speed={1.2}
        rotationIntensity={2}
        floatIntensity={1}
        position={[0, 8, -15]}
      >
        <Torus args={[1, 0.3, 16, 32]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#ff6b35" transparent opacity={0.25} />
        </Torus>
      </Float>

      <Float
        speed={0.8}
        rotationIntensity={1.5}
        floatIntensity={2}
        position={[-4, -8, -18]}
      >
        <Torus
          args={[1.5, 0.2, 16, 32]}
          rotation={[0, Math.PI / 6, Math.PI / 4]}
        >
          <meshBasicMaterial color="#4fc3f7" transparent opacity={0.3} />
        </Torus>
      </Float>
    </>
  );
}

// Rotating wireframe spheres
function WireframeSpheres() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
      groupRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.05) * 0.2;
    }
  });

  return (
    <group ref={groupRef}>
      <Sphere args={[12, 32, 32]} position={[0, 0, -20]}>
        <meshBasicMaterial
          color="#ff6b35"
          wireframe
          transparent
          opacity={0.1}
        />
      </Sphere>
      <Sphere args={[8, 24, 24]} position={[0, 0, -15]}>
        <meshBasicMaterial
          color="#4fc3f7"
          wireframe
          transparent
          opacity={0.15}
        />
      </Sphere>
      <Sphere args={[15, 32, 32]} position={[0, 0, -25]}>
        <meshBasicMaterial
          color="#ffa726"
          wireframe
          transparent
          opacity={0.08}
        />
      </Sphere>
    </group>
  );
}

// Main 3D Scene component
function Scene() {
  const { camera, mouse } = useThree();

  useFrame(() => {
    // Subtle camera movement based on mouse
    camera.position.x += (mouse.x * 2 - camera.position.x) * 0.02;
    camera.position.y += (-mouse.y * 2 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <AnimatedParticles />
      <FloatingGeometry />
      <WireframeSpheres />
    </>
  );
}

// Main 3D Background Component
export default function Hero3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
