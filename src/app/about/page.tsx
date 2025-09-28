"use client";

import { motion } from "framer-motion";

const aboutCards = [
  {
    title: "Who Am I?",
    description:
      "I’m a passionate developer who loves building cool projects and exploring new technologies.",
  },
  {
    title: "What I Do",
    description:
      "I work on full-stack development, machine learning experiments, and modern UI/UX projects.",
  },
  {
    title: "Future Goals",
    description:
      "Always looking forward to learning, collaborating, and contributing to open-source communities.",
  },
];

export default function AboutPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-black text-white flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="max-w-3xl w-full text-center mb-12">
        <h2 className="text-4xl font-bold text-violet-500 mb-4 drop-shadow-[0_0_12px_rgba(139,92,246,0.7)]">
          About Me 💡
        </h2>
        <p className="text-gray-400 text-lg">
          Here’s a little bit about me, my work, and where I’m heading.
        </p>
      </div>

      {/* Cards */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6">
        {aboutCards.map((card, index) => (
          <motion.div
            key={index}
            className="relative group p-6 rounded-2xl border border-violet-500/40 bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-transform duration-200 ease-out"
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-200"></div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-violet-400 transition-colors duration-150">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-400 text-sm">{card.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
