"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6 flex flex-col justify-center items-start">
      <div className="mb-2">Justin Sun 孙盈廷</div>
      <div className="mb-2">CS + Wharton @ UPenn M&T</div>
      <div className="mb-2">NYC, Philly, LA, Shanghai</div>
      <div className="mb-2">
        <a href="https://twitter.com/justinsunyt">Twitter</a> |{" "}
        <a href="https://linkedin.com/in/justinsunyt/">LinkedIn</a> |{" "}
        <a href="https://github.com/justinsunyt">GitHub</a> |{" "}
        <a href="mailto:justinsunyt@gmail.com">Email</a>
      </div>
      <div className="mb-2">
        <Link href="/experiences">Experiences</Link> |{" "}
        <Link href="/projects">Projects</Link> |{" "}
        <Link href="/hobbies">Hobbies</Link>
      </div>
      <div>
        <button onClick={() => setTheme(theme == "dark" ? "light" : "dark")}>
          {theme == "light" ? "Light mode 😇" : "Dark mode 😈"}
        </button>
      </div>
    </div>
  );
}
