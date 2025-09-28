export default function SkillCard({ name, color }: { name: string; color: string }) {
    return (
      <div className={`rounded-xl p-6 bg-gradient-to-br ${color} text-white font-semibold shadow-lg glass`}>
        {name}
      </div>
    );
  }
  