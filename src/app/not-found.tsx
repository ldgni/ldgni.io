import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mb-8 flex flex-col gap-4">
      <p>This page could not be found.</p>
      <p className="flex gap-2">
        <Link href="/" className="group font-semibold">
          → Go back to home
          <span className="block h-0.5 max-w-0 bg-neutral-500 duration-500 group-hover:max-w-full"></span>
        </Link>
      </p>
    </main>
  );
}
