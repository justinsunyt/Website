import Link from "next/link";

export default function Projects() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6 flex flex-col justify-center items-start">
      <div className="mb-2">
        <Link href="/">{"<"} Back</Link>
      </div>
      <a className="mb-2">Stealth - coming soon</a>
      <a className="mb-2" href="https://github.com/justinsunyt/osus">
        osus - osu! but sus
      </a>
      <a className="mb-2" href="https://github.com/justinsunyt/vivi">
        vivi - social alarm clock
      </a>
      <a className="mb-2" href="https://www.youtube.com/watch?v=39aLnCRQJ8A">
        BuffMobile - world champion robot
      </a>
      <a href="https://github.com/justinsunyt/floatr/">
        floatr - student community forum
      </a>
    </div>
  );
}
