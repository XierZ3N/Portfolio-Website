// src/app/page.tsx
"use client";

import { motion } from "framer-motion";
import  PageWrapper from "@/components/PageWrapper";
import TechScene from "@/components/TechScene";
import Link from "next/link";

export default function HomePage() {
  return (
    <PageWrapper>
      <main className="relative min-h-screen flex items-center justify-between px-10 bg-gradient-to-br from-black via-[#0a0014] to-violet-900 overflow-hidden">
        {/* Left Section - Hero Text */}
        <div className="relative z-10 max-w-2xl">
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-7xl font-extrabold text-white leading-tight drop-shadow-lg"
          >
            Hi, I’m <span className="text-violet-400">Shivansh</span>  
            <br /> 
          </motion.h1>

          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="mt-6 text-lg md:text-xl text-gray-300 max-w-xl"
          >
            A guy who is passionate about creating interactive, sleek, and scalable apps powered by the latest technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-8 flex gap-6"
          >
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-violet-500 hover:bg-violet-600 text-white font-semibold shadow-lg transition-all duration-300"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-xl bg-transparent border border-violet-400 hover:bg-violet-500/20 text-violet-300 font-semibold transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

        {/* Right Section - 3D Scene */}
        <div className="hidden md:block w-[500px] h-[500px]">
          <TechScene />
        </div>

        {/* Background Glow Effect */}
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-violet-700/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-200px] left-[-200px] w-[500px] h-[500px] bg-indigo-900/30 rounded-full blur-3xl animate-pulse"></div>
      </main>
    </PageWrapper>
  );
}
