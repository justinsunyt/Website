"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Photos from "./components/photos";
import Connect from "./components/connect";

export default function Page() {
  return (
    <div className="h-full w-full">
      <Home />
      <About />
      <Projects />
      <Photos />
      <Connect />
    </div>
  );
}
