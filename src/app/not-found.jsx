import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col gap-4">
      <p>This page could not be found.</p>
      <Link
        href="/"
        className="font-semibold underline-offset-4 hover:underline">
        → Go back to home
      </Link>
    </main>
  );
}
