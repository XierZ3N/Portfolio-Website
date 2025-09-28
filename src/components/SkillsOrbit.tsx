"use client"
import { FaReact, FaPython, FaNodeJs } from "react-icons/fa"
import { SiNextdotjs, SiTailwindcss, SiMongodb } from "react-icons/si"

export default function Skills() {
  const skills = [
    { name: "React", icon: <FaReact size={28} className="text-white" />, color: "from-sky-500 to-blue-700" },
    { name: "Python", icon: <FaPython size={28} className="text-white" />, color: "from-yellow-400 to-orange-500" },
    { name: "Node.js", icon: <FaNodeJs size={28} className="text-white" />, color: "from-green-400 to-emerald-600" },
    { name: "Next.js", icon: <SiNextdotjs size={28} className="text-white" />, color: "from-gray-700 to-black" },
    { name: "Tailwind", icon: <SiTailwindcss size={28} className="text-white" />, color: "from-cyan-400 to-blue-600" },
    { name: "MongoDB", icon: <SiMongodb size={28} className="text-white" />, color: "from-green-500 to-green-800" },
  ]

  return (
    <section id="skills" className="py-20 flex flex-col items-center text-center">
      <h2 className="text-4xl font-bold mb-12">My Skills</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
        {skills.map((skill, i) => (
          <div
            key={i}
            className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${skill.color} flex items-center justify-center shadow-[0_0_30px_rgba(0,0,0,0.6)] hover:scale-110 transition-transform`}
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-lg"></div>
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  )
}
