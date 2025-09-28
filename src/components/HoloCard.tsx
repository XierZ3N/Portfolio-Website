// src/components/HoloCard.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HoloCard() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    const { innerWidth, innerHeight } = window;
    const x = ((e.clientY / innerHeight) - 0.5) * 30;
    const y = ((e.clientX / innerWidth) - 0.5) * 30;
    setRotate({ x, y });
  };

  return (
    <div onMouseMove={handleMouseMove} className="h-[400px] flex items-center">
      <motion.div
        animate={{ rotateX: rotate.x, rotateY: -rotate.y }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="w-[300px] h-[400px] rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-[0_0_30px_rgba(139,92,246,0.6)]"
      >
        <div className="p-6 text-center">
          <h2 className="text-2xl font-bold text-white">Skill Highlight</h2>
          <p className="text-white/70 mt-4">
            Hover to see the futuristic hologram effect.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
