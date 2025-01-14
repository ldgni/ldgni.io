"use client";

import { Github, Mail } from "lucide-react";
import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const navItems = [
  { href: "/", label: "About" },
  { href: "/writings", label: "Writings" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-lg font-extrabold sm:text-xl">Luca Di Gianni</h1>
          <p>IT Technician</p>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/ldgni"
            target="_blank"
            aria-label="Luca Di Gianni's GitHub profile"
            className="rounded-lg p-1 text-neutral-500 transition-colors duration-300 hover:bg-neutral-200 hover:text-dark sm:p-2 dark:hover:bg-neutral-800 dark:hover:text-light">
            <Github />
          </a>
          <a
            href="mailto:luca.dgni@gmail.com"
            aria-label="Send an email to Luca Di Gianni"
            className="rounded-lg p-1 text-neutral-500 transition-colors duration-300 hover:bg-neutral-200 hover:text-dark sm:p-2 dark:hover:bg-neutral-800 dark:hover:text-light">
            <Mail />
          </a>
        </div>
      </div>
      <nav className="mb-8 font-semibold sm:text-lg">
        <ul className="flex gap-8">
          {navItems.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "underline decoration-dark underline-offset-8 dark:decoration-light"
                    : "opacity-75 transition-opacity hover:opacity-100"
                } `}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
