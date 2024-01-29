import Image from "next/image";
import Header from "../components/header";
import capybara from "../../images/Capybara.png";
import osus from "../../images/osus.png";
import focal from "../../images/Focal.jpeg";
import vivi from "../../images/vivi.jpg";
import vex from "../../images/62.png";
import floatr from "../../images/floatr.png";

export default function Projects() {
  return (
    <div className="h-full w-full">
      <Header white={true} />
      <div className="pt-12 pb-8 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white">
        <a className="flex items-center mb-12">
          <div className="w-16 h-16 mr-4 aspect-square relative">
            <Image
              src={capybara}
              fill={true}
              alt="Capybara.AI"
              style={{
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">
              Capybara.AI <span className="text-sm">2023</span>
            </div>
            <div>AI college counselor</div>
            <div className="text-sm">GPT-4, Next.js, FastAPI, Pinecone</div>
          </div>
        </a>
        <a
          className="flex items-center mb-12"
          href="https://github.com/justinsunyt/rajivai-platform"
        >
          <div className="w-16 h-16 mr-4 aspect-square relative flex justify-center items-center text-5xl">
            👨‍🏫
          </div>
          <div className="flex flex-col">
            <div className="text-lg">
              RajivAI <span className="text-sm">2023</span>
            </div>
            <div>Multi-agent LLM exam generator</div>
            <div className="text-sm">GPT-4, Next.js, FastAPI</div>
          </div>
        </a>
        <a
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
        </a>
      </div>
    </div>
  );
}
