import { Twitter, Linkedin, Github, Mail } from "feather-icons-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <motion.div
      className="pt-12 container mx-auto max-w-screen-xl px-6 flex flex-col md:flex-row justify-between items-start text-xl absolute left-0 right-0 mb-2 md:mb-0 text-primary"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div>Justin Sun 孙盈廷</div>
      <div className="md:absolute md:transform md:-translate-x-1/2 md:left-1/2">
        <Link href="#about">About</Link> |{" "}
        <Link href="#projects">Projects</Link> |{" "}
        <Link href="#photos">Photos</Link>
      </div>
      <div className="mt-2 md:mt-0 flex items-center space-x-8">
        <a
          href="https://linkedin.com/in/justinsunyt/"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://github.com/justinsunyt"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Github size={20} />
        </a>
        <a
          href="https://twitter.com/justinsunyt"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Twitter size={20} />
        </a>
        <a
          href="mailto:justinsunyt@gmail.com"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Mail size={22} />
        </a>
      </div>
    </motion.div>
  );
}
