// src/components/ProjectCard.tsx
import HoloBadge from "./HoloBadge";
import Image from "next/image";

type ProjectCardProps = {
  title: string;
  logo?: string; // public path /logos/xxx.svg
  color?: string;
  tags?: string[];
  description?: string;
};

export default function ProjectCard({
  title,
  logo = "/logos/react.svg",
  color = "#7c3af5",
  tags = [],
  description = "",
}: ProjectCardProps) {
  const glowStyle: React.CSSProperties = {
    boxShadow: `0 10px 40px ${color}30, 0 2px 10px rgba(0,0,0,0.6)`,
    borderRadius: "16px",
    padding: "2px",
  };

  return (
    <article className="card-glow" style={glowStyle}>
      <div className="glass-card flex items-start gap-6">
        <HoloBadge logo={logo} color={color} />
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-sm text-white/70 mb-4">{description}</p>

          <div className="flex flex-wrap gap-2">
            {tags.map((t, i) => (
              <span key={i} className="project-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
