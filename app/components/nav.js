"use client";

import { motion } from "framer-motion";
import NavButton from "./navButton";

export default function Nav() {
  return (
    <motion.div
      className="fixed bottom-6 md:bottom-full md:top-6 transform -translate-x-1/2 left-1/2 text-white text-sm md:text-lg z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      duration={{ duration: 500 }}
    >
      <div className="rounded-full flex space-x-4 border border-transparent bg-[linear-gradient(to_right,#d78dea,#2d84c8,#d78dea)] bg-[length:200%_auto] animate-gradient">
        <motion.div
          className="p-1 rounded-full w-full h-full flex items-center gap-x-6 bg-black"
          layout
        >
          <NavButton title="Home" />
          <NavButton title="About" />
          <NavButton title="Projects" />
          <NavButton title="Photos" />
        </motion.div>
      </div>
    </motion.div>
  );
}
