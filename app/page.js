"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Header from "./components/header";
import Nav from "./components/nav";
import About from "./components/about";
import Projects from "./components/projects";
import Photos from "./components/photos";
import Link from "next/link";
import Image from "next/image";
import fuji from "../images/Fuji.jpg";
import fujiTrans from "../images/Fuji_transparent.png";

export default function Home() {
  let [fade, setFade] = useState(false);
  return (
    <div className="h-full w-full">
      <Nav />
      <motion.div
        className="h-full w-full overflow-hidden filter blur-[0px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.15 }}
      >
        <div
          className={`${
            fade ? "opacity-90" : "opacity-100"
          } h-screen w-full absolute transition duration-500 ease-out`}
        >
          <Image src={fuji} layout={"fill"} objectFit={"cover"} />
        </div>
        <motion.div
          className={`${
            fade && "-translate-y-[30vh]"
          } mt-[60vh] absolute left-0 right-0 flex justify-center text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.primary-alt),theme(colors.primary),theme(colors.primary-alt))] bg-[length:200%_auto] animate-gradient transition duration-500 ease-out`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Justin Sun
        </motion.div>
        <div
          className={`${
            fade && "filter drop-shadow-[0rem_0rem_4rem_#ffffffff]"
          } h-screen w-full absolute transition duration-500 ease-out`}
        >
          <Image src={fujiTrans} layout={"fill"} objectFit={"cover"} />
        </div>
        <Header color={false} />

        <motion.div
          className="mt-[calc(30vh-3rem)] md:mt-[calc(30vh-2rem)] absolute left-0 right-0 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            href="#about"
            onMouseEnter={() => setFade(true)}
            onMouseLeave={() => setFade(false)}
            className={`${
              fade ? "opacity-0" : "opacity-100"
            } px-64 py-12 text-6xl font-medium text-primary transition duration-500 ease-out animate-wiggle`}
          >
            👋
          </Link>
        </motion.div>
      </motion.div>
      <About />
      <Projects />
      <Photos />
    </div>
  );
}
