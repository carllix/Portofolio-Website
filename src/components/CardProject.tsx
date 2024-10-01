import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Project {
  name: string;
  desc: string;
  image: string;
  techStacks: string[];
  url: string;
}

export default function CardProject({
  name,
  desc,
  image,
  techStacks,
  url,
}: Project) {
  return (
    <div className="w-full bg-[#121212] rounded-xl flex flex-col">
      <div className="h-48 overflow-hidden">
        <div className="rounded-xl relative overflow-hidden w-full h-full">
          <Image
            src={`/Projects/${image}`}
            alt="To-Do-List Project"
            layout="fill"
            className="w-full h-full object-top hover:object-bottom transition-all duration-1000"
          />
        </div>
      </div>
      <div className="flex flex-col flex-grow text-start p-6">
        <p className="font-bold text-lg">{name}</p>
        <p className="mt-2 text-sm font-thin text-justify">{desc}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {techStacks.map((techStack: string) => (
            <p
              key={techStack}
              className="text-sm border-[1px] border-[rgb(135,196,182)] text-[rgb(135,196,182)] px-2 py-1 rounded-xl"
            >
              {techStack}
            </p>
          ))}
        </div>
        <div className="mt-auto pt-4">
          <Button size="sm" className="text-black">
            <Link href={url} target="_blank">
              View Project
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
