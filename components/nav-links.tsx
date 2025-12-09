"use client";

import { Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";

const geistMono = Geist_Mono({ subsets: ["latin"] });

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
    <nav className={`font-medium ${geistMono.className} lowercase`}>
      <ul className="flex gap-8">
        {navItems.map((item) => (
          <li key={item.url}>
            <Link
              href={item.url}
              className={
                pathname === item.url
                  ? "underline decoration-2 underline-offset-8"
                  : "text-muted-foreground hover:text-foreground"
              }>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
