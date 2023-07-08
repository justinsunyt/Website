import Link from "next/link";

export default function Hobbies() {
  return (
    <div className="h-full container mx-auto max-w-screen-lg px-6 flex flex-col justify-center items-start">
      <div className="mb-2">
        <Link href="/">{"<"} Back</Link>
      </div>
      <a className="mb-2" href="https://www.instagram.com/bustinphoto/">
        Photography - @bustinphoto
      </a>
      <a className="mb-2" href="https://www.instagram.com/bustinmobile/">
        Car - @bustinmobile
      </a>
      <a
        className="mb-2"
        href="https://open.spotify.com/user/21ot4oj3gvnedtvlhzlfetgoq?si=61c5c3c6d6fc4beb"
      >
        Music - KR&B, J-rock, jazz, classical
      </a>
      <a className="mb-2" href="https://discord.gg/EeU7U5y7">
        Gaming - UPenn VALORANT
      </a>
      <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
        Gym - 160 BW, 185 bench
      </a>
    </div>
  );
}
