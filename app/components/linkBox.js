import FeatherIcon from "feather-icons-react";

export default function LinkBox({ name, url, icon, left, right }) {
  return url ? (
    <a
      className={`border border-transparent rounded-full transition duration-150 hover:-translate-y-1 bg-[linear-gradient(to_right,${left},${right},${left})] bg-[length:200%_auto] animate-gradient`}
      href={url}
    >
      <div className="px-4 py-2 rounded-full w-full h-full bg-black flex items-center">
        <FeatherIcon icon={icon} size={16} />
        <div className="ml-2 font-medium">{name}</div>
      </div>
    </a>
  ) : (
    <div
      className={`border border-transparent rounded-full transition duration-150 bg-[linear-gradient(to_right,${left},${right},${left})] bg-[length:200%_auto] animate-gradient`}
    >
      <div className="px-4 py-2 rounded-full w-full h-full bg-black flex items-center">
        <FeatherIcon icon={icon} size={16} />
        <div className="ml-2 font-medium">{name}</div>
      </div>
    </div>
  );
}
