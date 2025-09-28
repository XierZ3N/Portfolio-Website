"use client";
import { motion } from "framer-motion";

const projects = [
  { title: "Portfolio Website", desc: "Next.js + TailwindCSS", link: "#" },
  { title: "AI Chatbot", desc: "OpenAI API powered chat interface", link: "#" },
  { title: "E-commerce App", desc: "Full-stack store with payments", link: "#" },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gradient-to-b from-black via-[#0a0014] to-black">
      <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="glass p-6 text-left"
          >
            <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
            <p className="text-gray-300 mb-4">{p.desc}</p>
            <a href={p.link} className="text-violet-400 hover:underline">View →</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
