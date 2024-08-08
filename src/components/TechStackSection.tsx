import Image from "next/image";

interface TechStack {
  name: string;
  src: string;
}

const techStacks: TechStack[] = [
  { name: "HTML", src: "/TechStack/html-5.svg" },
  { name: "CSS", src: "/TechStack/css-3.svg" },
  { name: "JavaScript", src: "/TechStack/javascript.svg" },
  { name: "TypeScript", src: "/TechStack/typescript.svg" },
  { name: "Tailwind CSS", src: "/TechStack/tailwind.svg" },
  { name: "React.js", src: "/TechStack/react.svg" },
  { name: "Next.js", src: "/TechStack/next-js.svg" },
  { name: "Git", src: "/TechStack/git.svg" },
  { name: "Github", src: "/TechStack/github.svg" },
  { name: "Figma", src: "/TechStack/figma.svg" },
  { name: "Python", src: "/TechStack/python.svg" },
  { name: "Haskell", src: "/TechStack/haskell.svg" },
];
const CardTechStack = ({ name, src }: TechStack) => {
  return (
    <div className="bg-[#121212] items-center mx-auto p-3 rounded-xl relative w-24 h-24 group">
      <Image
        src={src}
        alt={name}
        width={50}
        height={50}
        className="w-full h-full transition-transform duration-300 group-hover:scale-105 group-hover:brightness-75"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white">{name}</p>
      </div>
    </div>
  );
}
export default function TechStackSection() {
  return (
    <div className="w-11/12 mx-auto mt-20 text-center">
      <p className="text-3xl font-black">
        My <span className="text-[rgb(135,196,182)]">Tech Stack</span>
      </p>
      <div className="my-8 grid grid-cols-8 gap-6">
        {techStacks.map((techStack) => (
          <CardTechStack
            name={techStack.name}
            src={techStack.src}
            key={techStack.name}
          />
        ))}
      </div>
    </div>
  );
}
