"use client";

import { useState, useEffect } from "react";

import { motion } from "framer-motion";
import Header from "./components/header";
import About from "./components/about";
import Projects from "./components/projects";
import Photos from "./components/photos";

export default function Home() {
  const [y, setY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newY = Math.max(0, (window.scrollY / window.innerHeight) * 500);
      setY(newY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          style={{ y }}
        >
          <div className="flex flex-col items-start">
            <div
              onClick={() => {
                const projects = document.getElementById("about");
                projects?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light transition hover:opacity-90 hover:translate-x-1 cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => {
                const projects = document.getElementById("projects");
                projects?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light transition hover:opacity-90 hover:translate-x-1 cursor-pointer"
            >
              Projects
            </div>
            <div
              onClick={() => {
                const projects = document.getElementById("photos");
                projects?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light transition hover:opacity-90 hover:translate-x-1 cursor-pointer"
            >
              Photos
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
