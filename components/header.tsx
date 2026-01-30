import { Github, Mail } from "lucide-react";

import NavLinks from "@/components/nav-links";

const contactItems = [
  {
    url: "https://github.com/ldgni",
    label: "Visit Luca Di Gianni's GitHub profile",
    icon: Github,
  },
  {
    url: "mailto:luca.dgni@gmail.com",
    label: "Send an email to Luca Di Gianni",
    icon: Mail,
  },
];

export default function Header() {
  return (
    <header className="mb-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-lg font-semibold">Luca Di Gianni</h1>
        <div className="flex gap-2">
          {contactItems.map((item) => (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              aria-label={item.label}
              className="text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg p-2 transition-colors">
              <item.icon />
            </a>
          ))}
        </div>
      </div>
      <NavLinks />
    </header>
  );
}
