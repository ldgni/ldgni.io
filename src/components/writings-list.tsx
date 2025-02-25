import { Link } from "next-view-transitions";

const posts = [
  {
    title: "Create a local account on Windows without bloatware",
    date: "Dec 2024",
    url: "/writings/windows-local-acc-without-bloat",
  },
  {
    title: "Change GRUB boot order",
    date: "Nov 2024",
    url: "/writings/change-grub-boot-order",
  },
  {
    title: "Fix unknown at rule @tailwind warning in VSCode",
    date: "Jun 2024",
    url: "/writings/fix-unknown-at-rule-tailwind",
  },
  {
    title: "Why you should always show scrollbars on macOS",
    date: "Mar 2024",
    url: "/writings/always-show-scrollbars",
  },
  {
    title: "Repair USB drive split into multiple partitions",
    date: "Jan 2024",
    url: "/writings/repair-usb-multiple-partitions",
  },
];

export default function WritingsList() {
  return (
    <ul className="flex flex-col gap-6">
      {posts.map((post) => (
        <li key={post.url}>
          <Link
            href={post.url}
            className="flex flex-col gap-2 rounded-lg border border-neutral-300 bg-neutral-100 p-3 opacity-75 transition-colors duration-300 hover:bg-neutral-200 hover:opacity-100 sm:flex-row sm:justify-between dark:border-neutral-700 dark:bg-neutral-900 dark:hover:bg-neutral-800">
            <h2>{post.title}</h2>
            <time
              className="text-neutral-400 dark:text-neutral-600"
              dateTime={`${post.date.split(" ")[1]}-${String(new Date(post.date).getMonth() + 1).padStart(2, "0")}`}>
              {post.date}
            </time>
          </Link>
        </li>
      ))}
    </ul>
  );
}
