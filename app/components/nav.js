import Link from "next/link";

export default function Nav() {
  return (
    <div
      id="home"
      className="fixed bottom-6 md:bottom-full md:top-6 transform -translate-x-1/2 left-1/2 text-white text-sm md:text-lg z-10"
    >
      <div className="rounded-full flex space-x-4 border border-transparent bg-[linear-gradient(to_right,#d78dea,#2d84c8,#d78dea)] bg-[length:200%_auto] animate-gradient">
        <div className="px-6 rounded-full w-full h-full bg-black flex items-center space-x-6">
          <Link
            href="#home"
            className="hover:-translate-y-1 transition duration-150 p-2"
          >
            Home
          </Link>
          <Link
            href="#about"
            className="hover:-translate-y-1 transition duration-150 p-2"
          >
            About
          </Link>
          <Link
            href="#projects"
            className="hover:-translate-y-1 transition duration-150 p-2"
          >
            Projects
          </Link>
          <Link
            href="#photos"
            className="hover:-translate-y-1 transition duration-150 p-2"
          >
            Photos
          </Link>
        </div>
      </div>
    </div>
  );
}
