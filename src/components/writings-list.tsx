import { Link } from "next-view-transitions";

const posts = [
  {
    title: "Create a local account on Windows without bloatware",
    url: "/writings/windows-local-acc-without-bloat",
  },
  {
    title: "Change GRUB boot order",
    url: "/writings/change-grub-boot-order",
  },
  {
    title: "Fix unknown at rule @tailwind warning in VSCode",
    url: "/writings/fix-unknown-at-rule-tailwind",
  },
  {
    title: "Why you should always show scrollbars on macOS",
    url: "/writings/always-show-scrollbars",
  },
  {
    title: "Repair USB drive split into multiple partitions",
    url: "/writings/repair-usb-multiple-partitions",
  },
];

export default function WritingsList() {
  return (
    <ul className="ml-4 flex list-disc flex-col gap-6">
      {posts.map((post) => (
        <li
          key={post.url}
          className="font-medium opacity-75 transition hover:scale-[1.02] hover:opacity-100">
          <Link href={post.url}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
}
