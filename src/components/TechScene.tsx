"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef } from "react";

function HologramCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();

      // Rotate cube slowly
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;

      // Subtle scale flicker (edges shimmer effect)
      const scale = 1 + 0.02 * Math.sin(time * 5);
      meshRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        color="#8b5cf6"
        transparent
        opacity={0.35}
        emissive="#a78bfa"
        emissiveIntensity={0.8}
        wireframe
      />
    </mesh>
  );
}

export default function TechScene() {
  return (
    <div className="w-full h-[600px]">
      <Canvas camera={{ position: [4, 4, 6], fov: 50 }}>
        {/* Lights */}
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={2} color="#bb86fc" />

        {/* Violet Hologram Cube */}
        <HologramCube />
      </Canvas>
    </div>
  );
}
