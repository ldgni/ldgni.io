import { Github, Mail } from "lucide-react";
import Image from "next/image";

import projects from "@/data/projects.json";
import { Project } from "@/types";

export default function Home() {
  return (
    <div className="container max-w-lg py-4 sm:py-8 md:py-12 lg:py-16 xl:py-20">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold">Luca Di Gianni</h1>
          <p className="text-sm">Software Technician</p>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/ldgni"
            target="_blank"
            aria-label="Luca Di Gianni's GitHub profile"
            className="rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-300 hover:text-dark dark:hover:bg-neutral-800 dark:hover:text-light">
            <Github />
          </a>
          <a
            href="mailto:luca.dgni@gmail.com"
            aria-label="Send an email to Luca Di Gianni"
            className="rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-300 hover:text-dark dark:hover:bg-neutral-800 dark:hover:text-light">
            <Mail />
          </a>
        </div>
      </header>
      <main>
        <div className="mb-8 flex flex-col gap-4">
          <p>
            I&apos;m a software technician and frontend developer passionate
            about crafting digital solutions.
          </p>
          <p>
            I prioritize simplicity and functionality, constantly seeking to
            expand my knowledge and tackle challenges, be it through programming
            or technical problem-solving.
          </p>
        </div>
        <h2 className="mb-4 text-lg font-semibold">Projects</h2>
        <ul className="flex flex-col gap-4">
          {projects.map((project: Project) => (
            <li key={project.id}>
              <a
                href={project.url}
                target="_blank"
                className="block rounded-xl px-4 py-2 opacity-75 saturate-0 transition-all hover:bg-neutral-200 hover:opacity-100 hover:saturate-100 dark:hover:bg-neutral-900">
                <div className="flex items-center gap-4">
                  <Image
                    src={project.logo}
                    alt={project.name}
                    width={32}
                    height={32}
                  />
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-neutral-700 dark:text-neutral-300">
                      {project.description}
                    </p>
                  </div>
                  <div className="ml-auto rounded-full bg-neutral-300 px-2 py-1 text-xs text-neutral-800 dark:bg-neutral-800 dark:text-neutral-300">
                    {project.category}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </main>
      <footer className="container mt-8">
        <small>&copy; 2024 Luca Di Gianni</small>
      </footer>
    </div>
  );
}
