"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Senpai Sanctum 🛒",
    description:
      "Anime-inspired e-commerce store that grew into a business making over ₹50k+ in sales.",
    href: "/projects/senpai-sanctum",
  },
  {
    title: "Face Recognition System 👤",
    description:
      "AI-powered face recognition app with real-time identification and attendance tracking.",
    href: "/projects/face-recognition",
  },
  {
    title: "Portfolio Website 💻",
    description:
      "The very site you’re browsing right now — built with Next.js, Tailwind, and Framer Motion.",
    href: "/projects/portfolio-website",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-12 flex flex-col items-center">
      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
        My Projects 🚀
      </h2>
      <p className="text-gray-400 text-center mb-10 max-w-2xl">
        A few of the things I’ve built and learned from.
      </p>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(168,85,247,0.6)",
            }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="bg-black border border-purple-600 rounded-2xl p-6 shadow-lg hover:shadow-purple-500/50"
          >
            <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>

            {/* Read More Button */}
            <Link href={project.href}>
              <button className="px-4 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                Read More →
              </button>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
