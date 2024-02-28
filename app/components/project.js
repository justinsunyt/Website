export default function Project(props) {
  return (
    <a className="flex items-center mb-12">
      <div className="w-16 h-16 mr-4 aspect-square relative">
        <Image
          src={props.imgSrc}
          fill={true}
          alt={props.imgAlt}
          style={{
            objectFit: "contain",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-lg">
          {props.name} <span className="text-sm">{props.year}</span>
        </div>
        <div>{props.subtitle}</div>
        <div className="text-sm">{props.description}</div>
      </div>
    </a>
  );
}
