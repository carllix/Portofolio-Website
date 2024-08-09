import CardProject from "./CardProject";

interface Project {
  name: string;
  desc: string;
  image: string;
  techStacks: string[];
  url: string;
}

const projects: Project[] = [
  {
    name: "To Do List App",
    desc: "I developed a To-Do List App, a website where users can note down tasks they need to complete. This web application was created to fulfill a school assignment for the Information division of OSKM 2024, specifically focusing on frontend development. The goal of this project is to help users organize and manage their tasks efficiently.",
    image: "To-Do-List.png",
    techStacks: ["Next.js", "Tailwind CSS", "Typescript"],
    url: "https://mini-project-fe-information-three.vercel.app/",
  },
  {
    name: "StudyPeeps",
    desc: "StudyPeeps is a project aimed at developing an educational application with features focused on addressing challenges related to learning motivation, literacy, and discipline. The interface design of this application was created by my team and me to fulfill the project assignment for the Social Computing course.",
    image: "StudyPeeps.png",
    techStacks: ["Figma"],
    url: "https://www.figma.com/proto/7wmZy647dZfYad3aIYLkph/KOMMAS?node-id=1-3&t=pr1ebyk7pZPOP3do-1",
  },
  {
    name: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam repudiandae excepturi dolore quos dolorem ex blanditiis labore aspernatur ducimus ea exercitationem beatae optio suscipit. Quod culpa ad cum corporis.",
    image: "ComingSoon.jpg",
    techStacks: ["Soon"],
    url: "https://www.figma.com/proto/7wmZy647dZfYad3aIYLkph/KOMMAS?node-id=1-3&t=pr1ebyk7pZPOP3do-1",
  },
  {
    name: "Coming Soon",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, totam repudiandae excepturi dolore quos dolorem ex blanditiis labore aspernatur ducimus ea exercitationem beatae optio suscipit. Quod culpa ad cum corporis.",
    image: "ComingSoon.jpg",
    techStacks: ["Soon"],
    url: "https://www.figma.com/proto/7wmZy647dZfYad3aIYLkph/KOMMAS?node-id=1-3&t=pr1ebyk7pZPOP3do-1",
  },
];
export default function ProjectsSection() {
  return (
    <div
      className="w-11/12 mx-auto text-center pt-20 px-5 md:px-0"
      id="projects"
    >
      <p className="text-3xl font-black">
        My <span className="text-[rgb(135,196,182)]">Projects</span>
      </p>
      <div className="my-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {projects.map((project) => (
          <CardProject
            name={project.name}
            desc={project.desc}
            image={project.image}
            techStacks={project.techStacks}
            url={project.url}
            key={project.name}
          />
        ))}
      </div>
    </div>
  );
}
