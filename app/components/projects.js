import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNav } from "../context/navProvider";
import Project from "./project";
import Image from "next/image";
import capybara from "../../images/Capybara.jpeg";
import rajiv from "../../images/RajivAI.jpeg";
import osus from "../../images/osus.png";
import focal from "../../images/Focal.jpeg";
import vivi from "../../images/vivi.jpg";
import vex from "../../images/62.png";
import floatr from "../../images/floatr.png";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.3,
  });
  const { setCurrentSection } = useNav();

  useEffect(() => {
    if (isInView) {
      setCurrentSection("projects");
    }
  }, [isInView]);

  return (
    <div
      id="projects"
      className="pt-16 md:pt-24 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white"
      ref={ref}
    >
      <div className="text-6xl md:text-8xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d78dea] to-[#2d84c8]">
          Projects
        </span>{" "}
        💻
      </div>
      <div className="mt-16 flex flex-col gap-y-16">
        <Project
          name="Capybara.AI"
          subtitle="The world's best AI college counselor"
          description="Capybara.AI is the world’s most advanced AI college consultant.
          Say goodbye to GPT hallucinations and private college
          counseling gatekeeping, and generate better long-term recommendations than human counselors at 1% of the
          cost. Powered by GPT-4 and a custom Pinecone embedding pipeline, the chat model analyzes specific needs to
          generate individualized tips and strategies. With a suite of fine-tuned functions combined with vector
          memory, web access, and document upload capabilities, the chat agent remembers user interactions
          to choose the best tool for every interaction."
          technologies={[
            "GPT-4",
            "Next.js",
            "React",
            "Typescript",
            "FastAPI",
            "Python",
            "Supabase",
            "Pinecone",
            "Google Cloud",
          ]}
          links={[
            {
              name: "Coming soon",
              icon: "zap",
              left: "#d78dea",
              right: "#9c8ade",
            },
          ]}
          imgSrc={capybara}
        />
        <Project
          name="RajivAI"
          subtitle="Multi-agent LLM exam generator"
          description="Built at Penn Apps XXIV, RajivAI is a multi-agent model 
          designed to help professors and students generate exams.
          Simply upload course materials such as lecture notes, specify topics, length, and types of questions,
          and the model will generate a full-length exam akin to human-written materials."
          technologies={[
            "GPT-4",
            "Next.js",
            "React",
            "Typescript",
            "FastAPI",
            "Python",
            "Google Cloud",
          ]}
          links={[
            {
              name: "Website",
              url: "https://rajiv.app",
              icon: "zap",
              left: "#d78dea",
              right: "#9c8ade",
            },
            {
              name: "Backend GitHub",
              url: "https://github.com/justinsunyt/RajivAI-platform",
              icon: "github",
              left: "#9c8ade",
              right: "#6387d3",
            },
            {
              name: "Frontend GitHub",
              url: "https://github.com/justinsunyt/RajivAI-web",
              icon: "github",
              left: "#6387d3",
              right: "#2d84c8",
            },
          ]}
          imgSrc={rajiv}
        />
      </div>
      {/* <a
        className="flex items-center mb-12"
        href="https://github.com/benjmnxu/BirdGuess"
      >
        <div className="w-16 h-16 mr-4 aspect-square relative flex justify-center items-center text-6xl">
          <Image
            src="https://i.imgur.com/zy135Dr.png"
            fill={true}
            alt="BirdGuess"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg">
            BirdGuess <span className="text-sm">2023</span>
          </div>
          <div>Guess bird sounds</div>
          <div className="text-sm">Next.js, MySQL, AWS, MongoDB</div>
        </div>
      </a>
      <a
        className="flex items-center mb-12"
        href="https://github.com/justinsunyt/osus"
      >
        <div className="w-16 h-16 mr-4 aspect-square relative">
          <Image
            src={osus}
            fill={true}
            alt="osus"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg">
            osus <span className="text-sm">2022</span>
          </div>
          <div>osu! but sus</div>
          <div className="text-sm">Java, Swing</div>
        </div>
      </a>
      <a className="flex items-center mb-12" href="https://getfocal.app/">
        <div className="w-16 h-16 mr-4 aspect-square relative">
          <Image
            src={focal}
            fill={true}
            alt="Focal"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg">
            Focal <span className="text-sm">2021</span>
          </div>
          <div>Screen time todo tracker</div>
          <div className="text-sm">Flutter, Swift, Kotlin, Firebase</div>
        </div>
      </a>
      <a
        className="flex items-center mb-12"
        href="https://github.com/justinsunyt/vivi"
      >
        <div className="w-16 h-16 mr-4 aspect-square relative">
          <Image
            src={vivi}
            fill={true}
            alt="vivi"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg">
            vivi <span className="text-sm">2021</span>
          </div>
          <div>Social alarm clock</div>
          <div className="text-sm">Flutter, Arduino, Firebase</div>
        </div>
      </a>
      <a
        className="flex items-center mb-12"
        href="https://github.com/justinsunyt/62B_ChangeUp"
      >
        <div className="w-16 h-16 mr-4 aspect-square relative">
          <Image
            src={vex}
            fill={true}
            alt="BuffMobile"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg">
            BuffMobile <span className="text-sm">2021</span>
          </div>
          <div>World champion robot</div>
          <div className="text-sm">C++, PROS</div>
        </div>
      </a>
      <a
        className="flex items-center mb-12"
        href="https://github.com/justinsunyt/floatr"
      >
        <div className="w-16 h-16 mr-4 aspect-square relative">
          <Image
            src={floatr}
            fill={true}
            alt="floatr"
            style={{
              objectFit: "contain",
              overflow: "hidden",
            }}
          />
        </div>
        <div className="flex flex-col">
          <div className="text-lg">
            floatr <span className="text-sm">2020</span>
          </div>
          <div>Student community forum</div>
          <div className="text-sm">React, Firebase</div>
        </div>
      </a> */}
    </div>
  );
}
