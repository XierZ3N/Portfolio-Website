"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="section container flex flex-col items-center text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl font-bold text-light mb-6"
      >
        Hi, I’m <span className="text-primary">Shivansh</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg text-slate-300 max-w-2xl mb-8"
      >
        A passionate developer crafting modern, sleek, and responsive web experiences.
      </motion.p>

      <div className="flex gap-4">
        <a href="#projects" className="btn btn-primary">
          View Projects
        </a>
        <a href="#contact" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </section>
  );
}
