"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Sphere, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Meteor Component with Enhanced Effects and Click Targeting
interface MeteorData {
  id: number;
  size: "small" | "medium" | "large";
  startPosition: [number, number, number];
  velocity: [number, number, number];
  life: number;
  maxLife: number;
  color: string;
  targetPosition?: [number, number, number]; // New: target position for click-directed meteors
}

function Meteor({
  meteor,
  onComplete,
}: {
  meteor: MeteorData;
  onComplete: (id: number) => void;
}) {
  const meteorRef = useRef<THREE.Group>(null);
  const trailRef = useRef<THREE.Points>(null);
  const [currentLife, setCurrentLife] = useState(meteor.maxLife);

  // Size configurations
  const sizeConfig = {
    small: { radius: 0.08, intensity: 0.4, trailLength: 20, speed: 1.2 },
    medium: { radius: 0.15, intensity: 0.6, trailLength: 35, speed: 1.0 },
    large: { radius: 0.25, intensity: 1.0, trailLength: 50, speed: 0.8 },
  };

  const config = sizeConfig[meteor.size];

  // Create trail particles
  const trailParticles = useMemo(() => {
    const count = config.trailLength;
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Initialize positions at meteor start
      positions[i3] = meteor.startPosition[0];
      positions[i3 + 1] = meteor.startPosition[1];
      positions[i3 + 2] = meteor.startPosition[2];

      // Gradient colors for trail
      const intensity = (count - i) / count;
      colors[i3] = 1.0 * intensity; // Red
      colors[i3 + 1] = 0.4 * intensity; // Green
      colors[i3 + 2] = 0.0 * intensity; // Blue

      sizes[i] = config.radius * intensity * 2;
    }

    return { positions, colors, sizes, count };
  }, [meteor, config]);

  useFrame((state, delta) => {
    if (meteorRef.current && currentLife > 0) {
      // Enhanced meteor movement with targeting
      if (meteor.targetPosition) {
        // Calculate direction toward target
        const direction = new THREE.Vector3(
          meteor.targetPosition[0] - meteorRef.current.position.x,
          meteor.targetPosition[1] - meteorRef.current.position.y,
          meteor.targetPosition[2] - meteorRef.current.position.z
        ).normalize();

        // Adjust velocity toward target with some natural curve
        const speed = 15;
        meteorRef.current.position.x += direction.x * speed * delta;
        meteorRef.current.position.y += direction.y * speed * delta;
        meteorRef.current.position.z += direction.z * speed * delta;
      } else {
        // Default straight-line movement
        meteorRef.current.position.x += meteor.velocity[0] * delta;
        meteorRef.current.position.y += meteor.velocity[1] * delta;
        meteorRef.current.position.z += meteor.velocity[2] * delta;
      }

      // Update trail particles
      if (trailRef.current) {
        const positions = trailRef.current.geometry.attributes.position
          .array as Float32Array;

        // Shift trail positions
        for (let i = trailParticles.count - 1; i > 0; i--) {
          const i3 = i * 3;
          const prev3 = (i - 1) * 3;
          positions[i3] = positions[prev3];
          positions[i3 + 1] = positions[prev3 + 1];
          positions[i3 + 2] = positions[prev3 + 2];
        }

        // Set new head position
        positions[0] = meteorRef.current.position.x;
        positions[1] = meteorRef.current.position.y;
        positions[2] = meteorRef.current.position.z;

        trailRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Update life and opacity
      const newLife = currentLife - delta;
      setCurrentLife(newLife);

      const opacity = Math.max(0, newLife / meteor.maxLife);

      // Update meteor material
      if (meteorRef.current.children[0]) {
        const material = (meteorRef.current.children[0] as THREE.Mesh)
          .material as THREE.MeshStandardMaterial;
        material.opacity = opacity;
        material.emissiveIntensity = config.intensity * opacity;
      }

      // Remove when life expires or falls too low
      if (newLife <= 0 || meteorRef.current.position.y < -60) {
        onComplete(meteor.id);
      }
    }
  });

  return (
    <group ref={meteorRef} position={meteor.startPosition}>
      {/* Trail particles */}
      <points ref={trailRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={trailParticles.count}
            array={trailParticles.positions}
            itemSize={3}
            args={[trailParticles.positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            count={trailParticles.count}
            array={trailParticles.colors}
            itemSize={3}
            args={[trailParticles.colors, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            count={trailParticles.count}
            array={trailParticles.sizes}
            itemSize={1}
            args={[trailParticles.sizes, 1]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.5}
          vertexColors
          blending={THREE.AdditiveBlending}
          transparent
          opacity={0.8}
          sizeAttenuation
        />
      </points>

      {/* Main meteor body */}
      <Sphere args={[config.radius]} castShadow>
        <meshStandardMaterial
          color={meteor.color}
          emissive={meteor.color}
          emissiveIntensity={config.intensity}
          transparent
          opacity={1}
          roughness={0.1}
          metalness={0.8}
        />
      </Sphere>

      {/* Glowing core */}
      <Sphere args={[config.radius * 0.6]}>
        <meshBasicMaterial color="#ffffff" transparent opacity={0.9} />
      </Sphere>
    </group>
  );
}

// Meteor System Manager with Click Targeting
function MeteorSystem() {
  const [meteors, setMeteors] = useState<MeteorData[]>([]);
  const meteorIdRef = useRef(0);
  const { camera, raycaster, mouse } = useThree();

  // Create a new meteor (optionally targeted)
  const createMeteor = (targetPosition?: [number, number, number]) => {
    const sizes: ("small" | "medium" | "large")[] = [
      "small",
      "medium",
      "large",
    ];
    const weights = [0.6, 0.3, 0.1]; // 60% small, 30% medium, 10% large

    // Weighted random selection
    const random = Math.random();
    let size: "small" | "medium" | "large" = "small";
    let cumulative = 0;
    for (let i = 0; i < weights.length; i++) {
      cumulative += weights[i];
      if (random <= cumulative) {
        size = sizes[i];
        break;
      }
    }

    // Random spawn position (top edge of screen, spread across width)
    const startX = (Math.random() - 0.5) * 120; // Wider spawn area
    const startY = 55 + Math.random() * 25; // Higher spawn height
    const startZ = (Math.random() - 0.5) * 100; // Deeper spawn area

    // Velocity based on size (larger meteors fall faster and more dramatically)
    const baseSpeed = size === "large" ? 18 : size === "medium" ? 14 : 10;
    const horizontalDrift = (Math.random() - 0.5) * 6; // More horizontal movement
    const velocity: [number, number, number] = [
      horizontalDrift,
      -baseSpeed - Math.random() * 8, // More variable downward speed
      (Math.random() - 0.5) * 4, // More depth movement
    ];

    // Life duration based on size
    const maxLife = size === "large" ? 8 : size === "medium" ? 6 : 4;

    // Color variations for meteors
    const colors = ["#ff6600", "#ff4400", "#ffaa00", "#ff8800", "#ffffff"];
    const color = colors[Math.floor(Math.random() * colors.length)];

    const newMeteor: MeteorData = {
      id: meteorIdRef.current++,
      size,
      startPosition: [startX, startY, startZ],
      velocity,
      life: maxLife,
      maxLife,
      color,
      targetPosition, // Add target position for click-directed meteors
    };

    setMeteors((prev) => [...prev, newMeteor]);
  };

  // Handle canvas clicks for meteor targeting
  const handleCanvasClick = (event: MouseEvent) => {
    event.preventDefault();

    // Get canvas bounds
    const canvas = event.target as HTMLCanvasElement;
    const rect = canvas.getBoundingClientRect();

    // Convert to normalized device coordinates
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    // Cast ray from camera through mouse position
    raycaster.setFromCamera(mouse, camera);

    // Create target point at medium distance
    const targetPosition = new THREE.Vector3();
    raycaster.ray.at(25, targetPosition);

    // Create 3-5 meteors toward the click target
    const meteorCount = 3 + Math.floor(Math.random() * 3);
    for (let i = 0; i < meteorCount; i++) {
      setTimeout(() => {
        // Add some spread to the target
        const spreadTarget: [number, number, number] = [
          targetPosition.x + (Math.random() - 0.5) * 10,
          targetPosition.y + (Math.random() - 0.5) * 5,
          targetPosition.z + (Math.random() - 0.5) * 10,
        ];
        createMeteor(spreadTarget);
      }, i * 100);
    }
  };

  // Add click listener to canvas
  useEffect(() => {
    const canvas = document.querySelector("canvas");
    if (canvas) {
      canvas.addEventListener("click", handleCanvasClick);
      return () => canvas.removeEventListener("click", handleCanvasClick);
    }
  }, [handleCanvasClick]);

  // Remove completed meteor
  const removeMeteor = (id: number) => {
    setMeteors((prev) => prev.filter((m) => m.id !== id));
  };

  // Meteor spawning interval
  useEffect(() => {
    // Create initial meteors immediately
    setTimeout(() => createMeteor(), 500);
    setTimeout(() => createMeteor(), 2000);
    setTimeout(() => createMeteor(), 4000);

    const spawnInterval = setInterval(() => {
      createMeteor();

      // Sometimes spawn multiple meteors in a "shower"
      if (Math.random() < 0.3) {
        setTimeout(() => createMeteor(), 500);
        if (Math.random() < 0.1) {
          setTimeout(() => createMeteor(), 1000);
        }
      }
    }, 2500); // Base interval of 2.5 seconds

    return () => clearInterval(spawnInterval);
  }, []);

  return (
    <>
      {meteors.map((meteor) => (
        <Meteor key={meteor.id} meteor={meteor} onComplete={removeMeteor} />
      ))}
    </>
  );
}

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
        size={0.04}
        vertexColors
        blending={THREE.AdditiveBlending}
        transparent
        opacity={1.0}
      />
    </points>
  );
}

// Enhanced Scene with Stars and Meteors
function StarfieldScene() {
  return (
    <>
      {/* Interactive Drag Controls - Mouse and Touch */}
      <OrbitControls
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        enableDamping={true}
        dampingFactor={0.05}
        autoRotate={false}
        maxDistance={50}
        minDistance={10}
        maxPolarAngle={Math.PI}
        minPolarAngle={0}
        rotateSpeed={0.5}
        panSpeed={0.5}
        zoomSpeed={0.5}
        touches={{
          ONE: THREE.TOUCH.ROTATE,
          TWO: THREE.TOUCH.DOLLY_PAN,
        }}
      />

      {/* Enhanced Lighting for meteors */}
      <ambientLight intensity={0.4} color="#1a1a2e" />
      <directionalLight
        position={[10, 10, 5]}
        intensity={0.8}
        color="#00d4ff"
        castShadow
      />
      <pointLight position={[-20, 10, 10]} intensity={1.2} color="#ff6b00" />
      <pointLight position={[20, -10, -10]} intensity={1.0} color="#ffffff" />

      {/* Interactive Particles - Moving Stars Only */}
      <InteractiveParticles />

      {/* Meteor System with Click Targeting */}
      <MeteorSystem />

      {/* Environment */}
      <Environment preset="night" />
    </>
  );
}

// Enhanced Background Component with Stars and Meteors
export default function DraggableAIBackground() {
  return (
    <div className="fixed inset-0 w-full h-full" style={{ zIndex: -1 }}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        shadows
        style={{
          background: "#000000",
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
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
