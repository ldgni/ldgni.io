import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Performance tracker for Paris Saint-Germain",
  },
  {
    name: "Stash",
    url: "https://stash-live.vercel.app/",
    description: "Bookmark management app",
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
            className="group block rounded-md border border-neutral-300 px-4 py-2 transition hover:bg-neutral-200 dark:border-neutral-700 dark:hover:bg-neutral-800">
            <div className="flex items-center gap-4">
              <div className="min-w-0">
                <h2>{project.name}</h2>
                <p className="truncate text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
              </div>
              <ExternalLink className="mb-auto ml-auto size-4 shrink-0 scale-95 text-neutral-600 transition group-hover:scale-100 group-hover:text-neutral-900 dark:text-neutral-400 group-hover:dark:text-neutral-100" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
