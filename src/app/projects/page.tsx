import { Activity, ExternalLink, IceCream, Keyboard, Link } from "lucide-react";

const projects = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Performance tracker for Paris Saint-Germain",
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
  {
    name: "Hyper",
    url: "https://hyper-live.vercel.app/",
    description: "Bookmark management app",
    icon: Link,
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
            className="group block rounded-md border border-neutral-700 px-4 py-2 text-neutral-500 transition hover:bg-neutral-800 hover:text-neutral-300">
            <div className="flex items-center gap-4">
              <project.icon className="size-8 scale-95 transition-transform group-hover:scale-100" />
              <div className="min-w-0">
                <h2 className="font-medium text-neutral-400 group-hover:text-neutral-100">
                  {project.name}
                </h2>
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
