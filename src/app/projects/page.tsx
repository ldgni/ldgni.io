import { ExternalLink } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Projects",
};

const projects = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Web app tracking PSG's performance",
    logo: "/images/pulse.png",
  },
  {
    name: "Mood",
    url: "https://mood-live.vercel.app/",
    description: "Brochure website of an ice-cream shop",
    logo: "/images/mood.png",
  },
];

export default function ProjectsPage() {
  return (
    <ul className="space-y-4">
      {projects.map((project) => (
        <li key={project.url}>
          <a
            href={project.url}
            target="_blank"
            className="group block rounded-lg border border-neutral-200 px-3 py-2 text-neutral-600 saturate-0 transition hover:border-neutral-300 hover:bg-neutral-200 hover:text-neutral-900 hover:saturate-100 dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
            <div className="flex items-center gap-4">
              <Image
                src={project.logo}
                alt={project.name}
                width={32}
                height={32}
                className="size-8 transition-transform group-hover:scale-105"
              />
              <div className="min-w-0">
                <h2 className="font-medium">{project.name}</h2>
                <p className="truncate">{project.description}</p>
              </div>
              <ExternalLink className="mb-auto ml-auto size-4 transition-transform group-hover:scale-105" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
