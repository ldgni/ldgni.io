import { Link } from "react-router";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="sr-only">Starter Template Vite</h1>
      <span className="text-6xl font-bold text-red-500 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:text-7xl md:text-8xl">
        404
      </span>
      <span className="text-6xl font-bold text-blue-500 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:text-7xl md:text-8xl">
        Not
      </span>
      <span className="text-6xl font-bold text-orange-500 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:text-7xl md:text-8xl">
        Found
      </span>
      <Link
        to="/"
        className="mt-4 rounded-full border-2 border-neutral-600 px-4 py-2 text-2xl text-neutral-600 transition duration-300 hover:border-neutral-600 hover:bg-neutral-600 hover:text-slate-200 sm:mt-6 sm:text-3xl md:mt-8 md:text-4xl">
        Home
      </Link>
    </div>
  );
}
