export default function Project(props) {
  return (
    <a className="flex items-center mb-12">
      <div className="w-16 h-16 mr-4 aspect-square relative">
        <Image
          src={capybara}
          fill={true}
          alt="Capybara.AI"
          style={{
            objectFit: "contain",
            overflow: "hidden",
          }}
        />
      </div>
      <div className="flex flex-col">
        <div className="text-lg">
          Capybara.AI <span className="text-sm">2023</span>
        </div>
        <div>AI college counselor</div>
        <div className="text-sm">GPT-4, Next.js, FastAPI, Pinecone</div>
      </div>
    </a>
  );
}
