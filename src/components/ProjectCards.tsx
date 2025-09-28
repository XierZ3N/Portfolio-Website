"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
};

export default function ProjectCard({ title, description, tags, link = "#" }: Props) {
  return (
    <motion.article whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 240 }} className="card">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((t) => (
          <span key={t} className="tag">{t}</span>
        ))}
      </div>

      <a href={link} className="text-blue-300 font-medium hover:underline">View Project →</a>
    </motion.article>
  );
}
