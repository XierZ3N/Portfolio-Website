// src/components/PageWrapper.tsx
"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageWrapperProps {
  children: ReactNode;
}

export default function PageWrapper({ children }: PageWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // start slightly below with fade out
      animate={{ opacity: 1, y: 0 }} // animate in
      exit={{ opacity: 0, y: -20 }} // exit upwards with fade
      transition={{ duration: 0.6, ease: "easeInOut" }} // smooth timing
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
}
