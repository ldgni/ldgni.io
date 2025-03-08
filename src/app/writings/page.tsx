import Link from "next/link";

export const metadata = {
  title: "Writings",
};

const posts = [
  {
    title: "Create a local account on Windows",
    date: "Dec 2024",
    url: "/writings/create-win-local-acc",
  },
  {
    title: "Change GRUB boot order",
    date: "Nov 2024",
    url: "/writings/change-grub-boot-order",
  },
  {
    title: "Fix unknown at rule @tailwind warning",
    date: "Jun 2024",
    url: "/writings/fix-unknown-at-rule-tailwind",
  },
  {
    title: "Why you should show scrollbars on macOS",
    date: "Mar 2024",
    url: "/writings/why-show-scrollbars-macos",
  },
  {
    title: "Repair USB drive split into multiple partitions",
    date: "Jan 2024",
    url: "/writings/repair-usb-multiple-partitions",
  },
];

export default function WritingsPage() {
  return (
    <ul className="space-y-6">
      {posts.map((post) => (
        <li key={post.url}>
          <Link
            href={post.url}
            className="group flex flex-col gap-2 rounded-lg border border-neutral-200 p-3 transition-colors hover:border-neutral-300 hover:bg-neutral-200 sm:flex-row sm:justify-between dark:border-neutral-800 dark:hover:border-neutral-700 dark:hover:bg-neutral-800">
            <h2 className="truncate font-medium text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100">
              {post.title}
            </h2>
            <time
              className="text-neutral-400 group-hover:text-neutral-500 dark:text-neutral-600"
              dateTime={`${post.date.split(" ")[1]}-${String(new Date(post.date).getMonth() + 1).padStart(2, "0")}`}>
              {post.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
