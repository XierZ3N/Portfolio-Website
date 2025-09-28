"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-violet-500/10">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-16">
        
        {/* Left - Logo / Name */}
        <Link
          href="/"
          className="text-2xl font-bold text-violet-400 tracking-wide hover:text-violet-300 transition"
        >
          Shivansh Raj Singh
        </Link>

        {/* Right - Links */}
        <div className="flex space-x-8 text-gray-300 text-lg">
          <Link href="/about" className="hover:text-violet-400 transition">
            About
          </Link>
          <Link href="/projects" className="hover:text-violet-400 transition">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-violet-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
