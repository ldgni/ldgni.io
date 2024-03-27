import { motion } from "framer-motion";
import { FaEnvelope, FaGithub } from "react-icons/fa";

import projects from "./data/projects.json";
import { Project } from "./types";

export default function App() {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div className="container max-w-lg p-8">
      <motion.header
        className="mb-8 flex items-center justify-between"
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, ease: "easeIn" }}
        variants={variants}>
        <div>
          <h1 className="text-lg font-bold">Luca Di Gianni</h1>
          <p className="font-medium leading-none text-secondary">
            Web Developer
          </p>
        </div>
        <div className="flex gap-2">
          <a
            href="https://github.com/ldgni"
            target="_blank"
            className="flex size-8 items-center justify-center rounded-md text-lg transition-colors hover:bg-accent"
            aria-label="GitHub Profile">
            <FaGithub />
          </a>
          <a
            href="mailto:luca.dgni@gmail.com"
            className="flex size-8 items-center justify-center rounded-md text-lg transition-colors hover:bg-accent"
            aria-label="Send email">
            <FaEnvelope />
          </a>
        </div>
      </motion.header>
      <motion.main
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.75, delay: 0.2, ease: "easeIn" }}
        variants={variants}>
        <h2 className="mb-4 font-mono text-lg">Projects</h2>
        <ul className="flex flex-col gap-4">
          {projects.map((project: Project) => (
            <li key={project.id}>
              <a href={project.url} target="_blank">
                <div className="inline-flex items-center gap-2 transition-all hover:scale-105 hover:opacity-75">
                  &#8599;
                  <div>
                    <h3 className="font-semibold">{project.name}</h3>
                    <p className="text-secondary">{project.description}</p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </motion.main>
    </div>
  );
}
