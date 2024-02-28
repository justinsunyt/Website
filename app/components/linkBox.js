import FeatherIcon from "feather-icons-react";

export default function LinkBox(props) {
  return (
    <a
      className={`border border-transparent rounded-full transition duration-150 hover:-translate-y-1 bg-[linear-gradient(to_right,${props.left},${props.right},${props.left})] bg-[length:200%_auto] animate-gradient`}
      href={props.url}
    >
      <div className="px-4 py-2 rounded-full w-full h-full bg-black flex items-center">
        <FeatherIcon icon={props.icon} size={16} />
        <div className="ml-2 font-medium">{props.name}</div>
      </div>
    </a>
  );
}
