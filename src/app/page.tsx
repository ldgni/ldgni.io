import { Github, Mail } from "lucide-react";
import Image from "next/image";

import projects from "@/data/projects.json";
import { Project } from "@/types";

export default function Home() {
  return (
    <div className="container max-w-lg py-4 lg:mt-24">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-extrabold">Luca Di Gianni</h1>
          <p className="text-sm">Web Developer</p>
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
            I&apos;m a web developer and software technician who enjoys building
            digital solutions.
          </p>
          <p>
            I like to keep things simple and functional. I&apos;m always eager
            to learn and solve problems, whether it&apos;s through programming
            or technical troubleshooting.
          </p>
          <p>
            {" "}
            My approach is rooted in minimalism, focusing on clean and efficient
            solutions.
          </p>
        </div>
        <h2 className="mb-4 text-lg font-semibold">Projects</h2>
        <ul className="flex flex-col gap-2">
          {projects.map((project: Project) => (
            <li
              key={project.id}
              className="rounded-xl px-4 py-2 opacity-75 saturate-0 transition-all hover:bg-neutral-200 hover:opacity-100 hover:saturate-100 dark:hover:bg-neutral-900">
              <a href={project.url} target="_blank">
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
      <footer className="container mt-20">
        <small>&copy; 2024 Luca Di Gianni</small>
      </footer>
    </div>
  );
}
