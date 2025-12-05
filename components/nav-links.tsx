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
    <nav className="font-medium">
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "underline decoration-2 underline-offset-8"
                  : "text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              }>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
