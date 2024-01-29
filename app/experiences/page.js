import Link from "next/link";
import Image from "next/image";
import Header from "../components/header";
import penn from "../../images/Penn.png";
import labs from "../../images/Labs.svg";
import per from "../../images/PER.png";
import focal from "../../images/Focal.jpeg";
import vex from "../../images/62.png";

export default function Experiences() {
  return (
    <div className="h-full w-full">
      <Header white={true} />
      <div className="pt-12 pb-8 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white">
        <a className="flex items-center mb-12">
          <div className="w-16 h-16 mr-4 aspect-square relative">
            <Image
              src={penn}
              fill={true}
              alt="UPenn M&T"
              style={{
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">CS + Wharton</div>
            <div>UPenn M&T</div>
            <div className="text-sm">2022 -</div>
          </div>
        </a>
        <a className="flex items-center mb-12" href="https://pennlabs.org/">
          <div className="w-16 h-16 mr-4 aspect-square relative">
            <Image
              src={labs}
              fill={true}
              alt="Penn Labs"
              style={{
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">iOS & Backend Developer</div>
            <div>Penn Labs</div>
            <div className="text-sm">2023 -</div>
          </div>
        </a>
        <a
          className="flex items-center mb-12"
          href="https://www.pennelectricracing.com/"
        >
          <div className="w-16 h-16 mr-4 aspect-square relative">
            <Image
              src={per}
              fill={true}
              alt="Penn Electric Racing"
              style={{
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">Vehicle Dynamics Engineer</div>
            <div>Penn Electric Racing</div>
            <div className="text-sm">2022 -</div>
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
            <div className="text-lg">Founder</div>
            <div>Focal</div>
            <div className="text-sm">2020 - 2023</div>
          </div>
        </a>
        <a
          className="flex items-center mb-12"
          href="https://hwchronicle.com/101847/news/robotics-team-62b-wins-vex-robotics-world-championship/"
        >
          <div className="w-16 h-16 mr-4 aspect-square relative">
            <Image
              src={vex}
              fill={true}
              alt="VEX 62B"
              style={{
                objectFit: "contain",
                overflow: "hidden",
              }}
            />
          </div>
          <div className="flex flex-col">
            <div className="text-lg">Captain</div>
            <div>VEX 62B</div>
            <div className="text-sm">2018 - 2022</div>
          </div>
        </a>
      </div>
    </div>
  );
}
