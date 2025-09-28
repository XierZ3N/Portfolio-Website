"use client";

import { motion } from "framer-motion";
import { Mail, Github, Instagram } from "lucide-react";

const contactInfo = [
  {
    label: "Email",
    value: "xier.z3n@gmail.com",
    href: "mailto:xier.z3n@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "XierZ3N",
    href: "https://github.com/XierZ3N",
    icon: Github,
  },
  {
    label: "Instagram",
    value: "@shivansh.raj.singh",
    href: "https://instagram.com/shivansh.raj.singh",
    icon: Instagram,
  },
];

export default function ContactPage() {
  return (
    <section className="min-h-screen py-20 px-6 bg-black text-white flex flex-col items-center justify-center">
      {/* Heading */}
      <div className="max-w-3xl w-full text-center mb-12">
        <h2 className="text-4xl font-bold text-violet-500 mb-4 drop-shadow-[0_0_12px_rgba(139,92,246,0.7)]">
          Contact Me 📩
        </h2>
        <p className="text-gray-400 text-lg">
          Let’s connect — whether it’s about projects, collaborations, or just a chat.
        </p>
      </div>

      {/* Contact Cards */}
      <div className="w-full max-w-2xl flex flex-col gap-6">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group flex items-center gap-4 p-6 rounded-2xl border border-violet-500/40 bg-black/40 backdrop-blur-xl shadow-[0_0_20px_rgba(139,92,246,0.2)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] transition-transform duration-200 ease-out"
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 blur-2xl transition duration-200"></div>

            {/* Icon */}
            <item.icon className="w-6 h-6 text-violet-400 relative z-10" />

            {/* Content */}
            <div className="text-left relative z-10">
              <p className="text-sm text-gray-400">{item.label}:</p>
              <p className="text-lg font-semibold text-white group-hover:text-violet-400 transition-colors duration-150">
                {item.value}
              </p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
