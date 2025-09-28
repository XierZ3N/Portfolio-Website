// src/components/ProjectsSection.tsx
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Portfolio Website",
      logo: "/logos/react.svg",
      color: "#7c3af5",
      description: "A futuristic personal portfolio with 3D elements and animations.",
      tags: ["Next.js", "React", "Three.js", "Framer Motion"],
    },
    {
      title: "AI Chatbot",
      logo: "/logos/python.svg",
      color: "#06b6d4",
      description: "Conversational assistant powered by GPT and FastAPI.",
      tags: ["Python", "FastAPI", "OpenAI"],
    },
    {
      title: "E-Commerce Platform",
      logo: "/logos/nodedotjs.svg",
      color: "#16a34a",
      description: "Scalable full-stack store with checkout and admin dashboard.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
    },
    {
      title: "UI Component Library",
      logo: "/logos/tailwindcss.svg",
      color: "#38bdf8",
      description: "Design system & component library with Tailwind v4.",
      tags: ["TailwindCSS", "React", "Storybook"],
    },
    {
      title: "Data Tools",
      logo: "/logos/javascript.svg",
      color: "#f59e0b",
      description: "Lightweight JS utilities and CLI helpers.",
      tags: ["JavaScript", "Node", "CLI"],
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-white mb-10">Projects</h2>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((p, i) => (
          <ProjectCard
            key={i}
            title={p.title}
            logo={p.logo}
            color={p.color}
            description={p.description}
            tags={p.tags}
          />
        ))}
      </div>
    </section>
  );
}
