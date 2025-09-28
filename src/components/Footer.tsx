"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-violet-500/10 bg-black/80 backdrop-blur-md py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left side - name & tagline */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-white font-semibold">Shivansh Raj Singh</h3>
          <p className="text-gray-400 text-sm">Crafting futuristic web apps ✨</p>
        </div>

        {/* Middle - nav links + copyright aligned */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex space-x-6 text-gray-300 mb-2">
            <Link href="/about" className="hover:text-violet-400">
              About
            </Link>
            <Link href="/projects" className="hover:text-violet-400">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-violet-400">
              Contact
            </Link>
          </div>
          <p className="text-gray-500 text-sm">
            © 2025 Shivansh Raj Singh. All rights reserved.
          </p>
        </div>

        {/* Right side - socials */}
        <div className="flex space-x-6 text-gray-400 text-xl mt-4 md:mt-0">
          <a
            href="https://github.com/ShivanshSinghh"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-violet-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:Dantes.help.in@gmail.com"
            className="hover:text-violet-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
