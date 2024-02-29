import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNav } from "../context/navProvider";
import Image from "next/image";
import Link from "next/link";
import justin from "../../images/Justin.jpg";
import LinkBox from "./linkBox";
import { useWindowHeight } from "@react-hook/window-size";

export default function About() {
  const ref = useRef(null);
  const width = useWindowHeight();
  const isInView = useInView(ref, {
    amount: width < 768 ? 0.3 : 0.7,
  });
  const { setCurrentSection } = useNav();

  useEffect(() => {
    if (isInView) {
      setCurrentSection("about");
    }
  }, [isInView]);

  return (
    <div
      id="about"
      className="pt-12 md:pt-24 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white"
      ref={ref}
    >
      <div className="text-6xl md:text-8xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d78dea] to-[#2d84c8]">
          About
        </span>{" "}
        👋
      </div>
      <div className="mt-8 flex flex-col-reverse md:flex-row items-center">
        <div className="flex flex-col">
          <div className="text-xl text-gray-400">CS + Wharton @ UPenn M&T</div>
          <div className="mt-4">
            Yo! I'm Justin, a student at University of Pennsylvania's Jerome
            Fisher M&T program pursuing a dual-degree in CS and
            Entrepreneurship. I grew up in Shanghai and LA and am now primarily
            active in Philly.
          </div>
          <div className="mt-4">
            I love building on the frontier of technology and learning about the
            latest advancements, and have been doing so through full-stack
            engineering and machine learning. I built{" "}
            <a className="text-secondary">SitDowns</a> (Mixtral-powered Chrome
            extension, Penn Gen AI Hackathon Nomic AI Prize),{" "}
            <a className="text-secondary">RajivAI</a> (multi-agent exam
            generator, PennApps), <a className="text-secondary">Focal</a>{" "}
            (screen time productivity tracker, 100K downloads), and Capybara.AI
            (the world's best AI college counselor, coming soon).
          </div>
          <div className="mt-4">
            At school, I'm developing Penn's official student apps with
            thousands of daily users at{" "}
            <a className="text-secondary">Penn Labs</a>, building electric race
            cars at <a className="text-secondary">Penn Electric Racing</a>, and
            leading Penn's biggest gaming community at{" "}
            <a className="text-secondary" href="https://upennesports.org">
              Penn Esports
            </a>
            .
          </div>
          <div className="mt-4">
            In my free time, I enjoy taking{" "}
            <Link className="text-secondary" href="#photos">
              photos
            </Link>{" "}
            with my digital and film cameras, playing competitive Valorant with
            the Penn Retirement Home, going to the gym, watching anime, and
            listening to <a className="text-secondary">banger music</a> 🤩
          </div>
          <div className="mt-8 flex gap-x-2 gap-y-2 flex-wrap">
            <LinkBox
              name="LinkedIn"
              url="https://linkedin.com/in/justinsunyt"
              icon="linkedin"
              left="#d78dea"
              right="#9c8ade"
            />
            <LinkBox
              name="GitHub"
              url="https://github.com/justinsunyt"
              icon="github"
              left="#9c8ade"
              right="#6387d3"
            />
            <LinkBox
              name="Resume"
              url=""
              icon="file"
              left="#6387d3"
              right="#2d84c8"
            />
          </div>
        </div>
        <div className="w-full h-full mb-8 ml-0 md:mb-0 md:ml-8 aspect-square relative">
          <Image
            src={justin}
            fill={true}
            alt="Capybara.AI"
            style={{
              objectFit: "contain",
              overflow: "hidden",
              borderRadius: "2rem",
            }}
          />
        </div>
      </div>
    </div>
  );
}
