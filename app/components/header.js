import Link from "next/link";
import { Twitter, Linkedin, GitHub, Mail } from "react-feather";

export default function Header(props) {
  return (
    <div
      className={`pt-12 container mx-auto max-w-screen-xl px-6 flex flex-col md:flex-row justify-between items-start relative mb-2 md:mb-0 ${
        props.white ? "text-white" : "text-black"
      }`}
    >
      <Link href="/">Justin Sun 孙盈廷</Link>
      <div className="mb-2 md:mb-0 md:absolute md:transform md:-translate-x-1/2 md:left-1/2">
        <Link href="/photos">Photos</Link> |{" "}
        <Link href="/experiences">Experiences</Link> |{" "}
        <Link href="/projects">Projects</Link>
      </div>
      <div className="flex items-center">
        <a href="https://twitter.com/justinsunyt">
          <Twitter size={16} className="mr-2" />
        </a>
        <a href="https://linkedin.com/in/justinsunyt/">
          <Linkedin size={18} className="mx-2" />
        </a>
        <a href="https://github.com/justinsunyt">
          <GitHub size={16} className="mx-2" />
        </a>
        <a href="mailto:justinsunyt@gmail.com">
          <Mail size={18} className="ml-2" />
        </a>
      </div>
    </div>
  );
}
