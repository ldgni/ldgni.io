import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Performance tracker for Paris Saint-Germain FC",
  },
  {
    name: "Hyper",
    url: "https://hyper-live.vercel.app/",
    description: "Bookmark manager",
  },
  {
    name: "Blitz",
    url: "https://blitz-live.vercel.app/",
    description: "Typing test",
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
            className="hover:bg-accent group block rounded-md border px-4 py-2 transition-colors">
            <div className="flex items-center gap-4">
              <div className="min-w-0">
                <h2 className="font-medium">{project.name}</h2>
                <p className="text-muted-foreground truncate">
                  {project.description}
                </p>
              </div>
              <ExternalLink className="text-muted-foreground group-hover:text-foreground mb-auto ml-auto size-4 shrink-0 transition-colors" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
