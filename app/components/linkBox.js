import FeatherIcon from "feather-icons-react";

export default function LinkBox(props) {
  return (
    <a
      className={`glass bg-gradient-to-r from-[${props.left}] to-[${props.right}]`}
      href={props.url}
    >
      <div className="px-4 py-2 rounded-full w-full h-full bg-black flex items-center">
        <FeatherIcon icon={props.icon} size={16} />
        <div className="ml-2 font-medium">{props.name}</div>
      </div>
    </a>
  );
}
