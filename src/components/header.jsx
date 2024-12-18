import { BookText, Github, Mail } from "lucide-react";

export default function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-extrabold">Luca Di Gianni</h1>
        <p className="text-sm">IT Technician</p>
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
        <a
          href="https://writings.ldgni.io"
          target="_blank"
          aria-label="Luca Di Gianni's writings"
          className="rounded-xl p-2 text-neutral-500 transition-colors hover:bg-neutral-300 hover:text-dark dark:hover:bg-neutral-800 dark:hover:text-light">
          <BookText />
        </a>
      </div>
    </header>
  );
}
