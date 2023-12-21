import Link from "next/link";

export default function Experiences() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6 flex flex-col justify-center items-start">
      <div className="mb-2">
        <Link href="/">{"<"} Back</Link>
      </div>
      <div className="w-full flex justify-between mb-2">
        <a className="hidden sm:inline" href="https://pennlabs.org/">
          iOS Developer @ Penn Labs
        </a>
        <a className="inline sm:hidden" href="https://pennlabs.org/">
          Penn Labs
        </a>
        <span>2023 -</span>
      </div>
      <div className="w-full flex justify-between mb-2">
        <a
          className="hidden sm:inline"
          href="https://www.pennelectricracing.com/"
        >
          Mechanical Engineer @ Penn Electric Racing
        </a>
        <a
          className="inline sm:hidden"
          href="https://www.pennelectricracing.com/"
        >
          Penn Electric Racing
        </a>
        <span>2022 -</span>
      </div>
      <div className="w-full flex justify-between mb-2">
        <a className="hidden sm:inline" href="https://www.grcglobalgroup.com/">
          Associate Consultant @ GRC
        </a>
        <a className="inline sm:hidden" href="https://www.grcglobalgroup.com/">
          GRC
        </a>
        <span>2022 - 2023</span>
      </div>
      <div className="w-full flex justify-between mb-2">
        <a className="hidden sm:inline" href="https://getfocal.app">
          Founder @ Focal
        </a>
        <a className="inline sm:hidden" href="https://getfocal.app">
          Focal
        </a>
        <span>2020 - 2023</span>
      </div>
      <div className="w-full flex justify-between">
        <a
          className="hidden sm:inline"
          href="https://hwchronicle.com/101847/news/robotics-team-62b-wins-vex-robotics-world-championship/"
        >
          Captain @ VEX 62B
        </a>
        <a
          className="inline sm:hidden"
          href="https://hwchronicle.com/101847/news/robotics-team-62b-wins-vex-robotics-world-championship/"
        >
          VEX 62B
        </a>
        <span>2018 - 2022</span>
      </div>
    </div>
  );
}
