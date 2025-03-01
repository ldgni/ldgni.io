import { ExternalLink } from "lucide-react";
import Image from "next/image";

import moodLogo from "../../public/images/mood.png";
import pulseLogo from "../../public/images/pulse.png";

const projects = [
  {
    id: 1,
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Web app tracking PSG's performance",
    logo: pulseLogo,
  },
  {
    id: 2,
    name: "Mood",
    url: "https://mood-live.vercel.app/",
    description: "Brochure website of an ice-cream shop",
    logo: moodLogo,
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
            className="block rounded-lg border border-neutral-300 bg-neutral-100 px-4 py-2 opacity-75 saturate-0 transition duration-300 hover:bg-neutral-200 hover:opacity-100 hover:saturate-100 dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-4">
              <Image
                src={project.logo}
                alt={project.name}
                className="logo size-8"
              />
              <div>
                <h3 className="font-semibold">{project.name}</h3>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {project.description}
                </p>
              </div>
              <div className="mb-auto ml-auto">
                <ExternalLink className="external size-4 sm:size-5" />
              </div>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
