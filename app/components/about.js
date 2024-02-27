import Image from "next/image";
import justin from "../../images/Justin.jpg";
import LinkBox from "./linkBox";

export default function About() {
  return (
    <div
      id="about"
      className="pt-24 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white"
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
            engineering and machine learning. I built <a>SitDowns</a>{" "}
            (Mixtral-powered Chrome extension, Penn Gen AI Hackathon Nomic AI
            Prize), <a>RajivAI</a>
            (multi-agent exam generator, PennApps), <a>Focal</a> (screen time
            productivity tracker, 100K downloads), and Capybara.AI (the world's
            best AI college counselor, coming soon).
          </div>
          <div className="mt-4">
            At school, I'm developing Penn's official student apps with
            thousands of daily users at PennMobile and Office Hours Queue,
            building electric race cars at Penn Electric Racing, and leading
            Penn's biggest gaming community at Penn Esports.
          </div>
          <div className="mt-4">
            In my free time, I enjoy taking photos with my digital and film
            cameras, playing competitive Valorant with the Penn Retirement Home,
            going to the gym, watching anime, and listening to banger music 🤩
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
