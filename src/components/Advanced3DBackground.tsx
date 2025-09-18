"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Box, Sphere, Octahedron, Icosahedron, Dodecahedron, Torus, Cone } from "@react-three/drei";
import * as THREE from "three";

// Floating 3D Geometric Elements
function FloatingGeometry() {
  return (
    <>
      {/* Large Central Geometric Shapes */}
      <Float
        speed={1.2}
        rotationIntensity={1.5}
        floatIntensity={2}
        position={[0, 0, -8]}
      >
        <Icosahedron args={[1.5]} rotation={[0, 0, Math.PI / 6]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.15}
            wireframe
          />
        </Icosahedron>
      </Float>

      {/* Floating Cubes */}
      <Float
        speed={0.8}
        rotationIntensity={2}
        floatIntensity={1.5}
        position={[-6, 4, -12]}
      >
        <Box args={[1, 1, 1]} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.2}
            wireframe
          />
        </Box>
      </Float>

      <Float
        speed={1.5}
        rotationIntensity={1.8}
        floatIntensity={2.5}
        position={[8, -3, -15]}
      >
        <Box args={[0.8, 0.8, 0.8]} rotation={[0, Math.PI / 3, Math.PI / 6]}>
          <meshStandardMaterial
            color="#ffa726"
            transparent
            opacity={0.25}
            wireframe
          />
        </Box>
      </Float>

      {/* Octahedrons */}
      <Float
        speed={1.8}
        rotationIntensity={1.2}
        floatIntensity={3}
        position={[5, 6, -18]}
      >
        <Octahedron args={[1.2]} rotation={[Math.PI / 6, 0, Math.PI / 4]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.18}
            wireframe
          />
        </Octahedron>
      </Float>

      <Float
        speed={1.1}
        rotationIntensity={2.2}
        floatIntensity={1.8}
        position={[-8, -5, -20]}
      >
        <Octahedron args={[0.9]} rotation={[0, Math.PI / 5, 0]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.22}
            wireframe
          />
        </Octahedron>
      </Float>

      {/* Dodecahedrons */}
      <Float
        speed={0.9}
        rotationIntensity={1.6}
        floatIntensity={2.2}
        position={[-4, 8, -25]}
      >
        <Dodecahedron args={[1]} rotation={[Math.PI / 8, Math.PI / 3, 0]}>
          <meshStandardMaterial
            color="#ffa726"
            transparent
            opacity={0.15}
            wireframe
          />
        </Dodecahedron>
      </Float>

      {/* Cones */}
      <Float
        speed={1.4}
        rotationIntensity={1.8}
        floatIntensity={2.8}
        position={[10, 8, -22]}
      >
        <Cone args={[0.8, 2, 8]} rotation={[Math.PI / 4, 0, Math.PI / 6]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.2}
            wireframe
          />
        </Cone>
      </Float>

      <Float
        speed={1.6}
        rotationIntensity={2.5}
        floatIntensity={1.5}
        position={[-10, -8, -28]}
      >
        <Cone args={[1.2, 2.5, 6]} rotation={[0, Math.PI / 4, Math.PI / 3]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.18}
            wireframe
          />
        </Cone>
      </Float>

      {/* Torus Shapes */}
      <Float
        speed={1.3}
        rotationIntensity={1.4}
        floatIntensity={2.1}
        position={[0, -10, -30]}
      >
        <Torus args={[2, 0.6, 16, 32]} rotation={[Math.PI / 2, 0, 0]}>
          <meshStandardMaterial
            color="#ffa726"
            transparent
            opacity={0.16}
            wireframe
          />
        </Torus>
      </Float>

      {/* Additional Spheres */}
      <Float
        speed={2}
        rotationIntensity={0.8}
        floatIntensity={3.5}
        position={[12, -2, -35]}
      >
        <Sphere args={[1.5, 16, 16]}>
          <meshStandardMaterial
            color="#4fc3f7"
            transparent
            opacity={0.12}
            wireframe
          />
        </Sphere>
      </Float>

      <Float
        speed={0.7}
        rotationIntensity={1.1}
        floatIntensity={2.7}
        position={[-12, 5, -32]}
      >
        <Sphere args={[1.8, 20, 20]}>
          <meshStandardMaterial
            color="#ff6b35"
            transparent
            opacity={0.14}
            wireframe
          />
        </Sphere>
      </Float>
    </>
  );
}

// Animated Particle Field
function AdvancedParticles() {
  const ref = useRef<THREE.Points>(null);
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const temp = new Float32Array(3000 * 3);
    for (let i = 0; i < 3000; i++) {
      const i3 = i * 3;
      temp[i3] = (Math.random() - 0.5) * viewport.width * 4;
      temp[i3 + 1] = (Math.random() - 0.5) * viewport.height * 4;
      temp[i3 + 2] = (Math.random() - 0.5) * 40;
    }
    return temp;
  }, [viewport]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.08) * 0.15;
      
      // Enhanced mouse interaction
      const mouse = state.mouse;
      ref.current.rotation.x += mouse.y * 0.08;
      ref.current.rotation.y += mouse.x * 0.08;
      
      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      ref.current.scale.setScalar(scale);
    }
  });

  return (
    <points ref={ref} args={[new THREE.BufferGeometry().setAttribute('position', new THREE.BufferAttribute(particles, 3))]}>
      <pointsMaterial
        color="#4fc3f7"
        size={0.015}
        sizeAttenuation={true}
        transparent
        opacity={0.8}
      />
    </points>
  );
}

// Main Scene with Enhanced 3D Effects
function Advanced3DScene() {
  const { camera, mouse } = useThree();

  useFrame((state) => {
    // Enhanced camera movement
    camera.position.x += (mouse.x * 3 - camera.position.x) * 0.015;
    camera.position.y += (-mouse.y * 3 - camera.position.y) * 0.015;
    camera.position.z = 10 + Math.sin(state.clock.elapsedTime * 0.1) * 0.5;
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color="#4fc3f7" />
      <pointLight position={[-10, -10, -10]} intensity={0.3} color="#ff6b35" />
      <FloatingGeometry />
      <AdvancedParticles />
    </>
  );
}

// Advanced 3D Background Component
export default function Advanced3DBackground() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Advanced3DScene />
      </Canvas>
    </div>
  );
}