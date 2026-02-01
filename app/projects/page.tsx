import { ExternalLink } from "lucide-react";

const projectItems = [
  {
    name: "Pulse",
    url: "https://pulse-live.vercel.app/",
    description: "Performance tracker for Paris Saint-Germain FC",
  },
  {
    name: "Hyper",
    url: "https://hyper-live.vercel.app/",
    description: "Bookmark manager to store web links",
  },
  {
    name: "Scene",
    url: "https://scene-live.vercel.app/",
    description: "Movie watchlist collection",
  },
];

export default function ProjectsPage() {
  return (
    <ul className="space-y-4">
      {projectItems.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            className="group hover:bg-muted active:bg-muted focus-visible:bg-muted block rounded-lg border px-4 py-2 transition-colors">
            <div className="flex gap-4">
              <div className="min-w-0">
                <h2 className="font-medium">{item.name}</h2>
                <p className="text-muted-foreground truncate">
                  {item.description}
                </p>
              </div>
              <ExternalLink className="text-muted-foreground group-hover:text-foreground group-active:text-foreground group-focus-visible:text-foreground ml-auto size-4 shrink-0 transition-colors" />
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}
