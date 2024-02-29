import LinkBox from "./linkBox";

export default function Connect() {
  return (
    <div
      id="connect"
      className="pt-16 md:pt-24 pb-16 container mx-auto max-w-screen-xl px-6 flex flex-col justify-center items-start text-white"
    >
      <div className="text-6xl md:text-8xl font-bold">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#d78dea] to-[#2d84c8]">
          Connect
        </span>{" "}
        🔗
      </div>
      <div className="mt-8 flex gap-x-2 gap-y-2 flex-wrap">
        <LinkBox
          name="Twitter"
          url="https://twitter.com/justinsunyt"
          icon="twitter"
          left="#d78dea"
          right="#9c8ade"
        />
        <LinkBox
          name="Email"
          url="mailto:justinsunyt@gmail.com"
          icon="mail"
          left="#9c8ade"
          right="#6387d3"
        />
      </div>
    </div>
  );
}
