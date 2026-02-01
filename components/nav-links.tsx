"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    url: "/",
    name: "About",
  },
  {
    url: "/projects",
    name: "Projects",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="font-mono font-medium lowercase">
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "underline decoration-2 underline-offset-8"
                  : "text-muted-foreground hover:text-foreground active:text-foreground focus-visible:text-foreground transition-colors"
              }>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
