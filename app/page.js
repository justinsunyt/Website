"use client";

import { motion } from "framer-motion";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Photos from "./components/photos";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-full w-full">
      <motion.div
        className={`h-full w-full bg-[url('../images/Fuji.jpg')] bg-cover bg-center bg-fixed`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        <Header color={false} />
        <motion.div
          className="mt-16 container mx-auto max-w-screen-xl px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-start">
            <div className="transition hover:opacity-90 hover:translate-x-1 cursor-pointer">
              <Link
                href="#about"
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
              >
                About
              </Link>
            </div>
            <div className="transition hover:opacity-90 hover:translate-x-1 cursor-pointer">
              <Link
                href="#projects"
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
              >
                Projects
              </Link>
            </div>
            <div className="transition hover:opacity-90 hover:translate-x-1 cursor-pointer">
              <Link
                href="#photos"
                className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
              >
                Photos
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <About />
      <Projects />
      <Photos />
    </div>
  );
}
