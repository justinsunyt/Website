import Image from "next/image";
import Header from "../components/header";
import capybara from "../../images/Capybara.png";
import osus from "../../images/osus.png";
import vivi from "../../images/vivi.jpg";
import vex from "../../images/62.png";
import floatr from "../../images/floatr.png";

export default function Projects() {
  return (
    <div className="h-full w-full">
      <Header white={true} />
      <div className="mt-24 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white">
        <a className="flex mb-8">
          <div className="w-20 h-20 mr-4 aspect-square relative">
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
            <div className="text-lg">Capybara.AI</div>
            <div>Ccoming soon</div>
            <div>2023</div>
          </div>
        </a>
        <a className="flex mb-8" href="https://github.com/justinsunyt/osus">
          <div className="w-20 h-20 mr-4 aspect-square relative">
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
            <div className="text-lg">osus</div>
            <div>osu! but sus</div>
            <div>2022</div>
          </div>
        </a>
        <a className="flex mb-8" href="https://github.com/justinsunyt/vivi">
          <div className="w-20 h-20 mr-4 aspect-square relative">
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
            <div className="text-lg">vivi</div>
            <div>Social alarm clock</div>
            <div>2021</div>
          </div>
        </a>
        <a
          className="flex mb-8"
          href="https://www.youtube.com/watch?v=39aLnCRQJ8A"
        >
          <div className="w-20 h-20 mr-4 aspect-square relative">
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
            <div className="text-lg">BuffMobile</div>
            <div>World champion robot</div>
            <div>2021</div>
          </div>
        </a>
        <a className="flex mb-8" href="https://github.com/justinsunyt/floatr">
          <div className="w-20 h-20 mr-4 aspect-square relative">
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
            <div className="text-lg">floatr</div>
            <div>Student community forum</div>
            <div>2020</div>
          </div>
        </a>
      </div>
    </div>
  );
}
