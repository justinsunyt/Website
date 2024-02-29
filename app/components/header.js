import { Twitter, Linkedin, Github, Mail } from "feather-icons-react";

export default function Header() {
  return (
    <div className="pt-8 mx-auto px-6 flex flex-col md:flex-row justify-between items-start text-xl absolute left-0 right-0 text-primary">
      <div>Justin Sun 孙盈廷</div>
      <div className="mt-2 md:mt-0 flex items-center space-x-6">
        <a
          href="https://linkedin.com/in/justinsunyt/"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Linkedin size={22} />
        </a>
        <a
          href="https://github.com/justinsunyt"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Github size={20} />
        </a>
        <a
          href="https://twitter.com/justinsunyt"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Twitter size={20} />
        </a>
        <a
          href="mailto:justinsunyt@gmail.com"
          className="transition hover:opacity-90 hover:-translate-y-0.5"
        >
          <Mail size={22} />
        </a>
      </div>
    </div>
  );
}
