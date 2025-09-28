"use client";
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Skills() {
  const skills = [
    { icon: <FaReact size={28} />, name: "React", gradient: "from-sky-400 to-blue-700" },
    { icon: <FaPython size={28} />, name: "Python", gradient: "from-yellow-400 to-orange-500" },
    { icon: <FaNodeJs size={28} />, name: "Node.js", gradient: "from-green-400 to-emerald-600" },
    { icon: <SiNextdotjs size={28} />, name: "Next.js", gradient: "from-gray-400 to-gray-200" },
    { icon: <SiTailwindcss size={28} />, name: "Tailwind", gradient: "from-cyan-400 to-blue-600" },
    { icon: <SiMongodb size={28} />, name: "MongoDB", gradient: "from-green-500 to-green-800" },
  ];

  return (
    <section id="skills" className="py-24 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-5xl mx-auto">
        {skills.map((s, idx) => (
          <div
            key={idx}
            className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${s.gradient} flex items-center justify-center 
                       shadow-xl hover:scale-110 transition transform`}
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-lg"></div>
            <div className="relative z-10 text-white">
              {s.icon}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
