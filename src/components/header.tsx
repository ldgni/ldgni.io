"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { url: "/", name: "About" },
  { url: "/projects", name: "Projects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-8">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold">Luca Di Gianni</h1>
        <div className="flex gap-2">
          <a
            href="https://github.com/ldgni"
            target="_blank"
            className="rounded p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100">
            <Github />
          </a>
          <a
            href="mailto:luca.dgni@gmail.com"
            className="rounded p-2 text-neutral-400 transition-colors hover:bg-neutral-800 hover:text-neutral-100">
            <Mail />
          </a>
        </div>
      </div>
      <nav className="text-lg font-medium">
        <ul className="flex gap-8">
          {navLinks.map((link) => (
            <li key={link.url}>
              <Link
                href={link.url}
                className={`${
                  pathname === link.url
                    ? "underline decoration-2 underline-offset-8"
                    : "text-neutral-400 transition-colors hover:text-neutral-100"
                } `}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
