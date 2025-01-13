import { Link } from "next-view-transitions";

const posts = [
  {
    title: "Change GRUB boot order",
    url: "/writings/posts/change-grub-boot-order",
  },

  {
    title: "Always show scrollbars on macOS",
    url: "/writings/posts/always-show-scrollbars",
  },
  {
    title: "Fix unknown at rule @tailwind",
    url: "/writings/posts/fix-unknown-at-rule-tailwind",
  },
  {
    title: "Fix wrong time when dual booting",
    url: "/writings/posts/fix-wrong-time-dual-boot",
  },
  {
    title: "Fix USB drive split into multiple partitions",
    url: "/writings/posts/fix-usb-multiple-partitions",
  },
  {
    title: "macOS development environment setup",
    url: "/writings/posts/web-dev-setup",
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
