import Image from "next/image";
import LinkBox from "./linkBox";

export default function Project({
  name,
  subtitle,
  description,
  technologies,
  links,
  imgSrc,
}) {
  return (
    <div
      id={name.toLowerCase()}
      className="py-8 flex flex-col-reverse md:flex-row items-center"
    >
      <div className="md:basis-2/3 flex-col">
        <div className="text-3xl">{name}</div>
        <div className="text-xl text-gray-400 mb-4">{subtitle}</div>
        <div>{description}</div>
        <div className="mt-4 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <div className="px-2 py-0.5 border rounded-full text-sm border border-secondary">
              {tech}
            </div>
          ))}
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {links.map((link) => (
            <LinkBox
              name={link.name}
              url={link.url}
              icon={link.icon}
              left={link.left}
              right={link.right}
            />
          ))}
        </div>
      </div>
      <div className="w-full md:basis-1/3 h-auto aspect-[16/9] mb-4 md:mb-0 ml-0 md:ml-8 relative border border-transparent rounded-[2rem] bg-[linear-gradient(to_right,#d78dea,#2d84c8,#d78dea)] bg-[length:200%_auto] animate-gradient">
        <Image
          src={imgSrc}
          fill={true}
          alt={name}
          style={{
            objectFit: "cover",
            overflow: "hidden",
            borderRadius: "2rem",
          }}
        />
      </div>
    </div>
  );
}
