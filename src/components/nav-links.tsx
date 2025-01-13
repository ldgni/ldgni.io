"use client";

import { usePathname } from "next/navigation";
import { Link } from "next-view-transitions";

const navItems = [
  { href: "/", label: "About" },
  { href: "/writings", label: "Writings" },
  { href: "/projects", label: "Projects" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
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
  );
}
