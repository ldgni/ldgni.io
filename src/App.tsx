import { motion } from "framer-motion";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import { HiArrowUpRight } from "react-icons/hi2";

export default function App() {
  const projects = [
    {
      id: 1,
      name: "workit",
      url: "https://ldgni.github.io/workit-landing-page/",
      description: "A landing page for a data app",
    },
    {
      id: 2,
      name: "equalizer",
      url: "https://ldgni.github.io/equalizer-landing-page/",
      description: "A landing page for a music app",
    },
    {
      id: 3,
      name: "pod",
      url: "https://ldgni.github.io/pod-request-access-landing-page/",
      description: "A landing page for a podcast app",
    },
  ];

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <div className="container max-w-xl p-8">
        <motion.header
          className="mb-8 flex items-center justify-between"
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, ease: "easeIn" }}
          variants={variants}>
          <div>
            <h1 className="text-lg font-bold">Luca Di Gianni</h1>
            <p>Web Developer</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/ldgni" target="_blank">
              <FaGithub className="text-lg hover:animate-spin" />
            </a>
            <a href="mailto:luca.dgni@gmail.com">
              <FaEnvelope className="text-lg hover:animate-spin" />
            </a>
          </div>
        </motion.header>
        <motion.main
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.75, delay: 0.25, ease: "easeIn" }}
          variants={variants}>
          <h2 className="mb-4 font-mono text-lg">Projects</h2>
          <ul className="flex flex-col gap-4">
            {projects.map((project) => (
              <li key={project.id}>
                <a
                  href={project.url}
                  target="_blank"
                  className="mb-2 inline-flex items-center gap-1 font-medium underline decoration-accent underline-offset-4 transition hover:decoration-primary">
                  {project.name}
                  <HiArrowUpRight className="text-accent" />
                </a>
                <p className="text-secondary">{project.description}</p>
              </li>
            ))}
          </ul>
        </motion.main>
      </div>
    </>
  );
}
