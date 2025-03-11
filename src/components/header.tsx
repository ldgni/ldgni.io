"use client";

import { Github, Mail } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SocialLink from "@/components/ui/social-link";

const socialItems = [
  {
    href: "https://github.com/ldgni",
    ariaLabel: "Luca Di Gianni's GitHub profile",
    Icon: Github,
    isExternal: true,
  },
  {
    href: "mailto:luca.dgni@gmail.com",
    ariaLabel: "Send an email to Luca Di Gianni",
    Icon: Mail,
    isExternal: false,
  },
];

const navItems = [
  { href: "/", label: "About" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="mb-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-lg font-semibold sm:text-xl">Luca Di Gianni</h1>
        <div className="flex gap-2">
          {socialItems.map((link) => (
            <SocialLink
              key={link.href}
              href={link.href}
              ariaLabel={link.ariaLabel}
              Icon={link.Icon}
              isExternal={link.isExternal}
            />
          ))}
        </div>
      </div>
      <nav className="font-medium sm:text-lg">
        <ul className="flex gap-8">
          {navItems.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`${
                  pathname === link.href
                    ? "underline decoration-2 underline-offset-8"
                    : "text-neutral-600 transition-colors hover:text-neutral-900 focus:text-neutral-900 active:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 dark:focus:text-neutral-100 dark:active:text-neutral-100"
                } focus:outline-none`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
