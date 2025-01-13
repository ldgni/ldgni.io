import { Link } from "next-view-transitions";

export default function NotFound() {
  return (
    <>
      <h2>This page doesn&apos;t exist.</h2>
      <span>&rarr; &nbsp;</span>
      <Link
        href="/"
        className="underline underline-offset-4 transition-opacity duration-300 hover:opacity-75">
        Go back home
      </Link>
    </>
  );
}
