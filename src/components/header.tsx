import { Github, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
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
    </header>
  );
}
