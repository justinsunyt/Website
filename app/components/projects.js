import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";
import { useNav } from "../context/navProvider";
import Project from "./project";
import Image from "next/image";
import sitdowns from "../../images/SitDowns.jpg";
import capybara from "../../images/Capybara.jpeg";
import rajiv from "../../images/RajivAI.jpeg";
import birdguess from "../../images/BirdGuess.jpeg";
import osus from "../../images/osus.png";
import focal from "../../images/Focal.jpeg";
import vivi from "../../images/vivi.jpg";
import vex from "../../images/62.png";
import floatr from "../../images/floatr.png";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: 0.2,
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
      <div className="mt-8 flex flex-col">
        <Project
          name="SitDowns"
          subtitle="Mixtral-powered Chrome extension, Penn Gen AI Hackathon Nomic AI Prize"
          description="Built at the first-ever Penn Generative AI Hackathon, 
          SitDowns is a Chrome extension that replaces exhausting team standups
          with daily summaries of you and your team's web-browsing activites. 
          When enabled, the Plasmo extension scrapes the websites you visit and queries a Mixtral model served on Baseten,
          summarizing each page and synthesizing your daily rundown to upload to Supabase. User summaries are then sorted through
          Nomic embedding vector similarity search to display the most relevant teammate activites in list and graph forms."
          technologies={[
            "Mixtral 8x7b",
            "Baseten",
            "Nomic Embeddings",
            "Plasmo",
            "React",
            "Typescript",
            "FastAPI",
            "Python",
            "Supabase",
          ]}
          links={[
            {
              name: "Video demo",
              url: "https://www.youtube.com/watch?v=38oEsslcxRI",
              icon: "youtube",
              left: "#d78dea",
              right: "#9c8ade",
            },
          ]}
          imgSrc={sitdowns}
        />
        <Project
          name="Capybara.AI"
          subtitle="The world's best AI college counselor"
          description="Capybara.AI is the world’s most advanced AI college consultant.
          Say goodbye to GPT hallucinations and private college
          counseling gatekeeping, and generate better long-term recommendations than human counselors at 1% of the
          cost. Powered by a custom GPT-4 agent pipeline and Pinecone embeddings, the chat model analyzes specific needs to
          generate individualized tips and strategies. With access to vector
          memory, web access, and document upload capabilities, the chat agent remembers user interactions
          stored in Supabase and chooses the best tool for every interaction."
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
          name="Focal"
          subtitle="Screen time productivity tracker, 100K downloads"
          description="Focal is a comprehensive productivity solution built with Flutter that is available on Android and iOS.
          Start your day by adding tasks synced across all devices through Firebase. 
          Instead of checking a box to complete a task, users will enter Focus Mode 
          to commit to their work and track time spent on each task with either a traditional stopwatch
          or a smart Pomodoro timer. In Focus Mode, if the user gets distracted and uses another app,
          Focal's native mobile API integrations track what you are doing and notifies you.
          Once tasks have been completed, statistics provide daily reports with data from each completed task and monthly productivity trends.
          "
          technologies={["Flutter", "Swift", "Kotlin", "Firebase"]}
          links={[
            {
              name: "Website",
              url: "https://getfocal.app",
              icon: "zap",
              left: "#d78dea",
              right: "#9c8ade",
            },
            {
              name: "Google Play",
              url: "https://play.google.com/store/apps/details?id=technology.focal.focal",
              icon: "smartphone",
              left: "#9c8ade",
              right: "#6387d3",
            },
          ]}
          imgSrc={focal}
        />

        <Project
          name="RajivAI"
          subtitle="Multi-agent LLM exam generator"
          description="Built at Penn Apps XXIV, RajivAI is a multi-agent model 
          designed to help professors and students generate exams.
          Simply upload course materials such as lecture notes, specify topics, length, and types of questions,
          and the model will generate a full-length exam akin to human-written materials.
          A GPT-4 professor agent chunks the source material and delegates GPT-3.5 TA agents to summarize each part.
          With the whole course summarized, the professor then delegates TAs to collaborate
          to recursively cross-reference questions and answers to create a valid exam."
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
      {/* <Project
          name="BirdGuess"
          subtitle="Guess bird sounds and learn world facts"
          description=""
          technologies={["Next.js", "MySQL", "AWS", "MongoDB", "Auth0"]}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/benjmnxu/BirdGuess",
              icon: "github",
              left: "#d78dea",
              right: "#9c8ade",
            },
          ]}
          imgSrc={birdguess}
        />
        <Project
          name="osus"
          subtitle="osu! but sus"
          description=""
          technologies={["Java", "Swing"]}
          links={[
            {
              name: "GitHub",
              url: "https://github.com/justinsunyt/osus",
              icon: "github",
              left: "#d78dea",
              right: "#9c8ade",
            },
          ]}
          imgSrc={osus}
        />
      </div> */}
      {/* <a
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
