"use client";

import { motion } from "framer-motion";

export default function Scene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
        animate={{ x: [0, -35, 0], y: [0, 30, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-20 -left-24 h-80 w-80 rounded-full bg-sky-400/15 blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -25, 0] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}