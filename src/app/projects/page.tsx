import { Activity, ExternalLink, IceCream, Keyboard } from "lucide-react";

const projects = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Web app tracking PSG's performance",
    icon: Activity,
  },
  {
    name: "Mood",
    url: "https://mood-live.vercel.app/",
    description: "Brochure website of an ice-cream shop",
    icon: IceCream,
  },
  {
    name: "Caps",
    url: "https://caps-live.vercel.app/",
    description: "E-commerce shop selling keyboards",
    icon: Keyboard,
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
            className="group block rounded-lg border border-neutral-300 px-4 py-2 saturate-0 transition hover:bg-neutral-200 hover:saturate-100 focus:bg-neutral-200 focus:saturate-100 focus:outline-none active:bg-neutral-200 active:saturate-100 dark:border-neutral-700 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800 dark:active:bg-neutral-800">
            <div className="flex items-center gap-4">
              <project.icon className="size-8 scale-95 text-neutral-500 transition group-hover:scale-100 group-hover:text-neutral-700 group-focus:scale-100 group-focus:text-neutral-700 group-active:scale-100 group-active:text-neutral-700 dark:group-hover:text-neutral-300 dark:group-focus:text-neutral-300 dark:group-active:text-neutral-300" />
              <div className="min-w-0">
                <h2 className="font-medium text-neutral-600 group-hover:text-neutral-900 group-focus:text-neutral-900 group-active:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100 dark:group-focus:text-neutral-100 dark:group-active:text-neutral-100">
                  {project.name}
                </h2>
                <p className="truncate text-neutral-500 group-hover:text-neutral-700 group-focus:text-neutral-700 group-active:text-neutral-700 dark:group-hover:text-neutral-300 dark:group-focus:text-neutral-300 dark:group-active:text-neutral-300">
                  {project.description}
                </p>
              </div>
              <ExternalLink className="mb-auto ml-auto size-4 scale-95 text-neutral-500 transition-transform group-hover:scale-100 group-hover:text-neutral-700 group-focus:scale-100 group-focus:text-neutral-700 group-active:scale-100 group-active:text-neutral-700 dark:group-hover:text-neutral-300 dark:group-focus:text-neutral-300 dark:group-active:text-neutral-300" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
