import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-4">
      <p>This page could not be found.</p>
      <div className="flex">
        <Link href="/" className="group font-semibold">
          → Go back to home
          <span className="block h-0.5 max-w-0 bg-neutral-500 duration-300 group-hover:max-w-full"></span>
        </Link>
      </div>
    </main>
  );
}
