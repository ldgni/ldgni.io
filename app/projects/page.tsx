import { Activity, Archive, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Performance tracker for Paris Saint-Germain",
    icon: Activity,
  },
  {
    name: "Stash",
    url: "https://stash-live.vercel.app/",
    description: "Bookmark management app",
    icon: Archive,
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
            className="group block rounded-md border border-neutral-400 px-4 py-2 text-neutral-600 transition hover:bg-neutral-200 hover:text-neutral-900 dark:border-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100">
            <div className="flex items-center gap-4">
              <project.icon className="size-8 scale-95 transition-transform group-hover:scale-100" />
              <div className="min-w-0">
                <h2 className="font-medium">{project.name}</h2>
                <p className="truncate">{project.description}</p>
              </div>
              <ExternalLink className="mb-auto ml-auto size-4 scale-95 transition-transform group-hover:scale-100" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
