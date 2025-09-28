"use client";

export default function PortfolioWebsitePage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 pt-28 pb-12 flex flex-col items-center">
      {/* Container */}
      <div className="w-full max-w-5xl">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-purple-400 drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">
          Portfolio Website 💻
        </h1>
        <p className="text-gray-400 mb-6 text-lg">
          The very site you’re browsing right now — built with Next.js, Tailwind,
          and Framer Motion.
        </p>

        {/* Summary */}
        <div className="bg-black border border-purple-600 rounded-xl p-5 mb-8 shadow-lg shadow-purple-500/30">
          <p>
            <span className="font-semibold text-purple-400">Summary:</span> This
            portfolio was designed and developed to showcase my projects,
            experiments, and learnings. It’s fully responsive, performance
            optimized, and leverages modern frameworks like{" "}
            <span className="text-purple-300 font-medium">Next.js 14</span>,{" "}
            <span className="text-purple-300 font-medium">Tailwind CSS</span>,
            and{" "}
            <span className="text-purple-300 font-medium">Framer Motion</span>{" "}
            for smooth animations. It also acts as my personal brand &
            playground for testing new design and development ideas.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="border border-purple-600 rounded-xl p-6 text-center shadow-lg shadow-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-400">100+</h3>
            <p className="text-gray-400">Commits</p>
          </div>
          <div className="border border-purple-600 rounded-xl p-6 text-center shadow-lg shadow-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-400">10+</h3>
            <p className="text-gray-400">Pages Built</p>
          </div>
          <div className="border border-purple-600 rounded-xl p-6 text-center shadow-lg shadow-purple-500/30">
            <h3 className="text-2xl font-bold text-purple-400">5+</h3>
            <p className="text-gray-400">Technologies Used</p>
          </div>
        </div>

        {/* What I Did */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">
            What I Did 🚀
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Designed and built a modern, responsive portfolio from scratch</li>
            <li>Implemented smooth page transitions and animations</li>
            <li>Optimized for performance and accessibility</li>
            <li>Deployed with Next.js App Router for scalability</li>
          </ul>
        </section>

        {/* What I Learned */}
        <section>
          <h2 className="text-2xl font-semibold mb-3">
            What I Learned 📚
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Practical experience with Next.js App Router</li>
            <li>Using TailwindCSS for rapid UI development</li>
            <li>Animating with Framer Motion for a premium feel</li>
            <li>Deploying & maintaining a live production portfolio</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
