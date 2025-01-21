import Image from "next/image";

const projects = [
  {
    id: 1,
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Web app tracking PSG's performance",
    category: "web",
    logo: "/images/pulse.png",
  },
  {
    id: 2,
    name: "Mood",
    url: "https://mood-live.netlify.app/",
    description: "Brochure website of an ice-cream shop",
    category: "web",
    logo: "/images/mood.png",
  },
];

export default function ProjectsList() {
  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project) => (
        <li key={project.id}>
          <a
            href={project.url}
            target="_blank"
            className="block rounded-lg px-4 py-2 opacity-75 saturate-0 transition duration-300 hover:bg-neutral-200 hover:opacity-100 hover:saturate-100 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-4">
              <Image
                src={project.logo}
                alt={project.name}
                width={32}
                height={32}
                className="size-8"
              />
              <div>
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>
              </div>
              <div className="ml-auto rounded-full bg-neutral-300 px-2 py-1 text-xs text-neutral-800 dark:bg-neutral-700 dark:text-neutral-300">
                {project.category}
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
