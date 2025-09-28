// src/app/layout.tsx
"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#0d0d0d] text-white flex flex-col min-h-screen`}
      >
        {/* Navbar always on top */}
        <Navbar />

        {/* Main content expands to push footer down */}
        <AnimatePresence mode="wait">
          <main key={pathname} className="flex-grow">
            {children}
          </main>
        </AnimatePresence>

        {/* Footer stays at bottom */}
        <Footer />
      </body>
    </html>
  );
}
