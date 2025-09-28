"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function SenpaiSanctumPage() {
  const [revenue, setRevenue] = useState(0);
  const [orders, setOrders] = useState(0);
  const [visitors, setVisitors] = useState(0);

  // Animate counters
  useEffect(() => {
    let revInterval = setInterval(
      () => setRevenue((prev) => (prev < 50000 ? prev + 1000 : 50000)),
      40
    );
    let ordInterval = setInterval(
      () => setOrders((prev) => (prev < 200 ? prev + 5 : 200)),
      40
    );
    let visInterval = setInterval(
      () => setVisitors((prev) => (prev < 5000 ? prev + 100 : 5000)),
      30
    );

    return () => {
      clearInterval(revInterval);
      clearInterval(ordInterval);
      clearInterval(visInterval);
    };
  }, []);

  return (
    <section className="min-h-screen py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-violet-500 mb-2">
          Senpai Sanctum 🛒
        </h1>
        <p className="text-gray-400 mb-8">
          Anime-inspired e-commerce store — Built with my best friend
        </p>

        {/* Summary */}
        <div className="p-6 rounded-xl bg-black/40 border border-violet-500/40 shadow-[0_0_20px_rgba(239,68,68,0.3)] mb-12">
          <p>
            <span className="font-bold text-white">Summary:</span> Senpai
            Sanctum was an anime-themed online store I co-founded with my best
            friend. We built it from scratch, marketed it to anime fans, and
            grew it into a small business that generated over{" "}
            <span className="font-bold text-violet-400">₹50,000 in sales</span>{" "}
            before legal issues forced us to shut it down. This project taught
            me both technical skills and real-world entrepreneurship.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="p-6 rounded-xl border border-violet-500/50 bg-black/40 text-center"
          >
            <p className="text-3xl font-bold text-violet-400">
              ₹{revenue.toLocaleString()}+
            </p>
            <p className="text-gray-400">Revenue</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="p-6 rounded-xl border border-violet-500/50 bg-black/40 text-center"
          >
            <p className="text-3xl font-bold text-violet-400">{orders}+</p>
            <p className="text-gray-400">Orders Fulfilled</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, rotateX: 4, rotateY: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="p-6 rounded-xl border border-violet-500/50 bg-black/40 text-center"
          >
            <p className="text-3xl font-bold text-violet-400">{visitors}+</p>
            <p className="text-gray-400">Visitors</p>
          </motion.div>
        </div>

        {/* What I Did / Learned */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">What I Did 🚀</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Built the store website and handled product listings.</li>
            <li>Managed payments, checkout flow, and order tracking system.</li>
            <li>
              Worked with my best friend to source anime-inspired products.
            </li>
            <li>Promoted via Instagram & anime communities to attract customers.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            What I Learned 📚
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>How to build and scale an e-commerce site from scratch.</li>
            <li>Handling real customers, orders, and support.</li>
            <li>Business strategy: pricing, marketing, and scaling.</li>
            <li>
              Legal awareness: why some niches can run into trademark issues.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
